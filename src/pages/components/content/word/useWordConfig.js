import backgroundImage from '../../../../assets/1.png';
import usePlatform from '../options/usePlatform';
const useWordConfig = (state) => {
  const { platform } = usePlatform(state);

  const backgroundStyle = {
    backgroundImage: state.redBook.backgroundImg || backgroundImage,
    opacity: {
      opacity: 0.9,
    },
  };

  const getTextConfig = (key) => {
    let result = '';
    platform.options.some((p) => {
      if (p.key === 'cardConfig') {
        p.items.some((item) => {
          if (item.key === key) {
            result = item[key];
          }
        });
      }
    });
    return result;
  };
  const textStyle = {
    top: `${getTextConfig('fixed') ? '80px' : ''}`,
    left: '6px',
    right: '6px',
    bottom: `${getTextConfig('fixed') ? '6px' : getTextConfig('size') + 'px'}`,
    backgroundColor: `rgba(${getTextConfig('outward') ? '255,255,255' : '0,0,0'}, ${getTextConfig('transparency') / 100})`,
    borderRadius: `${getTextConfig('borderRadius')}px`,
    color: `${getTextConfig('outward') ? '' : '#fff'}`,
    fontFamily: `${getTextConfig('font')}`,
    fontWeight: `${getTextConfig('font') === 'AlimamaAgileVF-Thin' ? 700 : 'normal'}`,
  };

  const renderFormattedText = (inputText) => {
    return { __html: inputText.replace(/\n/g, '<br>') };
  };

  return {
    backgroundStyle,
    textStyle,
    renderFormattedText,
  };
};
export default useWordConfig;
