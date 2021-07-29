module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u4g4");


/***/ }),

/***/ "1muL":
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "3SxR":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/auth");

/***/ }),

/***/ "48JS":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/cloudinary");

/***/ }),

/***/ "99Vv":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/fields");

/***/ }),

/***/ "DBBG":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/schema");

/***/ }),

/***/ "Kfaf":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/session");

/***/ }),

/***/ "VnZ6":
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "u4g4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ backend_keystone; });

// EXTERNAL MODULE: external "@keystone-next/keystone/schema"
var schema_ = __webpack_require__("DBBG");

// EXTERNAL MODULE: external "@keystone-next/auth"
var auth_ = __webpack_require__("3SxR");

// EXTERNAL MODULE: external "@keystone-next/keystone/session"
var session_ = __webpack_require__("Kfaf");

// EXTERNAL MODULE: external "dotenv/config"
var config_ = __webpack_require__("VnZ6");

// EXTERNAL MODULE: external "@keystone-next/fields"
var fields_ = __webpack_require__("99Vv");

// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/fields.ts

const permissionFields = {
  canManageProducts: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can Update and Delete any product'
  }),
  canSeeOtherUsers: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can Query other users'
  }),
  canManageUsers: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can Edit other users'
  }),
  canManageRoles: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can CRUD roles'
  }),
  canManageCart: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can see and manage cart and cart items'
  }),
  canManageOrders: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can see and manage orders'
  })
};
// this makes an array of all the keys of permissionFields as permissionList
// so they dont all have to be typed elsewhere
const permissionList = Object.keys(permissionFields);
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/access.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// At its simplest access control returns a yes or no value depending on the users session
 // !! takes falsy or truthy values and coerces them into "true" booleans true and false

function isSignedIn({
  session
}) {
  // if session is undefined the !! makes it return false
  return !!session;
} // fromEntries takes an array of key values and turns into an object
// ex:
// Object.fromEntries([['name', 'Brian']])
// returns {name: 'Brian'}

const generatedPermissions = Object.fromEntries(permissionList.map(permission => [permission, // the key
function ({
  session
}) {
  var _session$data$role;

  // the value
  return !!(session === null || session === void 0 ? void 0 : (_session$data$role = session.data.role) === null || _session$data$role === void 0 ? void 0 : _session$data$role[permission]);
}])); // Permissions check if someone meets a criteria, yes or no

const permissions = _objectSpread({}, generatedPermissions); // rule based functions
// rules can return a boolean or a filter which limits which propducts they can CRUD

const rules = {
  canManageProducts({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    } // 1 do they have permission of canManageProducts


    if (permissions.canManageProducts({
      session
    })) {
      return true;
    } // 2 if not do they own this item?\
    // below is "where" filter in graphQL "where user is owner of product"


    return {
      user: {
        id: session.itemId
      }
    };
  },

  canOrder({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    } // 1 do they have permission of canManageCart


    if (permissions.canManageCart({
      session
    })) {
      return true;
    } // 2 if not do they own this item?


    return {
      user: {
        id: session.itemId
      }
    };
  },

  canManageOrderItems({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    } // 1 do they have permission of canManageCart


    if (permissions.canManageCart({
      session
    })) {
      return true;
    } // 2 if not does the owner of the order also own the item


    return {
      order: {
        user: {
          id: session.itemId
        }
      }
    };
  },

  canReadProducts({
    session
  }) {
    if (permissions.canManageProducts({
      session
    })) {
      return true; // can read everything
    } // otherwise they should only see available products (based on status field)


    return {
      status: 'AVAILABLE'
    };
  },

  canManageUsers({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    } // 1 do they have permission of canManageUsers


    if (permissions.canManageUsers({
      session
    })) {
      return true;
    } // 2 otherwise may only update themselves


    return {
      id: session.itemId
    };
  }

};
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/User.ts



const User = Object(schema_["list"])({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves
    // youi cant delete yourself
    delete: permissions.canManageUsers
  },
  ui: {
    // hide the backend ui from regular users
    hideCreate: args => !permissions.canManageUsers(args),
    hideDelete: args => !permissions.canManageUsers(args)
  },
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    email: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    password: Object(fields_["password"])(),
    cart: Object(fields_["relationship"])({
      ref: 'CartItem.user',
      many: true,
      // user can have multiple relationships to cart items
      ui: {
        createView: {
          fieldMode: 'hidden'
        },
        itemView: {
          fieldMode: 'read'
        }
      }
    }),
    orders: Object(fields_["relationship"])({
      ref: 'Order.user',
      many: true
    }),
    role: Object(fields_["relationship"])({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers
      }
    }),
    products: Object(fields_["relationship"])({
      ref: 'Product.user',
      many: true
    })
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/Product.ts



