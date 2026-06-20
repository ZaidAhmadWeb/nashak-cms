export default {
  "kind": "singleType",
  "collectionName": "products_pages",
  "info": {
    "singularName": "products-page",
    "pluralName": "products-pages",
    "displayName": "Products Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "heroHeading": {
      "type": "string"
    },
    "introHeading": {
      "type": "string"
    },
    "introDescription": {
      "type": "text"
    },
    "supplementaryServices": {
      "type": "component",
      "repeatable": true,
      "component": "shared.icon-text-card"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
};
