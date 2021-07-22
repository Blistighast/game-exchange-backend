// At its simplest access control returns a yes or no value depending on the users session

import { ListAccessArgs } from './types';
import { permissionList } from './schemas/fields';

// !! takes falsy or truthy values and coerces them into "true" booleans true and false

export function isSignedIn({ session }: ListAccessArgs) {
  // if session is undefined the !! makes it return false
  return !!session;
}

// fromEntries takes an array of key values and turns into an object
// ex:
// Object.fromEntries([['name', 'Brian']])
// returns {name: 'Brian'}

const generatedPermissions = Object.fromEntries(
  permissionList.map((permission) => [
    permission, // the key
    function ({ session }: ListAccessArgs) {
      // the value
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria, yes or no
export const permissions = {
  // instead this gets created by generatedPermissions, can still create more permissions after if needed
  // canManageProducts({ session }) {
  //   return session?.data.role?.canManageProducts;
  // },
  ...generatedPermissions,
};

// rule based functions
// rules can return a boolean or a filter which limits which propducts they can CRUD

export const rules = {
  canManageProducts({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1 do they have permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2 if not do they own this item?\
    // below is "where" filter in graphQL "where user is owner of product"
    return { user: { id: session.itemId } };
  },
  canOrder({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1 do they have permission of canManageCart
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2 if not do they own this item?
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1 do they have permission of canManageCart
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2 if not does the owner of the order also own the item
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }): ListAccessArgs {
    if (permissions.canManageProducts({ session })) {
      return true; // can read everything
    }
    // otherwise they should only see available products (based on status field)
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1 do they have permission of canManageUsers
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // 2 otherwise may only update themselves
    return { id: session.itemId };
  },
};
