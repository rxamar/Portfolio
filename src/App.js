import "./App.css";
import { TopContainer } from "./componet/topContainer/TopContainer.jsx";
import { SkillContainer } from "./componet/SkillContainer/SkillContainer.jsx";
import { Header } from "./componet/header/Header.jsx";
import { ProjectContainer } from "./componet/projectContainer/ProjectContainer.jsx";
import { ContactContainer } from "./componet/contact/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
