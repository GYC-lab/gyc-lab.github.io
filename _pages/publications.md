---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

- W. Shen, **Y. Ge** (共同一作) , Z. Han, Y. Zhao* and Y. Yang*, Constructing wall turbulence using hierarchically attached hairpin vortices, **Journal of Fluid Mechanics** (待投稿)
- **Y. Ge**, X. Zhu, Y. Fang and Y. Zhao*, Predicting laminar-turbulent transition in rough-wall turbine blades with a four-equation transition model, **AIAA Journal** (待投稿)
- X. Zhu, **Y. Ge**, Y. Zhao*, Z. Xiao and R. D. Sandberg, Boundary layer transition induced by surface roughness distributed over a low-pressure turbine blade, **Journal of Fluid Mechanics**, Under review
- **葛宇辰**，赵耀民. 粗糙壁面涡轮内流湍流模型[J]. **航空动力**,2024,(02):49-53.
- 胡轩豪，葛宇辰，何如玢,等.高校毕业生在国防军工企业就业情况的调查分析[J].人才资源开发,2020,(13):48-49.