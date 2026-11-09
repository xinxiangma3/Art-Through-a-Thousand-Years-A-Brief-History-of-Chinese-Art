import React, { useState } from 'react';
import { BookOpen, Layers, Award, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { CHAPTERS_MULTILINGUAL, MultilingualChapter } from '../data/chapters';

interface ChapterSectionProps {
  currentLang: Language;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].chaptersSection;
  const [expandedId, setExpandedId] = useState<string>('ch1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="chapters" className="mb-12 scroll-mt-6" aria-label={t.titleLead}>
      {/* Section Header */}
      <div className="section-heading">
        <div className="w-full">
          <div className="section-overline flex items-center gap-1.5 text-[#1e5084]">
            <BookOpen size={13} />
            <span>{t.overline}</span>
          </div>
          <h2 className="font-serif">
            {t.titleLead}<em>{t.titleAccent}</em>
          </h2>
          <p className="font-serif text-[#6d665a]">{t.subtitle}</p>
          
          {/* Small note indicating source textbook */}
          <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 bg-[#fbf8f0] border border-[rgba(86,71,51,0.18)] rounded-xs text-[11px] text-[#7a483e] font-serif shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9f382d] shrink-0"></span>
            <span>{t.sourceNote}</span>
          </div>
        </div>
      </div>

      {/* 5 Chapters Accordion / List */}
      <div className="space-y-3">
        {CHAPTERS_MULTILINGUAL.map(ch => {
          const isExpanded = expandedId === ch.id;
          return (
            <div
              key={ch.id}
              className="border border-[rgba(86,71,51,0.14)] rounded-xs bg-[#fbf8f0] overflow-hidden transition-all shadow-2xs hover:border-[rgba(86,71,51,0.28)]"
            >
              <button
                type="button"
                onClick={() => toggleExpand(ch.id)}
                className="w-full text-left p-3.5 flex items-center justify-between hover:bg-[#f7f2e7]/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-xs bg-[#9f382d]/10 text-[#9f382d]">
                    {ch.number[currentLang]}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-[#302e28]">
                      {ch.title[currentLang]}
                    </h3>
                    <span className="text-[10px] text-[#766e60] font-mono">
                      {ch.period[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#766e60]">
                  <span className="text-[10px] font-mono hidden sm:inline">
                    {ch.representativeWorks[currentLang].length} {currentLang === 'zh' ? '件珍品' : currentLang === 'tr' ? 'eser' : 'works'}
                  </span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-4 pt-2 border-t border-[rgba(86,71,51,0.1)] bg-white text-xs space-y-3 animate-fade-in font-serif">
                  {/* Key Points */}
                  <div>
                    <span className="text-[10px] font-bold text-[#8e493e] font-mono uppercase tracking-wider block mb-1.5">
                      {t.keyPointsLabel}
                    </span>
                    <ul className="space-y-1 text-[#474238] text-[11px] leading-relaxed">
                      {ch.keyPoints[currentLang].map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1e5084] mt-1.5 shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Representative Works */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[10px] font-bold text-[#2c8853] font-mono uppercase tracking-wider block mb-1.5">
                      {t.worksLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ch.representativeWorks[currentLang].map((w, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-xs text-[10px] bg-[#f7f2e7] text-[#554e42] border border-[rgba(86,71,51,0.15)]"
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
