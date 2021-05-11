import { CHNAGE_DATA, CHNAGE_DENSE, CHNAGE_SPEED, ENABLE_SORT_BUTTON } from "./actionType";

var init = {
    data : [],
    enable : true,
    speed : 0,
    dense : 50
}

const BarReducer = (state = init, action)=>{
    switch (action.type) {
        case CHNAGE_DATA:
            return{
                ...state,
                data : action.payload 

            }
            break;

            case CHNAGE_DENSE:
            return{
                ...state,
                dense : action.payload 

            }
            break;case CHNAGE_SPEED:
            return{
                ...state,
                speed : action.payload 

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