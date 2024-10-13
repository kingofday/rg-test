import { Form, Modal } from "antd";
import { ElementType } from "react";
interface IEntryForm<T> {
  onCancel: () => void;
  title: string;
  entryModalWidth?: number;
  initialValues?: any;
  loading?: boolean;
  EntryForm: ElementType;
  onEntrySubmit?: (values: T) => void;
}
const EntryFormModal = <T,>(props: IEntryForm<T>) => {
  const [entryFrm] = Form.useForm();
  const onOk = () => {
    entryFrm.submit();
  };
  return (
    <Modal
      destroyOnClose
      open={true}
      onCancel={props.onCancel}
      title={props.title}
      onOk={onOk}
      okButtonProps={{ loading: props.loading }}
      width={props.entryModalWidth}
    >
      <Form
        id="entry-form"
        layout="vertical"
        form={entryFrm}
        initialValues={props.initialValues}
        onFinish={props.onEntrySubmit}
        autoComplete="off"
      >
        <props.EntryForm form={entryFrm} data={props.initialValues} />
      </Form>
    </Modal>
  );
};
export default EntryFormModal;
