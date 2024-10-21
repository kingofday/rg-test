import { Card, Col, Row } from "antd";
import Splash from "components/Splash";
import { navigateTo } from "config/routes";
import storageKeys from "config/storageKeys";
import util from "config/utils";
import SharedContext from "context/SharedContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import pkg from "../../../package.json";
const Auth = () => {
  const { t } = useTranslation();
  let token = util.getStoredData(storageKeys.token);
  const { user, defaultPath } = useContext(SharedContext);
  const location = useLocation();
  // const handleClick = () => {
  //   nav(`${inLogin ? navigateTo.signup : navigateTo.login}`);
  // }
  if (user)
    return (
      <Navigate
        to={defaultPath ?? navigateTo.dashboard}
        state={{ from: location }}
        replace
      />
    );
  else if (token) {
    return <Splash doNothing={false} />;
  }
  return (
    <div id="auth">
      <Card className="card">
        <Row>
          <Col xs={24} sm={12} className="content">
            <Outlet />
          </Col>
          <Col xs={0} sm={12}>
            <div className="slide">
              <div className="texts">
                <h1 className="title">{t("appName")}</h1>
                <p>{t("appDescription")}</p>
              </div>
              <small className="version">version {pkg.version}</small>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Auth;
