
import './App.css';

import city from './assets/city.jpg'
import ManageData from './components/ManageData';

// import FirstComponent from './assets/components/FirstComponent';
// import TemplateExpressions from './assets/components/TemplateExpressions';
// import Events from './assets/components/Events';

// import Challenge from './components/Challenge';

function App() {
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
      </div>


      {/* <FirstComponent />
      <TemplateExpressions />
      <Events /> */}
      {/* <Challenge /> */}
    </div>
  );
}

export default App;
