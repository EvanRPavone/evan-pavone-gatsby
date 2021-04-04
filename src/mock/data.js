import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Evan Pavone | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is', // Hello, my name is
  name: 'Evan Pavone', // John
  subtitle: 'I am a full-stack software engineer', // I'm the Unknown Developer.
  cta: 'Know more', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'me-in-mountains.jpeg',
  paragraphOne: 'Hey, I am Evan Pavone and I just finished my software engineering bootcamp at Flatiron and I am eager to start my career.',
  paragraphTwo: 'A little about me outside of programming: I love to play video games, which is a reason I wanted to be a programmer, I love to go hiking, walk my dog Joey, and occasionaly like to brewery hop with my family. I have been to Costa Rica many times (I lost track) as a volunteer to help people in need. I have also worked in the fast-food industry at various places since graduating high school.',
  paragraphThree: 'Leveraging my experience in the fast-food industry, along with a decade of volunteer work in Costa Rica. I am agile, resourceful, timely and organized. I am an up-and-coming software developer who is passionate about coding. I am experienced in Ruby on Rails, JavaScript-based programming, HTML and CSS',
  resume: 'https://www.keepandshare.com/doc16/26926/evan-pavone-resume-pdf-83k?da=y', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-showcase-app.jpg',
    title: 'Project Showcase App',
    info: 'A web application using React-Redux for the frontend and Rails API to manage the backend. Users can login/signup, add a project they have done, can view other users projects and comment on them.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=Gke-qqZruNw&ab_channel=EvanPavone',
    repo: 'https://github.com/EvanRPavone/project-showcase-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'favorite-breweries.jpg',
    title: 'Favorite Breweries App',
    info: 'A web application using javascript for the frontend and Rails API to manage the backend. When the user loads up the page, they can add their favorite breweries that they have visited and add their favorite beers from that brewery.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=H1ueFQ45Apw&ab_channel=EvanPavone',
    repo: 'https://github.com/EvanRPavone/favorite-breweries-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'strong-missions.jpg',
    title: 'Strong Missions Trip Logistics',
    info: "This application/website is used to plan a trip for strong missions, the strong missions admin can view the trip and contact the user who planned the trip via email with more information regarding their trip. The user can log in and see their own planned trips but they cannot see anyone else's trip unless they are admin.",
    info2: '',
    url: 'https://www.youtube.com/watch?v=_OcqbgDSsTs&ab_channel=EvanPavone',
    repo: 'https://github.com/EvanRPavone/StrongMissions', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sinatra-game-reviews.jpg',
    title: 'Sinatra Game Reviews',
    info: "Sinatra Game Reviews is a Website where a user can post a review of a game and also see other reviews by other users.",
    info2: '',
    url: 'https://www.youtube.com/watch?v=j-aPzFtImqg&ab_channel=EvanPavone',
    repo: 'https://github.com/EvanRPavone/sinatra-games', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CLI.jpg',
    title: 'SuperDroid Robots CLI',
    info: "This program gives the user a way of seeing the new robots that superdroid has built by category. Shows the category, price, description and gives the user the url to the robot.",
    info2: '',
    url: 'https://www.youtube.com/watch?v=AdQF3HjicvM&ab_channel=EvanPavone',
    repo: 'https://github.com/EvanRPavone/cli-superdroid-robots', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'evanrpavone@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/evan-pavone/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EvanRPavone',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
