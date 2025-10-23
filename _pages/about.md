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

<p id="localtime" style="font-size:0.9em; color:gray;"></p>
<script>
function updateTime() {
  const now = new Date();
  // 以北京时间（UTC+8）为例
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
  document.getElementById('localtime').textContent = '🕒 Local time: ' + timeString;
}
updateTime();
setInterval(updateTime, 1000);
</script>
