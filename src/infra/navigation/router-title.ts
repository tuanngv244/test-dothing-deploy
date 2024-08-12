export const mapRouteTitle = {
  "web3-domain": "Web3 domain is?",
  "web3-domains": "Web3 domain",
  domain: "Domain",
  premium: "Premium domain",
  "find-out": "Find out",
  "sell-the-domain": "Sell the domain",
  "utilize-the-domain": "Utilize the domain",
  "link-my-wallet": "Link my wallet",
  "create-my-domain": "Create my domain",
  "prepare-my-wallet": "Prepare my wallet",
  "search-web3-domain": "Search Web3 domain",
  "buy-web3-domain": "Buy Web3 domain",
  "polygon-minting": "Polygon Minting",
  "link-to-wallet-address": "Link to wallet address",
  "transfer-the-domain": "Transfer the domain",
  "login-with-ud": "Login with UD",
  "profile-settings": "Profile settings",
  "websites-ipfs": "Websites & IPFS",
  "use-email-ud": "Use UD Email",
  "selling-opensea": "Selling OpenSea",
  "sales-on-the-ud-site": "Sales on the UD site",
  "add-nft-avatar": "Add NFT Avatar",
  "building-website": "Building a website",
  insight: "Insight",
  "latest-news": "뉴스",
  all: "All",
  kica: "KICA",
  ud: "UD",
  "customer-support": "자주 묻는 질문",
  Announcement: "Announcement",
  announcement: "Announcement",
  "contact-us": "Contact us",
  notification: "Notification",
  event: "Event",
  General: "Common",
  general: "Common",
  "purchase-phase": "Purchasing procedure",
  "Purchase phase": "Purchasing procedure",
  "How to use": "How to use",
  "how-to-use": "How to use",
  "latest-news-v2": "latest-news-v2",
  recognition: "recognition",
  dps: "DPS",
  das: "DAS",
  services: "서비스",
  "mobile-iot": "Consulting/loT Service",
  products: "제품",
  "nebula-pick": "NEBULA Pick",
  "nebula-platform": "NEBULA Platform",
  "nebula-mobile-type": "NEBULA Mobile Type",
  faq: "자주 묻는 질문",
};

export type mapRouteTitleProps = keyof typeof mapRouteTitle;

export const find_out_pages = [
  "create-my-domain",
  "link-my-wallet",
  "utilize-the-domain",
  "sell-the-domain",
];

export const insight_pages = [
  "recognition",
  "latest-news",
  "latest-news-v2",
  "contact-us-v1",
  "contact-us",
];

export const customer_pages = ["announcement", "faq", "contact-us"];

export const tabsPage = {
  1: "create-my-domain",
  2: "link-my-wallet",
  3: "utilize-the-domain",
  4: "sell-the-domain",
};

export type tabsPageProps = keyof typeof tabsPage;

export const tabsPageValue = {
  "create-my-domain": "1",
  "link-my-wallet": "2",
  "utilize-the-domain": "3",
  "sell-the-domain": "4",
};

export type tabsPageValueProps = keyof typeof tabsPageValue;

// Find out page
export const pages = {
  "create-my-domain": [
    "prepare-my-wallet",
    "search-web3-domain",
    "buy-web3-domain",
  ],
  "link-my-wallet": [
    "polygon-minting",
    "link-to-wallet-address",
    "transfer-the-domain",
  ],
  "utilize-the-domain": [
    "login-with-ud",
    "profile-settings",
    "websites-ipfs",
    "use-email-ud",
    "add-nft-avatar",
    "building-website",
  ],
  "sell-the-domain": ["selling-opensea", "sales-on-the-ud-site"],
};

export type pagesProps = keyof typeof pages;

export const categories = [
  "prepare-my-wallet",
  "search-web3-domain",
  "buy-web3-domain",
  "polygon-minting",
  "link-to-wallet-address",
  "transfer-the-domain",
  "login-with-ud",
  "profile-settings",
  "websites-ipfs",
  "selling-opensea",
  "sales-on-the-ud-site",
  "use-email-ud",
  "add-nft-avatar",
  "building-website",
];

export const categoriesContent = {
  "prepare-my-wallet": { title: "Install", content: "" },
  "search-web3-domain": { title: "Web3 domain", content: "" },
  "buy-web3-domain": { title: "Buy Web3 domain", content: "" },
  "polygon-minting": { title: "Polygon minting", content: "" },
  "link-to-wallet-address": { title: "Link to wallet address", content: "" },
  "transfer-the-domain": { title: "Transfer the domain", content: "" },
  "login-with-ud": { title: "Login with UD", content: "" },
  "profile-settings": { title: "Profile settings", content: "" },
  "websites-ipfs": { title: "Websites & IPFS", content: "" },
  "selling-opensea": { title: "Selling OpenSea", content: "" },
  "sales-on-the-ud-site": { title: "Sales on the UD site", content: "" },
  "use-email-ud": { title: "Use UD Email", content: "" },
  "add-nft-avatar": { title: "Add NFT Avatar", content: "" },
  "building-website": { title: "Building a website", content: "" },
};

// Insight page
export const pageInsight = {
  "latest-news": ["all", "kica", "ud"],
};

export type pageInsightProps = "latest-news";

// Customer Support
export const pageCustomerSupport = {
  announcement: ["all", "notification", "event"],
  faq: ["all", "common", "purchasing-procedure", "how-to-use"],
  "contact-us": ["all"],
};
