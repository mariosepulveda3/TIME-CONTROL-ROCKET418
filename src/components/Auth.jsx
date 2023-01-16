import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import './styles/Auth.scss';

const Auth = () => {
  return (
    <div className="auth">
      <Tabs className="box-auth" isFitted variant="enclosed">
        <TabList mb="5em">
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels className="box">
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Auth;
