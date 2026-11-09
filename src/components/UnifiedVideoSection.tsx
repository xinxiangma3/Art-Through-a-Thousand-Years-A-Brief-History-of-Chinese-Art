import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Clock, 
  Layers, 
  ExternalLink, 
  Sparkles, 
  Settings, 
  Check, 
  Film,
  BookOpen
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface UnifiedVideoSectionProps {
  currentLang: Language;
}

export const UnifiedVideoSection: React.FC<UnifiedVideoSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].videoSection;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [showConfigDrawer, setShowConfigDrawer] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<string>('1.0x');

  const currentMilestone = t.milestones[activeMilestoneIndex] || t.milestones[0];

  const handleMilestoneClick = (index: number) => {
    setActiveMilestoneIndex(index);
    setIsPlaying(true);
  };

  return (
    <section id="video" className="mb-12 scroll-mt-6" aria-label={t.titleLead}>
      {/* Section Header */}
      <div className="section-heading">
        <div>
          <div className="section-overline">
            <Film size={13} />
            <span>{t.overline}</span>
          </div>
          <h2>
            {t.titleLead}<em>{t.titleAccent}</em>
          </h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowConfigDrawer(!showConfigDrawer)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#60594d] bg-[#fbf8f0] border border-[rgba(86,71,51,0.14)] rounded-xs hover:border-[#9f382d] hover:text-[#9f382d] transition-all cursor-pointer font-serif"
            title="预留视频嵌入链接配置"
          >
            <Settings size={13} />
            <span>{currentLang === 'zh' ? '视频源配置' : currentLang === 'tr' ? 'Video Kaynağı' : 'Video Settings'}</span>
          </button>
        </div>
      </div>

      {/* Video Source Configuration Bar (toggleable) */}
      {showConfigDrawer && (
        <div className="mb-4 p-3.5 bg-[#fbf8f0] border border-[rgba(86,71,51,0.18)] rounded-xs text-xs space-y-2 animate-fade-in font-serif">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#302e28] flex items-center gap-1.5">
              <ExternalLink size={13} className="text-[#9f382d]" />
              {currentLang === 'zh' ? '预留视频播放嵌入接口' : currentLang === 'tr' ? 'Video Gömme Bağlantısı' : 'Video Embed URL Slot'}
            </span>
            <span className="text-[10px] text-[#9f382d] font-mono">
              {currentLang === 'zh' ? '支持 MP4 / Bilibili / YouTube' : 'MP4 / Bilibili / YouTube ready'}
            </span>
          </div>
          <p className="text-[11px] text-[#766e60] leading-relaxed">
            {t.placeholderNotice}
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={currentLang === 'zh' ? '在此粘贴制作完成的总览视频播放链接 (URL)' : 'Paste overview video embed URL here'}
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              className="flex-1 p-2 text-xs border border-[rgba(86,71,51,0.2)] rounded-xs bg-white focus:outline-hidden focus:border-[#9f382d] font-mono"
            />
            <button
              type="button"
              onClick={() => setShowConfigDrawer(false)}
              className="px-3 py-1 bg-[#9f382d] text-white text-xs font-semibold rounded-xs hover:bg-[#792c25] cursor-pointer"
            >
              {currentLang === 'zh' ? '保存' : currentLang === 'tr' ? 'Kaydet' : 'Save'}
            </button>
          </div>
        </div>
      )}

      {/* Standalone Unified Video Player Frame */}
      <div className="relative rounded-sm overflow-hidden border border-[rgba(86,71,51,0.2)] bg-[#1e1c18] shadow-md text-white select-none">
        {/* Video Display Area (16:9 Aspect Ratio container) */}
        <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[460px] flex items-center justify-center overflow-hidden">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title={t.titleAccent}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Simulated Masterpiece Background Visual with warm ink atmosphere */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 ease-out scale-102"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 40%, rgba(159,56,45,0.25) 0%, rgba(30,80,132,0.3) 50%, rgba(18,17,14,0.95) 100%)',
                }}
              />

              {/* Decorative Traditional Clouds & Seal */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="w-6 h-6 rounded-xs bg-[#9f382d] text-white flex items-center justify-center font-serif text-xs font-bold shadow-xs">
                  美
                </span>
                <span className="text-[11px] font-serif text-white/90 tracking-wider">
                  《中国美术简史》
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] bg-black/60 backdrop-blur-xs text-amber-200 font-mono px-2 py-0.5 rounded-xs border border-amber-500/20">
                  {t.durationBadge}
                </span>
              </div>

              {/* Big Center Play / Pause Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl cursor-pointer group"
                style={{
                  backgroundColor: isPlaying ? 'rgba(30,30,30,0.85)' : '#9f382d',
                  boxShadow: '0 0 0 10px rgba(159,56,45,0.25), 0 8px 24px rgba(0,0,0,0.5)',
                }}
                aria-label={isPlaying ? '暂停' : '播放全景总览视频'}
              >
                {isPlaying ? (
                  <Pause size={30} className="fill-current" />
                ) : (
                  <Play size={32} className="fill-current ml-1" />
                )}
              </button>

              {/* Active Milestone Title Overlay */}
              <div className="absolute bottom-16 left-6 right-6 z-10 pointer-events-none">
                <div className="text-[11px] text-amber-300 font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>{t.currentChapter} · {currentMilestone.time}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold font-serif text-white mt-1 drop-shadow-md">
                  {currentMilestone.title}
                </h3>
                <p className="text-xs text-stone-300 font-serif drop-shadow-sm mt-0.5 line-clamp-1">
                  {currentMilestone.desc}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Video Control Bar */}
        <div className="bg-[#181612] border-t border-stone-800 px-4 py-2.5 flex items-center justify-between text-xs text-stone-300">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-amber-300 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} className="fill-current" />}
            </button>
            <div className="flex items-center gap-1 font-mono text-[11px] text-stone-400">
              <span className="text-white">{currentMilestone.time}</span>
              <span>/</span>
              <span>1:45:00</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] text-stone-500 font-serif border-l border-stone-700 pl-3">
              {currentMilestone.title.split('：')[0]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const speeds = ['1.0x', '1.25x', '1.5x'];
                const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                setPlaybackSpeed(speeds[nextIdx]);
              }}
              className="font-mono text-[11px] text-stone-400 hover:text-white px-1.5 py-0.5 rounded hover:bg-stone-800 cursor-pointer"
              title="播放倍速"
            >
              {playbackSpeed}
            </button>
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? '取消静音' : '静音'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('video');
                if (el) el.requestFullscreen?.();
              }}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="全屏模式"
            >
              <Maximize size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Chronological Timeline Chapter Points (Interactive Navigation) */}
      <div className="mt-4 p-4 bg-[#fbf8f0] border border-[rgba(86,71,51,0.12)] rounded-xs">
        <div className="text-[11px] font-bold text-[#8e493e] font-mono uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Clock size={13} />
          <span>{t.timelineTitle}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {t.milestones.map((m, idx) => {
            const isSelected = activeMilestoneIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleMilestoneClick(idx)}
                className={`text-left p-2.5 rounded-xs border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#9f382d] bg-[#9f382d]/10 text-[#302e28] shadow-xs'
                    : 'border-[rgba(86,71,51,0.1)] bg-[#f7f2e7]/60 hover:bg-[#f7f2e7] hover:border-[rgba(86,71,51,0.25)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] font-bold text-[#9f382d]">
                      {m.time}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9f382d]"></span>
                    )}
                  </div>
                  <div className="text-xs font-bold font-serif line-clamp-1">
                    {m.title}
                  </div>
                </div>
                <div className="text-[10px] text-[#766e60] font-serif mt-1.5 line-clamp-2">
                  {m.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
