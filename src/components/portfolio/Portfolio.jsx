import './Portfolio.css'
import amazon from '../../assets/images for port/amazonprojectphoto.jpeg'
import netflix from "../../assets/images for port/NetflixProject.jpeg"
import instagram from "../../assets/images for port/instaclone.png"
import openai from "../../assets/images for port/summerizer ai.png"
import evangadi from "../../assets/images for port/evangadi.jpg"
import apple from "../../assets/images for port/applenodereact.jpeg"

const projects = [
  {
    title: "amazon",
    image: amazon,
    liveLink: 'https://clone-6d4b4.firebaseapp.com/',
    githubLink: 'https://github.com/kedir21/amazonclonefront',
  },
  {
    title: 'Netflix',
    image: netflix,
    liveLink: 'https://netflixcloneapp-82223.firebaseapp.com/',
    githubLink: 'https://github.com/kedir21/netflixclone1',
  },
  {
    title: 'AI Summerizer',
    image: openai,
    liveLink: 'https://lighthearted-peony-04f64f.netlify.app/',
    githubLink: 'https://github.com/kedir21/Ai_Summerizer',
  },
  {
    title: 'Apple Replica',
    image: apple,
    liveLink: 'https://644be8cc5394690053711363--coruscating-choux-8db943.netlify.app/',
    githubLink: 'https://github.com/kedir21/Apple_React_Node_Bootstrap_Vite',
  },
  {
    title: 'Instagram',
    image: instagram,
    liveLink: 'https://insta-clone-nextjs.vercel.app/',
    githubLink: 'https://github.com/kedir21/insta-clone-nextjs',
  },
  {
    title: 'Evangadi',
    image: evangadi,
    liveLink: 'https://forum-frontend-7wi.pages.dev/login',
    githubLink: 'https://github.com/kedir21/evangadiForumGroupProject',
  },
 
 
];

const Portfolio = () => {
  return (
    <div className=' mx-70 text-center w-full md:ml-9'>
    <h1 className='text-center text-4xl m-5'>My Portfolios </h1>
    <div className="portfolio md:grid md:grid-cols-3 mt-5  " id='portfolio'>
      
      {projects.map((project, index) => (
        <div className="project mx-30" key={index}>
          <img className='w-500' src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="links">
            <a className='text-blue-500 text-lg bg-slate-500' href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            <a className='text-lg font-bold font-extralight bg-stone-500' href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Portfolio;
