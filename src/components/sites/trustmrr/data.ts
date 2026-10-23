// Generated from https://trustmrr.com/ (home page). Images are mirrored in public/sites/trustmrr/img.
// Links to pages that are not part of this clone point at the live site via SOURCE_ORIGIN.
export type Sponsor = { title: string; href: string; description: string; icon: string; bg: string };
export type Listing = { href: string; name: string; category: string; revenue: string; price: string; multiple: string; logo: string | null };
export type LeaderboardRow = {
  rank: string; href: string; name: string; badge: boolean; blurName: boolean; blurDesc: boolean;
  description: string | null; logo: string | null; letter: string | null;
  founder: string; founderLetter: string | null; founderHref: string | null; founderAvatar: string | null;
  mrr: string; stale: boolean; growth: string; trend: "up" | "down" | "flat";
};
export type TweetSegment = { text: string; href?: string };
export type Tweet = {
  author: string; authorHref: string; avatar: string | null; startup: string; startupHref: string; startupLogo: string | null;
  time: string; segments: TweetSegment[]; clamp: boolean; media: (string | null)[]; likes: string; replies: string;
};
export type FooterLink = [label: string, href: string];

export const SOURCE_ORIGIN = "https://trustmrr.com";

export const leftSponsors: Sponsor[] = [
  {
    "title": "Chargeback.io",
    "href": "https://chargeback.io/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Prevent chargebacks on autopilot",
    "icon": "/sites/trustmrr/img/fav-chargeback.io.png",
    "bg": "rgb(229, 236, 254)"
  },
  {
    "title": "Hermoso.ai",
    "href": "https://hermoso.ai/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Best price for AI video & images 🚀 no markup on models!",
    "icon": "/sites/trustmrr/img/ad4d0559b0.png",
    "bg": "rgb(229, 246, 254)"
  },
  {
    "title": "BlogSEO",
    "href": "https://blogseo.io/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "SEO on autopilot: Rank #1 on Google & ChatGPT (Try for free)",
    "icon": "/sites/trustmrr/img/2867443be9.png",
    "bg": "rgb(255, 247, 228)"
  },
  {
    "title": "Higgsfield",
    "href": "https://higgsfield.ai/marclou?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Create AI videos and images with Higgsfield",
    "icon": "/sites/trustmrr/img/1a0b0f27bb.png",
    "bg": "rgb(230, 255, 240)"
  },
  {
    "title": "Blotato",
    "href": "https://www.blotato.com/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Social Media API & MCP for Claude",
    "icon": "/sites/trustmrr/img/fav-www.blotato.com.png",
    "bg": "rgb(255, 230, 242)"
  }
];
export const rightSponsors: Sponsor[] = [
  {
    "title": "Higgsfield",
    "href": "https://higgsfield.ai/marclou?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Create AI videos and images with Higgsfield",
    "icon": "/sites/trustmrr/img/1a0b0f27bb.png",
    "bg": "rgb(230, 255, 240)"
  },
  {
    "title": "Fuse AI",
    "href": "https://fuseai.com/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "10x revenue with AI agents built to find, enrich, and engage customers.",
    "icon": "/sites/trustmrr/img/af93084d1b.png",
    "bg": "rgb(249, 230, 255)"
  },
  {
    "title": "Higgsfield",
    "href": "https://higgsfield.ai/marclou?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Create AI videos and images with Higgsfield",
    "icon": "/sites/trustmrr/img/1a0b0f27bb.png",
    "bg": "rgb(230, 255, 240)"
  },
  {
    "title": "Virlo",
    "href": "https://virlo.ai/?utm_source=trustmrr&utm_medium=referral&utm_campaign=sponsor_card",
    "description": "Track, manage, leverage short-form video trends",
    "icon": "/sites/trustmrr/img/fav-virlo.ai.png",
    "bg": "rgb(255, 230, 242)"
  }
];
export const recentlyListed: Listing[] = [
  {
    "href": "/startup/preloved-ai",
    "name": "PreLoved AI",
    "category": "Artificial Intelligence",
    "revenue": "$3.5k",
    "price": "$185k",
    "multiple": "4.4x",
    "logo": "/sites/trustmrr/img/ad6e986086.jpg"
  },
  {
    "href": "/startup/veloris-llc",
    "name": "Agent Media",
    "category": "Artificial Intelligence",
    "revenue": "$2.4k",
    "price": "$50k",
    "multiple": "1.7x",
    "logo": "/sites/trustmrr/img/e880ba24b8.png"
  },
  {
    "href": "/startup/fairmoney-loan-debt-tracker",
    "name": "Fairmoney: Loan & Debt Tracker",
    "category": "Fintech",
    "revenue": "$97",
    "price": "$5k",
    "multiple": "4.3x",
    "logo": "/sites/trustmrr/img/fcd8e3eba5.jpg"
  },
  {
    "href": "/startup/hidden-business-59",
    "name": "Hidden Business",
    "category": "Artificial Intelligence",
    "revenue": "$5k",
    "price": "$180k",
    "multiple": "3.0x",
    "logo": "/sites/trustmrr/img/d3725e8323.png"
  },
  {
    "href": "/startup/diskzy",
    "name": "Diskzy - See where your Mac's space went.",
    "category": "Utilities",
    "revenue": "$82",
    "price": "$5k",
    "multiple": "5.1x",
    "logo": "/sites/trustmrr/img/39762a3d9d.png"
  },
  {
    "href": "/startup/incoming-call",
    "name": "Incoming Call",
    "category": "Entertainment",
    "revenue": "$2.9k",
    "price": "$50k",
    "multiple": "1.4x",
    "logo": "/sites/trustmrr/img/3a2f32e909.png"
  },
  {
    "href": "/startup/builtbyme",
    "name": "BuiltByMe",
    "category": "Developer Tools",
    "revenue": "$49",
    "price": "$3k",
    "multiple": "5.1x",
    "logo": "/sites/trustmrr/img/e37617ac0d.jpg"
  },
  {
    "href": "/startup/inxanity-labs",
    "name": "INXANITY Labs — Browser Gaming & AI Modding Platform",
    "category": "Community",
    "revenue": "$1.3k",
    "price": "$60k",
    "multiple": "3.9x",
    "logo": "/sites/trustmrr/img/c5d94a14aa.png"
  },
  {
    "href": "/startup/kaja-ai",
    "name": "Kaja AI",
    "category": "Artificial Intelligence",
    "revenue": "$169",
    "price": "$9k",
    "multiple": "4.4x",
    "logo": "/sites/trustmrr/img/609ee06249.jpg"
  },
  {
    "href": "/startup/zerano-club",
    "name": "Zerano Club",
    "category": "Analytics",
    "revenue": "$3.6k",
    "price": "$20k",
    "multiple": "0.5x",
    "logo": "/sites/trustmrr/img/7ea2c93672.png"
  }
];
export const bestDeals: Listing[] = [
  {
    "href": "/startup/static-forms",
    "name": "Static Forms",
    "category": "Developer Tools",
    "revenue": "$945",
    "price": "$40k",
    "multiple": "3.5x",
    "logo": "/sites/trustmrr/img/46d70ba1d3.png"
  },
  {
    "href": "/startup/veloris-llc",
    "name": "Agent Media",
    "category": "Artificial Intelligence",
    "revenue": "$2.4k",
    "price": "$50k",
    "multiple": "1.7x",
    "logo": "/sites/trustmrr/img/e880ba24b8.png"
  },
  {
    "href": "/startup/linkerflow",
    "name": "Linkerflow",
    "category": "Marketing",
    "revenue": "$660",
    "price": "$37k",
    "multiple": "4.7x",
    "logo": "/sites/trustmrr/img/cb32bfecf8.png"
  },
  {
    "href": "/startup/anonymous-startup-74",
    "name": "Anonymous Startup",
    "category": "Mobile Apps",
    "revenue": "$36k",
    "price": "$1.2M",
    "multiple": "2.8x",
    "logo": "/sites/trustmrr/img/d3725e8323.png"
  },
  {
    "href": "/startup/zerogpt-plus",
    "name": "ZeroGPT Plus",
    "category": "Education",
    "revenue": "$4.4k",
    "price": "$150k",
    "multiple": "2.9x",
    "logo": "/sites/trustmrr/img/9b2f611c5e.jpg"
  },
  {
    "href": "/startup/zerano-club",
    "name": "Zerano Club",
    "category": "Analytics",
    "revenue": "$3.6k",
    "price": "$20k",
    "multiple": "0.5x",
    "logo": "/sites/trustmrr/img/7ea2c93672.png"
  },
  {
    "href": "/startup/hidden-business-59",
    "name": "Hidden Business",
    "category": "Artificial Intelligence",
    "revenue": "$5k",
    "price": "$180k",
    "multiple": "3.0x",
    "logo": "/sites/trustmrr/img/d3725e8323.png"
  },
  {
    "href": "/startup/aarivi",
    "name": "Aarivi",
    "category": "Artificial Intelligence",
    "revenue": "$1.7k",
    "price": "$18k",
    "multiple": "0.9x",
    "logo": "/sites/trustmrr/img/74c05c5da2.png"
  },
  {
    "href": "/startup/wave",
    "name": "Wave → Instagram Outreach",
    "category": "Marketing",
    "revenue": "$5.7k",
    "price": "$75k",
    "multiple": "1.1x",
    "logo": "/sites/trustmrr/img/f694ae84d3.jpg"
  },
  {
    "href": "/startup/lista",
    "name": "Lista: AI Crosslisting & Tools",
    "category": "Artificial Intelligence",
    "revenue": "$916",
    "price": "$50k",
    "multiple": "4.5x",
    "logo": "/sites/trustmrr/img/d573ce9e05.jpg"
  }
];
export const leaderboard: LeaderboardRow[] = [
  {
    "rank": "🥇",
    "href": "/startup/stan",
    "name": "Stan",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Stan enables people to make living and work for themselves.",
    "logo": "/sites/trustmrr/img/9d26571ea1.png",
    "letter": null,
    "founder": "Vitalii Dodonov",
    "founderLetter": null,
    "founderHref": "/founder/vitaliidodonov",
    "founderAvatar": "/sites/trustmrr/img/a289163bcf.jpg",
    "mrr": "$3,569,654",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "🥈",
    "href": "/startup/chatbase",
    "name": "Chatbase",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Create an AI chatbot for your business. Charge during checkout.",
    "logo": "/sites/trustmrr/img/de0fc524ac.png",
    "letter": null,
    "founder": "Yasser Elsaid",
    "founderLetter": null,
    "founderHref": "/founder/yasser_elsaid_",
    "founderAvatar": "/sites/trustmrr/img/83feeb7d30.png",
    "mrr": "$863,632",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "🥉",
    "href": "/startup/superfruits",
    "name": "GojiberryAI",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "GojiberryAI is an AI-powered GTM platform that helps B2B teams find high-intent prospects and turn buying signals into conversations.",
    "logo": "/sites/trustmrr/img/14b21f8b94.png",
    "letter": null,
    "founder": "romàn czerny",
    "founderLetter": null,
    "founderHref": "/founder/romanbuildsaas",
    "founderAvatar": "/sites/trustmrr/img/90d0529c0c.jpg",
    "mrr": "$424,368",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "4",
    "href": "/startup/postiz",
    "name": "Postiz",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Postiz is the ultimate agentic social media scheduler tool",
    "logo": "/sites/trustmrr/img/990f21414d.png",
    "letter": null,
    "founder": "Nevo David",
    "founderLetter": null,
    "founderHref": "/founder/wickedguro",
    "founderAvatar": "/sites/trustmrr/img/f6eb54ddb4.jpg",
    "mrr": "$301,494",
    "stale": false,
    "growth": "45%",
    "trend": "up"
  },
  {
    "rank": "5",
    "href": "/startup/anonymous-startup-25",
    "name": "Anonymous Startup",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "A",
    "founder": "Andrei Orsich",
    "founderLetter": null,
    "founderHref": "/founder/anorsich",
    "founderAvatar": "/sites/trustmrr/img/24e09e4caa.jpg",
    "mrr": "$280,039",
    "stale": false,
    "growth": "44%",
    "trend": "up"
  },
  {
    "rank": "6",
    "href": "/startup/1lookup",
    "name": "1Lookup",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "The #1 tool for validating phone, email and IP data in real time. All through one powerful API.",
    "logo": "/sites/trustmrr/img/30c6231a41.jpg",
    "letter": null,
    "founder": "Robby Frank",
    "founderLetter": null,
    "founderHref": "/founder/robbyfrank",
    "founderAvatar": "/sites/trustmrr/img/86147d90a8.png",
    "mrr": "$266,949",
    "stale": false,
    "growth": "13%",
    "trend": "up"
  },
  {
    "rank": "7",
    "href": "/startup/kl23iod2mdka",
    "name": "Private Venture",
    "badge": false,
    "blurName": true,
    "blurDesc": true,
    "description": "B2B workforce-management SaaS",
    "logo": null,
    "letter": "P",
    "founder": "david",
    "founderLetter": null,
    "founderHref": "/founder/gregorian909",
    "founderAvatar": "/sites/trustmrr/img/48c6a815f8.jpg",
    "mrr": "$248,341",
    "stale": false,
    "growth": "1%",
    "trend": "down"
  },
  {
    "rank": "8",
    "href": "/startup/rezi",
    "name": "Rezi",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Most people agree this is the best resume builder in the world.\n\nWe have about 1M new users every year. \n\nRezi Enterprise, a new and growing product, supports over 300 organizations, including 1 fortune 500, and multiple universities. \n\nWe are now working to allow companies a way to connect with job seekers, and bridge the gap between company and job seeker while bringing transparency to job seekers.",
    "logo": "/sites/trustmrr/img/fc9c724f76.jpg",
    "letter": null,
    "founder": "Jacob Jacquet",
    "founderLetter": null,
    "founderHref": "/founder/jacob_jacquet",
    "founderAvatar": "/sites/trustmrr/img/8fdff83473.jpg",
    "mrr": "$245,313",
    "stale": false,
    "growth": "3%",
    "trend": "down"
  },
  {
    "rank": "9",
    "href": "/startup/kibu",
    "name": "Kibu",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Content, compliance, and EHR (Electronic Health Record) software platform built specifically for provider organizations serving people with intellectual and developmental disabilities (I/DD). \n\nIt helps these organizations teach people with special needs while managing regulatory compliance, documentation, and care delivery across hundreds of organizations and 48 states.",
    "logo": "/sites/trustmrr/img/85fc2d3e0d.png",
    "letter": null,
    "founder": "Daniel Caridi",
    "founderLetter": null,
    "founderHref": "/founder/ddcaridi",
    "founderAvatar": "/sites/trustmrr/img/92bee0bc3e.png",
    "mrr": "$234,319",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "10",
    "href": "/startup/stealth-venture-3",
    "name": "Stealth Venture",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "S",
    "founder": "Simon",
    "founderLetter": null,
    "founderHref": "/founder/nomistair",
    "founderAvatar": "/sites/trustmrr/img/3283c6eb62.jpg",
    "mrr": "$209,459",
    "stale": false,
    "growth": "3%",
    "trend": "up"
  },
  {
    "rank": "11",
    "href": "/startup/cometly",
    "name": "Cometly",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Marketing attribution and analytics for SaaS companies. Use AI to chat with your ads data.",
    "logo": "/sites/trustmrr/img/0de31b5d6c.png",
    "letter": null,
    "founder": "Grant Cooper",
    "founderLetter": null,
    "founderHref": "/founder/heygrantcooper",
    "founderAvatar": "/sites/trustmrr/img/35717267f9.png",
    "mrr": "$198,643",
    "stale": false,
    "growth": "3%",
    "trend": "down"
  },
  {
    "rank": "12",
    "href": "/startup/brand-on-demand-inc",
    "name": "Brand On Demand, Inc.",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Supliful is an all-in-one platform for Creators to launch and operate a scalable CPG brand. Our approach unifies the entire business cycle – from product selection all the way through e-commerce enablement and order fulfillment – into a single digital platform with no upfront costs. We charge customers at the time they make the purchase.",
    "logo": "/sites/trustmrr/img/b3c35f341c.png",
    "letter": null,
    "founder": "Martins Lasmanis",
    "founderLetter": null,
    "founderHref": "/founder/martinlasmanis",
    "founderAvatar": "/sites/trustmrr/img/1206639548.jpg",
    "mrr": "$180,995",
    "stale": false,
    "growth": "1%",
    "trend": "up"
  },
  {
    "rank": "13",
    "href": "/startup/hidden-business-12",
    "name": "Hidden Business",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "H",
    "founder": "Killian",
    "founderLetter": null,
    "founderHref": "/founder/sowakillian",
    "founderAvatar": "/sites/trustmrr/img/ea8bfcf862.jpg",
    "mrr": "$173,164",
    "stale": false,
    "growth": "0%",
    "trend": "flat"
  },
  {
    "rank": "14",
    "href": "/startup/medical-practice-medical-consulting-agency",
    "name": "Anonymous Startup",
    "badge": false,
    "blurName": true,
    "blurDesc": true,
    "description": "Hormone Prescribing service in UK & Operations/Automation Consulting Agency",
    "logo": null,
    "letter": "A",
    "founder": "Haych",
    "founderLetter": null,
    "founderHref": "/founder/consumedenough",
    "founderAvatar": "/sites/trustmrr/img/a1a1d95cf7.png",
    "mrr": "$168,725",
    "stale": false,
    "growth": "1%",
    "trend": "up"
  },
  {
    "rank": "15",
    "href": "/startup/aeo-engine",
    "name": "AEO Engine",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "The AI SEO agency that makes you the answer in AI Overviews, ChatGPT, and Google.",
    "logo": "/sites/trustmrr/img/6c79c5efa4.png",
    "letter": null,
    "founder": "Vijay Jacob",
    "founderLetter": null,
    "founderHref": "/founder/vc_jacob",
    "founderAvatar": "/sites/trustmrr/img/53a495ee58.jpg",
    "mrr": "$167,833",
    "stale": false,
    "growth": "45%",
    "trend": "up"
  },
  {
    "rank": "16",
    "href": "/startup/online-edtech",
    "name": "Confidential Startup",
    "badge": true,
    "blurName": true,
    "blurDesc": true,
    "description": "Profitable online language learning platform combining live 1-on-1 tutoring with AI-powered speaking practice, personalized learning and learner analytics.",
    "logo": null,
    "letter": "C",
    "founder": "ht",
    "founderLetter": null,
    "founderHref": "/founder/dnd",
    "founderAvatar": "/sites/trustmrr/img/f9421ac678.jpg",
    "mrr": "$156,236",
    "stale": false,
    "growth": "9%",
    "trend": "up"
  },
  {
    "rank": "17",
    "href": "/startup/stealth-company-17",
    "name": "Stealth Company",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "S",
    "founder": "Saad",
    "founderLetter": null,
    "founderHref": "/founder/saadmarkets",
    "founderAvatar": "/sites/trustmrr/img/c2ce62200a.jpg",
    "mrr": "$135,899",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "18",
    "href": "/startup/prosp",
    "name": "PROSP",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Automate your LinkedIn Outreach with AI",
    "logo": "/sites/trustmrr/img/3628bf51e5.png",
    "letter": null,
    "founder": "Yann | Prosp.ai",
    "founderLetter": null,
    "founderHref": "/founder/yanndine",
    "founderAvatar": "/sites/trustmrr/img/6d26f0b60b.png",
    "mrr": "$128,005",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "19",
    "href": "/startup/windmill-growth-llc",
    "name": "Windmill Growth, LLC",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Windmill provides marketing services to help amplify personal brands.",
    "logo": "/sites/trustmrr/img/04dfd4c77f.png",
    "letter": null,
    "founder": "Ben Buaron",
    "founderLetter": null,
    "founderHref": "/founder/benbuaron_",
    "founderAvatar": "/sites/trustmrr/img/300237b741.jpg",
    "mrr": "$118,447",
    "stale": false,
    "growth": "1%",
    "trend": "down"
  },
  {
    "rank": "20",
    "href": "/startup/upscale-system-llc",
    "name": "Upscale System LLC",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "We sell CRM and Lead generation softwares.",
    "logo": "/sites/trustmrr/img/fc1e6c22c8.png",
    "letter": null,
    "founder": "Warm Inboxes",
    "founderLetter": null,
    "founderHref": "/founder/warminboxes",
    "founderAvatar": "/sites/trustmrr/img/7835cd8bdc.jpg",
    "mrr": "$104,971",
    "stale": false,
    "growth": "17%",
    "trend": "up"
  },
  {
    "rank": "21",
    "href": "/startup/unnamed-company-49",
    "name": "Unnamed Company",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "U",
    "founder": "Eric Smith",
    "founderLetter": null,
    "founderHref": "/founder/ericsmith1302",
    "founderAvatar": "/sites/trustmrr/img/a3fd336c8a.jpg",
    "mrr": "$92,853",
    "stale": false,
    "growth": "15%",
    "trend": "down"
  },
  {
    "rank": "22",
    "href": "/startup/stealth-company-53",
    "name": "Stealth Company",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "S",
    "founder": "MaxTalksTech",
    "founderLetter": null,
    "founderHref": "/founder/maxtalkstech_",
    "founderAvatar": "/sites/trustmrr/img/306e199511.jpg",
    "mrr": "$87,115",
    "stale": false,
    "growth": "80%",
    "trend": "up"
  },
  {
    "rank": "23",
    "href": "/startup/propgpt-ai-props-analysis",
    "name": "PropGPT: AI Props Analysis",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Unleash the power of AI and elevate your betting game with PropGPT: AI Props Analysis, the first app of its kind dedicated to transforming how you approach sports betting.",
    "logo": null,
    "letter": "P",
    "founder": "Eyal Cohen",
    "founderLetter": null,
    "founderHref": "/founder/eyali__",
    "founderAvatar": "/sites/trustmrr/img/c9f6f05f79.jpg",
    "mrr": "$84,061",
    "stale": false,
    "growth": "1%",
    "trend": "up"
  },
  {
    "rank": "24",
    "href": "/startup/codedex",
    "name": "Codédex",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Start your coding adventure ⋆˙⟡",
    "logo": "/sites/trustmrr/img/7e47de5d14.png",
    "letter": null,
    "founder": "Sonny Li",
    "founderLetter": null,
    "founderHref": "/founder/sonnynomnom",
    "founderAvatar": "/sites/trustmrr/img/5ef625b24b.jpg",
    "mrr": "$83,418",
    "stale": false,
    "growth": "3%",
    "trend": "down"
  },
  {
    "rank": "25",
    "href": "/startup/supergrow",
    "name": "Supergrow",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": null,
    "logo": "/sites/trustmrr/img/8dcf7bf928.png",
    "letter": null,
    "founder": "Deven",
    "founderLetter": null,
    "founderHref": "/founder/devenbhooshan",
    "founderAvatar": "/sites/trustmrr/img/2052bb56c6.jpg",
    "mrr": "$79,479",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "26",
    "href": "/startup/llm-gateway",
    "name": "LLM Gateway",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "LLM Gateway is an open-source API gateway for Large Language Models (LLMs). It acts as a middleware between your applications and various LLM providers, allowing you to:\n\n- Route requests to multiple LLM providers (OpenAI, Anthropic, Google AI Studio, and others)\n- Manage API keys for different providers in one place\n- Track token usage and costs across all your LLM interactions\n- Analyze performance metrics to optimize your LLM usage",
    "logo": "/sites/trustmrr/img/562009e8b6.png",
    "letter": null,
    "founder": "LLM Gateway",
    "founderLetter": null,
    "founderHref": "/founder/llmgateway",
    "founderAvatar": "/sites/trustmrr/img/8c026909d3.jpg",
    "mrr": "$78,764",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "27",
    "href": "/startup/omegleweb",
    "name": "OmegleWeb",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "OmegleWeb is a free Omegle alternative to talk to strangers with random video chat or text chat.",
    "logo": null,
    "letter": "O",
    "founder": "OmegleWeb",
    "founderLetter": null,
    "founderHref": "/founder/omegleweb",
    "founderAvatar": "/sites/trustmrr/img/cf6ec9413d.jpg",
    "mrr": "$73,085",
    "stale": false,
    "growth": "13%",
    "trend": "down"
  },
  {
    "rank": "28",
    "href": "/startup/ai-startup",
    "name": "Private Venture",
    "badge": false,
    "blurName": true,
    "blurDesc": false,
    "description": null,
    "logo": null,
    "letter": "P",
    "founder": "Kevin Yubin",
    "founderLetter": null,
    "founderHref": "/founder/kevyubin",
    "founderAvatar": "/sites/trustmrr/img/07cb2485cd.jpg",
    "mrr": "$70,350",
    "stale": false,
    "growth": "1%",
    "trend": "down"
  },
  {
    "rank": "29",
    "href": "/startup/white-glove-content",
    "name": "White Glove Content",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "We provide a subscription-based content production service for creators and brands who want to publish faceless video content across online social media platforms, including YouTube, TikTok, Instagram Reels, and Facebook. Clients pay a recurring monthly or annual fee and receive fully produced, ready-to-upload video content — including scripting, AI voiceover, video editing, and thumbnail design. All deliverables are provided digitally via their personal dashboard and ready for auto-upload.",
    "logo": "/sites/trustmrr/img/7625f0e735.png",
    "letter": null,
    "founder": "Dylan N.",
    "founderLetter": "D",
    "founderHref": null,
    "founderAvatar": null,
    "mrr": "$66,412",
    "stale": false,
    "growth": "5%",
    "trend": "up"
  },
  {
    "rank": "30",
    "href": "/startup/speel-co",
    "name": "Speel.co",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Use AI to generate realistic UGC-style videos and images for ads and socials.\nLaunched in October, went from 0 to 1M ARR in 3 months.",
    "logo": "/sites/trustmrr/img/1d1408474d.png",
    "letter": null,
    "founder": "Yann | Prosp.ai",
    "founderLetter": null,
    "founderHref": "/founder/yanndine",
    "founderAvatar": "/sites/trustmrr/img/6d26f0b60b.png",
    "mrr": "$65,647",
    "stale": false,
    "growth": "0%",
    "trend": "down"
  },
  {
    "rank": "31",
    "href": "/startup/podawaa",
    "name": "Podawaa",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Publish, grow, and own your audience on LinkedIn. Schedule content, engage your community, and turn analytics into results — all from one beautifully simple platform.",
    "logo": "/sites/trustmrr/img/e79f610cd4.png",
    "letter": null,
    "founder": "Tom Benattar",
    "founderLetter": null,
    "founderHref": "/founder/tombenattar",
    "founderAvatar": "/sites/trustmrr/img/df2ec24529.jpg",
    "mrr": "$64,695",
    "stale": false,
    "growth": "0%",
    "trend": "up"
  },
  {
    "rank": "32",
    "href": "/startup/project-a",
    "name": "Project A",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Project A is a popular AI-powered fortune-telling and astrology app with more than 50 Million downloads and 1M Active users. It provides personalized readings—including tarot, astrology, clairvoyance, and traditional coffee cup readings—by combining machine learning algorithms with ancient mystical practices.",
    "logo": "/sites/trustmrr/img/d78d3cc33f.jpg",
    "letter": null,
    "founder": "ST",
    "founderLetter": null,
    "founderHref": null,
    "founderAvatar": "/sites/trustmrr/img/4b5eab3e64.jpg",
    "mrr": "$63,263",
    "stale": false,
    "growth": "3%",
    "trend": "down"
  },
  {
    "rank": "33",
    "href": "/startup/promptwise",
    "name": "Promptwise",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Generative AI SaaS platform. Our offer consists of generative AI products and tools, that focus on AI video, image and audio generation. The services are offered through subscriptions and top-ups. Customers are charged on checkout and the Stripe product backed functionality is activated instantly.",
    "logo": "/sites/trustmrr/img/deafae8ace.png",
    "letter": null,
    "founder": "Mateo Starcevic Fili...",
    "founderLetter": null,
    "founderHref": null,
    "founderAvatar": "/sites/trustmrr/img/7525220985.jpg",
    "mrr": "$62,761",
    "stale": false,
    "growth": "23%",
    "trend": "up"
  },
  {
    "rank": "34",
    "href": "/startup/dropkiller",
    "name": "Dropkiller",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "We offer a subscription-based service that provides e-commerce entrepreneurs with access to product insights, ad creatives, and market analysis tools. Customers are charged at checkout or on a recurring monthly basis.",
    "logo": "/sites/trustmrr/img/ec6c25ebba.png",
    "letter": null,
    "founder": "-",
    "founderLetter": null,
    "founderHref": null,
    "founderAvatar": null,
    "mrr": "$60,179",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "35",
    "href": "/startup/gotall",
    "name": "GoTall",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Superwall ios application",
    "logo": null,
    "letter": "G",
    "founder": "Chenglin",
    "founderLetter": "C",
    "founderHref": null,
    "founderAvatar": null,
    "mrr": "$57,777",
    "stale": false,
    "growth": "4%",
    "trend": "down"
  },
  {
    "rank": "36",
    "href": "/startup/rankai",
    "name": "RankAI",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Get search visitors autonomously. \n\nRankAI runs autonomously – getting you millions of web visitors from Google & ChatGPT.\n\nInvestors from YCombinator, OpenAI, A16z, etc.",
    "logo": "/sites/trustmrr/img/e396432bd2.png",
    "letter": null,
    "founder": "Dylan",
    "founderLetter": null,
    "founderHref": "/founder/dyllan1020",
    "founderAvatar": "/sites/trustmrr/img/42494e5189.jpg",
    "mrr": "$56,533",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "37",
    "href": "/startup/iker",
    "name": "Gomotion AI",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "One-click documentary videos for YouTube automation using AI",
    "logo": "/sites/trustmrr/img/63c3fbd4e5.png",
    "letter": null,
    "founder": "Iker",
    "founderLetter": null,
    "founderHref": null,
    "founderAvatar": "/sites/trustmrr/img/c71ddbe108.jpg",
    "mrr": "$55,950",
    "stale": false,
    "growth": "63%",
    "trend": "up"
  },
  {
    "rank": "38",
    "href": "/startup/stealth-02",
    "name": "Hidden Business",
    "badge": false,
    "blurName": true,
    "blurDesc": true,
    "description": "O maior no Brasil :)\nsiga: @renanhiramatsu",
    "logo": null,
    "letter": "H",
    "founder": "Renan Hiramatsu",
    "founderLetter": null,
    "founderHref": "/founder/appm8ker",
    "founderAvatar": "/sites/trustmrr/img/3122cd87ae.jpg",
    "mrr": "$55,929",
    "stale": false,
    "growth": "0%",
    "trend": "up"
  },
  {
    "rank": "39",
    "href": "/startup/dataexpert-techcreator",
    "name": "DataExpert / TechCreator",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "DataExpert.io is a data engineering education company that empowers data engineers to level up their skills and become content creators as well!",
    "logo": "/sites/trustmrr/img/af7f0b8609.png",
    "letter": null,
    "founder": "Zach Wilson",
    "founderLetter": null,
    "founderHref": "/founder/eczachly",
    "founderAvatar": "/sites/trustmrr/img/ae4ff00ff8.jpg",
    "mrr": "$55,200",
    "stale": false,
    "growth": "2%",
    "trend": "down"
  },
  {
    "rank": "40",
    "href": "/startup/adspirer",
    "name": "Adspirer",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Adspirer is the AI-powered paid media agent for every business. We're building a future where any founder, marketer, or agency can manage their entire advertising operation — across Google, Meta, LinkedIn, and TikTok — through a simple conversation with their AI assistant.",
    "logo": "/sites/trustmrr/img/02ae22a0a8.png",
    "letter": null,
    "founder": "Abhilash Mekala",
    "founderLetter": null,
    "founderHref": "/founder/abhilashreddi",
    "founderAvatar": "/sites/trustmrr/img/1ab98e755b.jpg",
    "mrr": "$54,684",
    "stale": true,
    "growth": "_",
    "trend": "flat"
  },
  {
    "rank": "41",
    "href": "/startup/traxy-ai",
    "name": "traxy.ai",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "We built your best ever lead list - based on social media listening.",
    "logo": "/sites/trustmrr/img/9b5fd74f3b.png",
    "letter": null,
    "founder": "Ben Buaron",
    "founderLetter": null,
    "founderHref": "/founder/benbuaron_",
    "founderAvatar": "/sites/trustmrr/img/300237b741.jpg",
    "mrr": "$53,957",
    "stale": false,
    "growth": "28%",
    "trend": "up"
  },
  {
    "rank": "42",
    "href": "/startup/boothie",
    "name": "Boothie: AI Photo Editor",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Boothie is an AI photo app for iOS and Android.\n\nPick a look, upload a selfie, and get it re-rendered in that aesthetic: Canon G7X digicam, Kodak Gold film, vintage photobooth, night flash and more.\n\nA free editor with local filters is open to everyone; AI generations run on weekly subscriptions and credit packs.\n\nLive on iOS since June 2026, on Google Play since September 2026.",
    "logo": "/sites/trustmrr/img/b9e9b1e279.jpg",
    "letter": null,
    "founder": "Keremcan Şeker",
    "founderLetter": null,
    "founderHref": "/founder/keremcanseker_",
    "founderAvatar": "/sites/trustmrr/img/7a6a1a8c31.jpg",
    "mrr": "$52,185",
    "stale": false,
    "growth": "38%",
    "trend": "up"
  },
  {
    "rank": "43",
    "href": "/startup/post-bridge",
    "name": "POST BRIDGE",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Post your content to multiple social media platforms at the same time, all-in one place.",
    "logo": "/sites/trustmrr/img/0be46e40a1.jpg",
    "letter": null,
    "founder": "jack friks",
    "founderLetter": null,
    "founderHref": "/founder/jackfriks",
    "founderAvatar": "/sites/trustmrr/img/cd7cc9ab21.jpg",
    "mrr": "$49,811",
    "stale": false,
    "growth": "5%",
    "trend": "up"
  },
  {
    "rank": "44",
    "href": "/startup/indexsy-consulting-ltd",
    "name": "Indexsy",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "Buy seo services from us",
    "logo": "/sites/trustmrr/img/51838f4b14.png",
    "letter": null,
    "founder": "Jacky Chou (buying o...",
    "founderLetter": null,
    "founderHref": "/founder/indexsy",
    "founderAvatar": "/sites/trustmrr/img/5a1cb9c5e9.jpg",
    "mrr": "$48,955",
    "stale": false,
    "growth": "13%",
    "trend": "up"
  },
  {
    "rank": "45",
    "href": "/startup/virtualjk",
    "name": "VirtualJK",
    "badge": false,
    "blurName": false,
    "blurDesc": false,
    "description": "A Replicant of James Kemp trained on $25 million of consulting sales. \nWill build you a $3k offer, give you a campaign for $3k per week and and the strategy for $3k a day",
    "logo": "/sites/trustmrr/img/3e4dcc462d.png",
    "letter": null,
    "founder": "James Kemp",
    "founderLetter": null,
    "founderHref": "/founder/jaaims",
    "founderAvatar": "/sites/trustmrr/img/5314c3d0e6.jpg",
    "mrr": "$48,658",
    "stale": false,
    "growth": "4%",
    "trend": "down"
  },
  {
    "rank": "46",
    "href": "/startup/vidai-llc",
    "name": "Vid.AI",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Turn any idea or script into ready-to-post videos that get views. AI generates voiceovers, visuals, and edits – all in minutes, no skills needed.",
    "logo": "/sites/trustmrr/img/2ee8106281.jpg",
    "letter": null,
    "founder": "Priyam Raj",
    "founderLetter": null,
    "founderHref": "/founder/priymrj",
    "founderAvatar": "/sites/trustmrr/img/dee7ad578e.jpg",
    "mrr": "$46,424",
    "stale": false,
    "growth": "20%",
    "trend": "down"
  },
  {
    "rank": "47",
    "href": "/startup/laper",
    "name": "Laper",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "Laper is an all-in-one creative OS for screenwriters, directors, and storyboard artists—Cursor, CapCut, and Figma for visual storytelling.",
    "logo": "/sites/trustmrr/img/9664f74536.png",
    "letter": null,
    "founder": "Laper",
    "founderLetter": null,
    "founderHref": "/founder/laperforwriter",
    "founderAvatar": "/sites/trustmrr/img/cc9b41e7ce.jpg",
    "mrr": "$46,389",
    "stale": false,
    "growth": "6%",
    "trend": "up"
  },
  {
    "rank": "48",
    "href": "/startup/nutria-9e3eaa",
    "name": "Nutria (9e3eaa)",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "AI Calorie Tracker.",
    "logo": "/sites/trustmrr/img/3ab77ec53e.jpg",
    "letter": null,
    "founder": "-",
    "founderLetter": null,
    "founderHref": null,
    "founderAvatar": null,
    "mrr": "$46,238",
    "stale": false,
    "growth": "1%",
    "trend": "down"
  },
  {
    "rank": "49",
    "href": "/startup/conductor",
    "name": "Conductor",
    "badge": true,
    "blurName": false,
    "blurDesc": false,
    "description": "The best QuickBooks Desktop & Enterprise API on the planet.",
    "logo": "/sites/trustmrr/img/1e175f2032.png",
    "letter": null,
    "founder": "Danny Nemer",
    "founderLetter": null,
    "founderHref": "/founder/dannynemer",
    "founderAvatar": "/sites/trustmrr/img/7c2e08afeb.jpg",
    "mrr": "$44,124",
    "stale": false,
    "growth": "10%",
    "trend": "up"
  },
  {
    "rank": "50",
    "href": "/startup/faceless-so",
    "name": "Stealth Venture",
    "badge": false,
    "blurName": true,
    "blurDesc": true,
    "description": "All-in-One tool to grow your faceless channel. Generate niche videos with AI from custom prompts, Reddit posts, and blogs. Auto-post to YouTube, TikTok, Instagram.",
    "logo": null,
    "letter": "S",
    "founder": "Shivansh Mehendiratt...",
    "founderLetter": null,
    "founderHref": "/founder/shivanshco",
    "founderAvatar": "/sites/trustmrr/img/6ff058bab0.jpg",
    "mrr": "$44,116",
    "stale": false,
    "growth": "23%",
    "trend": "up"
  }
];
export const tweets: Tweet[] = [
  {
    "author": "Mojomatt",
    "authorHref": "/founder/mojomatt",
    "avatar": "/sites/trustmrr/img/aa2160f32c.jpg",
    "startup": "CopyDesign",
    "startupHref": "/startup/copydesign",
    "startupLogo": "/sites/trustmrr/img/14a8a6c004.png",
    "time": "1h",
    "segments": [
      {
        "text": "Our Chrome Extension is now live\n\n"
      },
      {
        "text": "chromewebstore.google.com/detail/copydes…",
        "href": "https://chromewebstore.google.com/detail/copydesign/abedjmckbppahoedgpbkoegacnpjpago"
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "AadarshhX8|",
    "authorHref": "/founder/aadarshhx8",
    "avatar": "/sites/trustmrr/img/743f0b5b13.jpg",
    "startup": "Betterdata",
    "startupHref": "/startup/betterdata",
    "startupLogo": "/sites/trustmrr/img/ab2a1bffc7.jpg",
    "time": "4h",
    "segments": [
      {
        "text": "🚀 Want a FREE DoFollow backlink for your website?\n\nI'm offering free DoFollow backlinks through "
      },
      {
        "text": "BetterData.dev",
        "href": "https://BetterData.dev"
      },
      {
        "text": " — a free website analytics tool built for founders and indie hackers.\n\n✅ 100% Free Analytics\n✅ No Paid Plans\n✅ Free DoFollow Backlink\n✅ No complicated setup\n\nGet started today 👇\n🔗 "
      },
      {
        "text": "betterdata.dev",
        "href": "https://betterdata.dev"
      },
      {
        "text": "\n\nBuilt for indie hackers, by an indie hacker. ❤️"
      }
    ],
    "clamp": true,
    "media": [
      "/sites/trustmrr/img/9a1827eaae.jpg"
    ],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "AadarshhX8|",
    "authorHref": "/founder/aadarshhx8",
    "avatar": "/sites/trustmrr/img/743f0b5b13.jpg",
    "startup": "Betterdata",
    "startupHref": "/startup/betterdata",
    "startupLogo": "/sites/trustmrr/img/ab2a1bffc7.jpg",
    "time": "4h",
    "segments": [
      {
        "text": "I was using datafast previously, but it was charging me 9$ and I don't have too many users that i can afford that plan, so i Vibecoded it : \n"
      },
      {
        "text": "betterdata.dev",
        "href": "https://betterdata.dev"
      },
      {
        "text": "\n\nIt has mcp, tracking, analytics, revnue based tracking, google console, api keys, etc\n\nGlobe 🌎 , graphs and its FREEEEEEEE FOR LIMITED USERS\n\nRight now its freee and upto 10 users can avail jt for free.\n\nEven u will get a Dofollow backlink"
      }
    ],
    "clamp": true,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "Vishrut Agarwalla",
    "authorHref": "/founder/vishrutwts",
    "avatar": "/sites/trustmrr/img/0d7b1e3c16.jpg",
    "startup": "ClearBar Mac App",
    "startupHref": "/startup/clearbar-mac-app",
    "startupLogo": "/sites/trustmrr/img/9ad19e0fba.png",
    "time": "5h",
    "segments": [
      {
        "text": "Show and hide your menu bar icons from the keyboard ⌨️\n\nClearBar 0.6.0: record any shortcut you like in Settings, press it from any app. Icons out, icons back.\n\nSomeone on Threads asked for it, so it's in.\n\n$5 one-time → "
      },
      {
        "text": "clearbarmac.app",
        "href": "https://clearbarmac.app"
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "1",
    "replies": "0"
  },
  {
    "author": "AadarshhX8|",
    "authorHref": "/founder/aadarshhx8",
    "avatar": "/sites/trustmrr/img/743f0b5b13.jpg",
    "startup": "DiddyDesign",
    "startupHref": "/startup/diddydesign",
    "startupLogo": "/sites/trustmrr/img/c67de92532.png",
    "time": "7h",
    "segments": [
      {
        "text": "I was using datafast previously, but it was charging me 9$ and I don't have too many users that i can afford that plan, so i Vibecoded it : \n"
      },
      {
        "text": "betterdata.dev",
        "href": "https://betterdata.dev"
      },
      {
        "text": "\n10:01 PM\n\n\n\n\nAadarsh Gupta\nIt has mcp, tracking, analytics, revnue based tracking, google console, api keys, etc\n10:02 PM\n\n\n\n\nAadarsh Gupta\nGlobe 🌎 , graphs and its FREEEEEEEE FOR LIMITED USERS\n10:02 PM\n\n\n\n\nAadarsh Gupta\nRight now its freee and upto 10 users can avail jt for free.\n10:03 PM\n\n\n\n\nAadarsh Gupta\nEven u will get a Dofollow backlink"
      }
    ],
    "clamp": true,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "Real Work Remote",
    "authorHref": "/founder/realworkremote",
    "avatar": "/sites/trustmrr/img/7785d70864.jpg",
    "startup": "Real work remote",
    "startupHref": "/startup/real-work-remote",
    "startupLogo": "/sites/trustmrr/img/acbb2cf74e.png",
    "time": "8h",
    "segments": [
      {
        "text": "added 250 more companies to the job board now totalling 8000+ companies"
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "Dodge Print",
    "authorHref": "/founder/dodgeprint_saas",
    "avatar": "/sites/trustmrr/img/a1ee828dac.jpg",
    "startup": "DodgePrint",
    "startupHref": "/startup/dodgeprint",
    "startupLogo": "/sites/trustmrr/img/1a90ac578e.png",
    "time": "10h",
    "segments": [
      {
        "text": "Big uppdate: DoTi - the AI Assistant for Etsy marketplace - is read !"
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "AadarshhX8|",
    "authorHref": "/founder/aadarshhx8",
    "avatar": "/sites/trustmrr/img/743f0b5b13.jpg",
    "startup": "Betterdata",
    "startupHref": "/startup/betterdata",
    "startupLogo": "/sites/trustmrr/img/ab2a1bffc7.jpg",
    "time": "10h",
    "segments": [
      {
        "text": "Dudeee this is insane : datafast 9$ and "
      },
      {
        "text": "betterdata.dev",
        "href": "https://betterdata.dev"
      },
      {
        "text": " for FREEEEE. \n\nTracking is sooo easy"
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "Jitesh Ghanchi🔺",
    "authorHref": "/founder/jiteshghanchi",
    "avatar": "/sites/trustmrr/img/fa6e9625c1.jpg",
    "startup": "Victrays",
    "startupHref": "/startup/victrays",
    "startupLogo": "/sites/trustmrr/img/7da93918e9.avif",
    "time": "14h",
    "segments": [
      {
        "text": "if you had only 1 hour a day for marketing your SaaS, what would you do?\n\n- write content\n- reply on reddit\n- post on X\n- cold outreach\n- something else?\n\ngenuinely curious."
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "0",
    "replies": "0"
  },
  {
    "author": "Vishrut Agarwalla",
    "authorHref": "/founder/vishrutwts",
    "avatar": "/sites/trustmrr/img/0d7b1e3c16.jpg",
    "startup": "ClearBar Mac App",
    "startupHref": "/startup/clearbar-mac-app",
    "startupLogo": "/sites/trustmrr/img/9ad19e0fba.png",
    "time": "16h",
    "segments": [
      {
        "text": "ClearBar is reviewed and featured on one of the Blog of a customer of ClearBar from Germany 🇩🇪\n\nBlog Link: "
      },
      {
        "text": "wattblicker.de/view.php",
        "href": "https://www.wattblicker.de/view.php?id=review-clearbar"
      },
      {
        "text": "\n\nSuper Happy that a stranger from different continent thinks that my app is worth a blog."
      }
    ],
    "clamp": false,
    "media": [],
    "likes": "1",
    "replies": "0"
  }
];
export const categories: FooterLink[] = [
  [
    "Artificial Intelligence",
    "/category/ai"
  ],
  [
    "SaaS",
    "/category/saas"
  ],
  [
    "Developer Tools",
    "/category/developer-tools"
  ],
  [
    "Fintech",
    "/category/fintech"
  ],
  [
    "Productivity",
    "/category/productivity"
  ],
  [
    "Marketing",
    "/category/marketing"
  ],
  [
    "E-commerce",
    "/category/ecommerce"
  ],
  [
    "Design Tools",
    "/category/design-tools"
  ],
  [
    "No-Code",
    "/category/no-code"
  ],
  [
    "Analytics",
    "/category/analytics"
  ],
  [
    "Education",
    "/category/education"
  ],
  [
    "Health & Fitness",
    "/category/health-fitness"
  ],
  [
    "Social Media",
    "/category/social-media"
  ],
  [
    "Content Creation",
    "/category/content-creation"
  ],
  [
    "Sales",
    "/category/sales"
  ],
  [
    "Customer Support",
    "/category/customer-support"
  ],
  [
    "Recruiting & HR",
    "/category/recruiting"
  ],
  [
    "Real Estate",
    "/category/real-estate"
  ],
  [
    "Travel",
    "/category/travel"
  ],
  [
    "Security",
    "/category/security"
  ]
];
export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    "title": "Navigation",
    "links": [
      [
        "Founder chats",
        "/chat"
      ],
      [
        "Buy/Sell Startups",
        "/acquire"
      ],
      [
        "Dashboard",
        "/dashboard"
      ],
      [
        "Affiliate program",
        "/affiliate"
      ],
      [
        "Feed",
        "/feed"
      ],
      [
        "Find Co-founders",
        "/cofounders"
      ],
      [
        "Search",
        "/search"
      ],
      [
        "All Startups",
        "/startups"
      ],
      [
        "Stats",
        "/stats"
      ],
      [
        "Revenue per LOC",
        "/loc"
      ],
      [
        "Domain Rating",
        "/domain-rating"
      ],
      [
        "Olympics",
        "/championship"
      ],
      [
        "Categories",
        "/category"
      ],
      [
        "Tech Stack",
        "/tech"
      ],
      [
        "Marketing Channels",
        "/channels"
      ],
      [
        "Recently Added",
        "/recent"
      ],
      [
        "Top 100 Startups",
        "/"
      ],
      [
        "Newsletter",
        "/newsletter"
      ],
      [
        "Why sell on TrustMRR",
        "/why-sell-on-trustmrr"
      ],
      [
        "About us",
        "/about"
      ],
      [
        "Compare marketplaces",
        "/compare"
      ],
      [
        "Compare startups",
        "/compete"
      ],
      [
        "$1 vs $1,000,000 Startup",
        "/game"
      ],
      [
        "APA, LOI, NDA templates",
        "/legal-docs"
      ],
      [
        "FAQ",
        "/faq"
      ],
      [
        "Terms of service",
        "/terms"
      ],
      [
        "Privacy policy",
        "/privacy"
      ],
      [
        "Support",
        "/dashboard"
      ],
      [
        "Telegram alerts",
        "https://t.me/trust_mrr_bot"
      ]
    ]
  },
  {
    "title": "Browse startups",
    "links": [
      [
        "Artificial Intelligence",
        "/category/ai"
      ],
      [
        "SaaS",
        "/category/saas"
      ],
      [
        "Developer Tools",
        "/category/developer-tools"
      ],
      [
        "Fintech",
        "/category/fintech"
      ],
      [
        "Marketing",
        "/category/marketing"
      ],
      [
        "E-commerce",
        "/category/ecommerce"
      ],
      [
        "Productivity",
        "/category/productivity"
      ],
      [
        "Design Tools",
        "/category/design-tools"
      ],
      [
        "No-Code",
        "/category/no-code"
      ],
      [
        "Analytics",
        "/category/analytics"
      ],
      [
        "Advertising platforms",
        "/special-category/advertising-platforms"
      ],
      [
        "OpenClaw",
        "/special-category/openclaw"
      ]
    ]
  },
  {
    "title": "API",
    "links": [
      [
        "Documentation",
        "/docs/api"
      ],
      [
        "List startups",
        "/docs/api/list-startups"
      ],
      [
        "Get startup",
        "/docs/api/get-startup"
      ],
      [
        "llms.txt",
        "/llms.txt"
      ],
      [
        "MCP server",
        "/mcp"
      ],
      [
        "Get API key",
        "/dashboard-dev"
      ]
    ]
  },
  {
    "title": "From the maker of TrustMRR",
    "links": [
      [
        "Newsletter for entrepreneurs",
        "https://newsletter.marclou.com/"
      ],
      [
        "CodeFast",
        "https://codefa.st/"
      ],
      [
        "ShipFast",
        "https://shipfa.st/"
      ],
      [
        "DataFast",
        "https://datafa.st/"
      ],
      [
        "Stalkr",
        "https://www.stalkr.ai/"
      ],
      [
        "ByeDispute",
        "https://byedispute.com/"
      ],
      [
        "IndiePage",
        "https://indiepa.ge/"
      ],
      [
        "ZenVoice",
        "https://zenvoice.io/"
      ],
      [
        "GamifyList",
        "https://gamifylist.com/"
      ],
      [
        "Unicorne",
        "https://unicor.ne/"
      ],
      [
        "WorkbookPDF",
        "https://workbookpdf.com/"
      ],
      [
        "HabitsGarden",
        "https://habitsgarden.com/"
      ],
      [
        "MailCheap",
        "https://mailcheap.ai/"
      ]
    ]
  }
];
