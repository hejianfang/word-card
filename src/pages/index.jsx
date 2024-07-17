import './style.less';
import WordHeader from './components/header';
import WordContent from './components/content';
import AppProvider from '../app-provider';
import { initState, reducer } from './store';
function Index() {
  return (
    <AppProvider initState={initState} reducer={reducer}>
      <div className='word-wrap'>
        <WordHeader></WordHeader>
        <WordContent></WordContent>
      </div>
    </AppProvider>
  );
}

export default Index;
