import Logo from '../../Assets/logo2.png';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={ sidebarOpen ? "sidebar-responsive" : "sidebar" } id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-img">
          <img src= { Logo } alt='Logo' />
          <h1>Williamns Dev</h1>
        </div>
        <i
        onClick = { () => closeSidebar() }
        className='fa fa-times'
        id='sidebarIcon'
        aria-hidden='true'
        ></i>
      </div>
      <div className='sidebar-menu'>
        <div className='sidebar-link active-menu-link'>
          <i className='fa fa-minus-square' ></i>
          <a href='#'>Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className='sidebar-link'>
          <i className='fa fa-tachometer' ></i>
          <a href='#'>Área administrativa</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-building' ></i>
          <a href='#'>Lojas</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-archive' ></i>
          <a href='#'>Produtos</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-bars' ></i>
          <a href='#'>Categorias</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-cutlery'></i>
          <a href='#'>Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className='sidebar-link'>
          <i className='fa fa-male' ></i>
          <a href='#'>Administradores</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-user-circle' ></i>
          <a href='#'>Usuários</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-money' ></i>
          <a href='#'>Pagamentos e custos</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-tasks' ></i>
          <a href='#'>A plataforma</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-file-text' ></i>
          <a href='#'>A Política de privacidade</a>
        </div>
        <div className='sidebar-logout'>
          <i className='fa fa-power-off' ></i>
          <a href='#'>logout</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;