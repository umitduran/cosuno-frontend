import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row, Layout} from 'antd';
import CompanyList from 'pages/CompanyList';
import classes from './App.module.css';

const {Header} = Layout;

const App = () => (
  <Row className={classes.row}>
    <Col span={12} offset={6}>
      <Header className={classes.header}>
        Welcome to Umit Cosuno Company Challenge
      </Header>
    </Col>
    <Col sxs={24} sm={24} md={24} lg={24} xl={24} className={classes.col}>
      <CompanyList />
    </Col>
  </Row>
);

export default App;
