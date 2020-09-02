import { configureStore,} from '@reduxjs/toolkit'
import homeReducer from './slices/homeSlice'
import editReducer from './slices/editSlice'
import showReducer from './slices/showSlice'
import authSlice from './slices/authSlice'


const store = configureStore({
     reducer:{
      'home': homeReducer,
      'edit': editReducer,
      'show': showReducer,
      'auth': authSlice
      
},

})
export default store