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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="p-[6%]">
        <div className="font-code text-green" id="about-me">Hi, I am</div>
        <h1 className="text-3xl my-4">Viet Anh Hoang</h1>
        <AboutCard />
        {/* <div className="font-code text-green mt-6 mb-5">I have technical skills in..</div> */}
        <h2 className="text-xl mt-8 mb-1">Technical Skills</h2>
        <Tabs />
        <h2 className="text-xl mt-24 mb-2" id="work-experience">My Work Experience</h2>
        {workKeys.map((key) => (
          <Accordion workID={key} key={key} />
        ))}
        <h2 className="text-xl mt-24 mb-2" id="project">Individual Project</h2>
        <ProjectList />
      </main>
      <Footer />
    </div>

  );
}

export default App
