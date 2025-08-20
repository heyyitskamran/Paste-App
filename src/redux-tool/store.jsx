import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../redux-tool/pasteSlice.jsx'


export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})