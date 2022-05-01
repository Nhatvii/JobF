import {
  Tabs,
  Input,
  Button,
  Avatar,
  Card,
  Switch,
  Checkbox,
  Table,
  Select,
  Calendar, 
  Badge,
  DatePicker,
  Tag,
  Upload
} from "antd";
import moment from 'moment';
import { UnorderedListOutlined, CalendarOutlined, EditOutlined, MailOutlined, EnvironmentOutlined, DownloadOutlined } from "@ant-design/icons";
import HeaderEmployer from "../Header/HeaderEmployer";
import "./ManageCVPage.scss";
import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { getCV } from "../../redux/reducer/JobSlice";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form";
import ProTable from '@ant-design/pro-table';

const { TabPane } = Tabs;
const { Option } = Select;
const { Meta } = Card;

const ManageCVPage = () => {
  const [isProcessBox, setisProcessBox] = useState(0);
  const listCV = useSelector(getCV);
  const [listCVInterview, setlistCVInterview] = useState();

  const ref = useRef();
  const [selectedRows, setSelectedRows] = useState([]);
  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: setSelectedRows,
    // type: 'checkbox',
  };
  useEffect(() => {
    const listInterview = [];
    listCV.map((cv, index) => {
      if(cv.status ==="Approved"){
        listInterview.push(cv);
      }
    })
    setlistCVInterview(listInterview);
  }, []);
  const renderProfile = () => {
    return (
      <div style={{ backgroundColor: "#EDF1F5" }}>
        <div style={{ display: "flex" }}>
          {/* <div className="processBox" onClick={() => setisProcessBox(0)}>
            List CV
          </div> */}
          <div className={isProcessBox === 0 ? "processBox__active" : "processBox"} onClick={() => setisProcessBox(0)}>
            List CV
          </div>
          <div className={isProcessBox === 1 ? "processBox__active" : "processBox"} onClick={() => setisProcessBox(1)}>
            Interview
          </div>
          {/* <div className="processBox" onClick={() => setisProcessBox(3)}>
            3.Get a job
          </div> */}
        </div>
      </div>
    );
  };
  const columnsFilterCV = [
    {
      title: "Candidate name",
      dataIndex: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Experience",
      dataIndex: "experience",
    },
    {
      title: 'Job name',
      // dataIndex: 'jobName',
      render: (text, record) => {
        return <Link to="companyprofile">{record.jobName}</Link>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: 'Undefined',
          value: 'Undefined',
        },
        {
          text: 'Approved',
          value: 'Approved',
        },
        {
          text: 'Denied',
          value: 'Denied',
        },
      ],
      onFilter: (value, record) =>  record.status.indexOf(value) === 0,
      render: (text, record) => {
          if(record.status === "Approved"){
            return <Tag color="green">Approved</Tag>
          } else if(record.status === "Undefined"){
            return <Tag color="grey">Undefined</Tag>
          } else{
            return <Tag color="red">Denied</Tag>
          }
      },
    },
    {
      title: 'CV file',
      render: (text, record) =>{
        return(
          <Upload >
          <Button icon={<DownloadOutlined />}>{`${record.name}.pdf`}</Button>
        </Upload>
        )
      }
    },
    {
      title: "Action",
      render: (record, text) => {
        return (
          <div style={{ display: 'flex'}}>
          <Button type="primary" disabled={record.status === "Undefined" ? false : true} style={{ backgroundColor: '#40B660', marginRight: '0.3rem'}}>Approve</Button>
          <Button type="primary" disabled={record.status === "Undefined" ? false : true} style={{ backgroundColor: '#DC3139'}}>Deny</Button>
          </div>
        );
      },
    },
  ];
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const columnsInterview = [
    {
      title: 'Candidate name',
      // dataIndex: 'name',
      render: (record, text) => {
        if(record.status === "Approved"){
          return <div>{record.name}</div>
        }
      }
    },
    {
      title: 'Date interview',
      // dataIndex: 'dateInterview',
      render: (record, text) => {
        console.log("date", record.dateInterview)
        if(record.status === "Approved"){
          return (
            <DatePicker placeholder="Select date" format={dateFormatList} />
          )
        }
      }
    },
    // {
    //   title: 'Actions'
    // },
  ]
  const renderProcessBox = (process) => {
    // if (process === 0) {
    //   return (
    //       <div style={{ display: "flex" }}>
    //         {listCV.map((cv, index) => {
    //           return (
    //             <Card
    //               style={{ width: 300, marginTop: 16 }}
    //               actions={[<div>Status <Checkbox  checked={cv.status === "Approved"} /></div>]}
    //             >
    //               <Meta
    //                 avatar={
    //                   <Avatar src="https://tuyendung.topcv.vn/images/noavatar.jpg" />
    //                 }
    //                 title={cv.name}
    //               />
    //               <Tag icon={<MailOutlined />}>{cv.email}</Tag>
    //               <Tag icon={<EnvironmentOutlined />}>{cv.location}</Tag>
    //             </Card>
    //           );
    //         })}
    //       </div>
    //   );
    // } else 
    if (process === 0) {
      return (
        <div>
          <Table
            style={{ marginTop: "1rem" }}
            columns={columnsFilterCV}
            dataSource={listCV}
            pagination={false}
          />
        </div>
      );
    } else if (process === 1 ){
      return (
        <div>
          <ProTable
            style={{ marginTop: "1rem" }}
            columns={columnsInterview}
            dataSource={listCVInterview}
            pagination={false}
            rowSelection={rowSelection}
            rowKey="name"
            actionRef={ref}
            search={false}
            options={false}
            tableAlertRender={() => [

            ]}
            tableAlertOptionRender={() => [
              <span>
                Choose {selectedRows.length} candidate
              </span>
            ]}
            toolBarRender={() =>[
              <Button type="primary" style={{ backgroundColor: '#00B9F2'}}>
                Send Interview
              </Button>
            ]}
          />
        </div>
      )
    }
  };
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'success', content: '9:00 - 10:00 Tran Nhat Vi' },
          { type: 'success', content: '3:30 - 4:00 Bui Tri Dung' },
        ];
        break;
      case 17:
        listData = [
          { type: 'warning', content: '8:30 - 10:00 Nguyen Huy' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>9:00 Tran Vi</span>
      </div>
    ) : null;
  }
  return (
    <div>
      <HeaderEmployer isLogin={localStorage.getItem("LOGIN_INFO")} />
      <div>
        <Tabs
          defaultActiveKey="2"
        >
          <TabPane
                    style={{ marginLeft: "16rem", width: "70%" }}
            tab={
              <span>
                <UnorderedListOutlined />
                Profile list
              </span>
            }
            key="1"
          >
            {renderProfile()}
            <div
              style={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F8F8F8",
              }}
            >
              <Input
                // className="content__searchBar__input"
                prefix={
                  <SearchOutlined
                    style={{ color: "#858585", margin: "0.5rem" }}
                  />
                }
                style={{}}
                placeholder="Search for name, email, phone number"
              />
              {/* <Select placeholder="Status" >
                <Option key="koxacdinh">Undefined</Option>
                <Option key="approved">Approved</Option>
                <Option key="notApproved">Not Approved</Option>
              </Select> */}
              <select
                required
                style={{
                  height: "2.5rem",
                  margin: "0rem 1.5rem",
                  border: "1px solid #d9d9d9",
                }}
              >
                <option value="" selected disabled hidden>
                  Status
                </option>
                <option value="koxacdinh">Undefined</option>
                <option key="approved">Approved</option>
                <option key="notApproved">Not Approved</option>
              </select>
              <Button type="primary" size="large" style={{ backgroundColor: '#00B9F2'}}>
                Search
              </Button>
            </div>
            {renderProcessBox(isProcessBox)}
          </TabPane>
          <TabPane
            style={{ marginLeft: "16rem", width: "70%" }}
            tab={
              <span>
                <CalendarOutlined />
                Interview schedule 
              </span>
            }
            key="2"
          >
              <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageCVPage;
