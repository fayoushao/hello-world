// 1. 引入 axios
import axios from 'axios';

// 2. 生成一个 axios 的实例
const http = axios.create();

// 3. 设置 http 的一些默认选项
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com/' : 'http://localhost:3000/'; // 基准url地址
http.defaults.timeout = 10000; // 超过这个时间点请求还没有完成，那么就报错。

// 4. 做请求的拦截

// 5. 做响应的拦截
http.interceptors.response.use(response => {
  return response.data;
})

// 6. 不要忘了暴露
export default http;

// http.get()
// http.post()
// http.delete()
