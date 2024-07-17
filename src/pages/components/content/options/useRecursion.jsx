import { Slider, Switch, Radio } from 'antd';
import usePlatform from './usePlatform';
import { useAppState } from '../../../../app-provider';
import PicUpload from './PicUpload';

const useRecursion = () => {
  const { state, dispatch } = useAppState();

  const { platform } = usePlatform(state);

  const onChange = (e, props) => {
    props[props.key] = e;
    dispatch({ type: 'SET_PLATFORM_CONFIG', payload: state.platForm });
  };
  const useComponentMap = {
    Slider: (props) => {
      return <Slider {...props} onChange={(e) => onChange(e, props)}></Slider>;
    },
    Switch: (props) => {
      return <Switch {...props} onChange={(e) => onChange(e ? 1 : 0, props)}></Switch>;
    },
    RadioGroup: (props) => {
      return (
        <Radio.Group
          {...props}
          buttonStyle='solid'
          onChange={(e) => onChange(e.target.value, props)}>
          {props.fonts.map(({ key, name }) => (
            <Radio.Button key={key} value={key}>
              {name}
            </Radio.Button>
          ))}
        </Radio.Group>
      );
    },
    PicUpload: () => {
      const onUpload = (file) => {
        dispatch({ type: 'SET_WORD_GROUND', payload: file });
      };
      return <PicUpload onUpload={onUpload}></PicUpload>;
    },
  };
  const recursion = (list = platform.options) => {
    return (
      <>
        {list.map((s) => {
          return (
            <div key={s.key} className={`${s.key} option-item`}>
              <p>{s.name}</p>
              {s.component && useComponentMap[s.component](s)}
              {s.items && recursion(s.items)}
            </div>
          );
        })}
      </>
    );
  };
  return {
    recursion,
  };
};
export default useRecursion;
