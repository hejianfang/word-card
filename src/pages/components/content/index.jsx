import './style.less';
import WordCard from './word/WordCard';
import OptionCard from './options/OptionCard';
const WordContent = () => {
  return (
    <div className='word'>
      <div className='word-card-wrap'>
        <WordCard></WordCard>
      </div>
      <OptionCard></OptionCard>
    </div>
  );
};
export default WordContent;
