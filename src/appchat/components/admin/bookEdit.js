import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import LayoutComponent from './layout/Layout';
const EditBook = () => {
  const [data, setData] = useState([]);
  const [categories, setCategory] = useState([]);
  const [Code, setBookCode] = useState('');
  const [Name, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const [year, setYearPublic] = useState('');
  const [cate, setCate] = useState('');
  const history = useHistory();
  const params = useParams();
  let id = params.id;
  useEffect(()=>{
    
    const getData = async () => {
      
      const url = `http://localhost:8000/books/`+id;
      const response = await axios.get(url);
      await response.status === 200 ? setData(response.data) : setData([]); 
    
    }
    const getCategory = async () => {
      
      const url = `http://localhost:8000/categories/`;
      const response = await axios.get(url);
      await response.status === 200 ? setCategory(response.data) : setCategory([]); 
    
    }
    getData();
    getCategory();
    setBookName(data.bookName);
    setBookCode(data.bookCode);
    setAuthor(data.author);
    setYearPublic(data.yearPublic);
    setCate(data.category);

  },[data])
 
// console.log(dataBook);

  const hanleChange = (e) => {
    if(e.target.name === 'code'){
      setBookCode(e.target.value);
    }else if(e.target.name === 'name'){
      setBookName(e.target.value);
    }else if(e.target.name === 'author'){
      setAuthor(e.target.value);
    }else if(e.target.name === 'year'){
      setYearPublic(e.target.value);
    }else{
      setCate(e.target.value);
    }
  }

  const submitEdit = async () => {
    let data = {
      bookCode: Code,
      bookName: Name,
      author: Author,
      yearPublic: year,
      category: cate
    }
    let url = 'http://localhost:8000/books/'+id;
        try {
            const res = await axios.put(
                url,
                data
            );
            
            message.success('Thêm dữ liệu sách thành công');
            history.push('/book/list');
        } catch (ex) {
            //  errorr
            message.error('có lỗi xảy ra, thêm dữ liệu thất bại');
        }
  }
    return(
        <>
        <LayoutComponent>

        
            <div className="row">
            <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-warning">
    <div className="card-header">
      <h3 className="card-title">Sửa thông tin sách</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form role="form">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã sách</label>
          <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={data.bookCode} onChange={hanleChange} name="code" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tên sách</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={Name} name="name" onChange={hanleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tác giả</label>
          <input type="text" className="form-control" id="exampleInputPassword1"defaultValue={Author} name="author" onChange={hanleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Năm xuất bản</label>
          <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={year} name="year" onChange={hanleChange}/>
        </div>
        <div className="form-group">
                  <label>Danh mục</label>
                  <select className="form-control select2" data-placeholder="Chọn danh mục ...." name="cate" onChange={hanleChange} style={{width:'100%'}}>
                    {categories ? categories.map((key,index)=>(
                      <option value={key._id} selected={key._id === data.category ? true: false}>{key.name}</option>
                    )): null }
                  </select>
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