import s from "./Box.module.scss";
import {useState} from "react";

const Box = (props) => {
    let [order, setOrder] = useState(false);
    const addProduct = () => {
        setOrder(true)
    }
    return (
        <div className={s.Box}>
            <img src={props.img} alt="img"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>{props.price}</h2>
            {
                order ? <h3>ORDERED</h3> : <button onClick={addProduct}>ORDER</button>
            }
        </div>
    )
}

export default Box;