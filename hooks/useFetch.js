import axios from 'axios';
import useSWR from 'swr';

export const fetcher = function( url ) {
    return axios.get( url ).then( response => response.data )
}

// 한번 이상 조회한 데이터는 캐시를 이용해서 빠르게 동작함
export default function useFetch( url ) {
    return useSWR( url, fetcher );
}