import type { FilmTipus } from "../adat";
import './film.css'

interface FilmProps{
    filmem: FilmTipus
}

export default function Film({filmem}:FilmProps){
    return(
        <>
        <div className="film">
            <h2>{filmem.cim}</h2>
            <p><span>Studió: </span>{filmem.studio}</p>
            <p><span>Megjelenési év: </span>{filmem.megjelenesiEv}</p>
            <p><span>Film értékelése: </span>{filmem.ertekeles}</p>
            <img className="FilmKep" src={`${import.meta.env.BASE_URL}${filmem.kep}`} alt={filmem.cim} />
            <button>Kiválaszt</button>
        </div>
        </>
    )
}