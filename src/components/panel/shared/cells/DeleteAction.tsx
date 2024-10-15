import { Button } from "antd";
import CustomIcon from "components/shared/CustomIcon";
import { useTranslation } from "react-i18next";

interface IEditAction {
  onClick: () => void;
  isMobile?: boolean;
}
const DeleteAction = (props: IEditAction) => {
  const { t } = useTranslation();
  return (
    <Button
      danger
      type={props.isMobile ? "ghost" : "primary"}
      shape={props.isMobile ? "default" : "circle"}
      icon={
        props.isMobile?undefined:<CustomIcon size={props.isMobile ? 20 : 10} name="IoTrashOutline" />
      }
      onClick={props.onClick}
    >
      {props.isMobile ? t("delete") : null}
    </Button>
  );
};
export default DeleteAction;
