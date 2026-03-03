import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100">
      {/* 装饰气球 */}
      <div className="fixed top-10 left-10 text-6xl animate-bounce" style={{animationDelay: '0s'}}>🎈</div>
      <div className="fixed top-20 right-20 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🎉</div>
      <div className="fixed bottom-20 left-20 text-5xl animate-bounce" style={{animationDelay: '1s'}}>🎂</div>
      <div className="fixed bottom-10 right-10 text-6xl animate-bounce" style={{animationDelay: '1.5s'}}>🎁</div>
      
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm shadow-sm relative z-10">
        <div className="container mx-auto px-4 py-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            {siteConfig.name} 🎵
          </h1>
          <p className="text-sm text-gray-700 mt-2">{siteConfig.description}</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 text-7xl">🎂🎈🎉</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              让每个生日都独一无二
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              用 AI 创作专属生日歌曲，为 TA 送上最特别的祝福 💝
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🎵 立即生成专属生日歌
            </a>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {siteConfig.theme.categories.map((category) => (
              <Link
                key={category}
                href="/articles"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-pink-200 hover:border-pink-400 hover:scale-105 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category === '儿童生日' && '👶'}
                  {category === '成人生日' && '🎊'}
                  {category === '老人生日' && '🎂'}
                  {category === '派对音乐' && '🎉'}
                  {category === '浪漫生日' && '💕'}
                  {category === '搞笑生日' && '😄'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600">查看推荐 →</p>
              </Link>
            ))}
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-16">
            <Link
              href="/articles"
              className="inline-block bg-white px-10 py-4 rounded-full font-bold text-pink-600 border-3 border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl text-lg"
            >
              📚 浏览所有生日灵感
            </Link>
          </div>

          {/* Product Promotion */}
          <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 rounded-3xl p-10 text-white mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-20">🎈</div>
            <div className="absolute bottom-0 left-0 text-9xl opacity-20">🎁</div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">想要定制专属生日歌曲？</h3>
              <p className="mb-6 text-pink-50 text-lg leading-relaxed">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                立即体验 →
              </a>
            </div>
          </div>

          {/* Related Sites */}
          <div className="border-t-2 border-pink-200 pt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">更多音乐灵感</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-br from-white to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-pink-200 hover:border-pink-400 group"
                >
                  <span className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{site.name}</span>
                  <span className="text-sm text-pink-500 block mt-2 group-hover:translate-x-1 transition-transform">探索更多 →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-pink-200 mt-20 py-10 bg-gradient-to-r from-pink-50 to-yellow-50 relative z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-700">
          <p className="font-semibold">{siteConfig.name} © 2025</p>
          <p className="mt-2 text-gray-600">让每个生日都充满音乐与欢乐 🎵</p>
        </div>
      </footer>
    </div>
  )
}
