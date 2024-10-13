import { Col, Divider, Form, Input } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import { IStepContent } from "models";
import { useTranslation } from "react-i18next";

const CertificateInfo = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("certificateInfo")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="certificateNumber"
          label={t("certificateNumber") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("certificateNumber") ?? ""}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="documentNumber"
          label={t("documentNumber") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("documentNumber") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="subscriptionCode"
          label={t("subscriptionCode") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("subscriptionCode") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="dossierCode"
          label={t("dossierCode")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("dossierCode") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={"studyArea"}
          label={t("studyArea")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("studyArea") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={"studyAreaCode"}
          label={t("studyAreaCode")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("studyAreaCode") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="electricSubscription"
          label={t("electricSubscription") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("electricSubscription") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="electricPropfileCode"
          label={t("electricPropfileCode") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("electricPropfileCode") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
    </>
  );
};
export default CertificateInfo;
