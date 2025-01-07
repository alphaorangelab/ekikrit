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
              <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
            <Form
                name="basic"
                style={{
                    width: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    border: "2px solid #E5E4E3",
                    padding: "50px 20px", // Reduced padding
                    background: "#ffffff",
                    borderRadius: "10px",
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
            >
                <img src={Logo} alt="logo" width={100} height={100} />
                <h1 style={{ color: "#027d34", margin: "20px 0 40px 0" }}>{t("Login")}</h1> {/* Adjusted margins */}

                <Form.Item
                    label={t("Username")}
                    name="username"
                    style={{ width: "80%" }}  // Ensures full width of the form
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
                    style={{ width: "80%" }}  // Ensures full width of the form
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password size="large" onChange={() => setError(false)} />
                </Form.Item>

                {error && (
                    <span style={{ color: "red", marginBottom: "20px" }}> {/* Added margin */}
                        {t("You entered a wrong username or password")}
                    </span>
                )}

                <Form.Item
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        width: "80%", // Full width of the form
                        justifyContent: "center", // Center the button
                        marginTop: "0px", // Adjust margin
                        margingBottom: "0px"
                    }}
                >
                    <Button
                        htmlType="submit"
                        style={{
                            width: "100%", // Set button width to 100% to match its container
                            background: "#027d34",
                            color: "#ffffff",
                            textAlign: "center",
                            marginTop: "0px", // Remove top margin
                            marginBottom: "0px", // Remove bottom margin
                            height: "48px", // Optional: if you want a specific button height
                        }}
                        size="large"
                        >
                        {t("Login")}
                    </Button>
                </Form.Item>
            </Form>
            <footer>
                <p>&copy; Ekikrit Krishak Savings & Credit Co. Ltd. All rights reserved.</p>
            </footer>
        </StyledLoginContainer>
    );
};

export default Login;
