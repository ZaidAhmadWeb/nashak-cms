export default {
  "kind": "singleType",
  "collectionName": "contact_pages",
  "info": {
    "singularName": "contact-page",
    "pluralName": "contact-pages",
    "displayName": "Contact Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "heroHeading": {
      "type": "string"
    },
    "formSuccessMessage": {
      "type": "text"
    },
    "formErrorMessage": {
      "type": "text"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
};
