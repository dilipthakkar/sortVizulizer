import React from 'react'
import { connect } from 'react-redux'
import { bubblesort, changeDense, changeSpeed, creategrid, insertionSort, mergeSort, quick} from '../../redux/bars/action'
import { getrandom } from '../../utils/utils'
import SliderCmp from '../slider/Slider'
import "./handles.css"
const Handles = (props) => {
    const clickBtnFuncBubble = ()=>{
        // props.bubble(props.data , props.speed);
        props.bubble(props.data , props.speed);
    }
    const clickBtnFuncQuick = ()=>{
      props.quick(props.data , props.speed);
      // props.mergesort(props.data , props.speed);

  }
  const clickBtnFuncMerge = ()=>{
    props.mergesort(props.data , props.speed);

  }
    const clickBtnFuncInsertion = ()=>{
      props.insertion(props.data , props.speed);

  }
    return (
        <div className="handles--main--container">
      <div className="handles--button">
      <button onClick={clickBtnFuncBubble} disabled={!props.enable}>bubble</button>

      <button onClick={clickBtnFuncQuick} disabled={!props.enable}>Quick</button>
      <button onClick={clickBtnFuncMerge} disabled={!props.enable}>Merge</button>
      <button onClick={clickBtnFuncInsertion} disabled={!props.enable}>insertion</button>
      
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
    quick : (data,speed)=>dispatch(quick(data,speed)),
    mergesort : (data,speed)=>dispatch(mergeSort(data,speed)),
    insertion : (data,speed)=>dispatch(insertionSort(data,speed))

    // selectionSort : (data,speed)=>dispatch(selectionsort(data,speed))
  })

  const mapStateToProp = (state)=>({
    data : state.bars.data,
    speed : state.bars.speed,
    enable : state.bars.enable,
  })


export default connect(mapStateToProp,mapDispatchToProp)(Handles)
