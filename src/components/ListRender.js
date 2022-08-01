import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Victor", "Hugo", "Pina", "Reis"])


    const [users, setUsers] = useState([
        { id: 1, name: "João", age: 18 },
        { id: 2, name: "Maria", age: 60 },
        { id: 3, name: "Joana", age: 45 }
    ]);


    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

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

            <button onClick={deleteRandom}>Delete random user</button>

        </div>
    )
}

export default ListRender;