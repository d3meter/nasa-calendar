## NASA calendar
Solo react project.
[Click here to open](https://nasa-calendar.web.app)

**Start**
*cd frontend* ==> *npm start*.

**Description**
I used [NASA-API](https://api.nasa.gov/) to build my database. The landing page (main page) shows the last picture or video of the day from NASA. With clicking on the calendar icon of header it navigates the user to the calendar page. As default configuration the current month occures but the user can switch between the required years and months. As the data is fetched directly from the database the loading time is significantly reduced. When clicking on a day its detail page appears. There is more information about the current media and when clicking on it the HD content is opened in a new tab. At the moment Firebase is used for authentication complemented with some validation features such as password and email format check. In the future hosting and fire store will be integrated as well.

**Features integrated**
 - [x] React Router
	 - [x] Main page
		- [ ] Favorites (combined with auth and firestore)
	 - [x] Calendar page
		 - [x] Month view
		 - [x] Day card (day detail)
			 - [x] Clickable images ==> open in new tab
	 - [x] Login page
	 - [x] Registration page
 - [x] Firebase authentication (inc. validations: invalid password, email etc.)
	 - [x] Registration
	 - [x] Login
 - [ ] Firestore database
 - [x] Firebase hosting
 - [x] JSON database (using JSON loader)
 - [x] Auto. filled calendar look
 - [x] Desing with SCSS and Material UI
 - [x] Spinner while loading data
 - [ ] Auto. data update:
	 - [ ] V1: via REST request (local backend server)
	 - [ ] V2: via Firebase

**Extra**
 - [ ] Gallery