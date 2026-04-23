import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/c1cc64fe-39c2-472b-b6a1-2b9894d20aa1.jpg";
const PEOPLE_IMG = "https://cdn.poehali.dev/projects/4060d726-fd2c-4061-977f-3a50aadaa9b3/bucket/c1cc64fe-39c2-472b-b6a1-2b9894d20aa1.jpg";

const reviews = [
  { name: "Анастасия К.", city: "Москва", text: "Впервые за долгое время я нашла людей, которые реально понимают. Здесь нет масок — только настоящие.", stars: 5 },
  { name: "Дмитрий Р.", city: "Санкт-Петербург", text: "За 2 месяца нашёл партнёра по бизнесу и трёх близких друзей. Качество общения — космос.", stars: 5 },
  { name: "Елена М.", city: "Краснодар", text: "Первый раз в жизни в сообществе нет хайпа и токсичности. Только тепло, рост и поддержка.", stars: 5 },
  { name: "Артём С.", city: "Екатеринбург", text: "Думал, это ещё один чат. Оказалось — новый уровень жизни. 99 рублей — смешные деньги за такую среду.", stars: 5 },
  { name: "Марина В.", city: "Новосибирск", text: "Здесь меня понимают с полуслова. Поддержка 24/7 — не слова, а реальность.", stars: 5 },
  { name: "Игорь Т.", city: "Казань", text: "Через сообщество познакомился с врачом, коучем и несколькими клиентами. Невероятная экосистема.", stars: 5 },
];

const chats = [
  { icon: "💬", name: "Общение", desc: "Живые разговоры о жизни, смыслах и радости" },
  { icon: "💼", name: "Работа и деньги", desc: "Вакансии, партнёрства, совместные проекты" },
  { icon: "🩺", name: "Эксперты", desc: "Врачи, коучи, психологи — свои люди" },
  { icon: "🤲", name: "Поддержка", desc: "Разборы ситуаций без осуждения" },
  { icon: "🌍", name: "Города", desc: "Оффлайн встречи по всей России" },
  { icon: "🚀", name: "Рост", desc: "Практики, марафоны, групповая работа" },
];

const problems = [
  "Чувствуешь, что окружение тебя не понимает?",
  "Хочешь развиваться, но рядом нет людей на одной волне?",
  "Устал от токсичности в соцсетях и пустых чатах?",
  "Одиноко даже в толпе — потому что не с теми?",
];

const steps = [
  { num: "01", title: "Оплачиваешь", desc: "99₽ в месяц — это всё" },
  { num: "02", title: "Получаешь доступ", desc: "Мгновенно открывается вся экосистема" },
  { num: "03", title: "Попадаешь к своим", desc: "Тысячи осознанных людей ждут" },
  { num: "04", title: "Растёшь", desc: "Общаешься, находишь, создаёшь" },
];

const benefits = [
  { icon: "🔥", title: "Только перепрошитые", desc: "Каждый участник прошёл трансформацию. Никаких случайных людей." },
  { icon: "⚡", title: "Быстрый доступ", desc: "Нужен эксперт, партнёр или просто поддержка? Это здесь — сразу." },
  { icon: "💬", title: "Живое общение", desc: "Голос, чат, кружки — настоящие форматы для настоящих людей." },
  { icon: "🤝", title: "Партнёрства и деньги", desc: "Бизнес строят вместе. Здесь это происходит само собой." },
  { icon: "❤️", title: "Поддержка без осуждения", desc: "Разборы, честность, тепло — 24 часа в сутки." },
  { icon: "🌍", title: "Оффлайн встречи", desc: "Города по всей России. Живые встречи с живыми людьми." },
];

const features = [
  "Доступ ко всем чатам экосистемы",
  "Эксперты, партнёры, друзья — рядом",
  "Поддержка и разборы 24/7",
  "Оффлайн встречи по городам",
  "Без токсичности и случайных людей",
];

