import React, { useState } from 'react';
import { ART_QUOTES, getRandomQuote, ArtQuote } from '../data/quotes';
import { RefreshCw, Copy, Check, Bookmark } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface QuotesSidebarProps {
  currentLang: Language;
}

export const QuotesSidebar: React.FC<QuotesSidebarProps> = ({ currentLang }) => {
  const [currentQuote, setCurrentQuote] = useState<ArtQuote>(() => getRandomQuote());
  const [copied, setCopied] = useState<boolean>(false);
  const [showAllQuotes, setShowAllQuotes] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLang].quotesSection;

  const handleNextQuote = () => {
    let next = getRandomQuote();
    if (ART_QUOTES.length > 1 && next.id === currentQuote.id) {
      const others = ART_QUOTES.filter(q => q.id !== currentQuote.id);
      next = others[Math.floor(Math.random() * others.length)];
    }
    setCurrentQuote(next);
  };

  const handleCopyQuote = () => {
    const quoteText = currentQuote.quote[currentLang] || currentQuote.quote.zh;
    const authorText = currentQuote.author[currentLang] || currentQuote.author.zh;
    const sourceText = currentQuote.source[currentLang] || currentQuote.source.zh;
    const text = `“${quoteText}” —— ${authorText} 【${sourceText}】`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeQuoteText = currentQuote.quote[currentLang] || currentQuote.quote.zh;
  const activeAuthorText = currentQuote.author[currentLang] || currentQuote.author.zh;
  const activeSourceText = currentQuote.source[currentLang] || currentQuote.source.zh;
  const activeRoleText = currentQuote.role[currentLang] || currentQuote.role.zh;
  const activeEraText = currentQuote.dynastyOrEra[currentLang] || currentQuote.dynastyOrEra.zh;
  const activeInsightText = currentQuote.insight[currentLang] || currentQuote.insight.zh;

  return (
    <section className="quotes-section" aria-label={t.eyebrow}>
      <div className="rail-title">
        <span>{t.eyebrow}</span>
        <button
          type="button"
          onClick={handleNextQuote}
          className="flex items-center gap-1 text-[9px] text-[#9f382d] hover:text-[#792c25] cursor-pointer"
          title={t.refreshBtn}
        >
          <RefreshCw size={11} />
          <span>{t.refreshBtn}</span>
        </button>
      </div>

      <h2>
        {t.titleLead}<em>{t.titleAccent}</em>
      </h2>

      {/* Featured Quote Card */}
      <article className="quote-card">
        <div className="quote-mark">“</div>
        <p className="quote-cn font-serif">
          {activeQuoteText}
        </p>

        {currentLang !== 'zh' && currentQuote.quote.zh && (
          <p className="quote-tr">
            <span className="text-[#9f382d] font-semibold not-italic mr-1">CN:</span>
            {currentQuote.quote.zh}
          </p>
        )}

        <div className="quote-attribution">
          <strong>
            {activeAuthorText}
          </strong>
          <span>
            {activeSourceText} · {activeRoleText}
          </span>
        </div>

        {/* Insight note */}
        <div className="mt-3 pt-2.5 border-t border-[rgba(86,71,51,0.08)] text-[10px] text-[#766e60] font-serif leading-relaxed">
          <span className="text-[#9f382d] font-bold mr-1">{t.teacherInsightLabel}</span>
          {activeInsightText}
        </div>

        {/* Action bar */}
        <div className="mt-2.5 pt-2 border-t border-[rgba(86,71,51,0.08)] flex items-center justify-between text-[9px]">
          <span className="text-[#a09685] font-mono">
            {activeEraText}
          </span>
          <button
            type="button"
            onClick={handleCopyQuote}
            className="flex items-center gap-1 text-[#60594d] hover:text-stone-900 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={11} className="text-emerald-700" />
                <span className="text-emerald-800 font-semibold">{t.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy size={11} />
                <span>{t.copyBtn}</span>
              </>
            )}
          </button>
        </div>
      </article>

      {/* Quote foot info */}
      <div className="quote-foot">
        <div className="flex items-center gap-1.5">
          <Bookmark size={13} />
          <span className="truncate">{currentLang === 'zh' ? '古今中外美育思想文库' : 'Aesthetic Quotes Library'}</span>
        </div>
        <button
          type="button"
          onClick={() => setShowAllQuotes(!showAllQuotes)}
          className="text-[#9f382d] hover:underline font-mono text-[9px] cursor-pointer shrink-0"
        >
          {showAllQuotes ? (currentLang === 'zh' ? '收起' : 'Hide') : `(${ART_QUOTES.length})`}
        </button>
      </div>

      {/* Browse all quotes if opened */}
      {showAllQuotes && (
        <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1 animate-fade-in">
          {ART_QUOTES.map(q => (
            <div
              key={q.id}
              onClick={() => setCurrentQuote(q)}
              className={`p-2 rounded-xs border text-[11px] cursor-pointer transition-all ${
                q.id === currentQuote.id
                  ? 'border-[#9f382d] bg-[#fbf8f0] font-semibold'
                  : 'border-[rgba(86,71,51,0.1)] bg-[#fbf8f0]/60 hover:bg-[#fbf8f0]'
              }`}
            >
              <div className="line-clamp-2 text-[#474238]">
                “{q.quote[currentLang] || q.quote.zh}”
              </div>
              <div className="text-[9px] text-[#9f382d] mt-1 flex justify-between">
                <span>—— {q.author[currentLang] || q.author.zh}</span>
                <span className="text-[#a09685] font-mono">
                  {q.dynastyOrEra[currentLang] || q.dynastyOrEra.zh}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
