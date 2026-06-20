export default {
  "kind": "singleType",
  "collectionName": "sustainability_pages",
  "info": {
    "singularName": "sustainability-page",
    "pluralName": "sustainability-pages",
    "displayName": "Sustainability Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "heroImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "heroHeading": {
      "type": "string"
    },
    "introText": {
      "type": "text"
    },
    "environmentHeading": {
      "type": "string"
    },
    "environmentDescription": {
      "type": "text"
    },
    "environmentCards": {
      "type": "component",
      "repeatable": true,
      "component": "shared.icon-text-card"
    },
    "corporateHeading": {
      "type": "string"
    },
    "corporateDescription": {
      "type": "text"
    },
    "corporateCards": {
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
