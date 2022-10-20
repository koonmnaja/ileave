import {  Typography,Row, Layout, Col,Avatar,Button } from 'antd';
import Images from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UserOutlined,BarChartOutlined,UserAddOutlined,BellOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
    return (
        <>
            <Row  justify="start" style={{ background: '#064595', height: '70px',paddingTop:'10px' }}>
                <Colstyled span={2} style={{textAlign: 'center'}}><img src="../images/LogoW.png" width='45%'/></Colstyled>
                <Col span={1}><Link href="../Statics"><BarChartOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}}/></Link></Col>
                <Colstyle span={1} style={{paddingTop:'10px'}}><Link href="../Statics">สถิติ</Link></Colstyle>
                <Col span={1}><Link href="../Add_User"><BellOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}}/></Link></Col>
                <Colstyle span={2} style={{paddingTop:'10px'}}><Link href="../Add_User">เพิ่มพนักงาน</Link></Colstyle>
                <Col span={1}><Link href="../Request"><UserAddOutlined style={{marginTop:'3px', fontSize: '32px',paddingLeft:'30px',color:'#fff'}}/></Link></Col>
                <Colstyle span={1} style={{paddingTop:'10px'}}><Link href="../Request">คำขอ</Link></Colstyle>
                <Colstyle span={1} offset={10}><Avatar size={52} src="../images/profile.png" style={{ padding: '5px', marginLeft: '40px' }}></Avatar></Colstyle>
                <Colstyle span={2}><Text style={{ paddingLeft: '40px', fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>Admin</Text></Colstyle>
                <Colstyle span={2} ><Button style={{background: 'none', border: 'none',height:'100%'}}><Link href="../login"><UserOutlined style={{ fontSize: '30px', marginTop: '0px',color: "#fff"}} /></Link>
                    <Link href="../login"><Text style={{ paddingLeft: '10px', fontSize: '24px', color: '#fff', fontWeight: 'bold',paddingBottom: '5px'}}>Logout</Text></Link></Button></Colstyle>

            </Row>
        </>
    );
};
const Colstyle = styled(Col)`
    color: #fff;
    font-Weight: '900';
    font-Size: 25px;
    line-height: 30px;
    a {
        color: #fff;
`
const Colstyled = styled(Col)`
    margin-Top: -10px;
`

export default App;