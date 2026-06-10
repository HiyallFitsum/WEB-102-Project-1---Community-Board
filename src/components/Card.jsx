import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faCity, faCalendarDays, faTicket, faMusic } from "@fortawesome/free-solid-svg-icons"

function  Card({imgUrl, artist, venue, city, date, price, genre, ticketUrl}) {
    return (
        <div className="card">
            <img src={imgUrl} alt={artist}></img>
            <span className="genre-tag"> <FontAwesomeIcon icon={faMusic} /> {genre}</span>
            <h2>{artist}</h2>
            <p><FontAwesomeIcon icon={faLocationDot} /> {venue}</p>
            <p><FontAwesomeIcon icon={faCity} /> {city}</p>
            <p><FontAwesomeIcon icon={faCalendarDays} /> {date}</p>
            <p><FontAwesomeIcon icon={faTicket} /> Starting at {price}</p>
            <a href={ticketUrl} target="_blank" rel="noopener noreferrer"> Get Tickets </a>
        </div>
    )
}

export default Card