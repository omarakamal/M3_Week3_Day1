 
import { useState, useEffect } from "react";
import projectsData from "./../projects-data.json";
import { Link } from 'react-router-dom'
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
 
  // This effect will run only once on initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(props.projects);
  }, []);
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
            <Link to={`/projects/${project._id}`}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;