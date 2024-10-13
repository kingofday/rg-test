import { Col, Divider, Form, Input, Select } from "antd";
import AddressInput from "components/panel/shared/AddressInputs";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import utils from "config/utils";
import { IStepContent } from "models";
import { AquiferTypeEnum } from "models/wellWater";
import { useTranslation } from "react-i18next";
const WaterSource = ({ entryFrm, data, readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceLocation")}</Divider>
      </Col>
      <AddressInput
        data={data?.sourceLocation}
        entryFrm={entryFrm}
        namePrefix="sourceLocation"
        readOnly={readOnly}
      />
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name={["sourceLocation", "plaque"]}
          label={t("plaque") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("plaque") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name={["sourceLocation", "studyArea"]}
          label={t("studyArea") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("studyArea") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name={["sourceLocation", "drainageBasin"]}
          label={t("drainageBasin") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("drainageBasin") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceCoordinate")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="zone"
          label={t("zone") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("zone") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="lat"
          label={t("utmx") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("utmx") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="long"
          label={t("utmy") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("utmy") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="distance"
          label={t("distanceFromWell") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("distanceFromWell") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="belongTo"
          label={t("belongTo")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            className="w-100 ltr-elm placeholder-r"
            placeholder={t("belongTo") ?? ""}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("informaion")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="aquiferType"
          label={t("aquiferType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("aquiferType")}
            options={utils.convrtEnumToOptions(AquiferTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="depth"
          label={t("depth") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("depth") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="pipeDiameter"
          label={t("pipeDiameter") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("pipeDiameter") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="outputWaterDiameter"
          label={t("outputWaterDiameter") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("outputWaterDiameter") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="excitingForce"
          label={t("excitingForce") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("excitingForce") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="enginePowerLimit"
          label={t("enginePowerLimit") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("enginePowerLimit") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="enginePowerLimit"
          label={t("enginePowerLimit") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("enginePowerLimit") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="enginePowerRate"
          label={t("enginePowerRate") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("enginePowerRate") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
    </>
  );
};
export default WaterSource;
