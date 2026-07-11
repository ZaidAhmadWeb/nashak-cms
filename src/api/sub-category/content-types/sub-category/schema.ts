export default {
  "kind": "collectionType",
  "collectionName": "sub_categories",
  "info": {
    "singularName": "sub-category",
    "pluralName": "sub-categories",
    "displayName": "Sub Category",
    "description": "A sub-category nested under a Product Category (e.g. Competition Rings under Ring & Cage)"
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
    "heroImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "introHeading": {
      "type": "string"
    },
    "introDescription": {
      "type": "richtext"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
};
