import React from 'react';
import { Film, BookOpen, Gamepad2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface TeacherSidebarProps {
  currentLang: Language;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const TeacherSidebar: React.FC<TeacherSidebarProps> = ({
  currentLang,
  activeSection,
  onSelectSection,
}) => {
  const t = TRANSLATIONS[currentLang];

  const teacherNavItems = [
    {
      id: 'video',
      label: t.nav.overviewVideo,
      helper: t.nav.overviewVideoHelper,
      icon: Film,
      href: '#video',
    },
    {
      id: 'chapters',
      label: t.nav.chapters,
      helper: t.nav.chaptersHelper,
      icon: BookOpen,
      href: '#chapters',
    },
    {
      id: 'games',
      label: t.nav.games,
      helper: t.nav.gamesHelper,
      icon: Gamepad2,
      href: '#games',
    },
  ];

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="teacher-sidebar">
      {/* Brand header */}
      <a
        className="brand"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label={t.brand.name}
      >
        <span className="brand-mark">美</span>
        <span className="brand-name">
          <span>{t.brand.name}</span>
          <small>{t.brand.subtitle}</small>
        </span>
      </a>

      {/* Sidebar Label */}
      <div className="sidebar-label">
        <span>{t.nav.title}</span>
        <span>{t.nav.eyebrow}</span>
      </div>

      {/* Clean Navigation Links */}
      <nav className="teacher-nav" aria-label={t.nav.title}>
        {teacherNavItems.map(item => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`teacher-link ${isActive ? 'active' : ''}`}
            >
              <span className="teacher-link-icon">
                <Icon size={17} strokeWidth={1.7} />
              </span>
              <span className="teacher-link-copy">
                <span>{item.label}</span>
                <small>{item.helper}</small>
              </span>
              <span className="text-[10px] text-[#2c8853] font-mono">
                •
              </span>
            </button>
          );
        })}
      </nav>

      {/* Platform Theme Badge without repetitive textbook metadata */}
      <div className="mt-5 p-2.5 bg-[#fbf8f0] border border-[rgba(86,71,51,0.12)] rounded-xs text-[10px] text-[#6d665a] font-serif leading-relaxed">
        <div className="font-bold text-[#302e28] mb-0.5">
          {t.brand.name} · {t.brand.subtitle}
        </div>
        <div className="text-[9px] text-[#9f382d]">
          {t.brand.tagline}
        </div>
        <div className="text-[8px] text-[#9a907f] font-mono mt-1">
          {t.brand.overviewLabel}
        </div>
      </div>

      {/* Sidebar Bottom Motto Stamp */}
      <div className="sidebar-bottom">
        <div className="sidebar-stamp">
          美<br />术
        </div>
        <p>
          {t.nav.mottoTop}<br />{t.nav.mottoBottom}
        </p>
        <span>{t.nav.mottoFooter}</span>
      </div>
    </aside>
  );
};
