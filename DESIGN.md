---
name: TkymHrt Portfolio
description: 陽だまりの作業机を思わせる、温かく明快なフロントエンドポートフォリオ
colors:
  primary: "oklch(0.68 0.205 43)"
  primary-strong: "oklch(0.52 0.18 38)"
  accent: "oklch(0.86 0.15 86)"
  canvas: "oklch(0.985 0.008 75)"
  surface: "oklch(1 0 0)"
  surface-soft: "oklch(0.965 0.025 78)"
  ink: "oklch(0.25 0.015 55)"
  on-bright: "oklch(0.22 0.025 55)"
  muted: "oklch(0.48 0.012 55)"
  line: "oklch(0.9 0.012 70)"
typography:
  display:
    fontFamily: "LINE Seed JP, Hiragino Kaku Gothic ProN, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "LINE Seed JP, Hiragino Kaku Gothic ProN, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "LINE Seed JP, Hiragino Kaku Gothic ProN, Yu Gothic, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "LINE Seed JP, Hiragino Kaku Gothic ProN, Yu Gothic, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "LINE Seed JP, Hiragino Kaku Gothic ProN, Yu Gothic, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 0 16px"
---

# Design System: TkymHrt Portfolio

## 1. Overview

**Creative North Star: "陽だまりのワークデスク"**

整えられた机の上に、愛用のノート、カメラ、小さな植物が並ぶ情景を基準にする。紙面のように落ち着いた背景、細い輪郭、控えめな影に、鮮やかなオレンジと黄色を差し込み、親しみと前向きな好奇心を伝える。

情報は仕事道具のように用途が明快で、装飾は理解や移動を助けるときだけ使う。濃色ネオンの開発者ポートフォリオ、紫のグラデーションを多用する典型的 SaaS ランディングページ、ガラス表現、端末画面を模した演出、過剰なスクロールアニメーション、内容より装飾が先に立つ編集誌風レイアウトを明確に拒否する。

**Key Characteristics:**

- 明るい紙面と細い区切り線による、トップを入口に各コンテンツへ読み進めやすい構成
- オレンジと黄色を要所に置く、節度あるフルパレット
- 角丸 8〜16px の道具的で触れやすい部品
- PC では一覧性を優先してトップ下部の `Blog` と `Contact` を二列にし、モバイルではヒーローを最初の一画面に広げてから一方向に読み進める構成
- 必要最小限の JavaScript と、設定を尊重する穏やかな動き

## 2. Colors

白い紙面、陽だまりの黄色、手帳の見出しのようなオレンジを、濃いインク色で引き締める。

### Primary

- **Tangerine Marker** (`primary`): ロゴ、主要 CTA、小さな強調に限定して使う。広い面へ無差別に敷かない。
- **Burnished Tangerine** (`primary-strong`): 白文字が必要な小面積の操作状態と、暗色テーマでの輪郭に使う。

### Secondary

- **Sunlit Yellow** (`accent`): 星、アイコンの背景、イラストの焦点に使い、操作の主役にはしない。

### Neutral

- **Desk Light** (`canvas`): ページ外周の背景。
- **Clean Sheet** (`surface`): 本文を載せる主要面。
- **Warm Wash** (`surface-soft`): ヒーローと作品イメージの穏やかな奥行き。
- **Graphite Ink** (`ink`): 見出しと本文の基準色。
- **Permanent Ink** (`on-bright`): オレンジと黄色の上で固定使用する濃色。テーマ変更でも反転させない。
- **Pencil Note** (`muted`): 補足と日付。本文サイズでも AA を割らない濃度を維持する。
- **Fine Rule** (`line`): セクション区切りと部品の輪郭。

### Named Rules

**The Marker Rule.** `primary` は一画面の約 10% 以下に留める。希少性が CTA の意味をつくる。

**The Ink Rule.** 明るいオレンジの上では白ではなく `ink` を使い、色の鮮やかさと AA コントラストを両立する。

## 3. Typography

**Display Font:** LINE Seed JP（Hiragino Kaku Gothic ProN、Yu Gothic、system-ui、sans-serif フォールバック）  
**Body Font:** LINE Seed JP（同フォールバック）  
**Label/Logo Font:** LINE Seed JP（本文と同一ファミリー）

**Character:** 丸みのある幾何学的な日本語サンセリフを単一ファミリーで運用し、太さと余白で階層を作る。日本語と英数字の調和を保ち、親しみやすく素直な印象をつくる。

### Hierarchy

