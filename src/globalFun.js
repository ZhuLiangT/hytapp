/**
 * Created by zhuliang on 2017/5/2.
 */
import  './global'
import Vue from 'vue'
import axios from 'axios'
/*global.setNoticConfig= function(title,desc,duration,key,onClose){
  let cof = {};
  if(title!=null)cof.title=title;
  if(desc!=null)cof.desc=desc;
  if(duration!=null)cof.duration=duration;
  if(key!=null)cof.key=key;
  if(onClose!=null)cof.onClose=onClose;
  return cof;
}*/
axios.interceptors.request.use(
  config => {
    if(config.url.indexOf("/api")>-1){
    /*  if (TOKEN) {  // 判断是否存在token，如果存在的话，则每个http header都加上token*/
        config.url = SERVICEURL+config.url;
       /* config.headers.Authorization = TOKEN;*/
        console.log("发送请求!")
        console.log(config)
    /*  }*/
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

axios.interceptors.response.use(
  response => {
    console.log(3333)
    console.log("收到请求")
    console.log(JSON.parse(JSON.stringify(response)))
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          refushToken();break;
        case 403:
          refushToken();break;
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
/*global.refushToken=function(){
    if(new Date().getTime()-TOKENTIME.getTime()>30*60*1000){
      console.log("超过半小时，重新获取")
      Vue.axios.post(tokenUrl).then(function(response){
        TOKEN = response.data.token;
        TOKENTIME = new Date();
      }).catch(function(response){
      })
    }else{
      console.log("尚未过时，尚能使用")
    }
}
global.setLoginInfo=function(logininfo,rememberMe){
    USERINFO = logininfo
    ISLOGIN=true;
    if(rememberMe){
      localStorage.setItem("AlienlabnewsUserInfo",JSON.stringify(USERINFO));
    }else{
      localStorage.setItem("AlienlabnewsUserInfo",null);
      sessionStorage.setItem("AlienlabnewsUserInfo",JSON.stringify(USERINFO));
    }
}
global.checkLoginInfo=function(){
    if(JSON.parse(localStorage.getItem("AlienlabnewsUserInfo")) ||  JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo"))){
      ISLOGIN=true;
      console.log(JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo")))
      USERINFO = JSON.parse(localStorage.getItem("AlienlabnewsUserInfo"))
      if(USERINFO==null || USERINFO == ""){
        USERINFO = JSON.parse(sessionStorage.getItem("AlienlabnewsUserInfo"))
      }
      console.log(USERINFO)
    }else{
      ISLOGIN=false;
    }
}
global.loginOut=function(){
  ISLOGIN=false;
  localStorage.setItem("AlienlabnewsUserInfo",null);
  sessionStorage.setItem("AlienlabnewsUserInfo",null);
}*/
