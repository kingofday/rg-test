import {
  Row
} from "antd";
import StepperForm from "components/panel/shared/StepperForm";
import addreses from "config/api/addresses";
import { IStepContent } from "models";
import {
  TSprintWaterSummary
} from "models/springWater";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import ExtractAndTransfer from "./ExtractAndTransfer";
import PermitOwner from "./PermitOwner";
import SimilarRecords from "./SimilarRecords";
import UsageAndLocation from "./UsageAndLocation";
import WaterAmount from "./WaterAmount";
import WaterSource from "./WaterSource";
const StepContent = ({
  active,
  id,
  children,
}: {
  active: boolean;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="step-content"
      id={id}
      style={{ display: active ? "block" : "none", position: "relative" }}
    >
      <Row gutter={10}>{children}</Row>
    </div>
  );
};
const EntryForm = ({
  data,
  onSuccess,
  onCancel,
  readOnly,
}: {
  data?: TSprintWaterSummary;
  onCancel: () => void;
  onSuccess?: (item: TSprintWaterSummary, closeModal: boolean) => void;
  readOnly?: boolean;
}) => {
  
  const { t } = useTranslation();
  return (
    <StepperForm<TSprintWaterSummary>
      frmName="spring-water-form"
      data={data}
      onCancel={onCancel}
      onSuccess={onSuccess}
      readOnly={readOnly}
      addUrl={addreses.springWaterPermit.add}
      updateUrl={addreses.springWaterPermit.update}
      findUrl={addreses.springWaterPermit.find}
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
          id: "usage-location",
          title: t("usageAndLocation"), //3
          content: UsageAndLocation,
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
          destroyOnHide:true,
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
