import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse } from './types.js';

export const api = createApi({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis']
    }),
  })
})

export const { useGetKpisQuery } = api;
