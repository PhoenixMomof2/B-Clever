import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export interface Kid {
  first_name: string
  last_name: string
}

export interface KidResponse {
  kid: Kid
  token: string
}

export interface LoginRequest {
  name: string
  password: string
}
// export const kidsApi = createApi({
//   reducerPath: 'kids',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000' }),
//   endpoints: (builder) => ({
//     getAllKids: builder.query({
//       query: () => '/kids',
//     }),
//     getKidsById: builder.query({
//       query: (id) => `/kids/${id}`,
//     }),
//   }),
// });

export const currentKid = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/users',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = api
