import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutCard from "./AboutCard";
import Tabs from "./Tabs";
import Experiences from './data/experience.json'
import ProjectList from "./ProjectList";
import Accordion from "./Accordion";

function AboutSection (){
  return (
    <div id="about-me" className="scroll-mt-10 mt-12">
        <div className="font-code dark:text-green text-green-600">Hi, I am</div>
        <h1 className="text-2xl md:text-3xl my-2 md:my-4">Viet Anh Hoang</h1>
        <AboutCard /> 
        <h2 className="text-xl mt-8 mb-1">Technical Skills</h2>
        <Tabs /> 
    </div>    
  );
}

function ExperienceSection (){
  const workKeys = Object.keys(Experiences);
  return (
    <div id="work-experience" className="scroll-mt-10">
        <h2 className="text-xl mt-24 mb-2" id="work-experience">My Work Experience</h2>
        {workKeys.map((key) => (
          <Accordion workID={key} key={key} />
        ))}        
    </div>
  );
}

function ProjectSection (){
  return (
    <div id="project">
        <h2 className="text-xl mt-24 mb-2" id="project">Individual Project</h2>
        <ProjectList />        
    </div>  
  );
}

function App() {
  return (
    <>
      <NavBar />
      <main className="px-[6%] scroll-smooth">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
      <Footer />
    </>

  );
}

export default App
