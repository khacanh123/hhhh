import React,{useState} from 'react';
import InputComponent from './components/ptbh/input';
import ButtonComponent from './components/ptbh/button';
import ResultComponent from './components/ptbh/Result';
import { message } from 'antd';
const PTBH = (props) => {
    const [hsa, setHsa] = useState(''); // luu gia tri he so a
    const [hsb, setHsb] = useState(''); // luu gia tri he so b
    const [hsc, setHsc] = useState(''); // luu gia tri he so c
    const [result, setResult] = useState(''); // luu ket qua nghiem phuong trinh
    
    // bat su kien nguoi dung nhap gia tri vao o input
    const onChangeInput = (e) => {
        if(e.target.name === 'hsa'){
            if(parseInt(e.target.value) === 0){
                message.error('Ban khong the nhap he so a = 0, dung lam tao cau len nha');
                e.target.value = ""; // xoa du lieu o input
            }else{
               setHsa(e.target.value) 
            }           
        }else if(e.target.name === 'hsb'){
            if(parseInt(e.target.value) === 0){
                message.error('Ban khong the nhap he so b = 0, dung lam tao cau len nha');
                e.target.value = ""; // xoa du lieu o input
            }else{
               setHsb(e.target.value) 
            }     
        }else{
            setHsc(e.target.value);
        }
    }
    // 
    const ResultButton = () => {
        let a = parseInt(hsa);
        let b = parseInt(hsb);
        let c = parseInt(hsc);
        let delta = 0;
        delta = b*b - 4*a*c;
        if(delta < 0){
            setResult('Phuong trinh vo nghiem');
        } else if(delta === 0){
            let nghiemkep = -b/2*a;
            setResult('Phuong trinh co nghiem kep x='+nghiemkep);
        }else{
            let one = -b + Math.sqrt(delta)/2*a;
            let two = -b - Math.sqrt(delta)/2*a;
            setResult('Phuong trinh co 2 nghiem phan biet x='+one+'va x='+two)
        }
    }
    return(
        <>
            <h3>Giai phuong trinh bac hai</h3>
            <label>Nhap he so a:</label>
            <InputComponent 
                name="hsa"
                type="text"
                value={hsa}
                change={onChangeInput}
            ></InputComponent>
            <label>Nhap he so b:</label>
            <InputComponent 
                name="hsb"
                type="text"
                value={hsb}
                change={onChangeInput}
            ></InputComponent>
            <label>Nhap he so c:</label>
            <InputComponent 
                name="hsc"
                type="text"
                value={hsc}
                change={onChangeInput}
            ></InputComponent>
            <br/>
            <ButtonComponent type="button" click={ResultButton}>Tinh toan</ButtonComponent>
            <ResultComponent result={result} />
        </>
    )
}
export default PTBH;