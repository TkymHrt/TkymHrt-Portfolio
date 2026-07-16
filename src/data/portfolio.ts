export const profile = {
  name: "TkymHrt",
  role: "大学4年生 / フロントエンドエンジニア",
  intro:
    "フロントエンド開発が好きです。ユーザーにとって使いやすく、心地よい体験を届けるWebサイトやアプリをつくっています。",
  facts: [
    { id: "study", label: "大学4年生" },
    { id: "interest", label: "フロントエンド開発が好き" },
    { id: "hobby", label: "カフェ巡り / 音楽 / 写真" },
  ],
} as const;

export const skills = [
  { id: "html", label: "HTML / CSS" },
  { id: "typescript", label: "JavaScript / TypeScript" },
  { id: "react", label: "React / Next.js" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "git", label: "Git / GitHub" },
  { id: "figma", label: "Figma" },
  { id: "deploy", label: "Vercel / Render" },
  { id: "editor", label: "VS Code" },
] as const;

export const works = [
  {
    id: "plant-log",
    title: "Plant Log",
    description: "観葉植物の記録アプリ",
    tags: ["Next.js", "Prisma", "Tailwind CSS"],
    url: "https://github.com/TkymHrt?tab=repositories",
  },
  {
    id: "task-flow",
    title: "TaskFlow",
    description: "シンプルなタスク管理ツール",
    tags: ["React", "Firebase", "Tailwind CSS"],
    url: "https://github.com/TkymHrt?tab=repositories",
  },
  {
    id: "photo-note",
    title: "Photo Note",
    description: "写真とメモを残せる日記アプリ",
    tags: ["Next.js", "MySQL", "Tailwind CSS"],
    url: "https://github.com/TkymHrt?tab=repositories",
  },
] as const;

export const notes = [
  {
    title: "Next.jsでのApp Routerを使ってみた",
    date: "2026-05-20",
    displayDate: "2026.05.20",
  },
  {
    title: "PrismaとtRPCで作るAPI設計",
    date: "2026-05-10",
    displayDate: "2026.05.10",
  },
  {
    title: "おすすめVS Code拡張機能",
    date: "2026-04-28",
    displayDate: "2026.04.28",
  },
] as const;

export const socialLinks = [
  {
    id: "x",
    label: "X",
    shortLabel: "X",
    href: "https://x.com/ForHobbiesBY",
  },
  {
    id: "instagram",
    label: "Instagram",
    shortLabel: "IG",
    href: "https://www.instagram.com/tkymhrt",
  },
  {
    id: "github",
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/TkymHrt",
  },
] as const;
