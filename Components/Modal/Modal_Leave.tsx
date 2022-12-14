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

const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const { RangePicker } = DatePicker;
interface IFormValue {
    basis: string[]
}
const GroupModal = (

    modal: any, setModal: any, onAddUpload: any) => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [fileList, setFileList] = useState<UploadFile>();

    // const onFinish = (values:IFormValue) => {
    //     console.log('Success', values);
    //     let newValues = {...values}
    //     newValues.basis = values.basis
    //     onAddUpload(newValues);
    // }
    const onFinish = (values: IFormValue) => {
        if (modal?.status === "RTO") {
            onAddUpload(values)
            setModal({ value: values, visible: false })
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const { Option } = Select;



    const [form] = Form.useForm();



    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [datas, setdatas] = useState([]);

    const handleInputChange = (e: any) => {
        setdatas(e.target.value);
    };


    useEffect(() => {
        form.setFieldsValue({
            basis: modal?.value?.basis
        })
    }, [modal, setModal])

    const [value, setValue] = useState(1);


    const onGenderChange = (value: any) => {
        switch (value) {
            case '?????????????????????????????????????????????????????????':
                return;
            case '?????????????????????????????????????????????????????????':
        }
    };


    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    const handleChange: any['onChange'] = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as any, url => {
                setLoading(false);
                setImageUrl(url);
            });
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

                <Form
                    name="basic"
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{}}
                    autoComplete="off">
                    {
                        modal?.status === "RTO" ?
                            <>
                                <Row>
                                    <Col span={14} offset={2}>
                                        <Form.Item label="?????????????????????" >
                                            <InputStyled style={{ width: '100%' }} /></Form.Item>
                                    </Col>
                                    <Col span={5} offset={1}>
                                        <Form.Item label="?????????????????????" name="gender">
                                            <SelectStyled onChange={onGenderChange} showSearch size='large' optionFilterProp="children">
                                                <Option value="caruser" style={{ fontSize: '18px' }}>?????????????????????????????????????????????????????????</Option>
                                                <Option value="carpub" style={{ fontSize: '18px' }}>?????????????????????????????????????????????????????????</Option>
                                            </SelectStyled>
                                        </Form.Item></Col>
                                    <Form.Item
                                        noStyle
                                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                                    >
                                        {({ getFieldValue }) =>
                                            getFieldValue('gender') === 'caruser' ? (
                                                <Space>
                                                    <Form.Item label="????????????" rules={[{ required: true }]} style={{ marginLeft: '60px' }}>
                                                        <InputStyled style={{ width: '210px' }} />
                                                    </Form.Item>
                                                    <Form.Item label="??????????????????" rules={[{ required: true }]} >
                                                        <InputStyled style={{ width: '210px' }} />
                                                    </Form.Item>
                                                    <Form.Item label="????????????????????????" rules={[{ required: true }]} >
                                                        <InputStyled style={{ width: '210px' }} />
                                                    </Form.Item>
                                                </Space>
                                                // <Form.List name="users">
                                                //     {(fields, { add, remove }) => (
                                                //         <>
                                                //             {fields.map(({ key, name, ...restField }) => (
                                                //                 <Space key={key} style={{ display: 'flex', marginBottom: '5px', marginLeft: '60px' }} align="baseline">
                                                //                     <Form.Item
                                                //                         {...restField}
                                                //                         name={[name, 'first']}
                                                //                         label="????????????????????????"
                                                //                     >
                                                //                         <InputStyled style={{ width: '130px' }} />
                                                //                     </Form.Item>
                                                //                     <Form.Item
                                                //                         {...restField}
                                                //                         name={[name, 'last']}
                                                //                         label="??????????????????????????????"
                                                //                     >
                                                //                         <InputStyled style={{ width: '330px' }} />
                                                //                     </Form.Item>
                                                //                     <Form.Item {...restField} label="??????????????????????????????">
                                                //                         <Upload
                                                //                             {...props}>
                                                //                             <ButtonStyledd icon={<UploadOutlined />} style={{ paddingTop: '10px' }}>???????????????????????????</ButtonStyledd>
                                                //                         </Upload>
                                                //                     </Form.Item>
                                                //                     <Form.Item {...restField} label="??????" >
                                                //                         <ButtonStyledd icon={<MinusCircleOutlined />} onClick={() => remove(name)} style={{ width: '50px' }}></ButtonStyledd>
                                                //                     </Form.Item>
                                                //                 </Space>
                                                //             ))}
                                                //             <Col span={20} offset={2}>
                                                //                 <Form.Item>
                                                //                     <Button style={{ fontSize: '22px', height: '40px' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                //                         ???????????????????????????????????????????????????
                                                //                     </Button>
                                                //                 </Form.Item>
                                                //             </Col>
                                                //         </>
                                                //     )}
                                                // </Form.List>
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
                                                                            label="????????????????????????"
                                                                        >
                                                                            <InputStyled style={{ width: '130px' }} />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            {...restField}
                                                                            name={[name, 'last']}
                                                                            label="??????????????????????????????"
                                                                        >
                                                                            <InputStyled style={{ width: '330px' }} />
                                                                        </Form.Item>
                                                                        <Form.Item {...restField} label="??????" >
                                                                            <ButtonStyledd icon={<MinusCircleOutlined />} onClick={() => remove(name)} style={{ width: '50px' }}></ButtonStyledd>
                                                                        </Form.Item>
                                                                    </Space>
                                                                ))}
                                                                <Col span={20} offset={2}>
                                                                    <Form.Item>
                                                                        <Button style={{ fontSize: '22px', height: '40px' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                            ???????????????????????????????????????????????????
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
                                    <Col span={20} offset={2}>
                                        <Form.Item label="??????????????????????????????">
                                            <Input.TextArea name="detailInput" autoSize={{ minRows: 4, maxRows: 6 }}
                                                style={{ borderRadius: "20px", width: '100%', height: '50px', fontSize: '16px', background: '#FFF', borderColor: '#BFBFBF', marginTop: '-10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={20} offset={2}>
                                        <Form.Item
                                            name="basis"
                                        >
                                            <Upload
                                                name="file"
                                                listType="picture"
                                                showUploadList={{ showRemoveIcon: true }}
                                                action="http://localhost:3000/"
                                                onPreview={onPreview}
                                                beforeUpload={(beforeUpload) =>{
                                                    console.log(beforeUpload);
                                                }}
                                                onChange={handleChange}
                                                
                                                style={{ width: '100%' }}
                                            >
                                                <ButtonStyledd icon={<UploadOutlined />} style={{ paddingTop: '10px', width: '650%', height: '50px' }}>???????????????????????????</ButtonStyledd>
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </>
                            : modal?.status === "Profile" ?
                                <>

                                </>
                                : modal?.status === "Delete" ?
                                    <>
                                        <Row>
                                            <Form.Item style={{ width: '100%' }}>
                                                <Title style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>??????????????????????????????????????????????????????????????????????????????????????????????????? ?</Title>
                                            </Form.Item>
                                        </Row>
                                    </>

                                    : null
                    }

                    <Row justify="center">
                        <Col span={4} offset={12}>
                            <ButtonStyledd onClick={() => setModal({ visible: false })}
                                style={{ background: '#F1BE44', fontSize: '22px', marginTop: '50px' }}>??????????????????</ButtonStyledd>
                        </Col>
                        <Col span={4} offset={1}>
                            <ButtonStyledd onClick={() => setModal({ visible: false })}
                                style={{ background: '#F1BE44', fontSize: '22px', marginTop: '50px' }}>??????????????????</ButtonStyledd>
                        </Col>
                    </Row>
                </Form>
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