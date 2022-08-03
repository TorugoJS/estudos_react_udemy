

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Esse é o título do container</h2>
        {children}
        <p>Imprima {myValue}</p>
    </div>
  )
}

export default Container;