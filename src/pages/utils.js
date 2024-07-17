import Html2canvas from 'html2canvas';
// 图片变换
// export const imgChangeSize = ({ inputFile, targetWidth = 1242, targetHeight = 1660, callback }) => {
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const img = new Image();
//     img.src = e.target.result;
//     img.onload = () => {
//       // 创建一个 canvas 元素
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       // 设置 canvas 的尺寸
//       canvas.width = targetWidth;
//       canvas.height = targetHeight;
//       // 在 canvas 上绘制图像并进行尺寸调整
//       ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
//       // 获取调整后的图像数据
//       const resizedImageData = canvas.toDataURL('image/jpeg', 1);
//       // 调用回调函数，传递调整后的图像数据
//       callback(resizedImageData);
//     };
//   };
//   reader.readAsDataURL(inputFile);
// };

// html 转图片并下载
export const htmlToPic = (ele) => {
  // const { warp, cleanHtmlRecover } = cleanHtml(ele);
  Html2canvas(ele, { useCORS: true, scale: 4 }).then((canvas) => {
    // 下载图片
    const a = document.createElement('a');
    a.download = 'wordToCard';
    a.href = canvas.toDataURL('image/jpg');
    const event = new MouseEvent('click');
    a.dispatchEvent(event);
  });
};

export const getStopPosition = () => {
  const textDom = document.getElementById('word-html');
  const textDomHeight = textDom.offsetHeight;
  return 408 - textDomHeight;
};

// 获取当前平台的配置
export const getPlatformConfig = (plat, platList) => {
  return platList.find((item) => item.key === plat);
};
