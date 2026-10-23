/**
 * Prufbase landing content. Projects, founders and numbers below are DEMO DATA that illustrate the
 * future catalog; they are not real businesses. Replace with live data once the first founders connect.
 */

export type Provider = "ЮKassa" | "CloudPayments" | "Robokassa" | "Prodamus";

export type DemoProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  founder: string;
  provider: Provider;
  /** MRR in rubles */
  mrr: number;
  /** month-over-month growth, percent (null = not enough history) */
  growth: number | null;
  /** last 12 monthly MRR points, rubles */
  series: number[];
  /** asking price in rubles when the project is for sale */
  price?: number;
};

/** Deterministic 12-month curve ending at `end`, so server and client render the same chart. */
function curve(end: number, monthly: number, wobble = 0.04, seed = 1): number[] {
  const points: number[] = [];
  let value = end;
  for (let i = 0; i < 12; i++) {
    points.unshift(Math.round(value));
    const noise = Math.sin((i + 1) * 2.3 * seed) * wobble;
    value = value / (1 + monthly + noise);
  }
  return points;
}

export const demoProjects: DemoProject[] = [
  { slug: "tasker", name: "Таскер", category: "Продуктивность", description: "Трекер задач для небольших команд", founder: "Алексей К.", provider: "ЮKassa", mrr: 412_300, growth: 14, series: curve(412_300, 0.14, 0.03, 1) },
  { slug: "kvitok", name: "Квиток", category: "Финтех", description: "Учёт чеков и закрывающих документов", founder: "Мария С.", provider: "CloudPayments", mrr: 286_900, growth: 9, series: curve(286_900, 0.09, 0.04, 2) },
  { slug: "pismo", name: "Письмо.ai", category: "ИИ", description: "Черновики деловой переписки с ИИ", founder: "Дмитрий Р.", provider: "ЮKassa", mrr: 198_400, growth: 22, series: curve(198_400, 0.22, 0.05, 3), price: 2_400_000 },
  { slug: "stolbik", name: "Столбик", category: "Аналитика", description: "Дашборды для интернет-магазинов", founder: "Ольга Т.", provider: "CloudPayments", mrr: 164_200, growth: 6, series: curve(164_200, 0.06, 0.03, 4) },
  { slug: "kurs-lab", name: "Курс-лаб", category: "Образование", description: "Платформа для авторских мини-курсов", founder: "Иван П.", provider: "Prodamus", mrr: 121_700, growth: 3, series: curve(121_700, 0.03, 0.05, 5), price: 1_500_000 },
  { slug: "pinbot", name: "Пинбот", category: "Маркетинг", description: "Telegram-боты для рассылок и воронок", founder: "Егор Л.", provider: "ЮKassa", mrr: 96_500, growth: 17, series: curve(96_500, 0.17, 0.04, 6) },
  { slug: "dokus", name: "Докус", category: "Юр-тех", description: "Конструктор договоров для самозанятых", founder: "Анна В.", provider: "Robokassa", mrr: 74_800, growth: -2, series: curve(74_800, -0.02, 0.05, 7), price: 780_000 },
  { slug: "fotoprint", name: "Фотопринт", category: "E-commerce", description: "Конструктор фотокниг и календарей", founder: "Павел Н.", provider: "Robokassa", mrr: 58_100, growth: 8, series: curve(58_100, 0.08, 0.05, 8) },
  { slug: "ritm", name: "Ритм", category: "Здоровье", description: "Трекер привычек с напоминаниями", founder: "Софья М.", provider: "CloudPayments", mrr: 41_900, growth: 11, series: curve(41_900, 0.11, 0.04, 9), price: 420_000 },
  { slug: "vitrina-io", name: "Витрина.io", category: "No-code", description: "Мини-сайты для экспертов", founder: "Кирилл Б.", provider: "ЮKassa", mrr: 33_600, growth: null, series: curve(33_600, 0.1, 0.05, 10) },
];

export const recentlyVerified = demoProjects.filter((p) => !p.price).slice(0, 6);
export const forSale = demoProjects.filter((p) => p.price);

/** Price / ARR, the "multiple" shown on sale cards. */
export function multiple(project: DemoProject): string {
  if (!project.price) return "—";
  return `${(project.price / (project.mrr * 12)).toFixed(1).replace(".", ",")}x`;
}

const rubFormat = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

export function formatRub(value: number): string {
  return `${rubFormat.format(value).replace(/\s/g, "\u00a0")}\u00a0₽`;
}

/** Compact ruble amount: 2,4 млн ₽ / 420 тыс. ₽. */
export function formatRubShort(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(".", ",")}\u00a0млн\u00a0₽`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}\u00a0тыс.\u00a0₽`;
  return `${value}\u00a0₽`;
}

export type SponsorSlot = { id: string };
export const sponsorSlots: { left: SponsorSlot[]; right: SponsorSlot[] } = {
  left: [{ id: "l1" }, { id: "l2" }, { id: "l3" }, { id: "l4" }, { id: "l5" }],
  right: [{ id: "r1" }, { id: "r2" }, { id: "r3" }, { id: "r4" }, { id: "r5" }],
};

