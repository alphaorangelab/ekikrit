import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    FileImageOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import GalleryUpload from "./GalleryUpload";
import GalleryList from "./GalleryList";
import NoticeUpload from "./NoticeUpload";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState(1);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ height: "100%" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} width={400}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    // style={{ background: "#027d34" }}
                    items={[
                        {
                            key: 1,
                            icon: <UserOutlined />,
                            label: "Notice",
                            style: { color: "#ffffff" },
                        },
                        {
                            key: 2,
                            icon: <UnorderedListOutlined />,
                            label: "Gallery List",
                            style: { color: "#ffffff" },
                        },
                        {
                            key: 3,
                            icon: <FileImageOutlined />,
                            label: "Gallery Upload",
                            style: { color: "#ffffff" },
                        },
                    ]}
                    onClick={(value) => {
                        setSelectedTab(value?.key);
                    }}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {Number(selectedTab) === 2 ? (
                        <GalleryList />
                    ) : Number(selectedTab) === 3 ? (
                        <GalleryUpload />
                    ) : (
                        <NoticeUpload />
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Dashboard;
