import { Input } from 'antd';
const { TextArea } = Input;
import { useAppState } from '../../../../app-provider';
import useWordConfig from './useWordConfig';
import { useEffect, useRef } from 'react';
const WordCard = () => {
  const textareaRef = useRef(null);
  const { state, dispatch } = useAppState();
  const { backgroundStyle, textStyle, renderFormattedText } = useWordConfig(state, dispatch);
  const onChange = (e) => {
    dispatch({ type: 'SET_INPUT_TEXT', payload: e.target.value });
    const textarea = textareaRef.current;
    const dom = textarea.resizableTextArea.textArea;
    // const cardDom = document.getElementById('word-html');
    // console.log(textarea.resizableTextArea.textArea);
    if (dom) {
      const lineHeight = parseInt(getComputedStyle(dom).lineHeight, 10) || 1;
      const newLineCount = Math.floor(dom.scrollHeight / lineHeight);
      const text = e.target.value.split('\n').slice(0, 11);
      console.log(newLineCount, text);
      // document.getElementById('lineCount').innerText = lines;
      // document.getElementById('inputText').innerText = text;
    }
  };
  useEffect(() => {
    dispatch({ type: 'SET_INPUT_TEXT', payload: state.inputPlaceholderText });
  }, []);
  return (
    <>
      <div className='word-card back'>
        <div className='word-back' id='word-img-download'>
          <div className='background' style={backgroundStyle.opacity}>
            <img src={backgroundStyle.backgroundImage} alt='' />
          </div>
          <div
            id='word-html'
            className='content'
            style={textStyle}
            dangerouslySetInnerHTML={renderFormattedText(state.inputText)}></div>
        </div>
      </div>
      <div className='word-card input'>
        <p className='input-tip'>
          <span>🤔在这里写下内容:</span>
        </p>
        <TextArea
          showCount
          allowClear
          ref={textareaRef}
          defaultValue={state.inputPlaceholderText}
          maxLength={1000}
          onChange={onChange}
          placeholder={state.inputPlaceholderText}
          style={{ height: 200, resize: 'none' }}
        />
      </div>
    </>
  );
};
export default WordCard;
