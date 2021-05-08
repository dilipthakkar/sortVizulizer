import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bars from './component/bars/Bars';
import { bubblesort } from './redux/bars/action';
import { getrandom } from './utils/utils';
function App(props) {
  const clickBtnFunc = ()=>{
    props.bubble(getrandom());
}
  return (



    <div className="App">
    <div>
    <button onClick={clickBtnFunc} disabled={!props.enable}>bubble</button>
      <button onClick={clickBtnFunc} disabled={!props.enable}>insertion</button>
      <button onClick={clickBtnFunc} disabled={!props.enable}>quick</button>
      <button onClick={clickBtnFunc} disabled={!props.enable}>merge</button>

    </div>
    
      < Bars className="App_bars"/>
      
    </div>
  );
}

const mapDispatchToProp = (dispatch)=>({
  bubble : (data)=>dispatch(bubblesort(data))
})

const mapStateToProp = (state)=>({
  enable : state.bars.enable
})



export default connect(mapStateToProp,mapDispatchToProp)(App)
