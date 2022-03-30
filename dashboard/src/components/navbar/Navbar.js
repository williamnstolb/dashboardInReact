import './Navbar.css';
import Avatar from '../../Assets/avatar.svg';
// import openSidebar from '../../utils/openSidebar';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={ () => openSidebar() } >
        <i className="fa fa-bars" aria-hidden='true'></i>
      </div>
      <div className="navbar-left">
        <a href="#">Produtos</a> 
        <a href="#">Usuários</a>
        <a href="#" className="active-link">Admin</a>
      </div>
      <div className="navbar-right">
      <a href="#">
        <i className="fa fa-search"></i>
      </a>
      <a href="#">
        <i className="fa fa-clock-o"></i>
      </a>
      <a href="#">
        <img width="30" src={ Avatar } alt="avatar" />
      </a>
      </div>
    </nav>
);
};

export default Navbar;
