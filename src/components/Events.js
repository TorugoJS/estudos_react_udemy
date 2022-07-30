

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Ativou")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando</h1>

        } else {
            return <h1>Renderizando isso então!</h1>

        }
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
                {renderSomething(true)}
                {renderSomething(false)}
        </div>
    )
}

export default Events