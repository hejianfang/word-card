import { htmlToPic } from '../../../utils';
const useDownLoad = () => {
  const onDownload = () => {
    // 实现下载逻辑
    const downLoadDom = document.getElementById('word-img-download');
    htmlToPic(downLoadDom);
  };
  return {
    onDownload,
  };
};
export default useDownLoad;
