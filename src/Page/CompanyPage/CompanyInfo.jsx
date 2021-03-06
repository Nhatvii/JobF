import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getCompanyJobList,
  getCompanyList,
} from "../../redux/reducer/JobSlice";
import {
  EnvironmentOutlined,
  SettingOutlined,
  InsertRowAboveOutlined,
  UserOutlined,
  GoogleOutlined,
  FacebookFilled,
  UploadOutlined,
  TwitterOutlined,
  DollarOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Tabs, Input, InputNumber, Upload, Divider } from "antd";
import "./CompanyInfo.scss";
import { Rate, Avatar, Tag } from "antd";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDigit,
  ProFormTextArea,
} from "@ant-design/pro-form";
import Form from "antd/lib/form/Form";

const CompanyInfo = () => {
  const companyList = useSelector(getCompanyList);
  const jobList = useSelector(getCompanyJobList);
  const [company, setCompany] = useState(companyList[0]);
  const { TabPane } = Tabs;

  const renderJobList = (size) => {
    return jobList.map((job, index) => {
      if (job.name === "Maazi") {
        return (
          <div key={index} style={{ width: `${size}%` }} className="Job">
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
                <Link
                  //   to={{ pathname: "./JobInfo", state: job }}
                  to="/findjobpage"
                  className="Job__cardInfo__title"
                >
                  {job.title}
                </Link>
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
              <div>
                <Tag
                  color={job.status === "New" ? "success" : "warning"}
                  style={{ margin: "1rem" }}
                >
                  {job.status}
                </Tag>
                <div
                  style={{
                    color: "#A6A8AB",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {job.location}
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "1rem 0rem",
                    color: "#A6A8AB",
                  }}
                >
                  {job.time}
                </div> */}
                <ModalForm
                  title="Application form"
                  trigger={
                    <Button
                      type="primary"
                      style={{ backgroundColor: "#00B9F2" }}
                    >
                      Apply
                    </Button>
                  }
                  submitter={{
                    searchConfig: {
                      submitText: "Upload CV",
                      resetText: "Cancel",
                    },
                  }}
                >
                  <ProFormText
                    width="lg"
                    name="fullname"
                    label="Fullname"
                    placeholder="Fullname"
                    rules={[
                      { required: true, message: "Please enter your fullname" },
                    ]}
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
                    <Button
                      style={{ margin: "1rem" }}
                      icon={<UploadOutlined />}
                    >
                      Upload your CV
                    </Button>
                  </Upload>
                </ModalForm>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderJobCompany = () => {
    return (
      <div>
        <div style={{ display: "flex", marginTop: '2rem' }}>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "400", color:'#00B9F2' }}>
              {jobList[0].title}
            </div>
            <div style={{ fontSize: "17px", fontWeight: "700", color:'#393e46' }}>
              {jobList[0].price}
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#353535",
                  fontWeight: "700",
                  margin: "20px 0 0",
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
                <ul>
                  {jobList[0].jobDescription.map((jobSubDesc, index) => {
                    return (
                      <li key={index}>
                        {jobSubDesc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#353535",
                  fontWeight: "700",
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
                <ul>
                  {jobList[0].jobExperience.map((jobSubEXp, index) => {
                    // console.log(jobSubEXp);
                    return (
                      <li key={index}>
                        {jobSubEXp}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#353535",
                  fontWeight: "700",
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
                <ul>
                  {jobList[0].jobBenefits.map((jobSubEXp, index) => {
                    // console.log(jobSubEXp);
                    return (
                      <li key={index}>
                        {jobSubEXp}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            
          </div>
          <div style={{ margin: "0 auto" }}>
            <ModalForm
              title="Application form"
              trigger={
                <Button
                  type="primary"
                  style={{ backgroundColor: "#00B9F2", width: "15rem" }}
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
                rules={[
                  { required: true, message: "Please enter your fullname" },
                ]}
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
            <div>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Location</div>
              <div>H??? Ch?? Minh</div>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Year of experience</div>
              <div>Kh??ng c???n kinh nghi???m</div>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Level</div>
              <div>Nh??n vi??n</div>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Job type</div>
              <Tag>Parttime</Tag>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Hired number</div>
              <div>8 ng?????i</div>
              <div style={{fontWeight: '700', marginTop: '1rem'}}>Date expire</div>
              <div>25/09/2021</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Header isLogin={localStorage.getItem("LOGIN_INFO")} />
      <div
        style={{
          border: "1px solid rgb(245, 245, 245)",
          padding: "1rem",
          marginTop: "3rem",
          width: "65%",
          margin: "0 auto",
          display: "flex",
          backgroundColor: "#F5FCFF",
        }}
      >
        <img
          src={company.image}
          alt=""
          style={{ width: "11rem", height: "11rem" }}
        />
        <div style={{ margin: "1rem" }}>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "1rem", fontWeight: "500" }}>
              <div style={{ fontSize: "1rem" }}>{company.name}</div>
              <div style={{ color: "#5c5a5b", fontSize: "14px" }}>
                {company.fullname}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <SettingOutlined />
                <div style={{ marginLeft: "0.4rem" }}>Part time</div> */}
                <UserOutlined />
                <div style={{ marginLeft: "0.4rem" }}>
                  {company.companySize}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
              <EnvironmentOutlined />
                <div style={{ marginLeft: "0.4rem" }}>Ha noi</div>
                {/* <InsertRowAboveOutlined />
                <div style={{ marginLeft: "0.4rem" }}>{company.calender}</div> */}
              </div>
            </div>
            {/* <div style={{ margin: "0rem 8rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <UserOutlined />
                <div style={{ marginLeft: "0.4rem" }}>
                  {company.companySize}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <EnvironmentOutlined />
                <div style={{ marginLeft: "0.4rem" }}>Ha noi</div>
              </div>
            </div> */}
          </div>
            <Rate style={{ marginLeft: "1rem" }} disabled defaultValue="4" />
        </div>
      </div>
      <div
        style={{
          width: "65%",
          margin: "0 auto",
          backgroundColor: "#FFFF",
          padding: "2.5rem",
        }}
      >
        <Tabs >
          <TabPane tab="Job" key="2" style={{paddingLeft: '0px!important'}}>
            {renderJobCompany()}
            <Divider orientation="left">Another Job</Divider>
            {renderJobList(82)}
          </TabPane>
          <TabPane tab="About Company" key="1">
            <div style={{ width: "70%", marginTop: '2rem'}}>
              <div>
                {/* <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    color: "#3d3d3d",
                    margin: "1rem",
                  }}
                >
                  Maazi
                </div> */}
                <div>
                  Nh?? h??ng v?? c??c d???ch v??? ??n u???ng ph???c v??? l??u ?????ng C??NG TY TNHH
                  MAAZI VIETNAM ho???t ?????ng trong l??nh v???c, lu??n ph???n ?????u cung c???p
                  c??c s???n ph???m, d???ch v??? ch???t l?????ng nh???m ????p ???ng nh???ng y??u c???u
                  ng??y c??ng cao c???a Qu?? kh??ch.
                  <br /> M???i ?????t n?????c c?? m???t n???n ???m th???c ?????c tr??ng, ri??ng bi???t
                  t???o n??n d???u ???n c???a ch??nh qu???c gia m??nh. ???m th???c ???n ????? c??ng
                  kh??ng ngo???i l???. L?? m???t n?????c ????ng ?? c?? kh?? h???u n??ng quanh n??m.
                  ???n ????? n???i ti???ng v???i nh???ng m??n ??n c?? h????ng v??? n???ng, cay v?? ?????
                  l???i ???n t?????ng kh?? qu??n. <br />
                  To??? l???c t???i s??? s??? 7A ng?? 40 Xu??n Di???u, nh?? h??ng Maazi India l??
                  m???t trong nh???ng nh?? h??ng chuy??n m??n ???n n???i ti???ng t???i H?? N???i.
                  <br /> T??? nh???ng m??n truy???n th???ng c???a ???n ?????, cho ?????n nh???ng m??n
                  ??n ???????c pha tr???n ??a d???ng n???n v??n ho?? ?????u ???????c ph???c v??? t???i nh??
                  h??ng Maazi India, v???i kh??ng gian ph???ng ph???t l???i ki???n tr??c c???a
                  ???n ????? gi??o, k???t h???p v???i nh???ng m??n ??n ngon mi???ng v?? phong c??ch
                  ph???c v??? chu ????o. T???t c??? ???? l??m n??n th????ng hi???u c???a nh?? h??ng
                  Maazi India.
                </div>
              </div>
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  color: "#3d3d3d",
                  margin: "1rem",
                }}
              >
                Maazi's jobs
              </div>
              {renderJobList(100)}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyInfo;
