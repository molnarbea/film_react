import type { FilmTipus } from "../adat"
import Film from "./Film"

interface ListaProps{
    lista:FilmTipus[]
}

export default function Filmek({lista}:ListaProps){
    return(
        <>
        {
            lista.map((e,i)=>{
                return <Film filmem = {e} key={i} />
            })
        }
        </>
    )
}