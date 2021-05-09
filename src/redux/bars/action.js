import { getrandom } from "../../utils/utils";
import { CHNAGE_DATA, CHNAGE_DENSE, CHNAGE_SPEED, ENABLE_SORT_BUTTON } from "./actionType";

export const creategrid = (length)=>{
  return {
    type : CHNAGE_DATA,
    payload : getrandom(length)
  }
}
export const changeSpeed = (speed)=>{
  return {
    type : CHNAGE_SPEED,
    payload : speed
  }
}
export const changeDense = (num)=>{
  return {
    type : CHNAGE_DENSE,
    payload : num
  }
}




export const bubblesort = (arr , speed) => {
  speed = 100-speed;
  return (dispatch) => {
    dispatch({type : ENABLE_SORT_BUTTON , payload : false});      
    // create a copy of coming array
    // let newarr = [...arr];
    let newarr = arr;
    let time = 0;
    // bubble sort algorithm
    for (let i = 0; i < newarr.length; i++) {
   
      
      for (let j = 0; j < newarr.length - i - 1; j++) {
        time += speed*0.5;
        setTimeout(() => {
          //create a new array to change state
          
            const newArray2 = [...newarr];
            // const newArray2 = newarr;
            // mark the sorted element as visited
            // const newArray3 = [...newarr];

            newArray2[j].curr = 3;
            if(j>0) newArray2[j-1].curr = 0;
            if(j>0) newArray2[newarr.length-1-i].curr = 0;
            // dispatch({ type: CHNAGE_DATA, payload: newArray2 });

            if (newArray2.length - i >= 0&& i>0)
                newArray2[newArray2.length - i].curr = 1;
            if(i==newArray2.length - 2){
                newArray2[0].curr = 1;
                newArray2[1].curr = 1;
                dispatch({type : ENABLE_SORT_BUTTON , payload : true});      
          
            } 
            // change state for visited element
            dispatch({ type: CHNAGE_DATA, payload: newArray2 });

            // part of bubble sort
            if (newarr[j].value > newarr[j + 1].value) {
            var temp = newarr[j].value;
            newarr[j].value = newarr[j + 1].value;
            newarr[j + 1].value = temp;
            // const newArray2 = [...newarr];

            dispatch({ type: CHNAGE_DATA, payload: newArray2 });
            
          }
        }, time);
      }
    }
  };
};


export const Demo = (data)=>{
  console.log(data);
  return dispatch=>{
    let time = 0;
    for(let i=0;i<3;i++){
      time += 3000;
      setTimeout(() => {
        const newArray = [...data];
        newArray[3] = -1000;
        console.log(data);
        console.log(newArray);
    
        dispatch({type : "DEMO" , payload : newArray});  
        
      }, time);
    
    }
    }
  


}







