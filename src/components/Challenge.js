

const Challenge = () => {

    const valorA = 10;
    const valorB = 20;
    const soma = valorA + valorB;

    return (
        <div>
            <button onClick={()=>{
              console.log(soma)
            }}>Clique aqui para obter a soma!</button>
        </div>
    )
}

export default Challenge;