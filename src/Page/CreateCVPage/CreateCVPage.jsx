import {
  Button,
  Upload,
  Input,
  InputNumber,
  Select,
  Form,
  Descriptions,
  Radio,
} from "antd";
import { Option } from "antd/lib/mentions";
// import Form from "antd/lib/form/Form";
import Header from "../Header/Header";
import { UploadOutlined } from "@ant-design/icons";

const CreateCVPage = () => {
  return (
    <div>
      {/* <Header isLogin={localStorage.getItem("LOGIN_INFO")} /> */}
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "100%",
          height: "fit-content",
        }}
      >
        <div
          style={{
            margin: "0 auto 0",
            width: "60%",
            backgroundColor: "#f6fbf9",
          }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "80%", display: "flex" }}>
              <img
                // src="data:image/png;base64,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"
                src="../../../user.png"
                style={{ width: "18rem", height: "17rem", padding: "3rem" }}
                alt=""
              />
              <div>
                <div
                  style={{
                    padding: "1rem 3rem",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#00B9F2",
                    marginTop: '3rem',
                  }}
                >
                  Nhat Vi
                </div>
                <Descriptions style={{ paddingLeft: '1rem'}}>
                  <Descriptions.Item label="Job type" span={3}>
                    Intern/Student
                  </Descriptions.Item>
                  <Descriptions.Item label="Years of Experience" span={3}>
                    0 years experience
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#FFFF", padding: "2rem" }}>
            <Form name="nest-messages">
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#00B9F2",
                }}
              >
                Contact Information
              </div>
              <div style={{ padding: "2rem" }}>
                {/* <Form.Item label="Full name" name="fullname" rules={[{ required: true, message: 'Please input your fullname' }]}>
                      <Input
                        placeholder="Full name"
                        size="middle"
                        style={{ width: "25rem", marginLeft: "6.8rem" }}
                      />
                    </Form.Item> */}
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email",
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "8.5rem" }}
                    defaultValue="trannhatvi@gmail.com"
                  />
                </Form.Item>
                <Form.Item
                  label="Phone number"
                  name="phoneNumber"
                  rules={[
                    { required: true, type: "number", min: 0, max: 9999999999 },
                  ]}
                >
                  <InputNumber
                    placeholder="Phone number"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "4.9rem" }}
                    defaultValue="0932602602"
                  />
                </Form.Item>
                <Form.Item label="Skill">
                  <Input
                    placeholder="Skill"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "9.7rem" }}
                    defaultValue="English communication"
                  />
                </Form.Item>
                <Form.Item label="Gender" rules={[{ required: "true" }]}>
                  {/* <Select
                    showSearch
                    style={{ width: "25rem", marginLeft: "8.4rem" }}
                    placeholder="Choose your gender"
                  >
                    <Option value="men">Male</Option>
                    <Option value="women">Female</Option>
                    <Option value="noComment">Unknown</Option>
                  </Select> */}
                  <Radio.Group style={{ marginLeft: '8.4rem'}}>
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Address">
                  <Input
                    placeholder="Address"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "8.1rem" }}
                    defaultValue="100 Duong Ba Trac district 8"
                  />
                </Form.Item>
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#00B9F2",
                }}
              >
                Working information
              </div>
              <div style={{ padding: "2rem" }}>
              <Form.Item label="Position" name="position" rules={[{ required: true }]}>
                  <Input
                    placeholder="Position"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "7.4rem" }}
                    defaultValue="Staff"
                  />
                </Form.Item>
                <Form.Item label="Company" name="company" rules={[{ required: true }]}>
                  <Input
                    placeholder="Company"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "6.8rem" }}
                    defaultValue="FPT "
                  />
                </Form.Item>
                <Form.Item label="Job type" rules={[{ required: true }]}>
                  <Input
                    placeholder="Job type"
                    size="middle"
                    style={{ width: "25rem", marginLeft: "7.9rem" }}
                    defaultValue="Intern/Student"
                  />
                </Form.Item>
                <Form.Item label="Experience" rules={[{ required: "true" }]}>
                  <Select
                    showSearch
                    style={{ width: "25rem", marginLeft: "7rem" }}
                    placeholder="Experience"
                  >
                    <Option value="noExperience">No experience</Option>
                    <Option value="under1Year">Under 1 year</Option>
                    <Option value="1year">1 year</Option>
                    <Option value="2year">2 year</Option>
                    <Option value="3year">3 year</Option>
                    <Option value="4year">4 year</Option>
                    <Option value="5year">5 year</Option>
                    <Option value="morethan5year">Over 5 year</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Salary range" rules={[{ required: "true" }]}>
                  <Select
                    showSearch
                    style={{ width: "25rem", marginLeft: "6.4rem" }}
                    placeholder="Salary range"
                  >
                    <Option value="3-5">3 - 5 triệu</Option>
                    <Option value="4-8">4 - 8 triệu</Option>
                    <Option value="7-15">7 - 15 triệu</Option>
                    <Option value="10-20">10 - 20 triệu</Option>
                    <Option value="over20">Trên 20 triệu</Option>
                  </Select>
                </Form.Item>
              </div>
              <Upload>
                <Button style={{ margin: "1rem" }} icon={<UploadOutlined />}>
                  Upload your CV
                </Button>
              </Upload>
              <Form.Item>
                <Button
                  style={{
                    margin: "1rem 20rem",
                    width: "10rem",
                    height: "3rem",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCVPage;
