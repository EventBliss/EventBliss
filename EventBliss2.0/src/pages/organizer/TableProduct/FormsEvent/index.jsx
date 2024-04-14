import { useParams } from "react-router-dom";

export function FormsEvent(){
    const { id } = useParams();
    // Usa el ID como sea necesario en tu componente
    console.log(id)
    return (
        <div>
            HOLA
        </div>
    )
}
