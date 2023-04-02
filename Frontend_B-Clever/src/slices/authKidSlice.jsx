import { createSlice } from '@reduxjs/toolkit'
import { kidsApi } from '../services/kids'
import type { store } from '../redux/store'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      kidsApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.kid = payload.kid
      }
    )
  },
})

export default authSlice.reducer

export const selectCurrentKid = (state: RootState) => state.auth.kid