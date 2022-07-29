

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Ativou")
    }



    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também</button>
                <button onClick={() => {
                    if (true) {
                        console.log("essa função não é recomendada")
                    }
                }}>Clique aqui, por favor</button>
            </div>

        </div>
    )
}

export default Events