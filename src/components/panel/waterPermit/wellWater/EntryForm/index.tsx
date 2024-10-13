import StepperForm from "components/panel/shared/StepperForm";
import addreses from "config/api/addresses";
import { TWellWaterSummary } from "models/wellWater";
import { useTranslation } from "react-i18next";
import CertificateInfo from "./CertificateInfo";
import PermitOwner from "./PermitOwner";
import WaterSource from "./WaterSource";
import Usage from "./Usage";
import SimilarRecords from "../SimilarRecords";
import { IStepContent } from "models";
import WaterAmount from "./WaterAmount";
const EntryForm = ({
  data,
  onSuccess,
  onCancel,
  readOnly,
}: {
  data?: TWellWaterSummary;
  onCancel: () => void;
  onSuccess?: (item: TWellWaterSummary, closeModal: boolean) => void;
  readOnly?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <StepperForm<TWellWaterSummary>
      frmName="well-water-form"
      data={data}
      onCancel={onCancel}
      onSuccess={onSuccess}
      readOnly={readOnly}
      addUrl={addreses.wellWaterPermit.add}
      updateUrl={addreses.wellWaterPermit.update}
      findUrl={addreses.wellWaterPermit.find}
      hiddenInputs={["id"]}
      steps={[
        {
          id: "certificate-info",
          title: t("certificateInfo"), //0
          content: CertificateInfo,
        },
        {
          id: "permit-owner",
          title: t("permitOwner"), //1
          content: PermitOwner,
        },
        {
          id: "water-source",
          title: t("waterSource"), //2
          content: WaterSource,
        },
        {
          id: "usage",
          title: t("usage"), //3
          content: Usage,
        },
        {
          id: "water-amount",
          title: t("waterAmount"), //4
          content: WaterAmount,
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
