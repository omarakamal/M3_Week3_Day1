import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectPage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import projectsData from './projects-data.json'
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* HomePage Route */}
        {/* Route represents the individual Route */}
        {/* <Route path='/' element={<HomePage></HomePage>}></Route> */}
        <Route path="/" element={<HomePageWithNavigate></HomePageWithNavigate>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/projects' element={<ProjectsPage projects={projectsData}></ProjectsPage>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetailsPage></ProjectDetailsPage>}></Route>
      </Routes>

  
    </div>
  );
}

export default App;
