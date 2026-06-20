export default {
  "collectionName": "components_product_subtype_cards",
  "info": {
    "displayName": "Subtype Card",
    "icon": "grid"
  },
  "options": {},
  "attributes": {
    "image": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": [
        "images"
      ]
    },
    "name": {
      "type": "string",
      "required": true
    },
    "modelsAvailable": {
      "type": "integer"
    },
    "link": {
      "type": "string"
    }
  }
};
