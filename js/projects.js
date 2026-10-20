const projectsData = [
  {
    id: "haas",
    title: "HAAS: Japanese & Asian Ingredients Store",
    tag: "PROTOCOL_ECOM_B2B_B2C",
    status: "LIVE_PRODUCTION",
    icon: "fas fa-fish",
    systemName: "Dual_Channel_Commerce_Engine",
    uptime: "99%",
    liveUrl: "https://haas.eg",
    screenshot: "img/haas.png",
    screenshots: [
      "img/haas.png",
      "img/haas2.png",
      "img/haas3.png",
      "img/haas7.png",
      "img/haas8.png",
      "img/haas6.png",
      "img/haas4.png",
      "img/haas5.png",
    ],
    features: [
      "Direct-Importer B2C + B2B Catalog",
      "WhatsApp Quote Flow w/ Prefilled Product",
      "Retail-to-Catering Size Tiers (500ml-18.9L)",
      "Bilingual Arabic/English Storefront",
    ],
    description:
      "A full WooCommerce build for HAAS for Distribution, which imports Japanese and Asian food into Egypt directly and sells it two ways from one catalog: home cooks checking out online, and restaurants, hotels, and retailers ordering by quote. As the Egyptian arm for the manufacturers it represents, HAAS carries four house brands, BUY4U, DEPATO, MR.HUNG, and OCEAN, plus imported lines outside them, spanning dry Asian ingredients, sauces and pastes, frozen, canned food, and full sushi-programme stock like nori, sashimi salmon, and wasabi.",
    challenge:
      "The same product line up needed to serve a home cook buying a single 500ml bottle of soy sauce and a hotel kitchen ordering the 18.9 litre catering size of the same item, without forcing either one through the other's checkout. Kitchens also don't want to create an account and wait on a sales rep just to find out a price, they want to send a list and get a number back.",
    solution:
      "I built the storefront on WooCommerce with a fully custom theme, putting retail and catering sizes of the same product side by side and giving every product page two paths: add to cart for a standard checkout with card or cash on delivery, or request a wholesale quote through a form or WhatsApp message that arrives with the product name already filled in. Four house brands sit under one supplier relationship so a kitchen restocking BUY4U, DEPATO, MR.HUNG, and OCEAN places one order instead of four, and the same catalog also feeds HAAS's listings on Amazon.eg and Noon.com.",
    metric1: { label: "SALES_CHANNELS", value: "B2C + B2B" },
    metric2: { label: "HOUSE_BRANDS", value: "4" },
    tech: [
      { name: "WordPress", type: "CMS" },
      { name: "WooCommerce", type: "Commerce_Engine" },
      { name: "Custom Theme", type: "Frontend" },
    ],
    mermaid:
      "graph TD\n    Catalog[(4-Brand Direct-Import Catalog)] --> Retail[B2C Retail Storefront]\n    Catalog --> Wholesale[B2B Wholesale Path]\n    Retail --> Checkout[Card + Cash on Delivery]\n    Wholesale --> WhatsApp[WhatsApp/Form Quote Request]\n    WhatsApp --> Pricing[Pricing + MOQ Response]\n    Catalog --> Marketplaces[Amazon.eg / Noon.com Listings]",
  },
  {
    id: "masar",
    title: "Masar: Saudi Visa/Nusuk Automation Platform",
    tag: "PROTOCOL_ENTERPRISE_MICROSERVICES",
    status: "LIVE_PRODUCTION",
    icon: "fas fa-network-wired",
    systemName: "Masar_Compose_Stack",
    uptime: "99%",
    liveUrl: "https://masarsync.com",
    screenshot: "img/masar_4.png",
    screenshots: [
      "img/masar_4.png",
      "img/masar_1.png",
      "img/masar_2.png",
      "img/masar_3.png",
      "img/masar_6.png",
      "img/masar_7.png",
      "img/masar_5.png",
    ],
    features: [
      "5 Microservices (Docker Compose)",
      "OCR Document Intelligence",
      "PostgreSQL Job Queue with SKIP LOCKED",
      "Multi-Tenant SaaS Architecture",
    ],
    description:
      "An enterprise microservices platform that automates the full Saudi visa and Nusuk workflow. Django backend services communicate with a React/Vite frontend, while direct API integrations handle Nusuk operations more reliably than browser-based automation. Azure Document Intelligence, OpenAI, and Gemini process passport data and supporting documents. The platform has been running in production at masarsync.com since mid-2026 and supports hundreds of pilgrim records across multiple tenant companies.",
    challenge:
      "The main challenge was bringing document processing, Nusuk API operations, and a customer-facing dashboard together in one system that teams could use every day. The workflow also had to stay accurate across different companies, users, documents, and pilgrim records without relying on a collection of disconnected scripts.",
    solution:
      "I split the SaaS platform into 5 independently deployable microservices behind a Docker Compose stack. The Django services manage the business workflow and API integrations, while PostgreSQL handles reliable job coordination using SKIP LOCKED to prevent workers from processing the same record twice. Azure Document Intelligence and OpenAI/Gemini process uploaded documents, and the Nusuk API integration keeps the automation more flexible, accurate, faster, and less expensive than browser-based workflows. The architecture is documented across 7 guides to make handover and future development straightforward.",
    metric1: { label: "MICROSERVICES", value: "5" },
    metric2: { label: "LOC_DOCKER_COMPOSE", value: "284" },
    tech: [
      { name: "Django", type: "Backend" },
      { name: "React", type: "Frontend" },
      { name: "PostgreSQL", type: "Database_Queue" },
    ],
    mermaid:
      "graph TD\n    FE[React/Vite Frontend] --> Gateway[Django API Services]\n    Gateway --> Queue[(PostgreSQL Job Queue)]\n    Queue --> Lock[SKIP LOCKED Workers]\n    Lock --> OCR[Document Intelligence]\n    Lock --> Nusuk[Nusuk API Integration]\n    OCR --> Store[(Postgres DB)]\n    Nusuk --> Portal[Nusuk Services]",
  },
  {
    id: "learnlab",
    title: "LearnLab: Adaptive Math Practice Platform",
    tag: "PROTOCOL_ADAPTIVE_LEARNING",
    status: "CAPSTONE_COMPLETE",
    icon: "fas fa-graduation-cap",
    systemName: "FSRS_Retention_Engine",
    uptime: "99%",
    liveUrl: "https://github.com/Th30v3rf10w/LearnLab",
    liveUrlLabel: "VIEW_ON_GITHUB",
    screenshot: "img/learnlab_1.png",
    screenshots: [
      "img/learnlab_1.png",
      "img/learnlab_8.png",
      "img/learnlab_10.png",
      "img/learnlab_5.png",
      "img/learnlab_2.png",
      "img/learnlab_4.png",
      "img/learnlab_3.png",
      "img/learnlab_7.png",
      "img/learnlab_9.png",
      "img/learnlab_6.png",
    ],
    features: [
      "FSRS-5 Spaced Repetition Scheduling",
      "AI PDF-to-Question Pipeline (Gemini)",
      "Educator Retention Analytics Dashboard",
      "3-Tier Difficulty Question Bank",
    ],
    description:
      "A Progressive Web App that swaps passive video lectures for active, algorithm-scheduled problem solving in discrete mathematics. Every student gets their own memory model, teachers get a curriculum pipeline that writes itself, and the whole thing is backed by a dashboard that shows exactly where a class is struggling.",
    challenge:
      "Students default to re-watching lecture videos, which creates what cognitive scientists call an illusion of competence. They recognize the material on screen but can't actually recall or apply it on an exam. Teachers, meanwhile, have zero visibility into which subtopics a class is genuinely retaining versus just clicking through.",
    solution:
      "I built a Django 5.2 and React 19/TypeScript PWA around the FSRS-5 spaced-repetition algorithm, the same memory model behind tools like Anki, tuned per subtopic instead of per flashcard. It tracks stability, difficulty, and next-review date for every subtopic and resurfaces it right before a student would forget it. An async pipeline built on PyMuPDF and Gemini takes an uploaded textbook PDF and turns it into structured, difficulty-tiered questions in minutes, work that used to take a teacher weeks of manual writing. On top of that sits an educator dashboard aggregating retention and mastery per subtopic, so a teacher walks in knowing exactly which topic needs a review session instead of guessing.",
    metric1: { label: "BACKEND_LOC", value: "3,017" },
    metric2: { label: "MEMORY_MODEL", value: "FSRS-5" },
    tech: [
      { name: "Django", type: "Backend" },
      { name: "React 19", type: "Frontend" },
      { name: "Gemini", type: "AI_Pipeline" },
    ],
    mermaid:
      "graph TD\n    PDF[Textbook PDF] --> Extract[PyMuPDF Extraction]\n    Extract --> Gemini[Gemini Structured Generation]\n    Gemini --> Bank[(Question Bank)]\n    Bank --> FSRS[FSRS-5 Scheduler]\n    FSRS --> Practice[Practice Session PWA]\n    Practice --> Dashboard[Educator Analytics Dashboard]",
  },
  {
    id: "almutanafison",
    title: "Al-Mutanafison: Islamic Habit Tracker",
    tag: "PROTOCOL_MOBILE_OFFLINE_FIRST",
    status: "LIVE_ON_PLAY_STORE",
    icon: "fas fa-mobile-alt",
    systemName: "Deed_Sync_Engine",
    uptime: "100%",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.almutanafison.al_almutanafison_app",
    liveUrlLabel: "VIEW_ON_GOOGLE_PLAY",
    screenshot: "img/almutanafison_1.jpg",
    screenshots: [
      "img/almutanafison_1.jpg",
      "img/almutanafison_2.jpg",
      "img/almutanafison_3.jpg",
      "img/almutanafison_4.jpg",
      "img/almutanafison_5.jpg",
    ],
    features: [
      "Offline-First (Hive)",
      "Fajr-Based Day Boundary",
      "Realtime Community Counters",
      "Arabic-First UI/UX",
    ],
    description:
      "An Arabic-first Flutter app that tracks 8 daily Islamic deeds and shows a live, globally-shared count of how many people completed each one today. It works fully offline with Hive as the local store, syncs eventually through Supabase Realtime, and uses a custom Fajr-to-Fajr day boundary instead of civil midnight, because that's genuinely how the day starts for the people using it. Live on the Play Store now.",
    challenge:
      "Keeping one shared counter in sync across thousands of offline-first phones is harder than it sounds. Get it wrong and you end up double-counting a deed, losing someone's progress when they toggle it off, or watching the count reset every time the app restarts or the network drops.",
    solution:
      "I built a deed-scoped stream lock with a settle window that suppresses stale remote counts while a local change is still in flight, a 30-second polling fallback that automatically re-subscribes to Supabase Realtime if the connection drops, and a Riverpod controller that updates the UI optimistically instead of waiting on a round trip to the server.",
    metric1: { label: "OFFLINE_CAPABLE", value: "100%" },
    metric2: { label: "REALTIME_SYNC_FALLBACK", value: "30s" },
    tech: [
      { name: "Flutter", type: "Framework" },
      { name: "Riverpod", type: "State" },
      { name: "Supabase", type: "Backend" },
    ],
    mermaid:
      "graph TD\n    UI[Checklist UI] --> Controller[ChecklistController]\n    Controller --> Hive[(Hive Local Store)]\n    Controller --> Repo[DeedRepository]\n    Repo --> Realtime[Supabase Realtime]\n    Realtime --> Counter[LocalDeedCounterService]\n    Counter --> Poll[30s Polling Fallback]\n    Counter --> UI",
  },
  {
    id: "qse-daily-report-generator",
    title: "QSE Daily Report Generator",
    tag: "PROTOCOL_FINTECH_REPORTING",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-file-pdf",
    systemName: "Report_Control_Panel",
    uptime: "99%",
    screenshot: "img/qse_daily_7.jpg",
    screenshots: [
      "img/qse_daily_7.jpg",
      "img/qse_daily_5.jpg",
      "img/qse_daily_1.jpg",
      "img/qse_daily_2.jpg",
      "img/qse_daily_6.jpg",
      "img/qse_daily_4.jpg",
      "img/qse_daily_3.jpg",
    ],
    features: [
      "Live Browser Preview + Section Toggles",
      "Puppeteer High-Fidelity PDF Engine",
      "AI-Generated Arabic Pricing Commentary",
      "Dual QE + EDAA Scraper Pipeline",
    ],
    description:
      "An operator-facing dashboard built for a Qatari financial enterprise. It scrapes QE and EDAA market data every day, lets non-technical staff preview the report and toggle sections on or off right in the browser, then exports a pixel-perfect Arabic PDF through a headless-Chrome rendering pipeline. It all runs on its own daily schedule, so nobody has to remember to click anything.",
    challenge:
      "Finance staff needed a presentation-ready Arabic market report every single day without touching a line of code. Underneath that simple ask, the pipeline has to reconcile two separate exchange data sources, QE and EDAA, fold in AI-summarized news, and merge in manual quarterly disclosure inputs, all into one document that reads like a person wrote it.",
    solution:
      "I built a Flask control panel with a live browser preview and per-section toggles so an operator can check everything before it goes out, backed by a 654-line app, dual QE and EDAA scrapers, and a daily run driven by APScheduler. The PDF export used to run on pdfplumber. I replaced it with a Puppeteer and headless-Chrome pipeline that emulates print media and waits for the Chart.js canvases to fully render before capturing them, which also meant tracking down a set of Chromium flex-layout pagination bugs that were leaving ugly gaps between pages. The final PDF now comes out clean across every page.",
    metric1: { label: "LOC_FLASK_APP", value: "654" },
    metric2: { label: "DATA_SOURCES", value: "QE + EDAA" },
    tech: [
      { name: "Flask", type: "Backend" },
      { name: "Puppeteer", type: "PDF_Engine" },
      { name: "Chart.js", type: "Visualization" },
    ],
    mermaid:
      "graph LR\n    Scheduler[APScheduler Daily Run] --> QE[QE Scraper]\n    Scheduler --> EDAA[EDAA Scraper]\n    QE --> Panel[Flask Control Panel]\n    EDAA --> Panel\n    Panel --> Preview[Live Browser Preview]\n    Preview --> PDF[Puppeteer Headless-Chrome PDF]",
  },
  {
    id: "qse-portfolio-analytics",
    title: "Q-Portfolio Risk & Return Analytics",
    tag: "PROTOCOL_FINTECH_QUANT",
    status: "CLIENT_DELIVERED",
    icon: "fas fa-chart-line",
    systemName: "TWAR_Engine",
    uptime: "99%",
    screenshot: "img/q_portfolio_risk_analysis_6.png",
    screenshots: [
      "img/q_portfolio_risk_analysis_6.png",
      "img/q_portfolio_risk_analysis_5.png",
      "img/q_portfolio_risk_analysis_3.png",
      "img/q_portfolio_risk_analysis_4.png",
      "img/q_portfolio_risk_analysis_1.png",
      "img/q_portfolio_risk_analysis_2.png",
    ],
    features: [
      "Time-Weighted Return Calculator",
      "Corporate Action Adjustment",
      "Sector Risk/Opportunity Matrix",
      "FastAPI + Chart.js Stack",
    ],
    description:
      "A FastAPI investment-analysis dashboard that benchmarks a real equity holding against Qatar's QTRI Islamic Index, pulling live pricing straight from the Qatar Stock Exchange's own XML data feed. It computes true time-weighted returns adjusted for both cash and stock dividends, and pairs that with a sector-wide risk and opportunity bubble matrix so the client can see where else the market is moving.",
    challenge:
      "Simple percentage-return math falls apart the moment real deposits, withdrawals, and corporate actions like stock and cash dividends enter a portfolio's history. The client didn't want a rough estimate, they needed a defensible, industry-standard return figure they could put next to a market index and stand behind.",
    solution:
      "I implemented a full TWAR engine, time-weighted annual return, that simulates the portfolio day by day, applies corporate actions before client cash flows, and geometrically links every sub-period return between cash-flow dates. It's wrapped in a 1,240-line FastAPI dashboard with its own dividend parser, plus a sector-wide risk and opportunity bubble matrix so the client gets the macro picture, not just their own numbers.",
    metric1: { label: "LOC_DASHBOARD_ENGINE", value: "1,240" },
    metric2: { label: "RETURN_METHODOLOGY", value: "TWAR" },
    tech: [
      { name: "FastAPI", type: "Backend" },
      { name: "Pandas", type: "Analysis" },
      { name: "Chart.js", type: "Visualization" },
    ],
    mermaid:
      "graph TD\n    Market[Market Data + Dividends] --> Engine[TWAR Simulation Engine]\n    Engine --> CorpActions[Corporate Action Adjustment]\n    CorpActions --> SubPeriods[Sub-Period Returns]\n    SubPeriods --> Link[Geometric Linking]\n    Link --> Dashboard[Risk/Return Dashboard]\n    Dashboard --> Benchmark[vs. QTRI Islamic Index]",
  },
  {
    id: "qse-ownership-tracker",
    title: "QSE Ownership Shift Tracker",
    tag: "PROTOCOL_MARKET_INTELLIGENCE",
    status: "PRODUCTION_V6",
    icon: "fas fa-building-columns",
    systemName: "Ownership_Delta_Engine",
    uptime: "99%",
    screenshot: "img/qse_ownership_1.png",
    screenshots: [
      "img/qse_ownership_1.png",
      "img/qse_ownership_2.png",
      "img/qse_ownership_3.png",
      "img/qse_ownership_4.png",
      "img/qse_ownership_5.png",
    ],
    features: [
      "QSE Trading-Day Calendar Engine",
      "Arabic RTL One-Click PDF Export",
      "Sector-Grouped Ownership Deltas",
      "6 Versioned Production Releases",
    ],
    description:
      "A dashboard that compares Qatari, GCC, and Foreign ownership stakes across every Qatar Stock Exchange-listed company, between a chosen base date and several historical intervals, grouped by sector, with an instant Arabic PDF export. It's now on its 6th production release, refined every time a client needed something the previous version couldn't do.",
    challenge:
      "Tracking daily ownership shifts across QSE-listed companies sounds simple until you factor in Qatar's own trading calendar, Friday and Saturday weekends, Islamic holidays, all of it. Get the trading-day math wrong by even one day and every downstream interval is off, and the raw Excel exports the client started with were never something you could actually hand to a decision-maker.",
    solution:
      "I built a QSE-specific trading-day calendar engine, Qatar holiday locale, forward-advancing base dates, exact T-N interval counting, handled correctly, feeding into a sector-grouped comparison dashboard. A 299-line local file-sync backend keeps it fed with fresh data, and a 3,089-line single-file frontend exports landscape Arabic RTL PDFs through html2canvas and jsPDF. Six versioned releases later, it's a tool the client's own team runs without me in the loop.",
    metric1: { label: "PRODUCTION_ITERATIONS", value: "6" },
    metric2: { label: "LOC_DASHBOARD_FRONTEND", value: "3,089" },
    tech: [
      { name: "xlsx.js", type: "Data_Parse" },
      { name: "jsPDF", type: "PDF_Export" },
      { name: "Python", type: "Backend" },
    ],
    mermaid:
      "graph LR\n    Excel[(QSE Ownership Excel Files)] --> Backend[Local Sync API]\n    Backend --> Calendar[QSE Trading-Day Engine]\n    Calendar --> Compare[Sector-Grouped Comparison]\n    Compare --> Dashboard[Interactive Dashboard]\n    Dashboard --> PDF[Arabic RTL PDF Export]",
  },
  {
    id: "crypto-market-dashboard",
    title: "Crypto Market Analysis Dashboard",
    tag: "PROTOCOL_MARKET_VISUALIZATION",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-chart-area",
    systemName: "Market_Chart_Engine",
    uptime: "99%",
    screenshot: "img/cmat_5.png",
    screenshots: [
      "img/cmat_5.png",
      "img/cmat_2.png",
      "img/cmat_3.png",
      "img/cmat_4.png",
      "img/cmat_1.png",
    ],
    features: [
      "CoinMarketCap + Alternative.me Data Fusion",
      "Automated Chart Snapshot + Email Delivery",
      "Traditional Market Overlays (DJI, Gold)",
      "TTL-Based Data Caching Layer",
    ],
    description:
      "A password-protected FastAPI dashboard that renders interactive crypto market charts, price, market cap, Fear and Greed sentiment pulled from CoinMarketCap and Alternative.me, and overlays them against traditional market benchmarks like the Dow Jones and gold price. Paired with it is a browser-automation snapshot service that captures a set of scheduled chart presets every morning and emails them out automatically, so the market briefing is sitting in an inbox before anyone has even opened their laptop.",
    challenge:
      "Stakeholders wanted their daily market briefing without opening a dashboard and clicking through chart presets themselves. The visualization needed to just arrive, as a finished image, in their inbox, on schedule, every single day, with nobody having to remember to run anything.",
    solution:
      "I built a FastAPI and Highcharts web app with a TTL-based caching layer and a background data refresh job, then wired up a companion Playwright service that waits for that day's refresh to finish, walks through each configured chart preset, grabs a high-quality screenshot of it, and emails the whole set out to a recipient list. Raw data goes in one end, a finished report lands in an inbox on the other, with nobody touching anything in between.",
    metric1: { label: "CHARTING_ENGINE", value: "Highcharts" },
    metric2: { label: "DELIVERY_MODE", value: "Auto_Email" },
    tech: [
      { name: "FastAPI", type: "Backend" },
      { name: "Highcharts", type: "Visualization" },
      { name: "Playwright", type: "Snapshot_Automation" },
    ],
    mermaid:
      "graph TD\n    Data[Live Market Data] --> Cache[TTL Cache Layer]\n    Cache --> Dashboard[FastAPI + Highcharts Dashboard]\n    Dashboard --> Presets[Configured Chart Presets]\n    Presets --> Snapshot[Playwright Snapshot Service]\n    Snapshot --> Email[Automated Email Delivery]",
  },
  {
    id: "multichain-wallet-tracker",
    title: "Multi-Chain Wallet Transaction Tracker",
    tag: "PROTOCOL_ONCHAIN_INTELLIGENCE",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-wallet",
    systemName: "OnChain_Ledger_Engine",
    uptime: "99%",
    features: [
      "3-Chain Coverage (Solana/Base/Sui)",
      "Historical USD Valuation Per Transaction",
      "Auto-Generated Per-Wallet Spreadsheet Reports",
      "Per-Token Worksheet Auto-Split (Sui)",
    ],
    description:
      "A blockchain transaction tracker that pulls the full wallet history across Solana, Base, and Sui, works out the exact USD value of every transaction at the moment it actually happened, and turns all of it into clean, per-wallet spreadsheet reports. What comes out the other end reads like an audit-ready ledger, not a raw export.",
    challenge:
      "Tracking a portfolio of wallets across three different blockchains means reconciling three completely incompatible data formats before you can even compare them side by side, and knowing what a transaction was actually worth means pulling the historical price at the exact transaction timestamp, not grabbing today's price and calling it close enough.",
    solution:
      "I built a chain-aware ingestion layer that routes each wallet to the right explorer API, SolScan for Solana, BaseScan for Base, SuiVision for Sui, and paired it with a reverse-engineered Birdeye pricing integration that calculates accurate point-in-time USD values in efficient batches instead of one API call per transaction. It handles 50+ wallets in a single run, and for chains like Sui where one wallet can hold hundreds of distinct tokens, it automatically splits everything into its own per-token worksheet so nothing gets buried in one giant spreadsheet.",
    metric1: { label: "CHAINS_SUPPORTED", value: "3" },
    metric2: { label: "WALLETS_PER_RUN", value: "50+" },
    tech: [
      { name: "Python", type: "Backend" },
      { name: "Birdeye", type: "Pricing_Source" },
      { name: "Google Sheets API", type: "Reporting" },
    ],
    mermaid:
      "graph TD\n    Wallets[Tracked Wallets] --> Router{Chain Router}\n    Router --> Solana[SolScan API]\n    Router --> Base[BaseScan API]\n    Router --> Sui[SuiVision API]\n    Solana --> Pricing[Historical USD Pricing]\n    Base --> Pricing\n    Sui --> Pricing\n    Pricing --> Reports[Per-Wallet Spreadsheet Reports]",
  },
  {
    id: "dex-alert-engine",
    title: "Real-Time DEX Alert & Flatline Detection Engine",
    tag: "PROTOCOL_MARKET_SURVEILLANCE",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-bell",
    systemName: "Threshold_Alert_Engine",
    uptime: "99%",
    features: [
      "Dual-Engine: 15-Min Real-Time + Daily Historical",
      "Multi-Tier Price/Volume Threshold Matrix",
      "Spam-Free Smart Alerting (Fire-Once Logic)",
      "Moving-Average Flatline Detection",
    ],
    description:
      "A dual-engine token-monitoring system. One engine watches DEX prices in real time, the other scans daily historical trends for flatline patterns, the sideways moves that only show up once you zoom out. Every coin gets checked against a multi-tier price and volume threshold matrix, and the moment, and only the moment, it first crosses a meaningful line, a consolidated alert goes out by email.",
    challenge:
      "Watching dozens of tokens by hand for a meaningful price or volume move just isn't realistic. The naive fix, a basic threshold alert, tends to either spam constantly or completely miss the slow, sideways flatline patterns that only reveal themselves over days, never in a single snapshot.",
    solution:
      "I built two independent engines that run side by side. The real-time monitor checks every 15 minutes against a multi-tier threshold matrix, price tiers, volume-multiplier tiers, raw-volume tiers, with a once-met-always-met rule so a coin doesn't re-trigger the same alert over and over. The daily engine looks further back, using moving averages and slope calculations to catch flatline patterns the real-time monitor would never see. Both run under APScheduler with their own health checks and automatic recovery, and the email alert only fires when something has genuinely changed, not on every scan.",
    metric1: { label: "MONITORING_ENGINES", value: "2" },
    metric2: { label: "ALERT_CYCLE", value: "15_MIN" },
    tech: [
      { name: "APScheduler", type: "Scheduling" },
      { name: "DexScreener API", type: "Data_Source" },
      { name: "Google Sheets API", type: "Config_Store" },
    ],
    mermaid:
      "graph TD\n    Config[Google Sheets Config] --> RT[Real-Time Engine - 15min]\n    Config --> Daily[Daily Flatline Engine]\n    RT --> Thresholds[Multi-Tier Threshold Matrix]\n    Daily --> Flatline[Moving Avg + Slope Detection]\n    Thresholds --> Alert[Consolidated Email Alert]\n    Flatline --> Alert",
  },
  {
    id: "crypto-fleet-remote-control",
    title: "Crypto Automation Fleet: Remote Control Panel",
    tag: "PROTOCOL_FLEET_OPERATIONS",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-server",
    systemName: "Fleet_Control_Server",
    uptime: "99%",
    screenshot: "img/remote_control_1.png",
    screenshots: ["img/remote_control_1.png"],
    features: [
      "Cron-Scheduled Auto-Restart Supervisor",
      "Password-Protected Web Dashboard",
      "Per-Script Start/Stop + Health Checks",
      "One-Click Hard Restart",
    ],
    description:
      "A Flask-based web dashboard that remotely supervises a whole fleet of independent crypto-monitoring Python applications running on a VPS. From one screen you can start or stop any script, check whether it's actually healthy, and toggle its cron-scheduled auto-restart, all of it gated behind a proper session login with email-based password reset.",
    challenge:
      "Eleven independent scripts running unattended on a remote VPS is fine until one of them silently crashes overnight. Before this existed, checking on them meant SSH-ing in and grepping through process lists by hand, every single time, just to find out something needed a restart or a config tweak.",
    solution:
      "I built a 717-line Flask control server that uses psutil for live per-script health checks and python-crontab to toggle scheduled auto-restarts. It has session-based login, email-driven password reset through smtplib, and one-click start, stop, and hard-restart endpoints for every managed application. What used to be a terminal session and some guesswork is now a couple of clicks in a browser.",
    metric1: { label: "LOC_CONTROL_SERVER", value: "717" },
    metric2: { label: "MANAGED_SCRIPTS", value: "11" },
    tech: [
      { name: "Flask", type: "Backend" },
      { name: "psutil", type: "Process_Mgmt" },
      { name: "python-crontab", type: "Scheduling" },
    ],
    mermaid:
      "graph TD\n    Dashboard[Flask Web Dashboard] --> Auth[Session Login]\n    Dashboard --> Scripts[Managed Script Fleet]\n    Scripts --> Health[psutil Health Checks]\n    Dashboard --> Cron[Cron Auto-Restart Toggle]\n    Cron --> Scripts\n    Dashboard --> Reset[Email Password Reset]",
  },
  {
    id: "gmaps-leads-engine",
    title: "Google Maps Business Leads Engine",
    tag: "PROTOCOL_LEAD_GENERATION",
    status: "DATA_LICENSING_ONLY",
    icon: "fas fa-map-location-dot",
    systemName: "Leads_Extraction_Engine",
    uptime: "99%",
    features: [
      "Grid-Based Geographic Search",
      "Contact + Social Handle Enrichment",
      "Resumable, Proxy-Rotated Pipeline",
      "13-Field Structured Lead Records",
    ],
    description:
      "A large-scale Google Maps lead-generation engine currently mapping business categories across Egypt, capturing verified contact details, social handles, and ratings for every listing it finds. It talks directly to Google Maps' own data layer instead of driving a visible browser, which keeps it fast and hard to rate-limit at real scale. This one isn't for sale as a tool, I use it to build and license the lead datasets it produces instead.",
    challenge:
      "Google Maps doesn't offer a public API for this kind of bulk local-business discovery, and anything that just drives a visible browser falls over fast once you're covering real ground. The actual problem is mapping an entire country's worth of geography without missing listings or getting blocked halfway through a multi-hour run.",
    solution:
      "I reverse-engineered the internal endpoints Google Maps' own web app already calls and built a pure-HTTP pipeline around them instead of automating a browser, which is the general playbook for this class of problem: find what the target's own frontend is already talking to, and talk to that directly. The pipeline splits target regions into a search grid so it gets full coverage without hitting per-query result caps, rotates through proxies to stay under the radar, and checkpoints every run in a local database, so an interrupted multi-hour job picks back up exactly where it left off instead of starting over.",
    metric1: { label: "LOC_PIPELINE", value: "1,579" },
    metric2: { label: "OUTPUT_FIELDS", value: "13" },
    tech: [
      { name: "Reverse-Engineered API", type: "Data_Access" },
      { name: "Grid Search", type: "Coverage_Strategy" },
      { name: "SQLite", type: "Resumable_State" },
    ],
    mermaid:
      "graph TD\n    Grid[Geographic Search Grid] --> API[Google Maps Data Endpoints]\n    API --> Parse[Listing Parser]\n    Parse --> Enrich[Contact + Social Enrichment]\n    Enrich --> Store[(Resumable State Store)]\n    Store --> Dataset[Licensable Lead Dataset]",
  },
  {
    id: "image-automator",
    title: "Product Image Automator",
    tag: "PROTOCOL_ECOM_AUTOMATION",
    status: "PRODUCTION_READY",
    icon: "fas fa-images",
    systemName: "Image_Sourcing_Engine",
    uptime: "99.5%",
    screenshot: "img/product_image_auto_1.png",
    screenshots: [
      "img/product_image_auto_1.png",
      "img/product_image_auto_2.png",
    ],
    features: [
      "15-Worker Parallel Sourcing",
      "Google Images Search (via Serper API)",
      "Manual Per-SKU Image Correction",
      "openpyxl/Pillow Excel Embedding",
    ],
    description:
      "Drop in a spreadsheet of SKUs from brands like SKIMS, Adidas, or Burberry and get back an Excel file with the matched product image embedded directly in each row, sourced straight from Google Images through the Serper API. Built for e-commerce teams managing catalogs too large to source images for by hand.",
    challenge:
      "Manually sourcing and matching product images for thousands of SKUs across multiple brands is slow, error-prone, and simply doesn't scale as a catalog grows. Someone was doing this one product at a time before I got involved.",
    solution:
      "I built a 966-line automation engine running a 15-worker ThreadPoolExecutor so it can search and match images for many SKUs at once, using the Serper API and cloudscraper under the hood. Every result gets cached in SQLite so it never looks up the same product twice, and the matched images get embedded straight into the Excel output through openpyxl and Pillow, ready to hand to a client.",
    metric1: { label: "LOC_MAIN_ENGINE", value: "966" },
    metric2: { label: "PARALLEL_WORKERS", value: "15" },
    tech: [
      { name: "Pandas", type: "Data" },
      { name: "Flet", type: "GUI" },
      { name: "SQLite", type: "Cache" },
    ],
    mermaid:
      "graph TD\n    CSV[SKU Spreadsheet] --> Pool[15-Worker Thread Pool]\n    Pool --> Search[Serper Image Search]\n    Search --> Cache[(SQLite Cache)]\n    Cache --> Match[Image Matcher]\n    Match --> Excel[Excel Output w/ Embedded Images]",
  },
  {
    id: "freelancer-job-tracker",
    title: "Freelancer Job Tracker",
    tag: "PROTOCOL_JOB_ALERT_ENGINE",
    status: "PRODUCTION_READY",
    icon: "fas fa-satellite-dish",
    systemName: "Job_Alert_Engine",
    uptime: "99%",
    screenshot: "img/fl_monitor_1.png",
    screenshots: [
      "img/fl_monitor_1.png",
      "img/fl_monitor_2.png",
      "img/fl_monitor_3.png",
    ],
    features: [
      "Saved Filter Presets (Budget/Country/Keywords)",
      "Scheduled Matching Every 15-30 Min",
      "Dual-Channel Alerts (Telegram + Email)",
      "USD-Normalized Budget Deduplication",
    ],
    description:
      "A full-stack job tracker that pulls Freelancer.com postings straight out of a private Telegram channel, cleans them up, and turns them into a proper dashboard instead of a wall of raw messages. Every budget gets converted to USD using a cached daily exchange rate, anything under a configurable minimum gets filtered out, and duplicate postings collapse down to one canonical record per project.",
    challenge:
      "A private Telegram channel full of raw job postings is not the same thing as a usable job list. Budgets come in different currencies, the same project gets reposted more than once, and by the time someone scrolls back through the channel manually to find something worth bidding on, another freelancer has usually already claimed it.",
    solution:
      "I built a FastAPI backend with its own ingestion pipeline that reads the channel through a real Telegram client, parses out the title, budget line, and client location from each post, normalizes every budget to USD against a 24-hour cached rate, and collapses duplicates into one canonical record per project. On top of that sits a React 19 and TypeScript frontend with a saved-preset manager, so an operator can filter by budget, country, or keyword and save that exact combination for later, plus a scheduler that reruns every saved preset every 15 to 30 minutes and only sends a notification, by Telegram, email, or both, when a genuinely new match shows up.",
    metric1: { label: "TOTAL_LOC", value: "~3,100" },
    metric2: { label: "NOTIFICATION_CHANNELS", value: "2" },
    tech: [
      { name: "FastAPI", type: "Backend" },
      { name: "React 19", type: "Frontend" },
      { name: "Alembic", type: "Migrations" },
    ],
    mermaid:
      "graph LR\n    Telegram[Private Telegram Channel] --> Ingest[FastAPI Ingestion Service]\n    Ingest --> Parse[Post Parser]\n    Parse --> Dedup[Canonical Project Dedup]\n    Dedup --> FX[USD Rate Normalization]\n    FX --> DB[(SQLite + Alembic)]\n    DB --> Presets[Saved Filter Presets]\n    Presets --> Scheduler[15-30 Min Match Scheduler]\n    Scheduler --> Notify[Telegram + Email Alerts]\n    DB --> Dashboard[React Dashboard]",
  },
  {
    id: "defi-analytics",
    title: "Multi-Chain DeFi Analytics Suite",
    tag: "PROTOCOL_MULTI_CHAIN_DATA",
    status: "LIVE_INGESTION",
    icon: "fas fa-coins",
    systemName: "Chain_Aggregator",
    uptime: "99.9%",
    features: [
      "3-Chain Coverage (Base/Solana/Sui)",
      "Tenacity Retry w/ Backoff",
      "Real-Time Telegram Alerts",
      "100K+ Daily Transactions Ingested",
    ],
    description:
      "A suite of asynchronous crypto data bots that ingest over 100,000 transactions a day across Base, Solana, and Sui. Every transaction gets enriched with real-time USD pricing, and anything statistically unusual gets flagged with Z-score anomaly detection and pushed straight to Telegram.",
    challenge:
      "Blockchain APIs rate-limit aggressively and fail without much warning. A naive polling script just drops data every time there's an outage, and it can't keep up with high-frequency chains without introducing real, noticeable latency.",
    solution:
      "I built a 2,609-line async aggregation engine, plus a 2,108-line companion bot, using httpx with Tenacity retry and backoff so nothing gets lost even when a chain's API is having a bad day. ThreadPoolExecutor handles the USD enrichment concurrently, pandas_ta does the Z-score statistical filtering, and Supabase and gspread handle storage and reporting across all three chains.",
    metric1: { label: "LOC_CMA_ENGINE", value: "2,609" },
    metric2: { label: "CHAINS_SUPPORTED", value: "3" },
    tech: [
      { name: "Asyncio", type: "Concurrency" },
      { name: "web3.py", type: "Chain_API" },
      { name: "Supabase", type: "Storage" },
    ],
    mermaid:
      "graph LR\n    Chains[Base / Solana / Sui] --> Ingest[Async Ingestion Engine]\n    Ingest --> Retry[Tenacity Retry+Backoff]\n    Retry --> Enrich[USD Price Enrichment]\n    Enrich --> Stats[Z-Score Filter]\n    Stats --> Alerts[Telegram Alerts]\n    Stats --> DB[(Supabase)]",
  },
  {
    id: "collectibles-automation-suite",
    title: "AmiAmi & CoolStuffInc Automation Suite",
    tag: "PROTOCOL_ECOM_COLLECTIBLES",
    status: "PRODUCTION_READY",
    icon: "fas fa-gamepad",
    systemName: "Collectibles_Automation_Suite",
    uptime: "99%",
    features: [
      "Live AmiAmi Inventory via Internal API",
      "Image-ID Exact Product Matching (CoolStuffInc)",
      "Stealth Session Recovery",
      "CSV-Driven Bulk Cart Automation",
    ],
    description:
      "A two-part collectibles automation system covering two different hobby retailers. One half is a Scrapy spider that pulls live inventory straight from AmiAmi's internal JSON API, bypassing Cloudflare with cloudscraper instead of scraping fragile HTML. The other half is a stealth Selenium bot that reads a CSV of specific trading card printings and adds the exact right one to a cart on CoolStuffInc, a real challenge since the same card name can have a dozen different art variants and only one of them is the one you actually want.",
    challenge:
      "Trading card products are brutal to automate correctly because the same card name can exist across a dozen different sets, rarities, and art variants that all look almost identical in a plain text search. Add a retailer that's also actively defending against bots, and a naive scraper either breaks constantly or, worse, buys the wrong printing.",
    solution:
      "For the AmiAmi side, I built a Scrapy spider that talks directly to the retailer's internal item API using cloudscraper to get past Cloudflare, filtering by category and stock status server-side instead of scraping rendered pages. For the CoolStuffInc side, I built a 707-line stealth bot on undetected-chromedriver that reads a CSV of exact card printings, each with its own reference image URL, and matches products by extracting and comparing the image identifier from that URL rather than trusting the product name text. It scrolls and paginates through search results automatically, detects a dead browser session and reinitializes itself mid-run, and logs every match, miss, and quantity added back out to an output CSV.",
    metric1: { label: "LOC_CART_BOT", value: "707" },
    metric2: { label: "MATCH_METHOD", value: "IMAGE_ID" },
    tech: [
      { name: "Scrapy", type: "Scraping" },
      { name: "cloudscraper", type: "Bypass" },
      { name: "undetected-chromedriver", type: "Stealth" },
    ],
    mermaid:
      "graph TD\n    CSV[Card CSV: Name/Set/Image] --> Bot[Stealth Cart Bot]\n    Bot --> Search[Site Search + Pagination]\n    Search --> ImgID[Extract Image ID]\n    ImgID --> MatchCheck{ID Match?}\n    MatchCheck -->|Yes| Cart[Add to Cart]\n    MatchCheck -->|Session Dead| Recover[Session Recovery]\n    Recover --> Search\n    API[Retailer Internal API] --> CF[cloudscraper Bypass]\n    CF --> Spider[Scrapy Spider]\n    Spider --> Inventory[(Live Inventory Feed)]",
  },
  {
    id: "solana-dex-filter",
    title: "Solana DEX Trend & Rug-Pull Filter",
    tag: "PROTOCOL_QUANT_SURVEILLANCE",
    status: "PRODUCTION_ACTIVE",
    icon: "fas fa-magnifying-glass-dollar",
    systemName: "Token_Scanner_Engine",
    uptime: "99%",
    features: [
      "5-DEX Coverage (Raydium/Orca/Meteora/Pump.fun/Pumpswap)",
      "Z-Score Statistical Outlier Detection",
      "Automated Telegram Alerts + Charts",
      "Automated Weekly Reports",
    ],
    description:
      "An automated Solana token-scanning system that statistically detects abnormal buying activity across 5 different DEXes, then screens every candidate through a multi-layer security filter, holder concentration, mint and freeze authority, before it ever sends an alert. The whole point is separating a genuine early trend from a rug pull before real money is on the line.",
    challenge:
      "Spotting a token trending upward before it's obvious to everyone else means watching dozens of pools across multiple DEXes at the same time, and raw volume spikes alone can't tell you whether that's organic momentum or a manipulated pump heading straight into a rug pull.",
    solution:
      "I built a 2,731-line system that pulls live swap data across Raydium, Orca, Meteora, Pump.fun, and Pumpswap, then computes a rolling Z-score against each token's own 24-hour buy-rate baseline to catch genuine statistical outliers instead of just chasing raw volume. Anything that clears that bar gets run through a security layer checking holder concentration and mint and freeze authority, and only then does it get scored and pushed as a Telegram alert with an auto-generated price and volume chart attached. The whole loop runs on a rate-limited, retry-hardened polling schedule with SQLite persistence underneath it, plus automated weekly reports so nothing has to be checked manually.",
    metric1: { label: "LOC_SCANNER_SYSTEM", value: "2,731" },
    metric2: { label: "DEX_COVERAGE", value: "5" },
    tech: [
      { name: "python-telegram-bot", type: "Alerts" },
      { name: "matplotlib", type: "Charting" },
      { name: "tenacity", type: "Retry_Logic" },
    ],
    mermaid:
      "graph TD\n    DEXes[Raydium/Orca/Meteora/Pump.fun/Pumpswap] --> Scanner[Swap Data Scanner]\n    Scanner --> ZScore[Z-Score Outlier Detection]\n    ZScore --> Security[Security Layer: Holders/Mint-Freeze]\n    Security --> Score[Composite Scoring]\n    Score --> Telegram[Telegram Alert + Chart]\n    Scanner --> DB[(SQLite)]\n    DB --> Weekly[Weekly Report]",
  },
];
