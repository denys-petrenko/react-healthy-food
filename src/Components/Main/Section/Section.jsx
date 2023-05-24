import Card from "../Card/Card";

const Section = (props) => {
    return (
        <section className="Cards">
            {
                props.cards.map(card => <Card  key={card.id} img={card.img} title={card.title} description={card.description}/>)
            }
        </section>
    )
}

export default Section;