import React, { useState } from 'react';
import LayoutComponent from '../layout/Layout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import firebase from '../../firebase';
import { useHistory } from 'react-router';
const AddProduct = () => {
    const [price, setPrice] = useState('');
    const [promotion, setPromotion] = useState('');
    const [name, setName] = useState('');
    const [quality, setQuality] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
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
    const submitProduct = () => {
        const product = firebase.database().ref('product');
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
        product.push(add);
        history.push('/list-product');

    }
    return(
        <LayoutComponent>
            <h2>Thêm mới sản phẩm</h2>
            <div className="row">
                <div className="col-sm-12">
                <div className="form-group">
  <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập tên sản phẩm" onChange={onChangeValue} name="name" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập giá sản phẩm" onChange={onChangeValue} name="price" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Giá khuyến mãi</label>
  <input type="text" className="form-control" id="exampleInputEmail1" defaultValue="0" onChange={onChangeValue} name="promotion"/>
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Hình ảnh</label>
  <input type="text" className="form-control" id="exampleInputEmail1" onChange={onChangeValue} name="img"/>
</div>
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Số lượng sản phẩm</label>
  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Số lượng" onChange={onChangeValue} name="quality" />
</div>
<div className="form-group">
  <label>Danh mục sản phẩm</label>
  <select className="form-control select2bs4" name="category" style={{width: '100%'}} onChange={onChangeValue}>
    <option>Danh mục sản phẩm</option>
    <option value="1">Thời trang nữ</option>
    <option value="2">Thời trang nam</option>
    <option value="3">Thời trang trẻ em</option>
  </select>
</div>
<div className="form-group">
  <label>Trạng thái</label>
  <select className="form-control select2bs4" name="status" style={{width: '100%'}} onChange={onChangeValue}>
    <option>Trạng thái</option>
    <option value="sale">Sale</option>
    <option value="new">Hàng mới về</option>
  </select>
</div>
<label>Mô tả sản phẩm</label>
<CKEditor
                    editor={ ClassicEditor }
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data);
                    } }
                />
<button type="buttin" class="btn btn-primary" onClick={submitProduct}>Thêm sản phẩm</button>
                </div>
            </div>
        </LayoutComponent>
    )
}
export default AddProduct;