import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>
            <p className="text-xs text-gray-600 mt-1">{siteConfig.description}</p>
          </div>
          <Link
            href="/articles"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            浏览文章
          </Link>
        </div>
      </header>

      {/* Hero Section - Diagonal Split Layout */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero with Diagonal Split */}
          <div className="relative mb-32 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-pink-400 to-yellow-400 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left: Content */}
              <div className="p-12 md:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-block mb-4">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  让每个生日<br />都独一无二
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  用 AI 创作专属生日歌曲，为 TA 送上最特别的祝福
                </p>
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-fit"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  立即生成专属生日歌
                </a>
              </div>

              {/* Right: Decorative Pattern */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-600/30"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Categories - Masonry/Staggered Layout */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">探索生日音乐灵感</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.theme.categories.map((category, idx) => {
                const icons = {
                  '儿童生日': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  '成人生日': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  '老人生日': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  '派对音乐': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  ),
                  '浪漫生日': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  '搞笑生日': (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                }
                
                return (
                  <Link
                    key={category}
                    href="/articles"
                    className={`group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-pink-400 ${
                      idx % 3 === 1 ? 'md:mt-8' : idx % 3 === 2 ? 'md:mt-16' : ''
                    }`}
                    style={{ minHeight: '200px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-8">
                      <div className="text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {icons[category as keyof typeof icons]}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category}</h3>
                      <p className="text-gray-600 mb-4">发现最适合的生日音乐</p>
                      <div className="flex items-center text-pink-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        查看推荐
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Product Promotion - Bento Grid Style */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-2 bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-block mb-4">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">想要定制专属生日歌曲？</h3>
                  <p className="mb-8 text-white/90 text-lg leading-relaxed">
                    {siteConfig.targetProduct.description}
                  </p>
                  <a 
                    href={siteConfig.targetProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    立即体验
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stats/Features */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="text-pink-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">AI 智能创作</h4>
                <p className="text-gray-600">根据您的需求，智能生成独特的生日歌曲</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="text-yellow-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">快速生成</h4>
                <p className="text-gray-600">几分钟内即可获得专属生日歌曲</p>
              </div>
            </div>
          </div>

          {/* Related Sites - Horizontal Scroll */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">更多音乐灵感</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 snap-center group"
                >
                  <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-400 h-full cursor-pointer">
                    <div className="text-pink-500 mb-4">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{site.name}</h4>
                    <div className="flex items-center text-pink-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      探索更多
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-pink-200 py-12 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-pink-500 mb-4 flex justify-center">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <p className="font-bold text-gray-900 text-lg">{siteConfig.name} © 2025</p>
          <p className="mt-2 text-gray-600">让每个生日都充满音乐与欢乐</p>
        </div>
      </footer>
    </div>
  )
}
