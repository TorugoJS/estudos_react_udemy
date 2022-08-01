import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Victor", "Hugo", "Pina", "Reis"])

    const [users] = useState([
        { id: 1, name: "João", age: 18 },
        { id: 56455, name: "Maria", age: 60 },
        { id: 897899, name: "Joana", age: 45 }
    ]);

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}

            </ul>
        </div>
    )
}

export default ListRender;