// store/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    }),
    endpoints: (builder) => ({
        getResponsibilities: builder.query<any, void>({
            query: () => ({
                url: '',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                        query ResponsibilitiesQuery {
                            getResponsibilities {
                                data {
                                    name
                                }
                            }
                        }
                    `,
                }),
            }),
            transformResponse: (response: { data: { getResponsibilities: { data: { name: string }[] } } }) =>
                response.data.getResponsibilities.data,
        }),
    }),
});

export const { useGetResponsibilitiesQuery } = apiSlice;
