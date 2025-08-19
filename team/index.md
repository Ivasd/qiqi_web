---
title: 成员
nav:
  order: 3
  tooltip: 关于我们
---

# {% include icon.html icon="fa-solid fa-users" %}2 赛季团队成员
{% include search-box.html %}
{% include search-info.html %}
历史成员请参考[历届成员](/team/history)。

{% include section.html %}

## {% include icon.html icon="fa-solid fa-users" %}指导老师

{% include list_portrait.html data="members" component="portrait" filters="role: 指导老师" %}

## {% include icon.html icon="fa-solid fa-users" %}团队负责人
{% include list_portrait.html data="members" component="portrait" filters="type: 25赛季团队负责人, time: 25 " %}

## {% include icon.html icon="fa-solid fa-users" %}机械组
  
{% include list_portrait.html data="members" component="portrait" filters="role: 机械组, time: 25" style="small" %}

## {% include icon.html icon="fa-solid fa-users" %}电控组

{% include list_portrait.html data="members" component="portrait" filters="role: 电控组, time: 25" style="small" %}

## {% include icon.html icon="fa-solid fa-users" %}算法组

{% include list_portrait.html data="members" component="portrait" filters="role: 算法组, time: 25" style="small" %}
## {% include icon.html icon="fa-solid fa-users" %}运营组

{% include list_portrait.html data="members" component="portrait" filters="role: 运营组, time: 25" style="small" %}

## {% include icon.html icon="fa-solid fa-users" %}梯队

{% include list_portrait.html data="members" component="portrait" filters="echelon: 25" style="tiny" %}


{% include section.html %}

{% capture content %}



{% endcapture %}

{% include grid.html style="square" content=content %}

# 杰出人物

{% include list_portrait.html data="members" component="portrait" filters="type: 杰出人物" %}