import { Col, Row, Input,Avatar, Comment, Progress } from 'antd';
import React, { useState, useEffect } from 'react';
import FileUploader from "react-firebase-file-uploader";
import firebase from '../../firebase';
import { NavLink, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { collection, query, where } from "firebase/firestore";

const CommentPage = () => {
    const [username, setUsername] = useState('Khách ẩn danh');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [avatarURL, setAvatarURL] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [listCmt, setListCmt] = useState();
    const [cmt, setcmt] = useState(0);
    let Params = useParams();
    let id = Params.id;
    useEffect(() => {
      let user = localStorage.getItem('user');
      if(user !== undefined){
        setUsername(user);
      }
     
      const getFeedback = async () => {
        const todoRef2 = await firebase.database().ref('feedback').child(id);
      todoRef2.on('value', (snapshot) => {
          const todos = snapshot.val();
          setTodoList(todos);
         
        });
      }
      getFeedback();
      const todoRef = firebase.database().ref('replyfeedback').orderByChild("idFB").equalTo(id);
       todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        const todoList = [];
        for (let id in todos) {
          todoList.push({ id, ...todos[id] });
        }
        setcmt(todoList.length);
        setListCmt(todoList);
      });
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
  
  const submitFeedBack = () => {
    var pass = prompt('Nhập mật khẩu để đăng feedback hoặc bình luận (gợi ý: 4 chữ cái đầu của tên các thành viên trong nhóm theo thứ tự A -> Z)');
    if(pass === 'AANT'){
    var d = new Date();
    const feedback = firebase.database().ref('replyfeedback');
    const add = {
        idRep: d.getTime(),
        idFB: id,
        user: username,
        RepContent: content,
        image: avatarURL
    }
    feedback.push(add);
    setAvatarURL('');
    setContent('');
  }
  }
    return(
        <>
            
            <Row>
      <Col span={12} offset={6}>
        <h2 style={{textAlign: 'center'}}>Trang feedback về phần mềm Quản lý thư viện</h2>
            <NavLink to='../feedback-FE'><ArrowLeftOutlined /> Quay lại</NavLink>
            <h4 style={{textAlign: 'center', fontSize:23}}>Bình luận</h4>
            <hr />
      <div>
                {todoList.length === 0 ? null :
                  (
                    <>
                    <h3>{todoList.user}</h3>
                
                <p style={{fontSize:20}}>{todoList.FbContent}</p>
                {todoList.image !== ''? <img style={{width: '100%', height:'50%'}} src={todoList.image} /> : null}
                <div style={{display:'inline', fontSize:18, marginTop:5}}>
                    <p style={{float:'right'}}>{cmt === 0 ? 'Chưa có bình luận nào': cmt+' bình luận'}</p>
                  </div>
                  <hr />
                </>
                  )
                  }
    </div>
            
          
    <div style={{width:'100%', float: 'left'}}> 
     <div>
      {listCmt
        ? listCmt.map((todo, index) => (
            <>
            <Comment
                author={<h4 style={{fontSize:18, fontWeight:'bold'}}>{todo.user}</h4>}
                key={index}
                avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt={todo.user}
                    />
                  }
                  content={
                    <>
                    <p style={{fontSize:20-2}}>{todo.RepContent}</p>
                {todo.image !== ''? <img style={{width: '50%', height:'45%'}} src={todo.image}/> : null}
                    </>
                  }
            />
            </>
        ))
        : ''}
    </div>
    <Input onChange={handleOnChange} value={content} name="comment"/>
                <br />
                {avatarURL && <img style={{width: '30%', height:'25%'}} src={avatarURL} />}
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
          
            <div style={{textAlign: 'center', marginBottom: 20}}>
                <button className="btn btn-primary"  style={{width: '100%'}} onClick={submitFeedBack}>Bình luận</button>
            </div>
    </div>
      </Col>
    </Row>
    
        </>
    )
}
export default CommentPage;