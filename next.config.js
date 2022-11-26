/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 환경변수 설정 방법 1 - next.config.js 파일에서 아래와 같이 작성
  env: {
    API_HOST: 'http://localhost:3333'
  }
  // 환경변수 설정 방법 2 - .env 파일 생성후 내용 작성하되, 변수 앞에는 'NEXT_PUBLIC_'을 반드시 입력해줘야 인식함
  // NEXT_PUBLIC_API_HOST = 'http://localhost:3333'
}

module.exports = nextConfig
