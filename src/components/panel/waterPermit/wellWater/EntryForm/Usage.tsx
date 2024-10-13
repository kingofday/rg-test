import { Button, Col, Divider, Form, Input, Space } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import CustomIcon from "components/shared/CustomIcon";
import { IStepContent } from "models";
import { useTranslation } from "react-i18next";

const Usage = ({ readOnly }: IStepContent) => {
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
            disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
            readOnly={readOnly}
          />
        </Form.Item>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="areaOfDrinkingLands"
          label={t("areaOfAgriculturalLands") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("areaOfAgriculturalLands") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="totalArea"
          label={t("totalLandArea") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("totalLandArea") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={24} sm={24}>
        <Form.List name="cropsUnderCultivationPercentage">
          {(fields, { add, remove }) => (
            <>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<CustomIcon name="IoAddOutline" />}
                  disabled={readOnly}
                >
                  {t("cropsUnderCultivationPercentage")}
                </Button>
              </Form.Item>
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
                    <Input disabled={readOnly} placeholder={t("name") ?? ""} />
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
                    disabled={readOnly}
                  />
                  {!readOnly && (
                    <Button
                      type="text"
                      onClick={() => remove(name)}
                      style={{ marginTop: idx === 0 ? 30 : 0 }}
                    >
                      <CustomIcon name="IoCloseOutline" />
                    </Button>
                  )}
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Col>
      <Col xs={24} sm={24}>
        <Divider orientation="left">
          {t("amountOfExploitaionToMaxCapacity")}
        </Divider>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          form={Form}
          name="usageVolumeLimitPerSecond"
          label={t("litersPerSecond") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("litersPerSecond") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="usageVolumeLimitPerDay"
          label={t("cubicMetersPerDay") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("cubicMetersPerDay") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="usageVolumeLimitPerYear"
          label={t("cubicMetersPerYear") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("cubicMetersPerYear") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <InputNumberFormItem
          name="usageVolumeLimitHouresPerYear"
          label={t("meterHoursPerYearInstallation") ?? ""}
          rules={[
            {
              required: true,
              message: t("required") ?? "",
            },
          ]}
          placeholder={t("meterHoursPerYearInstallation") ?? ""}
          disabled={readOnly}
          readOnly={readOnly}
        />
      </Col>
    </>
  );
};
export default Usage;
