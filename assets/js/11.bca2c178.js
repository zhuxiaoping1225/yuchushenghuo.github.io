(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{259:function(a,t,r){"use strict";r.r(t);var _=r(1),v=Object(_.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"快速导航"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[a._v("#")]),a._v(" 快速导航")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA"}},[a._v("快速导航")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#1.%E5%BC%80%E7%AF%87%E8%AF%8D%EF%BC%9A%E8%AE%BE%E8%AE%A1%E5%88%9D%E8%A1%B7%E5%8F%8A%E7%90%86%E8%AE%BA%E7%A7%91%E6%99%AE"}},[a._v("1.开篇词：设计初衷及理论科普")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#2.%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87%EF%BC%9A%E5%AE%89%E8%A3%85%E5%BF%85%E5%A4%87%E8%BD%AF%E4%BB%B6%EF%BC%8C%E4%BE%8B%E5%A6%82%EF%BC%9AElasticSearch%E3%80%81RabbitMQ"}},[a._v("2.环境准备：安装必备软件，例如：ElasticSearch、RabbitMQ")])])]),a._v(" "),r("h2",{attrs:{id:"_1-开篇词：设计初衷及理论科普"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-开篇词：设计初衷及理论科普"}},[a._v("#")]),a._v(" 1.开篇词：设计初衷及理论科普")]),a._v(" "),r("h3",{attrs:{id:"一、-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、-前言"}},[a._v("#")]),a._v(" 一、 前言")]),a._v(" "),r("p",[a._v("现如今，企业中一般都不止一个业务系统，不同的业务系统或多或少都会有消息推送的需求，不论是对内还是对外，通常\n情况下消息的推送都与业务系统耦合在一起实现，没法做到复用，如果另外一个业务系统也需要有消息推送功能，又得重新对接一遍，\n无形之中增加工作量，我所在的企业就是有这种需求，目前实现也是耦合在一起，而且跟业务强关联，不同得业务系统的消息推送规则\n不一样，但是底层的后台推送功能确实大同小异，故此，为了节约成本，降低耦合，有了这篇通用的消息推送设计解决方案小册。")]),a._v(" "),r("h3",{attrs:{id:"二、-本质"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、-本质"}},[a._v("#")]),a._v(" 二、 本质")]),a._v(" "),r("p",[a._v("消息推送的本质: "),r("strong",[a._v("“某种条件”满足触发消息推送")]),a._v("，从消息源端到消息推送端再到接收端，消息的流转总共要经过三个平台才能\n触达到接收对象，接收对象可以是用户手机、用户邮箱、App等")]),a._v(" "),r("h3",{attrs:{id:"三、推送方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、推送方式"}},[a._v("#")]),a._v(" 三、推送方式")]),a._v(" "),r("p",[a._v("目前比较主流的推送方式有"),r("strong",[a._v("短信推送、电话通知、App推送、企业微信和邮件推送")]),a._v("等，具体定义如下：")]),a._v(" "),r("ul",[r("li",[a._v("短信推送"),r("br"),a._v("\n借助手机的短信功能发送信息，这种即使用户已经卸载了软件还是可以发送到用户手机上，但成本相对较高，业务系统通过消息中心将消息\n发送到用户手机短信上")]),a._v(" "),r("li",[a._v("电话通知"),r("br"),a._v("\n电话语音通知，业务系统通过消息中心将消息以电话语言的方式通知用户")]),a._v(" "),r("li",[a._v("App推送"),r("br"),a._v("\nApp推送也叫站内推送，实际是通过App对软件中的注册用户发送信息，用户只有打开App才能看到，好处是不需要外部成本，坏处是传播能力不足")]),a._v(" "),r("li",[a._v("微信推送"),r("br"),a._v("\n通常是指企业微信，业务系统通过消息中心将消息推送给企业微信")]),a._v(" "),r("li",[a._v("邮件推送"),r("br"),a._v("\n电子邮件发送,业务系统通过消息中心将消息推送给用户电子邮箱")])]),a._v(" "),r("p",[a._v("本小册，只讲解短信推送及实现，其它几种留给各位同学实现。")]),a._v(" "),r("h3",{attrs:{id:"四、推送规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、推送规则"}},[a._v("#")]),a._v(" 四、推送规则")]),a._v(" "),r("p",[a._v("业务业务推送规则，包括推送方式、推送时间、推送间隔、是否启用等，总之，需满足消息准确推送到业务系统")]),a._v(" "),r("h3",{attrs:{id:"五、推送客户端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、推送客户端"}},[a._v("#")]),a._v(" 五、推送客户端")]),a._v(" "),r("ul",[r("li",[a._v("生产端"),r("br"),a._v("\n生产消息，将消息按一定的规则保存起来")]),a._v(" "),r("li",[a._v("接收端"),r("br"),a._v("\n监听到消息，然后处理消费，判断消息推送平台")]),a._v(" "),r("li",[a._v("发送端"),r("br"),a._v("\n第三方消息推送平台（例如：阿里云、极光等）")])]),a._v(" "),r("h3",{attrs:{id:"六、课程目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、课程目录"}},[a._v("#")]),a._v(" 六、课程目录")]),a._v(" "),r("h2",{attrs:{id:"_2-环境准备：安装必备软件，例如：elasticsearch、rabbitmq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境准备：安装必备软件，例如：elasticsearch、rabbitmq"}},[a._v("#")]),a._v(" 2.环境准备：安装必备软件，例如：ElasticSearch、RabbitMQ")])])}),[],!1,null,null,null);t.default=v.exports}}]);