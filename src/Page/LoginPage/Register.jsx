import ProForm, {
  DrawerForm,
  ModalForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-form";
import { Button } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const formRef = useRef();

  return (
    <div>
      <ModalForm
        formRef={formRef}
        trigger={
          <Link style={{ marginLeft: "0.5rem", fontWeight: "bold" }}>
            Register now!
          </Link>
        }
        drawerProps={{
          forceRender: true,
          destroyOnClose: true,
        }}
        submitter={{
          searchConfig: {
            submitText: "Create account",
            resetText: "Cancel",
          },
        }}
        title="Register Form"
        onFinish={() => {
          return true;
        }}
      >
        {/* <ProForm.Group> */}
          <ProFormText
            name="username"
            width="md"
            label="Username"
            placeholder="Username"
            rules={[{ required: true, message: "Please input your username" }]}
          />
          <ProFormText
            width="md"
            name="email"
            label="Email"
            placeholder="email"
            rules={[{ required: true, message: "Please input your email" }]}
          />
        {/* </ProForm.Group> */}
        {/* <ProForm.Group> */}
          <ProFormText.Password
            width="md"
            name="password"
            label="Password"
            placeholder="Password"
            rules={[{ required: true, message: "Please input your password" }]}
          />
          <ProFormText.Password
            width="md"
            name="passwordConfirm"
            label="Confirm password"
            placeholder="Confirm password"
            rules={[{ required: true, message: "Please input your confirm password" }]}
          />
        {/* </ProForm.Group> */}
        {/* <ProForm.Group> */}
          <ProFormText
            width="md"
            name="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
          />
        {/* </ProForm.Group> */}
      </ModalForm>
    </div>
  );
};

export default RegisterPage;
