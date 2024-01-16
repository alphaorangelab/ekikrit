import { Space, Table, Tag } from "antd";
const columns = [
    {
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "File",
        dataIndex: "file",
        key: "file",
    },

    {
        title: "Action",
        key: "action",
        render: (record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: "1",
        title: "John Brown",
        description: 32,
        file: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        title: "John Brown",
        description: 32,
        file: "New York No. 1 Lake Park",
    },
    {
        key: "3",
        title: "John Brown",
        description: 32,
        file: "New York No. 1 Lake Park",
    },
];
const GalleryList = () => <Table columns={columns} dataSource={data} />;
export default GalleryList;
