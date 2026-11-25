---
type: derivation
topic: linear
aliases: [Normal equations, 正規方程式, LS estimators derivation, 最小平方估計量推導]
sources: ["[[sources/lecture-02]]"]
related: ["[[least-squares]]", "[[fitted-values-and-residuals]]"]
status: draft
updated: 2026-11-24
---

# 最小平方估計量的推導 (Deriving the Least Squares Estimators)

> 對 $Q$ 分別對 $\beta_0$、$\beta_1$ 偏微分、令為 0，解兩條正規方程式。

## 目標
讓 $Q = \sum_{i=1}^n (Y_i - \beta_0 - \beta_1 X_i)^2$ 最小（見 [[least-squares]]）。

## 步驟 1：偏微分
（[[sources/lecture-02]] p.6）

$$\frac{\partial Q}{\partial \beta_0} = -2 \sum (Y_i - \beta_0 - \beta_1 X_i), \qquad \frac{\partial Q}{\partial \beta_1} = -2 \sum (Y_i - \beta_0 - \beta_1 X_i) X_i$$

## 步驟 2：正規方程式
記讓偏微分為 0 的值為 $b_0$、$b_1$，得到**正規方程式** (normal equations)（[[sources/lecture-02]] p.6）：

$$\sum (Y_i - b_0 - b_1 X_i) = 0, \qquad \sum (Y_i - b_0 - b_1 X_i) X_i = 0$$

展開：

$$\sum Y_i - n b_0 - b_1 \sum X_i = 0, \qquad \sum Y_i X_i - b_0 \sum X_i - b_1 \sum X_i^2 = 0$$

## 步驟 3：解 b₀
由第一條（[[sources/lecture-02]] p.7）：

$$b_0 = \frac{\sum Y_i - b_1 \sum X_i}{n} = \bar Y - b_1 \bar X$$

## 步驟 4：解 b₁
把 $b_0$ 代入第二條（[[sources/lecture-02]] p.7）：

$$\sum Y_i X_i - \frac{\sum X_i \sum Y_i}{n} + b_1 \left[ \frac{(\sum X_i)^2}{n} - \sum X_i^2 \right] = 0$$

$$b_1 = \frac{\sum Y_i X_i - (\sum X_i \sum Y_i)/n}{\sum X_i^2 - (\sum X_i)^2/n} = \frac{\sum (Y_i - \bar Y)(X_i - \bar X)}{\sum (X_i - \bar X)^2}$$

## 補充說明
- 二階導數可以確認這組解確實讓 $Q$ 最小（[[sources/lecture-02]] p.7）。
- 正規方程式就是殘差的兩個性質：$\sum e_i = 0$、$\sum X_i e_i = 0$（見 [[fitted-values-and-residuals]]）。
- 符號：講義 p.7 提到 LS 估計量也常寫成 $\hat\beta_0$、$\hat\beta_1$，只要定義清楚、前後一致即可；本 wiki 用 $b_0$、$b_1$（見 [[notation]]）。

## 教學提示
- 第 4 步代數最容易出錯，建議板書時把「$\sum X_i \sum Y_i / n$」寫成 $n \bar X \bar Y$ 幫助辨識。
- 讓學生注意：第一條正規方程式等於「殘差和為 0」，第二條等於「殘差與 $X$ 正交」。
- 相關練習：[[least-squares-01]]

## 出處
- [[sources/lecture-02]] p.6–7
