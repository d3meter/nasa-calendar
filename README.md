## NASA calendar
Solo react project.
[Click here to open](https://nasa-calendar.web.app)

**Start**
*cd frontend* ==> *npm start*.

**Description**
I used [NASA-API](https://api.nasa.gov/) to build my database. The landing (main) page shows the latest image or video of the day from NASA. Clicking on the calendar icon in the header takes the user to the calendar page. The default configuration is the current month, but the user can toggle between the desired years and months. As the data is retrieved directly from the database, the loading time is significantly reduced. Clicking on a day brings up its detail page. There is more information about the current media and clicking on it opens the HD content in a new tab. Firebase is used for authentication, supplemented by some validation features such as password and email format checking. Authenticated users can save and manage favourite day cards in the Favourites menu. On the Gallery page, users can select a year and browse through the year's images. The infinite scroll function is designed to provide a more pleasant and uninterrupted viewing experience.

**Features integrated**
 - [x] React Router
	 - [x] Main page
		- [x] Favorites (combined with auth and firestore)
			 - [ ] Error, response feedback handling on UI	
	 - [x] Calendar page
		 - [x] Month view
			 - [x] Last selected year, month save/load (local storage)
		 - [x] Day card (day detail)
			 - [x] Clickable images ==> open in new tab
	 - [x] Login page
	 - [x] Registration page
 - [x] Firebase authentication (inc. validations: invalid password, email etc.)
	 - [x] Registration
	 - [x] Login
 - [x] Firestore database
 - [x] Firebase hosting
 - [x] JSON database (using JSON loader)
 - [x] Auto. filled calendar look
 - [x] Desing with SCSS and Material UI, Bootstrap
 - [x] Spinner while loading data
 - [ ] Auto. data update:
	 - [ ] V1: via REST request (local backend server)
	 - [ ] V2: via Firebase

**Extra**
 - [x] Gallery
		- [x] Year select
	 - [x] Infinite scrolling