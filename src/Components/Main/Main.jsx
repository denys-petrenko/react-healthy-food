import Section from "./Section/Section";
import "./Main.scss";
import React from "react";


const Main = (props) => {
    return(
        <main>
            <h1><span className = "SmallWord">Your</span> Favourite Food<br/>
                <span className = "SmallWord">Delivered</span> Hot & Fresh</h1>
            <p  className="Heading">HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
            <button>Order Now</button>
            <section>
                {
                    <Section cards={props.sectionToProps.cards}/>
                }
            </section>
        </main>
    )
}
export default Main;