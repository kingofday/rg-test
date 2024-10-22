import { Col, Divider, Form, Select } from "antd";
import AddressInput from "components/panel/shared/AddressInputs";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import utils from "config/utils";
import { IStepContent } from "models";
import { PondRefillTypeEnum } from "models/pondWater";
import { IrrigationNetworkTypeEnum } from "models/waterPermit";
import { useTranslation } from "react-i18next";
const WaterSource = ({ entryFrm,initialValues, data, readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceLocation")}</Divider>
      </Col>
      <AddressInput
        namePrefix="sourceLocation"
        data={data?.sourceLocation??initialValues?.sourceLocation}
        entryFrm={entryFrm}
      />
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
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
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
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
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
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
        />
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceProviderType")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="pondRefillType"
          label={t("refillType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("refillType")}
            options={utils.convrtEnumToOptions(PondRefillTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="river"
          label={t("river") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("river") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="damTank"
          label={t("damTank") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("damTank") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="creek"
          label={t("creek") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("creek") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="waterDrain"
          label={t("waterDrain") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("waterDrain") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="aqueduct"
          label={t("aqueduct") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("aqueduct") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="irrigationAndDrainageNetwork"
          label={t("irrigationAndDrainageNetwork") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("irrigationAndDrainageNetwork") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="mainChannel"
          label={t("mainChannel") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("mainChannel") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="secondChannel"
          label={t("secondChannel") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("secondChannel") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="thirdChannel"
          label={t("thirdChannel") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("thirdChannel") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="gate"
          label={t("gate") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("gate") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="irrigationNetworkType"
          label={t("irrigationNetworkType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("irrigationNetworkType")}
            options={utils.convrtEnumToOptions(IrrigationNetworkTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
    </>
  );
};
export default WaterSource;
