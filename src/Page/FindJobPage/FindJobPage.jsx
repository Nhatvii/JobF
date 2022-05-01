import { DollarOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Select, Tag, Pagination } from "antd";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getJobList, getLocation } from "../../redux/reducer/JobSlice";
import Header from "../Header/Header";
import "./FindJobPage.scss";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetail";
import { Slider } from "@material-ui/core";

export const FindJobPage = () => {
  const jobList = useSelector(getJobList);
  const location = useSelector(getLocation);
  const [jobListDetail, setjobListDetail] = useState(jobList[0]);
  const [jobListRender, setJobListRender] = useState(jobList);

  const renderJobDetail = (job) => {
    return <JobDetail job={job} />;
  };
  const setJobTypeHandler = (value) => {
    console.log("value", value);
    const tmp = [];
    if (value === "parttime") {
      jobList.map((job, index) => {
        if (job.jobType === "true") {
          tmp.push(job);
        }
      });
      setJobListRender(tmp);
    } else {
      jobList.map((job, index) => {
        if (job.jobType === "false") {
          tmp.push(job);
        }
      });
      setJobListRender(tmp);
    }
  };

  const renderJobList = () => {
    return jobListRender.map((job, index) => {
      return (
        <div
          key={index}
          style={{ width: "100%" }}
          className="Job"
          onClick={() => setjobListDetail(job)}
        >
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
                to={{ pathname: "./companyprofile", state: job }}
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
              <div style={{ color: "black" }}>
                {/* {job.name.map((jobSubName, index) => {
                      return (
                        <Button size="small" style={{ marginRight: '0.3rem' }} key={index}>
                          {jobSubName}
                        </Button>
                      );
                    })} */}
                {job.companyName}
              </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "1rem 0rem",
                  color: "#A6A8AB",
                }}
              >
                {job.time}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        <Header isLogin={localStorage.getItem("LOGIN_INFO")} />
        <div style={{ width: "100%", backgroundColor: "#FFFF" }}>
          <div
            style={{
              margin: "0rem 10.8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Input
              style={{
                margin: "1rem 0rem",
                marginRight: "1rem",
                width: "59%",
                borderRadius: "7px",
                lineHeight: "2",
                border: "1px solid #949494",
              }}
              prefix={<SearchOutlined />}
              placeholder="Search for jobs, company name"
            />
            <select
              style={{ margin: "2rem 0rem", width: "32%" }}
              placeholder="Location"
              // suffixIcon={<UserAddOutlined />}
              className="SelectLocation"
              allowClear
            >
              <option value="" selected disabled hidden>
                Locations
              </option>
              {location.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
            <Button
              style={{
                margin: "2rem 0rem",
                backgroundColor: "#00b9f2",
                marginLeft: "1rem",
                height: "2.2rem",
                borderRadius: "7px",
              }}
              icon={<SearchOutlined />}
              type="primary"
            >
              Search
            </Button>
          </div>
          <div style={{ marginLeft: "9.8rem" }}>
            {/* <Select
              style={{ margin: "0rem 1rem", width: "8.5rem" }}
              placeholder="Near by"
              allowClear
            >
              <Option key="last24hour">In </Option>
              <Option key="last3day">Last 3 day ago</Option>
              <Option key="last7day">Last 7 day ago</Option>
              <Option key="last14day">Last 14 day ago</Option>
              <Option key="lastaccess">Last access</Option>
            </Select> */}
            <Select
              style={{ margin: "0rem 1rem", width: "8rem" }}
              placeholder="Salary range"
              allowClear
            >
              <Option value="3-5"> {`< 3 triệu`}</Option>
              <Option value="4-8">3 triệu - 6 triệu</Option>
              <Option value="7-15">6 triệu - 9 triệu</Option>
              <Option value="10-20">9 triệu - 12 triệu</Option>
              <Option value="over20"> {`> 12 triệu`}</Option>
            </Select>
            <Select
              style={{ margin: "0rem 1rem", width: "7rem" }}
              placeholder="Job type"
              allowClear
              onChange={setJobTypeHandler}
            >
              <Option key="fulltime">Full time</Option>
              <Option key="parttime">Part time</Option>
              <Option key="internship">Internship</Option>
            </Select>
            <Select
              style={{ margin: "0rem 1rem", width: "6.5rem" }}
              placeholder="Company"
              allowClear
            >
              <Option key="Maazi">Maazi</Option>
              <Option key="waynecoffee">Wayne's coffee</Option>
              <Option key="coway">Coway</Option>
              <Option key="klever house">Klever House</Option>
            </Select>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #e4e2e0", marginTop: "1rem" }}>
          <div className="JobList">
            <div className="JobList__info">
              <div style={{ display: 'flex', textAlign: 'center'}}>
                <div style={{marginLeft: '1rem', display: 'flex'}}><div style={{ fontWeight: '700'}}>58 </div> <div>jobs matched</div></div>
                <div style={{ marginLeft: '21.2rem'}}>
                  Sort by:
                  <Select
                    defaultValue="Default"
                    style={{ width: 140}}
                    bordered={false}
                  >
                    <Option value="Default">Default</Option>
                    <Option value="MostRelavance">Most relavance</Option>
                    <Option value="latest">Post date (latest)</Option>
                    <Option value="oldest">Post date (oldest)</Option>
                  </Select>
                </div>
              </div>
              {renderJobList()}
              <Pagination
                style={{ margin: "2rem " }}
                showSizeChanger
                // onShowSizeChange={onShowSizeChange}
                defaultCurrent={1}
                total={400}
              />
            </div>
            <div className="JobList__detail">
              {renderJobDetail(jobListDetail)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobPage;
