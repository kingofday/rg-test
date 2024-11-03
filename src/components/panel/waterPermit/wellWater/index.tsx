import { Button, Col, Form, Input, Modal, Row } from "antd";
import AdminPage from "components/panel/shared/AdminPage";
import addreses from "config/api/addresses";
import { useTranslation } from "react-i18next";
//import NumberCell from "../shared/cells/NumberCell";
import CustomIcon from "components/shared/CustomIcon";
import useWellWaterColumns from "hooks/waterPermit/useWellWaterColumns";
import { TWellWaterSummary } from "models/wellWater";
import { useState } from "react";
import EntryForm from "./EntryForm";

const WellWater = () => {
  const { t } = useTranslation();
  const columns = useWellWaterColumns();
  const [recordForDetails, toggleDetailsModal] =
    useState<TWellWaterSummary | null>(null);
  return (
    <>
      <AdminPage<TWellWaterSummary>
        title={t("surfaceWaterPermitManagement")}
        id="surfaceWater"
        idProp="id"
        EntryForm={EntryForm}
        filterUrl={addreses.wellWaterPermit.list}
        handleSubmit={false}
        //findUrl={(record) => addreses.surfacewaterpermit.find(record.id)}
        columns={columns}
        scrollX={1250}
        // deleteAction={{
        //   url: (record) => addreses.surfacewaterpermit.delete(record.id),
        // }}
        addUrl={addreses.wellWaterPermit.add}
        editAction={{
          url: addreses.wellWaterPermit.update,
        }}
        entryModalWidth={1200}
        customActions={[
          {
            renderer: (text, record, updater) => {
              return (
                <Button
                  className={"btn-dark"}
                  type="primary"
                  shape="circle"
                  title={t("details") ?? ""}
                  icon={<CustomIcon name={"IoEyeOutline"} />}
                  onClick={() => toggleDetailsModal(record)}
                />
              );
            },
          },
        ]}
      >
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12}>
            <Form.Item name="search" rules={[]}>
              <Input  style={{ width: 250 }} placeholder={t("search") ?? ""} />
            </Form.Item>
          </Col>
        </Row>
      </AdminPage>
      {recordForDetails && (
        <Modal
          width={1000}
          title={t("details")}
          open={true}
          footer={false}
          onCancel={() => toggleDetailsModal(null)}
        >
          <EntryForm
            data={recordForDetails}
            onCancel={() => toggleDetailsModal(null)}
            readOnly={true}
          />
        </Modal>
      )}
    </>
  );
};
export default WellWater;
