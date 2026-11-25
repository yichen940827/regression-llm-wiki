---
type: concept
topic: linear
aliases: [Error variance, MSE, mean square error, 誤差變異數, 均方誤差, SSE, 殘差平方和, s^2]
sources: ["[[sources/lecture-02]]", "[[sources/lecture-03]]"]
related: ["[[fitted-values-and-residuals]]", "[[slr-error-assumptions]]", "[[mle-normal-slr]]"]
status: draft
updated: 2026-11-24
---

# 誤差變異數的估計：MSE (Estimating the Error Variance)

> 用殘差的平方和除以 $n-2$ 來估計 $\sigma^2$；少掉的 2 是因為先估計了 $\beta_0$ 和 $\beta_1$。

## 為什麼需要估計 σ²
$\sigma^2 = Var(\varepsilon_i)$ 是模型的第三個未知參數。它本身通常不是重點，但要評估 $\beta_0$、$\beta_1$ 估計得準不準，就需要它（[[sources/lecture-02]] p.15）。

## 從樣本變異數類推
只看 $Y$、不管 $X$ 時，母體變異數的不偏估計是樣本變異數（[[sources/lecture-02]] p.15）：

$$s^2 = \frac{\sum (Y_i - \bar Y)^2}{n-1}$$

分母是 $n-1$，因為用 $\bar Y$ 估計了母體平均 $\mu$，少了 1 個自由度。

迴歸模型中，每筆觀測的平均都依 $X_i$ 不同，所以把 $\bar Y$ 換成配適值 $\hat Y_i$：

$$s^2 = \frac{\sum (Y_i - \hat Y_i)^2}{n-2} = \frac{\sum_{i=1}^n e_i^2}{n-2} = \frac{SSE}{n-2} = MSE$$

- $SSE$：殘差平方和 (error sum of squares)。
- $MSE$：均方誤差 (mean square error)，是 $\sigma^2$ 的**不偏**估計。
- 分母 $n-2$：估計了 $\beta_0$、$\beta_1$ 兩個量，少了 2 個自由度。
- $\sigma$ 的估計：$s = \sqrt{s^2} = \sqrt{MSE}$。

## 抽樣分配與不偏性
常態誤差下 $SSE/\sigma^2 = (n-2)MSE/\sigma^2 \sim \chi^2_{n-2}$，由此得 $E(MSE) = \sigma^2$（證明見 [[sampling-distribution-of-estimators]]，[[sources/lecture-03]] p.4–5）。這也是 σ² 信賴區間的基礎（見 [[inference-regression-coefficients]]）。

## 在 ANOVA 中的角色
$MSE$ 是 ANOVA 表的殘差均方，$F^* = MSR/MSE$（見 [[anova-decomposition]]、[[f-test-anova]]）。

## 與最大概似估計的比較
常態誤差下，$\sigma^2$ 的最大概似估計是 $\hat\sigma^2 = \sum e_i^2 / n$，是**有偏**的；一般用 $MSE$。兩者關係 $\hat\sigma^2 = \frac{n-2}{n} s^2$，$n$ 稍大時差異就很小。見 [[mle-normal-slr]]。

## 例子
- [[toluca-company]]：$SSE = 54{,}825$，$MSE = 54{,}825 / 23 = 2{,}384$，$s = \sqrt{2{,}384} = 48.8$ 小時。也就是說，對任一批量 $X$，工時分配的標準差估計約 48.8 小時。

## 教學提示
- 學生常卡關：為什麼是 $n-2$？用「每估計一個參數就用掉一個自由度」的類推，從 $n-1$ 延伸到 $n-2$。
- 提醒 $s$ 的單位和 $Y$ 相同，可以直接解讀成「觀測值通常離配適線多遠」。
- 相關練習：[[error-variance-01]]

## 出處
- [[sources/lecture-02]] p.15, 19
- [[sources/lecture-03]] p.4–5, 24
