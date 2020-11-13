const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { loadSchema } = require('@graphql-tools/load');
const { JsonFileLoader } = require('@graphql-tools/json-file-loader');

const app = express();

// yarn codegen must run first so ./graphql.schema.json is available to use here
loadSchema('./graphql.schema.json', {
  loaders: [new JsonFileLoader()],
})
  .then(async (schema) => {
    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      }),
    );
    app.listen(4000);
    console.log(
      'Running a GraphQL API server at http://localhost:4000/graphql',
    );
  })
  .catch((err) => {
    console.error('Unable to load schema definitions', err);
  });