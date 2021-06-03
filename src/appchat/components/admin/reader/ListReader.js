import { Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutComponent from '../layout/Layout';

const ListReader = () =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const url = `https://api-libhuha.herokuapp.com/reader/`;
    const response = await axios.get(url);
    await response.status === 200 ? setData(response.data) : setData([]);
    setLoading(false);
  }
useEffect(()=>{


getData();
},[])
    return(
        <>
        <LayoutComponent>

        
<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Danh sách bạn đọc của thư viện</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: '150px'}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Nhập mã bạn đọc" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0" style={{height: '300px'}}>
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Mã bạn đọc</th>
              <th>Họ tên</th>
              <th>Địa chỉ</th>
              <th>Đơn vị</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <Skeleton active />: (
              data ? data.map((key, index) =>(
                <tr>
              <td>{key.readerCode}</td>
              <td>{key.fullname}</td>
              <td>Lớp ĐH {key.address}</td>
              <td><span className="tag tag-success">{key.workUnit}</span></td>
              <td> 
                <NavLink to={'/reader/edit/'+key._id}><i className="fas fa-edit" /></NavLink>
                <NavLink to='#'><i className="fas fa-trash" style={{marginLeft:5}} /></NavLink>
          </td>
            </tr>
              )): null
            )}
            
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
    <div className="text-center">
    <button type="button" className="btn btn-primary float-right" >
                            <i className="fas fa-download"></i> Xuất file pdf
                  </button>
    </div>
  </div>
</div>
</LayoutComponent>
        </>
    )
}
export default ListReader;