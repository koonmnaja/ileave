import { Button, Checkbox, Form, Input, Row, Image, Layout, Col,Typography,Space,Card } from 'antd';
import React, { useState } from 'react';
import { count } from 'console';
import Images from 'next/image';
import Link from 'next/link';
import NavbarUser from '../Components/Layout/Navbar'
import NavbarAdmin from '../Components/Layout/Navbar_Admin'
import styled from 'styled-components';

const { Title } = Typography;
const { Header, Footer } = Layout;
const App: React.FC = () => {
  const [username, setusername] = useState({ value: "admin" });
  const [password, setpassword] = useState({ value: "1234" });

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Row style={{ background: '#1C2453', height: '70px', paddingTop: '10px',width:'100%'}}>
        <Colstyled span={2} offset={1} ><Link href="../Statics"><img src="../images/LogoW.png" width='45%' /></Link></Colstyled>
        <ColText >ระบบลางานออนไลน์</ColText>
      </Row>

      <Row justify="center">

        <img src="../images/bggg.png"  style={{ position: 'fixed' }} />
      </Row>

      <Row justify="center"
        style={{ marginTop: "0px", marginBottom: "70px" }}>
        <Col span={8} offset={5}>
          <Space direction="vertical" style={{ display: 'flex' }}>
            <Card style={{ borderRadius: "0px", background: "#fff", height: '905px', width: '100%', border: '0px solid #fff',marginLeft:'300px' }} >
              <Formstyle
                name="basic"
                layout="vertical"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <img src="../images/iapp-test.png" width='100%' style={{ marginLeft: '-20px' }} />
                <Typography style={{ fontSize:'60px',textAlign: 'center',marginTop: '-50px',fontWeight: 'bold'}}>เข้าสู่ระบบ</Typography>
                <Form.Item wrapperCol={{ offset: 5, span: 24 }} label="Username" name="username" required
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>
                  <Input name="username"
                    style={{ borderRadius: "20px", width: '300px', height: '40px',fontSize: '20px'}} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 5, span: 24 }} label="Password" name="password" required
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px' }}>
                  <Input.Password name="password"
                    style={{ borderRadius: "20px", width: '300px', height: '40px', paddingTop: '10px',fontSize: '20px'}} />
                </Form.Item>

                <Row justify="center">
                  <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 1, span: 24 }} >
                    <Checkbox style={{ fontSize: '20px', paddingTop: '20px' }}>Remember me</Checkbox>
                  </Form.Item></Row>
                <Row justify="center">
                  <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
                    <Button type="primary" htmlType="submit"
                      style={{ borderRadius: "20px", fontWeight: "bold", height: '50px', width: '120px',fontSize: '20px'}}><Link href="../Leave">
                        เข้าสู่ระบบ
                      </Link></Button>
                  </Form.Item></Row>
              </Formstyle>
            </Card>
          </Space></Col>
      </Row>
    

    </>
  );
};

const ColText = styled(Col)`

  font-size: 33px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 5px;
  color: #fff;
`
const Formstyle = styled(Form)`
  margin-bottom:0px ;
.ant-form-item-label > label {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 22px;
  padding-left: 100px;
  color: #000;
}
`
const Colstyled = styled(Col)`
    margin-Top: -10px;
`

export default App;