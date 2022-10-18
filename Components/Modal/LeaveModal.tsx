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

    const props: UploadProps = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
            console.log('Your upload file:', file);
            // Your process logic. Here we just mock to the same file
            return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
            })
                .then(res => res.json())
                .then(({ thumbnail }) => thumbnail);
        }}
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
                     <Row>
                                <Col span={8} offset={2}>
                                    <Form.Item label="ประเภทการลา">
                                        <SelectStyled style={{}} showSearch size='large' optionFilterProp="children">
                                            <Option value="Laeve">ลากิจ</Option>
                                            <Option value="Sick-Leave">ลาป่วย</Option>
                                            <Option value="Leave-Other">อื่น ๆ</Option>
                                        </SelectStyled>
                                    </Form.Item></Col>
                                <Col span={8} offset={3}>
                                    <Form.Item label="จำนวนวันลา">
                                        <InputStyled />
                                    </Form.Item>
                                </Col>
                                <Col span={8} offset={2}>
                                    <Form.Item label="ลาจากวันที่">
                                        <DatePickerStyled />
                                    </Form.Item>
                                </Col>
                                <Col span={8} offset={3}>
                                    <Form.Item label="ถึงวันที่">
                                        <DatePickerStyled />
                                    </Form.Item>
                                </Col>
                                <Col span={20} offset={2}>
                                    <Form.Item label="สาเหตุการลา">
                                        <Input.TextArea name="detailInput" autoSize={{ minRows: 4, maxRows: 6 }}
                                            style={{ borderRadius: "20px", width: '100%', height: '50px', fontSize: '16px', background: '#FFF', borderColor: '#BFBFBF', marginTop: '-10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={6} offset={2}>
                                    <Form.Item label="แนบหลักฐาน">
                                        <Upload
                                            {...props}>
                                            <ButtonStyledd icon={<UploadOutlined />}>เลือกไฟล์</ButtonStyledd>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>

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
const InputStyled = styled(Input)`
    border-radius: 14px;
    width: 40%;
    height: 40px;
    font-size: 20px;
    background: rgb(255, 255, 255);
    border-color: rgb(191, 191, 191);
    margin-top: -20px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
`
const SelectStyled = styled(Select)`
    width: 100%;
    margin-Top: -10px;
    font-size: 20px;
    .ant-select-selector {
        border-radius: 14px !important;
        border-color: #BFBFBF !important;
      } 
    
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 40px;
    border-Radius:10px;
    font-Size: 16px;
    fontFamily: Semi Bold;
    font-weight: bold;
    width: 100%;
    
`
const DatePickerStyled = styled(DatePicker)`
    width: 100% ;
    border-Color: #BFBFBF;
    height: 50px;
    border-Radius: 14px;
    background: #FFF;
    margin-Top: -10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    .ant-picker-input > input {
        font-size: 24px;
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
const UploadStyled = styled(Upload)`
.ant-upload.ant-upload-select-picture-card {
    width: 200px;
    height: 200px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-align: center;
    vertical-align: top;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 15px;
    cursor: pointer;
    transition: border-color 0.3s;
}
`
export default GroupModal