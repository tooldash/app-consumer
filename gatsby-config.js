require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myQuery = `
  query {
    pages: allSitePage {
      nodes {
        # querying id is required
        id
        component
        path
        componentChunkName
        # jsonName
        # internal {
          # querying internal.contentDigest is required
          # contentDigest
          # type
          # owner
        # }
      }
    }
  }
`;

const queries = [
  {
    query: myQuery,
    queryVariables: {}, // optional. Allows you to use graphql query variables in the query
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'pages', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
  },
];

module.exports = {
  siteMetadata: {
    title: `app-consumer`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Algolia Search
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: '0RZC3V8ZBW', // process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: 'd0a9da35d859649a04ec247f48c88e0d', // process.env.ALGOLIA_API_KEY,
        indexName: 'pages', // process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
        concurrentQueries: false, // default: true
        dryRun: false, // default: false, only calculate which objects would be indexed, but do not push to Algolia
        continueOnFailure: false, // default: false, don't fail the build if Algolia indexing fails
        algoliasearchOptions: undefined, // default: { timeouts: { connect: 1, read: 30, write: 30 } }, pass any different options to the algoliasearch constructor
      },
    },
  ],
}