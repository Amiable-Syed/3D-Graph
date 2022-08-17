import React from 'react';
import './App.css';
import { SummaryGraph } from './summary-graph/SummaryGraph';

function App() {

  const onBoxClick =(id: string)=>{
    alert("Box clicked "  + id);
  }
  return (
    <div className="App">
      <header className="App-header">        
        <SummaryGraph onBoxClick={onBoxClick} data={{"a": {value:'22,902'},"b":{value:'100'},"c":{value:'100'},"d":{value:'100'},"e":{value:'100'},"f":{value:'100'},"m":{value:'100'},"n":{value:'100'},"o":{value:'100'},"p":{value:'100'},"q":{value:'100'}}}/>
      </header>
    </div>
  );
}

export default App;
