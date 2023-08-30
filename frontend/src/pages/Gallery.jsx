import React, { useEffect, useState } from "react";
import "./css/Gallery.css";
import Masonry from "react-masonry-css";
import nasaData from "../database/data/nasa-data.json";
import GalleryCard from "../components/GalleryCard";
import YearBtn from "../components/YearBtn";

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [yearSelect, setYearSelect] = useState("2023");
  const [photosData, setPhotosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [totalItems, setTotalItems] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  useEffect(() => {
    const fetchData = [];
    nasaData?.map((data) => {
      const photoYear = data.date.split("-");
      if (photoYear[0] === yearSelect) {
        fetchData.push(data);
      }
    });
    setPhotosData(fetchData);
    setTotalItems(fetchData.length);
    setPhotosData(fetchData.slice(0, itemsPerPage * currentPage));
  }, [yearSelect, currentPage]);

  const changeYear = (event) => {
    setYearSelect(event.target.value);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [photosData, totalItems, currentPage, loadingMore]);

  const handleScroll = () => {
    if (loadingMore) {
      return;
    }

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loadingMore
    ) {
      if (photosData.length < totalItems) {
        setLoadingMore(true);
        setTimeout(() => {
          setLoadingMore(false);
          setCurrentPage(currentPage + 1);
        }, 2000);
      }
    }
  };

  return (
    <div className="Gallery">
      <div className="year-button">
        <YearBtn changeYear={changeYear} yearSelect={yearSelect} />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Masonry
          breakpointCols={5}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photosData?.map((data, index) => (
            <GalleryCard key={index} data={data}></GalleryCard>
          ))}
        </Masonry>
      )}
    </div>
  );
}

export default Gallery;
