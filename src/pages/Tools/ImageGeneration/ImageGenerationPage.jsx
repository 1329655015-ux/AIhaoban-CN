import React, { useState } from 'react';
import { Card, Button, Input, Select, Slider, message, Row, Col, Divider } from 'antd';
import { DownloadOutlined, ReloadOutlined, StarOutlined } from '@ant-design/icons';
import './ImageGenerationPage.css';

const { TextArea } = Input;
const { Option } = Select;

const ImageGenerationPage = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [size, setSize] = useState('1024x1024');
  const [quality, setQuality] = useState(75);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  // 预设提示词
  const presetPrompts = [
    '一只可爱的猫咪在花园里玩耍',
    '未来城市的科幻景观',
    '山水画风格的自然风景',
    '抽象艺术风格的几何图案'
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      message.warning('请输入图像描述');
      return;
    }

    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setGeneratedImage(`https://picsum.photos/800/600?random=${Date.now()}`);
      setLoading(false);
      message.success('图像生成成功！');
    }, 2000);
  };

  const handleDownload = () => {
    if (generatedImage) {
      message.success('图像下载功能待实现');
    }
  };

  const handlePresetClick = (preset) => {
    setPrompt(preset);
  };

  return (
    <div className="image-generation-page">
      <div className="page-header">
        <h1>AI 图像生成</h1>
        <p>通过文字描述，让AI为您创造惊艳的图像作品</p>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="创作设置" className="settings-card">
            <div className="form-section">
              <label>图像描述</label>
              <TextArea
                rows={4}
                placeholder="详细描述您想要的图像内容、风格、氛围等..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="prompt-input"
              />
              
              <div className="preset-prompts">
                <span>快速选择：</span>
                {presetPrompts.map((preset, index) => (
                  <Button
                    key={index}
                    size="small"
                    type="text"
                    onClick={() => handlePresetClick(preset)}
                    className="preset-btn"
                  >
                    {preset}
                  </Button>
                ))}
              </div>
            </div>

            <Divider />

            <div className="form-section">
              <label>艺术风格</label>
              <Select
                value={style}
                onChange={setStyle}
                className="style-select"
              >
                <Option value="realistic">写实风格</Option>
                <Option value="anime">动漫风格</Option>
                <Option value="oil-painting">油画风格</Option>
                <Option value="watercolor">水彩风格</Option>
                <Option value="cyberpunk">赛博朋克</Option>
                <Option value="minimalist">极简主义</Option>
              </Select>
            </div>

            <div className="form-section">
              <label>图像尺寸</label>
              <Select
                value={size}
                onChange={setSize}
                className="size-select"
              >
                <Option value="512x512">512x512</Option>
                <Option value="1024x1024">1024x1024</Option>
                <Option value="1024x768">1024x768</Option>
                <Option value="1920x1080">1920x1080</Option>
              </Select>
            </div>

            <div className="form-section">
              <label>图像质量: {quality}%</label>
              <Slider
                min={25}
                max={100}
                value={quality}
                onChange={setQuality}
                className="quality-slider"
              />
            </div>

            <div className="action-section">
              <Button
                type="primary"
                size="large"
                loading={loading}
                onClick={handleGenerate}
                icon={<StarOutlined />}
                className="generate-btn"
              >
                {loading ? '生成中...' : '生成图像 (5积分)'}
              </Button>
              
              {generatedImage && (
                <Button
                  size="large"
                  onClick={handleDownload}
                  icon={<DownloadOutlined />}
                  className="download-btn"
                >
                  下载图像
                </Button>
              )}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="生成结果" className="result-card">
            {generatedImage ? (
              <div className="result-image">
                <img src={generatedImage} alt="生成的图像" />
                <div className="image-actions">
                  <Button icon={<ReloadOutlined />}>重新生成</Button>
                  <Button icon={<DownloadOutlined />} type="primary">
                    下载高清版
                  </Button>
                </div>
              </div>
            ) : (
              <div className="empty-result">
                <div className="empty-placeholder">
                  <div className="empty-icon">🎨</div>
                  <h3>等待生成图像</h3>
                  <p>在左侧输入描述并点击生成按钮</p>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Card title="使用技巧" className="tips-card">
        <ul className="tips-list">
          <li>💡 <strong>具体描述</strong>：包含主体、背景、颜色、光线等细节</li>
          <li>🎨 <strong>风格参考</strong>：可以指定"梵高风格"或"宫崎骏动画风格"</li>
          <li>📐 <strong>构图建议</strong>：描述拍摄角度如"俯视"、"特写"等</li>
          <li>🌟 <strong>氛围营造</strong>：使用"温馨的"、"神秘的"等情感词汇</li>
        </ul>
      </Card>
    </div>
  );
};

export default ImageGenerationPage;
