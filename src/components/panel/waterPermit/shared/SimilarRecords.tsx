import { Col, Divider, Row, Spin, Table } from "antd";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import usePondWaterColumns from "hooks/waterPermit/usePondWaterColumns";
import useSpringWaterColumns from "hooks/waterPermit/useSpringWaterColumns";
import useSurfaceWaterColumns from "hooks/waterPermit/useSurfaceWaterColumns";
import useWellWaterColumns from "hooks/waterPermit/useWellWaterColumns";
import { TSimilarRecords } from "models/waterPermitSimilars";
import { useTranslation } from "react-i18next";
const SimilarRecords = ({ data }: { data: any }) => {
  const [_, loading, records] = useApi<TSimilarRecords>({
    autoCallUrl: addreses.waterPermit.similarRecords({
      id: data.id,
      ...data.waterUserProfile,
    }),
  });
  const { t } = useTranslation();
  const surfaceColumns = useSurfaceWaterColumns();
  const wellColumns = useWellWaterColumns();
  const springColumns = useSpringWaterColumns();
  const pondColumns = usePondWaterColumns();
  return (
    <Row className="w-100">
      <Col xs={24} sm={24}>
        <Divider orientation="left">{t("similarRecords")}</Divider>
      </Col>
      <Col xs={24} sm={24}>
        {loading ? (
          <div className="center w-100">
            <br />
            <br />
            <br />
            <br />
            <br />
            <Spin />
          </div>
        ) : (
          Object.keys(records ?? {}).map((key) => {
            let columns: any[] = [];
            let title: string = "";
            switch (key as keyof TSimilarRecords) {
              case "surfaceWaterViewModel":
                columns = surfaceColumns;
                title = t("surcafeWaterPermits");
                break;
              case "wellViewModel":
                columns = wellColumns;
                title = t("wellWaterPermits");
                break;
              case "pondViewModel":
                columns = pondColumns;
                title = t("pondWaterPermits");
                break;
              case "springViewModel":
                columns = springColumns;
                title = t("springWaterPermits");
                break;
            }
            const dataSource =
              (records?.[key as keyof TSimilarRecords] as any[]) ?? [];
            if (!dataSource.length) return null;
            return (
              <div
                className="w-100"
                style={{ maxWidth: "100%", overflowX: "auto" }}
              >
                <Table
                  key={key}
                  style={{ width: "100%" }}
                  pagination={false}
                  dataSource={dataSource}
                  columns={[
                    {
                      title,
                      children: columns,
                    },
                  ]}
                />
              </div>
            );
          })
        )}
      </Col>
    </Row>
  );
};
export default SimilarRecords;
