---
type: method
topic: linear
aliases: [Prediction interval, 預測區間, prediction of new observation, Yh(new), s{pred}, mean of m new observations]
sources: ["[[sources/lecture-03]]"]
related: ["[[ci-mean-response]]", "[[prediction-vs-confidence-interval]]"]
status: draft
updated: 2026-11-24
---

# 新觀測值的預測區間 (Prediction Interval for a New Observation)

> 預測「下一個」$X = X_h$ 單位的 $Y$；要同時考慮估計平均的誤差和個體本身的變異，所以比信賴區間寬。

## 問題
例：隨機挑一位 20 歲美國女性，她的體重是多少？→ 預測新觀測值 $Y_{h(new)}$（[[sources/lecture-03]] p.13）。新觀測被視為和用來做迴歸的資料**獨立**的一次新試驗（[[sources/lecture-03]] p.16）。

## 預測誤差
點預測 $\hat Y_h = b_0 + b_1 X_h$；預測誤差 $\psi = Y_{h(new)} - \hat Y_h$（[[sources/lecture-03]] p.16）：

$$E(\psi) = (\beta_0 + \beta_1 X_h) - (\beta_0 + \beta_1 X_h) = 0$$
$$Var(\psi) = Var(Y_{h(new)}) + Var(\hat Y_h) = \sigma^2 \left[ 1 + \frac1n + \frac{(X_h - \bar X)^2}{S_{XX}} \right] = \sigma^2\{pred\}$$

兩個變異來源：(1) 估計平均 $\hat Y_h$ 的變異；(2) 新觀測值本身的變異 σ²。

## 預測區間
常態誤差下 $(Y_{h(new)} - \hat Y_h)/s\{pred\} \sim t_{n-2}$（[[sources/lecture-03]] p.16–17）：

$$\hat Y_h \pm t(1-\alpha/2;\,n-2)\, s\{pred\}, \qquad s\{pred\} = \sqrt{MSE \left[ 1 + \frac1n + \frac{(X_h - \bar X)^2}{S_{XX}} \right]}$$

## m 個新觀測的平均
在 $X_h$ 預測 $m$ 個獨立新觀測的平均 $\bar Y_{h(new)}$（[[sources/lecture-03]] p.17）：

$$\hat Y_h \pm t(1-\alpha/2;\,n-2)\, s\{predmean\}, \qquad s\{predmean\} = \sqrt{MSE \left[ \frac1m + \frac1n + \frac{(X_h - \bar X)^2}{S_{XX}} \right]}$$

- 變異包含：$m$ 個觀測平均的變異＋$\hat Y_h$ 的抽樣變異。
- $m = 1$ 時就是單一新觀測的預測區間。

## 和信賴區間的差別
（[[sources/lecture-03]] p.17）
1. 信賴區間是要蓋住**參數**；預測區間是**隨機變數**可能的範圍。
2. 同一個 $X_h$，平均反應的信賴區間一定比預測區間窄；兩者都在 $X_h = \bar X$ 最窄。

見 [[prediction-vs-confidence-interval]]。

## 例子
- [[toluca-company]]：$X_h = 100$ 的 90% 預測區間為 332.2 到 506.6 小時；三個新批次的平均，90% 預測區間為 365.2 到 473.5 小時（補充計算）。

## 教學提示
- 用「1 +」記住差別：預測區間多了個體本身的 σ²。
- 即使 $n \to \infty$，預測區間寬度也不會趨近 0（補充，非講義內容）。
- 相關練習：[[ci-vs-pi-01]]

## 出處
- [[sources/lecture-03]] p.13, 15–17
