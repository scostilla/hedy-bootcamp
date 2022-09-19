import './App.css';
import NewComponent from './components/Component';
import Cars from './components/car/Cars';

function App() {
  return(
    <Cars/>
  )
}

/*function App() {
  return (
    <div className='app-users'>
      
      <div className='user-1'><NewComponent title="Primer Usuario"/></div>
      <div className='user-2'><NewComponent title="Segundo Usuario"/></div>
      <div className='user-3'><NewComponent title="Tercer Usuario"/></div>
    </div>
  );
}*/

export default App;