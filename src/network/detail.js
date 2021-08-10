import {request} from "./request"

export function getdetaildata(iid){
   return request({
       url:'/detail',
       params:{
           iid
       }
   })
}