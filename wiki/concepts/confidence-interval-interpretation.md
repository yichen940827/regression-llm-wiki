---
type: concept
topic: linear
aliases: [Interpretation of confidence intervals, 信賴區間的解讀, repeated sampling, 重複抽樣, spacing of X levels]
sources: ["[[sources/lecture-03]]"]
related: ["[[inference-regression-coefficients]]", "[[ci-probability-interpretation]]", "[[sampling-distribution-of-estimators]]"]
status: draft
updated: 2026-11-24
---

# 信賴區間的解讀 (Interpreting Confidence Intervals)

> 「95%」描述的是「造區間的方法」：重複抽很多次樣本，大約 95% 的區間會蓋住真正的參數。

## 正確解讀
信賴係數要用「重複抽樣」的假想實驗來說明（[[sources/lecture-03]] p.11–12），以 Toluca 的 β₁ 95% 信賴區間為例：
1. 在 $X$ 水準（批量）和原資料相同的條件下，抽出 $M$ 組各 $n$ 筆的樣本。
2. 每組樣本都算出 $b_1$、$s\{b_1\}$，用同一公式造一個 95% 信賴區間。
3. 檢查每個區間有沒有包含真正的 β₁。
4. $M$ 很大時，包含真正 β₁ 的區間比例約為 95%。

## 錯誤解讀
「真正的 β₁ 有 $1-\alpha$ 的機率落在這個區間內」是錯的：區間的隨機性來自 $b_1$，β₁ 是固定、非隨機的（[[sources/lecture-03]] p.11）。見 [[ci-probability-interpretation]]。

## X 的分散程度
給定 $n$ 與 σ²，$X$ 水準越分散，$\sum (X_i - \bar X)^2$ 越大，$b_1$（與 $b_0$）的變異數越小（[[sources/lecture-03]] p.12）。設計資料收集時，讓 $X$ 分散一些，斜率可以估得更準。

## 教學提示
- 可以畫的圖：50 條水平區間由上往下排，標出沒有蓋到真值（垂直線）的那幾條。
- 這個解讀也適用於平均反應的信賴區間（[[ci-mean-response]]）。

## 出處
- [[sources/lecture-03]] p.11–12
