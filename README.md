# civic-information-api-graphql-wrapper
Wrapper around the Google Civic Information REST API for GraphQL. Playground is publically accessible to easily explore available data.

## Getting Started
[Create a Google API Key](https://support.google.com/googleapi/answer/6158862?hl=en) to use this API. Open up the GraphQL data playground [here](https://civics-api.azurewebsites.net/) to see the data that's available. 

```javascript
representativeInfoByAddress(
    apiKey: String! // API Key from Google
    address: String! // Address in String format, ex. 1532 John Cir, My Town California
    includeOffices: Boolean // Whether to return information about offices and officials. If false, only the top-level district information will be returned. (Default: true)
    level: Levels // A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
    role: Role // A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
)
```

### Levels
Acceptable values are:
- "administrativeArea1"
- "administrativeArea2"
- "country"
- "international"
- "locality"
- "regional"
- "special"
- "subLocality1"
- "subLocality2"

### Roles
A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.

Acceptable values are:
- "deputyHeadOfGovernment"
- "executiveCouncil"
- "governmentOfficer"
- "headOfGovernment"
- "headOfState"
- "highestCourtJudge"
- "judge"
- "legislatorLowerBody"
- "legislatorUpperBody"
- "schoolBoard"
- "specialPurposeOfficer"
## Available Information
Currently, the [Representative Information by address](https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByAddress) API is exposed, allowing the access of local government officials and their related data (email, name, socials, etc.)
