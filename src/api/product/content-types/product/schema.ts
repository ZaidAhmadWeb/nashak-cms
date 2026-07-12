export default {
  "kind": "collectionType",
  "collectionName": "products",
  "info": {
    "singularName": "product",
    "pluralName": "products",
    "displayName": "Product",
    "description": "An individual product shown under a Sub Category, with its own detail page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "name": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "name",
      "required": true
    },
    "category": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::product-category.product-category"
    },
    "cardImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "gallery": {
      "type": "media",
      "multiple": true,
      "allowedTypes": [
        "images"
      ]
    },
    "shortDescription": {
      "type": "text"
    },
    "description": {
      "type": "richtext"
    },
    "modelsAvailable": {
      "type": "integer"
    },
    "materials": {
      "type": "component",
      "repeatable": true,
      "component": "product.material"
    },
    "colors": {
      "type": "component",
      "repeatable": true,
      "component": "product.color-swatch"
    },
    "sizeOptions": {
      "type": "component",
      "repeatable": true,
      "component": "product.option-tag"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
};
