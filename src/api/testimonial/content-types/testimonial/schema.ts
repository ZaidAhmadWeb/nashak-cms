export default {
  "kind": "collectionType",
  "collectionName": "testimonials",
  "info": {
    "singularName": "testimonial",
    "pluralName": "testimonials",
    "displayName": "Testimonial"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "clientName": {
      "type": "string",
      "required": true
    },
    "clientLogo": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "quote": {
      "type": "text",
      "required": true
    },
    "showOnHome": {
      "type": "boolean",
      "default": false
    }
  }
};
