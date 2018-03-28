
import axios from 'axios'
import queryString from 'queryString'
var HTTP = axios.create({
    // baseURL:'https://www.easy-mock.com/mock/5a9c91491834fc1c1dcb0ec2/example/',
    baseURL: '/',
    timeout: 3000,
    responseType:'json',
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    // transformRequest:[function(data){
    //   return queryString.stringify(data);
    // }]  
  })

export default HTTP