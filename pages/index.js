/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../components/layouts/MainLayouts/MainLayout';
import HomePageLayout from '../components/layouts/PageLayouts/HomePageLayout';
import { refreshPage } from '../store/feature/authSlice';
import tradly from 'tradly';
import { setGeneralConfig } from '../store/feature/configsSlice';

const Index = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshPage({ key: localStorage.getItem('refresh_key') }));
      dispatch(setGeneralConfig(props))
  }, [dispatch]);

  const pageTitle = props?.seo_text?.meta_title;
  const pageDescription = props?.seo_text?.meta_description;

  return (
    <MainLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <HomePageLayout />
    </MainLayout>
  );
};

export default Index;

export async function getServerSideProps() {
  const response = await tradly.app.getConfigList({
    paramBody: 'seo',
  });
  const response2 = await tradly.app.getConfigList({
    paramBody: 'general',
  });
  return {
    props: {
      seo_text: response?.data?.configs || null,
      general_configs: response2?.data?.configs || [],
    },
  };
}
