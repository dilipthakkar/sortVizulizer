import { CHNAGE_DATA, ENABLE_SORT_BUTTON } from "./actionType";

var init = {
    data : [],
    enable : true
}

const BarReducer = (state = init, action)=>{
    switch (action.type) {
        case CHNAGE_DATA:
            return{
                ...state,
                data : action.payload 

            }
            break;

            case ENABLE_SORT_BUTTON:
            return{
                ...state,
                enable : action.payload 

            }
            break;
    
        default:
            return {
                ...state
            }
            break;
    }
}
export default BarReducer;