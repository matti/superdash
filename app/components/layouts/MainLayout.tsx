import Head from 'next/head'

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Head>
      <title>superdash</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>


    <h1>Header</h1>
    <hr />
    <div className="content-wrapper">{children}</div>
    <hr />
    <h1>Footer</h1>

  </div>
);

export default MainLayout;
