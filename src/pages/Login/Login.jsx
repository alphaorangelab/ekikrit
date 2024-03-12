import { Button, Form, Input } from "antd";
import { StyledLoginContainer } from "./style";
import Logo from "../../assets/Ekikrit_sahakari.png";
import { useNavigate } from "react-router-dom";
import { loginApi } from "./api";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Login = () => {
    const history = useNavigate();
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onFinish = (values) => {
        console.log("Success:", values);

        const formData = {
            userName: values?.username,
            password: values?.password,
        };

        loginApi({ formData, history, setError });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <StyledLoginContainer>
            <Form
                name="basic"
                style={{
                    width: 700,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    border: "1px solid #f0f0f0",
                    padding: "100px 20px",
                    background: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
            >
                <img src={Logo} alt="logo" width={60} height={60} />
                <h1 style={{ color: "#027d34", margin: "0" }}>{t("Login")}</h1>
                <Form.Item
                    label={t("Username")}
                    name="username"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input size="large" onChange={() => setError(false)} />
                </Form.Item>

                <Form.Item
                    label={t("Password")}
                    name="password"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        onChange={() => setError(false)}
                    />
                </Form.Item>
                {error && (
                    <span style={{ color: "red" }}>
                        {t("You entered a wrong username or password")}
                    </span>
                )}

                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{ width: "100%", marginTop: "50px" }}
                >
                    <Button
                        htmlType="submit"
                        style={{
                            width: "100%",
                            background: "#027d34",
                            color: "#ffffff",
                        }}
                        size="large"
                    >
                        {t("Login")}
                    </Button>
                </Form.Item>
            </Form>
        </StyledLoginContainer>
    );
};
export default Login;
