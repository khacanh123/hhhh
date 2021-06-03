import React, { useState } from 'react'
import { Button, Input, Layout, Space} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
const { Content } = Layout;

const WelcomeComponent = (props) => {
    const [posti, setPosition] = useState("");
    const [nam, setName] = useState("");
    const [dat, setDate] = useState("");
    const onChangeValue = (e) =>{
        if(e.target.name === 'position'){
        setPosition(e.target.value);
        }
        else if(e.target.name === 'name'){
        setName(e.target.value);
        }
        else{
            setDate(e.target.value);
        }
    }
    let history = useHistory();
    const startNow = ()=>{
        let data = {
            position: posti,
            name: nam,
            date: dat,
        }
        
        axios.post('https://api-libhuha.herokuapp.com/progress', data)
            .then((result) => {
                history.push('/');
            })
    }
    return(
        <Content>
                <h1>Cập nhật tiến độ làm bài tập lớn</h1>
                <p>Author: Nguyễn Khắc Anh</p>
                <Input
                 onChange={onChangeValue}
                 value={posti}
                 placeholder="Nhập sTT"
                 name="position"
                />
                <Input
                 onChange={onChangeValue}
                 value={nam}
                 placeholder="Nhập ten tiến trình"
                 name="name"
                />
                <Input
                 onChange={onChangeValue}
                 value={dat}
                 placeholder="Nhập ngày"
                 name="date"
                />
                <Button onClick={startNow}>Vào chat ngay</Button>
        </Content>
    )
}
export default WelcomeComponent;