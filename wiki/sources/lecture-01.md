---
type: source
topic: linear
aliases: [Lecture 01, Introduction, 迴歸分析導論]
raw: raw/lecture-01.pdf
textbook: ALSM Chapter 1
pages: 10
status: draft
updated: 2026-11-23
---

# Lecture 01：迴歸分析導論 (Introduction)

> 第一堂課：迴歸這個詞從哪裡來、什麼是「統計關係」、迴歸模型能做什麼、有哪些使用上的限制。內容以觀念為主，幾乎沒有推導。

- 課程：114-1 迴歸分析 I（商學院），Fall 2025
- 對應課本：ALSM Chapter 1
- 講義列出的其他參考書：Montgomery, Peck & Vining《Introduction to Linear Regression Analysis》(6th ed.)；Fox & Weisberg《An R Companion to Applied Regression》(3rd ed.)；Rawlings, Pantula & Dickey《Applied Regression Analysis》(2nd ed.)

## 各頁重點

| 頁 | 主題 | wiki 頁面 |
|---|---|---|
| p.1 | 「迴歸」一詞的由來：Galton 研究父母與子女身高 | [[regression-to-the-mean]] |
| p.2 | `father.son` 資料：高個子父親的兒子平均較矮 | [[father-son-heights]] |
| p.3 | 解釋變數與反應變數；$n \times (k+1)$ 資料矩陣；函數關係 | [[regression-model]]、[[functional-vs-statistical-relation]] |
| p.4 | 函數關係的例子；統計關係 $Y = f(X) + \varepsilon$；績效評估例子 | [[functional-vs-statistical-relation]] |
| p.5 | 類固醇與年齡（曲線關係） | [[steroid-age]] |
| p.6 | 迴歸模型的定義；迴歸函數 $E(Y\mid\mathbf{X}) = f(\mathbf{X})$ | [[regression-model]]、[[regression-function]] |
| p.7 | 迴歸的三種用途；線性模型、SLR 與多元迴歸；Logistic 迴歸；觀察資料與實驗資料；ANOVA | [[regression-model]]、[[observational-vs-experimental-data]] |
| p.7–8 | 相關不等於因果 | [[correlation-is-not-causation]] |
| p.8 | 模型都是近似（Box 名言）；建模是反覆的過程；資料要有代表性 | [[regression-model]] |
| p.9 | 模型適用範圍與外插的危險；$X$ 視為固定 | [[scope-and-extrapolation]]、[[extrapolation-beyond-data]]、[[regression-model]] |
| p.9–10 | 偏誤與變異；靶心圖；偏誤–變異取捨 | [[bias-variance-tradeoff]]、[[bias-variance-01]] |
| p.10 | 探索性資料分析 (EDA)：只提到要先探索資料 | （僅在 [[regression-model]] 提及） |

## 符號

- 解釋變數個數用 $k$，資料矩陣為 $n \times (k+1)$（ALSM 用 $p-1$ 個解釋變數），見 [[notation]]。
- 誤差項 $\varepsilon$；迴歸函數 $E(Y\mid\mathbf{X})$；簡單線性迴歸的參數 $\beta_0, \beta_1$。

## 講義中的題目

- p.9 靶心圖 (a)–(d)：判斷各自是高／低偏誤、高／低變異 → [[bias-variance-01]]

## 待確認事項

- 無。（第 2 頁的 R 程式碼依規則不收錄，只保留數字結果。）

## 本次 ingest 建立的頁面

- concepts：[[regression-to-the-mean]]、[[functional-vs-statistical-relation]]、[[regression-function]]、[[regression-model]]、[[observational-vs-experimental-data]]、[[bias-variance-tradeoff]]、[[scope-and-extrapolation]]
- examples：[[father-son-heights]]、[[steroid-age]]
- misconceptions：[[correlation-is-not-causation]]、[[extrapolation-beyond-data]]
- exercises：[[bias-variance-01]]（講義原題）；[[functional-vs-statistical-01]]、[[observational-vs-experimental-01]]、[[extrapolation-01]]（補充題）
