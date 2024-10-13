import { Form as AntForm, Col, Select } from "antd";
import useLocation from "hooks/useLocation";
import { useTranslation } from "react-i18next";
interface IAddressInputProps {
  entryFrm: any;
  namePrefix?: string;
  data: any;
  readOnly?:boolean
}
const AddressInput = ({ entryFrm, data, namePrefix, readOnly }: IAddressInputProps) => {
  const { t } = useTranslation();
  const {
    loadingCounties,
    counties,
    onCountyChanged,
    loadingDistricts,
    districts,
    onDistrictChanged,
    loadingCities,
    cities,
    loadingRuralDistricts,
    ruralDistricts,
    onRuralDistrictsChanged,
    loadingVillages,
    villages,
  } = useLocation({
    entryFrm,
    location: data,
    namePrefix
  });
  return (
    <>
      <Col xs={12} sm={8} md={6}>
        <AntForm.Item
          name={namePrefix ? [namePrefix, "countyId"] : "countyId"}
          label={t("county")}
        >
          <Select
            allowClear
            showSearch
            placeholder={t("county")}
            loading={loadingCounties}
            onChange={onCountyChanged}
            disabled={readOnly}
            options={[
              {
                label: t("selcet"),
                value: "",
              },
              ...(counties?.map((x) => ({
                label: x.name,
                value: x.id,
              })) ?? []),
            ]}
          />
        </AntForm.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <AntForm.Item
          name={namePrefix ? [namePrefix, "districtId"] : "districtId"}
          label={t("district")}
        >
          <Select
            allowClear
            showSearch
            placeholder={t("district")}
            loading={loadingDistricts}
            onChange={onDistrictChanged}
            disabled={readOnly}
            options={[
              {
                label: t("selcet"),
                value: "",
              },
              ...(districts?.map((x) => ({
                label: x.name,
                value: x.id,
              })) ?? []),
            ]}
          />
        </AntForm.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <AntForm.Item
          name={namePrefix ? [namePrefix, "cityId"] : "cityId"}
          label={t("city")}
        >
          <Select
            allowClear
            showSearch
            placeholder={t("city")}
            loading={loadingCities}
            disabled={readOnly}
            options={[
              {
                label: t("selcet"),
                value: "",
              },
              ...(cities?.map((x) => ({
                label: x.name,
                value: x.id,
              })) ?? []),
            ]}
          />
        </AntForm.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <AntForm.Item
          name={
            namePrefix ? [namePrefix, "ruralDistrictId"] : "ruralDistrictId"
          }
          label={t("rural")}
        >
          <Select
            allowClear
            showSearch
            placeholder={t("rural")}
            loading={loadingRuralDistricts}
            onChange={onRuralDistrictsChanged}
            disabled={readOnly}
            options={[
              {
                label: t("selcet"),
                value: "",
              },
              ...(ruralDistricts?.map((x) => ({
                label: x.name,
                value: x.id,
              })) ?? []),
            ]}
          />
        </AntForm.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <AntForm.Item
          name={namePrefix ? [namePrefix, "villageId"] : "villageId"}
          label={t("village")}
        >
          <Select
            allowClear
            showSearch
            placeholder={t("village")}
            loading={loadingVillages}
            disabled={readOnly}
            options={[
              {
                label: t("selcet"),
                value: "",
              },
              ...(villages?.map((x) => ({
                label: x.name,
                value: x.id,
              })) ?? []),
            ]}
          />
        </AntForm.Item>
      </Col>
    </>
  );
};
export default AddressInput;
