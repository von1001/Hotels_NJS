{
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "REST API",
      "description": ""
    },
    "host": "localhost:3000",
    "basePath": "/",
    "schemes": [
      "http"
    ],
    "paths": {
      "/auth/signup": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "username": {
                    "example": "any"
                  },
                  "role": {
                    "example": "any"
                  },
                  "region": {
                    "example": "any"
                  },
                  "password": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/auth/signin": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "username": {
                    "example": "any"
                  },
                  "password": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "401": {
              "description": "Unauthorized"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/bundles/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "price": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/bundles/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "price": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/categories/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/categories/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/characteristic/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "type": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/characteristic/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "type": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/companies/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {}
        }
      },
      "/companies/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/games/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "publishYear": {
                    "example": "any"
                  },
                  "publisher": {
                    "example": "any"
                  },
                  "poster": {
                    "example": "any"
                  },
                  "description": {
                    "example": "any"
                  },
                  "price": {
                    "example": "any"
                  },
                  "ageLimit": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/games/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  },
                  "publishYear": {
                    "example": "any"
                  },
                  "publisher": {
                    "example": "any"
                  },
                  "poster": {
                    "example": "any"
                  },
                  "description": {
                    "example": "any"
                  },
                  "price": {
                    "example": "any"
                  },
                  "ageLimit": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/games/addCompanies/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "сompanies": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/removeCompanies/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "сompanies": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/addCategories/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "сategories": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/removeCategories/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "сategories": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/addPlatforms/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "platforms": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/removePlatforms/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "platforms": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            }
          }
        }
      },
      "/games/company/{company}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "company",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        }
      },
      "/games/category/{category}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "category",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        }
      },
      "/games/bundle/{bundle}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "bundle",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        }
      },
      "/games/platform/{platform}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "platform",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        }
      },
      "/platforms/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/platforms/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/region/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/region/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/review/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "reviewText": {
                    "example": "any"
                  },
                  "gameUserId": {
                    "example": "any"
                  },
                  "grade": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/review/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "reviewText": {
                    "example": "any"
                  },
                  "gameUserId": {
                    "example": "any"
                  },
                  "grade": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      },
      "/role/": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/role/{id}": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        },
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "x-access-token",
              "in": "header",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Unauthorized"
            },
            "403": {
              "description": "Forbidden"
            }
          }
        }
      }
    }
  }