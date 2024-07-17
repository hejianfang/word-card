import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import CropperModal from './CropperModal';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const PicUpload = ({ onUpload }) => {
  const [cropperVisible, setCropperVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handleConfirm = (base64) => {
    setCropperVisible(false);
    setPreviewImage(base64);
    onUpload(base64);
  };
  const handleBeforeUpload = async (file) => {
    if (!file.preview) {
      file.preview = await getBase64(file);
    }
    setPreviewImage(file.preview);
    setCropperVisible(true);
    return false;
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type='button'>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </button>
  );
  return (
    <>
      <Upload listType='picture-card' showUploadList={false} beforeUpload={handleBeforeUpload}>
        {previewImage ? (
          <img
            src={previewImage}
            alt='avatar'
            style={{
              height: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <CropperModal
        open={cropperVisible}
        previewImage={previewImage}
        handleCancel={() => setCropperVisible(false)}
        handleConfirm={handleConfirm}></CropperModal>
    </>
  );
};
export default PicUpload;