const Product = Object(schema_["list"])({
  access: {
    create: isSignedIn,
    read: rules.canReadProducts,
    update: rules.canManageProducts,
    delete: rules.canManageProducts
  },
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    photo: Object(fields_["relationship"])({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {
          fields: ['image', 'altText']
        },
        inlineEdit: {
          fields: ['image', 'altText']
        }
      }
    }),
    // relationship to photo
    status: Object(fields_["select"])({
      options: [{
        label: 'Draft',
        value: 'DRAFT'
      }, {
        label: 'Available',
        value: 'AVAILABLE'
      }, {
        label: 'Unavailable',
        value: 'UNAVAILABLE'
      }],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden'
        }
      }
    }),
    price: Object(fields_["integer"])(),
    user: Object(fields_["relationship"])({
      ref: 'User.products',
      defaultValue: ({
        context
      }) => ({
        connect: {
          id: context.session.itemId
        }
      })
    }) // TODO photo

  }
});
// EXTERNAL MODULE: external "@keystone-next/cloudinary"
var cloudinary_ = __webpack_require__("48JS");

// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/ProductImage.ts





const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'mockstore'
};
const ProductImage = Object(schema_["list"])({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts
  },
  fields: {
    image: Object(cloudinary_["cloudinaryImage"])({
      cloudinary,
      label: 'Source'
    }),
    altText: Object(fields_["text"])(),
    product: Object(fields_["relationship"])({
      ref: 'Product.photo'
    })
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product']
    }
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/CartItem.ts



const CartItem = Object(schema_["list"])({
  access: {
    create: isSignedIn,
    read: rules.canOrder,
    update: rules.canOrder,
    delete: rules.canOrder
  },
  ui: {
    listView: {
      // defaults what column info to initially show on keystone
      initialColumns: ['quantity', 'product', 'user']
    }
  },
  fields: {
    // TODO: Custom Label in here
    quantity: Object(fields_["integer"])({
      defaultValue: 1,
      isRequired: true
    }),
    product: Object(fields_["relationship"])({
      ref: 'Product'
    }),
    user: Object(fields_["relationship"])({
      ref: 'User.cart'
    })
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/seed-data/data.ts
function timestamp() {
  // sometime in the last 30 days
  const stampy = Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

const products = [{
  name: 'Yeti Hondo',
  description: 'soo nice',
  status: 'AVAILABLE',
  price: 3423,
  photo: {
    id: '5dfbed262849d7961377c2c0',
    filename: 'hondo.jpg',
    originalFilename: 'hondo.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5dfbed262849d7961377c2c0',
      version: 1576791335,
      signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
      width: 750,
      height: 457,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 27871,
      type: 'upload',
      etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
      original_filename: 'file'
    }
  } // createdBy: null,
  // updatedBy: null,
  // updatedAt_utc: '2020-12-19T21:35:35.739Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-12-19T21:35:35.739Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Airmax 270',
  description: 'Great shoes!',
  status: 'AVAILABLE',
  price: 5234,
  photo: {
    id: '5e2a13f0689b2835ae71d1a5',
    filename: '270-camo-sunset.jpg',
    originalFilename: '270-camo-sunset.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a13f0689b2835ae71d1a5',
      version: 1579815920,
      signature: 'a430b2d35f6a03dc562f6f56a474deb6810e393f',
      width: 960,
      height: 640,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 45455,
      type: 'upload',
      etag: 'aebe8e9cc98ee4ad71682f19af85745b',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:20.833Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:20.833Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'KITH Hoodie',
  description: 'Love this hoodie',
  status: 'AVAILABLE',
  price: 23562,
  photo: {
    id: '5e2a13ff689b2835ae71d1a7',
    filename: 'kith-hoodie.jpg',
    originalFilename: 'kith-hoodie.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a13ff689b2835ae71d1a7',
      version: 1579815935,
      signature: '360df116020320a14845cf235b87a4a5cdc23f86',
      width: 2000,
      height: 2000,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 202924,
      type: 'upload',
      etag: 'b6fbc18b196c68e2b87f51539b849e70',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:36.012Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:36.012Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Fanorak',
  description: 'Super hip. Comes in a number of colours',
  status: 'AVAILABLE',
  price: 252342,
  photo: {
    id: '5e2a1413689b2835ae71d1a9',
    filename: 'TNF-fanorak.png',
    originalFilename: 'TNF-fanorak.png',
    mimetype: 'image/png',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a1413689b2835ae71d1a9',
      version: 1579815957,
      signature: 'affd16fa20107a4d5399aab553ea77fff1c4b2ef',
      width: 1276,
      height: 1490,
      format: 'png',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 2454948,
      type: 'upload',
      etag: 'ce0f36da93c60c5d4406657225206f70',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:58.336Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:58.336Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Nike Vapormax',
  description: 'Kind of squeaky on some floors',
  status: 'AVAILABLE',
  price: 83456,
  photo: {
    id: '5e2a142c689b2835ae71d1ab',
    filename: 'vapormax.jpg',
    originalFilename: 'vapormax.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a142c689b2835ae71d1ab',
      version: 1579815980,
      signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
      width: 1100,
      height: 735,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 183071,
      type: 'upload',
      etag: '5550566c7fab113ba32d85ed08f54faa',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:46:21.015Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:46:21.015Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Yeti Cooler',
  description: 'Who spends this much on a cooler?!',
  status: 'AVAILABLE',
  price: 75654,
  photo: {
    id: '5e2a143f689b2835ae71d1ad',
    filename: 'coral-yeti.jpg',
    originalFilename: 'coral-yeti.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a143f689b2835ae71d1ad',
      version: 1579815999,
      signature: '97e8f27cdbb6a736062391b9ac3a5c689bd50646',
      width: 1300,
      height: 1144,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 286643,
      type: 'upload',
      etag: '3655bfd83998492b8421782db868c9df',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:46:40.526Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:46:40.526Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Naked and Famous Denim',
  description: 'Japanese Denim, made in Canada',
  status: 'AVAILABLE',
  price: 10924,
  photo: {
    id: '5e2a145d689b2835ae71d1af',
    filename: 'naked-and-famous-denim.jpg',
    originalFilename: 'naked-and-famous-denim.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a145d689b2835ae71d1af',
      version: 1579816030,
      signature: '76dec3670cc4a4c22723720bb94496a35945c626',
      width: 1024,
      height: 683,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 146817,
      type: 'upload',
      etag: '3d68591332785ae5273ed43b1aa91712',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:47:11.415Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:47:11.415Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Rimowa Luggage',
  description: 'S T E A L T H',
  status: 'AVAILABLE',
  price: 47734,
  photo: {
    id: '5e2a147b689b2835ae71d1b1',
    filename: 'rimowa.png',
    originalFilename: 'rimowa.png',
    mimetype: 'image/png',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a147b689b2835ae71d1b1',
      version: 1579816060,
      signature: 'a6161568d2d59a59e8dba9b15e705581198ea377',
      width: 800,
      height: 1004,
      format: 'png',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 953657,
      type: 'upload',
      etag: 'd89ab8ecc366bc63464a3eeef6ef3010',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:47:41.358Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:47:41.358Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Black Hole ',
  description: 'Outdoorsy ',
  status: 'AVAILABLE',
  price: 4534,
  photo: {
    id: '5e2a149b689b2835ae71d1b3',
    filename: 'patagonia black hole.jpg',
    originalFilename: 'patagonia black hole.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a149b689b2835ae71d1b3',
      version: 1579816093,
      signature: '6ac148051cb4ba0227ee49fd61fa1348ab4a9870',
      width: 2000,
      height: 2000,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 515360,
      type: 'upload',
      etag: '8aed0984d37a3d12faa832860b29d24b',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:13.812Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:13.812Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Nudie Belt',
  description: 'Sick design',
  status: 'AVAILABLE',
  price: 5234,
  photo: {
    id: '5e2a14b1689b2835ae71d1b5',
    filename: 'nudie-belt.jpg',
    originalFilename: 'nudie-belt.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14b1689b2835ae71d1b5',
      version: 1579816114,
      signature: '24f3ff4ae91dfcc8d1ddeb1a713215730e834be4',
      width: 650,
      height: 650,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 71291,
      type: 'upload',
      etag: '3a4b97ef88c550dcd6c2d399d1bc698e',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:34.398Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:34.398Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Goose',
  description: 'Keep warm.',
  status: 'AVAILABLE',
  price: 74544,
  photo: {
    id: '5e2a14bf689b2835ae71d1b7',
    filename: 'canada-goose.jpg',
    originalFilename: 'canada-goose.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14bf689b2835ae71d1b7',
      version: 1579816128,
      signature: 'bebf3d817e91cdbb91768e8c9c2133a78798a317',
      width: 800,
      height: 800,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 180261,
      type: 'upload',
      etag: 'f9c8725f815a6873cbdc47ba3f869049',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:48.633Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:48.633Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Ultraboost',
  description: 'blacked out',
  status: 'AVAILABLE',
  price: 6344,
  photo: {
    id: '5e2a14cc689b2835ae71d1b9',
    filename: 'ultra-boost.jpg',
    originalFilename: 'ultra-boost.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14cc689b2835ae71d1b9',
      version: 1579816141,
      signature: '18720c13b7f6d4fcde919dddb33d1c711a459c14',
      width: 565,
      height: 372,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 50754,
      type: 'upload',
      etag: '44cf57f8218f135b82cfa5df0da92a49',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:49:01.569Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:49:01.569Z',
  // createdAt_offset: '+00:00',

}];
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/seed-data/index.ts

async function insertSeedData(ks) {
  var _keystone$adapters;

  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = ((_keystone$adapters = keystone.adapters) === null || _keystone$adapters === void 0 ? void 0 : _keystone$adapters.MongooseAdapter) || keystone.adapter;
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const {
    mongoose
  } = adapter;

  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const {
      _id
    } = await mongoose.model('ProductImage').create({
      image: product.photo,
      altText: product.description
    });
    product.photo = _id;
    await mongoose.model('Product').create(product);
  }

  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__("1muL");

// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/lib/mail.ts

const transport = Object(external_nodemailer_["createTransport"])({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

function makeEmail(text) {
  return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px
    ">
      <h2>Hi There! </h2>
      <p>${text}</p>
      <p>Regards, Brian Guterl</p>
    </div>
  `;
}

async function sendPasswordResetEmail(resetToken, to) {
  // above is stating the function will return a promise, which will eventually return nothing
  // email the user a token
  const info = await transport.sendMail({
    to,
    from: 'test@example.com',
    subject: 'Your password reset token',
    html: makeEmail(`Here is your password reset token.
     
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click here to reset</a>
    `)
  });

  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`Message Sent! Preview it at ${Object(external_nodemailer_["getTestMessageUrl"])(info)}`);
  }
}
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/mutations/addToCart.ts
/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable no-return-await */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/restrict-template-expressions */

/* eslint-disable @typescript-eslint/no-unsafe-return */
async function addToCart(root, {
  productId
}, context) {
  console.log('ADDING TO CART!!'); // 1 query the current user and see if signed in

  const sesh = context.session;

  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this');
  } // 2 query the current users cart


  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: {
        id: sesh.itemId
      },
      product: {
        id: productId
      }
    },
    resolveFields: 'id,quantity' // what you want back

  });
  const [existingCartItem] = allCartItems; // destructures first item in array of allCartItems
  // 3 see if item being added is already in cart

  if (existingCartItem) {
    console.log(`there are already ${existingCartItem.quantity}, increment by 1`); // 4 if it is increment by 1

    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: {
        quantity: existingCartItem.quantity + 1
      }
    });
  } // 5 if it isnt create new cart item


  return await context.lists.CartItem.createOne({
    data: {
      product: {
        connect: {
          id: productId
        }
      },
      user: {
        connect: {
          id: sesh.itemId
        }
      }
    }
  });
}
// EXTERNAL MODULE: external "stripe"
var external_stripe_ = __webpack_require__("usZV");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_);

// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/lib/stripe.ts

const stripeConfig = new external_stripe_default.a(process.env.STRIPE_SECRET || '', {
  apiVersion: '2020-08-27'
});
/* harmony default export */ var stripe = (stripeConfig);
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/mutations/checkout.ts
/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable no-return-await */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/restrict-template-expressions */

/* eslint-disable @typescript-eslint/no-unsafe-return */

const graphql = String.raw;
async function checkout(root, {
  token
}, context) {
  // 1 make sure they are signed in
  const userId = context.session.itemId;

  if (!userId) {
    throw new Error('Sorry! You must be signed in to create an order.');
  } // 1.5 query the current user


  const user = await context.lists.User.findOne({
    where: {
      id: userId
    },
    resolveFields: graphql`
      id
      name
      email
      cart {
        id
        quantity
        product {
          name
          price
          description
          id
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `
  });
  console.dir(user, {
    depth: null
  }); // 2 calculate the total price for their order
  // below checks if item was deleted since being added to the cart

  const cartItems = user.cart.filter(cartItem => cartItem.product);
  const amount = cartItems.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
  console.log(amount); // 3 create the charge with the stripe library

  const charge = await stripe.paymentIntents.create({
    amount,
    currency: 'USD',
    confirm: true,
    payment_method: token
  }).catch(err => {
    console.log(err);
    throw new Error(err.message);
  });
  console.log(charge); // 4 convert the cart items to order items

  const orderItems = cartItems.map(cartItem => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: {
        connect: {
          id: cartItem.product.photo.id
        }
      }
    };
    return orderItem;
  }); // 5 create the order and return it

  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: {
        create: orderItems
      },
      user: {
        connect: {
          id: userId
        }
      }
    }
  }); // 6 clean up any old cart items

  const cartItemIds = user.cart.map(cartItem => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemIds
  });
  return order;
}
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/mutations/index.ts


 // this makes a fake graphql tagged template literal
// allows to get the text highlighting making it easier to write, so it isnt all same color

const mutations_graphql = String.raw; // makes it look like graphql but turns it back into the needed string

const extendGraphqlSchema = Object(schema_["graphQLSchemaExtension"])({
  typeDefs: mutations_graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      checkout(token: String!): Order
    }
  `,
  resolvers: {
    Mutation: {
      addToCart: addToCart,
      checkout: checkout
    }
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/OrderItem.ts



const OrderItem = Object(schema_["list"])({
  access: {
    create: isSignedIn,
    read: rules.canManageOrderItems,
    update: () => false,
    delete: () => false
  },
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    photo: Object(fields_["relationship"])({
      ref: 'ProductImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {
          fields: ['image', 'altText']
        },
        inlineEdit: {
          fields: ['image', 'altText']
        }
      }
    }),
    // relationship to photo
    price: Object(fields_["integer"])(),
    quantity: Object(fields_["integer"])(),
    order: Object(fields_["relationship"])({
      ref: 'Order.items'
    })
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/lib/formatMoney.ts
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
function formatMoney(cents) {
  const dollars = cents / 100;
  return formatter.format(dollars);
}
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/Order.ts




const Order = Object(schema_["list"])({
  access: {
    create: isSignedIn,
    read: rules.canOrder,
    update: () => false,
    delete: () => false
  },
  fields: {
    label: Object(fields_["virtual"])({
      graphQLReturnType: 'String',

      resolver(item) {
        return `${formatMoney(item.total)}`;
      }

    }),
    total: Object(fields_["integer"])(),
    items: Object(fields_["relationship"])({
      ref: 'OrderItem.order',
      many: true
    }),
    user: Object(fields_["relationship"])({
      ref: 'User.orders'
    }),
    charge: Object(fields_["text"])()
  }
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/schemas/Role.ts
function Role_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Role_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Role_ownKeys(Object(source), true).forEach(function (key) { Role_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Role_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Role_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Role = Object(schema_["list"])({
  access: {
    create: permissions.canManageRoles,
    read: permissions.canManageRoles,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles
  },
  ui: {
    hideCreate: args => !permissions.canManageRoles(args),
    hideDelete: args => !permissions.canManageRoles(args),
    isHidden: args => !permissions.canManageRoles(args)
  },
  fields: Role_objectSpread(Role_objectSpread({
    name: Object(fields_["text"])({
      isRequired: true
    })
  }, permissionFields), {}, {
    // adds the permissions
    assignedTo: Object(fields_["relationship"])({
      ref: 'User.role',
      // TODO add this to the user
      many: true,
      ui: {
        itemView: {
          fieldMode: 'read'
        }
      }
    })
  })
});
// CONCATENATED MODULE: /mnt/c/Users/brian/desktop/React Apps/full-stack-course/backend/keystone.ts















const databaseURL = process.env.DATABASE_URL || 'mongo://localhost/keystone-mock-store';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  // how long should they stay signed in?
  secret: process.env.COOKIE_SECRET
};
const {
  withAuth
} = Object(auth_["createAuth"])({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'] // TODO: add in initial roles here

  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    }

  }
});
/* harmony default export */ var backend_keystone = (withAuth(Object(schema_["config"])({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    },
    port: parseInt(process.env.PORT) || 3000
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,

    async onConnect(keystone) {
      console.log('connected to the database');

      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    }

  },
  lists: Object(schema_["createSchema"])({
    // schema items go in here
    User: User,
    Product: Product,
    ProductImage: ProductImage,
    CartItem: CartItem,
    OrderItem: OrderItem,
    Order: Order,
    Role: Role
  }),
  extendGraphqlSchema: extendGraphqlSchema,
  ui: {
    // show ui only for people who pass this test
    isAccessAllowed: ({
      session
    }) => // console.log(session);
    !!(session === null || session === void 0 ? void 0 : session.data)
  },
  session: Object(session_["withItemData"])(Object(session_["statelessSessions"])(sessionConfig), {
    // GraphQL query
    // changes permissionList array of keys into string to query
    User: `id name email role { ${permissionList.join(' ')} }`
  })
})));
// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ var _keystone_api_build = __webpack_exports__["default"] = (function (req, res) {
  return res.status(500);
});

/***/ }),

/***/ "usZV":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ })

/******/ });