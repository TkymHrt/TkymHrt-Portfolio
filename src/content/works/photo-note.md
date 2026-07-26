---
title: Photo Note
description: 写真と短いメモを同じ時間軸で振り返るための日記アプリです。
summary: 写真とメモを残せる日記アプリ
publishedAt: 2026-05-25
tags:
  - Next.js
  - MySQL
  - Tailwind CSS
featured: true
role: 設計 / フロントエンド実装
period: "2026"
repositoryUrl: https://github.com/TkymHrt?tab=repositories
visual: photo
draft: false
---

## 概要

Photo Note は、撮った写真にその日の短い言葉を添えて残す日記アプリです。書く量を求めず、写真をきっかけに記憶へ戻れる体験を目指しました。

## 意識したこと

- 写真が主役でありながら、日付とメモを読み落とさないこと
- 一覧から一日の記録へ自然に移動できること
- 画像が多い状況でもレイアウトが安定すること

## 技術面

Next.js で表示を組み立て、記録の情報を MySQL で管理する構成です。画像の大きさが異なっても読み順が変わらないよう、余白とアスペクト比を揃えています。

## これから

月ごとの振り返りと、写真につけた言葉から記録を探せる機能を検討しています。
