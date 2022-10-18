import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, message, Upload, DatePicker, Typography } from 'antd'
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import styled from 'styled-components'
import Layout from 'antd/lib/layout/layout';
const { Title } = Typography;

const { RangePicker } = DatePicker;
const GroupModal = (

    modal: any, setModal: any) => {
    const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    useEffect(() => {
        form.setFieldsValue({
            groupname: modal?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modal, setModal])

    return (
        <>
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
                    onFinish={onFinish}>
                    { modal?.status === "submitwork" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณต้องการอนุมัตการ Work from home หรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                    : modal?.status === "unsubmitwork" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณไม่ต้องการอนุมัตการ Work from home หรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                    : modal?.status === "submitleave" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณต้องการอนุมัตการลาหรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                    : modal?.status === "unsubmitleave" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณไม่ต้องการอนุมัตการลาหรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                    : modal?.status === "submitrequest" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณต้องการอนุมัตการออกนอกสถานที่หรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                    : modal?.status === "unsubmitrequest" ?
                    <>
                        <Row>
                            <Form.Item style={{ width: '100%' }}>
                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>คุณไม่ต้องการอนุมัตการออกนอกสถานที่หรือไม่ ?</Title>
                            </Form.Item>
                        </Row>
                    </>
                                                            : null}
                </Formstyle>

            </ModalStyled>
        </>
    )
}
const Formstyle = styled(Form)`
.ant-form-item-label > label {
    font-weight: 900;
    font-size: 22px;
}
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