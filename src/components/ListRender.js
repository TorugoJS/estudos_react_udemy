import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Victor", "Hugo", "Pina", "Reis"])

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;