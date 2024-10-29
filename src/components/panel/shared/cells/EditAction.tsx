import { Button } from "antd";
import CustomIcon from "components/shared/CustomIcon";
import useApi from "hooks/useApi";
import { useTranslation } from "react-i18next";

interface IEditAction {
  findUrl?: string | ((record: any) => string);
  record: any;
  idProp: string;
  afterSelect: (record: any) => void;
  isMobile?: boolean;
}
const EditAction = (props: IEditAction) => {
  const { t } = useTranslation();
  const [find, finding] = useApi<any>({
    onSuccess: (res) => {
      props.afterSelect(res);
    },
  });
  const onClick = () => {
    if (props.findUrl) {
      const url =
        typeof props.findUrl === "string"
          ? `${props.findUrl}?${props.idProp}=${
              props.record[props.idProp as keyof typeof props.record]
            }`
          : props.findUrl(props.record);
      find.get(url);
    } else {
      props.afterSelect(props.record);
    }
  };
  return (
    <Button
      loading={finding}
      type={props.isMobile ? "ghost" : "primary"}
      shape={props.isMobile ? "default" : "circle"}
      icon={
        props.isMobile?undefined:<CustomIcon size={props.isMobile ? 20 : 10} name="IoPencilOutline" />
      }
      onClick={onClick}
      title={t("edit")??""}
    >
      {props.isMobile ? t("edit") : null}
    </Button>
  );
};
export default EditAction;
