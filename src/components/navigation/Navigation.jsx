import "./Navigation.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Navigation = () => {
  return (
    <nav className="text-center text-white align-middle ">
      <ul className="text-center flex flex-col justify-center">
        <li>
          <a href="#home"><HomeOutlinedIcon className="nav-icon text-center"/></a>
          <a href="#home">Home</a>
        </li>
        <li>
        <a href="#about"><Person2OutlinedIcon className="nav-icon text-center"/></a>
          <a href="#about">About</a>
        </li>
        <li>
        <a href="#services"><SchoolOutlinedIcon className="nav-icon text-center"/></a>
          <a href="#services">Services</a>
        </li>
        <li>
        <a href="#portfolio"><WorkOutlineOutlinedIcon className="nav-icon text-center"/></a>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
        <a href="#contact"><EmailOutlinedIcon className="nav-icon text-center"/></a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
