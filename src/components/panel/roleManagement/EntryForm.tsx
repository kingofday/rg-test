import { Form as AntForm, Col, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
interface IEntryForm {
  data: any;
  form: any;
}
const EntryForm = ({ data, form: entryFrm }: IEntryForm) => {
  const { t } = useTranslation();

  return (
    <>
      <AntForm.Item noStyle name="id">
        <Input type="hidden" />
      </AntForm.Item>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24}>
          <AntForm.Item
            name="name"
            label={t("name")}
            rules={[
              {
                required: true,
                message: t("required") ?? "",
              },
            ]}
          >
            <Input placeholder={t("name") ?? ""} />
          </AntForm.Item>
        </Col>
      </Row>
    </>
  );
};
export default EntryForm;
