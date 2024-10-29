import { useTranslation } from "react-i18next";
import Page from "../shared/Page";
import {
  Alert,
  Avatar,
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Tabs,
} from "antd";
import CustomIcon from "components/shared/CustomIcon";
import { useContext } from "react";
import SharedContext from "context/SharedContext";
import useApi from "hooks/useApi";
import addreses from "config/api/addresses";
const Profile = () => {
  const { t } = useTranslation();
  const { user } = useContext(SharedContext);
  const [changePw, changingPw] = useApi({
    onSuccess: () => message.success(t("operationWasSuccessful")),
  });
  const handleChangePassword = async (values: any) => {
    await changePw.post(addreses.userManager.changePassword,values);
  };
  return (
    <Page id="profile" title="profile" className="page">
      <Tabs
        items={[
          {
            key: "info",
            label: t("information"),
            children: (
              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24}>
                  <Avatar
                    size={100}
                    shape="square"
                    icon={
                      <CustomIcon
                        size={50}
                        name="FaRegUser"
                        color="var(--bg)"
                      />
                    }
                    style={{ margin: "30px 0 20px 0" }}
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <Space direction="horizontal">
                    <span>{t("name")}:</span>
                    <strong>{user?.fullName}</strong>
                  </Space>
                </Col>
                <Col xs={24} sm={12}>
                  <Space direction="horizontal">
                    <span>{t("nationalCode")}:</span>
                    <strong>{user?.nationalCode}</strong>
                  </Space>
                </Col>
                <Col xs={24} sm={12}>
                  <Space direction="horizontal">
                    <span>{t("phoneNumber")}:</span>
                    <strong>{user?.phoneNumber}</strong>
                  </Space>
                </Col>
                <Col xs={24} sm={12}>
                  <Space direction="horizontal">
                    <span>{t("email")}:</span>
                    <strong>{user?.emailAddress ?? "-"}</strong>
                  </Space>
                </Col>
              </Row>
            ),
          },
          {
            key: "change-password",
            label: t("changePassword"),
            children: (
              <Form
                onFinish={handleChangePassword}
                layout="vertical"
                className="w-100"
                style={{paddingTop:30}}
              >
                <Row gutter={[20, 20]}>
                  <Col xs={24} sm={12} md={8}>
                    <Form.Item
                      name="oldPassword"
                      label={t("currentPassword")}
                      rules={[
                        {
                          required: true,
                          message: t("required") ?? "",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder={t("currentPassword") ?? ""}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8}>
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
                      <Input.Password placeholder={t("newPassword") ?? ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8}>
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
                      <Input.Password placeholder={t("repeatPassword") ?? ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24}>
                    <Button htmlType="submit" loading={changingPw} type="primary">{t("confirm")}</Button>
                  </Col>
                </Row>
              </Form>
            ),
          },
        ]}
      />
    </Page>
  );
};
export default Profile;
