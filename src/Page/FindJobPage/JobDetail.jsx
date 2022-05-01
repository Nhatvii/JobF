import {
  CalendarOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  InsertRowAboveOutlined,
  UserOutlined,
  TeamOutlined,
  ToolOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCompanyList } from "../../redux/reducer/JobSlice";
import "./JobDetail.scss";
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDigit,
  ProFormTextArea,
} from "@ant-design/pro-form";

const { Button, Rate, Upload } = require("antd");

const JobDetail = ({ job }) => {
  const history = useHistory();
  const companyList = useSelector(getCompanyList);
  const [company, setCompany] = useState(companyList[0]);

  return (
    <div
      style={{
        padding: "1rem",
        overflowY: "hidden",
        border: "1px solid #d4d2d0",
        borderRadius: "10px",
        marginTop: "0.8rem",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {job.title}
        </div>
        {/* <Button
          type="primary"
          style={{ width: "100%", backgroundColor: "#00B9F2" }}
          onClick={() => history.push("/createcv")}
        >
          Apply for job
        </Button> */}
        <ModalForm
          title="Application form"
          trigger={
            <Button
              type="primary"
              style={{ width: "100%", backgroundColor: "#00B9F2" }}
            >
              Apply now
            </Button>
          }
          submitter={{
            searchConfig: {
              submitText: "Apply",
              resetText: "Cancel",
            },
          }}
        >
          <ProFormText
            width="lg"
            name="fullname"
            label="Fullname"
            placeholder="Fullname"
            rules={[{ required: true, message: "Please enter your fullname" }]}
            initialValue="Nhat Vi"
          />
          <ProFormText
            width="lg"
            name="email"
            label="Email"
            placeholder="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
                type: "email",
              },
            ]}
            initialValue="trannhatvi@gmail.com"
          />
          <ProFormText
            width="lg"
            name="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
            min={1}
            max={10}
            rules={[
              {
                type: "number",
                required: true,
                message: "Please enter your phone number",
              },
            ]}
            initialValue="0932686899"
          />
          <ProFormTextArea
            name="summary"
            label="Summary"
            placeholder="Introduce yourself"
          />
          <Upload>
            <Button style={{ margin: "1rem" }} icon={<UploadOutlined />}>
              Upload your CV
            </Button>
          </Upload>
        </ModalForm>
      </div>
      <div
        style={{
          padding: "1rem",
          borderTop: "1px solid #F5F5F5",
          borderBottom: "1px solid #F5F5F5",
          marginTop: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* {job.name.map((jobSubName, index) => {
            return (
              <Button size="small" style={{ marginRight: '0.3rem' }} key={index}>
                {jobSubName}
              </Button>
            );
          })} */}
          <ReconciliationOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Company name:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>{job.companyName}</div>
        </div>
        <div
          style={{
            color: "#00B9F2",
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <DollarOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Salary:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>{job.price}</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
        >
          {/* <img src="./pin.png" style={{ width: '1rem', height: '1rem' }} /> */}
          <EnvironmentOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Location:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>{job.locationDetail}</div>
        </div>
        <div
          style={{
            color: "#4288F5",
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <CalendarOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Submit date:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>{job.time}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <TeamOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Hired number:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>{job.numberHired}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <ToolOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Job type:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>
            {job.jobType === "true" ? "Part time" : "Full time"}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <TeamOutlined />
          <div style={{ marginLeft: "0.5rem", fontWeight: "500" }}>
            Experience years:{" "}
          </div>
          <div style={{ marginLeft: "0.5rem" }}>Không cần kinh nghiệm</div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid rgb(245, 245, 245)",
          padding: "1rem",
          marginTop: "2rem",
          backgroundColor: "#F5FCFF",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={company.image}
            alt=""
            style={{ width: "4rem", height: "4rem" }}
          />
          <div style={{ padding: "1rem", fontWeight: "500" }}>
            <div style={{ fontSize: "1rem" }}>{company.name}</div>
            <div style={{ color: "#5c5a5b", fontSize: "14px" }}>
              {company.fullname}
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SettingOutlined />
              <div style={{ marginLeft: "0.4rem" }}>Part time</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <InsertRowAboveOutlined />
              <div style={{ marginLeft: "0.4rem" }}>{company.calender}</div>
            </div>
          </div>
          <div style={{ margin: "0rem 8rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <UserOutlined />
              <div style={{ marginLeft: "0.4rem" }}>{company.companySize}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <EnvironmentOutlined />
              <div style={{ marginLeft: "0.4rem" }}>Ha noi</div>
            </div>
          </div>
          <div>
            <Button
              className="buttonHover"
              onClick={() => history.push("/companyprofile")}
            >
              View company profile
            </Button>
          </div>
        </div>
        <Rate disabled defaultValue="4" />
      </div>

      <div>
        <div>
          <div
            style={{
              fontSize: "23px",
              color: "#353535",
              fontWeight: "400",
              margin: "30px 0 0",
            }}
          >
            Job description
          </div>
          <div
            style={{
              color: "#3a3a3a",
              fontSize: "15px",
              lineHeight: "1.7rem",
              width: "100%",
            }}
          >
            {job.jobDescription.map((jobSubDesc, index) => {
              return (
                <li style={{ padding: "0 0 0 40px" }} key={index}>
                  {jobSubDesc}
                </li>
              );
            })}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "23px",
              color: "#353535",
              fontWeight: "400",
              margin: "30px 0 0",
            }}
          >
            Job requirements
          </div>
          <div
            style={{
              color: "#3a3a3a",
              fontSize: "15px",
              lineHeight: "1.7rem",
              width: "100%",
            }}
          >
            {job.jobExperience.map((jobSubEXp, index) => {
              console.log(jobSubEXp);
              return (
                <li style={{ padding: "0 0 0 40px" }} key={index}>
                  {jobSubEXp}
                </li>
              );
            })}
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: "23px",
              color: "#353535",
              fontWeight: "400",
              margin: "30px 0 0",
            }}
          >
            Job benefits
          </div>
          <div
            style={{
              color: "#3a3a3a",
              fontSize: "15px",
              lineHeight: "1.7rem",
              width: "100%",
            }}
          >
            {job.jobBenefits.map((jobSubEXp, index) => {
              console.log(jobSubEXp);
              return (
                <li style={{ padding: "0 0 0 40px" }} key={index}>
                  {jobSubEXp}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
