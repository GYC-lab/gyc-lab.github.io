document.addEventListener('DOMContentLoaded', () => {
    const timeFmt = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' };
  
    function normalizeOffset(gmt) {
      const m = gmt.replace('UTC', 'GMT').match(/^GMT([+-])(\d{1,2})(?::?(\d{2}))?$/);
      if (!m) return '+00:00';
      const sign = m[1];
      const hh = String(parseInt(m[2], 10)).padStart(2, '0');
      const mm = String(m[3] ? parseInt(m[3], 10) : 0).padStart(2, '0');
      return `${sign}${hh}:${mm}`;
    }
  
    function getOffset(tz, date) {
      try {
        const parts = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'shortOffset' })
          .formatToParts(date);
        const tzName = parts.find(p => p.type === 'timeZoneName')?.value || 'GMT+0';
        return normalizeOffset(tzName);
      } catch {
        return '+00:00';
      }
    }
  
    function tick() {
      const now = new Date();
      document.querySelectorAll('.author-localtime').forEach(el => {
        const tz = el.dataset.tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
        const time = new Intl.DateTimeFormat([], { ...timeFmt, timeZone: tz }).format(now);
        const offset = getOffset(tz, now);
        const span = el.querySelector('.time');
        if (span) span.textContent = `${time}`;
      });
    }
  
    tick();
    setInterval(tick, 60000);
  });
  