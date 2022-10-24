import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Select, Button, Divider, DatePicker, Typography, Input } from 'antd'
import styled from 'styled-components';
const { Title } = Typography;
const { RangePicker } = DatePicker;
const GroupModal = (

    modaldetail: any,
    setModaldetail: any) => {

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
            groupname: modaldetail?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modaldetail, setModaldetail])

    return (
        <>
            <Row>
                <ModalStyled
                    visible={modaldetail?.visible}
                    footer={false}
                    width={600}
                    onCancel={() => setModaldetail({ visible: false })}>
                    <Row  >
                        <Col span={20} offset={2}
                            style={{ fontSize: '35px', fontWeight: 'bold' }}>{modaldetail?.header}</Col>
                        <Col span={21} offset={2}><DividerStyled /></Col>
                        {modaldetail?.status === "detailleave" ?
                            <>
                                <Col span={8} offset={3}>
                                    <Formstyle>
                                        <Form.Item label="วันที่ : " >
                                            <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                    </Formstyle>
                                </Col>
                                <Col span={8} offset={3}></Col>
                                <Col span={8} offset={3}>
                                    <Formstyle>
                                        <Form.Item label="วันที่เริ่มต้น : " >
                                            <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                    </Formstyle>
                                </Col>
                                <Col span={8} offset={3}>
                                    <Formstyle>
                                        <Form.Item label="วันที่สิ้นสุด : " >
                                            <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                    </Formstyle>
                                </Col>
                                <Col span={8} offset={3}>
                                    <Formstyle>
                                        <Form.Item label="ประเภทการลา : " >
                                            <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                    </Formstyle>
                                </Col>
                                <Col span={8} offset={3}>
                                    <Formstyle>
                                        <Form.Item label="จำนวนวันลา : " >
                                            <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                    </Formstyle>
                                </Col>
                                <Col span={20} offset={2}>
                                    <Formstyle>
                                        <Form.Item label="รายละเอียด">
                                            <InputStyled.TextArea disabled name="detailInput" autoSize={{ minRows: 2, maxRows: 5 }}
                                                style={{ borderRadius: "16px", width: '100%', height: '50px', fontSize: '20px' }} />
                                        </Form.Item>
                                    </Formstyle>
                                </Col>
                            </>
                            : modaldetail?.status === "Detailcry" ?
                                <>
                                    <Col span={5} offset={3}>
                                        <Formstyle>
                                            <Form.Item label="ลำดับ : " >
                                                <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                        </Formstyle>
                                    </Col>
                                    <Col span={8} offset={3}></Col>
                                    <Col span={8} offset={3}>
                                        <Formstyle>
                                            <Form.Item label="วันที่ : " >
                                                <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                        </Formstyle>
                                    </Col>
                                    <Col span={8} offset={3}>
                                        <Formstyle>
                                            <Form.Item label="เรียน : " >
                                                <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                        </Formstyle>
                                    </Col>
                                    <Col span={8} offset={3}>
                                        <Formstyle>
                                            <Form.Item label="เรื่อง : " >
                                                <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                        </Formstyle>
                                    </Col>
                                    <Col span={8} offset={3}>
                                        <Formstyle>
                                            <Form.Item label="สถานะ : " >
                                                <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                        </Formstyle>
                                    </Col>
                                </>
                                : modaldetail?.status === "detailwork" ?
                                    <>
                                        <Col span={5} offset={3}>
                                            <Formstyle>
                                                <Form.Item label="ลำดับ : " >
                                                    <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                            </Formstyle>
                                        </Col>
                                        <Col span={8} offset={3}>
                                            <Formstyle>
                                                <Form.Item label="เริ่มปฏิบัติงานวันที่ : " >
                                                    <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                            </Formstyle>
                                        </Col>
                                        <Col span={8} offset={3}>
                                            <Formstyle>
                                                <Form.Item label="เรื่อง : " >
                                                    <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                            </Formstyle>
                                        </Col>
                                        <Col span={8} offset={3}>
                                            <Formstyle>
                                                <Form.Item label="เรียน : " >
                                                    <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                            </Formstyle>
                                        </Col>
                                        <Col span={8} offset={3}>
                                            <Formstyle>
                                                <Form.Item label="สถานะ : " >
                                                    <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                            </Formstyle>
                                        </Col>
                                    </>
                                    : modaldetail?.status === "detailRto" ?
                                        <>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="สถานที่ : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="วันที่ : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="รายละเอียด : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="ระยะทางขาไป : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="ระยะทางขากลับ : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="งบประมาณ : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="สถานะ : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                            <Col span={8} offset={3}>
                                                <Formstyle>
                                                    <Form.Item label="หลักฐาน : " >
                                                        <InputStyled disabled style={{ width: '100%' }} /></Form.Item>
                                                </Formstyle>
                                            </Col>
                                        </>
                                        : null
                        }

                    </Row>
                    <Row justify="center" >


                    </Row>
                </ModalStyled>
            </Row >

        </>
    )
}
const Formstyle = styled(Form)`
.ant-form-item-label > label {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 32px;
    color: rgba(0, 0, 0, 0.85);
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
const DividerStyled = styled(Divider)`
    background: #000 ;
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