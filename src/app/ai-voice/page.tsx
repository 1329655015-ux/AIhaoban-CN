'use client';
import React, { useState } from 'react';

const AiVoice = () => {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [subPage, setSubPage] = useState('clone');

  if (!selectedVersion) {
    return (
      <div className="flex justify-center gap-6 p-6">
        <div className="w-80 h-96 bg-gray-100 rounded-xl p-6 cursor-pointer" onClick={() => setSelectedVersion('1.0')}>
          <h2 className="text-2xl font-bold mb-2">1.0 基础版</h2>
          <p>基础语音合成</p>
        </div>
        <div className="w-80 h-96 bg-blue-50 rounded-xl p-6 cursor-pointer" onClick={() => setSelectedVersion('2.0')}>
          <h2 className="text-2xl font-bold mb-2">2.0 通用版</h2>
          <p>完整声音克隆</p>
        </div>
        <div className="w-80 h-96 bg-green-50 rounded-xl p-6 cursor-pointer" onClick={() => setSelectedVersion('3.0')}>
          <h2 className="text-2xl font-bold mb-2">3.0 开源版</h2>
          <p>高级克隆</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setSelectedVersion(null)}>返回</button>
      <div className="flex mb-4">
        <button onClick={() => setSubPage('clone')} className={subPage === 'clone' ? 'bg-blue-500 text-white px-4 py-2' : 'px-4 py-2'}>声音克隆</button>
        <button onClick={() => setSubPage('synthesize')} className={subPage === 'synthesize' ? 'bg-blue-500 text-white px-4 py-2' : 'px-4 py-2'}>声音合成</button>
      </div>
      <div className="flex">
        <div className="w-3/4 pr-6">主内容区：{subPage === 'clone' ? '克隆布局' : '合成布局'}</div>
        <div className="w-1/4">功能列表：我的声音库、示例样本</div>
      </div>
    </div>
  );
};

export default AiVoice;
