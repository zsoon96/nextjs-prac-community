import { atom } from 'jotai'

// 전역 상태 관리 도구 jotai 활용
export default atom({
    loaded: false,
    token: null,
    user: null
})