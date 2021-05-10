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


  


const partitionLow = (arr,low,high,dispatch)=>{
  let pivot = arr[low].value;
  let i = low;
  let j = high;
  while(i<j){
      while(arr[i] && arr[i].value<=pivot && i<=high){  
        i++;
      }
      while(arr[j] && arr[j].value>pivot && j>=low){
        j--;
      } 
      if(i<j){
        const newArr = [...arr];
        for(let k = 0 ; k<newArr.length ; k++){
          if(newArr[k].curr == 3){
            newArr[k].curr = 0;
          }
        }
        newArr[i].curr = 3;
        newArr[j].curr = 3;
        
        dispatch({ type: CHNAGE_DATA, payload: newArr });
        
          let temp = arr[i].value;
          arr[i].value = arr[j].value;
          arr[j].value = temp;   
      }
  }
  let temp = arr[i-1].value;
  arr[i-1].value = arr[low].value;
  arr[low].value = temp;
  
  const newArr = [...arr];
  newArr[i-1].curr = 1;
  dispatch({ type: CHNAGE_DATA, payload: newArr });
  return i-1;

}


const quicksort = (arr, low, high , time ,dispatch,speed) => {
  time += speed*2;
  setTimeout(() => {
    // base condition
    if (low >= high) {
      return;
    }
    // rearrange the elements across pivot
    const pivot = partitionLow(arr, low, high , dispatch);

    // recur on sub-array containing elements less than pivot
    quicksort(arr, low, pivot - 1, time,dispatch,speed);

    // recur on sub-array containing elements more than pivot
    quicksort(arr, pivot + 1, high , time,dispatch,speed);
    const newArr = [...arr];
    newArr[low].curr = 1;
    newArr[high].curr = 1;
    dispatch({ type: CHNAGE_DATA, payload: newArr });
  
  }, time);

}




export const quick = (arr,speed)=>{
  let time = 0;
  speed = 100-speed;
  return dispatch=>{
    quicksort(arr,0,arr.length-1,time , dispatch,speed);

  }
}
