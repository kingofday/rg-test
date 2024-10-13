export type TOrganizationLevelSummary = {
  id: number;
  name: string;
  parentId?: number;
  nodes?: TOrganizationLevelSummary[];
};
