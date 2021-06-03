import { Button, Col, message, Modal, notification, Row , Card} from 'antd';
import React, {useState} from 'react';

const HinComponent = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content, setContent] = useState(20);
    const [typeOtp, setTypeOtp] = useState('');
    const [description, setDescription] = useState(false);
    const [authen, setAuthen] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    
    setIsModalVisible(false);
    notification.open({
        message: 'Ứng dụng của OTP',
        description:
          'Ngoài ra, Hệ thống xác thực bằng mật khẩu OTP được ứng dụng vào làm lớp bao mật thứ hai khi đăng nhập tài khoản, xác minh tài khoản khi người dùng thực hiện yêu cầu đổi mật khẩu.... ',
        onClose: () => {
            changContent();
            showModal();
        },
        duration: 90,
      });
  };
  const changContent = () => {
      setContent(3)
  }
    const oneContent = () => {
        notification.open({
            message: '  ',
            description:
              '- OTP (One Time Password) là một dãy số hoặc ký tự được gửi tới cho người dùng khi họ thực hiện giao dịch.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 90,
          });
          notification.open({
            message: '  ',
            description:
              '- Mã OTP dùng để xác nhận giao dịch, tăng tính bảo mật và đảm bảo an toàn cho người dùng. ',
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 90,
          });
          notification.open({
            message: '  ',
            description:
              '- Thời gian hiệu lực của mã OTP chỉ trong vòng 30 giây đến 2 phút.',
            onClose: () => {
                notification.open({
            message: ' ',
            description:
              '=> OTP giúp ngăn chặn, giảm thiểu những rủi ro bị tấn công khi mật khẩu bị lộ hoặc hacker xâm nhập.',
            onClose: () => {
              props.progress(10);
            },
            duration: 90,
          });
            },
            duration: 90,
          });
          
    }
    const twoContent = () => {
        notification.open({
            message: '  ',
            description:
              'OTP được ứng dụng phổ biến vào xác thực tài khoản trong giao dịch trực tuyến. Một đặc điểm rất quan trọng trong bất kỳ dịch vụ thanh toán trực tuyến nào là phải đảm bảo tính xác thực và an toàn trong giao dịch',
            onClose: () => {
                showModal();
                setContent(0);
            },
            duration: 90,
        });
    }
    const contenModal = (type) => {
        if(type===0){
            return(
                <>
                <img style={{width: '100%'}} src="https://vcdn1-kinhdoanh.vnecdn.net/2020/10/15/sms-otp-quynhtrang-1602735634-7186-4258-1602751759.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=W3dOORYYk6IoWJQ8LAmJ4g" />
                <h4 style={{textAlign:'center'}}>Dùng OTP để xác thực giao dịch</h4>
                <p>Nhấn ok</p>
                </>
            )
        }
        if(type===3){
            return(
            <>
            <img style={{width: '100%', height:282}} src="https://help.meinvoice.vn/wp-content/uploads/2019/12/thiet_lap_cai_dat_gmail_0013.png" />
            <h4 style={{textAlign:'center'}}>Dùng OTP để xác thực đăng nhập</h4>
            <p>Nhấn cancel</p>
            </>
            )
        }
    }
    const handleCancel = () => {
        setIsModalVisible(false);
        props.progress(10);
      };
      const threeContent = () => {
        setAuthen(false);
          setTypeOtp('SMS OTP');
          setDescription(false);
        notification.open({
            message: ' ',
            description:
              'Mã xác thực OTP được ngân hàng hay nhà cung cấp dịch vụ gửi dưới dạng tin nhắn SMS đến số điện thoại mà người dùng đã đăng ký. Hình thức này đơn giản và phổ biến.',
            duration: 90,
            onClose: () => {
                notification.open({
            message: ' ',
            description:
              'SMS OTP được nhiều tổ chức khuyến cáo sử dụng nhằm tăng tính bảo mật cho tài khoản khách hàng, tạo điều kiện thuận lợi cho người dùng trong các giao dịch điện tử. ',
            duration: 90,
            onClose: () => {
                notification.open({
            message: ' ',
            description:
              'Hạn chế của SMS OTP là việc người dùng không thể nhận được mã xác thực trong trường hợp điện thoại mất sóng, hay di chuyển ra nước ngoài mà không cài đặt dịch vụ chuyển vùng quốc tế. ',
            duration: 90,
            onClose: () => {
                setTypeOtp('TOKEN OTP');
                props.progress(5);
                tokenOtp();
            }
        });
            }
        });
            }
        });
        
        
      }
      const tokenOtp = () => {
        notification.open({
            message: '  ',
            description:
              'Token là chữ ký số hay chữ ký điện tử được mã hóa thành những con số trên thiết bị chuyên biệt. Mã Token tạo ra là dạng mã OTP nghĩa là mã sử dụng được một lần và tạo ngẫu nhiên cho mỗi giao dịch.',
            onClose: () => {
                notification.open({
                    message: 'Hard Token',
                    description:
                      'Là một thiết bị nhỏ gọn như chiếc USB có thể mang đi mọi nơi. Mỗi khi giao dịch, bạn sẽ bám vào thiết bị này để lấy mã.',
                    duration: 90
                });
                notification.open({
                    message: 'Soft Token',
                    description:
                      'Là một phần mềm được cài đặt trên máy tính hoặc điện thoại/máy tính bảng và phần mềm này cũng cung cấp mã Token cho bạn khi giao dịch ',
                    duration: 90,
                    onClose: () => {
                        setTypeOtp('');
                        props.progress(5);

        
                    }
                });
            },
            duration: 90,
          });
      }
      const fourContent = () => {
        setTypeOtp('');
        setAuthen(false);
        setDescription(false);
        notification.open({
          message: 'Xác thực là gì?',
          description:
            'Xác thực (authentication) là một hành động nhằm thiết lập hoặc chứng thực một cái gì đó (hoặc một người nào đó) đáng tin cậy, có nghĩa là, những lời khai báo do người đó đưa ra hoặc về vật đó là sự thật.',
          duration: 90,
          onClose: () => {
            notification.open({
              message: '  ',
              description:
                'Xác thực là khâu đặc biệt quan trọng để bảo đảm an toàn cho hoạt động của một hệ thống thông tn.',
              duration: 90,
              onClose: () => {
                setAuthen(true);
              }
          });    
          }
      });
      }
      const AthenContent = () => {
        return(
            <>
                <Card bordered={true} style={{border:'2px solid black',  }}>
                <h3>Các phương pháp xác thực phổ biến</h3>
                <p>- Xác thực dựa trên định danh người sử dụng (Username) và mật khẩu (Password)</p>
                <p>- Xác thực sử dụng OTP</p>
                <p>- Xác thực áp dụng các phương pháp nhận dạng sinh trắc học</p>
                <p>- Xác thực kết hợp 2 yếu tố(username/password và OTP)</p>
                <p><Button type="primary" onClick={()=>setAuthen(false)}>Đóng lại</Button></p>
            </Card>
            </>
        )
    }
    return(
        <>
        <Row>
            <Col span={24}>
                <h3 style={{textAlign: 'center'}}>Hệ thống xác thực bằng mật khẩu OTP</h3>
                <hr />
                <Button onClick={fourContent} style={{marginRight: 5}}>Xác thực là gì?</Button>
                <Button onClick={oneContent} style={{marginRight: 5}}>OTP là gì?</Button>
                <Button onClick={twoContent} style={{marginRight: 5}}>Ứng dụng của OTP</Button>
                <Button onClick={threeContent} style={{marginRight: 5}}>Các hình thức xác thực bằng OTP</Button>
                <Button onClick={()=>{
                  setDescription(true);
                  props.progress(5);
                  setTypeOtp('');
                  setAuthen(false);
                }} style={{marginTop: 5}}>Demo về OTP</Button>
            </Col>
            <div style={{textAlign: 'center', fontWeight:'bold', color:'red'}}>
                <p>{typeOtp}</p>
            </div>
            {authen ? <AthenContent />: null}
            {description ? (
              <div>
                <h3 style={{textAlign: 'center'}}>Mô tả về FinHay</h3>
                <br />
                <p>FinHay là hệ thống đầu tư sinh lời nên tính xác thực từ phía người dùng đặt lên hàng đầu.</p>
                <p>OTP đc ứng dụng làm lớp bảo mật thứ 2, và làm nhiệm vụ xác thực giao dịch như rút tiền, đầu tư sinh lời ...</p>
                <p>OTP giữ vai trò quan trọng trong việc ngăn chặn truy cập trái phép , giảm thiểu rủi ro cho người dùng.</p>
                <p>Tài khoản demo: username: finhay2000 password: htta</p>
                <p><Button onClick={()=>props.test()}>Bắt đầu</Button></p>
                
              </div>
            ) : null}
                <hr />
                
                
        </Row>
        <div style={{textAlign: 'right'}}>
                  <Button type="primary" onClick={()=>props.show()}>Nội dung tiếp theo</Button>
                </div>
            <Modal title="Ứng dụng của OTP" visible={isModalVisible}
            style={{ top: 20 }}
            onCancel={handleCancel} onOk={handleOk}>
                {contenModal(content)}
            </Modal>
        </>
    )
}
export default HinComponent;