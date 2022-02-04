import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Avatar, Space, Table} from 'antd';
import {
  useLoadingState,
  useCompanyList,
  useGetCompanyList,
} from '../../redux/companyList';
import './CompanyList.module.css';

const CompanyList = () => {
  const {isLoading} = useLoadingState();
  const companyList = useCompanyList();
  const getCompanyList = useGetCompanyList();
  useEffect(() => {
    getCompanyList();
  }, [getCompanyList]);

  const getDataSource = () => [];

  /*  const onFilter = (value, record) => {
    const filteredPerson = record.filmConnection.edges.map(
      edge => edge.node.id === value
    );
    return filteredPerson.includes(true);
  }; */

  const columns = [
    {
      title: 'Company "Name',
      dataIndex: 'name',
      key: 'name',
      // todo render should be function
      render: (name, row) => (
        <Space direction="vertical">
          <Avatar
            src={`https://avatars.dicebear.com/api/${row.gender}/${name}.svg?mood[]=happy&mood[]=happy`}
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
    <div className="company">
      <Table columns={columns} dataSource={companyList} loading={isLoading} />
    </div>
  );
};

export default CompanyList;
