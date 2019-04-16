/**
 * 模拟CRUD数据
 */
import orderjson from './orderdata';
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
        [`dataList`]:orderjson.slice(idbase,(idbase+body.showCount)>orderjson.length?orderjson.length:(idbase+body.showCount)),
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