---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

- W. Shen, **Y. Ge (co-first)**, Z. Han, Y. Zhao\* and Y. Yang\*, Constructing wall turbulence using hierarchical hairpin vortices, *Physical Review Fluids*, 11, 044604, 2026. [<a href="https://doi.org/10.1103/q3gt-v8jm" target="_blank">paper</a>]


<p style="text-align: center;">
  <img src="{{ '/images/SWAT.jpg' | relative_url }}" alt="SWAT" style="width: 75%; max-width: 600px; height: auto;">
</p>

- **Y. Ge**, X. Zhu, Y. Fang and Y. Zhao\*, A machine-learning-enhanced four-equation model for predicting roughness induced transition, *AIAA Journal*, *Accepted*

<p style="text-align: center;">
  <img src="{{ '/images/roughRANS_ML.jpg' | relative_url }}" alt="SWAT" style="width: 75%; max-width: 600px; height: auto;">
</p>

- X. Zhu, **Y. Ge**, Y. Zhao\*, Z. Xiao and R. D. Sandberg, Boundary layer transition induced by surface roughness distributed over a low-pressure turbine blade, *Journal of Turbomachinery*, *In revision* [<a href="https://arxiv.org/abs/2510.22310" target="_blank">arXiv</a>]

<p style="text-align: center;">
  <img src="{{ '/images/roughDNS.jpg' | relative_url }}" alt="SWAT" style="width: 75%; max-width: 600px; height: auto;">
</p>

- **Y. Ge**, Y. Zhao\*, Turbulence Modelling for Rough-Wall Turbine Flows, *Aerospace Power*, 2, 49--53, 2024. [<a href="https://kns.cnki.net/kcms2/article/abstract?v=o8vMLOX1CKu3yWDkVmftidHRkIVaMIXl2zCErKQ1aq9V2Gbd8qUs1bK0vcBAQeral8QXr49st10yoe_49s9KzinoIdVLqVyVd8J16oJopS2xaXFZ7vrXAlZRiNRkXK-7CxDUny83X1W75e60uia88Q3Z4v5Sc5DwrFLj-cMoirXZvLFzi5LFdA==&uniplatform=NZKPT&language=CHS" target="_blank">paper</a>]

<p style="text-align: center;">
  <img src="{{ '/images/roughLPT.jpg' | relative_url }}" alt="SWAT" style="width: 30%; max-width: 600px; height: auto;">
</p>

<!-- - 葛宇辰，赵耀民. 粗糙壁面涡轮内流湍流模型[J]. 航空动力，2024(02): 49-53 [<a href="https://kns.cnki.net/kcms2/article/abstract?v=o8vMLOX1CKu3yWDkVmftidHRkIVaMIXl2zCErKQ1aq9V2Gbd8qUs1bK0vcBAQeral8QXr49st10yoe_49s9KzinoIdVLqVyVd8J16oJopS2xaXFZ7vrXAlZRiNRkXK-7CxDUny83X1W75e60uia88Q3Z4v5Sc5DwrFLj-cMoirXZvLFzi5LFdA==&uniplatform=NZKPT&language=CHS" target="_blank">paper</a>] -->

<!-- <div class="pub-entry">
  <img src="{{ '/images/mstile-144x144.png' | relative_url }}" alt="Rough turbine model" class="pub-img">

  <div class="pub-info">
    <h2>葛宇辰，赵耀民. 粗糙壁面涡轮内流湍流模型[J]. 航空动力, 2024, (02):49-53</h2>
    <p>
      <a href="{{ page.paperurl }}" class="btn btn-primary">📄 下载论文</a>
    </p>
  </div>
</div> -->

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
