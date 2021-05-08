
import  BarReducer  from "../redux/bars/reducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    bars : BarReducer
})
export default rootReducer;