export const services = [
  { id: 'web', name: 'Web Designing & Development', icon: '🌐',
    short: 'Fast, responsive websites and web apps that convert visitors into customers.',
    points: ['Custom UI/UX design', 'React, Next.js & Node.js', 'E-commerce & CMS builds', 'Performance and SEO-ready code'] },
  { id: 'software', name: 'Software Development', icon: '💻',
    short: 'Tailor-made business software built to fit the way your team works.',
    points: ['Custom ERP, CRM & dashboards', 'API and system integrations', 'Legacy system modernisation', 'Testing, deployment & support'] },
  { id: 'flutter', name: 'Flutter App Development', icon: '📱',
    short: 'One codebase, beautiful native-quality apps on Android and iOS.',
    points: ['Cross-platform mobile apps', 'Clean, smooth UI', 'Firebase & REST API integration', 'Play Store / App Store launch'] },
  { id: 'saas', name: 'SaaS Development', icon: '☁️',
    short: 'Scalable subscription products, from MVP to multi-tenant platform.',
    points: ['MVP planning & build', 'Multi-tenant architecture', 'Billing & subscriptions', 'Analytics and admin panels'] },
  { id: 'marketing', name: 'Digital Marketing', icon: '📈',
    short: 'Grow your reach and leads with measurable, data-driven campaigns.',
    points: ['SEO & content strategy', 'Social media & paid ads', 'Email and funnel automation', 'Monthly performance reports'] },
  { id: 'consultancy', name: 'Consultancy', icon: '🧭',
    short: 'Clear technology and growth strategy before you spend on building.',
    points: ['Digital strategy & roadmaps', 'Tech stack and architecture review', 'Process and cost optimisation', 'Startup and product advisory'] },
];

// Sample posts – replace with your own content.
// cat = filter category, tips = short step list shown when the card is expanded.
export const blogCats = ['All', 'Web', 'Apps', 'SaaS', 'Marketing', 'Strategy'];
export const blogs = [
  { id: 21, cat: 'Web', tag: 'Web design', date: 'Oct 26, 2026', read: '6 min',
    title: 'Your website should work like your best salesperson',
    text: 'It should answer questions, build trust and ask for the enquiry, all day, every day. Here is how to turn a brochure site into one that brings in customers.',
    tips: ['Say what you do and who it is for in the first line of the page.', 'Show proof near the top: reviews, logos and real results.', 'Give every page one clear next step, such as Call, Book or Get a quote.', 'Make the contact form short and add a phone or WhatsApp button.'] },
  { id: 1, cat: 'Web', tag: 'Web', date: 'Oct 12, 2026', read: '4 min', title: '5 website mistakes that quietly cost you customers',
    text: 'Slow loading, unclear calls to action and poor mobile layouts are easy to miss, and expensive. Here is how to spot and fix them.',
    tips: ['Test your site on a phone over mobile data, not just wifi.', 'Put one clear call to action above the fold.', 'Compress images and remove scripts you do not use.', 'Show proof: reviews, logos and results near the top.'] },
  { id: 22, cat: 'Web', tag: 'Speed', date: 'Oct 03, 2026', read: '4 min', title: 'Why a slow website loses sales, and how to speed it up',
    text: 'Visitors leave quickly when pages hang. A few simple fixes can make your site feel instant on any phone.',
    tips: ['Resize and compress images before you upload them.', 'Remove plugins and scripts you no longer need.', 'Use a fast host and turn on caching.', 'Check your speed again after every big change.'] },
  { id: 23, cat: 'Apps', tag: 'Mobile apps', date: 'Oct 08, 2026', read: '5 min', title: 'Do you need a mobile app? Five questions to decide',
    text: 'An app is a big step. These questions help you decide between a great website, a web app or a full mobile app.',
    tips: ['Will customers use it often, or only once in a while?', 'Do you need features like push notifications, camera or offline use?', 'Would a fast mobile website solve the same problem?', 'Can you budget for updates after launch, not just the first release?'] },
  { id: 2, cat: 'Apps', tag: 'Flutter', date: 'Sep 28, 2026', read: '5 min', title: 'Flutter or native: which is right for your first app?',
    text: 'A practical look at budget, speed to market and long-term maintenance to help you choose the right path.',
    tips: ['Choose Flutter when you need Android and iOS fast on one budget.', 'Choose native when you need deep hardware features.', 'Plan for updates: apps need care after launch.', 'Start with the smallest version that proves the idea.'] },
  { id: 3, cat: 'SaaS', tag: 'SaaS', date: 'Sep 05, 2026', read: '6 min', title: 'From idea to SaaS MVP in 8 weeks',
    text: 'The steps we follow to validate a product, scope the first release and launch without overbuilding.',
    tips: ['Talk to 10 potential users before writing code.', 'List features, then cut until only the core loop remains.', 'Ship weekly demos so feedback arrives early.', 'Launch to a small group and measure what they actually use.'] },
  { id: 24, cat: 'SaaS', tag: 'Pricing', date: 'Aug 30, 2026', read: '5 min', title: 'How to price your SaaS product without guessing',
    text: 'Price on the value you create, not on your costs. A simple structure makes it easy for customers to say yes.',
    tips: ['Find the result customers get and price a fraction of it.', 'Offer three plans so the choice becomes which, not whether.', 'Start with a free trial or a small starter plan.', 'Review prices every six months with real usage data.'] },
  { id: 4, cat: 'Marketing', tag: 'SEO', date: 'Aug 19, 2026', read: '4 min', title: 'SEO basics every small business should get right',
    text: 'Keyword intent, page speed and helpful content: the fundamentals that move rankings month after month.',
    tips: ['Write one page per service, targeting what people really search.', 'Make pages load fast on mobile.', 'Answer real customer questions in plain language.', 'Claim and complete your Google Business profile.'] },
  { id: 25, cat: 'Marketing', tag: 'Ads', date: 'Aug 12, 2026', read: '5 min', title: 'Google Ads or SEO: where should you spend first?',
    text: 'Ads bring visitors this week, SEO builds results over months. Here is how to choose, or combine them sensibly.',
    tips: ['Use ads when you need leads quickly and have a clear offer.', 'Use SEO to build steady traffic that does not stop when the budget does.', 'Send ad clicks to a focused landing page, not the home page.', 'Track every enquiry so you know what is really working.'] },
  { id: 26, cat: 'Strategy', tag: 'Planning', date: 'Aug 02, 2026', read: '5 min', title: 'How to plan a digital project: budget, timeline and scope',
    text: 'Clear goals and a smaller first release save money. Use this simple plan before you brief any team.',
    tips: ['Write the one goal the project must achieve.', 'List must-have features and move the rest to phase two.', 'Agree a fixed timeline with weekly check-ins.', 'Keep 10 to 15 percent of the budget for changes and surprises.'] },
];

