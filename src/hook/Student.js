import { Col, Row, Skeleton } from 'antd';
import React,{ useState, useEffect} from 'react';
import ButtonComponent from './components/student/Button';
import FilterStudent from './components/student/filter';
import InputComponent from './components/student/Input';
import LayoutComponent from './components/student/Layout';
import ListStudent from './components/student/ListStudent';
import FooterComponent from './components/student/partials/Footer';

const Student = (props) => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [DoB, setDoB] = useState('');
    const [khoa, setKhoa] = useState('');
    const [code, setCode] = useState('');
    const [data, setData] = useState(null);
    const [list, setList] = useState([]);
    useEffect(()=>{
        // const data = localStorage.getItem('listStudent');
        // if(data !== null){
        //     setList(data);
        // }
        // setLoading(false);
    },[])
    const onChangeValue = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value);
        }else if(e.target.name === 'DoB'){
            setDoB(e.target.value);
        }else if(e.target.name === 'khoa'){
            setKhoa(e.target.value);
        }else{
            setCode(e.target.value);
        }
    }
    const resetState = () => {
        setName('');
        setDoB('');
        setKhoa('');
        setCode('');
    }
    const AddStudent = () => {
        setLoading(true);
        const add = {
            tensv: name,
            ngsinh: DoB,
            khoaql: khoa,
            mssv: code
        }
        const data = list;
        data.push(add);
        setList(data);
        resetState();
        console.log(list);
        setLoading(false);
        
    }
    return(
        <LayoutComponent>
            <Row>
                <Col span={8} offset={1} style={{textAlign:'center'}}>
                    <h3>Thêm mới sinh viên</h3>
                    <InputComponent placeholder="Nhap ten sv" name="name" value={name} change={onChangeValue} />
                    <InputComponent placeholder="Nhap ngay sinh" name="DoB" value={DoB} change={onChangeValue} />
                    <InputComponent placeholder="Nhap khoa quan ly" name="khoa" value={khoa} change={onChangeValue} />
                    <InputComponent placeholder="Nhap ma sv" name="code" value={code} change={onChangeValue} />
                    <ButtonComponent click={AddStudent} />
                </Col>
                <Col span={12} offset={2}>
                    <FilterStudent />
                    {loading ? <Skeleton active />: <ListStudent data={list}/>}
                </Col>
            </Row>
            <FooterComponent />
        </LayoutComponent>
    )
}
export default Student;