import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, Radio, DatePicker, Typography } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import styled from 'styled-components'

const { Title } = Typography;
const { RangePicker } = DatePicker;
const GroupModal = (
    modal: any,
    setModal: any) => {

    const { Option } = Select;

    const [value, setValue] = useState(1);

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(() => {
        form.setFieldsValue({
            groupname: modal?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modal, setModal])
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (

        <ModalStyled
            visible={modal?.visible}
            footer={false}
            width={900}
            centered
            onCancel={() => setModal({ visible: false })}
            onOk={() => setModal({ visible: false })}>
            <Col span={20} offset={0}
                style={{ fontSize: '35px', fontWeight: 'bold' }}>{modal?.header}</Col>
            <Col span={24}><DividerStyled /></Col>
            <Formstyle
                name="basic"
                layout='vertical'
                form={form}
                onFinish={onFinish}
                autoComplete="off">
                {modal?.status === "Adduser" ?
                    <>
                        <Row>
                            <Col span={8} offset={2}>
                                <Form.Item label="รหัสพนักงาน">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={3}>
                                <Form.Item label="ระดับการทำงาน">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={2}>
                                <Form.Item label="ชื่อ">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={3}>
                                <Form.Item label="นามสกุล">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={2}>
                                <Form.Item label="เบอร์โทร">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={3}>
                                <Form.Item label="อีเมล">
                                    <InputStyled style={{ width: '100%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={2}>
                                <Form.Item label="ตำแหน่ง">
                                    <SelectStyled style={{}} showSearch size='large' optionFilterProp="children">
                                        <Option value="Laeve">#</Option>
                                        <Option value="Sick-Leave">#</Option>
                                        <Option value="Leave-Other">#</Option>
                                    </SelectStyled>
                                </Form.Item></Col>
                            <Col span={8} offset={3}>
                                <Form.Item label="หน้าที่">
                                    <SelectStyled style={{}} showSearch size='large' optionFilterProp="children">
                                        <Option value="Laeve">#</Option>
                                        <Option value="Sick-Leave">#</Option>
                                        <Option value="Leave-Other">#</Option>
                                    </SelectStyled>
                                </Form.Item></Col>
                            <Col span={8} offset={2}>
                                <Form.Item label="แผนก">
                                    <SelectStyled style={{}} showSearch size='large' optionFilterProp="children">
                                        <Option value="Laeve">#</Option>
                                        <Option value="Sick-Leave">#</Option>
                                        <Option value="Leave-Other">#</Option>
                                    </SelectStyled>
                                </Form.Item></Col>
                            <Col span={4} offset={3}>
                                <Form.Item label="วันลาป่วยคงเหลือ">
                                    <InputStyled style={{ width: '50%' }} /></Form.Item>
                            </Col>
                            <Col span={4} offset={1}>
                                <Form.Item label="วันลากิจคงเหลือ">
                                    <InputStyled style={{ width: '50%' }} /></Form.Item>
                            </Col>
                            <Col span={8} offset={3}>
                                <Form.Item>
                                    <Radio.Group style={{ fontSize: '22px' }}
                                        onChange={onChange} value={value}>
                                        <RadioStyle value={1}>เปิดการใช้งาน</RadioStyle>
                                        <RadioStyle value={2}>ระงับการใช้งาน</RadioStyle>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                    </>
                    : modal?.status === "" ?
                        <>
                        </>
                        : modal?.status === "Delete" ?
                            <>
                                <Row>
                                    <Form.Item style={{ width: '100%' }}>
                                        <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณต้องการลบประวัติพนักงานหรือไม่ ?</Title>
                                    </Form.Item>
                                </Row>
                            </>

                            : null
                }
                <Row justify="center">
                    <Col span={4} offset={12}>
                        <ButtonStyledd onClick={() => setModal({ visible: false })}
                            style={{ background: '#F1BE44', fontSize: '22px' }}>ยกเลิก</ButtonStyledd>
                    </Col>
                    <Col span={4} offset={1}>
                        <ButtonStyledd onClick={() => setModal({ visible: false })}
                            style={{ background: '#F1BE44', fontSize: '22px' }}>ยืนยัน</ButtonStyledd>
                    </Col>
                </Row>
            </Formstyle>
        </ModalStyled>
    )

}
const RadioStyle = styled(Radio)`
span.ant-radio + * {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 22px;
    font-weight: 900;
}
`
const InputStyled = styled(Input)`
    border-radius: 10px;
    width: 40%;
    height: 40px;
    font-size: 20px;
    background: rgb(255, 255, 255);
    border-color: rgb(191, 191, 191);
    margin-top: -20px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
`
const Formstyle = styled(Form)`
.ant-form-item-label > label {
    font-weight: 900;
    font-size: 22px;
    margin-bottom:0px;

}
`
const SelectStyled = styled(Select)`
  .ant-select-selector {
    border-radius: 18px !important;
    border-color: rgb(191, 191, 191) !important;
  } 
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 40px;
    border-Radius:14px;
    font-Size: 16px;
    fontFamily: Semi Bold;
    font-weight: bold;
    width: 100%;
    
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: 0px;
    width: 100%;
`
const ModalStyled = styled(Modal)`
    .ant-modal-content {
        border-radius: 46px;
        padding: 30px;
    }

    .ant-modal-close {
        margin-top: 20px;
        margin-right: 30px;
    }

    .ant-modal-close-x {
        font-size: 22px;
    }
`

export default GroupModal