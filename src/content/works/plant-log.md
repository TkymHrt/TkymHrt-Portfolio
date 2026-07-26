---
title: Plant Log
description: 観葉植物の日々の変化と手入れの記録を、迷わず残せるようにするWebアプリです。
summary: 観葉植物の記録アプリ
publishedAt: 2026-06-18
tags:
  - Next.js
  - Prisma
  - Tailwind CSS
featured: true
role: 設計 / フロントエンド実装
period: "2026"
repositoryUrl: https://github.com/TkymHrt?tab=repositories
visual: plant
draft: false
---

## 概要

Plant Log は、観葉植物ごとの成長と手入れを一か所に残すための記録アプリです。水やりや植え替えの記録を、あとから見返しやすい形で整理することを目指しました。

## 意識したこと

- よく使う記録操作へ少ない手順で到達できること
- 写真と日付を一緒に見ながら変化を追えること
- スマートフォンでも入力と閲覧がしやすいこと

## 技術面

画面は Next.js と Tailwind CSS で構成し、記録データは Prisma を通して扱う設計です。表示に必要な情報を先に整理し、フォームと一覧で同じ言葉を使うことを大切にしました。

## これから

植物ごとの手入れ間隔を把握しやすくする表示や、記録を続けやすくする小さな通知を検討しています。
