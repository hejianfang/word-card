import { inputPlaceholderText } from './const';
export const initState = {
  platForm: [
    {
      name: '小红书',
      key: 'redBook',
      label: '小红书',
      picSize: '1242x1660',
      options: [
        {
          name: '卡片配置',
          key: 'cardConfig',
          items: [
            { name: '背景', key: 'background', component: 'PicUpload' },
            {
              name: '字体',
              key: 'font',
              font: 'cursive',
              defaultValue: 'cursive',
              component: 'RadioGroup',
              fonts: [
                { name: '行书简体', key: 'cursive' },
                { name: '方圆体', key: 'AlimamaFangYuanTiVF-Thin' },
                { name: '刀隶体', key: 'AlabamaDaoLiTi' },
                { name: '东方大楷', key: 'AlabamaDongFangDaKai-Regular' },
                { name: '数黑体', key: 'AlabamaShuHeiTi-Bold' },
                { name: '灵动体', key: 'AlimamaAgileVF-Thin' },
                { name: 'ZCOOL', key: 'ZCOOLXiaoWei-Regular' },
                { name: '拼音体', key: 'Mengshen-Handwritten' },
              ],
            },
            {
              name: '卡片尺寸是否固定',
              key: 'fixed',
              component: 'Switch',
              size: 'small',
              checkedChildren: '固定',
              unCheckedChildren: '灵活',
              defaultChecked: true,
              fixed: 1,
            },
            {
              name: '外观',
              key: 'outward',
              component: 'Switch',
              size: 'small',
              checkedChildren: '浅色',
              unCheckedChildren: '深色',
              defaultChecked: true,
              outward: 1,
            },
            {
              name: '透明度',
              key: 'transparency',
              component: 'Slider',
              transparency: 80,
              defaultValue: 80,
              min: 0,
              max: 100,
            },
            {
              name: '边角',
              key: 'borderRadius',
              component: 'Slider',
              borderRadius: 10,
              min: 0,
              max: 50,
              defaultValue: 10,
            },
            {
              name: '卡片位置(卡片尺寸是否固定控制)',
              key: 'size',
              component: 'Slider',
              min: 6,
              max: 300,
              defaultValue: 6,
              size: '10',
            },
          ],
        },
      ],
    },
  ],
  inputPlaceholderText,
  inputText: '',
  defaultPlatForm: 'redBook',
  redBook: {
    cardBottom: 6,
    maxSlider: 350,
    backgroundImg: '',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT_TEXT': {
      return {
        ...state,
        inputText: action.payload,
      };
    }
    case 'SET_WORD_GROUND': {
      return {
        ...state,
        redBook: {
          ...state.redBook,
          backgroundImg: action.payload,
        },
      };
    }
    // 选择平台
    case 'SET_DEFAULT_PLATFORM': {
      return {
        ...state,
        defaultPlatForm: action.payload,
      };
    }
    // 平台配置项保存
    case 'SET_PLATFORM_CONFIG': {
      return {
        ...state,
        platForm: action.payload,
      };
    }
    default:
      return state;
  }
};
