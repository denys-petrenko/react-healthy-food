import "./Header.scss"
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(
        <header>
            <div>
                <img src={props.logoToProps} alt=""/>
                <p>HEALTHY SWITCHER</p>
            </div>
            <nav>
                <NavLink to="/menu">Menu</NavLink>
                {
                    props.linksToProps.map(el =>  <a href={el.link} key={el.id}>{el.name}</a>)
                }
            </nav>
        </header>
    )
}
export default Header;