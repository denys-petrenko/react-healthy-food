import "./Maps.scss";


const Maps = () => {
    return(
        <div className="Maps">
            <iframe title="This is a unique title"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.8225355065606!2d30.514894575867924!3d50.42577798914081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1c7726a269%3A0xaa170da8deddbf6!2z0JHQvtC70YzRiNCw0Y8g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1684583790589!5m2!1sru!2sua"
                    width="500" height="250" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Maps;