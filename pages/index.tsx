import { Layout } from 'antd';
import React from 'react';
import Link from 'next/link';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
      <Header style={{ color: 'white' }}>
        <Link href="../login">Header</Link>

      </Header>
    </Layout>
  </>
);

export default App;