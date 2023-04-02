// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const kidsApi = createApi({
  reducerPath: 'kids',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000' }),
  endpoints: (builder) => ({
    getAllKids: builder.query({
      query: () => '/kids',
    }),
    getKidsById: builder.query({
      query: (id) => `/kids/${id}`,
    }),
    getKidsByAge: builder.query({
      query: (age) => `/kids/${age}`,
    }),
    getKidsByGrade: builder.query({
      query: (grade) => `/kids/${grade}`,
    }),
  }), 
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllKidsQuery, useGetKidsByIdQuery, useGetKidsByAgeQuery, useGetKidsByGradeQuery, endpoints } = kidsApi
export default kidsApi