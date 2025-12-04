'use client';
import React, { useState } from 'react';

const PaperHelper = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const modules = [
    { id: 1, title: '题目', content: 'AI生成 3 选 1 或自定义' },
    { id: 2, title: '类型', content: '期刊/会议/学位等 6 选项' },
    { id: 3, title: 'AI模型', content: '免费 ~ GPT-4 15积分分级' },
    { id: 4, title: '字数', content: '3000-30000 + 自定义' },
    { id: 5, title: '学历', content: '大专 ~ 博士后 8 选项' },
    { id: 6, title: '专业', content: '100+专业树 + 搜索' },
    { id: 7, title: '大纲', content: '二级/三级 + 自定义编辑' },
  ];

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div key={module.id} className="border border-gray-200 rounded-lg">
          <div
            className="flex justify-between p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => setExpanded(expanded === module.id ? null : module.id)}
          >
            <div>
              <span className="font-bold mr-2">{module.id}.</span>
              <span className="font-bold">{module.title}</span>
            </div>
            <span className="text-red-500">{expanded === module.id ? '▼' : '▶'}</span>
          </div>
          {expanded === module.id && (
            <div className="p-4 bg-gray-50">
              <p>{module.content}</p>
            </div>
          )}
        </div>
      ))}
      <div className="p-4 border border-gray-200 rounded-lg">
        <h2 className="text-xl font-bold mb-2">生成控制</h2>
        <p className="text-red-500 mb-4">总计消耗：15积分</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">生成完整论文</button>
      </div>
    </div>
  );
};

export default PaperHelper;
