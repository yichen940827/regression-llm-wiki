---
topic: slr-diagnostics
title: 簡單線性迴歸的模型診斷 (Diagnostics for Simple Linear Regression)
stage: 1-outline
status: 已確認（2026-11-25）
updated: 2026-11-25
---

# 大綱：簡單線性迴歸的模型診斷

> 簡報產生流程的節點 0（素材盤點）與節點 1（大綱）。使用者確認整份大綱後，才進入節點 2（逐頁內容）。
> 產出檔案：`outputs/slides/slr-diagnostics.html`

## 0 素材清單

起點：`roadmap.md` 的「1.3 簡單線性迴歸的診斷」，從 12 個核心頁沿 `[[連結]]` 往外一層。

| 類型 | 頁面 | 狀態 | 用在 |
|---|---|---|---|
| 來源 | [[sources/lecture-04]] | draft | 全部（出處頁碼） |
| 概念 | [[model-diagnostics]] | draft | 第 1 章、回顧 |
| 概念 | [[standardized-residuals]] | draft | 第 1 章 |
| 方法 | [[residual-plots]] | draft | 第 2 章 |
| 假設 | [[linearity-of-regression-function]] | draft | 第 2、5 章 |
| 假設 | [[constant-error-variance]] | draft | 第 2、4 章 |
| 假設 | [[independent-errors]] | draft | 第 2 章 |
| 概念 | [[outliers]] | draft | 第 2 章 |
| 方法 | [[normal-probability-plot]] | draft | 第 3 章 |
| 方法 | [[normality-tests]] | draft | 第 3 章 |
| 方法 | [[brown-forsythe-test]] | draft | 第 4 章 |
| 方法 | [[breusch-pagan-test]] | draft | 第 4 章 |
| 方法 | [[lack-of-fit-test]] | draft | 第 5 章 |
| 例題 | [[toluca-company]]（只用第 8 段「模型診斷」） | draft | 第 3、4 章 |
| 例題 | [[lack-of-fit-toy]] | draft | 第 5 章 |
| 例題 | [[bank-new-accounts]]（缺適檢定為補充計算） | draft | 第 5 章 |
| 誤解 | [[tests-replace-plots]] | draft | 第 3 章 |
| 誤解 | [[delete-outliers]] | draft | 第 2 章 |
| 練習 | [[residual-patterns-01]]（補充題） | draft | 第 2 章 |
| 練習 | [[diagnostic-tests-01]]（補充題） | draft | 第 4 章 |
| 練習 | [[lack-of-fit-01]]（補充題） | draft | 第 5 章 |

往外一層但**不用**的頁面：
- [[slr-error-assumptions]]、[[normal-errors]]：屬於 L02 簡報，這裡只當先備提醒。
- [[general-linear-f-test]]、[[anova-decomposition]]：屬於 Lecture 03，第 5 章只當先備提醒。
- [[remedial-measures]]、[[variable-transformations]]、[[box-cox-transformation]]、[[lowess-smoothing]] 等 Lecture 05 頁面：留給「補救方法」簡報；回顧頁只預告。lowess 在第 2 章依 [[residual-plots]]（L04 p.14）的內容簡短提及。
- 槓桿值 (leverage)、Durbin–Watson 檢定：wiki 還沒有頁面（列在 index 的待建頁面），只在投影片上提一句「之後的講次」。

先備提醒（只提醒，不放進內容）：SLR 的誤差假設與常態誤差（L02）、兩樣本 t 檢定（第 4 章）、χ² 與 F 分配、一般線性檢定（L03，第 4、5 章）。

素材檢查的標示：
- ⚑ **全部頁面都是 `draft`**：可以用，但內容還沒經過你審閱。
- ⚑ **缺練習**：[[standardized-residuals]]、[[normal-probability-plot]] 沒有對應的練習題。
- ✅ wiki 中沒有未處理的 `⚠️ 待確認`。L04 的兩個問題（BF 計算式的 28.40534、缺適檢定的下標 *i*→*j*）已在 wiki 更正；銀行例題的缺適檢定是補充計算，投影片會標「補充」。
- ⚑ **離群值門檻**：本講用 $\lvert r_i\rvert>3$，Lecture 05 用 $>4$。wiki 已並列兩者；本簡報以 L04 的 3 為主，講者備註提到 L05 的差異。

## 1 大綱

**總頁數：28 頁**（封面、路線、5 章、回顧）

### 開場（2 頁）
- 封面：簡單線性迴歸的模型診斷 Diagnostics for Simple Linear Regression（Lecture 04 · ALSM Ch.3.1–3.7）
- 今天的路線：5 章的標題；先備提醒「SLR 的誤差假設」

