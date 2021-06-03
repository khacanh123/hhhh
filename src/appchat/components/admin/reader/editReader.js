import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import LayoutComponent from '../layout/Layout';

const EditBook = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [dOB, setDOB] = useState('');
  const [add, setAdd] = useState('');
  const [work, setWork] = useState('');
  const [data, setData] = useState([]);

  const params = useParams();
  let id = params.id;
  const history = useHistory();
  
  useEffect(()=>{
    const getData = async () => {
      
      const url = `http://localhost:8000/reader/`+id;
      const response = await axios.get(url);
      await response.status === 200 ? setData(response.data) : setData([]);
       setDataDefault();
    }
    getData();
   const setDataDefault = () => {
    setCode(data.readerCode);
    setName(data.fullname);
    setDOB(data.dateOfBirth);
    setAdd(data.address);
    setWork(data.workUnit);
   }
  },[])
  
  const hanleChange = (e) => {
    if(e.target.name === 'code'){
      setCode(e.target.value)
    } else if(e.target.name === 'name'){
      setName(e.target.value)
    } else if(e.target.name === 'date'){
      setDOB(e.target.value)
    }else if(e.target.name === 'address'){
      setAdd(e.target.value)
    }else{
      setCode(e.target.value)
    }
  }
  const submitEdit = async () => {
    let data = {
      readerCode: code,
      fullname: name,
      address: add,
      dateOfBirth: dOB,
      workUnit: work
    }
    let url = 'https://api-libhuha.herokuapp.com/reader/'+id;
    console.log(data);
        // try {
        //     const res = await axios.put(
        //         url,
        //         data
        //     );
            
        //     message.success('Thêm dữ liệu sách thành công');
        //     history.push('/reader/list');
        // } catch (ex) {
        //     //  errorr
        //     message.error('có lỗi xảy ra, thêm dữ liệu thất bại');
        // }
  }
    return(
        <>
        <LayoutComponent>

        
            <div className="row">
            <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-warning">
    <div className="card-header">
      <h3 className="card-title">Sửa thông tin bạn đọc</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form role="form">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã bạn đọc</label>
          <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={code} onClick={hanleChange} name="code" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Họ tên</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.fullname} onClick={hanleChange} name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Ngày sinh</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.dateOfBirth} onClick={hanleChange} name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Địa chỉ</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.address} onClick={hanleChange} name="address" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Đơn vị</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.workUnit} onClick={hanleChange} name="work" />
        </div>
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="button" className="btn btn-primary" onClick={submitEdit}>Lưu lại</button>
      </div>
    </form>
  </div>
  </div>

            </div>
            </LayoutComponent>
        </>
    )
}
export default EditBook;