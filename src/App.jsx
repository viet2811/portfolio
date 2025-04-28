import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutCard from "./AboutCard";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import Experiences from './data/experience.json'
import ProjectList from "./ProjectList";


function App() {
  const workKeys = Object.keys(Experiences);
  return (
    <>
      <NavBar />
      <main className="px-[6%] scroll-smooth">

        <div id="about-me" className="scroll-mt-10 mt-12">
          <div className="font-code dark:text-green text-green-600">Hi, I am</div>
          <h1 className="text-2xl md:text-3xl my-4">Viet Anh Hoang</h1>
          <AboutCard /> 
          <h2 className="text-xl mt-8 mb-1">Technical Skills</h2>
          <Tabs /> 
        </div>

        <div id="work-experience" className="scroll-mt-10">
          <h2 className="text-xl mt-24 mb-2" id="work-experience">My Work Experience</h2>
          {workKeys.map((key) => (
            <Accordion workID={key} key={key} />
          ))}        
        </div>

        <div id="project">
          <h2 className="text-xl mt-24 mb-2" id="project">Individual Project</h2>
          <ProjectList />        
        </div>        
      </main>

      <Footer />
    </>

  );
}

export default App
