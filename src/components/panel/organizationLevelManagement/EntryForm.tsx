import { Form as AntForm, Col, Input, Row, Select } from "antd";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import { TOrganizationLevelSummary } from "models/organizationLevel";
import { useTranslation } from "react-i18next";
interface IEntryForm {
  data: any;
  form: any;
}
const EntryForm = ({ data, form: entryFrm }: IEntryForm) => {
  const { t } = useTranslation();
  const [, gettingLevels, levels] = useApi<TOrganizationLevelSummary, any[]>({
    autoCallUrl: addreses.organizationLevel.list,
    cachingLifeTimeInSeconds: 60,
    mapper: (data) => {
      const result: any[] = [];
      const iterator = (item: TOrganizationLevelSummary) => {
        result.push(item);
        if (item.nodes && item.nodes.length) {
          item.nodes.forEach((i) =>
            iterator({
              ...i,
              name: `${item.name}/${i.name}`,
            })
          );
        }
      };
      if (data) iterator(data);
      return result;
    },
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
            name="parentId"
            label={t("parent")}
            rules={[
              {
                required: true,
                message: t("required") ?? "",
              },
            ]}
          >
            <Select
              allowClear
              placeholder={t("parent")}
              options={(levels as any[])?.map((l) => ({
                label: l.name,
                value: l.id,
              }))}
              loading={gettingLevels}
            />
          </AntForm.Item>
        </Col>
      </Row>
    </>
  );
};
export default EntryForm;
