import { Col, Row, Input, Button, Modal, Progress, Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import FileUploader from "react-firebase-file-uploader";
import firebase from '../../firebase';
import { CommentOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import HeaderComponent from './Layout/Header';
import './Layout/layout.css';
const {Sider, Content} = Layout;
const {TextArea} = Input;
const FeedbackPage = () => {
    const [username, setUsername] = useState('Khách vô danh');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [avatarURL, setAvatarURL] = useState('');
    const [todoList, setTodoList] = useState();
    const [like, setLike] = useState('');
    const [cmt, setCmt] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    useEffect(() => {
      let user = localStorage.getItem('user');
      if(user === null){
        setIsModalVisible(true);
      }else{
        setUsername(user);
      }
      const dataFb = [];
      const getData = () => {
        const todoRef = firebase.database().ref('feedback');
      todoRef.on('value', (snapshot) => {
        
        const todos = snapshot.val();
        for (let id in todos){
      
          let data = {
            "id": id,
            "user": todos[id].user,
            "FbContent": todos[id].FbContent,
            "image": todos[id].image,
            "idFb": todos[id].idFb
          };
          console.log(data);
          dataFb.push(data);
        }
        dataFb.sort((a, b) => parseFloat(b.idFb) - parseFloat(a.idFb));
        setTodoList(dataFb);
      });
      }
 
      getData();
    }, []);
    const handleChangeUsername = event =>
        setUsername(event.target.value)
    const handleUploadStart = () => {
        setIsLoading(true);
        setProgress(0);
        
    }
    const handleOnChange = (e) => {
        setContent(e.target.value);
    }
    const handleProgress = progress => setProgress(progress);
    const handleUploadError = error => {
        setIsLoading(false);
    console.error(error);
  };
  const handleUploadSuccess = filename => {
    setAvatar(filename);
    setProgress(100);
    setIsLoading(false);
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => setAvatarURL(url));
      console.log(avatarURL);
  };
  const qualityCmt = async (id) => {
    const todoRef =  firebase.database().ref('replyfeedback').orderByChild("idFB").equalTo(id);
    const foreachRe = (arr) => {
      let todoList = 0;
       arr.on('value', (snapshot) => {
        const todos = snapshot.val();
        
        for (let id in todos) {
           todoList = todoList + 1;
        }
      });
      
      return todoList;
    }
    let num = await foreachRe(todoRef);
    return num;
  }
  const submitFeedBack = () => {
    var pass = prompt('Nhập mật khẩu để đăng feedback hoặc bình luận (gợi ý: 4 chữ cái đầu của tên các thành viên trong nhóm theo thứ tự A -> Z)');
    if(pass === 'AANT'){
       var d = new Date();
    const feedback = firebase.database().ref('feedback');
    const add = {
        idFb: d.getTime(),
        user: username,
        FbContent: content,
        image: avatarURL
    }
    feedback.push(add);
    setAvatarURL('');
    setContent('');
    document.getElementById('output').value = "";
    }
   
    
  }
  const ShowMess = () => {
    document.getElementById("myForm").style.display = "block";
  }
    return(
        <>
        <HeaderComponent />
            <Layout>
            <Sider style={{marginTop:0, background:'#fff'}} >
     
    </Sider>
              <Content>
                <Row >
      <Col span={24} style={{marginTop:70}}>
        <h2 style={{textAlign: 'center'}}>Trang feedback về phần mềm Quản lý thư viện</h2>
        <h4>Xin chào: {username}</h4>
              <TextArea rows={4} style={{width: '100%', border:'1px solid red', marginTop:'5px'}} value={content} onChange={handleOnChange} id="output">{content === ''? '': content}</TextArea>
                <br />
                {avatarURL && <img style={{width: '30%', height:'30%'}} src={avatarURL} />}
                {avatarURL === ''?
                <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />: progress < 100 ? <Progress strokeLinecap="square" percent={progress}/> : null 
                }
            <div style={{textAlign: 'center'}}>
                <button className="btn btn-primary"  style={{width: '100%'}} onClick={submitFeedBack}>Tạo Feedback</button>
            </div>
            <hr />
            <div>
      {
        
      todoList
        ? todoList.map((todo, index) => (
            <>
            
            <hr />
                <h3 key={index}>{todo.user}</h3>
                <p>{todo.date}</p>
                
                <p style={{fontSize:20}}>{todo.FbContent}</p>
                
                <div style={{textAlign:'center'}}>
                  {todo.image !== ''? <img style={{width: '80%', height:'30%'}} src={todo.image}/> : null}
                  
                </div> <div style={{textAlign:'right', fontSize:18, marginTop:5}}>
                    <p>
                      {todo.cmt == 0 ? 'Chưa có bình luận nào' : todo.cmt+' bình luận'}
                    </p>
                    
                  </div>
                <div style={{marginTop: 8, textAlign:'center'}}>
                    <NavLink to={'/comment-fb/'+todo.id}><Button><CommentOutlined /> Bình luận</Button></NavLink>
                  </div>
            </>
        ))
        : ''}
    </div>
      </Col>
    </Row>
              </Content>
              
    <Sider style={{marginTop:0, background:'#fff', minWidth: 360}} >
      <div className="sider-right">
<h5>Đang hoạt động</h5>
<div className="card">
  {/* /.card-header */}
  <div className="card-body p-0">
    <ul className="products-list product-list-in-card pl-2 pr-2">
      <li className="item" onClick={ShowMess}>
        <div className="product-img">
          <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
        </div>
        <div className="product-info">
           Anh Hin
        </div>
      </li>
      
    </ul>
  </div>
  {/* /.card-body */}
  
  {/* /.card-footer */}
</div>

      </div>
      
    </Sider>
            </Layout>
            
    <Modal title="Cho biết danh tính" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <label>Nhập tên của bạn</label>
        <Input placeholder="VD: Hin ĐZ" onChange={(e)=>{
          let name = e.target.value;
          if(name.length === 0){
            setUsername('Khách vô danh')
          }else{
            setUsername(e.target.value);
            localStorage.setItem('user',e.target.value);
          }
        }}/>
      </Modal>
      <div className="chat-popup" id="myForm">
  <form action="/action_page.php" className="form-container">
  <div className="card direct-chat direct-chat-warning">
  <div className="card-header">
    <h3 className="card-title">Không có tên</h3>
    <div className="card-tools">
      <i className="fas fa-times" />
    </div>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    {/* Conversations are loaded here */}
    <div className="direct-chat-messages">
      {/* Message. Default to the left */}
     
      {/* Message to the right */}
      
      {/* /.direct-chat-msg */}
      {/* Message. Default to the left */}
      <div className="direct-chat-msg">
        <div className="direct-chat-infos clearfix">
          <span className="direct-chat-name float-left">Không có tên</span>
          <span className="direct-chat-timestamp float-right">28 May 5:37 pm</span>
        </div>
        {/* /.direct-chat-infos */}
        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
        {/* /.direct-chat-img */}
        <div className="direct-chat-text">
          Cho tao mượn ít tiền được không?
        </div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
      {/* Message to the right */}
      <div className="direct-chat-msg right">
        <div className="direct-chat-infos clearfix">
          <span className="direct-chat-name float-right">Anh Hin</span>
          <span className="direct-chat-timestamp float-left">28 May 6:10 pm</span>
        </div>
        {/* /.direct-chat-infos */}
        <img className="direct-chat-img" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/153274160_1368026026882649_2813279667539031238_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lnH-1-p7-YMAX-fiyI9&_nc_ht=scontent-hkt1-1.xx&oh=f00a5e199c1fad2f82531e6701025642&oe=60D83CB1" alt="message user image" />
        {/* /.direct-chat-img */}
        <div className="direct-chat-text">
         Tao chỉ có xác khô này, mày lấy thì lấy.
        </div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
    </div>
    {/*/.direct-chat-messages*/}
   
    {/* /.direct-chat-pane */}
  </div>
  {/* /.card-body */}
  <div className="card-footer">
    <form action="#" method="post">
      <div className="input-group">
        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
        <span className="input-group-append" style={{height: 50}}>
          <button type="button" className="btn btn-warning">Gửi</button>
        </span>
      </div>
    </form>
  </div>
  {/* /.card-footer*/}
</div>

  </form>
</div>

        </>
    )
}
export default FeedbackPage;