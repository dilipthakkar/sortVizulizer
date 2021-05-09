import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bars from './component/bars/Bars';
import Handles from './component/handles/handles';
import SliderCmp from './component/slider/Slider';
import { bubblesort, changeDense, changeSpeed, creategrid } from './redux/bars/action';
import { getrandom } from './utils/utils';
function App(props) {
  
  
  return (



    <div className="App">
    <div>
     
      <Handles />

    </div>
    
      < Bars className="App_bars"/>
      
    </div>
  );
}



const mapStateToProp = (state)=>({
  enable : state.bars.enable,
  dense : state.bars.dense,
  speed : state.bars.speed,
})



export default connect(mapStateToProp,null)(App)
