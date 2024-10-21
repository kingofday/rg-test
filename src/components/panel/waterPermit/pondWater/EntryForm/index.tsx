import StepperForm from "components/panel/shared/StepperForm";
import addreses from "config/api/addresses";
import SharedContext from "context/SharedContext";
import { IStepContent } from "models";
import { TPondWaterSummary } from "models/pondWater";
import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ExtractAndTransfer from "./ExtractAndTransfer";
import PermitOwner from "./PermitOwner";
import UsageAndDeliver from "./UsageAndDeliver";
import WaterAmount from "./WaterAmount";
import WaterSource from "./WaterSource";
import SimilarRecords from "../../shared/SimilarRecords";
const EntryForm = ({
  data,
  onSuccess,
  onCancel,
  readOnly,
}: {
  data?: TPondWaterSummary;
  onCancel: () => void;
  onSuccess?: (item: TPondWaterSummary, closeModal: boolean) => void;
  readOnly?: boolean;
}) => {
  const { t } = useTranslation();
  const { user } = useContext(SharedContext);
  const initialValues = useMemo(() => {
    if (data) return data;
    return {
      sourceLocation: {
        countyId: user?.countyId,
        districtId: user?.districtId,
        cityId: user?.cityId,
        ruralDistrictId: user?.ruralDistrictId,
        villageId: user?.villageId,
      },
    };
  }, []);
  return (
    <StepperForm<TPondWaterSummary>
      frmName="pond-water-form"
      data={data}
      onCancel={onCancel}
      onSuccess={onSuccess}
      readOnly={readOnly}
      addUrl={addreses.pondWaterPermit.add}
      updateUrl={addreses.pondWaterPermit.update}
      findUrl={addreses.pondWaterPermit.find}
      hiddenInputs={["id"]}
      initialValues={initialValues}
      steps={[
        {
          id: "permit-owner",
          title: t("certificateInfo"), //0
          content: PermitOwner,
        },
        {
          id: "water-source",
          title: t("waterSource"), //2
          content: WaterSource,
        },
        {
          id: "usage-location",
          title: t("usageAndDeliverLocation"), //3
          content: UsageAndDeliver,
        },
        {
          id: "water-amount",
          title: t("waterAmount"), //4
          content: WaterAmount,
        },
        {
          id: "extract-transfer",
          title: t("extractAndTransfer"), //4
          content: ExtractAndTransfer,
        },
        {
          id: "similar-records",
          title: t("similarRecords"),
          destroyOnHide: true,
          content: ({ entryFrm }: IStepContent) => (
            <SimilarRecords
              data={entryFrm.getFieldsValue(["waterUserProfile"])}
            />
          ),
        },
      ]}
    />
  );
};
export default EntryForm;
