import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, message, Upload, DatePicker, Typography, Radio, Space } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { LoadingOutlined, PlusOutlined, UploadOutlined, MinusCircleOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { FormInstance } from 'antd/es/form';
import styled from 'styled-components'
import Layout from 'antd/lib/layout/layout';
const { Title } = Typography;
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt5M = file.size / 4096 / 4096 < 5;
    if (!isLt5M) {
        message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt5M;
};
const { RangePicker } = DatePicker;
const GroupModal = (

    modal: any, setModal: any) => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const { Option } = Select;



    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [datas, setdatas] = useState([]);

    const handleInputChange = (e: any) => {
        setdatas(e.target.value);
    };


    useEffect(() => {
        form.setFieldsValue({
            groupname: modal?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modal, setModal])

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
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onGenderChange = (value: any) => {
        switch (value) {
            case 'เดินทางโดยรถสาธารณะ':
                return;
            case 'เดินทางโดยรถส่วนตัว':
        }
    };

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
                    onFinish={onFinish}
                    autoComplete="off">
                    {
                        modal?.status === "RTO" ?
                            <>
                                <Row>
                                    <Col span={14} offset={2}>
                                        <Form.Item label="สถานที่" >
                                            <InputStyled style={{ width: '100%' }} /></Form.Item>
                                    </Col>
                                    <Col span={5} offset={1}>
                                        <Form.Item label="ตำแหน่ง" name="gender">
                                            <SelectStyled onChange={onGenderChange} showSearch size='large' optionFilterProp="children">
                                                <Option value="caruser">เดินทางโดยรถส่วนตัว</Option>
                                                <Option value="carpub">เดินทางโดยรถสาธารณะ</Option>
                                            </SelectStyled>
                                        </Form.Item></Col>
                                    <Form.Item
                                        noStyle
                                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                                    >
                                        {({ getFieldValue }) =>
                                            getFieldValue('gender') === 'caruser' ? (
                                                <Form.List name="users">
                                                    {(fields, { add, remove }) => (
                                                        <>
                                                            {fields.map(({ key, name, ...restField }) => (
                                                                <Space key={key} style={{ display: 'flex', marginBottom: '5px', marginLeft: '60px' }} align="baseline">
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, 'first']}
                                                                        label="งบประมาณ"
                                                                    >
                                                                        <InputStyled style={{ width: '130px' }} />
                                                                    </Form.Item>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, 'last']}
                                                                        label="รายละเอียด"
                                                                    >
                                                                        <InputStyled style={{ width: '330px' }} />
                                                                    </Form.Item>
                                                                    <Form.Item {...restField} label="แนบหลักฐาน">
                                                                        <Upload
                                                                            {...props}>
                                                                            <ButtonStyledd icon={<UploadOutlined />} style={{ paddingTop: '10px' }}>เลือกไฟล์</ButtonStyledd>
                                                                        </Upload>
                                                                    </Form.Item>
                                                                    <Form.Item {...restField} label="ลบ" >
                                                                        <ButtonStyledd icon={<MinusCircleOutlined />} onClick={() => remove(name)} style={{ width: '50px' }}></ButtonStyledd>
                                                                    </Form.Item>
                                                                </Space>
                                                            ))}
                                                            <Col span={20} offset={2}>
                                                                <Form.Item>
                                                                    <Button style={{ fontSize: '22px', height: '40px' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                        เพิ่มคำของบประมาณ
                                                                    </Button>
                                                                </Form.Item>
                                                            </Col>
                                                        </>
                                                    )}
                                                </Form.List>
                                            )
                                                : getFieldValue('gender') === 'carpub' ? (
                                                    <Form.List name="users">

                                                        {(fields, { add, remove }) => (
                                                            <>
                                                                {fields.map(({ key, name, ...restField }) => (
                                                                    <Space key={key} style={{ display: 'flex', marginBottom: 8, marginLeft: '60px' }} align="baseline">
                                                                        <Form.Item
                                                                            {...restField}
                                                                            name={[name, 'first']}
                                                                            label="งบประมาณ"
                                                                        >
                                                                            <InputStyled style={{ width: '130px' }} />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            {...restField}
                                                                            name={[name, 'last']}
                                                                            label="รายละเอียด"
                                                                        >
                                                                            <InputStyled style={{ width: '330px' }} />
                                                                        </Form.Item>
                                                                        <Form.Item {...restField} label="แนบหลักฐาน">
                                                                            <Upload
                                                                                {...props}>
                                                                                <ButtonStyledd icon={<UploadOutlined />} style={{ paddingTop: '10px' }}>เลือกไฟล์</ButtonStyledd>
                                                                            </Upload>
                                                                        </Form.Item>
                                                                        <Form.Item {...restField} label="ลบ" >
                                                                            <ButtonStyledd icon={<MinusCircleOutlined />} onClick={() => remove(name)} style={{ width: '50px' }}></ButtonStyledd>
                                                                        </Form.Item>
                                                                    </Space>
                                                                ))}
                                                                <Col span={20} offset={2}>
                                                                    <Form.Item>
                                                                        <Button style={{ fontSize: '22px', height: '40px' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                            เพิ่มคำของบประมาณ
                                                                        </Button>
                                                                    </Form.Item>
                                                                </Col>
                                                            </>
                                                        )}
                                                    </Form.List>
                                                )

                                                    : null
                                        }

                                    </Form.Item>

                                </Row>
                            </>
                            : modal?.status === "Adduser" ?
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
        </>
    );

}

const RadioStyle = styled(Radio)`
span.ant-radio + * {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 22px;
    font-weight: 900;
}
`
const Formstyle = styled(Form)`
.ant-form-item-label > label {
    font-weight: 900;
    font-size: 22px;
    margin-bottom:0px;

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
    font-Size: 18px;
    fontFamily: Semi Bold;
    font-weight: bold;
    width: 100%;
    margin-top: -12px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
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