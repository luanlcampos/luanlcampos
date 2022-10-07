export const projects = [
  {
    id: 1,
    name: "The Health Cast",
    keywords: ["Firebase", "Next.js", "Tailwind", "React"],
    description: [
      "Developed a web application that contains a live stream, recorded videos and a community forum to inform users about healthcare topics",
      "Utilized Firebase Auth to make a reliable and secure sign-in process and Firestore to store all users’ and admins’ data",
      "Implemented a system where users can see and follow each other profiles to enable notifications and chat",
      "Developed a notifications system that will be sent to all the user followers in some triggering actions such as starting a new live stream or creating a new forum thread",
    ],
    image: "thc-app.jpg",
    link: "https://the-health-cast.vercel.app",
  },
  {
    id: 2,
    name: "Fragments",
    keywords: ["AWS", "Docker", "Unit Testing", "Microservices", "RESTful API", "Node.js", "React", "CI/CD"],
    description: [
      "Developed a RESTful API and a Next.js web application to store files on the cloud",
      "Utilized AWS Cognito to make a reliable and secure sign-in process",
      "Implemented AWS S3 to store the files and Dynamo DB to store the file's metadata",
      "Experienced the utilization of Docker to ensure that the application is fully executable and functional on any platform",
      "Implemented a CI workflow with the unit and integration testing and built and pushed the image to Docker Hub",
      "Created a CD workflow that builds and pushes the Docker image to AWS ECR and deploys the application to Elastic Beanstalk",
      "Designed and developed a UI where users can register, log in, upload and manage files under their credentials. Users can delete and edit file content."
    ],
    image: "frag.jpg",
    link: "https://github.com/luanlcampos/fragments",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
