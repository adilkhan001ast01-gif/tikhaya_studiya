import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Instagram, Leaf, MapPin, Menu, MessageCircle, Phone, Quote, ShieldCheck, Sparkles, Star, X } from 'lucide-react'

const services = [
  { id: 'deep', title: 'Глубокое восстановление', subtitle: 'Снимает мышечное напряжение и возвращает лёгкость всему телу.', duration: 90, price: 18500, crop: 'crop-1', tag: 'Выбор гостей' },
  { id: 'relax', title: 'Тихий ритуал', subtitle: 'Мягкий расслабляющий массаж с тёплым маслом и ароматерапией.', duration: 60, price: 14000, crop: 'crop-2' },
  { id: 'sport', title: 'Спортивный баланс', subtitle: 'Интенсивная проработка мышц после нагрузки и активного дня.', duration: 75, price: 16500, crop: 'crop-3' },
  { id: 'stones', title: 'Тепло камней', subtitle: 'Ритуал с базальтовыми камнями для глубокого покоя и перезагрузки.', duration: 90, price: 20500, crop: 'crop-4' },
]

const specialists = [
  { id: 'alisa', name: 'Алиса', role: 'Мастер мягких техник', exp: '7 лет опыта', image: '/master-alisa.png' },
  { id: 'timur', name: 'Тимур', role: 'Спортивный массажист', exp: '9 лет опыта', image: '/master-timur.png' },
  { id: 'sofia', name: 'София', role: 'Телесный терапевт', exp: '6 лет опыта', image: '/master-sofia.png' },
]

const reviews = [
  { name: 'Диана К.', text: 'В «Тихой» всё работает на ощущение покоя — от света до прикосновений мастера. После сеанса будто снова научилась дышать полной грудью.', date: '12 октября' },
  { name: 'Мария С.', text: 'Очень внимательное отношение и никакой спешки. Алиса услышала все пожелания, а напряжение в плечах ушло уже после первого визита.', date: '28 сентября' },
  { name: 'Артём Н.', text: 'Регулярно прихожу на спортивный массаж к Тимуру. Точно, профессионально и с понятными рекомендациями после сеанса.', date: '16 сентября' },
]

const pad = (n) => String(n).padStart(2, '0')
const dateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
const ruDate = (date) => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
const currency = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₸'

