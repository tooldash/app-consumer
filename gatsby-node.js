require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });

const algoliasearch = require('algoliasearch');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );

    const index = searchClient.initIndex(process.env.GATSBY_ALGOLIA_PRODUCT_INDEX);

    const response = await index.search('', {});

    const products = [];
    response.hits.forEach(hit => {
        products.push({
            "url": hit.url,
            "slug": hit.slug,
            "model_number": hit.model_number,
            "sku": hit.sku,
            "id": hit.product_id,
            "stripe_price_id": hit.stripe_price_id,
            "name": hit.product_name,
            "manufacturer": hit.manufacturer,
            "price": hit.final_price,
            "in_stock": hit.in_stock, 
            "category": hit.category, 
            "category_root": hit.root_category,
            "category_tree": hit.category_tree,
        });
    });

    // create product pages
    products.map((product) => {
        createPage({
            path: `/product/${product.slug}`,
            component: require.resolve('./src/templates/product.js'),
            context: { product },
        });
    });

    // create home page
    createPage({
        path: "/",
        component: require.resolve("./src/templates/home.js"),
        context: { products },
      });
};