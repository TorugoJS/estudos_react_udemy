
import { useState } from 'react';
import './App.css';

import city from './assets/city.jpg'
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

// import FirstComponent from './assets/components/FirstComponent';
// import TemplateExpressions from './assets/components/TemplateExpressions';
// import Events from './assets/components/Events';

// import Challenge from './components/Challenge';

function App() {

const [userName] = useState("Hugo")

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
        <ShowUserName name={userName}/>
      </div>


      {/* <FirstComponent />
      <TemplateExpressions />
      <Events /> */}
      {/* <Challenge /> */}
    </div>
  );
}

export default App;
