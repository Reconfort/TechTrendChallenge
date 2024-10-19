"use client"
import client from '@/lib/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

interface ApolloProviderSProps {
    children: ReactNode;
}

const ApolloProviders = ({ children }: ApolloProviderSProps) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloProviders;
