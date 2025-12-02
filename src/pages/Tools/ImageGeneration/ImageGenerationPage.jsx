import React, { useState } from 'react'

export default function ImageGenerationPage() {
  const [prompt, setPrompt] = useState('一只在长城上吃火锅的猫，超可爱，4K')
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')

  const generateImage = async () => {
    setLoading(true)
    setError('')
    setImageUrl('')
    try {
      // Hugging Face 阿里万相 Spaces API (公开，无需 key)
      const response = await fetch('https://alibaba-pai-wanx-v1.hf.space/run/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [prompt]  // 你的提示词
        })
      })
      const data = await response.json()
      if (data.data && data.data[0]) {
        setImageUrl(data.data[0])  // Hugging Face 返回图像 URL
      } else {
        setError('生成失败，检查提示词')
      }
    } catch (err) {
      setError('网络错误：' + err.message)
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>AI好办-CN 图像生成测试 (Hugging Face 版)</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="输入提示词（如：赛博朋克北京夜景，霓虹灯，超详细）"
        rows={4}
        style={{ width: '100%', padding: '12px', fontSize: '16px', marginBottom: '10px' }}
      />
      <button
        onClick={generateImage}
        disabled={loading}
        style={{ 
          width: '100%', 
          padding: '15px', 
          fontSize: '18px', 
          background: loading ? '#ccc' : '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? '生成中... (10-30秒)' : '生成图像'}
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {imageUrl && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>生成结果：</h3>
          <img src={imageUrl} alt="AI 生成图像" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '8px' }} />
          <p style={{ fontSize: '12px', color: '#666' }}>1024x1024 高清图，基于阿里万相模型</p>
        </div>
      )}
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>提示：用中文提示词效果更好！如“北京故宫雪景，电影感，中国风”</p>
        <p>如果卡住，换个提示词再试（Hugging Face 免费，但高峰期慢）</p>
      </div>
    </div>
  )
}
