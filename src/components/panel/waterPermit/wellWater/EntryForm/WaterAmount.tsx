import { Button, Col, Form, Input, Row, Select } from "antd";
import InputNumberFormItem from "components/panel/shared/InputNumberFormItem";
import CustomIcon from "components/shared/CustomIcon";
import utils from "config/utils";
import { IStepContent, PersianMonthesEnum } from "models";
import { WellUsageVolumeTypeEnum } from "models/wellWater";
import { useTranslation } from "react-i18next";

const WaterAmount = ({ readOnly }: IStepContent) => {
  const { t } = useTranslation();
  return (
    <Col xs={24} sm={24}>
      <Form.List name="wellUsageVolume">
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
                  {t("waterAmount")}
                </Button>
              </Form.Item>
            )}
            {fields.map(({ key, name, ...restField }, idx) => (
              <Row gutter={[10, 10]}>
                <Form.Item {...restField} name={[name, "id"]} noStyle>
                  <Input disabled={readOnly} type="hidden" />
                </Form.Item>
                <Col xs={24} sm={7}>
                  <Form.Item
                    {...restField}
                    label={idx === 0 ? t("name") : undefined}
                    name={[name, "name"]}
                    rules={[{ required: true, message: t("required") ?? "" }]}
                  >
                    <Input disabled={readOnly} placeholder={t("name") ?? ""} />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={3}>
                  <InputNumberFormItem
                    {...restField}
                    label={idx === 0 ? t("workHours") ?? "" : undefined}
                    name={[name, "workHours"]}
                    rules={[{ required: true, message: t("required") ?? "" }]}
                    placeholder={t("workHours") ?? ""}
                    readOnly={readOnly}
                    disabled={readOnly}
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <InputNumberFormItem
                    form={Form}
                    name={[name, "cubicMeters"]}
                    label={idx === 0 ? t("cubicMeters") ?? "" : undefined}
                    rules={[
                      {
                        required: true,
                        message: t("required") ?? "",
                      },
                    ]}
                    placeholder={t("cubicMeters") ?? ""}
                    readOnly={readOnly}
                    disabled={readOnly}
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <Form.Item
                    {...restField}
                    label={idx === 0 ? t("month") : undefined}
                    name={[name, "month"]}
                    rules={[{ required: true, message: t("required") ?? "" }]}
                  >
                    <Select
                      placeholder={t("month") ?? ""}
                      options={utils.convrtEnumToOptions(PersianMonthesEnum)}
                      disabled={readOnly}
                    />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={3}>
                  <InputNumberFormItem
                    form={Form}
                    {...restField}
                    label={idx === 0 ? t("debi") ?? "" : undefined}
                    name={[name, "waterFlow"]}
                    rules={[{ required: true, message: t("required") ?? "" }]}
                    placeholder={t("debi") ?? ""}
                    readOnly={readOnly}
                    disabled={readOnly}
                  />
                </Col>
                <Col xs={20} sm={4}>
                  <Form.Item
                    name={[name, "wellUsageVolumeType"]}
                    label={idx === 0 ? t("usageType") ?? "" : undefined}
                    rules={[
                      {
                        required: true,
                        message: t("required") ?? "",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      placeholder={t("usageType")}
                      options={utils.convrtEnumToOptions(
                        WellUsageVolumeTypeEnum
                      )}
                      disabled={readOnly}
                    />
                  </Form.Item>
                </Col>
                {!readOnly && (
                  <Col xs={4} sm={1}>
                    <Button
                      type="text"
                      onClick={() => remove(name)}
                      style={{ marginTop: idx === 0 ? 30 : 0 }}
                    >
                      <CustomIcon name="IoCloseOutline" />
                    </Button>
                  </Col>
                )}
              </Row>
            ))}
          </>
        )}
      </Form.List>
    </Col>
  );
};
export default WaterAmount;
