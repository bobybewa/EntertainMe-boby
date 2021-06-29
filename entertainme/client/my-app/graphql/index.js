import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
    uri: 'http://10.0.16.24:4000/',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    movies: {
                        merge(existing, incoming) {
                            return incoming
                        }
                    }
                }
            }
        }
    })
});