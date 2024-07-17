import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
const ImageCropper = ({ imgSrc, cropData }) => {
  const cropperRef = useRef(null);
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      return cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
    }
  };
  cropData(getCropData);
  return (
    <div>
      <Cropper
        ref={cropperRef}
        src={imgSrc} // 替换为你的图像路径
        viewMode={1}
        autoCropArea={1}
        background={false}
        responsive={true}
        initialAspectRatio={3 / 4}
        guides={true}
        style={{ height: 415, width: '100%' }}
      />
    </div>
  );
};

export default ImageCropper;
