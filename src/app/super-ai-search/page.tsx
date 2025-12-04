import React, { useState } from 'react';

const SuperAiSearch = () => {
  const [active, setActive] = useState(null);

  const entrances = [
    { name: '学术搜索', color: 'blue', icon: '📚', desc: 'Google学术 / arXiv' },
    { name: '网盘搜索', color: 'green', icon: '💾', desc: '百度网盘 / 阿里云盘' },
    { name: '文件搜索', color: 'orange', icon: '📁', desc: '本地文件 / NAS' },
    { name: '网站搜索', color: 'purple', icon: '🌐', desc: '全网爬虫 / 特定站点' },
  ];

  return (
    <div>
      <input type="text" placeholder="输入关键词" className="w-full p-4 border rounded-full mb-6" />
      <div className="grid grid-cols-4 gap-6 mb-6">
        {entrances.map((entrance) => (
          <div
            key={entrance.name}
            className={`p-6 rounded-xl cursor-pointer hover:shadow-lg border-2 border-${entrance.color}-200 bg-${entrance.color}-50`}
            onClick={() => setActive(entrance.name)}
          >
            <div className="text-4xl mb-2">{entrance.icon}</div>
            <h2 className="text-xl font-bold mb-1">{entrance.name}</h2>
            <p className="text-sm text-gray-600">{entrance.desc}</p>
          </div>
        ))}
      </div>
      {active && (
        <div className="bg-white p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">{active} 结果</h2>
          <p>搜索结果流（列表/网格切换）</p>
        </div>
      )}
    </div>
  );
};

export default SuperAiSearch;
