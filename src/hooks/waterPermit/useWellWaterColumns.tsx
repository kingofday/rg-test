import { ColumnsType } from "antd/es/table";
import NumberCell from "components/panel/shared/cells/NumberCell";
import { TWellWaterSummary } from "models/wellWater";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useWellWaterColumns = () => {
  const { t } = useTranslation();
  return useMemo(
    () =>
      [
        {
          title: `${t("fullName")} ${t("permitOwner")}`,
          dataIndex: "fullName",
          key: "fullName",
          fixed: "left",
          render: function (text, record, index) {
            return (
              <span>{`${record.waterUserProfile.firstName} ${record.waterUserProfile.lastName}`}</span>
            );
          },
        },
        {
          title: `${t("nationalCode")} ${t("permitOwner")}`,
          dataIndex: "nationalCode",
          key: "nationalCode",
          render: function (text, record, index) {
            return <span>{record.waterUserProfile.nationalCode}</span>;
          },
        },
        {
          title: `${t("postalCode")} ${t("permitOwner")}`,
          dataIndex: "postalCode",
          key: "postalCode",
          render: function (text, record, index) {
            return <span>{record.waterUserProfile.postalCode}</span>;
          },
        },
        {
          title: `${t("phoneNumber")} ${t("permitOwner")}`,
          dataIndex: "phoneNumber",
          key: "phoneNumber",
          render: function (text, record, index) {
            return <span>{record.waterUserProfile.phoneNumber}</span>;
          },
        },
        {
          title: t("totalLandArea"),
          dataIndex: "totalArea",
          key: "totalArea",
          render: (text) => <NumberCell value={text} />,
        },
        {
          title: t("areaOfAgriculturalLands"),
          dataIndex: "areaOfDrinkingLands",
          key: "areaOfDrinkingLands",
          render: (text) => <NumberCell value={text} />,
        }
      ] as ColumnsType<TWellWaterSummary>,
    []
  );
};
export default useWellWaterColumns;
