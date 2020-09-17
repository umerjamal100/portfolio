import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ExpertiseCard from "./components/ExpertiseCard/ExpertiseCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Container from "@material-ui/core/Container";
import WorkTogether from "./components/WorkTogether/WorkTogether";
import Footer from "./components/Footer/Footer";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { green, orange } from "@material-ui/core/colors";

// const Theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#fff000",
//     },
//   },
// });
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Container> */}
      <ExpertiseCard />
      <ExperienceCard />
      {/* </Container> */}
      <ProjectCard title={"test"} completionDate={"25-May-2020"} />
      <WorkTogether />
      <Footer />
    </div>
  );
}

export default App;
