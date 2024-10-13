import { Col, Divider, Form, Input } from "antd";
import DatePickerFormItem from "components/panel/shared/DatePickerFormItem";
import patterns from "config/patterns";
import { IStepContent } from "models";
import { useTranslation } from "react-i18next";

const PermitOwner = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("permitOwnerInformation")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "firstName"]}
          label={t("firstName")}
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
            placeholder={t("firstName") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "lastName"]}
          label={t("lastName")}
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
            placeholder={t("lastName") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "fatherName"]}
          label={t("fatherName")}
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
            placeholder={t("fatherName") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6} style={{ position: "static" }}>
        <DatePickerFormItem
          name={["waterUserProfile", "birthdate"]}
          label={t("birthdate") ?? ""}
          placeholder={t("birthdate") ?? ""}
          popupTargetId="permit-owner"
          readOnly={readOnly}
          disabled={readOnly}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "nationalCode"]}
          label={t("nationalCode")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
            {
              pattern: patterns.nationalCode,
              message: t("wrongFormat") ?? "",
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("nationalCode") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "birthCertificateNumber"]}
          label={t("birthCertificateNumber")}
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
            placeholder={t("birthCertificateNumber") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "certificateCity"]}
          label={t("certificateCity")}
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
            placeholder={t("certificateCity") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "companyName"]}
          label={t("companyName")}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("companyName") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "companyRegistrationNumber"]}
          label={t("companyRegistrationNumber")}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("companyRegistrationNumber") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name={["waterUserProfile", "companyNationalCode"]}
          label={t("companyNationalCode")}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("companyNationalCode") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("permitOwnerAddress")}</Divider>
      </Col>
      <Col xs={8} sm={12} md={6}>
        <Form.Item
          name={["waterUserProfile", "phoneNumber"]}
          label={t("phoneNumber")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
            {
              pattern: patterns.phone,
              message: t("wrongFormat") ?? "",
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("phoneNumber") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={8} sm={12} md={6}>
        <Form.Item
          name={["waterUserProfile", "cellPhone"]}
          label={t("mobileNumber")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
            {
              pattern: patterns.mobile,
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("mobileNumber") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={8} sm={12} md={6}>
        <Form.Item
          name={["waterUserProfile", "postalCode"]}
          label={t("postalCode")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
            {
              pattern: patterns.postalCode,
            },
          ]}
        >
          <Input
            disabled={readOnly}
            readOnly={readOnly}
            placeholder={t("postalCode") ?? ""}
          />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24}>
        <Form.Item
          name={["waterUserProfile", "address"]}
          label={t("address")}
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
            placeholder={t("address") ?? ""}
          />
        </Form.Item>
      </Col>
    </>
  );
};
export default PermitOwner;
