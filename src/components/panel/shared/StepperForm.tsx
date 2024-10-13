import { Alert, Button, Col, Form, Input, Row, Steps } from "antd";
import useApi from "hooks/useApi";
import { ElementType, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface IStepperForm<T> {
  frmName: string;
  data?: T;
  onCancel: () => void;
  onSuccess?: (item: T, closeModal: boolean) => void;
  readOnly?: boolean;
  addUrl: string;
  updateUrl: string;
  findUrl: any;
  hiddenInputs?: string[];
  steps: {
    title: string;
    id: string;
    content: ElementType;
    destroyOnHide?: boolean;
  }[];
}
const StepperForm = <T,>(props: IStepperForm<T>) => {
  const { t } = useTranslation();
  const [entryFrm] = Form.useForm();
  const [step, setStep] = useState(0);
  const [errors, setError] = useState<string[]>([]);
  const [addOrUpdate, loading] = useApi({
    onSuccess(res) {
      props.onSuccess?.(res as T, false);
      setStep((s) => s + 1);
    },
  });
  const [find, finding] = useApi({
    autoCallUrl: props.data
      ? props.findUrl(props.data["id" as keyof T])
      : undefined,
    onSuccess(res) {
      const data = res as any;
      if (data) {
        entryFrm.setFieldsValue(data);
      }
    },
  });
  const handleSubmit = (values: any) => {
    const frmData = values;
    if (!props.data) addOrUpdate.post(props.addUrl, frmData);
    else addOrUpdate.put(props.updateUrl, frmData);
  };
  const handleFailed = (err: any) => {
    setError(
      err.errorFields.map(
        (x: any) =>
          `"${t(x.name[x.name.length - 1].replace("Id", ""))}" ${x.errors[0]}`
      )
    );
  };
  const back = () => {
    setStep((s) => s - 1);
  };
  const next = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setStep((s) => s + 1);
    setError([]);
    const elm = document.getElementsByClassName("ant-modal-wrap")[0];
    elm.scrollTop = 0;
  };
  return (
    <Form
      id={props.frmName}
      key={props.frmName}
      form={entryFrm}
      layout="vertical"
      initialValues={props.data as any}
      onFinish={handleSubmit}
      onFinishFailed={handleFailed}
      autoComplete="off"
      disabled={finding}
    >
      <Row gutter={[0, 20]}>
        {finding && (
          <Col xs={24} sm={24}>
            <Alert type="info" message={`${t("loading")}...`} />
          </Col>
        )}
        {props.data && (
          <>
            {props.hiddenInputs?.map((name) => (
              <Form.Item key={name} noStyle name={name}>
                <Input type="hidden" />
              </Form.Item>
            ))}
          </>
        )}
        <Col xs={24} sm={24}>
          <Steps
            responsive={false}
            size="small"
            current={step}
            items={props.steps.map((x) => ({
              ...x,
              id: `${x.id}-step`,
            }))}
          />
        </Col>

        {!!errors.length && (
          <Col xs={24} sm={24}>
            <Alert
              type="error"
              message={errors.map((err, idx) => (
                <p key={idx}>{err}</p>
              ))}
            />
          </Col>
        )}

        <Col xs={24} sm={24}>
          {props.steps.map((x, idx) => {
            return x.destroyOnHide && step !== idx ? null : (
              <div
                className="step-content"
                id={x.id}
                style={{
                  display: step === idx ? "block" : "none",
                  position: "relative",
                }}
                key={x.id}
              >
                <Row gutter={10}>
                  <x.content
                    data={props.data}
                    entryFrm={entryFrm}
                    readOnly={props.readOnly}
                  />
                </Row>
              </div>
            );
          })}
        </Col>
        <Col xs={24} sm={24}>
          <div
            className="actions"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {(() => {
              switch (step) {
                case props.steps.length - 1:
                  return (
                    <>
                      {props.readOnly ? (
                        <Button
                          loading={props.data ? finding : false}
                          onClick={back}
                        >
                          {t("prev")}
                        </Button>
                      ) : (
                        <span></span>
                      )}
                      <Button
                        htmlType={"button"}
                        type="primary"
                        danger
                        onClick={props.onCancel}
                      >
                        {t("close")}
                      </Button>
                    </>
                  );
                case props.steps.length - 2:
                  return (
                    <>
                      <Button
                        loading={props.data ? finding : false}
                        onClick={back}
                      >
                        {t("prev")}
                      </Button>
                      <Button
                        htmlType={props.readOnly ? "button" : "submit"}
                        type="primary"
                        disabled={finding || loading}
                        loading={loading}
                        onClick={props.readOnly ? next : undefined}
                      >
                        {t(props.readOnly ? "next" : "submit")}
                      </Button>
                    </>
                  );
                default:
                  return (
                    <>
                      <Button
                        disabled={step === 0}
                        loading={props.data ? finding : false}
                        onClick={back}
                      >
                        {t("prev")}
                      </Button>
                      <Button
                        htmlType={"button"}
                        type="primary"
                        onClick={next}
                        disabled={finding}
                      >
                        {t("next")}
                      </Button>
                    </>
                  );
              }
            })()}
          </div>
        </Col>
      </Row>
    </Form>
  );
};
export default StepperForm;