### 第 1 章　為什麼要診斷？（4 頁）
- 目標：說出模型可能出錯的 6 種情況；知道殘差是主要工具、圖形為主、檢定為輔；會算標準化殘差
- wiki 頁面：[[model-diagnostics]]、[[standardized-residuals]]
- 頁面：章節頁 → 模型可能出錯的 6 種情況（表格，對應後面各章）→ 殘差與標準化殘差（$e_i$、$r_i$、$e_i^*$）→ 圖形為主、檢定為輔
- 先備提醒：SLR 的誤差假設、常態誤差（L02）
- 練習：⚑ 無（標準化殘差缺練習）
- 出處：Lecture 04 p.1–2, 15

### 第 2 章　用殘差圖看出問題（6 頁）
- 目標：知道 7 種殘差圖；能從圖形判斷非線性、變異數不相同、誤差相關、離群值、遺漏變數
- wiki 頁面：[[residual-plots]]、[[linearity-of-regression-function]]、[[constant-error-variance]]、[[independent-errors]]、[[outliers]]、[[delete-outliers]]
- 頁面：章節頁 → 七種殘差圖（$e$ 對 $\hat Y$ 最重要；lowess 輔助）→ 好的與壞的殘差圖（水平帶、U 形、喇叭形，示意圖）→ 時間順序與遺漏變數（焊接例、A／B 公司機器，示意圖）→ 離群值（$\lvert r_i\rvert>3$；誤解卡「直接刪掉」）→ 練習 1
- 互動：🤔 先猜猜看（看圖說出是哪種問題）
- 練習：[[residual-patterns-01]]（補充題，難度 1）
- 出處：Lecture 04 p.3–4, 10–14

### 第 3 章　檢查常態（5 頁）
- 目標：理解常態機率圖的期望值 $\sqrt{MSE}\,z(A)$；會判讀圖形與座標軸；知道常態相關檢定等正式檢定，以及檢定不能取代圖形
- wiki 頁面：[[normal-probability-plot]]、[[normality-tests]]、[[toluca-company]]、[[tests-replace-plots]]
- 頁面：章節頁 → 常態機率圖怎麼來（$A=(k-0.375)/(n+0.25)$；Toluca 最大殘差 103.53 對 95.91）→ 怎麼看（直線、偏斜、重尾的示意圖；注意兩軸對調；最後才檢查常態）→ 常態性檢定（相關檢定 0.991 > 0.959；AD、SW、Lilliefors 的 p 值）→ 檢定不能取代圖形（誤解卡）
- 練習：⚑ 無（常態機率圖缺練習；由第 4 章練習 2 部分涵蓋常態檢定）
- 出處：Lecture 04 p.5–10, 15–17

### 第 4 章　檢定變異數是否相同（4 頁）
- 目標：會做 Brown–Forsythe 與 Breusch–Pagan 檢定，說出兩者的前提差異
- wiki 頁面：[[brown-forsythe-test]]、[[breusch-pagan-test]]、[[toluca-company]]、[[constant-error-variance]]
- 頁面：章節頁 → Brown–Forsythe（分兩組、與中位數的絕對離差；Toluca $t^*_{BF}=1.316$、p = 0.201）→ Breusch–Pagan（$e^2$ 對 $X$ 迴歸；Toluca $X^2_{BP}=0.821$、p = 0.365；與 BF 對照）→ 練習 2
- 先備提醒：兩樣本 t 檢定、χ² 分配
- 練習：[[diagnostic-tests-01]]（補充題，難度 1）
- 出處：Lecture 04 p.18–21

### 第 5 章　缺適檢定（6 頁）
- 目標：理解 $SSE=SSPE+SSLF$ 與 $F^*=MSLF/MSPE$；能手算小例題；知道需要重複觀測
- wiki 頁面：[[lack-of-fit-test]]、[[lack-of-fit-toy]]、[[bank-new-accounts]]、[[linearity-of-regression-function]]
- 頁面：章節頁 → 想法：純誤差 vs. 缺適（完整模型 $\mu_j$、縮減模型直線；離差分解圖，示意圖）→ 檢定統計量與期望均方 → 6 筆資料小例題（$SSPE=26$、$SSLF=0.794$、$F^*=0.0916$）→ 銀行例題（11 筆資料的散布圖與水準平均；$F^*=14.80>5.19$，標補充計算）→ 練習 3
- 互動：🤔 先猜猜看（銀行資料的直線配適好不好）
- 先備提醒：一般線性檢定、ANOVA 分解（L03）
- 練習：[[lack-of-fit-01]]（補充題，難度 2）
- 出處：Lecture 04 p.21–28

### 收尾（1 頁）
- 重點回顧：問題 × 圖形 × 檢定的對照表；預告下一份「補救方法」（L05）

## 待你決定

1. **缺練習的兩個概念**（標準化殘差、常態機率圖）：要不要補一題補充題（例如給 5 個殘差算 $A$、$z(A)$ 與期望值）？補的話要先建 wiki 練習頁，再放進簡報。
2. 全部頁面都還是 `draft`：直接用來做簡報（前兩份的做法），還是先審閱 wiki？
