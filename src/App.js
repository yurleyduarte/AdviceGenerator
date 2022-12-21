import React, { useEffect, useState}  from 'react';
import divider from './img/divider.png';
import icon from './img/icon-dice.png';
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setAdvice(json.slip.advice);
      setAdviceId(json.slip.id);
    } catch (error) {
      console.log("error", error);
    }
  };  

  return (
    <div className="App">
      <div className="App-body">
        <div className='container'>
          <div><label className='letterTitle'>ADVICE # {adviceId}</label></div>
          <div><p className='letter'>"{advice}"</p></div>
          <div><img src={divider} /></div>
          <div>
            <button className='btn' onClick={fetchData}>
              <img src={icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;