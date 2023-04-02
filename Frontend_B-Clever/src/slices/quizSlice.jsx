import { createSlice} from '@reduxjs/toolkit' 

const initialState = [
  {id: 1, expression: "21 + 43",}, {id: 2, expression: "17 + 13",}, {id: 3, expression: "23 + 12", 
  }, {id: 4, expression: "13 + 56",}, {id: 5, expression: "49 + 9",}, {id: 6, expression: "36 + 14", 
  }, {id: 7, expression: "16 + 52",}, {id: 8, expression: "73 + 11",}, {id: 9, expression: "86 + 13", 
  }, {id: 10, expression: "15 + 31",}]


  export const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,

})

export const { login, logout, signup } = quizSlice.actions
export default quizSlice.reducer
