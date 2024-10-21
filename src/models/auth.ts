export enum ClaimTypes {
  Permission = "Permission",
  FullName = "FullName",
  NationalCode = "NationalCode",
  PhoneNumber = "PhoneNumber",
  PersonnelId = "PersonnelId",
  CountyId = "CountyId",
  DistrictId = "DistrictId",
  RuralDistrict = "RuralDistrict",
  City = "City",
  Village = "Village",
}
export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
  claims: {
    type: ClaimTypes;
    value: string;
  }[];
};
