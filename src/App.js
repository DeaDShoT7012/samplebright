import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import S230 from './components/S230';
import S280 from './components/S280';
import S350 from './components/S350';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='230' element={<S230/>}/>
        <Route path='280' element={<S280/>}/>
        <Route path='350' element={<S350/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
