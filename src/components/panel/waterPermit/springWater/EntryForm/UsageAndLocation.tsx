import { Button, Col, Divider, Form, Input, Space } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import CustomIcon from "components/shared/CustomIcon";
import { IStepContent } from "models";
import { useTranslation } from "react-i18next";

const UsageAndLocation = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <>
      <Col xs={24} sm={24}>
        <Divider orientation="left">
          {t("waterUsageLocationSpecification")}
        </Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="fromNorthTo"
          label={t("fromNorthTo")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            className="w-100 ltr-elm placeholder-r"
            placeholder={t("fromNorthTo") ?? ""}
            readOnly={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="fromSouthTo"
          label={t("fromSouthTo")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            className="w-100 ltr-elm placeholder-r"
            placeholder={t("fromSouthTo") ?? ""}
            readOnly={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="fromEastTo"
          label={t("fromEastTo")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            className="w-100 ltr-elm placeholder-r"
            placeholder={t("fromEastTo") ?? ""}
            readOnly={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <Form.Item
          name="fromWestTo"
          label={t("fromWestTo")}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
        >
          <Input
            className="w-100 ltr-elm placeholder-r"
            placeholder={t("fromWestTo") ?? ""}
            readOnly={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="areaOfAgriculturalLands"
          label={t("areaOfAgriculturalLands") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("areaOfAgriculturalLands") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="totalLandArea"
          label={t("totalLandArea") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("totalLandArea") ?? ""}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={24} sm={24}>
        <Form.List name="cropsUnderCultivationPercentage">
          {(fields, { add, remove }) => (
            <>
              {!readOnly && (
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<CustomIcon name="IoAddOutline" />}
                  >
                    {t("cropsUnderCultivationPercentage")}
                  </Button>
                </Form.Item>
              )}
              {fields.map(({ key, name, ...restField }, idx) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item {...restField} name={[name, "id"]} noStyle>
                    <Input type="hidden" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label={idx === 0 ? t("name") : undefined}
                    name={[name, "name"]}
                    rules={[{ required: true, message: t("required") ?? "" }]}
                  >
                    <Input placeholder={t("name") ?? ""} />
                  </Form.Item>
                  <InputNumberFormItem
                    {...restField}
                    form={Form}
                    name={[name, "percentage"]}
                    label={idx === 0 ? t("percentage") ?? "" : undefined}
                    rules={[
                      {
                        required: true,
                        message: t("required") ?? "",
                      },
                    ]}
                    placeholder={t("percentage") ?? ""}
                  />
                  <Button
                    type="text"
                    onClick={() => remove(name)}
                    style={{ marginTop: 30 }}
                  >
                    <CustomIcon name="IoCloseOutline" />
                  </Button>
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Col>
    </>
  );
};
export default UsageAndLocation;
