export default {
  "kind": "singleType",
  "collectionName": "company_pages",
  "info": {
    "singularName": "company-page",
    "pluralName": "company-pages",
    "displayName": "Company Page"
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
    "capabilities": {
      "type": "component",
      "repeatable": true,
      "component": "shared.icon-text-card"
    },
    "historyHeading": {
      "type": "string"
    },
    "historyDescription": {
      "type": "text"
    },
    "timeline": {
      "type": "component",
      "repeatable": true,
      "component": "company.timeline-entry"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    }
  }
};