function App() {
  const [menu, setMenu] = useState(false)
  const [booking, setBooking] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const openBooking = (service = null) => {
    setSelectedService(service)
    setBooking(true)
  }

  useEffect(() => { document.body.style.overflow = booking ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [booking])

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" aria-label="Тихая, на главную"><span className="brand-mark"><Leaf size={18}/></span><span>тихая<small>студия массажа</small></span></a>
      <nav className={menu ? 'nav nav-open' : 'nav'}>
        <a href="#services" onClick={() => setMenu(false)}>Услуги</a>
        <a href="#about" onClick={() => setMenu(false)}>О студии</a>
        <a href="#masters" onClick={() => setMenu(false)}>Мастера</a>
        <a href="#reviews" onClick={() => setMenu(false)}>Отзывы</a>
        <a href="#contacts" onClick={() => setMenu(false)}>Контакты</a>
      </nav>
      <button className="btn btn-dark header-btn" onClick={() => openBooking()}>Записаться <ArrowRight size={17}/></button>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Открыть меню">{menu ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy reveal">
          <span className="eyebrow"><Sparkles size={15}/> Пространство тишины в центре Алматы</span>
          <h1>Верните телу<br/><em>лёгкость.</em></h1>
          <p>Осознанный массаж, который помогает замедлиться, снять напряжение и снова почувствовать себя собой.</p>
          <div className="hero-actions">
            <button className="btn btn-accent" onClick={() => openBooking()}>Записаться онлайн <ArrowRight size={18}/></button>
            <a className="text-link" href="#services">Выбрать ритуал <span>↓</span></a>
          </div>
          <div className="mini-proof"><div className="avatars"><span>А</span><span>Т</span><span>С</span></div><div><b>4,9</b> <span className="stars">★★★★★</span><small>более 400 счастливых гостей</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="photo atlas crop-1"></div>
          <div className="floating-card"><span><Leaf size={19}/></span><div><b>15 минут в подарок</b><small>на знакомство и чай после сеанса</small></div></div>
          <div className="hero-note">ваше время<br/>для себя</div>
        </div>
      </section>

      <section className="benefits section-pad">
        <div><span>01</span><h3>Точная забота</h3><p>Перед каждым сеансом обсуждаем ваше самочувствие и настраиваем практику.</p></div>
        <div><span>02</span><h3>Сильные мастера</h3><p>Только профильное образование, бережные руки и глубокое знание тела.</p></div>
        <div><span>03</span><h3>Честный покой</h3><p>Натуральные масла, тёплый свет и никакой суеты в вашем личном времени.</p></div>
      </section>

      <section className="section services" id="services">
        <div className="section-head"><div><span className="eyebrow">Наши ритуалы</span><h2>Выберите, что нужно<br/><em>вашему телу сегодня</em></h2></div><p>Каждая практика начинается с короткой беседы и адаптируется под ваш запрос.</p></div>
        <div className="service-grid">
          {services.map((s, i) => <article className="service-card" key={s.id}>
            <div className={`service-photo atlas ${s.crop}`}>{s.tag && <span className="tag">{s.tag}</span>}<span className="service-num">0{i + 1}</span></div>
            <div className="service-body"><div><h3>{s.title}</h3><p>{s.subtitle}</p></div><div className="service-meta"><span><Clock3 size={16}/>{s.duration} мин</span><b>{currency(s.price)}</b></div><button className="card-action" onClick={() => openBooking(s)}>Выбрать ритуал <ArrowRight size={18}/></button></div>
          </article>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-photo atlas crop-5"><div className="year-badge"><b>8</b><span>лет создаём<br/>тишину</span></div></div>
        <div className="about-copy"><span className="eyebrow">Философия «Тихой»</span><h2>Забота, которую<br/><em>чувствует тело</em></h2><p className="lead">Мы создали камерное пространство, где можно перестать быть продуктивным и просто побыть.</p><p>Наша работа соединяет классические и современные техники, понимание анатомии и настоящее внимание. Мы не работаем по шаблону — каждый сеанс складывается вокруг вас.</p><div className="about-points"><span><CheckCircle2/>Масла премиум-класса</span><span><CheckCircle2/>Индивидуальная практика</span><span><CheckCircle2/>Душ и зона отдыха</span><span><CheckCircle2/>Тихие кабинеты</span></div><button className="btn btn-dark" onClick={() => openBooking()}>Найти своё время <ArrowRight size={18}/></button></div>
      </section>

      <section className="section masters" id="masters">
        <div className="section-head center"><div><span className="eyebrow">Команда</span><h2>Руки, которым<br/><em>можно доверять</em></h2></div></div>
        <div className="master-grid">
          {specialists.map(m => <article className="master-card" key={m.id}><img className="master-photo" src={m.image} alt={`${m.name} — ${m.role}`} /><div><h3>{m.name}</h3><p>{m.role}</p><span>{m.exp}</span></div></article>)}
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-head"><div><span className="eyebrow">Отзывы гостей</span><h2>После «Тихой»<br/><em>становится тише внутри</em></h2></div><div className="rating-big"><b>4,9</b><div><span>★★★★★</span><small>на основе 412 отзывов</small></div></div></div>
        <div className="review-grid">{reviews.map((r, i) => <article className="review" key={r.name}><Quote/><div className="stars">★★★★★</div><p>«{r.text}»</p><footer><div className="review-avatar">{r.name[0]}</div><div><b>{r.name}</b><small>{r.date}</small></div><span>0{i+1}</span></footer></article>)}</div>
      </section>

      <section className="contact section" id="contacts">
        <div className="contact-copy"><span className="eyebrow light">Приходите в гости</span><h2>Место, где можно<br/><em>выдохнуть</em></h2><div className="contact-list"><div><MapPin/><span><small>Адрес</small><b>Алматы, ул. Кабанбай батыра, 85</b></span></div><div><Clock3/><span><small>Режим работы</small><b>Ежедневно, 10:00 — 22:00</b></span></div><div><Phone/><span><small>Телефон</small><b>+7 707 355 44 22</b></span></div></div><div className="contact-actions"><a className="btn btn-light" href="https://wa.me/77073554422" target="_blank" rel="noreferrer"><MessageCircle/>Написать в WhatsApp</a><a className="social" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a></div></div>
        <div className="contact-image atlas crop-5"><button className="map-pin" onClick={() => window.open('https://maps.google.com/?q=Кабанбай+батыра+85+Алматы', '_blank')} aria-label="Открыть карту"><MapPin/></button></div>
      </section>
    </main>

    <footer className="footer"><a className="brand brand-light" href="#top"><span className="brand-mark"><Leaf size={18}/></span><span>тихая<small>студия массажа</small></span></a><p>© 2026 Тихая. Пространство осознанного массажа.</p><div><a href="#services">Услуги</a><a href="#contacts">Контакты</a></div></footer>
    {booking && <BookingModal initialService={selectedService} onClose={() => setBooking(false)} />}
  </div>
}

function BookingModal({ initialService, onClose }) {
  const [step, setStep] = useState(initialService ? 2 : 1)
  const [service, setService] = useState(initialService)
  const [specialist, setSpecialist] = useState(null)
  const [month, setMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })
  const [errors, setErrors] = useState({})

  const slots = ['10:00', '11:30', '13:00', '15:00', '16:30', '18:00', '19:30', '21:00']
  const busy = useMemo(() => date ? (Number(dateKey(date).slice(-2)) % 2 ? ['11:30', '16:30'] : ['10:00', '15:00', '19:30']) : [], [date])
  const days = useMemo(() => {
    const start = new Date(month.getFullYear(), month.getMonth(), 1)
    const offset = (start.getDay() + 6) % 7
    const total = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
    return [...Array(offset).fill(null), ...Array.from({ length: total }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1))]
  }, [month])
  const monthLabel = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(month)
  const today = new Date(); today.setHours(0,0,0,0)

  const canNext = step === 1 ? !!service : step === 2 ? !!specialist : step === 3 ? !!date && !!time : true
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Введите корректный номер'
    setErrors(e)
    if (!Object.keys(e).length) setStep(5)
  }
  const closeBackdrop = (e) => { if (e.target === e.currentTarget) onClose() }

  return <div className="modal-backdrop" onMouseDown={closeBackdrop} role="dialog" aria-modal="true">
    <div className="booking-modal">
      <button className="modal-close" onClick={onClose} aria-label="Закрыть"><X/></button>
      {step < 5 && <><div className="booking-top"><div><span className="eyebrow">Онлайн-запись</span><h2>{['Выберите ритуал','Выберите мастера','Дата и время','Расскажите о себе'][step-1]}</h2></div><span className="step-count">0{step} / 04</span></div><div className="progress"><i style={{width: `${step * 25}%`}}/></div></>}

      <div className="booking-content">
        {step === 1 && <div className="choice-list">{services.map(s => <button key={s.id} className={service?.id === s.id ? 'choice selected' : 'choice'} onClick={() => setService(s)}><div className={`choice-img atlas ${s.crop}`}></div><div><b>{s.title}</b><small>{s.duration} минут · {currency(s.price)}</small></div><span>{service?.id === s.id ? <Check/> : <ArrowRight/>}</span></button>)}</div>}
        {step === 2 && <div className="master-choices">{specialists.map(m => <button key={m.id} className={specialist?.id === m.id ? 'master-choice selected' : 'master-choice'} onClick={() => setSpecialist(m)}><img className="master-mini" src={m.image} alt=""/><b>{m.name}</b><small>{m.role}</small>{specialist?.id === m.id && <i><Check/></i>}</button>)}</div>}
        {step === 3 && <div className="date-layout"><div className="calendar"><div className="calendar-head"><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()-1, 1))}><ChevronLeft/></button><b>{monthLabel}</b><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()+1, 1))}><ChevronRight/></button></div><div className="weekdays">{['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d=><span key={d}>{d}</span>)}</div><div className="days">{days.map((d,i) => d ? <button key={dateKey(d)} disabled={d < today} className={date && dateKey(d) === dateKey(date) ? 'day selected' : 'day'} onClick={() => {setDate(d);setTime(null)}}>{d.getDate()}</button> : <span key={`e${i}`}/>)}</div></div><div className="times"><b>{date ? ruDate(date) : 'Выберите дату'}</b><p>{date ? 'Доступное время' : 'Здесь появятся свободные слоты'}</p>{date && <div className="slots">{slots.map(s => <button key={s} disabled={busy.includes(s)} className={time === s ? 'selected' : ''} onClick={() => setTime(s)}>{s}{busy.includes(s) && <small>занято</small>}</button>)}</div>}</div></div>}
        {step === 4 && <div className="client-form"><label>Ваше имя *<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Как к вам обращаться?" className={errors.name ? 'error' : ''}/>{errors.name && <small>{errors.name}</small>}</label><label>Номер телефона *<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+7 700 000 00 00" className={errors.phone ? 'error' : ''}/>{errors.phone && <small>{errors.phone}</small>}</label><label>Комментарий <textarea value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})} placeholder="Пожелания, зоны внимания или важная информация" rows="3"/></label><div className="summary-line"><span><CalendarDays/>{date && ruDate(date)}, {time}</span><b>{service?.title}</b></div></div>}
        {step === 5 && <div className="success"><div className="success-icon"><Check/></div><span className="eyebrow">Запись подтверждена</span><h2>{form.name}, ждём вас<br/><em>в «Тихой»</em></h2><p>Мы сохранили время и скоро отправим напоминание на указанный номер.</p><div className="success-card"><div><small>Ритуал</small><b>{service.title}</b></div><div><small>Мастер</small><b>{specialist.name}</b></div><div><small>Дата и время</small><b>{ruDate(date)}, {time}</b></div><div><small>Стоимость</small><b>{currency(service.price)}</b></div></div><button className="btn btn-accent" onClick={onClose}>Вернуться на главную <ArrowRight/></button></div>}
      </div>
      {step < 5 && <div className="booking-footer">{step > 1 ? <button className="btn btn-ghost" onClick={() => setStep(step-1)}><ArrowLeft/>Назад</button> : <span/>}<button className="btn btn-dark" disabled={!canNext} onClick={() => step === 4 ? validate() : setStep(step+1)}>{step === 4 ? 'Подтвердить запись' : 'Продолжить'}<ArrowRight/></button></div>}
    </div>
  </div>
}

export default App
