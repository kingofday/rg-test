import { FormInstance } from "antd";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import { TLocation } from "models";
import { TSourceLocation } from "models/waterPermit";
interface IUseLocation {
  entryFrm: FormInstance;
  location?: TSourceLocation | null;
  namePrefix?: string;
}
const useLocation = ({ location, entryFrm, namePrefix }: IUseLocation) => {
  const [getCounties, loadingCounties, counties] = useApi<TLocation[]>({
    autoCallUrl: addreses.locations.counties,
    cachingLifeTimeInSeconds: 60,
  });
  const [getDistricts, loadingDistricts, districts] = useApi<TLocation[]>({
    cachingLifeTimeInSeconds: 60,
    autoCallUrl: location?.countyId
      ? addreses.locations.districs(location?.countyId.toString())
      : undefined,
  });
  const [getCities, loadingCities, cities] = useApi<TLocation[]>({
    cachingLifeTimeInSeconds: 60,
    autoCallUrl: location?.districtId
      ? addreses.locations.cities(location?.districtId.toString())
      : undefined,
  });
  const [getRuralDistricts, loadingRuralDistricts, ruralDistricts] = useApi<
    TLocation[]
  >({
    cachingLifeTimeInSeconds: 60,
    autoCallUrl: location?.districtId
      ? addreses.locations.ruralDistricts(location?.districtId.toString())
      : undefined,
  });
  const [getVillages, loadingVillages, villages] = useApi<TLocation[]>({
    cachingLifeTimeInSeconds: 60,
    autoCallUrl: location?.ruralDistrictId
      ? addreses.locations.villages(location?.ruralDistrictId.toString())
      : undefined,
  });
  const onCountyChanged = (value: any) => {
    entryFrm.resetFields([
      namePrefix ? [namePrefix, "districtId"] : "districtId",
      namePrefix ? [namePrefix, "cityId"] : "cityId",
      namePrefix ? [namePrefix, "ruralDistrictId"] : "ruralDistrictId",
      namePrefix ? [namePrefix, "villageId"] : "villageId",
    ]);
    const test = entryFrm.getFieldInstance(namePrefix ? [namePrefix, "districtId"] : "districtId");
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "districtId"] : "districtId",
      ""
    );
    entryFrm.setFieldValue(namePrefix ? [namePrefix, "cityId"] : "cityId", "");
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "ruralDistrictId"] : "ruralDistrictId",
      ""
    );
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "villageId"] : "villageId",
      ""
    );
    if (value !== "") {
      getDistricts.get(addreses.locations.districs(value));
    }
  };
  const onDistrictChanged = (value: any) => {
    entryFrm.resetFields([
      namePrefix ? [namePrefix, "cityId"] : "cityId",
      namePrefix ? [namePrefix, "ruralDistrictId"] : "ruralDistrictId",
      namePrefix ? [namePrefix, "villageId"] : "villageId",
    ]);
    entryFrm.setFieldValue(namePrefix ? [namePrefix, "cityId"] : "cityId", "");
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "ruralDistrictId"] : "ruralDistrictId",
      ""
    );
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "villageId"] : "villageId",
      ""
    );
    if (value !== "") {
      getCities.get(addreses.locations.cities(value));
      getRuralDistricts.get(addreses.locations.ruralDistricts(value));
    }
  };
  const onRuralDistrictsChanged = (value: any) => {
    entryFrm.resetFields([
      namePrefix ? [namePrefix, "villageId"] : "villageId",
    ]);
    entryFrm.setFieldValue(
      namePrefix ? [namePrefix, "villageId"] : "villageId",
      ""
    );
    if (value !== "") {
      getVillages.get(addreses.locations.villages(value));
    }
  };
  return {
    loadingCounties,
    counties,
    onCountyChanged,
    loadingDistricts,
    districts,
    onDistrictChanged,
    loadingCities,
    cities,
    getRuralDistricts,
    loadingRuralDistricts,
    ruralDistricts,
    onRuralDistrictsChanged,
    loadingVillages,
    villages,
  };
};
export default useLocation;
