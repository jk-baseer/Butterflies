import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MainLayout from '../components/layouts/MainLayouts/MainLayout';
import ProfilePageLayout from '../components/layouts/PageLayouts/ProfilePageLayout';
import { authSelector, refreshPage } from '../store/feature/authSlice';
import { myStore } from '../store/feature/storeSlice';
import tradly from 'tradly';
import { setGeneralConfig } from '../store/feature/configsSlice';
import InvitePageLayout from '../components/layouts/PageLayouts/InvitePageLayout';

const Invite = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      refreshPage({
        key: localStorage.getItem('refresh_key'),
      })
      );
        dispatch(setGeneralConfig(props));
  }, [dispatch]);

  
  return (
    <MainLayout>
      <InvitePageLayout />
    </MainLayout>
  );
};

export default Invite;

export async function getServerSideProps() {
  const response = await tradly.app.getConfigList({
    paramBody: 'general',
  });
  return {
    props: { general_configs: response?.data?.configs || [] },
  };
}
