import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutCard from "./AboutCard";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="p-[6%]">
        <div className="font-code text-[#00ff00]">Hi, I am</div>
        <h1 className="font-bold text-3xl my-4">Viet Anh Hoang</h1>
        <AboutCard />
      </main>
      <Footer />
    </div>

  );
}

export default App
