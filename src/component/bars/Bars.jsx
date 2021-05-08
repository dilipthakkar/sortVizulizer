import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bubblesort } from '../../redux/bars/action'
import { getrandom } from '../../utils/utils'
import "./bars.css"




const Bars = (props) => {
    const [arr , setArr] = useState([]);
   

    
    const styleClasses = (e) => {
        let backgroundColor = "#474747"
        if(e.curr){
            backgroundColor = "#fab425"
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
          <span className="bars" style={styleClasses(element)}></span>
        ))}
      </div>
           
        
        </div>
    )
}

const mapStateToProp = (state)=>({
    data : state.bars.data
})



export default connect(mapStateToProp,null)(Bars)
