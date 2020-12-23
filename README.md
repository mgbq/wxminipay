#### 1 先上效果图
 <img src="https://img-blog.csdnimg.cn/20201223174738835.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center"   width="600px" height:=100px; />

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020122319430613.jpg#pic_center)

 >  快速实现支付功能，有多快？有[五连鞭](https://www.zhihu.com/question/406079072)这么快，不用搭建自己的服务器，不用买域名，不用备案域名，不用支持https。只需要一个简单的云函数，就可以轻松的实现微信小程序支付功能
#### 2 准备工作
1，非个人小程序，个人小程序用不了支付（[小程序appid](https://developers.weixin.qq.com/community/develop/doc/000e6c51c2cd0823a2f7b98175b000?_at=1577928984776)）

2，已经申请微信支付的商户号（[商户id，商户秘钥](https://zhidao.baidu.com/question/241358316804757324.html)）。

3，小程序里关联你的商户号（[小程序和商户号绑定](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml)）

4，[微信小程序开通云开发](https://developers.weixin.qq.com/community/develop/doc/000c0c196140e0d5f8fa2e4dc56000)

#### 3  开干
##### （1）初始化云开发环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223202856507.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223203029912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
##### （2）创建云函数pay
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223203251674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
##### （3）引入第三方支付依赖tenpay
 pay文件夹右键 选择在终端打开，安装依赖 `npm i tenpay`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223203854340.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
安装完成后，我们的pay云函数会多出一个package.json 文件

##### （4）编写云函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223210044440.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
##### （5）简单写一个页面调用云函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223210331875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)

#### 遇到问题的小伙伴可以加我qq:392716797

#### 异常问题
 1. `Error: errCode: -404011 cloud function execution error` 
    是由于没有上传并部署，右键云函数上传并部署
  
   2. `签名错误` [微信支付签名错误](https://developers.weixin.qq.com/community/develop/doc/00028a960246382f12883227255400)
