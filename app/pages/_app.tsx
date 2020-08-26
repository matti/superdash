import MainLayout from '../components/layouts/MainLayout';

export default function SuperdashApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
