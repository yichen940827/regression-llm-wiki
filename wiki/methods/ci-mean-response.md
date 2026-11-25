---
type: method
topic: linear
aliases: [Confidence interval for mean response, 平均反應的信賴區間, E(Yh), confidence band, 信賴帶]
sources: ["[[sources/lecture-03]]"]
related: ["[[prediction-interval]]", "[[prediction-vs-confidence-interval]]", "[[fitted-values-and-residuals]]"]
status: draft
updated: 2026-11-24
---

# 平均反應的信賴區間 (Interval Estimation of the Mean Response)

> 估計「所有 $X = X_h$ 的單位，$Y$ 的平均」落在哪裡；$X_h$ 離 $\bar X$ 越遠，區間越寬。

## 問題
例：估計 20 歲美國女性的**平均**體重 → 迴歸用語：新的解釋變數值 $X = X_h$ 時估計 $Y$ 的平均（[[sources/lecture-03]] p.13）。
- $X_h$ 不必是樣本中出現過的值，但應在模型的適用範圍內。
- $X_h$ 在資料範圍外時，對 $Y$ 的敘述有風險，應避免（[[sources/lecture-03]] p.13；見 [[scope-and-extrapolation]]）。

## 點估計與抽樣分配
$E(Y_h) = \beta_0 + \beta_1 X_h$ 的不偏估計是 $\hat Y_h = b_0 + b_1 X_h$（[[sources/lecture-03]] p.14）：
1. $E(\hat Y_h) = \beta_0 + \beta_1 X_h$
2. $\sigma^2\{\hat Y_h\} = Var(\hat Y_h) = \sigma^2 \left[ \dfrac1n + \dfrac{(X_h - \bar X)^2}{S_{XX}} \right]$
   - 變異隨 $X_h$ 離 $\bar X$ 的距離變大：不同樣本的迴歸線都會通過 $(\bar X, \bar Y)$ 附近，離平均越遠，配適值差異越大（ALSM Figure 2.3）。
   - $X_h = 0$ 時 $Var(\hat Y_h) = Var(b_0)$。
3. 常態誤差下 $\hat Y_h$ 為常態；把 σ² 換成 $MSE$：
   $$\frac{\hat Y_h - E(Y \mid X_h)}{s\{\hat Y_h\}} \sim t_{n-2}, \qquad s^2\{\hat Y_h\} = MSE \left[ \frac1n + \frac{(X_h - \bar X)^2}{S_{XX}} \right]$$

## 信賴區間
（[[sources/lecture-03]] p.15）

$$\hat Y_h \pm t(1-\alpha/2;\,n-2)\, s\{\hat Y_h\}$$

- $\lvert X_h - \bar X \rvert$ 越大，區間越寬；在 $X_h = \bar X$ 最窄。
- 對範圍內每個 $X_h$ 都算一次，連起來就是配適線周圍的**信賴帶**。

## 例子
- [[toluca-company]]：$X_h = 100$ 的 90% 信賴區間為 394.9 到 443.8 小時；$X_h = 65$ 為 277.4 到 311.4 小時（較窄，因為 65 較接近 $\bar X = 70$）。

## 常見誤解
- [[prediction-vs-confidence-interval]]

## 教學提示
- 可以畫的圖：配適線＋喇叭形信賴帶，最窄處在 $\bar X$。
- 相關練習：[[ci-vs-pi-01]]

## 出處
- [[sources/lecture-03]] p.13–15
