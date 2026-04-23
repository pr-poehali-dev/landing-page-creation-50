import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/c1cc64fe-39c2-472b-b6a1-2b9894d20aa1.jpg";
const PEOPLE_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/c1cc64fe-39c2-472b-b6a1-2b9894d20aa1.jpg";
const ICONS_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/1faac943-9c50-4b4b-b84f-b89d248e93c0.PNG";
const SCREEN1_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/8b2e8937-708f-459e-a5cc-081b73d98fde.PNG";
const SCREEN2_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/203ae7ea-8f98-4a3a-8c56-0d594ab8e364.PNG";
const SCREEN3_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/42464dc1-2922-4310-a479-92f446487a7d.PNG";

const TG_LINK = "https://t.me/addlist/e3INym3Ew-VhNTY6";
const H = { fontFamily: "'Oswald', sans-serif" };
const M = { fontFamily: "'Montserrat', sans-serif" };

// Компонент цены — везде одинаковый
function PriceTag({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const oldSize = size === "lg" ? "1.1rem" : size === "md" ? "0.9rem" : "0.75rem";
  const newSize = size === "lg" ? "3.5rem" : size === "md" ? "1.6rem" : "1.2rem";
  const labelSize = size === "lg" ? "0.8rem" : "0.65rem";
  return (
    <span className="inline-flex items-baseline gap-2 flex-wrap justify-center">
      <span style={{ ...M, fontSize: oldSize, color: "rgba(237,232,220,0.35)", textDecoration: "line-through", fontWeight: 600 }}>999₽/МЕС</span>
      <span style={{ ...H, fontSize: newSize, fontWeight: 900, color: "#EF4444", lineHeight: 1 }}>99₽</span>
      <span style={{ ...M, fontSize: labelSize, color: "rgba(239,68,68,0.7)", fontWeight: 700, letterSpacing: "0.1em" }}>/МЕС</span>
    </span>
  );
}

const ecosystemBlocks = [
  {
    num: "0", title: "КАНАЛ / НОВОСТИ", subtitle: "Официальный источник",
    desc: "Официальная лента от Дмитрия и Нинны Хара — новости, анонсы мероприятий, новые практики и обновления.",
    icon: "📢", color: "#D4A843",
    items: ["Новости сообщества", "Анонсы мероприятий", "Новые практики", "Обновления от авторов"],
  },
  {
    num: "1", title: "РАЗГОВОРЫ", subtitle: "Сердце сообщества",
    desc: "Безопасное пространство живого общения — без ограничений, без осуждения, только своих.",
    icon: "💬", color: "#C084FC",
    items: ["ВПОТОКЕ (флудилка)", "БЛАГОДАРНОСТИ", "ТЕЛО / ДУША", "НАКИПЕЛКА", "КРУГ ВОКРУГ", "ЗНАКОМСТВА / НЕТВОРК", "СОВМЕСТНЫЕ ПУТЕШЕСТВИЯ"],
  },
  {
    num: "2", title: "ИЗОБИЛИЕ", subtitle: "Экономика сообщества",
    desc: "Пространство возможностей, денег, бизнеса и обмена ценностью — внутри сообщества перепрошитых.",
    icon: "🌳", color: "#F59E0B",
    items: ["Тренеры / Мастера практик", "Вакансии / Резюме", "Партнёрства", "Услуги / Товары", "Бизнес", "ППШ Медицина", "Бытовые услуги"],
  },
  {
    num: "3", title: "ЗАХВАЧЕННЫЕ ГОРОДА", subtitle: "Офлайн-сеть",
    desc: "Живые встречи, практики и локальные комьюнити в городах по всей России.",
    icon: "🏙️", color: "#34D399",
    items: ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Краснодар", "Новосибирск", "Воронеж", "Сочи", "Уфа", "Нижний Новгород", "и другие"],
  },
  {
    num: "4", title: "СВЕЖЕПРОШИТЫМ", subtitle: "База для новичков",
    desc: "Точка входа после тренинга. Инструкции, поддержка кураторов и базовые практики для сохранения состояния.",
    icon: "📖", color: "#60A5FA",
    items: ["Что делать после тренинга", "Как не потерять состояние", "Базовые практики", "Поддержка кураторов", "Ответы на вопросы"],
  },
];

const reviews = [
  { name: "Анастасия К.", city: "Москва", text: "Впервые за долгое время я нашла людей, которые реально понимают. Здесь нет масок — только настоящие." },
  { name: "Дмитрий Р.", city: "Санкт-Петербург", text: "За 2 месяца нашёл партнёра по бизнесу и трёх близких друзей. Качество общения — космос." },
  { name: "Елена М.", city: "Краснодар", text: "Первый раз в жизни в сообществе нет хайпа и токсичности. Только тепло, рост и поддержка." },
  { name: "Артём С.", city: "Екатеринбург", text: "Думал, это ещё один чат. Оказалось — новый уровень жизни. 99 рублей — смешные деньги за такую среду." },
  { name: "Марина В.", city: "Новосибирск", text: "Здесь меня понимают с полуслова. Поддержка 24/7 — не слова, а реальность." },
  { name: "Игорь Т.", city: "Казань", text: "Через сообщество познакомился с врачом, коучем и несколькими клиентами. Невероятная экосистема." },
];

const features = [
  "Доступ ко всей экосистеме чатов",
  "Новости и практики от авторов",
  "Живое общение с перепрошитыми",
  "Офлайн встречи по городам",
  "Поддержка и разборы 24/7",
  "Партнёрства и возможности",
];

export default function Index() {
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0A0A0A", color: "#EDE8DC" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-4"
        style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,168,67,0.12)" }}>
        <span className="font-bold gold-text" style={{ ...H, fontSize: "clamp(0.9rem, 4vw, 1.2rem)", letterSpacing: "0.08em" }}>
          ПЕРЕПРОШИТЫЕ
        </span>
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
          className="btn-gold rounded-full font-bold flex items-center gap-1.5"
          style={{ ...M, fontSize: "clamp(0.65rem, 2.5vw, 0.8rem)", padding: "8px 14px", whiteSpace: "nowrap" }}>
          ВСТУПИТЬ · <span style={{ color: "#0A0A0A", fontWeight: 900 }}>99₽</span>/МЕС
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top" style={{ opacity: 0.4 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.6) 40%, #0A0A0A 100%)" }} />
        </div>
        <div className="orb w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: "radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto w-full">
          <div className="animate-fade-in-up delay-100">
            <span className="inline-block px-3 py-1 mb-6 text-xs tracking-widest uppercase rounded-full"
              style={{ border: "1px solid rgba(212,168,67,0.4)", color: "#D4A843", background: "rgba(212,168,67,0.05)", ...M, fontSize: "clamp(0.55rem, 2vw, 0.7rem)" }}>
              Закрытая экосистема · только для перепрошитых
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-200 mb-3"
            style={{ ...H, fontSize: "clamp(2.4rem, 10vw, 7rem)", fontWeight: 700, letterSpacing: "0.03em", lineHeight: 1.0, textTransform: "uppercase" }}>
            <span style={{ color: "#EDE8DC" }}>СООБЩЕСТВО</span>
            <br />
            <span className="gold-text">ПЕРЕПРОШИТЫХ</span>
          </h1>

          <p className="animate-fade-in-up delay-300 mb-4 mx-auto max-w-2xl"
            style={{ ...H, color: "rgba(237,232,220,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "clamp(0.85rem, 3vw, 1.3rem)" }}>
            СООБЩЕСТВО СЧАСТЛИВЫХ ЛЮДЕЙ
          </p>

          <p className="animate-fade-in-up delay-400 mb-8 mx-auto max-w-lg px-2"
            style={{ fontSize: "clamp(0.85rem, 2.5vw, 1rem)", color: "rgba(237,232,220,0.55)", lineHeight: 1.7, ...M }}>
            Пространство, где сохраняют и усиливают новое состояние после трансформации. Только свои. Только осознанные.
          </p>

          {/* Цена + кнопка */}
          <div className="animate-fade-in-up delay-500 flex flex-col items-center gap-3 mb-10">
            <div className="mb-1">
              <PriceTag size="md" />
            </div>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold animate-glow-pulse rounded-full font-bold inline-flex items-center gap-2 w-full max-w-sm justify-center"
              style={{ ...H, fontSize: "clamp(0.9rem, 3vw, 1.1rem)", letterSpacing: "0.06em", padding: "14px 28px" }}>
              ВСТУПИТЬ В ЭКОСИСТЕМУ
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          {/* Счётчики */}
          <div className="animate-fade-in-up delay-600 flex items-center justify-center gap-5 md:gap-12 flex-wrap">
            {[["4 000+", "УЧАСТНИКОВ"], ["10 000+", "ПРОШЛИ ТРЕНИНГ"], ["5", "ПРОСТРАНСТВ"]].map(([val, label], i) => (
              <div key={i} className="flex items-center gap-5 md:gap-12">
                {i > 0 && <div className="hidden sm:block" style={{ width: 1, height: 32, background: "rgba(212,168,67,0.2)" }} />}
                <div className="text-center">
                  <div className="font-bold gold-text" style={{ ...H, fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>{val}</div>
                  <div className="tracking-widest" style={{ color: "rgba(237,232,220,0.4)", ...M, fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ opacity: 0.3 }}>
          <span className="text-xs tracking-widest" style={{ color: "#D4A843", ...M, fontSize: "0.6rem" }}>SCROLL</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #D4A843, transparent)" }} />
        </div>
      </section>

      {/* ═══ СУТЬ ═══ */}
      <section className="reveal py-16 md:py-24 px-4 md:px-6 text-center"
        style={{ background: "rgba(212,168,67,0.03)", borderTop: "1px solid rgba(212,168,67,0.08)", borderBottom: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Зачем это нужно</p>
          <h2 className="mb-5" style={{ ...H, fontSize: "clamp(1.7rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase", lineHeight: 1.1 }}>
            ПОСЛЕ ПЕРЕПРОШИВКИ<br />
            <span className="gold-text">ВАЖНО НЕ ПОТЕРЯТЬ СОСТОЯНИЕ</span>
          </h2>
          <p style={{ color: "rgba(237,232,220,0.6)", ...M, lineHeight: 1.8, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
            Трансформация случилась. Ты стал другим. Но старое окружение тянет назад.
            Сообщество — это живая среда людей, которые уже на новом уровне. Здесь состояние не теряется — оно усиливается.
          </p>
        </div>
      </section>

      {/* ═══ ЭКОСИСТЕМА ═══ */}
      <section id="what-inside" className="reveal py-16 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Структура</p>
          <h2 style={{ ...H, fontSize: "clamp(1.7rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>
            ЧТО ВНУТРИ ЭКОСИСТЕМЫ
          </h2>
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          <img src={ICONS_IMG} alt="Структура экосистемы" className="w-full max-w-3xl rounded-2xl"
            style={{ border: "1px solid rgba(212,168,67,0.15)" }} />
        </div>

        {/* Вкладки — скроллируемые на мобиле */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {ecosystemBlocks.map((b, i) => (
            <button key={i} onClick={() => setActiveBlock(i)}
              className="rounded-full font-bold transition-all flex-shrink-0"
              style={{
                ...H,
                fontSize: "clamp(0.6rem, 2vw, 0.75rem)",
                letterSpacing: "0.08em",
                padding: "8px 14px",
                background: activeBlock === i ? b.color : "rgba(255,255,255,0.05)",
                color: activeBlock === i ? "#0A0A0A" : "rgba(237,232,220,0.5)",
                border: activeBlock === i ? `1px solid ${b.color}` : "1px solid rgba(255,255,255,0.1)",
                whiteSpace: "nowrap",
              }}>
              {b.num}. {b.title}
            </button>
          ))}
        </div>

        {ecosystemBlocks.map((b, i) => (
          <div key={i} style={{ display: activeBlock === i ? "block" : "none" }}>
            <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-10 max-w-4xl mx-auto"
              style={{ border: `1px solid ${b.color}30` }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-1/2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}40` }}>
                    {b.icon}
                  </div>
                  <div className="text-xs tracking-widest mb-1" style={{ color: b.color, ...M }}>{b.subtitle}</div>
                  <h3 className="mb-3" style={{ ...H, fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>{b.title}</h3>
                  <p style={{ color: "rgba(237,232,220,0.6)", ...M, lineHeight: 1.7, fontSize: "0.85rem" }}>{b.desc}</p>
                </div>
                <div className="md:w-1/2">
                  <p className="text-xs tracking-widest mb-3" style={{ color: "rgba(237,232,220,0.3)", ...M }}>ВНУТРИ:</p>
                  <div className="flex flex-wrap gap-2">
                    {b.items.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: `${b.color}10`, border: `1px solid ${b.color}25`, color: "rgba(237,232,220,0.8)", ...M, fontSize: "0.75rem" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ═══ СКРИНШОТЫ ═══ */}
      <section className="reveal py-16 md:py-20 px-4 md:px-12" style={{ background: "rgba(212,168,67,0.02)", borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Как это выглядит</p>
            <h2 style={{ ...H, fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>
              УЖЕ РАБОТАЕТ В TELEGRAM
            </h2>
          </div>
          {/* На мобиле скролл горизонтально */}
          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 justify-start md:justify-center" style={{ scrollbarWidth: "none" }}>
            {[
              { img: SCREEN1_IMG, label: "РАЗГОВОРЫ" },
              { img: SCREEN2_IMG, label: "ГОРОДА" },
              { img: SCREEN3_IMG, label: "ИЗОБИЛИЕ" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="rounded-[1.5rem] overflow-hidden shadow-2xl"
                  style={{ width: "clamp(140px, 40vw, 200px)", border: "2px solid rgba(212,168,67,0.2)" }}>
                  <img src={s.img} alt={s.label} className="w-full h-auto" />
                </div>
                <span className="text-xs tracking-widest" style={{ color: "rgba(212,168,67,0.6)", ...H }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ АВТОРЫ ═══ */}
      <section className="reveal py-16 md:py-24 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Создатели</p>
          <h2 style={{ ...H, fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>
            ОБ АВТОРАХ ПРОЕКТА
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { name: "ДМИТРИЙ ХАРА", role: "Основатель", desc: "Создатель трансформационного тренинга «Перепрошивка» и идеолог экосистемы. Более 10 000 человек прошли путь трансформации под его руководством." },
            { name: "НИННА ХАРА", role: "Соавтор и ведущая", desc: "Соавтор проекта и ведущая линии развития. Создаёт пространство женского пути, осознанности и раскрытия внутреннего потенциала." },
          ].map((a, i) => (
            <div key={i} className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-lg font-bold"
                style={{ background: "linear-gradient(135deg, #C49A30, #F0C866)", color: "#0A0A0A", ...H }}>
                {a.name[0]}
              </div>
              <div className="text-xs tracking-widest mb-1" style={{ color: "rgba(212,168,67,0.6)", ...M }}>{a.role}</div>
              <h3 className="mb-3" style={{ ...H, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>{a.name}</h3>
              <p style={{ color: "rgba(237,232,220,0.6)", ...M, lineHeight: 1.7, fontSize: "0.85rem" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ОТЗЫВЫ ═══ */}
      <section className="reveal py-16 md:py-24 px-4 md:px-12" style={{ background: "rgba(212,168,67,0.02)", borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Говорят участники</p>
            <h2 style={{ ...H, fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>
              ЧТО ГОВОРЯТ УЧАСТНИКИ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-12">
            {reviews.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: "#D4A843", fontSize: "0.85rem" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "rgba(237,232,220,0.75)", lineHeight: 1.7, ...M, fontSize: "0.85rem" }}>«{r.text}»</p>
                <div className="mt-auto pt-3" style={{ borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                  <div className="font-semibold text-sm" style={{ color: "#EDE8DC", ...H, letterSpacing: "0.05em" }}>{r.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(212,168,67,0.5)", ...M }}>{r.city}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl md:rounded-3xl overflow-hidden relative" style={{ height: "clamp(220px, 40vw, 380px)", border: "1px solid rgba(212,168,67,0.2)" }}>
            <img src={PEOPLE_IMG} alt="Участники" className="w-full h-full object-cover object-top" style={{ opacity: 0.8 }} />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.75) 100%)" }}>
              <div className="text-center">
                <div className="font-bold gold-text mb-1" style={{ ...H, fontSize: "clamp(2.5rem, 10vw, 5rem)", textTransform: "uppercase" }}>4 000+</div>
                <div className="tracking-widest uppercase" style={{ color: "rgba(237,232,220,0.7)", ...M, fontSize: "clamp(0.65rem, 2vw, 0.85rem)" }}>СЧАСТЛИВЫХ УЧАСТНИКОВ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ КАК ВОЙТИ ═══ */}
      <section className="reveal py-16 md:py-24 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Всё просто</p>
          <h2 style={{ ...H, fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase" }}>
            КАК ВОЙТИ В ЭКОСИСТЕМУ
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { num: "01", title: "ОПЛАЧИВАЕШЬ", desc: "99₽/мес — это всё" },
            { num: "02", title: "ПОЛУЧАЕШЬ ДОСТУП", desc: "Мгновенно открывается вся экосистема" },
            { num: "03", title: "ПОПАДАЕШЬ К СВОИМ", desc: "Тысячи осознанных людей ждут" },
            { num: "04", title: "СОХРАНЯЕШЬ СОСТОЯНИЕ", desc: "Общаешься, растёшь, находишь" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold"
                style={{ border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.05)", color: "#D4A843", ...H, fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
                {s.num}
              </div>
              <h3 className="mb-1" style={{ color: "#EDE8DC", ...H, fontSize: "clamp(0.75rem, 2vw, 0.9rem)", fontWeight: 700, textTransform: "uppercase" }}>{s.title}</h3>
              <p style={{ color: "rgba(237,232,220,0.45)", ...M, fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ЭМОЦИОНАЛЬНЫЙ ═══ */}
      <section className="reveal py-20 md:py-28 px-4 md:px-6 text-center relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-5" style={{ ...H, fontSize: "clamp(2.5rem, 10vw, 5.5rem)", fontWeight: 700, lineHeight: 1.0, color: "#EDE8DC", textTransform: "uppercase" }}>
            ТЫ БОЛЬШЕ<br />
            <span className="gold-text">НЕ ОДИН</span>
          </h2>
          <p className="mb-2" style={{ color: "rgba(237,232,220,0.5)", ...H, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "clamp(0.9rem, 3vw, 1.2rem)" }}>
            ТЫ СРЕДИ СВОИХ
          </p>
          <p style={{ color: "rgba(237,232,220,0.4)", ...M, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
            Здесь тебя понимают. Здесь тебя ждут. Здесь состояние не теряется.
          </p>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="join" className="reveal py-16 md:py-24 px-4 md:px-6 text-center"
        style={{ background: "rgba(212,168,67,0.03)", borderTop: "1px solid rgba(212,168,67,0.15)" }}>
        <div className="max-w-lg mx-auto">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)", ...M }}>Начать прямо сейчас</p>
          <h2 className="mb-3" style={{ ...H, fontSize: "clamp(1.7rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDE8DC", textTransform: "uppercase", lineHeight: 1.1 }}>
            ВСТУПИТЬ В СООБЩЕСТВО
          </h2>
          <p className="mb-8" style={{ color: "rgba(237,232,220,0.5)", ...M, fontSize: "clamp(0.85rem, 2.5vw, 1rem)", lineHeight: 1.7 }}>
            Полный доступ ко всей экосистеме. Никаких скрытых платежей.
          </p>

          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8" style={{ border: "1px solid rgba(212,168,67,0.25)" }}>
            {/* Цена крупно */}
            <div className="mb-2 flex items-center justify-center gap-3 flex-wrap">
              <span style={{ ...M, fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "rgba(237,232,220,0.3)", textDecoration: "line-through", fontWeight: 600 }}>999₽/МЕС</span>
              <span style={{ ...H, fontSize: "clamp(3rem, 10vw, 5rem)", fontWeight: 900, color: "#EF4444", lineHeight: 1 }}>99₽</span>
              <span style={{ ...M, fontSize: "clamp(0.8rem, 2vw, 1rem)", color: "rgba(239,68,68,0.75)", fontWeight: 700, letterSpacing: "0.1em" }}>/МЕС</span>
            </div>
            <div className="text-xs mb-6 tracking-widest" style={{ color: "rgba(237,232,220,0.25)", ...M }}>ПОЛНЫЙ ДОСТУП КО ВСЕЙ ЭКОСИСТЕМЕ</div>

            <div className="flex flex-col gap-2.5 mb-6 text-left">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.35)" }}>
                    <Icon name="Check" size={11} style={{ color: "#D4A843" }} />
                  </div>
                  <span style={{ color: "rgba(237,232,220,0.7)", ...M, fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}>{f}</span>
                </div>
              ))}
            </div>

            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold w-full rounded-xl font-bold flex items-center justify-center gap-2"
              style={{ ...H, fontSize: "clamp(0.9rem, 3vw, 1.1rem)", letterSpacing: "0.06em", padding: "16px 24px" }}>
              ВСТУПИТЬ ЗА <span style={{ color: "#EF4444", fontWeight: 900 }}>99₽</span>/МЕС
              <Icon name="ArrowRight" size={18} />
            </a>

            <p className="mt-4 text-xs" style={{ color: "rgba(237,232,220,0.2)", ...M }}>
              Стань частью сообщества перепрошитых
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-10 px-4 md:px-6 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="gold-text mb-1 tracking-widest" style={{ ...H, fontSize: "clamp(0.9rem, 3vw, 1.2rem)" }}>СООБЩЕСТВО ПЕРЕПРОШИТЫХ</div>
        <p className="text-xs" style={{ color: "rgba(237,232,220,0.2)", ...M }}>© 2024 · Авторы: Дмитрий Хара, Нинна Хара</p>
      </footer>
    </div>
  );
}
