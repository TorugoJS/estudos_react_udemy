import { useState } from "react";

const CondicionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Victor")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim !</p>}
            {!x && <p>Agora x é falso!</p>}

            <h1>If ternário</h1>
            {name === "Victor" ? (
                <div>
                    <p>O nome é Victor</p>
                </div>

            ) : (

                <div>
                    <p>O nome não é Victor</p>
                </div>
            )}
            <button onClick={()=> setName("Pina")}>Mudar nome</button>

        </div>
    )
}

export default CondicionalRender;