export const journey = [
  { icon: '🔍', t: 'Attract', d: 'SEO and ads bring the right people to your site.', s: 'Digital Marketing' },
  { icon: '🎨', t: 'Impress', d: 'A fast, clear design builds trust in seconds.', s: 'Web Design' },
  { icon: '🖱️', t: 'Convert', d: 'Simple forms and clear buttons turn visits into enquiries.', s: 'Development' },
  { icon: '📱', t: 'Serve', d: 'Apps and portals make repeat business easy.', s: 'Flutter & SaaS' },
  { icon: '📈', t: 'Grow', d: 'Measure results and keep improving every month.', s: 'Consultancy' },
];
export const steps = [
  { icon: '🔍', t: 'Discover', d: 'We learn your goals, users and constraints.' },
  { icon: '🗺️', t: 'Plan', d: 'Scope, roadmap and a clear, fixed timeline.' },
  { icon: '🎨', t: 'Design', d: 'Interfaces you can click through before we build.' },
  { icon: '⚙️', t: 'Build', d: 'Clean code, weekly demos and thorough testing.' },
  { icon: '🚀', t: 'Launch & grow', d: 'Go live, measure, and keep improving.' },
];
export const stack = ['React', 'Node.js', 'Flutter', 'Firebase', 'Next.js', 'PostgreSQL', 'AWS', 'Figma', 'SEO', 'Google Ads', 'Stripe', 'Docker'];

// Contact details – edit once, used in the footer and the Contact page.
export const contact = {
  email: 'info@apexstrategix.us',
  phone: '+92 312 2954527',
  phoneHref: 'tel:+923122954527',
  whatsapp: 'https://wa.me/923122954527',
  hours: 'Mon–Fri, 9am–6pm',
};

// Hide phone / WhatsApp buttons until real numbers are filled in above.
export const hasPhone = /[1-9]/.test(contact.phoneHref);
export const hasWhatsApp = /[1-9]/.test(contact.whatsapp.replace(/^.*wa\.me\//, ''));

// Company social profiles
export const socialLinks = {
  instagram: 'https://www.instagram.com/apex_strategix/',
  linkedin: 'https://www.linkedin.com/company/apex-strategix/',
  facebook: 'https://www.facebook.com/share/1CA5vQ3Wfk/?mibextid=wwXIfr',
};