export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0D0D0D", color: "#EDE8DC" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{ background: "rgba(13,13,13,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,168,67,0.1)" }}>
        <span className="font-bold gold-text" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3rem" }}>
          Перепрошитые
        </span>
        <a href="#join" className="btn-gold px-5 py-2 rounded-full text-sm font-semibold">
          Вступить за 99₽
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.55) 50%, #0D0D0D 100%)" }} />
        </div>

        <div className="orb w-96 h-96 top-20 -left-20" style={{ background: "radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)" }} />
        <div className="orb w-80 h-80 bottom-20 -right-10" style={{ background: "radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)" }} />

        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }} viewBox="0 0 1440 900" fill="none">
          <circle cx="200" cy="200" r="4" fill="#D4A843" className="particle" style={{ animationDuration: "7s" }} />
          <circle cx="800" cy="150" r="3" fill="#D4A843" className="particle" style={{ animationDuration: "9s" }} />
          <circle cx="1200" cy="300" r="5" fill="#D4A843" className="particle" style={{ animationDuration: "6s" }} />
          <circle cx="400" cy="600" r="3" fill="#D4A843" className="particle" style={{ animationDuration: "8s" }} />
          <circle cx="1000" cy="500" r="4" fill="#D4A843" className="particle" style={{ animationDuration: "10s" }} />
          <circle cx="600" cy="400" r="6" fill="#F0C866" className="particle" style={{ animationDuration: "5s" }} />
          <line x1="200" y1="200" x2="600" y2="400" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="5 10" />
          <line x1="800" y1="150" x2="600" y2="400" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="5 10" />
          <line x1="1200" y1="300" x2="1000" y2="500" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="5 10" />
          <line x1="400" y1="600" x2="600" y2="400" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="5 10" />
          <line x1="1000" y1="500" x2="600" y2="400" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="5 10" />
        </svg>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up delay-100">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs tracking-widest uppercase rounded-full"
              style={{ border: "1px solid rgba(212,168,67,0.4)", color: "#D4A843", background: "rgba(212,168,67,0.05)" }}>
              Закрытое сообщество · только для своих
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-200 mb-6 leading-none"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 300, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            <span style={{ color: "#EDE8DC" }}>ЗАКРЫТОЕ СООБЩЕСТВО</span>
            <br />
            <span className="gold-text">СЧАСТЛИВЫХ ЛЮДЕЙ</span>
          </h1>

          <p className="animate-fade-in-up delay-300 mb-10 mx-auto max-w-xl"
            style={{ fontSize: "1.15rem", color: "rgba(237,232,220,0.65)", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
            Общайся, расти, находи своих.<br />В одной экосистеме — только те, кто уже прошёл путь.
          </p>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#join" className="btn-gold animate-glow-pulse px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2">
              <span>Вступить за 99₽</span>
              <Icon name="ArrowRight" size={20} />
            </a>
            <a href="#what-inside" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all"
              style={{ border: "1px solid rgba(212,168,67,0.25)", color: "#D4A843" }}>
              Узнать подробнее
            </a>
          </div>

          <div className="animate-fade-in-up delay-600 mt-14 flex items-center justify-center gap-8 flex-wrap">
            {[["4 000+", "участников"], ["10 000+", "прошли тренинг"], ["99₽", "в месяц"]].map(([val, label], i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div style={{ width: 1, height: 40, background: "rgba(212,168,67,0.2)" }} />}
                <div className="text-center">
                  <div className="text-3xl font-bold gold-text" style={{ fontFamily: "'Oswald', sans-serif" }}>{val}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(237,232,220,0.45)", letterSpacing: "0.05em" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
          <span className="text-xs tracking-widest" style={{ color: "#D4A843" }}>SCROLL</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #D4A843, transparent)" }} />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="reveal py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest uppercase" style={{ color: "rgba(212,168,67,0.6)" }}>Знакомо?</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.1, textTransform: "uppercase" }}>
            КОГДА ВОКРУГ МНОГО ЛЮДЕЙ,<br />
            <span className="gold-text">НО ТЫ ВСЁ РАВНО ОДИН</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.3)" }}>
                <span style={{ color: "#D4A843", fontSize: "0.75rem", fontWeight: 700 }}>{i + 1}</span>
              </div>
              <p style={{ color: "rgba(237,232,220,0.75)", lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif" }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="reveal py-20 px-6 text-center"
        style={{ background: "rgba(212,168,67,0.03)", borderTop: "1px solid rgba(212,168,67,0.08)", borderBottom: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "rgba(212,168,67,0.5)" }}>Решение</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.15, textTransform: "uppercase" }}>
            МЫ СОЗДАЛИ ПРОСТРАНСТВО, ГДЕ<br />
            <span className="gold-text">ВСЕ УЖЕ НА ОДНОЙ ВОЛНЕ</span>
          </h2>
          <p className="mt-6 text-lg mx-auto max-w-lg"
            style={{ color: "rgba(237,232,220,0.6)", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.7 }}>
            Каждый участник прошёл трансформацию. Случайных людей нет. Здесь говорят честно, поддерживают без осуждения, создают вместе.
          </p>
        </div>
      </section>

      {/* WHAT INSIDE */}
      <section id="what-inside" className="reveal py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)" }}>Структура</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#EDE8DC", textTransform: "uppercase" }}>
            ЧТО ВНУТРИ ЭКОСИСТЕМЫ
          </h2>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(212,168,67,0.2)", background: "#111" }}>
            <div className="flex items-center gap-3 px-5 py-4" style={{ background: "#161616", borderBottom: "1px solid rgba(212,168,67,0.1)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #D4A843, #F0C866)", color: "#0D0D0D" }}>П</div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#EDE8DC" }}>Сообщество Перепрошитых</div>
                <div className="text-xs" style={{ color: "rgba(237,232,220,0.4)" }}>4 000+ участников онлайн</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              {chats.map((chat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 cursor-pointer transition-all"
                  style={{ borderBottom: "1px solid rgba(212,168,67,0.06)", borderRight: i % 2 === 0 ? "1px solid rgba(212,168,67,0.06)" : "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(212,168,67,0.05)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.15)" }}>
                    {chat.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: "#EDE8DC" }}>{chat.name}</div>
                    <div className="text-xs" style={{ color: "rgba(237,232,220,0.45)", fontFamily: "'Montserrat', sans-serif" }}>{chat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-1 rounded-3xl -z-10"
            style={{ background: "radial-gradient(ellipse at center, rgba(212,168,67,0.08) 0%, transparent 70%)", filter: "blur(20px)" }} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="reveal py-24 px-6 md:px-12" style={{ background: "rgba(212,168,67,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)" }}>Почему это работает</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#EDE8DC", textTransform: "uppercase" }}>
              ПРЕИМУЩЕСТВА
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="glass-card rounded-2xl p-7">
                <span className="text-3xl mb-5 block">{b.icon}</span>
                <h3 className="mb-2 font-semibold" style={{ fontFamily: "'Oswald', sans-serif", color: "#EDE8DC", fontSize: "1.3rem" }}>{b.title}</h3>
                <p style={{ color: "rgba(237,232,220,0.55)", lineHeight: 1.65, fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reveal py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)" }}>Отзывы</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#EDE8DC", textTransform: "uppercase" }}>
            ЧТО ГОВОРЯТ УЧАСТНИКИ
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} style={{ color: "#D4A843", fontSize: "0.9rem" }}>★</span>
                ))}
              </div>
              <p style={{ color: "rgba(237,232,220,0.75)", lineHeight: 1.65, fontFamily: "'Oswald', sans-serif", fontSize: "1.05rem" }}>
                «{r.text}»
              </p>
              <div className="mt-auto pt-3" style={{ borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                <div className="font-semibold text-sm" style={{ color: "#EDE8DC" }}>{r.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(212,168,67,0.5)" }}>{r.city}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl overflow-hidden relative" style={{ height: 300, border: "1px solid rgba(212,168,67,0.15)" }}>
          <img src={PEOPLE_IMG} alt="Участники сообщества" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(to right, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.7) 100%)" }}>
            <div className="text-center">
              <div className="text-5xl font-light gold-text mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>4 000+</div>
              <div className="text-sm tracking-widest uppercase" style={{ color: "rgba(237,232,220,0.6)" }}>счастливых участников</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="reveal py-24 px-6 md:px-12"
        style={{ background: "rgba(212,168,67,0.02)", borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,168,67,0.5)" }}>Всё просто</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#EDE8DC", textTransform: "uppercase" }}>
              КАК ЭТО РАБОТАЕТ
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold"
                  style={{ border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.05)", color: "#D4A843", fontFamily: "'Oswald', sans-serif" }}>
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 h-px"
                    style={{ left: "calc(50% + 2rem)", right: "calc(-50% + 2rem)", background: "linear-gradient(to right, rgba(212,168,67,0.4), rgba(212,168,67,0.1))" }} />
                )}
                <h3 className="font-semibold mb-2" style={{ color: "#EDE8DC", fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "rgba(237,232,220,0.5)", fontFamily: "'Montserrat', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL */}
      <section className="reveal py-28 px-6 text-center relative overflow-hidden">
        <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-8"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#EDE8DC", textTransform: "uppercase" }}>
            ТЫ БОЛЬШЕ<br />
            <span className="gold-text">НЕ ОДИН</span>
          </h2>
          <p className="mb-4" style={{ color: "rgba(237,232,220,0.6)", fontFamily: "'Oswald', sans-serif", fontSize: "1.4rem" }}>
            Ты среди своих.
          </p>
          <p style={{ color: "rgba(237,232,220,0.45)", fontFamily: "'Montserrat', sans-serif", fontSize: "1.05rem" }}>
            Здесь тебя понимают. Здесь тебя ждут.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="reveal py-24 px-6 text-center"
        style={{ background: "rgba(212,168,67,0.03)", borderTop: "1px solid rgba(212,168,67,0.12)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "rgba(212,168,67,0.5)" }}>Начать прямо сейчас</p>
          <h2 className="mb-4"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.1, textTransform: "uppercase" }}>
            ВСТУПИТЬ В СООБЩЕСТВО
          </h2>
          <p className="mb-10"
            style={{ color: "rgba(237,232,220,0.55)", fontFamily: "'Montserrat', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}>
            99 рублей в месяц. Полный доступ ко всей экосистеме.<br />
            Никаких скрытых платежей и условий.
          </p>
          <div className="glass-card rounded-3xl p-8 mb-8" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
            <div className="text-6xl font-bold gold-text mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>99₽</div>
            <div className="text-sm mb-8" style={{ color: "rgba(237,232,220,0.4)", letterSpacing: "0.1em" }}>В МЕСЯЦ</div>
            <div className="flex flex-col gap-3 mb-8 text-left">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.4)" }}>
                    <Icon name="Check" size={11} style={{ color: "#D4A843" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(237,232,220,0.7)", fontFamily: "'Montserrat', sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <button className="btn-gold w-full py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3">
              <span>Вступить в сообщество</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
          <p className="text-xs" style={{ color: "rgba(237,232,220,0.3)", fontFamily: "'Montserrat', sans-serif" }}>
            Начать новую среду уже сегодня
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="gold-text text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Сообщество Перепрошитых</div>
        <p className="text-xs" style={{ color: "rgba(237,232,220,0.25)", fontFamily: "'Montserrat', sans-serif" }}>
          © 2024 · Экосистема счастливых людей
        </p>
      </footer>
    </div>
  );
}