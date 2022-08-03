
import { useState } from 'react';
import './App.css';


import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

// import FirstComponent from './assets/components/FirstComponent';
// import TemplateExpressions from './assets/components/TemplateExpressions';
// import Events from './assets/components/Events';

// import Challenge from './components/Challenge';

function App() {

  const [userName] = useState("Hugo");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Renault", color: "Branco", newCar: false, km: 5000 },
    { id: 3, brand: "KIA", color: "Rosa", newCar: false, km: 10000 }
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }

  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />

        {/* props */}
        <ShowUserName name={userName} />

        {/* destructuring */}
        <CarDetails brand="Fiat" km={10000} color="Preto" newCar={false} />

        {/*Reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
        <CarDetails brand="VW" km={4500} color="Vermelho" newCar={false} />

        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}



        {/* fragment */}
        <Fragments propFragment="teste" />

        {/* children */}
        <Container myValue="teste">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="testando">
          <p>E este é o conteúdo</p>
        </Container>

        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />

      </div>


      {/* <FirstComponent />
      <TemplateExpressions />
      <Events /> */}
      {/* <Challenge /> */}
    </div>
  );
}

export default App;
