import { Button } from 'antd';
import useDownLoad from './useDownLoad';
import Platform from './Platform';
import useRecursion from './useRecursion';
const OptionCard = () => {
  const { onDownload } = useDownLoad();
  const { recursion } = useRecursion();
  return (
    <div className='word-card option-card'>
      <div>
        <h3>平台</h3>
        <div className='plat-form'>
          <Platform></Platform>
        </div>
        {recursion()}
        <Button onClick={onDownload}>下载</Button>
      </div>
    </div>
  );
};
export default OptionCard;
