import {CivicAPI} from '../datasource';

interface representativeInfoByAddressInterface {
  apiKey: string,
  address: string,
  includeOffices?: boolean,
  level?: string,
  role?: string
}

export const Query = {
  representativeInfoByAddress(root: any, args: representativeInfoByAddressInterface, ex: any) {
    const civicAPI: CivicAPI = ex.dataSources.civicAPI;
    return civicAPI.representativeInfoByAddress(args.apiKey, args.address, args.includeOffices, args.level, args.role);
  }
}
