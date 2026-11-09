/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TeacherSidebar } from './components/TeacherSidebar';
import { ClockAndCalendar } from './components/ClockAndCalendar';
import { QuotesSidebar } from './components/QuotesSidebar';
import { UnifiedVideoSection } from './components/UnifiedVideoSection';
import { GamesSection } from './components/GamesSection';
import { ChapterSection } from './components/ChapterSection';
import { Language, LANGUAGES, TRANSLATIONS } from './i18n/translations';
import { Globe, ArrowRight, Film, Gamepad2, BookOpen, Check } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('zh');
  const [activeSection, setActiveSection] = useState<string>('video');
  const [showLangMenu, setShowLangMenu] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLang];

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    setShowLangMenu(false);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="site-shell" data-language={currentLang}>
      {/* 1. Left Sidebar: Visual Arts Teachers Zone (226px) */}
      <TeacherSidebar
        currentLang={currentLang}
        activeSection={activeSection}
        onSelectSection={(id) => setActiveSection(id)}
      />

      {/* 2. Center Column: Main Content Area */}
      <main className="main-content" id="home">
        {/* Page Header Bar with 3-Language Switcher */}
        <header className="page-header">
          <div className="breadcrumb">
            <span>{t.header.breadcrumbRoot}</span>
            <i>/</i>
            <strong>{t.header.teacherZone}</strong>
          </div>

          <div className="header-actions">
            {/* Multilingual Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-xs bg-[#fbf8f0] border border-[rgba(86,71,51,0.18)] hover:border-[#9f382d] text-[#302e28] transition-all cursor-pointer font-serif"
                aria-label={t.header.changeLang}
              >
                <Globe size={14} className="text-[#9f382d]" />
                <span>{LANGUAGES.find(l => l.code === currentLang)?.nativeName}</span>
                <span className="text-[10px] text-[#9a907f] font-mono uppercase">
                  [{currentLang}]
                </span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-1 w-36 bg-[#fbf8f0] border border-[rgba(86,71,51,0.2)] rounded-xs shadow-lg py-1 z-50 animate-scale-up font-serif">
                  <div className="px-3 py-1 text-[9px] font-mono text-[#9a907f] uppercase border-b border-[rgba(86,71,51,0.1)]">
                    {t.header.changeLang}
                  </div>
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        currentLang === lang.code
                          ? 'bg-[#9f382d]/10 text-[#9f382d] font-bold'
                          : 'text-[#302e28] hover:bg-stone-200/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          lang.code === 'zh' ? 'bg-[#9f382d]' : lang.code === 'tr' ? 'bg-[#317876]' : 'bg-[#526786]'
                        }`}></span>
                        <span>{lang.nativeName}</span>
                      </span>
                      {currentLang === lang.code && <Check size={13} className="text-[#9f382d]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Header Badge - Clean Aesthetic Motto, No School/Edition Repetition */}
            <div className="header-note">
              <span className="header-seal">美</span>
              <span className="font-serif text-[#6d665a]">
                {t.header.badge}
              </span>
            </div>
          </div>
        </header>

        {/* Clean, Non-overlapping Hero Banner */}
        <section className="hero-panel" aria-label={t.hero.titleLead}>
          {/* Horizontal Text Column on Left */}
          <div className="hero-copy">
            <div className="hero-kicker">
              <span></span>
              <span>{t.hero.kicker}</span>
            </div>

            <h1>
              {t.hero.titleLead}<em>{t.hero.titleAccent}</em>
            </h1>

            <p>
              {t.hero.description}
            </p>

            {/* Quick Navigation Anchors */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollTo('video')}
                className="hero-link cursor-pointer"
              >
                <Film size={12} />
                <span>{t.hero.btnVideo}</span>
                <ArrowRight size={13} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('chapters')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs bg-white/85 border border-[rgba(86,71,51,0.2)] text-[#302e28] hover:bg-white transition-colors cursor-pointer font-serif"
              >
                <BookOpen size={13} className="text-[#1e5084]" />
                <span>{t.hero.btnChapters}</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('games')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs bg-white/85 border border-[rgba(86,71,51,0.2)] text-[#302e28] hover:bg-white transition-colors cursor-pointer font-serif"
              >
                <Gamepad2 size={13} className="text-[#9f382d]" />
                <span>{t.hero.btnGames}</span>
              </button>
            </div>
          </div>

          {/* Artistic Mountain/Sun Visual strictly confined to the right */}
          <div className="hero-art" aria-hidden="true">
            <span className="hero-sun"></span>
            <span className="hero-cloud" style={{ top: '24%', right: '35%' }}></span>
            <span className="hero-cloud" style={{ top: '38%', right: '14%', width: '85px' }}></span>
            <span className="hero-mountain hero-mountain-a"></span>
            <span className="hero-mountain hero-mountain-b"></span>
            <span className="hero-mountain hero-mountain-c"></span>
            <span className="hero-river"></span>
            <span className="hero-poem">{t.hero.poem}</span>
          </div>

          <span className="hero-index">VOL.01 · ART</span>
        </section>

        {/* 1. Unified Comprehensive Video Section */}
        <UnifiedVideoSection currentLang={currentLang} />

        {/* 2. Five-Part Chapter Syllabus Section */}
        <ChapterSection currentLang={currentLang} />

        {/* 3. Educational Art Games Section */}
        <GamesSection currentLang={currentLang} />

        {/* Clean Aesthetic Footer */}
        <footer className="mt-12 pt-6 pb-4 border-t border-[rgba(73,64,50,0.13)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#9a907f] font-mono">
          <span>{t.footer.book}</span>
          <span>{t.footer.motto}</span>
        </footer>
      </main>

      {/* 3. Right Rail: Real-time Clock, Calendar, and Chinese Art Quotes Section (300px) */}
      <aside className="right-rail">
        {/* Clock & Interactive Calendar */}
        <ClockAndCalendar currentLang={currentLang} />

        {/* Chinese Art & Education Quotes */}
        <QuotesSidebar currentLang={currentLang} />
      </aside>
    </div>
  );
}
