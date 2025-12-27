import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import AboutMe from "./AboutMe/AboutMe";
// Importe os novos componentes
import Contact from "./AboutMe/Contact/Contact";
import Hobbies from "./AboutMe/Hobbies/Hobbies";
import MyStory from "./AboutMe/MyStory/MyStory";
import "./App.css";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";

function App() {
  // Adicione as rotas filhas à rota /about-me.
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
