import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ClockAndCalendarProps {
  currentLang: Language;
}

export const ClockAndCalendar: React.FC<ClockAndCalendarProps> = ({ currentLang }) => {
  const [now, setNow] = useState<Date>(new Date());
  const [monthOffset, setMonthOffset] = useState<number>(0);

  const t = TRANSLATIONS[currentLang].calendar;

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const displayDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const displayYear = displayDate.getFullYear();
  const displayMonth = displayDate.getMonth(); // 0-indexed

  // Today's details
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Month names for Turkish & English
  const monthNamesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNamesTr = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

  const getMonthHeading = () => {
    if (currentLang === 'zh') return `${displayYear}年 ${displayMonth + 1}月`;
    if (currentLang === 'tr') return `${monthNamesTr[displayMonth]} ${displayYear}`;
    return `${monthNamesEn[displayMonth]} ${displayYear}`;
  };

  const getTodayFormatted = () => {
    if (currentLang === 'zh') return `${year}年${month}月${date}日 ${t.weekdays[now.getDay()]}`;
    if (currentLang === 'tr') return `${date} ${monthNamesTr[month - 1]} ${year} · ${t.weekdays[now.getDay()]}`;
    return `${monthNamesEn[month - 1]} ${date}, ${year} · ${t.weekdays[now.getDay()]}`;
  };

  // Generate days in month
  const firstDayOfWeek = new Date(displayYear, displayMonth, 1).getDay(); // 0 is Sun
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();

  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  const isCurrentMonth = monthOffset === 0;

  return (
    <section className="side-card calendar-card" aria-label={t.eyebrow}>
      <div className="calendar-topline">
        <span className="eyebrow">
          <Clock size={12} strokeWidth={2} />
          <span>{t.eyebrow}</span>
        </span>
        <span className="live-dot" title={t.live}></span>
      </div>

      <div className="clock-display">
        <Clock size={17} strokeWidth={1.6} />
        <time>
          {hours}:{minutes}:{seconds}
        </time>
      </div>

      <div className="today-date">
        <span>{getTodayFormatted()}</span>
        <span className="text-[10px] text-[#9f382d] font-mono">
          {currentLang === 'zh' ? '【美育日历】' : currentLang === 'tr' ? '【CANLI】' : '【LIVE】'}
        </span>
      </div>

      <div className="month-heading">
        <span>{getMonthHeading()}</span>
        <div className="month-controls">
          <button
            type="button"
            className="month-btn"
            onClick={() => setMonthOffset(prev => prev - 1)}
            aria-label="Previous Month"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            className="month-btn"
            onClick={() => setMonthOffset(0)}
            aria-label="Today"
            title="Today"
          >
            <span className="text-[9px] font-mono font-bold">{t.todayTag}</span>
          </button>
          <button
            type="button"
            className="month-btn"
            onClick={() => setMonthOffset(prev => prev + 1)}
            aria-label="Next Month"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="calendar-grid calendar-weekdays">
        {t.weekdays.map((w, idx) => (
          <span key={idx}>{w}</span>
        ))}
      </div>

      <div className="calendar-grid calendar-days">
        {calendarCells.map((day, idx) => {
          const isToday = isCurrentMonth && day === now.getDate();
          return (
            <span key={idx} className={isToday ? 'today' : ''}>
              {day || ''}
            </span>
          );
        })}
      </div>

      <div className="calendar-foot">
        <div className="flex items-center gap-1.5">
          <span></span>
          <span>{t.localTimeFooter}</span>
        </div>
        <span className="text-[7px] text-[#9a907f] font-mono">
          24H
        </span>
      </div>
    </section>
  );
};
