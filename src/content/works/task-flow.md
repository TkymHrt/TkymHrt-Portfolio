---
title: TaskFlow
description: やることをすばやく整理し、今日の作業へ集中するためのシンプルなタスク管理ツールです。
summary: シンプルなタスク管理ツール
publishedAt: 2026-06-08
tags:
  - React
  - Firebase
  - Tailwind CSS
featured: true
role: UI設計 / フロントエンド実装
period: "2026"
repositoryUrl: https://github.com/TkymHrt?tab=repositories
visual: task
draft: false
---

## 概要

TaskFlow は、今日取り組むタスクを迷わず決めるための小さな管理ツールです。機能を増やしすぎず、追加・完了・並べ替えの流れが自然につながることを重視しました。

## 意識したこと

- 状態を色だけに頼らず、文字と形でも区別すること
- キーボードでも主要な操作を完了できること
- 通信中や失敗時にも現在の状態が分かること

## 技術面

React で画面の状態を小さく分け、Firebase と同期する構成です。操作直後の反応とサーバー上の状態が食い違わないよう、更新中の見せ方も画面設計の一部として扱いました。

## これから

実際の利用場面を観察しながら、優先度と期限の表現を必要最小限に整えていきます。
