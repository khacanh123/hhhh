import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import LayoutComponent from './layout/Layout';

const AddBook = () => {
    const [selectFile, setSelectFile] = useState();
    const [fileName, setFileName] = useState('');
    const history = useHistory();
    const handleUploadFile = (e) => {
        setSelectFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }
    const uploadToDB = async () => {
        const data = new FormData();
        data.append('uploadfile', selectFile);
        data.append('fileName', fileName);
        console.warn(selectFile);
        let url = 'http://localhost:8000/books/upload';
        try {
            const res = await axios.post(
                url,
                data
            );
            message.success('Thêm dữ liệu sách thành công');
            history.push('/books/list');
        } catch (ex) {
            //  errorr
            message.error('có lỗi xảy ra, thêm dữ liệu thất bại');
        }
    }
    return (
        <>
            <LayoutComponent>


                <div className="row">
                    <div className="col-lg-8 col-6">
                        <h5 className="mb-2">Thêm thông tin sách mới</h5>
                        <div className="callout callout-info">
                            <h5><i className="fas fa-info"></i> Ghi chú:</h5>
              Thêm bằng dữ liệu từ file Excel (.xlsx, .csv)
              <a href='https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2Fbook%20(3).xlsx?alt=media&token=bc84ef65-bae2-4d4a-9cea-7924a215f58c'>
                  <button type="button" className="btn btn-primary float-right" >
                                <i className="fas fa-download"></i> Tải mẫu nhập thông tin sách
                  </button>
                  </a>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Tải file lên</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="exampleInputFile" onChange={handleUploadFile} />
                                    <label className="custom-file-label" htmlFor="exampleInputFile">Chọn file</label>
                                </div>
                                
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={uploadToDB}>Thêm mới</button>
                    </div>
                </div>
            </LayoutComponent>
        </>
    )
}
export default AddBook;