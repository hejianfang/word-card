import { getPlatformConfig } from '../../../utils';
const usePlatform = (state) => {
  return {
    platform: getPlatformConfig(state.defaultPlatForm, state.platForm),
  };
};

export default usePlatform;
