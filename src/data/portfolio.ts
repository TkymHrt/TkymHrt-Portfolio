export const profile = {
  name: "TkymHrt",
  role: "大学4年生 / フロントエンドエンジニア",
  intro: "フロントエンド開発が好きです！",
  facts: [
    { id: "study", label: "大学4年生" },
    { id: "major", label: "機械工学分野" },
    { id: "experience", label: "技大祭実行委員会" },
    { id: "interest", label: "フロントエンド開発が好き" },
    { id: "hobby", label: "カフェ巡り / 音楽 / 写真" },
  ],
} as const;

export const careerTimeline = [
  {
    period: "現在",
    title: "大学4年生として制作を継続",
    description:
      "フロントエンド開発を軸に、作品づくりと技術記事・日々の記録を続けている。",
  },
  {
    period: "大学3年",
    title: "個人制作を重ねる",
    description:
      "学んだ技術を使って作品を制作し、Git / GitHubを使った開発にも取り組む。",
  },
  {
    period: "大学2年",
    title: "フロントエンドを中心に学ぶ",
    description:
      "TypeScript、React / Next.jsへ学習範囲を広げ、UI実装やデータの扱いを学ぶ。",
  },
  {
    period: "大学入学後",
    title: "Web制作に触れる",
    description:
      "HTML / CSSとJavaScriptから学び始め、Webページを形にする楽しさを知る。",
  },
] as const;

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

export const socialLinks = [
  {
    id: "x",
    label: "X",
    href: "https://x.com/ForHobbiesBY",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/tkymhrt",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/TkymHrt",
  },
  {
    id: "zenn",
    label: "Zenn",
    href: "https://zenn.dev/",
  },
  {
    id: "email",
    label: "メール",
    href: "mailto:contact@example.com",
  },
] as const;
