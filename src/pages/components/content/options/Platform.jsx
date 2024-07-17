import { Dropdown } from 'antd';
import { useAppState } from '../../../../app-provider';
import { getPlatformConfig } from '../../../utils';
const Platform = () => {
  const { state, dispatch } = useAppState();
  const onClick = (e) => {
    const key = e.key;
    dispatch({
      type: 'SET_DEFAULT_PLATFORM',
      payload: key,
    });
  };
  return (
    <Dropdown
      arrow
      menu={{
        items: state.platForm,
        selectable: true,
        onClick,
      }}>
      <a onClick={(e) => e.preventDefault()}>
        {getPlatformConfig(state.defaultPlatForm, state.platForm).name}
      </a>
    </Dropdown>
  );
};
export default Platform;
