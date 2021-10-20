import * as types from './actionType'
const initialState={loading:false,currentUser:null,error:null}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return{
                ...state,
                loading:true,
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser:null
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:    
            return{
                ...state,
                loading:false,
                currentUser: action.payload,
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload,
            }
        case types.SET_USERS:
            return{
                ...state,
                loading:false,
                currentUser:action.payload,
            }
        default :
        return state
    }
}
export default userReducer