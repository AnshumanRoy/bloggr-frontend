import './App.css';
import _Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';

function App() {
  const dark = useSelector((state)=>{return state.dark.value})
  return (
    <div style={{backgroundColor:`${dark?"#23282b":""}`, height: '100%', width: '100%'}}>
      <_Navbar/>
    </div>
  );
}

export default App;
