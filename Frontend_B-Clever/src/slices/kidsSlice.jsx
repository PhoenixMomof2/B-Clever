import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {  
  try{
    const response = await axios.get(POSTS_URL)
    return await response.json()
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})

const KIDS_URL = 'https://localhost:3000/kids'

export const fetchKids = createAsyncThunk('kids/fetchKids', async (_, thunkAPI) => {   
  // createAsyncThunk takes in two arguments: the first is a string that used as a prefix for the generated action type
  // the 2nd is a payload creator callback - should return a promise with some data
  try{
    const response = await axios.get(KIDS_URL)
    return await response.json()
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})

export const fetchCurrentKid = createAsyncThunk('kids/fetchCurrentKid', async () => {
  // createAsyncThunk takes in two arguments: the first is a string that used as a prefix for the generated action type
  // the 2nd is a payload creator callback - should return a promise with some data
  try{
    const response = await axios.get(`KIDS_URL/${kid.id}`)
    return response.data
  } catch (err) {
    return err.message
  }
})

// interface UsersState {
//   entities: []
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

export const kidsSlice = createSlice({
  name: "kids",
  initialState: {
    kids: [],
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentKid.pending, (state, {}) => {
        state.currentKid = {}
        state.status = 'loading'
      })
      .addCase(fetchCurrentKid.fulfilled, (state, action) => {    
        //set logged in set user
        state.status = 'succeeded'
        state.currentKid = payload
        return action.payload
        //  login = () => {
        //   ...state,
        //   user: action.payload,
        //   loggedIn: true,
        //   state: user
        // }
      })
      .addCase(fetchCurrentKid.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })     
      .addCase(fetchKids.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchKids.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const loadedKids = action.payload.map(kid => {
          kid.id,
          kid.name,
          kid.age,
          kid.grade,
          kid.avatar
        })
        console.log(loadedKids) 
      })
      .addCase(fetchKids.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })     
    // Add reducers for additional action types here, and handle loading state as needed
  }
})

export const selectAllKids = (state) => state.kids
export const getKidsStatus = (state) => state.kids.status
export const getKidsError = (state) => state.kids.error
export const selectCurrentKid = (state) => state.kid
export const getKidStatus = (state) => state.kid.status
export const getKidError = (state) => state.kid.error
// export const { fetchKids, fetchCurrentKid } = kidsSlice.extraReducers
export default kidsSlice.reducer