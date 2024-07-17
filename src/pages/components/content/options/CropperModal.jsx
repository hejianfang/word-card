import { Modal } from 'antd';
import ImageCropper from './Cropper';
import { useRef } from 'react';
const CropperModal = ({ open, previewImage, handleCancel, handleConfirm }) => {
  const childRef = useRef(null);

  // 获取裁剪后的文件
  const onOk = () => {
    if (childRef.current && typeof childRef.current === 'function') {
      handleConfirm(childRef.current());
    }
  };
  return (
    <Modal open={open} title='图片裁剪' onCancel={handleCancel} onOk={onOk}>
      <ImageCropper
        imgSrc={previewImage}
        cropData={(method) => (childRef.current = method)}></ImageCropper>
    </Modal>
  );
};
export default CropperModal;
