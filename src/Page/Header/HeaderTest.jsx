import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown } from "antd";
import { useHistory } from "react-router-dom";
import "./HeaderTest.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    // flexGrow: 1,
    color: "#FFFF",
  },
  appBarTransparent: {
    // backgroundColor: "rgba(81,78,82,0.5)",
    backgroundColor: "transparent",
  },
  appBarSolid: {
    backgroundColor: "#00B9F2",
  },
}));
const onMenuClick = (event) => {
  const { key } = event;

  if (key === "logout") {
    localStorage.removeItem("LOGIN_INFO");
    window.location.reload();
  }
};


export default function ButtonAppBar({ isLogin }) {
  const classes = useStyles();
  const history = useHistory();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{
              marginLeft: "3rem",
              fontSize: "2rem",
              fontWeight: "bold",
              marginRight: "5rem",
              display: "flex",
            }}
          >
            {/* <img src="./logoHeaderFindjob.png" alt="" style={{ marginRight: '1rem'}} /> */}
            JobF
          </Typography>
          <Typography
            className="title"
            onClick={() => history.push("/findjobpage")}
          >
            Jobs
          </Typography>
          <Typography
            className="title"
            onClick={() => history.push("/companyprofile")}
          >
            Companies
          </Typography>
          {/* <Typography className="title" onClick={() => history.push('/createcv')}>My CV</Typography> */}
          {!isLogin ? (
            <Typography style={{ marginLeft: "65rem", marginRight: "-1rem" }}>
              <Button
                type="ghost"
                onClick={() => history.push("/loginpage")}
                style={{ color: "#FFFF", textAlign: "center" }}
              >
                <UserOutlined />
                Login
              </Button>
            </Typography>
          ) : (
            <Typography>
              <Dropdown overlay={menuHeaderDropdown}>
                <Button
                  type="ghost"
                  onClick={() => history.push("/loginpage")}
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
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
