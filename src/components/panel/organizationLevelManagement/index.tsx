import { Col, Form, Input, Row } from "antd";
import AdminPage from "components/panel/shared/AdminPage";
import addreses from "config/api/addresses";
import { TRoleSummary } from "models/role";
import { useTranslation } from "react-i18next";
import EntryForm from "./EntryForm";
import { TOrganizationLevelSummary } from "models/organizationLevel";

const RoleManagement = () => {
  const { t } = useTranslation();
  return (
    <>
      <AdminPage<TOrganizationLevelSummary>
        title={t("organizationLevel")}
        id="organizationLevel"
        idProp="id"
        EntryForm={EntryForm}
        filterUrl={addreses.organizationLevel.list}
        findUrl={(record) => addreses.organizationLevel.find(record.id)}
        columns={[
          {
            title: t("name"),
            dataIndex: "name",
            key: "name",
          }
        ]}
        scrollX={300}
        deleteAction={{
          url: (record) => addreses.organizationLevel.delete(record.id),
        }}
        addUrl={addreses.organizationLevel.add}
        editAction={{
          url: addreses.organizationLevel.update,
        }}
      >
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12}>
            <Form.Item name="search" rules={[]}>
              <Input style={{ width: 250 }} placeholder={t("search") ?? ""} />
            </Form.Item>
          </Col>
        </Row>
      </AdminPage>
    </>
  );
};
export default RoleManagement;
