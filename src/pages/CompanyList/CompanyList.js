import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Avatar, Space, Table} from 'antd';
import {
  useLoadingState,
  useCompanyList,
  useGetCompanyList,
} from '../../redux/companyList';
import Search from '../../components/Search/Search';
import classes from './CompanyList.module.css';

const CompanyList = () => {
  const {isLoading} = useLoadingState();
  const companyList = useCompanyList();
  const getCompanyList = useGetCompanyList();
  useEffect(() => {
    getCompanyList();
  }, [getCompanyList]);

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
      // todo render should be function
      render: (name, row) => (
        <Space direction="vertical">
          <Avatar
            src={`https://ui-avatars.com/api/?name=${name}`}
            size={{
              xs: 24,
              sm: 32,
              md: 36,
              lg: 48,
              xl: 56,
              xxl: 64,
            }}
          />
          <a>{name}</a>
        </Space>
      ),
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
      key: 'speciality',
      responsive: ['md', 'lg'],
      render: (specialty, row) => row?.specialities[0]?.name,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      // todo render should be function
      // onFilter: (value, record) => onFilter(value, record),
    },
  ];

  // todo error handle
  return (
    <div className={classes.company}>
      <Search />
      <Table
        columns={columns}
        dataSource={companyList}
        loading={isLoading}
        scroll={{x: true, y: 600}}
      />
    </div>
  );
};

export default CompanyList;
