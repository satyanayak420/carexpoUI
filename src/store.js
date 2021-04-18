import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { carListReducer } from './reducers/carReducer.js'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

//here composeEnhancer is 'composewithdevtools'

const reducer = combineReducers({
  carList: carListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  cars: [],
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
