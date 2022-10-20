import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, message, Upload, DatePicker, Typography, Badge, Descriptions } from 'antd'
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

    // const props: UploadProps = {
    //     action: '//jsonplaceholder.typicode.com/posts/',
    //     listType: 'picture',
    //     previewFile(file) {
    //         console.log('Your upload file:', file);
    //         // Your process logic. Here we just mock to the same file
    //         return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    //             method: 'POST',
    //             body: file,
    //         })
    //             .then(res => res.json())
    //             .then(({ thumbnail }) => thumbnail);
    //     }
    // }

    const props: UploadProps = {
        beforeUpload: file => {
            const isPNG = file.type === 'image/png';
            if (!isPNG) {
                message.error(`${file.name} is not a png file`);
            }
            return isPNG || Upload.LIST_IGNORE;
        },
        onChange: info => {
            console.log(info.fileList);
        },
    };
    useEffect(() => {
         (modal?.status === "Leave" ) 
          form.setFieldsValue({
            dataN: modal?.data?.dataN, //form.item > name="name"
            sData: modal?.data?.sData, //form.item > name="password"
            eData: modal?.data?.eData, //form.item > name="status"
            ltype: modal?.data?.ltype, //form.item > name="group"
            tleave: modal?.data?.tleave,
          })
        
    })
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
                        {modal?.status === "Leave" ?
                            <>
                                <Col span={8} offset={2}>
                                    <Form.Item label="ประเภทการลา" name="ltype">
                                        <SelectStyled style={{}} showSearch size='large' optionFilterProp="children">
                                            <Option value="Laeve">ลากิจ</Option>
                                            <Option value="Sick-Leave">ลาป่วย</Option>
                                            <Option value="Leave-Other">อื่น ๆ</Option>
                                        </SelectStyled>
                                    </Form.Item></Col>
                                <Col span={3} offset={3}>
                                    <Form.Item label="จำนวนวันลา" name="tleave">
                                        <InputStyled style={{ width: '60%' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={3} offset={0}>
                                    <Form.Item label="สถานะการอนุมัติ" hidden={true} style={{ display: 'none' }} >
                                        <InputStyled style={{ width: '50%', backgroundColor: '#DEE7F1', display: 'none' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={8} offset={2}>
                                    <Form.Item label="ลาจากวันที่" name="sdata">
                                        <DatePickerStyled />
                                    </Form.Item>
                                </Col>
                                <Col span={8} offset={3}>
                                    <Form.Item label="ถึงวันที่" name="edata">
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
                            </>
                            : modal?.status === "Detail" ?
                                <>
                                <Col span={20} offset={2}>
                                    {/* <DescriptionStyle style={{ fontSize: '22px'}}>
                                        <Descriptions.Item label="วันที่"></Descriptions.Item>
                                        <br />
                                        <br />
                                        <Descriptions.Item label="วันที่เริ่มต้น"></Descriptions.Item>
                                        <Descriptions.Item label="วันที่สิ้นสุด"></Descriptions.Item>
                                        <br />
                                        <Descriptions.Item label="ประเภทการลา"></Descriptions.Item>
                                        <Descriptions.Item label="จำนวนวันลา"></Descriptions.Item>
                                    </DescriptionStyle> */}
                                </Col>
                                </>
                                : null
                        }
                    </Row>
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
        </>
    )
}
const DescriptionStyle = styled(Descriptions)`
.ant-descriptions-item-label {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 200;
    font-size: 25px;
    line-height: 1.5715;
    text-align: center;
}
`
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