---
topic: regression-introduction
title: 迴歸分析導論 (Introduction to Regression Analysis)
stage: 1-outline
status: 已確認（2026-11-24）
updated: 2026-11-24
---

# 大綱：迴歸分析導論

> 簡報產生流程的節點 0（素材盤點）與節點 1（大綱）。使用者確認整份大綱後，才進入節點 2（逐頁內容）。

## 0 素材清單

起點：`roadmap.md` 的「1.0 導論」，從 7 個核心概念頁沿 `[[連結]]` 往外一層。

| 類型 | 頁面 | 狀態 | 用在 |
|---|---|---|---|
| 來源 | [[sources/lecture-01]] | draft | 全部（出處頁碼） |
| 概念 | [[regression-to-the-mean]] | draft | 第 1 章 |
| 概念 | [[functional-vs-statistical-relation]] | draft | 第 2 章 |
| 概念 | [[regression-function]] | draft | 第 3 章 |
| 概念 | [[regression-model]] | draft | 第 3 章 |
| 概念 | [[observational-vs-experimental-data]] | draft | 第 4 章 |
| 概念 | [[scope-and-extrapolation]] | draft | 第 5 章 |
| 概念 | [[bias-variance-tradeoff]] | draft | 第 6 章 |
| 例題 | [[father-son-heights]] | draft | 第 1 章 |
| 例題 | [[steroid-age]] | draft | 第 2、5 章 |
| 誤解 | [[correlation-is-not-causation]] | draft | 第 4 章 |
| 誤解 | [[extrapolation-beyond-data]] | draft | 第 5 章 |
| 練習 | [[bias-variance-01]]（講義原題） | draft | 第 6 章 |
| 練習 | [[functional-vs-statistical-01]]（補充題） | draft | 第 2 章 |
| 練習 | [[observational-vs-experimental-01]]（補充題） | draft | 第 4 章 |
| 練習 | [[extrapolation-01]]（補充題） | draft | 第 5 章 |

先備提醒（只提醒，不放進簡報）：條件期望值（第 3 章）、期望值與變異數（第 6 章）。

素材檢查的標示：
- ⚑ **全部頁面都是 `draft`**：可以用，但內容還沒經過你審閱。
- ⚑ **缺練習**：[[regression-function]]、[[regression-model]] 沒有對應的例題或練習。

## 1 大綱

**總頁數：25 頁**（封面、路線、6 章、回顧）

### 開場（2 頁）
- 封面：迴歸分析導論 Introduction to Regression Analysis（Lecture 01 · ALSM Ch.1）
- 今天的路線：6 章的標題

### 第 1 章　「迴歸」從哪裡來？（3 頁）
- 目標：知道「regression」一詞的由來，能用父子身高的數字說明趨向平均數
- wiki 頁面：[[regression-to-the-mean]]、[[father-son-heights]]
- 頁面：章節頁 → Galton 的身高研究 → 高個子父親的兒子（先猜再揭曉 −1.42 吋）
- 互動：🤔 先猜猜看
- 出處：Lecture 01 p.1–2

### 第 2 章　函數關係 vs. 統計關係（4 頁）
- 目標：能判斷一組關係是函數關係還是統計關係，理解 $Y=f(X)+\varepsilon$
- wiki 頁面：[[functional-vs-statistical-relation]]、[[steroid-age]]
- 頁面：章節頁 → 兩種關係的比較（左右兩張散布圖）→ 類固醇與年齡（趨勢不一定是直線）→ 練習 1
- 練習：[[functional-vs-statistical-01]]（補充題，難度 1）
- 出處：Lecture 01 p.3–5

### 第 3 章　迴歸函數與迴歸模型（5 頁）
- 目標：區分 $Y_i$ 與 $E(Y\mid X)$；說出變數角色、資料結構與迴歸的三種用途；知道模型都是近似
- wiki 頁面：[[regression-function]]、[[regression-model]]
- 頁面：章節頁 → 迴歸函數（條件分配圖）→ 變數角色與資料矩陣 → 三種用途與線性模型 → 建模態度（Box 名言、$X$ 固定、反覆修正）
- 先備提醒：條件期望值
- 練習：⚑ 無
- 出處：Lecture 01 p.3, 6–10

### 第 4 章　資料來源與因果（4 頁）
- 目標：分辨觀察資料與實驗資料，知道迴歸關係不等於因果
- wiki 頁面：[[observational-vs-experimental-data]]、[[correlation-is-not-causation]]
- 頁面：章節頁 → 比較表 → 相關 ≠ 因果（收入、肥胖、年齡關係圖）→ 練習 2
- 互動：🤔 想一想
- 練習：[[observational-vs-experimental-01]]（補充題，難度 2）
- 出處：Lecture 01 p.7–8

### 第 5 章　模型的適用範圍與外插（3 頁）
- 目標：知道迴歸式只在觀測到的 $X$ 範圍內可信
- wiki 頁面：[[scope-and-extrapolation]]、[[extrapolation-beyond-data]]、[[steroid-age]]
- 頁面：章節頁 → 外插的危險（示意圖＋常見誤解）→ 練習 3
- 練習：[[extrapolation-01]]（補充題，難度 2）
- 出處：Lecture 01 p.9

### 第 6 章　偏誤–變異取捨（3 頁）
- 目標：用靶心圖判斷偏誤與變異，理解模型複雜度的取捨
- wiki 頁面：[[bias-variance-tradeoff]]、[[bias-variance-01]]
- 頁面：章節頁 → 靶心圖（講義原題，答案折疊）→ 太簡單 vs. 太複雜（U 形曲線＋完整分解式，標「補充」）
- 先備提醒：期望值與變異數
- 練習：[[bias-variance-01]]（講義原題）
- 出處：Lecture 01 p.9–10

### 收尾（1 頁）
- 重點回顧：每章一句話

## 與上一版簡報的差別

- **練習題改成跟著章節走**：上一版把 3 題補充題集中在最後的「練習時間」章；這版放在對應章節的最後，學完馬上練。因此少了「練習時間」章，總頁數從 26 頁變成 25 頁。

## 待你決定

1. 練習題要跟著章節走（本版），還是集中放在最後（上一版）？
2. 第 3 章沒有練習：要不要我為「迴歸函數」補一題補充題（例如指著圖分辨 $Y_i$ 和 $E(Y\mid X)$）？補的話要先建 wiki 練習頁，再放進簡報。
3. 全部頁面都還是 `draft`：要先審閱 wiki，還是直接用來做簡報？
