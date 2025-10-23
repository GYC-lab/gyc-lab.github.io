---
permalink: /
title: "Hello everyone!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

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

### 🏆 **Honors & Awards**

- **2022** — Excellent Graduate
- **2021** — National Scholarship
- **2021** — Finalist, Mathematical Contest in Modeling
- **2020** — Aviation Industry Corporation (First-Class) Special Scholarship
- **2020** — Team First Prize, 2020 China International Aircraft Design Challenge (CADC)
- **2019** — Kewei (Kewei Aerospace Technology Group Co., Ltd) Scholarship

### 🎓 **Education**

- **2022–Present** — **Ph.D.**, Fluid Mechanics, Peking University  
- **2018–2022** — **B.E.**, Aerocraft Design and Engineering, Northwestern Polytechnical University  
- **2015–2018** — **High School**, Zhejiang Zhuji Middle School

---

### 📘 **Teaching**

- **Spring 2024** — *Teaching Assistant*, **Computational Fluid Mechanics**, College of Engineering, Peking University  

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

<div id="clustrmaps-widget" style="max-width:520px;margin:0.5rem 0;">
  <script type="text/javascript" id="clustrmaps"
          src="//cdn.clustrmaps.com/map_v2.js?d=iqd9kZ8IQ98udYDlxAuY6xF5gSJe3u_aF6WZy-8p0LU&cl=ffffff&w=a&t=tt">
  </script>
  <noscript>
    <a href="https://clustrmaps.com/site/1c8ae" title="ClustrMaps">
      <img src="//www.clustrmaps.com/map_v2.png?d=iqd9kZ8IQ98udYDlxAuY6xF5gSJe3u_aF6WZy-8p0LU&cl=ffffff" alt="ClustrMaps" />
    </a>
  </noscript>
</div>
