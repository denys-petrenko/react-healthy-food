import "./Menu.scss";
import Box from "./Box/Box";

const Menu = (props) => {
    return (
    <section className="Menu">
        {
            props.menuToProps.map(box => <Box  key={box.id} img={box.img} title={box.title} description={box.description} price={box.price}/>)
        }
    </section>
)
}

export default Menu;