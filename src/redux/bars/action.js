import { CHNAGE_DATA, ENABLE_SORT_BUTTON } from "./actionType";

export const bubblesort = (arr) => {
  return (dispatch) => {
    dispatch({type : ENABLE_SORT_BUTTON , payload : false});      
    // create a copy of coming array
    let newarr = [...arr];
    let time = 0;
    // bubble sort algorithm
    for (let i = 0; i < newarr.length; i++) {
   
      
      for (let j = 0; j < newarr.length - i - 1; j++) {
        time += 1;
        setTimeout(() => {
          
          //create a new array to change state
            const newArray2 = [...newarr];
            // mark the sorted element as visited
            if (newArray2.length - i >= 0 && newArray2.length - i < 50)
                newArray2[newArray2.length - i].curr = 1;
            if(i==48){
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
            const newArray2 = [...newarr];
            dispatch({ type: CHNAGE_DATA, payload: newArray2 });
            
          }
        }, time);
      }
    }
  };
};
