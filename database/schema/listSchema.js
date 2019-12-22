export const LIST_SCHEMA = 'LIST';

const nullableString = 'string?';
const nullableBool = 'bool?';

export const ListSchema = {
  name: LIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'int', default: 0},
    buildingId: {type: 'int', default: 0},
    buildingName: nullableString,
    streetNo: nullableString,
    streetName: nullableString,
    districtName: nullableString,
    districtId: {type: 'int', default: 0},
    bedrooms: {type: 'int', default: 0},
    bathrooms: {type: 'int', default: 0},
    netSize: {type: 'int', default: 0},
    grossSize: {type: 'int', default: 0},
    leasePrice: {type: 'int', default: 0},
    salePrice: {type: 'int', default: 0},
    floorName: nullableString,
    propertyPhoto: nullableString,
  },
};
