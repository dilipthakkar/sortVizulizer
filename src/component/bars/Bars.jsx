import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getRandomColor } from '../../utils/utils';
import "./bars.css"
import { v4} from 'uuid'


const Bars = (props) => {
    const [arr , setArr] = useState([]);
   

    
    const styleClasses = (e) => {
        let backgroundColor = "#474747"
        if(e.curr==1){
            backgroundColor = "#fab425"
        } if(e.curr==3){
          backgroundColor = getRandomColor();
      } 
        return {
          Minwidth: "0.1rem",
          height: (e.value * 10).toString() + "px",
          backgroundColor : backgroundColor
        };
      };
    useEffect(() => {
        setArr(props.data);
    }, [props.data])

    

    return (
        <div> 
            <div className="bars-main-container">
        {arr && arr.map((element) => (
          <span className="bars" style={styleClasses(element)} key={v4()}></span>
        ))}
      </div>
           
        
        </div>
    )
}

const mapStateToProp = (state)=>({
    data : state.bars.data,
})



export default connect(mapStateToProp,null)(Bars)
