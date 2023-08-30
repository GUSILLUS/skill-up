import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../shared/types/user';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
    updateUser: builder.mutation<User, { id: number; updatedUser: Partial<User> }>({
      query: ({ id, updatedUser }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: updatedUser,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;