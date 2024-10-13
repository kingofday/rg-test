import StepperForm from "components/panel/shared/StepperForm";
import addreses from "config/api/addresses";
import { IStepContent } from "models";
import { TSurfaceWaterSummary } from "models/surfaceWater";
import { useTranslation } from "react-i18next";
import ExtractAndTransfer from "./ExtractAndTransfer";
import PermitOwner from "./PermitOwner";
import SimilarRecords from "./SimilarRecords";
import UsageAndDeliver from "./UsageAndDeliver";
import WaterAmount from "./WaterAmount";
import WaterSource from "./WaterSource";
const EntryForm = ({
  data,
  onSuccess,
  onCancel,
  readOnly,
}: {
  data?: TSurfaceWaterSummary;
  onCancel: () => void;
  onSuccess?: (item: TSurfaceWaterSummary, closeModal: boolean) => void;
  readOnly?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <StepperForm<TSurfaceWaterSummary>
      frmName="surface-water-form"
      data={data}
      onCancel={onCancel}
      onSuccess={onSuccess}
      readOnly={readOnly}
      addUrl={addreses.surfacewaterpermit.add}
      updateUrl={addreses.surfacewaterpermit.update}
      findUrl={addreses.surfacewaterpermit.find}
      hiddenInputs={["id"]}
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
          id: "usage-deliver-location",
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
