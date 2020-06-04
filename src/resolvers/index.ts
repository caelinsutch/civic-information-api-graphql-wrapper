import {Query} from './Query';
import {GraphQLScalarType, Kind} from 'graphql';
import {GraphQLJSON} from '../scalars/json';

const levels = ["administrativeArea1", "administrativeArea2",
  "country",
  "international",
  "locality",
  "regional",
  "special",
  "subLocality1",
  "subLocality2"]

const roles = ["deputyHeadOfGovernment",
  "executiveCouncil",
  "governmentOfficer",
  "headOfGovernment",
  "headOfState",
  "highestCourtJudge",
  "judge",
  "legislatorLowerBody",
  "legislatorUpperBody",
  "schoolBoard",
  "specialPurposeOfficer"]

function isLevel(value: string) {
  return (levels.indexOf(value) >= 0) ? value : null
}

function isRole(value: string) {
  return (roles.indexOf(value) >= 0) ? value : null
}

const Level = new GraphQLScalarType({
  name: 'Levels',
  description: 'Varous governmental levels',
  serialize: isLevel,
  parseValue: isLevel,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return isLevel(ast.value);
    }
    return null
  }
})
const Role = new GraphQLScalarType({
  name: 'Role',
  description: 'Various governmental roles',
  serialize: isRole,
  parseValue: isRole,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return isRole(ast.value);
    }
    return null
  }
})

export default {
  Query,
  Level,
  JSON: GraphQLJSON,
  Role,
}
