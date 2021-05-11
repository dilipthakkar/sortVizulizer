import Slider from '@material-ui/core/Slider';
import React, { useState } from 'react'
import "./slider.css"
const SliderCmp = ({ChangeData , ChangeGrid , disabled, flagname}) => {
    const [value , setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        ChangeData(newValue*2);

      };
    return (
        <div className="slider--main--container">
               <Slider value={value} disabled={disabled} onChange={handleChange} aria-labelledby="continuous-slider" />
                <h3>{flagname}</h3>
        </div>
    )
}

export default SliderCmp
