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

- **[2025/08]** Oral presentation at *2nd European Fluid Dynamics Conference*, Dublin, Ireland (Aug 26–29, 2025)  
- **[2024/06]** Oral presentation at *19th OpenFOAM Workshop*, Beijing, China (Jun 25–28, 2024)

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
