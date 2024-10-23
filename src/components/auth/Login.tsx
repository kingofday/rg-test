import { Button, Form, Input, Space, Typography } from "antd";
import CustomIcon from "components/shared/CustomIcon";
import config from "config";
import addreses from "config/api/addresses";
import patterns from "config/patterns";
import { navigateTo } from "config/routes";
import storageKeys from "config/storageKeys";
import utils from "config/utils";
import SharedContext from "context/SharedContext";
import useApi from "hooks/useApi";
import { MenuTypes } from "models";
import { ClaimTypes, TLoginResponse } from "models/auth";
import { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const Login = () => {
  const [frm] = Form.useForm();
  const { t } = useTranslation();
  const nav = useNavigate();
  const [captchaHasError, toggleCaptcha] = useState(false);
  const ref = useRef<ReCAPTCHA>(null);
  const [captcha, setToken] = useState("");
  const { setUser, setMenues } = useContext(SharedContext);
  const [http, loading] = useApi<TLoginResponse>({
    onSuccess: (res) => {
      const fullNameClaim = res?.claims.find(
        (x) => x.type === ClaimTypes.FullName
      )!;
      const ncClaim = res?.claims.find(
        (x) => x.type === ClaimTypes.NationalCode
      )!;
      const phoneClaim = res?.claims.find(
        (x) => x.type === ClaimTypes.PhoneNumber
      )!;
      const personnelId = res?.claims.find(
        (x) => x.type === ClaimTypes.PersonnelId
      );
      const countyId = res?.claims.find((x) => x.type === ClaimTypes.CountyId);
      const districtId = res?.claims.find(
        (x) => x.type === ClaimTypes.DistrictId
      );
      const ruralDistrictId = res?.claims.find(
        (x) => x.type === ClaimTypes.RuralDistrict
      );
      const cityId = res?.claims.find((x) => x.type === ClaimTypes.City);
      const villageId = res?.claims.find((x) => x.type === ClaimTypes.Village);
      const menues =
        res?.claims
          .filter((x) => x.type === ClaimTypes.Permission)
          .map((x) => x.value as MenuTypes) ?? [];
      const user = {
        fullName: fullNameClaim.value,
        nationalCode: ncClaim.value,
        phoneNumber: phoneClaim.value,
        personnelId: personnelId?.value,
        countyId: countyId?.value ? parseInt(countyId?.value) : undefined,
        districtId: districtId?.value ? parseInt(districtId?.value) : undefined,
        ruralDistrictId: ruralDistrictId?.value
          ? parseInt(ruralDistrictId?.value)
          : undefined,
        cityId: cityId?.value ? parseInt(cityId?.value) : undefined,
        villageId: villageId?.value ? parseInt(villageId?.value) : undefined,
      };
      utils.storedData(storageKeys.token, res?.accessToken);
      utils.storedData(storageKeys.menus, menues);
      utils.storedData(storageKeys.user, user);
      utils.storedData(storageKeys.refreshToken, res?.refreshToken);
      setToken(res?.accessToken as string);
      setMenues(menues);
      setUser(user);
    },
  });

  const handleSubmit = (data: any) => {
    console.warn("TODO:// Remove line below after tests");
    localStorage.setItem("server", data.server);
    http.post(addreses.account.login, { ...data, captcha });
  };
  const onFinishFailed = () => {};
  const goToForgotPassword = () => {
    const mobNum = frm.getFieldValue("username");
    nav(
      `${navigateTo.recoverPassword}${mobNum ? "?mobileNumber=" + mobNum : ""}`
    );
  };
  const handleCapcthaError = () => {
    toggleCaptcha(true);
  };
  return (
    <div id="login" className="inner">
      <h1 className="title">
        {t("login")}
        <Text type="secondary">{t("loginToAccount")}</Text>
      </h1>
      <Form
        form={frm}
        name="login-form"
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        initialValues={
          process.env.NODE_ENV === "development"
            ? {
                nationalCode: "2080864831",
                password: "Admin@123",
              }
            : {}
        }
      >
        <Space direction="vertical" size={1} className="w-100">
          <Form.Item
            name="server"
            label={"آدرس بک اند(موقت)"}
            rules={[
              {
                required: true,
                message: t("required") ?? "",
              },
            ]}
          >
            <Input className="ltr-elm" />
          </Form.Item>
          <Form.Item
            name="nationalCode"
            label={t("nationalCode")}
            rules={[
              {
                required: true,
                message: t("required") ?? "",
              },
              {
                message: t("wrongFormat") ?? "",
                pattern: patterns.nationalCode,
              },
            ]}
          >
            <Input
              autoFocus
              className="ltr-elm"
              suffix={<CustomIcon size={16} name="IoCardOutline" />}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="password"
            label={t("password")}
            rules={[{ required: true, message: t("required") ?? "" }]}
          >
            <Input.Password className="ltr-elm" />
          </Form.Item>
          {!captchaHasError && process.env.NODE_ENV !== "development" && (
            <Form.Item>
              <ReCAPTCHA
                ref={ref}
                sitekey={config.siteKey}
                onChange={(t) => setToken(t ?? "")}
                hl="fa"
                onErrored={handleCapcthaError}
                onError={handleCapcthaError}
              />
            </Form.Item>
          )}
          <Form.Item>
            <div className="action">
              <Button type="link" onClick={goToForgotPassword}>
                {t("forgotPassword")}
              </Button>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                disabled={
                  !captcha &&
                  !captchaHasError &&
                  process.env.NODE_ENV !== "development"
                }
              >
                {t("login")}
              </Button>
            </div>
          </Form.Item>
        </Space>
      </Form>
      {/* <Alert
        type="info"
        className="mob-nav"
        message={
          <Link to={navigateTo.signup}>
            <span>{t("dontHasAnAccount")}</span>
            {t("signup")}
          </Link>
        }
      /> */}
    </div>
  );
};
export default Login;
