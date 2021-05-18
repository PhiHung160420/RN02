import React from 'react';
import {Provider} from 'react-redux';

//import Lession3 from './src/components/Lession_3/index';
//import Lession4 from './src/components/Lession_4/index';
//import IconWithState from './src/components/Lession_5_6/IconWithState';
//import RenderWithMap from './src/components/Lession_5_6/RenderWithMap';
//import TouchedWithState from './src/components/Lession_5/TouchedWithState';
//import Touched from './src/components/Lession_5/Touched';
//import BindingData from './src/components/Lession_5_6/BindingData';
//import GameScrollView from './src/components/Lession_5_6/GameScrollView';
//import ScrollViewComponent from './src/components/Lession_5_6/ScrollViewComponent';
//import DemoFlatList from './src/components/Lession_7/DemoFlatList';
//import DemoSectionList from './src/components/Lession_7/DemoSectionList';
//import DemoIcon from './src/components/Lession_7/DemoIcon';

//bài tập về nhà zalo app
//import ZaloApp from './src/components/HomeWorkLession6/ZaloApp';

//bài tập oẳn tù xì
//import BaiTapOanTuXi from './src/components/Lession_8/index';

//Redux
//import DemoRedux from './src/components/Lession_9_Redux/index';
import store from './src/components/Lession_9_Redux/redux/store';
import BaiTapRedux from './src/components/Lession_9_Redux/BaiTapRedux/index';

const App = () => {
  return (
    <Provider store={store}>
      <BaiTapRedux />
    </Provider>
  );
};

export default App;
