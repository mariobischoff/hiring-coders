import { gql } from "apollo-server-core";

import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandsTypeDefs } from "./Demand/Demand";
import { typeDefs as listTypeDefs } from "./List/List";
import { typeDefs as nodeTypeDefs } from "./Node/Node";

const typeDefs = gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  ${nodeTypeDefs}
  ${listTypeDefs}
  ${clientTypeDefs}
  ${demandsTypeDefs}
`;

export default typeDefs;
