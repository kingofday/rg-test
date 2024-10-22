import { Button, Col, Form, Input, Row } from "antd";
import AdminPage from "components/panel/shared/AdminPage";
import ConfirmModal from "components/panel/shared/ConfirmModal";
import CustomIcon from "components/shared/CustomIcon";
import addreses from "config/api/addresses";
import useApi from "hooks/useApi";
import { PagedData, PagedListUpdater } from "models";
import { TUserSummary } from "models/user";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NumberCell from "../shared/cells/NumberCell";
import EntryForm from "./EntryForm";
import ResetPassword from "./ResetPassword";

const User = () => {
  const { t } = useTranslation();
  const [userToChange, selectUser] = useState<{
    user: TUserSummary;
    updater: PagedListUpdater<TUserSummary>;
  } | null>(null);
  const [userToResetPW, selectUserToResetPW] = useState<TUserSummary | null>(
    null
  );
  const [changeStatus, changing] = useApi({
    onSuccess: (_, params) => {
      userToChange?.updater(
        (s) =>
          ({
            ...s,
            results: [
              ...(s?.results.map((x) =>
                x.id !== userToChange.user.id
                  ? x
                  : {
                      ...x,
                      isEnabled: !userToChange.user.isEnabled,
                    }
              ) ?? []),
            ],
          } as PagedData<TUserSummary>)
      );
      selectUser(null);
    },
  });
  const handleChangeStatus = () => {
    changeStatus.post(
      addreses.userManager.changeStatus(
        userToChange!.user.id,
        !userToChange!.user.isEnabled
      )
    );
  };
  return (
    <>
      <AdminPage<TUserSummary>
        title={t("usersManagement")}
        id="user"
        idProp="id"
        EntryForm={EntryForm}
        filterUrl={addreses.userManager.list}
        findUrl={(record) => addreses.userManager.find(record.id)}
        columns={[
          {
            title: t("fullName"),
            dataIndex: "fullName",
            key: "fullName",
            fixed: "left",
            render: function (text, record, index) {
              return <span>{`${record.firstName} ${record.lastName}`}</span>;
            },
          },
          {
            title: t("nationalCode"),
            dataIndex: "nationalCode",
            key: "nationalCode",
          },
          {
            title: t("email"),
            dataIndex: "emailAddress",
            key: "emailAddress",
            width: 220,
            render: function (text, record, index) {
              return <a href={`mailto:${text}`}>{text}</a>;
            },
          },
          {
            title: t("baseSalary"),
            dataIndex: "baseSalary",
            key: "baseSalary",
            render: (text) => <NumberCell value={text} />,
          },
          {
            title: t("organizationLevel"),
            dataIndex: "organizationLevelName",
            key: "organizationLevelName",
            width: 200,
            render: (text) => <span>{text}</span>,
          },
          {
            title: t("enabled"),
            dataIndex: "enabled",
            key: "enabled",
            width: 100,
            render: function (text, record, index) {
              return record.isEnabled ? t("yes") : t("no");
            },
          },
        ]}
        scrollX={1100}
        deleteAction={{
          url: (record) => addreses.userManager.delete(record.id),
        }}
        addUrl={addreses.userManager.add}
        editAction={{
          url: addreses.userManager.update,
        }}
        customActions={[
          {
            renderer: (text, record, updater, isMobile) => {
              return (
                <Button
                  danger={isMobile ? undefined : record.isEnabled}
                  type={isMobile ? "ghost" : "primary"}
                  shape={isMobile ? "default" : "circle"}
                  title={
                    (record.isEnabled ? t("deactive") : t("activate")) ?? ""
                  }
                  icon={
                    isMobile ? undefined : (
                      <CustomIcon
                        name={
                          !record.isEnabled
                            ? "IoShieldCheckmarkOutline"
                            : "IoLockClosedOutline"
                        }
                      />
                    )
                  }
                  onClick={() =>
                    selectUser({
                      user: record,
                      updater,
                    })
                  }
                >
                  {isMobile
                    ? record.isEnabled
                      ? t("deactive")
                      : t("activate")
                    : null}
                </Button>
              );
            },
          },
          {
            renderer: (text, record, updater, isMobile) => {
              return (
                <Button
                  type={isMobile ? "ghost" : "primary"}
                  shape={isMobile ? "default" : "circle"}
                  title={t("resetPasswrod") ?? ""}
                  icon={
                    isMobile ? undefined : <CustomIcon name={"MdOutlineLockReset"} />
                  }
                  onClick={() =>
                    selectUserToResetPW(record)
                  }
                >
                  {isMobile ? t("resetPassword") : null}
                </Button>
              );
            },
          },
        ]}
        entryModalWidth={1000}
      >
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12}>
            <Form.Item name="search" rules={[]}>
              <Input placeholder={t("search") ?? ""} />
            </Form.Item>
          </Col>
        </Row>
      </AdminPage>
      <ConfirmModal
        open={!!userToChange}
        loading={changing}
        onOk={handleChangeStatus}
        title={t("userAccount") ?? ""}
        message={
          (userToChange?.user.isEnabled
            ? t("areYouSureToDeactive")
            : t("areYouSureToActivate")) ?? ""
        }
        onCancel={() => selectUser(null)}
      />
      {userToResetPW && (
        <ResetPassword
          onClose={() => selectUserToResetPW(null)}
          data={userToResetPW}
        />
      )}
    </>
  );
};
export default User;
