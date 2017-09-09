/**
 * Created by zhuliang on 2017/4/6.
 */
/*global.SERVICEURL="http://localhost:8080"*/
global.SERVICEURL="http://localhost:8080"


if(process.env.NODE_ENV=="production"){
  global.SERVICEURL="http://106.15.90.228:9090"
}


global.WDMINTRODUCE = [
  {
    title:  '推荐理由',
    content:[
      "1.（品牌影响力）万达集团品牌房企，150亿文旅旗舰.",
      "2.（辐射能力）  万达新中心，拥城际核心资源，宁镇杨新风口。",
      "3.（交通便利）  地铁2号线和地铁4号线直达主城主要商圈，规划中的宁镇城际紧邻项目.",
      "4全方位商务配套 360°都市生活圈依托120万平米大型文化旅游项目，万达集团全新产品设计，轻松享有全方位配套。全方位满足不同级别的商务接待需求，工作生活同样轻松自如。",
    ]
  },
  {
    title:  '项目介绍',
    content:[
      "南京万达茂是万达文化旅游城的精华版，是万达集团斥资150亿元在南京打造的首个大型文化旅游旗舰项目，总体量120万方，集“文化、旅游、商业、商务、人居”五位为一体，涵盖全天候文旅科技主题乐园、儿童主题乐园、万达广场、世界风情室外步行街、5A写字楼、精品住宅、万达茂·中心等7大体验业态，不仅是为南京服务，更是辐射“大南京”200公里半径都市圈的现代超大型都市文旅旗舰项目。",
    ]
  },
  {
    title:  '区域介绍',
    content:[
      "1.项目北临广志路，南临仙林大道，西侧为守敬路，东侧为湖东路.",
      "2.区域交通配套",
      "3.三线地铁畅达南京主城，二号线，四号线（堪称南京的换乘大王）、15号线对接宁镇扬。",
    ]
  }
]


global.ZZPROJECT = [
  {
    title:  '推荐理由',
    content:[
      "市区红星美凯龙广场 旺铺总价45万起 市政府旁 西湖边唯一城市综合体 年回报保底5% 带租约产权现铺 20年无忧委托租赁",
    ]
  }
]

global.LHPROJECT = [
  {
    title:  '推荐理由',
    content:[
      "1.龙湖·新壹城作为南京新规出台前最后一批获批复的4.8米挑高的产品，成为市场关注的稀缺目标.",
      "2:交通便利：项目位于江宁大学城，毗邻地铁1号线交院站2号出口，周边配套齐全.",
    ]
  }
]

global.SUNINGPRO = [
  {
    title:  '推荐理由',
    content:[
      "1.位于徐庄软件园、紫金（玄武）科创特别社区和紫东创意园三大产业集群的核心位置.",
      "2.东连仙林大学城，南北连接312国道和沪宁高速公路，地铁2号线和4号线双地铁环绕.",
      "3.1.6万方社区商业，全面满足居住者“24个小时”不打烊的生活需求。.",
      "4.建筑面积30-35，精装交付互联网+社区公寓，投资自住两相宜.",
    ]
  }
]

global.PROOPTION=[{
    value: 'WDM',
    label: '南京万达茂'
  }, {
    value: 'zz',
    label: '漳州红星广场'
  }, {
  value: 'LH',
  label: '龙湖新壹城'
}, {
  value: 'SN',
  label: '苏宁紫金嘉悦'
}]
