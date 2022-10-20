import { Typography, Row, Layout, Col, Avatar,Button } from 'antd';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UserOutlined,CoffeeOutlined,DollarOutlined,FileOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = (
    ModalNavbar: any, setModalNavbar: any
) => {
    return (
        <>
            <Row justify="start" style={{ background: '#064595', height: '70px', paddingTop: '10px' }}>
                <Colstyled span={2} style={{ textAlign: 'center' }}><img src="../images/LogoW.png" width='45%' /></Colstyled>
                <Col span={1}><Link href="../Leave"><CoffeeOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}} /></Link></Col>
                <Colstyle span={1}><Link href="../Leave">  ลางาน</Link></Colstyle>
                <Col span={1}><Link href="../Work_From_Home"><FileOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}} /></Link></Col>
                <Colstyle span={2}><Link href="../Work_From_Home"> ใบคำขอทั่วไป</Link></Colstyle>
                <Col span={1}><Link href="../Request_to_offsite"><DollarOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}}/></Link></Col>
                <Colstyle span={3}><Link href="../Request_to_offsite"> ขออนุญาตออกนอกสถานที่</Link></Colstyle>
                <Colstyle span={1} offset={7}><Avatar size={52} src="../images/profile.png" style={{ padding: '5px', marginLeft: '40px' }}></Avatar></Colstyle>
                <Colstyle span={2}><Text style={{ paddingLeft: '40px', fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>OOO OOO</Text></Colstyle>
                <Colstyle span={2} ><Button style={{background: 'none', border: 'none',height:'100%'}}><Link href="../login"><UserOutlined style={{ fontSize: '30px', marginTop: '0px',color: "#fff" }} /></Link>
                    <Link href="../login"><Text style={{ paddingLeft: '10px', fontSize: '24px', color: '#fff', fontWeight: 'bold',paddingBottom: '5px'}}>Logout</Text></Link></Button></Colstyle>


            </Row>
        </>
    );
};


const Colstyle = styled(Col)`
    color: #fff;
    font-Weight: '900';
    line-height: 45px;
    font-Size: 25px;
    a {
        color: #fff;
`
const Colstyled = styled(Col)`
    margin-Top: -10px;
`

export default App;