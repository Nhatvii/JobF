import {
  Tabs,
  Avatar,
  Tag,
  Button,
  Typography,
  Switch,
  Descriptions,
  Popconfirm,
  DatePicker,
  Input,
  Form,
} from "antd";
import {
  ContainerOutlined,
  PlusSquareFilled,
  DollarOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import HeaderEmployer from "../Header/HeaderEmployer";
import { useSelector } from "react-redux";
import { getCompanyJobList, getJobList } from "../../redux/reducer/JobSlice";
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-form";
import { useState } from "react";
const { TabPane } = Tabs;
const { Title } = Typography;
const { TextArea } = Input;

const RecruitmentPage = () => {
  const jobList = useSelector(getCompanyJobList);
  const [isProcessBox, setisProcessBox] = useState(0);

  const renderRecruitmentList = () => {
    return (
      <div style={{ backgroundColor: "#EDF1F5" }}>
        <div style={{ display: "flex" }}>
          <div
            className={isProcessBox === 0 ? "processBox__active" : "processBox"}
            onClick={() => setisProcessBox(0)}
          >
            Approve
          </div>
          <div
            className={isProcessBox === 1 ? "processBox__active" : "processBox"}
            onClick={() => setisProcessBox(1)}
          >
            Waiting
          </div>
          <div
            className={isProcessBox === 2 ? "processBox__active" : "processBox"}
            onClick={() => setisProcessBox(2)}
          >
            Expire / Not display
          </div>
          <div
            className={isProcessBox === 3 ? "processBox__active" : "processBox"}
            onClick={() => setisProcessBox(3)}
          >
            Reject
          </div>
        </div>
      </div>
    );
  };
  const renderJobBox = (proccess) => {
    if (proccess === 0) {
      return jobList.map((job, index) => {
        if (job.jobSelect === "Approved") {
          return (
            <div key={index} style={{ width: "75%" }} className="Job">
              <div className="Job__cardInfo">
                <div
                  style={{
                    width: "10%",
                    margin: "2rem",
                  }}
                >
                  <Avatar
                    style={{ height: "4rem", width: "4rem" }}
                    src={job.image}
                  />
                </div>
                <div style={{ margin: "1rem", width: "60%" }}>
                  <Tag color="green">{job.jobSelect}</Tag>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginRight: "1rem",
                      }}
                    >
                      {job.title}
                    </div>
                    <Tag color={job.jobType ? "orange" : "green"}>
                      {job.jobType ? "Part-time" : "Full-time"}
                    </Tag>
                  </div>
                  <div
                    style={{
                      margin: "0.5rem 0",
                      display: "flex",
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#00B9F2",
                      alignItems: "center",
                    }}
                  >
                    <DollarOutlined />
                    <div style={{ marginLeft: "0.5rem" }}>{job.price}</div>
                  </div>
                  <div style={{ color: "black" }}>{job.companyName}</div>
                </div>
                <div style={{ margin: "3rem 2rem" }}>
                  <ModalForm
                    title="Job Information"
                    trigger={
                      <Button
                        // type="ghost"
                        style={{
                          // backgroundColor: "#40B660",
                          borderRadius: "10rem",
                          marginRight: "1rem",
                        }}
                      >
                        <EyeOutlined />
                      </Button>
                    }
                    submitter={{
                      searchConfig: {
                        submitText: "",
                        resetText: "Cancel",
                      },
                    }}
                  >
                    <Descriptions row="1">
                      <Descriptions.Item label="Title" span={3}>
                        {job.title}
                      </Descriptions.Item>
                      <Descriptions.Item label="Company name" span={3}>
                        {job.companyName}
                      </Descriptions.Item>
                      <Descriptions.Item label="Price" span={3}>
                        {job.price}
                      </Descriptions.Item>
                      <Descriptions.Item label="Expired time" span={3}>
                        {job.time}
                      </Descriptions.Item>
                      <Descriptions.Item label="Location" span={3}>
                        {job.locationDetail}
                      </Descriptions.Item>
                      <Descriptions.Item label="Job description" span={3}>
                        {job.jobDescription}
                      </Descriptions.Item>
                      <Descriptions.Item label="Job experience" span={3}>
                        {job.jobExperience}
                      </Descriptions.Item>
                    </Descriptions>
                  </ModalForm>
                  <Switch defaultChecked={true} />
                </div>
              </div>
            </div>
          );
        }
      });
    } else if (proccess === 1) {
      return jobList.map((job, index) => {
        if (job.jobSelect === "Waiting") {
          return (
            <div key={index} style={{ width: "75%" }} className="Job">
              <div className="Job__cardInfo">
                <div
                  style={{
                    width: "10%",
                    margin: "2rem",
                  }}
                >
                  <Avatar
                    style={{ height: "4rem", width: "4rem" }}
                    src={job.image}
                  />
                </div>
                <div style={{ margin: "1rem", width: "60%" }}>
                  <Tag color="yellow">{job.jobSelect}</Tag>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginRight: "1rem",
                      }}
                    >
                      {job.title}
                    </div>
                    <Tag color={job.jobType ? "orange" : "green"}>
                      {job.jobType ? "Part-time" : "Full-time"}
                    </Tag>
                  </div>
                  <div
                    style={{
                      margin: "0.5rem 0",
                      display: "flex",
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#00B9F2",
                      alignItems: "center",
                    }}
                  >
                    <DollarOutlined />
                    <div style={{ marginLeft: "0.5rem" }}>{job.price}</div>
                  </div>
                  <div style={{ color: "black" }}>{job.companyName}</div>
                </div>
                <div style={{ margin: "3rem 2rem" }}>
                  <ModalForm
                    title="Job Information"
                    trigger={
                      <Button
                        // type="ghost"
                        style={{
                          // backgroundColor: "#40B660",
                          borderRadius: "10rem",
                          marginRight: "1rem",
                        }}
                      >
                        <EyeOutlined />
                      </Button>
                    }
                    submitter={{
                      searchConfig: {
                        submitText: "",
                        resetText: "Cancel",
                      },
                    }}
                  >
                    <Descriptions row="1">
                      <Descriptions.Item label="Title" span={3}>
                        {job.title}
                      </Descriptions.Item>
                      <Descriptions.Item label="Company name" span={3}>
                        {job.companyName}
                      </Descriptions.Item>
                      <Descriptions.Item label="Job type" span={3}>
                        {job.jobType}
                      </Descriptions.Item>
                      <Descriptions.Item label="Price" span={3}>
                        {job.price}
                      </Descriptions.Item>
                      <Descriptions.Item label="Expired time" span={3}>
                        {job.time}
                      </Descriptions.Item>
                      <Descriptions.Item label="Location" span={3}>
                        {job.locationDetail}
                      </Descriptions.Item>
                      <Descriptions.Item label="Job description" span={3}>
                        {job.jobDescription}
                      </Descriptions.Item>
                      <Descriptions.Item label="Job experience" span={3}>
                        {job.jobExperience}
                      </Descriptions.Item>
                    </Descriptions>
                  </ModalForm>
                  <Switch defaultChecked={true} />
                </div>
              </div>
            </div>
          );
        }
      });
    } else if (proccess === 2) {
      return jobList.map((job, index) => {
        if (job.jobSelect === "Expired" || job.jobSelect === "Not Display") {
          return (
            <div key={index} style={{ width: "75%" }} className="Job">
              <div className="Job__cardInfo">
                <div
                  style={{
                    width: "10%",
                    margin: "2rem",
                  }}
                >
                  <Avatar
                    style={{ height: "4rem", width: "4rem" }}
                    src={job.image}
                  />
                </div>
                <div style={{ margin: "1rem", width: "60%" }}>
                  <Tag color={job.jobSelect === "Expired" ? "orange" : ""}>
                    {job.jobSelect}
                  </Tag>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginRight: "1rem",
                      }}
                    >
                      {job.title}
                    </div>
                    <Tag color={job.jobType ? "orange" : "green"}>
                      {job.jobType ? "Part-time" : "Full-time"}
                    </Tag>
                  </div>
                  <div
                    style={{
                      margin: "0.5rem 0",
                      display: "flex",
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#00B9F2",
                      alignItems: "center",
                    }}
                  >
                    <DollarOutlined />
                    <div style={{ marginLeft: "0.5rem" }}>{job.price}</div>
                  </div>
                  <div style={{ color: "black" }}>{job.companyName}</div>
                </div>
                <div style={{ margin: "3rem 2rem" }}>
                  <ModalForm
                    title="Job Information"
                    trigger={
                      <Button
                        type="primary"
                        style={{
                          backgroundColor: "#40B660",
                          borderRadius: "10rem",
                          marginRight: "0.1rem",
                        }}
                      >
                        <EditOutlined />
                      </Button>
                    }
                    submitter={{
                      searchConfig: {
                        submitText: "Re-Submit",
                        resetText: "Cancel",
                      },
                    }}
                  >
                    <ProFormText
                      label="Title"
                      name="title"
                      placeholder="Title"
                      span={3}
                      initialValue={job.title}
                    />
                    <ProFormText
                      label="Company name"
                      placeholder="Company name"
                      name="companyName"
                      span={3}
                      initialValue={job.companyName}
                    />
                    <ProFormText
                      label="Job type"
                      placeholder="Job type"
                      name="jobType"
                      span={3}
                      initialValue={job.jobType ? "Parttime" : "Fulltime"}
                    />
                    <ProForm.Group label="Salary">
                      <ProFormText
                        width="md"
                        placeholder="min"
                        name="min"
                        initialValue="3"
                      />
                      <ProFormText
                        width="md"
                        style={{ paddingTop: "1.9rem!important" }}
                        placeholder="max"
                        name="max"
                        initialValue="7"
                        span={3}
                      />
                    </ProForm.Group>
                    <ProFormText
                      label="Expired time"
                      placeholder="Expired time"
                      name="expiredTime"
                      span={3}
                      initialValue={job.time}
                    />
                    <ProFormTextArea
                      label="Location"
                      placeholder="Location"
                      name="location"
                      span={3}
                      initialValue={job.locationDetail}
                    />
                    <ProFormTextArea
                      label="Job description"
                      placeholder="Job description"
                      name="jobDescription"
                      span={3}
                      initialValue={job.jobDescription}
                    />
                    <ProFormTextArea
                      label="Job experience"
                      placeholder="Job experience"
                      name="jobExperience"
                      span={3}
                      initialValue={job.jobExperience}
                    />
                  </ModalForm>
                  <Popconfirm
                    title="Are you sure to delete this job?"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#DC3139",
                        borderRadius: "10rem",
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
          );
        }
      });
    } else if (proccess === 3) {
      return jobList.map((job, index) => {
        if (job.jobSelect === "Reject") {
          return (
            <div key={index} style={{ width: "75%" }} className="Job">
              <div className="Job__cardInfo">
                <div
                  style={{
                    width: "10%",
                    margin: "2rem",
                  }}
                >
                  <Avatar
                    style={{ height: "4rem", width: "4rem" }}
                    src={job.image}
                  />
                </div>
                <div style={{ margin: "1rem", width: "60%" }}>
                  <Tag color="red">{job.jobSelect}</Tag>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginRight: "1rem",
                      }}
                    >
                      {job.title}
                    </div>
                    <Tag color={job.jobType ? "orange" : "green"}>
                      {job.jobType ? "Part-time" : "Full-time"}
                    </Tag>
                  </div>
                  <div
                    style={{
                      margin: "0.5rem 0",
                      display: "flex",
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#00B9F2",
                      alignItems: "center",
                    }}
                  >
                    <DollarOutlined />
                    <div style={{ marginLeft: "0.5rem" }}>{job.price}</div>
                  </div>
                  <div style={{ color: "black" }}>{job.companyName}</div>
                </div>
                <div style={{ margin: "3rem 2rem" }}>
                  <ModalForm
                    title="Job Information"
                    trigger={
                      <Button
                        type="primary"
                        style={{
                          backgroundColor: "#40B660",
                          borderRadius: "10rem",
                          marginRight: "0.1rem",
                        }}
                      >
                        <EditOutlined />
                      </Button>
                    }
                    submitter={{
                      searchConfig: {
                        submitText: "Re-Submit",
                        resetText: "Cancel",
                      },
                    }}
                  >
                    {/* <Descriptions>
                      <Descriptions.Item label="Reject type">
                        Địa chỉ chưa xác thực
                      </Descriptions.Item>
                    </Descriptions> */}
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "red",
                          marginRight: "1rem",
                        }}
                      >
                        Reject:{" "}
                      </div>
                      <Tag>Địa chỉ chưa xác thực</Tag>
                      <Tag>Mô tả công việc chưa rõ ràng</Tag>
                    </div>
                    <ProFormText
                      label="Title"
                      name="title"
                      placeholder="Title"
                      span={3}
                      initialValue={job.title}
                    />
                    <ProFormText
                      label="Company name"
                      placeholder="Company name"
                      name="companyName"
                      span={3}
                      initialValue={job.companyName}
                    />
                    <ProFormText
                      label="Job type"
                      placeholder="Job type"
                      name="jobType"
                      span={3}
                      initialValue={job.jobType ? "Parttime" : "Fulltime"}
                    />
                    <ProForm.Group label="Salary">
                      <ProFormText
                        width="md"
                        placeholder="min"
                        name="min"
                        initialValue="3"
                      />
                      <ProFormText
                        width="md"
                        style={{ paddingTop: "1.9rem!important" }}
                        placeholder="max"
                        name="max"
                        initialValue="7"
                        span={3}
                      />
                    </ProForm.Group>
                    <ProFormText
                      label="Expired time"
                      placeholder="Expired time"
                      name="expiredTime"
                      span={3}
                      initialValue={job.time}
                    />
                    <ProFormTextArea
                      label="Location"
                      placeholder="Location"
                      name="location"
                      span={3}
                      initialValue={job.locationDetail}
                    />
                    <ProFormTextArea
                      label="Job description"
                      placeholder="Job description"
                      name="jobDescription"
                      span={3}
                      initialValue="Chào đón khách."
                    />
                    <ProFormTextArea
                      label="Job experience"
                      placeholder="Job experience"
                      name="jobExperience"
                      span={3}
                      initialValue={job.jobExperience}
                    />
                  </ModalForm>
                  <Popconfirm
                    title="Are you sure to delete this job?"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#DC3139",
                        borderRadius: "10rem",
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div>
      <HeaderEmployer isLogin={localStorage.getItem("LOGIN_INFO")} />
      <div>
        <Tabs defaultActiveKey="2">
          <TabPane
            style={{ marginLeft: "16rem", width: "63%" }}
            tab={
              <span>
                <ContainerOutlined />
                Job list
              </span>
            }
            key="1"
          >
            {renderRecruitmentList()}
            {renderJobBox(isProcessBox)}
          </TabPane>
          <TabPane
            style={{ marginLeft: "16rem", width: "63%" }}
            tab={
              <span>
                <PlusSquareFilled />
                Post Job
              </span>
            }
            key="2"
          >
            <Form name="nest-messages">
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "100%",
                  padding: "3rem",
                }}
              >
                <Title level={3}>Job Infomation</Title>
                <Form.Item
                  label="Job title"
                  name="jobTitle"
                  rules={[
                    { required: true, message: "Please enter your job title" },
                  ]}
                >
                  <Input
                    placeholder="Job title"
                    style={{
                      width: "45rem",
                      marginLeft: "9rem",
                    }}
                  />
                </Form.Item>
                <Form.Item width="lg" label="Job specialized">
                  <Input
                    placeholder="Job specialized"
                    style={{
                      width: "45rem",
                      marginLeft: "7rem",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  width="lg"
                  label="Job location"
                  name="jobLocation"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your job location",
                    },
                  ]}
                >
                  <Input
                    placeholder="Job location"
                    style={{
                      width: "45rem",
                      marginLeft: "7.3rem",
                    }}
                  />
                </Form.Item>
                <ProForm.Item
                  label="Date expired"
                  name="datepicker"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your date picker",
                    },
                  ]}
                >
                  <DatePicker
                    format="DD/MM/YYYY"
                    style={{
                      width: "15rem",
                      marginLeft: "7rem",
                    }}
                  />
                </ProForm.Item>
                <ProForm.Group>
                  <ProForm.Item
                    width="md"
                    label="Salary"
                    name="salaryMin"
                    rules={[
                      { required: true, message: "Please enter your salary" },
                    ]}
                  >
                    <Input
                      placeholder="min"
                      style={{
                        width: "15rem",
                        marginLeft: "9.6rem",
                      }}
                    />
                  </ProForm.Item>
                  <ProForm.Item>
                    <Input
                      placeholder="max"
                      style={{
                        width: "15rem",
                        marginLeft: "7.8rem",
                      }}
                    />
                  </ProForm.Item>
                </ProForm.Group>
                <ProForm.Group>
                  <ProForm.Item
                    width="md"
                    label="Job type"
                    name="jobType"
                    rules={[
                      { required: true, message: "Please enter your jobType" },
                    ]}
                  >
                    <Input
                      placeholder="Job type"
                      style={{
                        width: "15rem",
                        marginLeft: "8.6rem",
                      }}
                    />
                  </ProForm.Item>
                  <ProForm.Item
                    width="md"
                    label="Job level"
                    name="jobLevel"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your job level",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Job level"
                      style={{
                        width: "15rem",
                        marginLeft: "3rem",
                      }}
                    />
                  </ProForm.Item>
                </ProForm.Group>
                <ProForm.Group>
                  <ProForm.Item
                    width="md"
                    label="Hiring number"
                    name="hiringNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your hiring number",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Hiring number"
                      style={{
                        width: "15rem",
                        marginLeft: "6.2rem",
                      }}
                    />
                  </ProForm.Item>
                  <ProForm.Item
                    width="md"
                    label="Experience"
                    name="experience"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your experience",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Experience"
                      style={{
                        width: "15rem",
                        marginLeft: "2.3rem",
                      }}
                    />
                  </ProForm.Item>
                </ProForm.Group>
                <ProForm.Item
                  width="lg"
                  label="Job description"
                  name="jobDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your job description",
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    placeholder="Job description"
                    style={{
                      width: "45rem",
                      marginLeft: "5.9rem",
                    }}
                  />
                </ProForm.Item>
                <ProForm.Item
                  width="lg"
                  label="Job requirement"
                  name="jobRequirement"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your job requirement",
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    placeholder="Job requirement"
                    style={{
                      width: "45rem",
                      marginLeft: "5.4rem",
                    }}
                  />
                </ProForm.Item>
                <ProForm.Item
                  width="lg"
                  label="Job benefits"
                  name="jobBenefits"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your job benefits",
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    placeholder="Job benefits"
                    style={{
                      width: "45rem",
                      marginLeft: "7rem",
                    }}
                  />
                </ProForm.Item>
                <Button
                  type="primary"
                  style={{ margin: "1rem 21rem", backgroundColor: "#00B9F2" }}
                >
                  Submit Jobs
                </Button>
              </div>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruitmentPage;
