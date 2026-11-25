---
type: derivation
topic: linear
aliases: [MLE for normal error regression, 常態誤差迴歸的最大概似估計, LS equals ML]
sources: ["[[sources/lecture-02]]"]
related: ["[[maximum-likelihood]]", "[[normal-errors]]", "[[least-squares]]", "[[error-variance-mse]]"]
status: draft
updated: 2026-11-24
---

# 常態誤差 SLR 的最大概似估計 (MLE for the Normal Error SLR)

> 誤差常態時，$\beta_0$、$\beta_1$ 的最大概似估計就是最小平方估計；但 $\sigma^2$ 的最大概似估計除以 $n$，是有偏的。

## 概似函數
在 [[normal-errors|常態誤差]] 下（[[sources/lecture-02]] p.18）：

$$f(Y_i \mid X_i; \beta_0, \beta_1, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left[ -\frac{1}{2\sigma^2} (Y_i - \beta_0 - \beta_1 X_i)^2 \right]$$

$$L(\beta_0, \beta_1, \sigma^2) = \frac{1}{(2\pi\sigma^2)^{n/2}} \exp\left[ -\frac{1}{2\sigma^2} \sum_i (Y_i - \beta_0 - \beta_1 X_i)^2 \right]$$

$$\log L = -\frac n2 \log 2\pi - \frac n2 \log \sigma^2 - \frac{1}{2\sigma^2} \sum_i (Y_i - \beta_0 - \beta_1 X_i)^2$$

## 對 β₀、β₁ 微分
（[[sources/lecture-02]] p.18–19）

$$\frac{\partial \log L}{\partial \beta_0} = \frac{1}{\sigma^2} \sum (Y_i - \beta_0 - \beta_1 X_i) = 0, \qquad \frac{\partial \log L}{\partial \beta_1} = \frac{1}{\sigma^2} \sum X_i (Y_i - \beta_0 - \beta_1 X_i) = 0$$

和 [[least-squares-estimators|正規方程式]] 相同，所以

$$\hat\beta_0 = \bar Y - \hat\beta_1 \bar X = b_0, \qquad \hat\beta_1 = \frac{\sum (X_i - \bar X)(Y_i - \bar Y)}{\sum (X_i - \bar X)^2} = b_1$$

直覺：對任何 $\sigma^2$，$\log L$ 的最大值都發生在讓 $\sum (Y_i - \beta_0 - \beta_1 X_i)^2$ 最小的地方。**常態線性模型下，LS 估計就是 ML 估計**（[[sources/lecture-02]] p.19）。這把最小平方法連到最大概似估計的許多好性質。

## 對 σ² 微分
（[[sources/lecture-02]] p.19）

$$\frac{\partial \log L}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{\sum (Y_i - \beta_0 - \beta_1 X_i)^2}{2\sigma^4}$$

代入 $\hat\beta_0, \hat\beta_1$ 並令為 0：

$$\hat\sigma^2 = \frac{\sum (Y_i - \hat\beta_0 - \hat\beta_1 X_i)^2}{n} = \frac{\sum e_i^2}{n}$$

## σ̂² 與 MSE
- $\hat\sigma^2$ 是**有偏**的；一般使用不偏的 $s^2 = MSE = \sum e_i^2/(n-2)$（見 [[error-variance-mse]]）。
- 兩者關係：$\hat\sigma^2 = \dfrac{n-2}{n} s^2$，$n$ 稍大時差異就很小（[[sources/lecture-02]] p.19）。

## 教學提示
- 重點不在推導細節，而在結論：「常態下兩種方法給同樣的 $b_0, b_1$，但 $\sigma^2$ 的分母不同」。
- 可以讓學生算 $n = 5$ 和 $n = 100$ 時 $\frac{n-2}{n}$ 的值，感受差異。
- 相關練習：[[error-variance-01]]

## 出處
- [[sources/lecture-02]] p.18–19