export const steps = [
  {
    n: "01",
    title: "Подключи",
    text: "Создай в кабинете ЮKassa или CloudPayments ключ только для чтения и вставь его в Prufbase. Пара минут, без разработчика.",
  },
  {
    n: "02",
    title: "Получи бейдж",
    text: "Мы сами считаем MRR и ARR по данным провайдера. Цифры обновляются автоматически — подделать или «подкрутить» их нельзя.",
  },
  {
    n: "03",
    title: "Встрой куда угодно",
    text: "Бейдж и карточка проекта — на сайт, в README, в пост на vc.ru или в Telegram. Пруф всегда ведёт на страницу с живыми цифрами.",
  },
] as const;

export const features = [
  { title: "Тег «продаётся»", text: "Продаёшь проект? Отметь это в карточке — покупатели увидят проверенную выручку, цену и мультипликатор.", stage: "Первый релиз" },
  { title: "Мультипровайдерная сверка", text: "Выручка идёт через несколько систем? Сведём источники в одну честную цифру.", stage: "Следом" },
  { title: "AI-видимость", text: "llms.txt и schema.org для карточки, чтобы ИИ-поиск находил твой проект. Платный ад-он, разово.", stage: "Следом" },
  { title: "Telegram-бот", text: "Уведомления и управление профилем прямо в Telegram — там, где вы и так сидите.", stage: "Позже" },
  { title: "REST API и MCP-сервер", text: "Данные каталога для сервисов и ИИ-агентов, включая GigaChat.", stage: "Позже" },
  { title: "Бенчмарки по нишам", text: "Сравнивай свой рост с медианой по российскому рынку.", stage: "Позже" },
] as const;

export const securityPoints = [
  { title: "Только чтение", text: "Код физически не может списать или перевести деньги: мы вызываем только GET-эндпоинты провайдера." },
  { title: "Только агрегаты", text: "Сырые транзакции не храним — только итоговые MRR и ARR." },
  { title: "Шифрование и 152-ФЗ", text: "Ключ хранится зашифрованным (AES-256) на серверах в России." },
  { title: "Отзыв в один клик", text: "Отключил провайдера — карточка скрывается через 14 дней. Ключ можно отозвать и на стороне провайдера." },
  { title: "Проверяемость", text: "Планируем открыть код коннектора на GitHub, чтобы любой мог убедиться, что он только читает." },
] as const;

export const providers: { name: string; group: "now" | "next" | "later"; note?: string }[] = [
  { name: "ЮKassa", group: "now" },
  { name: "CloudPayments", group: "now" },
  { name: "Robokassa", group: "next" },
  { name: "Prodamus", group: "next" },
  { name: "Т-Kassa", group: "later" },
  { name: "Открытые банковские API", group: "later", note: "по графику ЦБ РФ" },
];

export const providerGroups = {
  now: "Стартуем с",
  next: "Затем",
  later: "Позже",
} as const;

export const audiences = [
  { title: "Фаундерам", text: "Покажи выручку так, чтобы ей поверили без скриншота и честного слова." },
  { title: "Покупателям готового бизнеса", text: "Смотри проверенный MRR, рост и цену проекта в одном месте." },
  { title: "Инвесторам ранней стадии", text: "Находи растущие проекты по данным платёжных систем, а не по постам." },
  { title: "Спонсорам и рекламодателям", text: "Попади в поле зрения аудитории, которая считает деньги." },
] as const;

export const faq = [
  { q: "Бесплатно ли?", a: "Базовый листинг — да, бесплатно. Ад-оны (например, AI-видимость или спонсорское место) — опционально и платно. Первым 50 проектам — бесплатно и без очереди." },
  { q: "А если передумаю?", a: "Отключаешь провайдера — карточка скрывается через 14 дней. Ключ можно отозвать в один клик, в том числе в кабинете самого провайдера." },
  { q: "Чем отличается от постов на vc.ru?", a: "Там — слова, здесь — цифры, проверенные через API платёжного провайдера. Скриншот редактируется за 30 секунд в Figma, а ключ только для чтения подделать нельзя." },
  { q: "Что вы храните?", a: "Email, данные проекта и ключ только для чтения (в зашифрованном виде). Сырые транзакции не храним — только агрегаты MRR и ARR. Серверы в России, 152-ФЗ." },
  { q: "Какие провайдеры поддерживаются?", a: "Стартуем с ЮKassa и CloudPayments, затем Robokassa и Prodamus. Т-Kassa и открытые банковские API — позже." },
] as const;

export const footerColumns: { title: string; links: [label: string, href: string][] }[] = [
  {
    title: "Продукт",
    links: [
      ["Как работает", "#how"],
      ["Пример каталога", "#catalog"],
      ["Безопасность", "#security"],
      ["Провайдеры", "#providers"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Для кого",
    links: audiences.map((a) => [a.title, "#for-whom"] as [string, string]),
  },
];
