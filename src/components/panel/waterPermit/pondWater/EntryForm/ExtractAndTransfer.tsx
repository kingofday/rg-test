import { Col, Divider, Form, Input, Select } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import utils from "config/utils";
import { IStepContent } from "models";
import { PondDedicateTypeEnum } from "models/pondWater";
import { EngineTypeEnum } from "models/waterPermit";
import { useTranslation } from "react-i18next";

const ExtractAndTransfer = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("extractAndTransfer")}</Divider>
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <Form.Item
          name="engineType"
          label={t("pumpingEngineType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("pumpingEngineType")}
            options={utils.convrtEnumToOptions(EngineTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="enginePower"
          label={t("pumpEnginePower") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("pumpEnginePower") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <Form.Item
          name="measuringInstrumentName"
          label={t("measuringInstrumentName")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            readOnly={readOnly}
            placeholder={t("measuringInstrumentName") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("dedicateType")}</Divider>
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <Form.Item
          name="pondDedicateType"
          label={t("dedicateType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("dedicateType")}
            options={utils.convrtEnumToOptions(PondDedicateTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="nonAgriculturalSeasonFromMonth"
          label={t("nonAgriculturalSeasonFromMonth") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("nonAgriculturalSeasonFromMonth") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="nonAgriculturalSeasonToMonth"
          label={t("nonAgriculturalSeasonToMonth") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("nonAgriculturalSeasonToMonth") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="deliveredWaterFlow"
          label={t("deliveredWaterFlow") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("deliveredWaterFlow") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="deliveredVolume"
          label={t("deliveredVolume") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("deliveredVolume") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="workHours"
          label={t("workHours") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("workHours") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="deliveredTimeFromMonth"
          label={t("deliveredTimeFromMonth") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("deliveredTimeFromMonth") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col  xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="deliveredTimeToMonth"
          label={t("deliveredTimeToMonth") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("deliveredTimeToMonth") ?? ""}
          readOnly={readOnly}
        />
      </Col>
    </>
  );
};
export default ExtractAndTransfer;
