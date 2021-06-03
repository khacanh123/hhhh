import React, { useEffect, useState } from 'react';
import LayoutComponent from '../layout/Layout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import firebase from '../../firebase';
import { useHistory, useParams } from 'react-router';
const EditProduct = () => {
    const [todoList, setTodoList] = useState([]);
    const [price, setPrice] = useState('');
    const [promotion, setPromotion] = useState('');
    const [name, setName] = useState('');
    const [quality, setQuality] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const params = useParams();
    useEffect(()=>{
        const getDataById = async (id) =>{
            const todoRef = await firebase.database().ref('product').child(id);
            //   console.log(todoRef);
            todoRef.on('value', (snapshot) => {
                const todos = snapshot.val();
                setTodoList(todos);       
              });
            
        }
        const setStateDefault = () => {
          setName(todoList.p_name);
            setPrice(todoList.p_price);
            setPromotion(todoList.p_promotion);
            setQuality(todoList.p_quality);
            setCategory(todoList.P_category);
            setImg(todoList.p_img);
            setStatus(todoList.p_status);
            setDescription(todoList.p_description);
        }
        getDataById(params.id);
        setStateDefault();
       
    },[todoList]) 
    
    const onChangeValue = (e) =>{
        if(e.target.name === 'name'){
            setName(e.target.value);
        } else if(e.target.name === 'price'){
            setPrice(e.target.value);
        }
        if(e.target.name === 'promotion'){
            setPromotion(e.target.value);
        }
        if(e.target.name === 'quality'){
            setQuality(e.target.value);
        }
        if(e.target.name === 'category'){
            setCategory(e.target.value);
        }
        if(e.target.name === 'status'){
            setStatus(e.target.value);
        }
        if(e.target.name === 'img'){
            setImg(e.target.value);
        }
    }
    const submitProduct = async () => {
        // const product = firebase.database().ref('product').child(params.id);
        let add = {
            p_name: name,
            p_price: price,
            p_promotion: promotion,
            p_img: img,
            p_quality: quality,
            P_category: category,
            p_status: status,
            p_description: description
        }
        const update = await firebase.database().ref('product/'+params.id).update(add);;
        
        history.push('/list-product');

    }
    return(
        <LayoutComponent>
            <h2>Thêm mới sản phẩm</h2>
            <div className="row">
                <div className="col-sm-12">
                <div className="form-group">
  <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={name} onChange={onChangeValue} name="name" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={price} onChange={onChangeValue} name="price" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Giá khuyến mãi</label>
  <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={promotion} onChange={onChangeValue} name="promotion"/>
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Hình ảnh</label>
  <input type="text" className="form-control" id="exampleInputEmail1" onChange={onChangeValue} defaultValue={img}/>
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Số lượng sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={quality} onChange={onChangeValue} name="quality" />
</div>
<div className="form-group">
  <label>Danh mục sản phẩm</label>
  <select className="form-control select2bs4" name="category" value={category} style={{width: '100%'}} onChange={onChangeValue}>
    <option>Danh mục sản phẩm</option>
    <option value="1">Thời trang</option>
    <option value="2">Điện thoại di động</option>
    <option value="3">Hàng tạp hóa</option>
    <option value="4">Bỉm sữa</option>
    <option value="5">Đồ dùng gia đình</option>
    <option value="6">Đồ chơi trẻ em</option>
  </select>
</div>
<div className="form-group">
  <label>Trạng thái</label>
  <select className="form-control select2bs4" name="status" value={status} style={{width: '100%'}} onChange={onChangeValue}>
    <option>Trạng thái</option>
    <option value="sale">Sale</option>
    <option value="new">Hàng mới về</option>
  </select>
</div>
<label>Mô tả sản phẩm</label>
<CKEditor
                    editor={ ClassicEditor }
                    data={description === undefined ? 'hi' : description}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data);
                    } }
                />
<button type="buttin" class="btn btn-primary" onClick={submitProduct}>Sửa sản phẩm</button>
                </div>
            </div>
        </LayoutComponent>
    )
}
export default EditProduct;