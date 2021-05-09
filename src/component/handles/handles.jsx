import React from 'react'
import { connect } from 'react-redux'
import { bubblesort, changeDense, changeSpeed, creategrid, Demo, selectionsort } from '../../redux/bars/action'
import { getrandom } from '../../utils/utils'
import SliderCmp from '../slider/Slider'
import "./handles.css"
const Handles = (props) => {
    const clickBtnFuncBubble = ()=>{
        // props.bubble(props.data , props.speed);
        props.bubble(props.data , props.speed);
    }
    const clickBtnFuncSelection = ()=>{
      props.DemoFunc(props.demo);
  }
    return (
        <div className="handles--main--container">
      <div className="handles--button">
      <button onClick={clickBtnFuncBubble} disabled={!props.enable}>bubble</button>
      <button onClick={clickBtnFuncSelection}>insertion</button>
      {/* <button onClick={clickBtnFuncSelection} disabled={!props.enable}>quick</button>
      <button onClick={clickBtnFuncSelection} disabled={!props.enable}>merge</button> */}
      
      </div>

      <div className="handles--sliders">
      <SliderCmp ChangeData={props.setSpeed} disabled={!props.enable} flagname="Speed"/>
      <SliderCmp ChangeData={props.creategrid} disabled={!props.enable} flagname="Density"/>
      
      </div>
      
        </div>
    )
}

const mapDispatchToProp = (dispatch)=>({
    bubble : (data,speed)=>dispatch(bubblesort(data,speed)),
    creategrid : (data)=>dispatch(creategrid(data)),
    setSpeed : (data)=>dispatch(changeSpeed(data)),
    setDense : (data)=>dispatch(changeDense(data)),
    DemoFunc : (data)=>dispatch(Demo(data))

    // selectionSort : (data,speed)=>dispatch(selectionsort(data,speed))
  })

  const mapStateToProp = (state)=>({
    data : state.bars.data,
    speed : state.bars.speed,
    enable : state.bars.enable,
    demo : state.bars.demo
  })


export default connect(mapStateToProp,mapDispatchToProp)(Handles)
