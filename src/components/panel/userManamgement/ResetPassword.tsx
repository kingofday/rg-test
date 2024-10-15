import { Col, Form, Input, Modal, Row } from "antd";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import { useTranslation } from "react-i18next";
interface IResetPassword {
  onClose: () => void;
  data: any;
}
const ResetPassword = (props: IResetPassword) => {
  const [reset, resetting] = useApi<any>({
    onSuccess: () => {
      props.onClose();
    },
  });
  const handleSubmit = (values: any) => {
    reset.post(addreses.userManager.resetPassword, values);
  };
  const handleFailed = () => {};
  const { t } = useTranslation();
  const [frm] = Form.useForm();
  const onOk = () => {
    frm.submit();
  };
  return (
    <Modal
      title={t("resetPassword")}
      open={true}
      onCancel={props.onClose}
      onOk={onOk}
      okButtonProps={{
        loading: resetting,
      }}
    >
      <Form
        key="reset-password-form"
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        autoComplete="off"
        form={frm}
        initialValues={props.data}
      >
        <Form.Item noStyle name="id">
          <Input type="hidden" />
        </Form.Item>
        <Row gutter={16}>
          <Col xs={24} sm={24}>
            <Form.Item
              name="newPassword"
              label={t("newPassword")}
              rules={[
                {
                  required: true,
                  message: t("required") ?? "",
                },
              ]}
            >
              <Input placeholder={t("newPassword") ?? ""} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24}>
            <Form.Item
              name="passwordConfirm"
              label={t("repeatPassword")}
              rules={[
                {
                  required: true,
                  message: t("required") ?? "",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(t("passwordsMissMatch") ?? "")
                    );
                  },
                }),
              ]}
            >
              <Input placeholder={t("repeatPassword") ?? ""} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default ResetPassword;
