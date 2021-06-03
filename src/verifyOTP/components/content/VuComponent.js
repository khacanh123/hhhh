import { Button, Card, Col, notification, Row } from 'antd';
import React, {useState} from 'react';

const VuComponent = (props) => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] =  useState(false);
    const [imgDisplayOne, setImgDisplayOne] = useState(false);
    const [imgDisplayTwo, setImgDisplayTwo] = useState(false);

    
    const descriptionContentFirst = () => {
        notification.open({
            message: 'OTP được sinh bởi claimant ',
            description:
              'Mỗi khi tham gia vào phiên xác thực, claimant sẽ sinh ra một OTP và gửi đến verifer; verifer sẽ căn cứ vào giá trị OTP này để xác thực claimant. ',
            duration: 200,
            onClose: () => {
            }
        });
    }
    const descriptionContentSecond = () =>{
        notification.open({
            message: 'OTP được sinh bởi cả claimant và verifier ',
            description:
              'Trong trường hợp này, hai bên xác thực sẽ thống nhất một lược đồ sinh OTP phụ thuộc vào một giá trị bí mật được chia sẻ giữa hai bên ',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Mỗi lần tham gia vào phiên xác thực, claimant sinh ra một OTP và gửi cho verifier. Bản thân verifier cũng sinh ra một OTP và so sánh với OTP nhận được từ claimant. Kết quả so sánh sẽ cho phép verifier kết luận về tính hợp lệ của claimant ',
                    duration: 200,
                    onClose: () => {
                        
                    }
                });        
            }
        });
    }
    const descriptionContentThird = () =>{
        notification.open({
            message: 'OTP được sinh bởi verifier ',
            description:
              'Trong trường hợp này OTP được sinh bởi verifier và được gửi cho claimant qua kênh liên lạc thứ hai, khác với kênh được dùng để khởi xướng phiên xác thực. Kênh thứ hai này thường là kênh tn nhắn SMS, kênh thoại hoặc kênh email. Sau khi nhận được OTP từ verifier, claimant sẽ gửi trả lại cho verifier . ',
            duration: 80,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Verifier so sánh OTP nhận được từ claimant với OTP mà nó đã gửi đi. Nếu kết quả là giống nhau thì claimant được xác thực, ngược lại thì claimant bị từ chối. Cơ chế sử dụng OTP này hiện đang được áp dụng bởi nhiều ngân hàng và hệ thống giao dịch trực tuyến.',
                    duration: 200,
                    onClose: () => {
                        setOne(false);
                    }
                });        
            }
        });
    }
    const descriptionContentFour = () =>{
        notification.open({
            message: 'Ưu điểm của OTP ',
            description:
              'An toàn: Giải quyết tốt các vấn đề giả mạo, đánh cắp, Key logger. Mã OTP có thể được kết hợp với mã PIN hoặc mật khẩu để trở thành xác thực hai yếu tố. ',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Dễ dàng sử dụng: Việc nhận dạng và xác thực được thực hiện trong vài giây, giảm thiểu lỗi khi gõ mã OTP trong quá trình thực',
                    duration: 200,
                    onClose: () => {
                        notification.open({
                            message: ' ',
                            description:
                              'Linh hoạt: Người dùng dễ dàng sử dụng cho các máy tính khác nhau và dễ mang theo bên mình.',
                            duration: 200,
                            onClose: () => {
                                notification.open({
                                    message: ' ',
                                    description:
                                      'Mã nguồn mở: Sẵn sàng tích hợp với nhiều ứng dụng mã nguồn mở.',
                                    duration: 200,
                                    onClose: () => {
                                    }
                                });   
                            }
                        });   
                    }
                });   
            }
        });   

    }
    const descriptionContentFive = () => {
        notification.open({
            message: 'Nhược điểm của OTP ',
            description:
              'OTP sẽ mất an toàn khi chủ tài khoản bị mất thiết bị sinh OTP (Hard Token OTP) hay kẻ cắp có thể xâm nhập vào hệ thống gửi/nhận tin nhắn SMS để biết được OTP mỗi khi khách hàng thực hiện giao dịch',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Ngoài ra, nếu như hệ thống mạng viễn thông bị chậm,quá tải... hay vì lý do gì đó mà tin nhắn SMS gửi OTP đến chậm quá thời gian hiệu lực của mã OTP thì giao dịch dựa vào OTP SMS này sẽ thực hiện không thành công',
                    duration: 200,
                    onClose: () => {
                        setThree(false);
                    }
                });   
            }
        });   
    }
    const descriptionContentsix = () => {
        setTwo(false);
        setImgDisplayOne(true);
        notification.open({
            message: 'Mô hình tạo ra mật khẩu OTP theo thời gian ',
            description:
              'Theo cơ chế này, người dùng sẽ được cấp một thiết bị sinh mã được gọi là token. Bên trong token gồm có ba thành phần là: một mã seedcode, một đồng hồ đếm thời gian, và một thuật toán mã hóa một chiều.',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Mã seedcode: là mã được nhà sản xuất cài đặt sẵn trong token. Mỗi token có một mã seedcode khác nhau. Và mã seedcode này cũng được lưu lại trong hệ thống của nhà cung cấp dịch vụ tương ứng với tên truy nhập của người dùng.',
                    duration: 200,
                    onClose: () => {
                        notification.open({
                            message: ' ',
                            description:
                              'Đồng hồ đếm thời gian: là đồng hồ của token, nó được đồng bộ với đồng hồ của hệ thống trước khi giao cho người dùng. Mỗi khi người dùng bấm nút tạo mã, token sẽ lấy biến thời gian của đồng hồ.',
                            duration: 200,
                            onClose: () => {
                                notification.open({
                                    message: ' ',
                                    description:
                                      'Thuật toán mã hóa: sử dụng thuật toán băm SHA. ',
                                    duration: 200,
                                    onClose: () => {
                                        setTwo(true)
                                        setImgDisplayOne(false);
                                    }
                                });           
                            }
                        });           
                    }
                });   
            }
        });   
    }
    const descriptionContentSeven = () => {
        setTwo(false);
        setImgDisplayTwo(true);
        notification.open({
            message: 'Mô hình tạo ra mật khẩu OTP theo sự kiện ',
            description:
              'Trong cơ chế này người dùng cũng được cấp một token như ở trên, nhưng bên trong token sẽ có một bộ đếm sự kiện thay vì đồng hồ đếm thời gian. Sự kiện được nhắc đến ở đây là sự kiện mà người dùng bấm nút tạo mã trên Token. ',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Mỗi token sẽ chứa một số mã hữu hạn, có thứ tự và không thay đổi. Số lượng các mã hữu hạn đó được gọi là cửa sổ. Kích thước của cửa sổ này càng lớn thì độ bảo mật của giải pháp càng cao.  ',
                    duration: 200,
                    onClose: () => {
                        setImgDisplayTwo(false)
                    }
                });      
            }
        });      
    }
    const descriptionContentEight = () => {
        notification.open({
            message: ' ',
            description:
              'Hiện nay, cơ sở hạ tầng tại Việt Nam đã đủ điều kiện đáp ứng cho việc ứng dụng công nghệ xác thực bằng mật khẩu (OTP) trong giao dịch thương mại điện tử. ',
            duration: 200,
            onClose: () => {
                notification.open({
                    message: ' ',
                    description:
                      'Phương pháp xác thực bằng mật khẩu OTP mang lại nhiều sự an toàn thông tin cho người sử dụng, và hiện phương pháp này đang được ứng dụng rộng rãi trong nhiều lĩnh vực khác nhau. ',
                    duration: 200,
                    onClose: () => {
                        props.end();
                    }
                });
            }
        });
    }
    const imgOne = () => {
        return(
            <div style={{textAlign:'center'}}>
                <img src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/183464334_301713874901547_7340695535009731720_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=5XAJjqJo78cAX_pQ--B&_nc_oc=AQmZe2jR5vV-565KFHNZSew7KA8nyNkqVFYaYDYdcWbIPFhCrMfkPUrTkofiqGWdl5E&_nc_ht=scontent.fhan4-1.fna&oh=0e7a37bb0c6c851de335ced574b87c47&oe=60C17B3A" style={{width:'100%'}} />
                <h4>Mô hình của cơ chế tạo mã ngẫu nhiên dựa theo thời gian. </h4>
            </div>
        )
    }
    const imgTwo = () => {
        return(
            <div style={{textAlign:'center'}}>
                <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/181081604_200973381706448_1617411338724477390_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=cKqcFBmubRoAX8ibXmq&_nc_ht=scontent-hkt1-2.xx&oh=7f23550a4232789f3d0c0dee9a6e3c7d&oe=60C0FDAA" style={{width:'100%'}} />
                <h4>Mô hình của cơ chế tạo mã ngẫu nhiên dựa theo sự kiện. </h4>
            </div>
        )
    }
    const ThirdContent = () => {
        return(
            <>
                <Card bordered={true} style={{border:'2px solid black',  fontSize:20}}>
                <h3>Ưu, nhược điểm của OTP</h3>
                <p><Button onClick={descriptionContentFour}>Ưu điểm</Button></p>
                <p><Button onClick={descriptionContentFive}>Nhược điểm</Button></p>
            </Card>
            </>
        )
    }


    const firstContent = () => {
        return(
            <>
            <Card bordered={true} style={{border:'2px solid black',  fontSize:20}}>
                <h3>3 nhóm cơ chế sử dụng mật khẩu OTP</h3>
                <p><Button onClick={descriptionContentFirst}>OTP được sinh ở phía claimant</Button></p>
                <p><Button onClick={descriptionContentSecond}>OTP được sinh bởi cả claimant và verifier</Button></p>
                <p><Button onClick={descriptionContentThird}>OTP được sinh bởi verifier</Button></p>
            </Card>
            </>
        )
    }
    const secondContent = () => {
        return(
            <>
            <Card bordered={true} style={{border:'2px solid black',  fontSize:20}}>
                <h3>Mô hình tạo ra mật khẩu OTP</h3>
                <p><Button onClick={descriptionContentsix}>Mô hình tạo ra mật khẩu OTP theo thời gian</Button></p>
                <p><Button onClick={descriptionContentSeven}>Mô hình tạo ra mật khẩu OTP theo sự kiện</Button></p>
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
                <Button onClick={()=>{setOne(true); setTwo(false); setThree(false);}} style={{marginRight: 5}}>Cơ chế sử dụng mã OTP</Button>
                <Button onClick={()=>{setTwo(true); setThree(false); setOne(false)}} style={{marginRight: 5}}>Mô hình tạo mã OTP</Button>
                <Button onClick={()=>{setThree(true); setTwo(false); setOne(false)}} style={{marginRight: 5}}>Ưu, nhược điểm của OTP</Button>
                <Button onClick={()=>descriptionContentEight()} style={{marginRight: 5}}>Kết luận</Button>
            </Col>
            {one ? 
            <Row>
                <Col span={24}>
                    {firstContent()}
                </Col>
            </Row> : null
            }
            {two ? 
            <Row>
                <Col span={24}>
                    {secondContent()}
                </Col>
            </Row> : null
            }
            {three ? 
            <Row>
                <Col span={24}>
                    {ThirdContent()}
                </Col>
            </Row> : null
            }
            {imgDisplayOne ? 
            <Row>
                <Col span={24}>
                    {imgOne()}
                </Col>
            </Row> : null
            }
            {imgDisplayTwo ? 
            <Row>
                <Col span={24}>
                    {imgTwo()}
                </Col>
            </Row> : null
            }
            <hr/>
            
        </Row>
        <div style={{textAlign: 'left'}}>
                <Button type="primary" onClick={()=>props.show()}>Nội dung trước đó</Button>
            </div>
        </>
    )
}
export default VuComponent;