---
title: 成果 
nav:
  order: 1
  tooltip: 多方面综合发展
---

# {% include icon.html icon="fa-solid fa-microscope" %}我们的成果


{% include section.html %}
<!-- echarts -->
<!-- ## 积分榜排名
<div id="echarts" style="width: 100%; height: 300px;"></div>

<script>

console.log("in");
var chartDom = document.getElementById('echarts');
var myChart = echarts.init(chartDom);
var option;
option = {
     tooltip: {
        trigger: 'axis',  // 设置触发类型为坐标轴触发
        axisPointer: {
            type: 'cross'  // 设置指示器类型为十字准星
            
        },
        formatter: function (params) {
            var info = ["国家级二等奖", "分区赛十六强","分区赛八强，全国赛线上评选，国家级一等奖","分区赛十六强，全国赛四十六强，国家级二等奖","分区赛殿军，全国赛二十八强，国家级二等奖"];
            var dataIndex = params[0].dataIndex; // 获取数据点的索引
            return params[0].axisValue + info[dataIndex]+'<br> 排名：' + params[0].value; // 自定义提示框内容，这里显示额外信息
        }
    },
  xAxis: {
    type: 'category',
    data: ['2020 年', '2021 年', '2022 年', '2023 年', '2024 年']
  },
  yAxis: {
    type: 'value',
    inverse: true,
    min: 0, 
    max: 265,
            axisLabel: {
            formatter: function (value) {
                if (value === 0) {
                    return "冠军"; // 将坐标轴等于 0的标签替换为图片
                } else {
                    return value; // 其他情况保持原始数值
                }
            },
        }
  },
  series: [
    {
      data: [23,33,26,38,25],
      type: 'line'
    }
  ]
};
option && myChart.setOption(option);
</script>
-->
{% include section.html %} 





## 荣誉奖项
{% include search-box.html %}
{% include search-info.html %}
{% assign national_awards_count = 0 %}
{% assign international_awards_count = 0 %}
{% assign provincial_awards_count = 0 %}
{% assign other_awards_count = 0 %}
{% for award in site.awards %}
{% if award.type == "国家级" %}
{% assign national_awards_count = national_awards_count | plus: 1 %}
{% elsif award.type == "国际级" %}
{% assign international_awards_count = international_awards_count | plus: 1 %}
{% elsif award.type == "省级" %}
{% assign provincial_awards_count = provincial_awards_count | plus: 1 %}
{% else %}
{% assign other_awards_count = other_awards_count | plus: 1 %}
{% endif %}
{% endfor %}

{% assign awards_count =  national_awards_count | plus: international_awards_count | plus: provincial_awards_count | plus: other_awards_count %}

在RoboMaster相关赛事中，齐奇战队已经获得了总计 {{awards_count}} 项奖项。
<table>
<tr>
  <td>国家级奖项</td>
  <!-- <td>国际级奖项</td> -->
  <td>省级奖项</td>
  <td>其他奖项</td>
</tr>
<tr>
  <td>{{national_awards_count}}</td>
  <!-- <td>{{international_awards_count}}</td> -->
  <td>{{provincial_awards_count}}</td>
  <td>{{other_awards_count}}</td>
</tr>
</table>



### 国家级
{% include list.html data="awards" component="awards" style="rich" filters="type: 国家级" %} 

<!-- ### 国际级
{% include list.html data="awards" component="awards" style="simple" filters="type: 国际级" %}  -->

### 省级
{% include list.html data="awards" component="awards" style="rich" filters="type: 省级"%}

### 其他类型
{% include list.html data="awards" component="awards" style="rich" filters="type: 其他"%}

## 高光时刻
<div class="card">
<div class="card-text">
<div class="card-title">RoboMaster 2025</div>

2025开局之战，各兵种协调配合，拿下首胜
</div>
<div class="card-image">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114589123543338&bvid=BV1txjyzwEkt&cid=30206789567&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
</div>

<div class="card">
<div class="card-text">
<div class="card-title">RoboMaster 2024</div>

小组赛步兵冲家，顽强拼搏，观赏性极强。
</div>
<div class="card-image">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1054709603&bvid=BV1JH4y1u7PG&cid=1546431233&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
</div>


{% include section.html %}


