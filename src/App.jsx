import Index from './pages/index.jsx';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

function App() {
  return (
    <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: '#00b96b' } }}>
      <Index></Index>
    </ConfigProvider>
  );
}

export default App;
