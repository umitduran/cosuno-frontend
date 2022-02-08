import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row, Layout} from 'antd';
import CompanyList from 'pages/CompanyList';
import classes from './App.module.css';
import Filter from '../../components/Filter';

const {Header} = Layout;

const App = () => (
  <div>
    <Row className={classes.row}>
      <Col span={12} offset={6}>
        <Header className={classes.header}>
          Welcome to Umit Cosuno Company Challenge
        </Header>
      </Col>
    </Row>
    <Row style={{paddingLeft: '20%'}}>
      <Col xs={8} sm={8} md={8} lg={4} xl={4} className={classes.col}>
        <Filter />
      </Col>
      <Col xs={16} sm={16} md={16} lg={16} xl={16} className={classes.col}>
        <CompanyList />
      </Col>
    </Row>
  </div>
);

export default App;
