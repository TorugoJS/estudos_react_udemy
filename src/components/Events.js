

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
        </div>
    )
}

export default Events