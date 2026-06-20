export default {
  "collectionName": "components_home_process_steps",
  "info": {
    "displayName": "Process Step",
    "icon": "arrowRight"
  },
  "options": {},
  "attributes": {
    "stepNumber": {
      "type": "integer",
      "required": true
    },
    "icon": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images",
        "files"
      ]
    },
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text",
      "required": true
    }
  }
};
