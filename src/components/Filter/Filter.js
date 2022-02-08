import React, {useEffect, useMemo} from 'react';
import {List, Checkbox, Spin} from 'antd';
import {
  useGetSectorList,
  useLoadingState,
  useSectorList,
} from '../../redux/sector';
import {useGetCompanyList} from '../../redux/companyList';

const Filter = () => {
  const {isLoadingSector} = useLoadingState();
  const sectorList = useSectorList();
  const getSectorList = useGetSectorList();
  const getCompanyList = useGetCompanyList();

  useEffect(() => {
    getSectorList();
  }, [getSectorList]);

  const filterCompanyBySector = useMemo(() => {
    return sector => {
      getCompanyList({
        searchParam: '',
        specialities: sector.join(','),
      });
    };
  }, [getCompanyList]);

  return (
    <Spin spinning={isLoadingSector}>
      <List itemLayout="horizontal" header={<h3>Filter Sectors</h3>}>
        <Checkbox.Group
          options={useMemo(
            () =>
              sectorList.map(sector => ({
                label: sector.name,
                value: sector.id,
              })),
            [sectorList]
          )}
          onChange={filterCompanyBySector}
        />
      </List>
    </Spin>
  );
};

export default Filter;
