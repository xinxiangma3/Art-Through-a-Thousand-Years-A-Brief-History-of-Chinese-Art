import React, { useState, useRef } from 'react';
import { 
  Play, 
  Sparkles, 
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  RotateCcw,
  Compass,
  Layers,
  Award,
  Sparkle
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface GamesSectionProps {
  currentLang: Language;
}

export const GamesSection: React.FC<GamesSectionProps> = ({ currentLang }) => {
  // Main game state
  const [isMainGameOpen, setIsMainGameOpen] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang].gamesSection;

  const handleToggleMainGame = () => {
    setIsMainGameOpen(prev => !prev);
    if (!isMainGameOpen) {
      setTimeout(() => {
        const el = document.getElementById('main-game-stage');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleReloadGame = () => {
    setIframeKey(prev => prev + 1);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  return (
    <section id="games" className="mb-14 scroll-mt-6" aria-label={t.titleLead}>
      {/* 1. SECTION TITLE & MINERAL PIGMENT PHILOSOPHY BANNER */}
      <div className="section-heading">
        <div>
          <div className="section-overline flex items-center gap-1.5 text-[#9f382d]">
            <Sparkles size={13} />
            <span>{t.overline}</span>
          </div>
          <h2 className="font-serif">
            {t.titleLead}<em>{t.titleAccent}</em>
          </h2>
          <p className="font-serif text-[#6d665a] max-w-2xl">{t.subtitle}</p>
        </div>

        {/* Traditional Mineral Pigment Swatches in Header */}
        <div className="hidden md:flex items-center gap-2 p-1.5 bg-[#fbf8f0] border border-[rgba(86,71,51,0.15)] rounded-xs">
          <div className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-serif text-[#9f382d]">
            <span className="w-2 h-2 rounded-full bg-[#9f382d]"></span>
            <span>朱砂</span>
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-serif text-[#1e5084]">
            <span className="w-2 h-2 rounded-full bg-[#1e5084]"></span>
            <span>石青</span>
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-serif text-[#2c8853]">
            <span className="w-2 h-2 rounded-full bg-[#2c8853]"></span>
            <span>石绿</span>
          </div>
        </div>
      </div>

      {/* 2. CORE MASTERPIECE GAME: 探索中国美术史 / Çin Sanat Tarihi Keşfi */}
      <div 
        ref={gameContainerRef}
        className={`relative transition-all ${
          isFullscreen 
            ? 'fixed inset-0 z-50 bg-[#1c1917]/95 p-3 md:p-6 overflow-y-auto flex flex-col justify-center'
            : ''
        }`}
      >
        {/* Exterior UI: Mineral Pigment Framing Showcase Card */}
        <div className="bg-[#fbf8f0] border border-[rgba(86,71,51,0.2)] rounded-xs shadow-md overflow-hidden">
          {/* Mineral Top Tri-Color Decorative Accent Strip */}
          <div className="grid grid-cols-3 h-1.5 w-full">
            <div className="bg-[#9f382d]" title="朱砂 Cinnabar" />
            <div className="bg-[#1e5084]" title="石青 Azurite" />
            <div className="bg-[#2c8853]" title="石绿 Malachite" />
          </div>

          {/* Exterior UI Header: Title, Description, Period Badges & Launch Controls */}
          <div className="p-5 md:p-6 bg-gradient-to-b from-[#fbf8f0] to-[#f4efe3]/60 border-b border-[rgba(86,71,51,0.15)]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
              <div className="max-w-2xl">
                {/* Badge & Category */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#9f382d]/10 text-[#9f382d] border border-[#9f382d]/30 text-[10px] font-bold font-serif rounded-xs flex items-center gap-1">
                    <Sparkle size={10} className="fill-current" />
                    <span>{t.mainGame.badge}</span>
                  </span>
                  <span className="text-[10px] text-[#6d665a] font-mono uppercase tracking-wider">
                    COMPREHENSIVE ADVENTURE
                  </span>
                </div>

                {/* Main Game Title */}
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#302e28] tracking-wide">
                    {t.mainGame.name}
                  </h3>
                  <span className="text-xs font-mono text-[#8e493e]">
                    {t.mainGame.originalName}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs font-serif font-semibold text-[#1e5084] mt-1.5 flex items-center gap-1.5">
                  <Compass size={13} className="text-[#1e5084]" />
                  <span>{t.mainGame.tagline}</span>
                </p>

                {/* Detailed Description */}
                <p className="text-xs font-serif text-[#554e42] leading-relaxed mt-2">
                  {t.mainGame.description}
                </p>

                {/* 9 Historical Periods List */}
                <div className="mt-3 pt-3 border-t border-[rgba(86,71,51,0.1)]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold font-serif text-[#302e28] mb-1.5">
                    <Layers size={11} className="text-[#1e5084]" />
                    <span>{t.mainGame.periodsTitle}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.mainGame.periods.map((period, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-serif bg-white/90 border border-[rgba(86,71,51,0.15)] text-[#443e33] rounded-xs shadow-2xs hover:border-[#1e5084] transition-colors"
                      >
                        <strong className="text-[#9f382d] font-mono mr-1">0{idx + 1}.</strong>
                        {period}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5 Core Interactive Modules */}
                <div className="mt-2.5 flex items-center gap-2 flex-wrap text-[10px] font-serif text-[#554e42]">
                  <div className="flex items-center gap-1 font-bold text-[#2c8853]">
                    <Award size={12} className="text-[#2c8853]" />
                    <span>{t.mainGame.featuresTitle}</span>
                  </div>
                  {t.mainGame.features.map((feat, idx) => (
                    <span 
                      key={idx}
                      className="px-1.5 py-0.5 bg-[#2c8853]/10 text-[#2c8853] rounded-xs border border-[#2c8853]/20"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="flex flex-row lg:flex-col items-center gap-2.5 shrink-0">
                {/* Main Cinnabar Play / Close Button */}
                <button
                  type="button"
                  onClick={handleToggleMainGame}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#9f382d] hover:bg-[#792c25] text-white text-xs font-serif font-bold rounded-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play size={13} className="fill-current" />
                  <span>{isMainGameOpen ? t.mainGame.btnClose : t.mainGame.btnPlay}</span>
                  {isMainGameOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {isMainGameOpen && (
                  <div className="flex items-center gap-2 w-full justify-end">
                    {/* Fullscreen Button */}
                    <button
                      type="button"
                      onClick={handleToggleFullscreen}
                      className="p-2 bg-white/90 border border-[rgba(86,71,51,0.2)] hover:border-[#1e5084] text-[#1e5084] text-xs rounded-xs transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                      title={t.mainGame.btnFullscreen}
                    >
                      {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                      <span className="hidden sm:inline font-serif text-[11px]">{t.mainGame.btnFullscreen}</span>
                    </button>

                    {/* Reload Button */}
                    <button
                      type="button"
                      onClick={handleReloadGame}
                      className="p-2 bg-white/90 border border-[rgba(86,71,51,0.2)] hover:border-[#2c8853] text-[#2c8853] text-xs rounded-xs transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                      title={t.mainGame.btnReload}
                    >
                      <RotateCcw size={13} />
                      <span className="hidden sm:inline font-serif text-[11px]">{t.mainGame.btnReload}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Game Mounting Stage */}
          {isMainGameOpen && (
            <div id="main-game-stage" className="relative bg-[#f5efe0] animate-fade-in transition-all">
              {/* Mineral Pigment Frame Header Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#1e5084] text-white text-xs font-serif border-b border-[#17426b]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-xs bg-[#9f382d] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
                    美
                  </span>
                  <span className="font-semibold tracking-wider">
                    {t.mainGame.name} · {t.mainGame.originalName}
                  </span>
                  <span className="hidden sm:inline text-[10px] text-white/70 font-mono">
                    | 9 PERIODS · FULL INTERACTIVE
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>ONLINE ACTIVE</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleToggleFullscreen}
                    className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                  >
                    {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
                  </button>
                </div>
              </div>

              {/* Exact Embedded Game Iframe (Original Code & Logic 100% Intact) */}
              <div className="relative w-full overflow-hidden bg-[#f5efe0]">
                <iframe
                  key={iframeKey}
                  src="/assets/aistudio/zhongguo_meishushi_game__2__46608a02.html"
                  title="探索中国美术史 / Çin Sanat Tarihi Keşfi"
                  className="w-full h-[760px] md:h-[820px] border-0 block"
                  allow="autoplay; fullscreen"
                />
              </div>

              {/* Frame Footer Caption & Mineral Harmony Note */}
              <div className="px-4 py-2.5 bg-[#fbf8f0] border-t border-[rgba(86,71,51,0.15)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#786f60] font-serif">
                <span>{t.mainGame.mineralPaletteNote}</span>
                <span className="font-mono text-[#9f382d]">
                  朱砂 (#9f382d) · 石青 (#1e5084) · 石绿 (#2c8853)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
