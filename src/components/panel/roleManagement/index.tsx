import { Col, Form, Input, Row } from "antd";
import AdminPage from "components/panel/shared/AdminPage";
import addreses from "config/api/addresses";
import { TRoleSummary } from "models/role";
import { useTranslation } from "react-i18next";
import EntryForm from "./EntryForm";

const RoleManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <AdminPage<TRoleSummary>
        title={t("roleManagement")}
        id="role"
        idProp="id"
        EntryForm={EntryForm}
        filterUrl={addreses.roleManager.list}
        findUrl={(record) => addreses.roleManager.find(record.id)}
        columns={[
          {
            title: t("name"),
            dataIndex: "name",
            key: "name",
          }
        ]}
        scrollX={300}
        deleteAction={{
          url: (record) => addreses.roleManager.delete(record.id),
        }}
        addUrl={addreses.roleManager.add}
        editAction={{
          url: addreses.roleManager.update,
        }}
      >
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12}>
            <Form.Item name="search" rules={[]}>
              <Input placeholder={t("search") ?? ""} />
            </Form.Item>
          </Col>
        </Row>
      </AdminPage>
    </>
  );
};
export default RoleManagement;
