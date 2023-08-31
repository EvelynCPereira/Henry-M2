import {GET_STORE_NAME, DELETE_PRODUCT, ADD_PRODUCT} from './types'

const initialState = {
   list: [],
   storeName: ""
};

const rootReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ADD_PRODUCT:
         return{
            ...state,
            list: [...state.list, payload]
         }   
        case DELETE_PRODUCT:
            return{
                ...state,
                list: state.list.filter(product => product.id !== payload)
            }
        
            case GET_STORE_NAME:
                return{
                    ...state,
                    storeName: payload
                }
    
        default:
           return{
            ...state
           }
    }
}


export default rootReducer;
