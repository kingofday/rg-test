const addreses = {
  //=== Authenticate
  account: {
    login: "/Account/Login",
  },
  organizationLevel: {
    list: "/organizationlevel",
    add: "/organizationlevel",
    update: "/organizationlevel",
    find: (id: any) => `/organizationlevel/${id}`,
    delete: (id: any) => `/organizationlevel/delete/${id}`,
  },
  roleManager: {
    list: "/rolemanager/listroles",
    add: "/rolemanager/addrole",
    update: "/rolemanager/editrole",
    find: (id: any) => `/rolemanager/detailrole?id=${id}`,
    delete: (id: any) => `/rolemanager/deleterole?id=${id}`,
  },
  userManager: {
    list: "/usermanager/listusers",
    add: "/userManager",
    update: "/userManager",
    roles: "/userManager/getRoles",
    find: (id: any) => `/userManager/${id}`,
    changeStatus: (id: number, isEnabled: boolean) =>
      `/userManager/changeStatus?id=${id}&isEnabled=${isEnabled}`,
    delete: (id: number) => `/userManager/${id}`,
  },
  surfacewaterpermit: {
    list: "/surfaceWaterPermit/listSurafceWaterPermits",
    add: "/surfaceWaterPermit",
    update: "/surfaceWaterPermit",
    similar: (data: any) =>
      `/surfaceWaterPermit/getSimilarRecords?${new URLSearchParams(
        data
      ).toString()}`,
    find: (id: any) => `/surfaceWaterPermit/${id}`,
  },
  springWaterPermit: {
    list: "/springPermit/ListSpringPermits",
    add: "/springPermit",
    update: "/springPermit",
    similar: (data: any) =>
      `/springPermit/getSimilarRecords?${new URLSearchParams(data).toString()}`,
    find: (id: any) => `/springPermit/${id}`,
  },
  pondWaterPermit: {
    list: "/pondPermit/ListPondPermits",
    add: "/pondPermit",
    update: "/pondPermit",
    similar: (data: any) =>
      `/pondPermit/getSimilarRecords?${new URLSearchParams(data).toString()}`,
    find: (id: any) => `/pondPermit/${id}`,
  },
  wellWaterPermit: {
    list: "/wellPermit/listWellPermits",
    add: "/wellPermit",
    update: "/wellPermit",
    similar: (data: any) =>
      `/wellPermit/getSimilarRecords?${new URLSearchParams(data).toString()}`,
    find: (id: any) => `/wellPermit/${id}`,
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
};
export default addreses;
