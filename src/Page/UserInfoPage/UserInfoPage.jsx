import { Tabs, Button } from "antd";
import { UserOutlined, BellOutlined, DeleteOutlined } from "@ant-design/icons";
import Header from "../Header/Header";
import "./UserInfoPage.scss";
import CreateCVPage from "../CreateCVPage/CreateCVPage.jsx";

const { TabPane } = Tabs;

const UserInfoPage = () => {

    const renderJobAlert = () => {
        return (
            <div style={{ width: '100%', backgroundColor: '#F5F5F5', height: '53rem'}}>
                <div style={{ width: '70%', backgroundColor: '#ffff', margin: '0 auto', padding: '2rem'}}>
                    <div style={{ fontSize: '2rem', fontWeight: '400'}}>Job Alerts</div>
                    <div style={{ display: 'flex', padding: '1rem 0', borderTop: '1px solid #e5e5e5'}}>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '400'}}>Nhân viên phục vụ</div>
                        <div style={{ display: 'flex', color: '#A5A5A6'}}>
                          <div style={{ marginRight: '1rem'}}>Hồ Chí Minh</div>
                          <div>5 - 7 triệu</div>
                        </div>
                      </div>
                      <div style={{ marginLeft: '16rem', textAlign: 'center'}}>
                        <div style={{ fontSize: '15px'}}>Interview Date</div>
                        <div style={{ fontSize: '20px', color: '#A5A5A6'}}>08:00 20-07-2021</div>
                      </div>
                      <div style={{ marginLeft: '5rem', textAlign: 'center'}}>
                        <div style={{ fontSize: '15px'}}>Interview Location</div>
                        <div style={{ fontSize: '20px', color: '#A5A5A6'}}>25 Trần Hưng Đạo Quận 1</div>
                      </div>
                      <div style={{ marginLeft: '15rem'}}>
                        <Button type="danger">
                          <DeleteOutlined />
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', padding: '1rem 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '400'}}>Nhân viên giao hàng</div>
                        <div style={{ display: 'flex', color: '#A5A5A6'}}>
                          <div style={{ marginRight: '1rem'}}>Hồ Chí Minh</div>
                          <div>4 - 8 triệu</div>
                        </div>
                      </div>
                      <div style={{ marginLeft: '15rem', textAlign: 'center'}}>
                        <div style={{ fontSize: '15px'}}>Interview Date</div>
                        <div style={{ fontSize: '20px', color: '#A5A5A6'}}>12:00 22-07-2021</div>
                      </div>
                      <div style={{ marginLeft: '5rem', textAlign: 'center'}}>
                        <div style={{ fontSize: '15px'}}>Interview Location</div>
                        <div style={{ fontSize: '20px', color: '#A5A5A6'}}>25 Nguyễn Trãi Quận 5</div>
                      </div>
                      <div style={{ marginLeft: '15.5rem'}}>
                        <Button type="danger">
                          <DeleteOutlined />
                          Delete
                        </Button>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
      <Header isLogin={localStorage.getItem("LOGIN_INFO")} />
      <Tabs>
        <TabPane
      
          tab={
            <span>
              <UserOutlined />
              Account profile
            </span>
          }
          key="1"
        >
          <CreateCVPage />
        </TabPane>
        <TabPane
          tab={
            <span>
              <BellOutlined />
              Job Alert
            </span>
          }
          key="2"
        >
          {renderJobAlert()}
        </TabPane>
      </Tabs>
      ,
    </div>
  );
};

export default UserInfoPage;
