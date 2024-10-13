import { Checkbox, Col, Divider, Form, Input } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import { IStepContent } from "models";
import { useTranslation } from "react-i18next";

const ExtractAndTransfer = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("extractAndTransfer")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="pumpingEngineType"
          label={t("pumpingEngineType") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          readOnly={readOnly}
          placeholder={t("pumpingEngineType") ?? ""}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="diesel"
          label={t("diesel") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("diesel") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="pumpEnginePower"
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
      <Col xs={12} sm={8} md={6}>
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
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="electric"
          label={t("electric") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("electric") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="electroPumpPower"
          label={t("electroPumpPower") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          readOnly={readOnly}
          placeholder={t("electroPumpPower") ?? ""}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item valuePropName="checked" name="isPumping" label={" "}>
          <Checkbox disabled={readOnly}>{t("isPumping")}</Checkbox>
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item valuePropName="checked" name="isGravityEngine" label={" "}>
          <Checkbox disabled={readOnly}>{t("isGravityEngine")}</Checkbox>
        </Form.Item>
      </Col>
    </>
  );
};
export default ExtractAndTransfer;
