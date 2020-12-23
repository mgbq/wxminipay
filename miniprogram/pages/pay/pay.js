// pages/pay/pay.js
Page({
    data: {
        index: 1
      },
      getMoney(e) {
        let amount = e.detail.value;
        this.setData({
          index: amount * 100
        })
      },
      choose(e) {
        let data = e.currentTarget.dataset;
        this.setData({
          index: data.amount,
        });
      },
    //提交订单
    submitpay() {
        let that = this;
        wx.cloud.callFunction({
            name: "pay",
            data: {
                money: that.data.index
            },
            success(res) {
                console.log("提交成功", res.result)
                that.pay(res.result)
            },
            fail(res) {
                console.log("提交失败", res)
            }
        })
    },
    //实现小程序支付
    pay(payData) {
        //官方标准的支付方法
        wx.requestPayment({
            timeStamp: payData.timeStamp,
            nonceStr: payData.nonceStr,
            package: payData.package, //统一下单接口返回的 prepay_id 格式如：prepay_id=***
            signType: 'MD5',
            paySign: payData.paySign, //签名
            success(res) {
                console.log("支付成功", res)
            },
            fail(res) {
                console.log("支付失败", res)
            },
            complete(res) {
                console.log("支付完成", res)
            }
        })
    }
})