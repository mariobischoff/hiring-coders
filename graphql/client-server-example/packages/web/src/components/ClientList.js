import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_CLIENT_LIST = gql`
  query GET_CLIENT_LIST($skip: Int!, $take: Int!) {
    clients(options: { skip: $skip, take: $take }) {
      items {
        id
        name
        email
      }
      totalItems
    }
  }
`;

const PAGE_SIZE = 10;

function ClientList({ onSelectClient }) {
  const { error, loading, data, fetchMore, called } = useQuery(
    GET_CLIENT_LIST,
    {
      fetchPolicy: "cache-and-network",
      variables: {
        skip: 0,
        take: PAGE_SIZE,
      },
    }
  );

  const handlerLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.clients.items.length,
        take: PAGE_SIZE,
      },
      updateQuery: (result, { fetchMoreResult }) => {
        if (!fetchMoreResult) return result;
        return {
          ...result,
          clients: {
            ...result.clients,
            items: result.clients.items.concat(fetchMoreResult.clients.items),
            totalItems: fetchMoreResult.clients.totalItems,
          },
        };
      },
    });
  };

  const clients = data?.clients.items ?? [];

  const handlerSelectClient = (client) => () => onSelectClient?.(client.id);

  if (error)
    return (
      <section>
        <strong>Erro ao buscar clientes</strong>
      </section>
    );

  if (loading && !called)
    return (
      <section>
        <span>Carregando...</span>
      </section>
    );

  return (
    <section>
      <ul>
        {clients ? (
          clients.map((client) => (
            <li
              style={{ listStyle: "none" }}
              key={client.id}
              onClick={handlerSelectClient(client)}
            >
              <p>{client.name}</p>
              <p>{client.email}</p>
              <hr></hr>
            </li>
          ))
        ) : (
          <span>Sem usuários</span>
        )}
      </ul>
      <button disabled={loading} type="button" onClick={handlerLoadMore}>
        Carregar +
      </button>
    </section>
  );
}

export default ClientList;
