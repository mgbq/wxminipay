/**
 * 工具函数
 */
module.exports = {
  // 生成交易Id
  getTradeId() {
    var date = new Date().getTime().toString()
    var text = ""
    var possible = "0123456789"
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return 'NxminMpCloud' + date + text;
  }
}
  