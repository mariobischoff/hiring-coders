import {
  ApolloClient,
  from,
  HttpLink,
  ApolloLink,
  Observable,
  InMemoryCache,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const loggerLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      const subscription = forward(operation).subscribe({
        next: (result) => {
          console.log("Log: ", result);
          observer.next(result);
        },
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer),
      });

      return () => subscription.unsubscribe();
    })
);

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  fetch: window.fetch,
});

const client = new ApolloClient({
  link: from([errorLink, loggerLink, httpLink]),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

export default client;
