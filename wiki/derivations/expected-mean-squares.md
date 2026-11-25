---
type: derivation
topic: linear
aliases: [Expected mean squares, E(MSR), E(MSE), 期望均方]
sources: ["[[sources/lecture-03]]"]
related: ["[[f-test-anova]]", "[[anova-decomposition]]", "[[error-variance-mse]]"]
status: draft
updated: 2026-11-24
---

# 期望均方 (Expected Mean Squares)

> $E(MSE) = \sigma^2$，$E(MSR) = \sigma^2 + \beta_1^2 S_{XX}$；所以 $MSR$ 和 $MSE$ 差很多時，表示 $\beta_1 \neq 0$。

## 結果
（[[sources/lecture-03]] p.24）

$$E(MSE) = \sigma^2, \qquad E(MSR) = \sigma^2 + \beta_1^2 \sum (X_i - \bar X)^2$$

## 推導
- $E(MSE) = \sigma^2$：見 [[sampling-distribution-of-estimators]]。
- $E(MSR)$（[[sources/lecture-03]] p.25）：$MSR = SSR/1 = SSR = b_1^2 \sum (X_i - \bar X)^2$，所以
  $$E(MSR) = \sum (X_i - \bar X)^2 E(b_1^2) = \sum (X_i - \bar X)^2 \left[Var(b_1) + \beta_1^2\right] = \beta_1^2 \sum (X_i - \bar X)^2 + \sigma^2$$
  （用到 $E(b_1^2) = Var(b_1) + [E(b_1)]^2$、$Var(b_1) = \sigma^2/S_{XX}$。）

## 意義
- $\beta_1 = 0$ 時兩者期望值相同，$MSR/MSE$ 應該接近 1。
- $\beta_1 \neq 0$ 時 $E(MSR) > E(MSE)$，比值傾向大於 1。
- 這就是用 $F^* = MSR/MSE$ 檢定 $\beta_1 = 0$ 的理由，見 [[f-test-anova]]。

## 教學提示
- 只要記得 $E(X^2) = Var(X) + [E(X)]^2$，推導只有一行。

## 出處
- [[sources/lecture-03]] p.24–25
