import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button} from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const HeaderEmployer = ({ isLogin }) => {
  const [current, setCurrent] = useState();
  const history = useHistory();

  const onMenuClick = (event) => {
    const { key } = event;

    if (key === "logout") {
      localStorage.removeItem("LOGIN_INFO");
      window.location.reload();
    }
  };

  const menuHeaderDropdown = (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item>
        <div onClick={() => history.push("/userProfile")}>Account profile</div>
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        Sign out
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Menu
        // onClick={handleClick}
        style={{
          //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          boxShadow: "0 1px 5px rgb(160 160 160 / 45%)",
          // lineHeight: '5rem',
          color: "#FFFF",
          backgroundColor: "#00B9F2",
          borderBottom: "none",
        }}
        theme="light"
        selectedKeys={[current]}
        mode="horizontal"
      >
        {/* <Menu.Item>
          <img
            src="./logoHeaderFindjob.png"
            alt=""
            style={{ marginRight: "1rem" }}
          />
        </Menu.Item> */}
        <Menu.Item
          onClick={() => history.push("/homepage")}
          style={{
            marginLeft: "5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            marginRight: "3rem",
            display: "flex",
          }}
        >
          <div style={{ color: "##FFFF" }}>JobF</div>
        </Menu.Item>
        <Menu.Item
          key="mail"
          onClick={() => history.push("/homeSeeker")}
          // style={{ fontSize: '1rem' }}
        >
          Manage CV
        </Menu.Item>
        {/* <Menu.Item
          key="alipay"
        //   onClick={() => history.push("/companyprofile")}
          // style={{ fontSize: '1rem' }}
        >
          Find Employee
        </Menu.Item> */}
        <Menu.Item 
        onClick={() => history.push("/recruitment")}
        >
          Recruitment
        </Menu.Item>
        {!isLogin ? (
          <Menu.Item style={{ marginLeft: "65rem", marginRight: "-1rem" }}>
            <Button
              type="ghost"
              onClick={() => history.push("/loginpage")}
              style={{ color: "#FFFF", textAlign: "center" }}
            >
              <UserOutlined />
              Login
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Dropdown overlay={menuHeaderDropdown}>
              <Button
                type="ghost"
                // onClick={() => history.push("/loginpage")}
                style={{
                  color: "#FFFF",
                  textAlign: "center",
                  marginLeft: "65rem",
                  marginRight: "-1rem",
                }}
              >
                <UserOutlined />
                {localStorage.getItem("ACCOUNTUSER")}
              </Button>
            </Dropdown>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default HeaderEmployer;
