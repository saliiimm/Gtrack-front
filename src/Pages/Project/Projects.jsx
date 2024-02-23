

import NavBar from '../../components/NavBar/NavBar';

import SideBar from '../../components/SideBar/SideBar';



import DndContent from '../../components/DndContent/DndContent';


function Projects() { // create state


    


    return (

      <>
       <NavBar/>   
            <div style={{ display: "flex", width: "100%", height: "90vh" }}>
        <SideBar choix={4} />
       <DndContent/>
      </div>
      </>
           
           


      
    )
}

export default Projects
