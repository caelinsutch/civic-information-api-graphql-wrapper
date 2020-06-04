import { RESTDataSource } from 'apollo-datasource-rest';

export class CivicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/civicinfo/v2'
  }

  async representativeInfoByAddress(key: string, address: string, includedOffices?: boolean, levels?: string, roles?: string) {
    const paramsObject: any = {
      key,
      address,
    }
    includedOffices !== undefined ? paramsObject['includedOffices'] = includedOffices : null;
    levels !== undefined ? paramsObject['levels'] = levels : null;
    roles !== undefined ? paramsObject['roles'] = roles : null;

    const result = await this.get('representatives', paramsObject);
    result['geoDivisions'] = result.divisions;
    return result;
  }
}
