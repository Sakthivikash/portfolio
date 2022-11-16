import NavBar from "./Components/NavBar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/AboutMe/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Project/Projects";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Home />
          <About />
          <Resume />
          <Projects />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;