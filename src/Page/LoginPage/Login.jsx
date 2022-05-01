import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Checkbox, notification } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
// import { useIntl, connect, FormattedMessage, useHistory } from 'umi';
import "./Login.scss";
import { useDispatch } from 'react-redux';
import GoogleLoginIcon from 'react-google-login';
import Header from '../Header/Header';
import RegisterPage from './Register';
import { useHistory } from 'react-router-dom';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState('account');
  // const [AccountInfo, setAccountInfo] = useState({ username: 'user', password: '123' });
//   const intl = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (values.userName === "user" && values.password === "123") {
      localStorage.setItem("LOGIN_INFO", true);
      localStorage.setItem("ACCOUNTUSER", "Nhat Vi");
      history.push('/home');
    } else if(values.userName === "sa" && values.password === "456"){
      localStorage.setItem("LOGIN_INFO", true);
      localStorage.setItem("ACCOUNTUSER", "Employer");
      history.push('/homeSeeker');
    } else {
      notification.open({ message: 'Wrong username or password' });
    }
  };
  
  const responseGoogle = (response) => {
    console.log(response);
    // dispatch({ type: 'GET_GOOGLEINFO', data: response });
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  };

  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '60rem' }}>
      <Header  />
      <div className="main" style={{ width: '25rem' }}>
        <div
          style={{
            border: '0.1px solid #F0F0F0',
            marginTop: '8rem',
            borderRadius: '2%',
            boxSizing: 'border-box',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            height: '63vh',
            backgroundColor: '#FFFFFF',
          }}
        >
          <ProForm
            initialValues={{
              autoLogin: true,
            }}
            style={{
              margin: '3rem',
            }}
            submitter={{
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                  marginTop: '1rem',
                },
              },
              searchConfig: {
                submitText: 'Login',
              },
            }}
            onFinish={(values) => {
              handleSubmit(values);
              return Promise.resolve();
            }}
          >
            <div
              style={{
                fontSize: '5rem',
                color: '#00B9F2',
                textAlign: 'center',
              }}
            >
              JobF
            </div>
            {/* {status === 'error' && loginType === 'account' && !submitting && (
              <LoginMessage
                content={intl.formatMessage({
                  id: 'pages.login.accountLogin.errorMessage',
                  defaultMessage: 'Incorrect account or password（admin/ant.design)',
                })}
              />
            )} */}
            <ProFormText
              name="userName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className="prefixIcon" />,
              }}
            //   placeholder={intl.formatMessage({
            //     id: 'pages.login.username.placeholder',
            //     defaultMessage: 'Tài khoản',
            //   })}
            placeholder="Username"
            //   rules={[
            //     {
            //       required: true,
            //       message: (
            //         <FormattedMessage
            //           id="pages.login.username.required"
            //           defaultMessage="Vui lòng nhập tài khoản"
            //         />
            //       ),
            //     },
            //   ]}
            />
            <ProFormText.Password
              name="password"
              style={{ borderRadius: '4%!important' }}
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className="prefixIcon" />,
              }}
            //   placeholder={intl.formatMessage({
            //     id: 'pages.login.password.placeholder',
            //     defaultMessage: 'Mật khẩu',
            //   })}
            placeholder="Password"
            //   rules={[
            //     {
            //       required: true,
            //       message: (
            //         <FormattedMessage
            //         //   id="pages.login.password.required"
            //           defaultMessage="Vui lòng nhập mật khẩu"
            //         />
            //       ),
            //     },
            //   ]}
            />
            <div>
              <Checkbox>
                <span>Keep me sign in</span>
              </Checkbox>
              <a style={{ float: 'right' }} href="">
                Forgot password? 
              </a>
            </div>
          </ProForm>
          <div style={{ display: 'flex', marginLeft: '4rem', marginBottom: '1rem' }}>
                Don't have an account yet?  <RegisterPage />
          </div>
          <div
            style={{
              // textAlign: 'center',
              border: '1px solid red',
              width: '76%',
              margin: '0rem 0rem 3rem 3rem',
              height: '2.7rem',
              boxSizing: 'border-box',
              position: 'relative',
              backgroundColor: '#CE3E26',
              cursor: 'pointer',
              borderRadius: '3rem',
              fontSize: '1rem',
              boxShadow: 'rgb(160 160 160 / 45%) 0px 1px 5px',
            }}
          >
            <GoogleLoginIcon
              clientId="322219453826-por3aa9snv69l2dtucbjie76hdk4gprp.apps.googleusercontent.com"
              render={(renderProps) => (
                <div
                  onClick={renderProps.onClick}
                  style={{
                    position: 'absolute',
                    top: '21%',
                    right: '28%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <GoogleOutlined />
                  <div style={{ marginLeft: '1rem' }}>Login with google</div>
                </div>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
// export default connect(({ login, loading }) => ({
//   userLogin: login,
//   submitting: loading.effects['login/login'],
// }))(Login);
