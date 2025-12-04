'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: '文生图', path: '/text-to-image' },
  { name: '图生视频', path: '/image-to-video' },
  { name: '文生视频', path: '/text-to-video' },
  { name: '数字人视频', path: '/digital-human-video' },
  { name: '图片编辑神器', path: '/image-editor' },
  { name: '换脸', path: '/face-swap' },
  { name: '抠图神器', path: '/background-removal' },
  { name: 'AI扩图', path: '/image-expand' },
  { name: '图片压缩', path: '/image-compress' },
  { name: '视频转GIF', path: '/video-to-gif' },
  { name: '视频提取音频', path: '/video-to-audio' },
  { name: 'Suno音乐生成', path: '/suno-music' },
  { name: 'AI写作', path: '/ai-writing' },
  { name: 'AI翻译', path: '/ai-translate' },
  { name: '精美PPT', path: '/beautiful-ppt' },
  { name: '超级简历', path: '/super-resume' },
  { name: 'AI代码生成', path: '/ai-code' },
  { name: '视频处理', path: '/video-processing' },
  { name: '音频处理', path: '/audio-processing' },
  { name: 'AI声音', path: '/ai-voice' },
  { name: '超级AI搜索', path: '/super-ai-search' },
  { name: '论文助手', path: '/paper-helper' },
  { name: '其他', path: '/other' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">aihaoban</h1>
        <p className="text-sm text-gray-600">全球AI聚合</p>
      </div>
      <nav className="p-4">
        {navigation.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block p-3 rounded mb-2 transition ${
              pathname === item.path
                ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
