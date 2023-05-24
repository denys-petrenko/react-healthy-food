import call from "../../assets/call.png";
import watch from "../../assets/watch.png";
import directions from "../../assets/directions.png";
import logo from "../../assets/header-logo.png";
import "./Footer.scss";
const Footer = () => {
    return (
            <footer>
                <div className="Top">
                    <div className="FooterBox">
                        <img src={watch} alt="watch"/>
                        <h1 className="CardTitle">Today 10:00 am - 7:00 pm</h1>
                        <p className="CardArticle">Working hours</p>
                    </div>
                    <div className="FooterBox">
                        <img src={directions} alt="call"/>
                        <h1 className="CardTitle">Velyka Vasylkivska 100</h1>
                        <p className="CardArticle">Get Directions</p>
                    </div>
                    <div className="FooterBox">
                        <img src={call} alt="call"/>
                        <h1 className="CardTitle">+38 (063) 833 24 15</h1>
                        <p className="CardArticle">Call Online</p>
                    </div>
                </div>
                <div className="Bottom">
                    <div className="Logo">
                        <img src={logo} alt="logo"/>
                        <p className="FooterLogo">HEALTHY SWITCHER</p>
                    </div>
                    <p className="FooterTitle">© Designed by Yellow Snow. All Rights Reserved.</p>
                </div>
            </footer>
        )
}

export default Footer;