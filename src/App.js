
import { useState } from 'react';
import './App.css';

import city from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

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
  ]

  return (
    <div className="App">
      <h1>Fundamentos React</h1>


      {/*Imagem */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
        <div>
          <img src={city} alt="city" />
        </div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        <ShowUserName name={userName} />
        <CarDetails brand="Fiat" km={10000} color="Preto" newCar={false} />
        {/*Reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
        <CarDetails brand="VW" km={4500} color="Vermelho" newCar={false} />
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>


      {/* <FirstComponent />
      <TemplateExpressions />
      <Events /> */}
      {/* <Challenge /> */}
    </div>
  );
}

export default App;
