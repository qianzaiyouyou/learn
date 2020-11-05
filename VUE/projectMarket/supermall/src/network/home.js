import {request} from './request';


export function getHomeMultdata() {
    return request({
        url: '/home/multidata'
    })
}


export function getHomeGoods() {
    return request({
        url: '/home/data'
    })
}

