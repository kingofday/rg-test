import { useTranslation } from "react-i18next";
import Page from "../shared/Page";
import { Alert, Avatar, Col, Row } from "antd";
import CustomIcon from "components/shared/CustomIcon";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <Page id="profile" title="profile" className="page">
      <Row>
        <Col xs={24} sm={24}>
          <Avatar size={100}shape="square" icon={<CustomIcon size={50} name="FaRegUser" color="var(--bg)" />} />
        </Col>
      </Row>
    </Page>
  );
};
export default Profile;
