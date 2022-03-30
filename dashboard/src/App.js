import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="container">
      <Navbar sidebarOpen={ sidebarOpen } openSidebar={ openSidebar }/>
      <Sidebar sidebarOpen={ sidebarOpen } closeSidebar={ closeSidebar } />
    </div>
  );
}

// teste

export default App;
