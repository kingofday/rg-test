import { Col, Divider, Form, Select } from "antd";
import AddressInput from "components/panel/shared/AddressInputs";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import utils from "config/utils";
import useLocation from "hooks/useLocation";
import { IStepContent } from "models";
import { SpringTypeEnum } from "models/springWater";
import { useTranslation } from "react-i18next";
const WaterSource = ({ entryFrm, data, readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceLocation")}</Divider>
      </Col>
      <AddressInput
        namePrefix="sourceLocation"
        data={data?.sourceLocation}
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
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="springType"
          label={t("springType")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Select
            allowClear
            placeholder={t("springType")}
            options={utils.convrtEnumToOptions(SpringTypeEnum)}
            disabled={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("waterSourceCoordinate")}</Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="springName"
          label={t("springName") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("springName") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="altitude"
          label={t("altitude") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("altitude") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
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
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
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
        />
      </Col>
    </>
  );
};
export default WaterSource;
