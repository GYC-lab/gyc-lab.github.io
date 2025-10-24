---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# 👋 **Hello, everyone!**

I am a fourth-year Ph.D. student in Fluid Mechanics at Peking University.
Previously, I received my bachelor’s degree in Aerocraft Design and Engineering from Northwestern Polytechnical University.

My research focuses on Computational Fluid Mechanics (CFD), particularly in turbulence synthesis and modeling in wall-bounded flows.

$$
\frac{\partial \boldsymbol{u}}
  {\partial t}  + 
  \boldsymbol{u} \cdot   \nabla \boldsymbol{u} = - \frac{1}{\rho } \nabla  p + \nu \nabla ^2 \boldsymbol{u} + \boldsymbol{f}
$$

Let's expore the world!

### 📰 **News**

- **Aug 2025** — Oral presentation at *2nd European Fluid Dynamics Conference*, Dublin, Ireland
- **Jul 2025** — Oral presentation at *Chinese Congress of Theoretical and Applied Mechanics - 2025*, Changsha, China
- **Aug 2024** — Oral presentation at *13th National Conference on Fluid Mechanics*, Harbin, China
- **Jun 2024** — Oral presentation at *19th OpenFOAM Workshop*, Beijing, China  

---

### 🛠️ **Projects**



---

### 🎓 **Education**

<style>
  .edu-list {
    margin-left: 0.6em; /* 与 markdown 列表缩进匹配 */
  }
  .edu-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.8rem;
  }
  .edu-bullet {
    width: 1.0em;  /* bullet宽度与markdown一致 */
    text-align: center;
    font-size: 1.6em; /* 控制圆点大小 */
    line-height: 1.5;
    color: #444; /* 稍微灰一点 */
    margin-top: 0.3em; /* 微调垂直位置 */
  }
  .edu-logo {
    width: 40px;
    height: 40px;
    margin: 0 10px 0 6px; /* 与文字保持间距 */
  }
</style>

<div class="edu-list">
  <div class="edu-item">
    <div class="edu-bullet">•</div>
    <img class="edu-logo" src="/images/pku_logo.png" alt="Peking University">
    <div>
      <strong>Ph.D.</strong>, Fluid Mechanics, Peking University<br>
      <small>2022–Present</small>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-bullet">•</div>
    <img class="edu-logo" src="/images/nwpu_logo.png" alt="Northwestern Polytechnical University">
    <div>
      <strong>B.E.</strong>, Aerocraft Design and Engineering, Northwestern Polytechnical University<br>
      <small>2018–2022</small>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-bullet">•</div>
    <img class="edu-logo" src="/images/zjzj_logo.png" alt="Zhejiang Zhuji Middle School">
    <div>
      <strong>High School</strong>, Zhejiang Zhuji Middle School<br>
      <small>2015–2018</small>
    </div>
  </div>
</div>

---

### 📘 **Teaching**

- **Spring 2024** — *Teaching Assistant*, **Computational Fluid Mechanics**, College of Engineering, Peking University

---

### 🏆 **Honors & Awards**

- **2022** — Excellent Graduate
- **2021** — National Scholarship
- **2021** — Finalist, Mathematical Contest in Modeling
- **2020** — Aviation Industry Corporation (First-Class) Special Scholarship
- **2020** — Team First Prize, 2020 China International Aircraft Design Challenge (CADC)
- **2019** — Kewei (Kewei Aerospace Technology Group Co., Ltd) Scholarship

---

<p id="localtime" style="font-size:0.9em; color:gray;"></p>
<script>
(function () {
  function updateTime() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Shanghai',
        hour12: false,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const timeString = now.toLocaleString('en-US', options);
      var el = document.getElementById('localtime');
      if (el) el.textContent = '🕒 Local time: ' + timeString;
    } catch (e) {
      // 少数极旧浏览器不支持 timeZone 参数：退化到本地时间
      var el = document.getElementById('localtime');
      if (el) el.textContent = '🕒 Local time: ' + new Date().toLocaleString();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateTime();
      setInterval(updateTime, 1000);
    });
  } else {
    updateTime();
    setInterval(updateTime, 1000);
  }
})();
</script>

{% raw %}
<div id="clustrmaps-widget" style="width:100%;margin:0.5rem 0;">
  <script id="clustrmaps"
          src="https://cdn.clustrmaps.com/map_v2.js?d=iqd9kZ8IQ98udYDlxAuY6xF5gSJe3u_aF6WZy-8p0LU&cl=ffffff&w=a&t=tt"
          async></script>
</div>
{% endraw %}
