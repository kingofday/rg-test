import {
  TCropsPercentageViewModel,
  TSourceLocation,
  TUserProfile,
} from "./waterPermit";
export enum WellUsageVolumeTypeEnum {
  agriculture = 0, // کشاورزی
  drinking = 1, // شرب و بهداشت
  industry = 2, // صنعت
  other = 3, // سایر
}
export type TWellUsageVolume = {
  id: string;
  name: string;
  workHours: number;
  cubicMeters: number;
  month: string;
  waterFlow: number;
  wellUsageVolumeType: WellUsageVolumeTypeEnum;
};
export enum AquiferTypeEnum {
  hardBuild,
  alluvium,
  hardBuildWithAlluvium,
}
export type TWellWaterSummary = {
  id: string;
  sourceLocation: TSourceLocation;
  waterUserProfile: TUserProfile;
  wellUsageVolume: TWellUsageVolume[] | null;
  cropsUnderCultivationPercentage: TCropsPercentageViewModel[] | null;
  documentNumber: number;
  certificateNumber: number;
  studyAreaCode: string;
  studyArea: string;
  electricSubscription: number;
  electricPropfileCode: number;
  subscriptionCode: number;
  dossierCode: number;
  zone: number;
  lat: number;
  long: number;
  distance: number;
  belongTo: string;
  depth: number;
  pipeDiameter: number;
  outputWaterDiameter: number;
  excitingForce: number;
  enginePowerLimit: string;
  enginePowerRate: number;
  usageVolumeLimitPerSecond: number;
  usageVolumeLimitPerDay: number;
  usageVolumeLimitPerYear: number;
  usageVolumeLimitHouresPerYear: number;
  aquiferType: AquiferTypeEnum;
  fromNorthTo: string;
  fromEastTo: string;
  fromWestTo: string;
  fromSouthTo: string;
  totalArea: number;
  areaOfDrinkingLands: number;
};

