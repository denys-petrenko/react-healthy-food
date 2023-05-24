import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import {Route,Routes} from "react-router";
import SimpleCarousel from "./Components/Main/Carousel/Carousel";
import Maps from "./Components/Main/Maps";




function App(props) {
  return (
    <div className = "App">
        <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
        <Routes>
            <Route path="/menu" element={<Menu menuToProps={props.data.menu.box}/>}/>
        </Routes>
        <Main sectionToProps={props.data.section}/>
        <SimpleCarousel/>
        <Maps/>
        <Footer/>
    </div>
  );
}

export default App;
