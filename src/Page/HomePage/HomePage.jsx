import "./HomePage.scss";
import { Button, Carousel, Input, Tag, Avatar, Card } from "antd";
import {
  SearchOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Meta } from "antd/lib/list/Item";
import "antd/dist/antd.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import HeaderTest from "../Header/HeaderTest";
import {
  getCompanyList,
  getJobList,
  getLocation,
} from "../../redux/reducer/JobSlice";
import { useEffect } from "react";
import { Select } from "antd";
// import 'font-awesome/css/font-awesome.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { laptop } from '@fortawesome/free-solid-svg-icons'

// library.add(laptop)

const HomePage = () => {
  const history = useHistory();
  const companyList = useSelector(getCompanyList);
  const jobList = useSelector(getJobList);
  const location = useSelector(getLocation);
  const category = useState([
    "Sales",
    "Doctor",
    "Accounting",
    "Human resource",
  ]);

  const renderJobList = (id) => {
    return jobList.map((job, index) => {
      if (id && index < 4) {
        return (
          <div key={index} style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "7rem",
                backgroundColor: "#ffff",
                borderBottom: "1px solid rgb(245, 245, 245)",
              }}
            >
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
                {/* <Link to= {{ pathname:'./JobInfo', state: job }} className="CardLink">{job.title}</Link> */}
                <Link to="/findjobpage" className="CardLink">
                  {job.title}
                </Link>
                {/* <div style={{ margin: '0.5rem 0', display: 'flex', fontSize: '1rem', fontWeight: '500', color: '#49CC90', alignItems: 'center' }}>
                <DollarOutlined />
                <div style={{ marginLeft: '0.5rem'}}>{job.price}</div>
                </div> */}
                <div style={{ color: "black" }}>{job.companyName}</div>
              </div>
              <div>
                <Tag
                  color={job.status === "New" ? "success" : "warning"}
                  style={{ margin: "1rem" }}
                >
                  {job.status}
                </Tag>
              </div>
            </div>
          </div>
        );
      } else if (!id && index >= 4) {
        return (
          <div key={index} style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "7rem",
                backgroundColor: "#ffff",
                borderBottom: "1px solid rgb(245, 245, 245)",
              }}
            >
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
                  to={{ pathname: "./JobInfo", state: job }}
                  className="CardLink"
                >
                  {job.title}
                </Link>
                {/* <div style={{ margin: '0.5rem 0', display: 'flex', fontSize: '1rem', fontWeight: '500', color: '#49CC90', alignItems: 'center' }}>
                <DollarOutlined />
                <div style={{ marginLeft: '0.5rem'}}>{job.price}</div>
                </div> */}
                <div style={{ color: "#4a4a4a" }}>{job.companyName}</div>
              </div>
              <div>
                <Tag
                  color={job.status === "New" ? "success" : "warning"}
                  style={{ margin: "1rem" }}
                >
                  {job.status}
                </Tag>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderCompanyList = () => {
    return companyList.map((company, index) => {
      return (
        <div key={index} className="featureCompany">
          <img src={company.image} alt="" className="featureCompany__image" />
          <div
            className="featureCompany__companyName"
            onClick={() => history.push("/companyprofile")}
          >
            {company.name}
          </div>
        </div>
      );
    });
  };

  const renderBrowseJob = () => {
    return (
      <div>
        <div>
          <div>
            {/* <i class="fas fa-laptop"></i>
            Favorite Food: <FontAwesomeIcon icon="laptop" />
            <div>IT Engineer</div> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };

  const renderCarousel = (name) => {
    return (
      <div style>
        <h3
          className={name}
          style={{
            height: "47rem",
            color: "#FFFF",
            fontSize: "46px",
            fontWeight: "300",
            textShadow: "0 1px 1px rgb(0 0 0 / 70%)",
          }}
        >
          <div className="content">
            <div>Find your dream jobs</div>
            <div className="content__searchBar">
              <Input
                className="content__searchBar__input"
                prefix={
                  <SearchOutlined
                    style={{ color: "#858585", margin: "0.5rem" }}
                  />
                }
                placeholder="Search for jobs, companies"
              />
              <select required className="selectLocationCate">
                <option value="" selected disabled hidden>
                  Locations
                </option>
                {location.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
              <select required className="selectLocationCate" >
                <option value="" selected disabled hidden>
                  Job type
                </option>
                {/* <option key="hr">Human Resource</option>
                <option key="sale">Sale</option>
                <option key="doctor">Doctor</option>
                <option key="accounting">Accounting</option>
                <option key="teacher">Teacher</option> */}
                <option key="fulltime">Full time</option>
                <option key="parttime">Part time</option>
                <option key="internship">Internship</option>
              </select>
              <button
                className="content__searchBar__button"
                onClick={() => history.push("/findjobpage")}
              >
                Search
              </button>
            </div>
          </div>
        </h3>
      </div>
    );
  };
  return (
    <div>
      {/* <Header isLogin={localStorage.getItem("LOGIN_INFO")} /> */}
      <HeaderTest isLogin={localStorage.getItem("LOGIN_INFO")} />
      <div>
        <Carousel>
          {renderCarousel("carousel__layout3")}
          {renderCarousel("carousel__layout2")}
          {renderCarousel("carousel__layout1")}
        </Carousel>
      </div>

      <div>
        {/* <div>
          Browse <span>Jobs</span>
        </div> */}
        {renderBrowseJob()}
      </div>
      

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            color: "#484848",
            fontWeight: "300",
            fontSize: "30px",
            marginBottom: "1rem",
          }}
        >
          Featured Companies
        </div>
        <div className="companyFeature">{renderCompanyList()}</div>
      </div>
      <div>
        <div style={{ width: "70%", margin: "35px auto" }}>
          <span
            style={{
              color: "#484848",
              fontWeight: "300",
              fontSize: "30px",
              marginBottom: "1rem",
              marginLeft: "36rem",
            }}
          >
            Featured Jobs{" "}
          </span>
          {/* <div style={{ width: '70%', margin: '30px auto', border: '1px solid #f5f5f5', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            {renderJobList()}
        </div> */}
          <div style={{ display: "flex", width: "95%", margin: "30px 8rem" }}>
            <div>{renderJobList(true)}</div>
            <div>{renderJobList(false)}</div>
          </div>
          <Button
            style={{
              margin: "0 38rem",
              height: "3rem",
              fontSize: "1.3rem",
              fontWeight: "500",
              backgroundColor: "#00B9F2",
              color: "#ffff",
            }}
          >
            More...
          </Button>
        </div>
      </div>
      {/* <Carousel arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>

      </Carousel> */}
      <div style={{ display: "flex", textAlign: "center" }}>
        <div className="container">
          <div
            style={{ color: "#484848", fontWeight: "300", fontSize: "30px" }}
          >
            Career Advice from HR Insider
          </div>
          <div style={{ marginLeft: "26rem" }}>
            <div className="row">
              <Card
                hoverable
                style={{ width: 300, margin: "1rem" }}
                cover={
                  <img
                    alt="example"
                    src="https://hrinsider.vietnamworks.com/wp-content/uploads/2021/06/shutterstock_1518184076-1-1080x675.jpg"
                  />
                }
              >
                <Meta
                  style={{ textAlign: "center" }}
                  title="6 con giáp quyền lực nhất năm 2021: Sự nghiệp nở rộ, tài lộc dồi dào, tình duyên viên mãn"
                  description="Trong tháng 5 âm lịch này sẽ là bước ngoặc thăng hoa của một số con giáp dưới đây. Kiểm tra xem bạn có nằm trong số đó không nhé!"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 300, margin: "1rem" }}
                cover={
                  <img
                    alt="example"
                    src="https://hrinsider.vietnamworks.com/wp-content/uploads/2021/06/1200x900-3-1080x675.jpg"
                  />
                }
              >
                <Meta
                  // style={{ textAlign: 'center' }}
                  title="Biết nhiều biết ít không quan trọng bằng BIẾT ĐIỀU!"
                  description="Sinh viên mới ra trường kinh nghiệm không có, kiến thức không đủ vậy nhà tuyển dụng nhìn vào đâu để lựa chọn? Thái độ biết điều là mấu chốt!"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 300, margin: "1rem" }}
                cover={
                  <img
                    alt="example"
                    src="https://hrinsider.vietnamworks.com/wp-content/uploads/2021/06/9_1200x900-1-1080x675.jpg"
                  />
                }
              >
                <Meta
                  // style={{ textAlign: 'center' }}
                  title="Management Trainee: Câu hỏi phỏng vấn thường gặp và cách trả lời"
                  description="Nếu bạn đang chuẩn bị phỏng vấn cho công việc Management Trainee, hãy tham khảo ngay bài viết bên dưới để xem các câu hỏi thường gặp và cách trả lời khéo léo, để thực sự để lại ấn..."
                />
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="jp_bottom_footer_Wrapper">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="jp_bottom_footer_left_cont">
              <p>© 2019-20 Job Pro. All Rights Reserved.</p>
            </div>
            <div class="jp_bottom_top_scrollbar_wrapper">
              <a
                href="javascript:"
                id="return-to-top"
                style={{ display: "block" }}
              >
                <i class="fa fa-angle-up"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="jp_bottom_footer_right_cont">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li class="hidden-xs">
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li class="hidden-xs">
                  <a href="#">
                    <i class="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
