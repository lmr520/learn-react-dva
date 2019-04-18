/**
 * 模拟CRUD数据
 */
import orderjson from './orderdata';
function timestampToTime(timestamp) {
      var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate() < 10 ?  '0'+date.getDate()+ ' ' : date.getDate()+ ' ';
      var h = date.getHours() < 10 ? '0'+date.getHours()+ ':' : date.getHours()+ ':';
      var m = date.getMinutes() < 10 ? '0'+date.getMinutes()+ ':' : date.getMinutes()+ ':';
      var s = date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds();
      return Y+M+D+h+m+s;
  }
export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  return {
    // 表格带分页
    '/api/order/getList': (options) => {
      const body = JSON.parse(options.body);
      const currentPage = body.currentPage;
      const idbase = (currentPage - 1) * 10;
      const paramMap = body.paramMap;
      const deptName = paramMap.deptName;

      return toSuccess(mock({
        'currentPage': currentPage,
        'showCount': body.showCount,
        'totalResult': orderjson.length,
        'totalPage': orderjson.length/body.showCount,
        [`dataList`]:orderjson.slice(idbase,(idbase+body.showCount)>orderjson.length?orderjson.length:(idbase+body.showCount)).map(function(item){
          item.orderDate=timestampToTime(item.orderDate);
          item.deliveryDate=timestampToTime(item.deliveryDate);
          return item;
          }),
      }), 400)
    },
    '/api/order/bathDelete': (options) => toSuccess({options}, 400),
    '/api/order/getWorkEmployee': (options) => mock({
      'status': true,
      'data|10': [{
        'key|+1': 1,
        'title': '@cname',
      }]
    }),
    '/api/order/save': (options) => toSuccess({options}, 800),
  }
}