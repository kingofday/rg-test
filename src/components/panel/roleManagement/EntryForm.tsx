import { Form as AntForm, Col, Input, Row, Select } from "antd";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import { TPermission } from "models/user";
import { useTranslation } from "react-i18next";
interface IEntryForm {
  data: any;
  form: any;
}
const EntryForm = ({ data, form: entryFrm }: IEntryForm) => {
  const { t } = useTranslation();
  const [, gettingPermissions, permissions] = useApi<TPermission[]>({
    autoCallUrl: addreses.roleManager.permissions,
    cachingLifeTimeInSeconds: 3600,
  });
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
        <Col xs={24} sm={24} md={24}>
          <AntForm.Item
            name="permissionIds"
            label={t("permissions")}
            rules={[
              {
                required: true,
                message: t("required") ?? "",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder={t("permissions")}
              style={{ width: "100%" }}
              loading={gettingPermissions}
              options={permissions?.map((p) => ({
                label: p.name,
                value: p.id,
              }))}
            />
          </AntForm.Item>
        </Col>
      </Row>
    </>
  );
};
export default EntryForm;
