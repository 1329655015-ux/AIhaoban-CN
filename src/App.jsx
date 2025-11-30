import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import ImageGenerationPage from './pages/Tools/ImageGeneration/ImageGenerationPage';
import 'antd/dist/reset.css';
import './styles/globals.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <ImageGenerationPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