## 历史成绩
* 2021RoboMaster机甲大师高校联盟赛3V3对抗二等奖
* 2021RoboMaster机甲大师高校联盟赛步兵对抗一等奖
* 2021RoboMaster机甲大师单项赛工程采矿一等奖
* 2021中国机器人及人工智能大赛一等奖
* 2021中国机器人及人工智能大赛二等奖
* 2021中国机器人及人工智能大赛三等奖
* 2021中国机器人及人工智能大赛三等奖
* 2021中国工程机器人大赛光电搬运一等奖
* 2021中国工程机器人大赛光电搬运一等奖
* 2021中国工程机器人大赛光电搬运二等奖
* 2021中国工程机器人大赛双足竟步二等奖
* 2022大学生创新创业大赛国家级立项两项
* 2022大学生创新创业大赛省级立项三项
* 2022RoboMaster机甲大师超级对抗赛空中机器人三等奖
* 2022RoboMaster机甲大师超级对抗赛全国赛三等奖
* 2022RoboMaster机甲大师超级对抗赛区域赛二等奖
* 2022RoboMaster机甲大师超级对抗赛步兵机器人三等奖
* 2022RoboMaster机甲大师超级对抗赛英雄机器人三等奖
* 2022RoboMaster机甲大师超级对抗赛工程机器人二等奖
* 2022RoboMaster机甲大师超级对抗赛飞镖机器人三等奖
* 2022RoboMaster机甲大师超级对抗赛哨兵机器人三等奖
* 2022RoboMaster机甲大师高校联盟赛二等奖
* 2022RoboMaster机甲大师单项赛英雄吊射一等奖
* 2022RoboMaster机甲大师单项赛工程采矿三等奖
* 2022中国机器人及人工智能大赛二等奖
* 2022中国工程机器人大赛摄像头搬运亚军
* 2022中国工程机器人大赛摄像头搬运一等奖
* 2022中国工程机器人大赛摄像头搬运一等奖
* 2022中国工程机器人大赛摄像头搬运二等奖
* 2022中国工程机器人大赛摄像头搬运二等奖
* 2022中国工程机器人大赛双足竟步二等奖
* 2022中国工程机器人大赛光电搬运一等奖
* 2022中国工程机器人大赛物流分拣三等奖
* 2022中国工程机器人大赛双足竟步二等奖
* 2022中国工程机器人大赛双足竟步二等奖
* 2022中国工程机器人大赛双足竟步二等奖
* 2022中国工程机器人大赛光电搬运三等奖
* 2022中国工程机器人大赛光电搬运二等奖
* 2022中国工程机器人大赛光电搬运二等奖
* 2022中国工程机器人大赛光电搬运二等奖
* 2023大学生创新创业大赛国家级立项
* 2023大学生创新创业大赛省级立项
* 2023中国工程机器人大赛三等奖
* 2023RoboMaster机甲大师超级对抗赛北部赛区二等奖
* 2023RoboMaster机甲大师超级对抗赛全国赛三等奖
* 2023RoboMaster机甲大师超级对抗赛步兵实战二等奖
* 2023RoboMaster机甲大师超级对抗赛哨兵实战二等奖
* 2023RoboMaster机甲大师超级对抗赛工程实战三等奖
* 2023RoboMaster机甲大师超级对抗赛英雄实战三等奖
* 2023RoboMaster机甲大师超级对抗赛飞镖实战三等奖
* 2023RoboMaster机甲大师高校联盟赛步兵对抗赛一等奖
* 2023RoboMaster机甲大师高校联盟赛步兵对抗赛步兵实战三等奖
* 2023RoboMaster机甲大师高校联盟赛3V3对抗赛一等奖
* 2023RoboMaster机甲大师高校联盟赛3V3对抗赛步兵实战三等奖
* 2023RoboMaster机甲大师高校联盟赛3V3对抗赛英雄实战三等奖
* 2023RoboMaster机甲大师高校联盟赛3V3对抗赛哨兵实战二等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞速)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞速)二等奖
* 2023山东省大学生智能技术应用设计大赛舞蹈机器人(单人舞蹈)二等奖
* 2023山东省大学生智能技术应用设计大赛舞蹈机器人(单人舞蹈)二等奖
* 2023山东省大学生智能技术应用设计大赛机甲大师（步兵对抗）二等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(单电机双足竞步)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(机器人搬运)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(机器人搬运)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(机器人搬运)二等奖
* 2023山东省大学生智能技术应用设计大赛机甲大师（3V3对抗）三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)三等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)二等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)二等奖
* 2023山东省大学生智能技术应用设计大赛工程机器人(双足竞步)二等奖
* 2023山东省大学生智能技术应用设计大赛舞蹈机器人(单人舞蹈)一等奖

{% include section.html %}