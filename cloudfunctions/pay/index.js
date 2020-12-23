//云开发实现支付
const cloud = require('wx-server-sdk')
cloud.init()
//1，引入支付的三方依赖
const tenpay = require('tenpay');
let util = require('./util');
//2，配置支付信息
const config = {
  appid: 'appid ',
  mchid: '微信商户号',  
  partnerKey: '微信支付安全秘钥', 
  notify_url: 'https://mp.weixin.qq.com', // 支付回调不用改
  spbill_create_ip: '127.0.0.1' //这里不用改
};

exports.main = async(event, context) => {
    const wxContext = cloud.getWXContext();
  let {
    money
  } = event;
  //3，初始化支付
  const api = tenpay.init(config);
  let tradeId = util.getTradeId();
  let result = await api.getPayParams({
    out_trade_no: tradeId,
    body: '大鲨鱼充值',
    total_fee: money, //订单金额(分),
    openid: wxContext.OPENID //付款用户的openid
  });
  return result;
}
