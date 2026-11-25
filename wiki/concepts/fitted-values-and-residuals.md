---
type: concept
topic: linear
aliases: [Fitted values, Residuals, 配適值, 殘差, 估計的迴歸函數, fitted line]
sources: ["[[sources/lecture-02]]", "[[sources/lecture-03]]", "[[sources/lecture-04]]"]
related: ["[[least-squares]]", "[[error-variance-mse]]", "[[simple-linear-regression]]"]
status: draft
updated: 2026-11-24
---

# 配適值與殘差 (Fitted Values and Residuals)

> 配適值是「估計出來的平均」，殘差是「實際觀測值和它的差」，也就是看得到的誤差。

## 定義
（[[sources/lecture-02]] p.12）
- **配適值**：第 $i$ 筆觀測的配適值
  $$\hat Y_i = \widehat{E}(Y_i \mid X_i) = b_0 + b_1 X_i$$
  是 $X = X_i$ 時 $E(Y_i)$ 的估計。
- **殘差**：觀測值與配適值的差
  $$e_i = Y_i - \hat Y_i = Y_i - (b_0 + b_1 X_i)$$
- **估計的迴歸函數**（配適線）：$\hat Y = b_0 + b_1 X$，用來估計 $E(Y \mid X) = \beta_0 + \beta_1 X$。

## 殘差 vs. 誤差

| | 誤差 $\varepsilon_i$ | 殘差 $e_i$ |
|---|---|---|
| 定義 | $Y_i - (\beta_0 + \beta_1 X_i)$ | $Y_i - (b_0 + b_1 X_i)$ |
| 用的線 | 母體迴歸線（未知） | 配適線（估計） |
| 看得到嗎 | 看不到 | 看得到 |

殘差是誤差在觀測資料上的對應，對於檢查模型是否適合資料**非常重要**（[[sources/lecture-02]] p.12）。殘差分析的方法見 [[model-diagnostics]]；比較殘差大小時常用 [[standardized-residuals|標準化殘差]]（[[sources/lecture-04]] p.2）。

## 配適線的性質
（[[sources/lecture-02]] p.13–14）
1. 殘差加總為 0：$\sum_{i=1}^n e_i = 0$（來自第一條正規方程式）。
2. 殘差平方和 $\sum e_i^2$ 最小（最小平方法的定義）。
3. 配適線一定通過 $(\bar X, \bar Y)$：$X = \bar X$ 時 $\hat Y = \bar Y$。
4. 觀測值的總和等於配適值的總和：$\sum Y_i = \sum \hat Y_i$。
5. 以 $X_i$ 加權的殘差和為 0：$\sum X_i e_i = 0$（來自第二條正規方程式）。
6. 以 $\hat Y_i$ 加權的殘差和為 0：$\sum \hat Y_i e_i = 0$。

性質 1、5 的來源見 [[least-squares-estimators]]。

> 這些性質需要模型**有截距**。[[regression-through-origin|過原點迴歸]]中殘差和一般不為 0，例如 [[warehouse]] 的 $\sum e_i = 22.72$（[[sources/lecture-03]] p.37）。

## 例子
- [[toluca-company]]：$X = 65$ 時估計平均工時 $\hat Y = 294.4$；第一筆 $X_1 = 80$ 的配適值 $\hat Y_1 = 347.98$、殘差 $e_1 = 51.02$。

## 教學提示
- 學生常卡關：把殘差當成誤差。用上面的對照表強調「殘差是用估計的線算的」。
- 性質 3（通過 $(\bar X, \bar Y)$）可以直接從 $b_0 = \bar Y - b_1 \bar X$ 看出來，適合讓學生自己推。
- 可以畫的圖：散布圖＋配適線，每個點畫一條垂直線段到配適線，標成 $e_i$。
- 相關練習：[[least-squares-01]]

## 出處
- [[sources/lecture-02]] p.12–14
- [[sources/lecture-03]] p.37
- [[sources/lecture-04]] p.2