- **Display**（700、`clamp(2rem, 4vw, 2.5rem)`、1.3）: ヒーロー見出しだけに使う。
- **Headline**（700、`clamp(1.25rem, 2.5vw, 1.5rem)`、1.4）: 主要セクション見出し。
- **Title**（700、`1.125rem`、1.5）: 作品名と小見出し。
- **Body**（400、`1rem`、1.8）: 説明文。行長は 65〜70ch を上限とする。
- **Label**（600、`0.875rem`、1.5）: ナビゲーション、タグ、日付、ボタン。

### Named Rules

**The Quiet Type Rule.** 表示見出しの字間は `-0.02em` より詰めず、装飾的な斜体、全大文字の連続、グラデーション文字を使わない。

## 4. Elevation

基本は区切り線と面色で階層をつくり、影はページ全体とホバー中の作品にだけ使う。影と太い輪郭を同じ要素へ重ねず、机上の紙がわずかに浮く程度に留める。

### Shadow Vocabulary

- **Page Lift** (`0 2px 8px oklch(0.25 0.02 55 / 0.10)`): デスクトップのページ外周だけに使う。
- **Card Nudge** (`0 4px 8px oklch(0.25 0.02 55 / 0.10)`): ポインター操作中の作品カードだけに使う。

### Named Rules

**The Flat-at-Rest Rule.** コンテンツ部品は静止時に平坦で、線と面の差だけで整理する。常時浮遊するカード群は禁止する。

## 5. Components

部品は小さな文具のように用途が一目で分かり、視覚状態と操作状態が一致する。

### Buttons

- **Shape:** 手帳のタブを思わせる穏やかな角（8px）。主要操作は高さ 44px 以上。
- **Primary:** `primary` 背景と `ink` 文字、内側余白 12px × 24px。
- **Hover / Focus:** ホバーは彩度ではなく 1〜2px の移動で反応し、キーボードフォーカスは 3px の高コントラスト輪郭を必ず表示する。
- **Secondary:** `surface` 背景、`ink` 文字、1px の `muted` 輪郭。影は付けない。

### Chips

- **Style:** `surface` 背景、`ink` 文字、1px の `line`、8px 角丸。アイコンと文字を 8px 間隔で並べる。
- **State:** 情報表示専用。ボタンに見せないため、ホバー変形を付けない。

### Cards / Containers

- **Corner Style:** 作品カードは 12px、ページ外周は 16px。
- **Background:** 本文は `surface`、イメージ領域は `surface-soft`。
- **Shadow Strategy:** 静止時は線だけ、ホバー時だけ Card Nudge。
- **Border:** 1px の `line`。広い影と同時使用しない。
- **Internal Padding:** 本文 16px、イメージ内 24px。

### Navigation

ロゴを左、短い英語ラベルを右に置く。現在地は `primary` の下線、ホバーは `ink` の濃度変化で示す。ヘッダーには `Home`・`About`・`Works`・`Blog`・`Contact` を置き、モバイルでも同じ5項目を横スクロール可能なナビゲーションとして表示する。ヒーローの `About Me` も独立した `/about/` へ移動する。技術記事と日々の記録は `Blog` の一つの時系列へ統合し、タグで内容を区別する。

### Project Artwork

既製アイコンと単純な幾何形状を組み合わせ、植物、タスク、カメラを即座に識別できる静物として構成する。自作の手描き SVG やノイズ加工は使わない。

## 6. Do's and Don'ts

### Do:

- **Do** `surface` と `line` を基礎にし、`primary` は主要 CTA と少数の目印へ限定する。
- **Do** PC では横方向の一覧性、モバイルでは自然な一列の読み順を維持する。
- **Do** 主要操作を 44px 以上にし、フォーカス表示と `prefers-reduced-motion` を必ず実装する。
- **Do** 作品、技術ノート、連絡先へ最短で到達できるリンク名を使う。
- **Do** トップは入口、一覧は比較、詳細は読解に役割を分け、同じ情報を重複して管理しない。

### Don't:

- **Don't** 濃色ネオンの開発者ポートフォリオにする。
- **Don't** 紫のグラデーションを多用する典型的 SaaS ランディングページ、ガラス表現、端末画面を模した演出を使う。
- **Don't** 過剰なスクロールアニメーションや、内容より装飾が先に立つ編集誌風レイアウトを採用する。
- **Don't** グラデーション文字、32px 以上のカード角丸、色付きの太い片側罫線、広い影と輪郭の併用を行う。
- **Don't** 低コントラストの薄いグレーを本文やプレースホルダーに使う。
