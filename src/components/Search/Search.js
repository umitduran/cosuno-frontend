import React, {useMemo} from 'react';
import {Input} from 'antd';
import {useGetCompanyList} from '../../redux/companyList';
import classes from './Search.module.css';

const {Search: SearchInput} = Input;

const Search = () => {
  const getCompanyList = useGetCompanyList();
  const search = useMemo(() => {
    return value => {
      getCompanyList({
        searchParam: value,
      });
    };
  }, [getCompanyList]);

  return (
    <div className={classes.search}>
      <SearchInput
        placeholder="Search"
        onSearch={value => search(value)}
        enterButton
      />
    </div>
  );
};

export default Search;
