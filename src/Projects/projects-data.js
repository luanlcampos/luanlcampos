export const projects = [
  {
    id: 1,
    name: "New York Restaurants",
    keywords: ["REST API", "JavaScript", "Node.js", "MongoDB", "React"],
    description: [
      "Developed a REST API and a SPA to get New York Restaurants from a database and display their primary information, including location, in a React-based application",
      "Experienced API development on a modern server stack using Node.js, Express.js and MongoDB, as demonstrated when designing and building an MVC API for getting, deleting, creating, and updating restaurants into the database",
      "Implemented a user interface application to return a list of restaurants being filterable by borough using a JavaScript framework based on Components",
      "Designed user interface with the use of front-end frameworks that were redesigned to be used as a React Component, as React-Bootstrap, Material UI and Framer-motion",
    ],
    image: "ny-rest.jpg",
    link: "https://ny-restaurants.vercel.app",
  },

  {
    id: 2,
    name: "System Manager",
    keywords: [
      "Node.js",
      "Express.js",
      "Handlebars.js",
      "MongoDB",
      "PostgreSQL",
    ],
    description: [
      "Experienced front-end template engine (in particular, handlebar.js), as demonstrated when I was designing and building an MVC application for a company to control its departments and employees records",
      "Established a system that allows user to add and delete departments and employees",
      "Created a SQL database using PostgreSQL to hold departments and employees tables",
      "Designed a login and register system using MongoDB and utilizing a password hashing tool (bcrypt.js) to encrypt the password before sending it to the server",
      "Developed a dynamic system that accepts image uploading and form submission using express middleware as body-parser and multer",
    ],
    image: "sm-logo.jpg",
    link: "https://mysystemmanager.herokuapp.com/",
  },
  {
    id: 3,
    name: "Pasta Chef",
    keywords: ["Node.js", "Express.js", "Handlebars.js", "MongoDB", "MVC"],
    description: [
      "Created a dynamic web application which allows user to register, login and select a meal plan for the week",
      "Implemented a MongoDB connection to hold the user data and meals data departments and employees",
      "Experienced front-end designing while developing a user interface with Bootstrap, CSSand JavaScript for creating modal pop-ups for login, register and meal addition form",
      "Designed a login and register system using MongoDB and utilizing a password hashing tool (bcrypt.js) to encrypt the password before sending it to the server",
    ],
    image: "pasta-chef.jpg",
    link: "https://pasta-chef.herokuapp.com/",
  },

];
