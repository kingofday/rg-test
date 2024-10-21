const addreses = {
  //=== Authenticate
  account: {
    login: "/Account/Login",
  },
  organizationLevel: {
    list: "/organizationlevel/listlevel",
    tree: "/organizationlevel/listleveltree",
    add: "/organizationlevel",
    update: "/organizationlevel",
    find: (id: any) => `/organizationlevel/${id}`,
    delete: (id: any) => `/organizationlevel/delete/${id}`,
  },
  roleManager: {
    list: "/rolemanager/listroles",
    add: "/rolemanager/addrole",
    update: "/rolemanager/editrole",
    permissions: "/rolemanager/permissions",
    find: (id: any) => `/rolemanager/detailrole?id=${id}`,
    delete: (id: any) => `/rolemanager/deleterole/${id}`,
  },
  userManager: {
    list: "/usermanager/listusers",
    add: "/userManager",
    update: "/userManager",
    roles: "/userManager/getRoles",
    resetPassword: "/userManager/resetPassword",
    changePassword: "/userManager/changePassword",
    find: (id: any) => `/userManager/${id}`,
    changeStatus: (id: number, isEnabled: boolean) =>
      `/userManager/changeStatus?id=${id}&isEnabled=${isEnabled}`,
    delete: (id: number) => `/userManager/${id}`,
  },
  surfacewaterpermit: {
    list: "/surfaceWaterPermit/listSurafceWaterPermits",
    add: "/surfaceWaterPermit",
    update: "/surfaceWaterPermit",
    find: (id: any) => `/surfaceWaterPermit/${id}`,
    delete: (id: any) => `/surfaceWaterPermit/${id}`,
  },
  springWaterPermit: {
    list: "/springPermit/ListSpringPermits",
    add: "/springPermit",
    update: "/springPermit",
    find: (id: any) => `/springPermit/${id}`,
    delete: (id: any) => `/springPermit/${id}`,
  },
  pondWaterPermit: {
    list: "/pondPermit/ListPondPermits",
    add: "/pondPermit",
    update: "/pondPermit",
    find: (id: any) => `/pondPermit/${id}`,
    delete: (id: any) => `/pondPermit/${id}`,
  },
  wellWaterPermit: {
    list: "/wellPermit/listWellPermits",
    add: "/wellPermit",
    update: "/wellPermit",
    find: (id: any) => `/wellPermit/${id}`,
    delete: (id: any) => `/wellPermit/${id}`,
  },
  locations: {
    counties: "/Locations/GetCounties",
    districs: (countyId: string) => `/Locations/counties/${countyId}/districs`,
    cities: (districtId: string) => `/Locations/counties/${districtId}/cities`,
    ruralDistricts: (districtId: string) =>
      `/Locations/districts/${districtId}/rural-districts`,
    villages: (ruralDistrictId: string) =>
      `/Locations/${ruralDistrictId}/villages`,
  },
  waterPermit: {
    similarRecords: (data: any) =>
      `/waterPermit/similarRecords?${new URLSearchParams(data).toString()}`,
  },
};
export default addreses;
