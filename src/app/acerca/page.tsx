import { Metadata } from "next"

export const metadata:Metadata = {
    title:{
        absolute:"Acerca",        
    },
    description:"Estas en la sección Acerca"
}

export default function Acerca () {
    return (
        <h1>Acerca</h1>
    )
}