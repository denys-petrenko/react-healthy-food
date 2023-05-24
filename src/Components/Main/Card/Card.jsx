import s from "./Card.module.scss";
const Card = (props) => {
    return (
        <div className={s.Card}>
            <img src={props.img} alt="img"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;