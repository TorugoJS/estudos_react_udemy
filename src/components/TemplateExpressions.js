import MyComponents from "./MyComponents"


const TemplateExpressions = () => {

    const name = "Victor"
    const sobrenome = "Hugo"

    const data = {
        age:21,
        job:"Programmer"
    }

    return (
        <div>
            <h1>Olá {name}, seu sobrenome é {sobrenome}?</h1>
            <h1>Você é um {data.job}?</h1>
            <p>{5 + 5}</p>
            <MyComponents />
        </div>
    )
}

export default TemplateExpressions;