//arquivo js

import MyComponents from "./MyComponents";

const FirstComponent = () => {

    //função

    /*
    multipla linhas
    */

    return (

        <div>
            {/*Algum comentário */}
            <h1>Primeiro</h1>

            <p className="teste">Meu texto</p>
            
            <MyComponents />
        </div>

    )
}

export default FirstComponent;