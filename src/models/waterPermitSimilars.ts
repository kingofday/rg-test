import { TPondWaterSummary } from "./pondWater";
import { TSprintWaterSummary } from "./springWater";
import { TSurfaceWaterSummary } from "./surfaceWater";
import { TWellWaterSummary } from "./wellWater";

export type TSimilarRecords = {
  surfaceWaterViewModel: TSurfaceWaterSummary[];
  pondViewModel: TPondWaterSummary[];
  wellViewModel: TWellWaterSummary[];
  springViewModel: TSprintWaterSummary[];
};
