---
type: derivation
topic: linear
aliases: [Sampling distribution of b1, Sampling distribution of b0, 估計量的抽樣分配, SSE chi-square, studentized statistic]
sources: ["[[sources/lecture-03]]"]
related: ["[[ls-unbiasedness-and-variance]]", "[[normal-errors]]", "[[chi-square-t-f-distributions]]", "[[inference-regression-coefficients]]"]
status: draft
updated: 2026-11-24
---

# 估計量的抽樣分配 (Sampling Distributions of b₁, b₀ and MSE)

> 常態誤差下，$b_1$、$b_0$ 是常態；把 σ² 換成 MSE 後變成 t 分配，自由度 $n-2$。

## 抽樣分配是什麼
$b_0$、$b_1$、$s^2$ 是用樣本算出來的，是隨機變數 $Y_i$ 的函數，所以也有分配，稱為抽樣分配（[[sources/lecture-03]] p.3）。$b_1$ 的抽樣分配是指：**$X$ 的水準固定不變**，重複抽樣時 $b_1$ 會得到的不同值（[[sources/lecture-03]] p.3）。

## b₁ 的分配
（[[sources/lecture-03]] p.3–5）
1. $b_1 = \sum k_i Y_i$，$E(b_1) = \beta_1$，$Var(b_1) = \sigma^2 / S_{XX}$（見 [[ls-unbiasedness-and-variance]]）。
2. 常態誤差下，$b_1$ 是常態隨機變數的線性組合，所以也是常態：
   $$b_1 \sim N\left(\beta_1, \frac{\sigma^2}{S_{XX}}\right), \qquad \frac{b_1 - \beta_1}{\sigma\{b_1\}} \sim N(0,1)$$
3. σ² 未知時換成不偏估計 $MSE$：$s^2\{b_1\} = \widehat{Var}(b_1) = MSE / S_{XX}$，得到 studentized 統計量
   $$T = \frac{b_1 - \beta_1}{s\{b_1\}} = \frac{b_1 - \beta_1}{\sqrt{MSE/S_{XX}}}$$
4. 因為 $MSE$ 是隨機變數，$T$ 不是常態。改寫成
   $$T = \frac{(b_1 - \beta_1)/\sigma\{b_1\}}{\sqrt{\dfrac{(n-2)MSE}{\sigma^2} \Big/ (n-2)}} = \frac{Z}{\sqrt{W/(n-2)}}$$
5. 用到兩個結果：
   - $W = \dfrac{SSE}{\sigma^2} = \dfrac{(n-2)MSE}{\sigma^2} \sim \chi^2_{n-2}$（證明見下）。
   - $b_1$ 與 $s^2$ **獨立**，所以分子分母獨立。
6. 依 t 分配的定義，$T \sim t_{n-2}$。課本稱為 $(b_1 - \beta_1)/s\{b_1\}$ 的抽樣分配。

## SSE/σ² ~ χ²ₙ₋₂ 的證明
（[[sources/lecture-03]] p.4–5）

$$\varepsilon_i = Y_i - \beta_0 - \beta_1 X_i = e_i + (\bar Y - \beta_0 - \beta_1 \bar X) + (b_1 - \beta_1)(X_i - \bar X) = e_i + \bar\varepsilon + (b_1 - \beta_1)(X_i - \bar X)$$

平方加總，因為 $\sum e_i = 0$、$\sum X_i e_i = 0$，交叉項消失：

$$\sum \varepsilon_i^2 = \sum e_i^2 + n\bar\varepsilon^2 + (b_1 - \beta_1)^2 \sum (X_i - \bar X)^2$$

除以 σ²：左邊 $\sim \chi^2_n$；右邊後兩項各 $\sim \chi^2_1$ 且互相獨立，所以
$$\frac{SSE}{\sigma^2} = \frac{(n-2)MSE}{\sigma^2} \sim \chi^2_{n-2}$$

**推論**：$E\left[(n-2)MSE/\sigma^2\right] = n-2$，所以 $E(MSE) = \sigma^2$，$s^2$ 是 σ² 的不偏估計（[[sources/lecture-03]] p.5）。

## b₀ 的分配
（[[sources/lecture-03]] p.5–6）

$$b_0 \sim N\left(\beta_0, \sigma^2 \left[\frac1n + \frac{\bar X^2}{\sum (X_i - \bar X)^2}\right]\right), \qquad \frac{b_0 - \beta_0}{\sqrt{MSE\left[\frac1n + \frac{\bar X^2}{S_{XX}}\right]}} \sim t_{n-2}$$

（$b_0$ 是 $Y_i$ 的線性組合，$Y_i$ 獨立。）

## 其他結果
（[[sources/lecture-03]] p.6）
- $b_0$、$b_1$ 的聯合分配是**二元常態**。
- $Cov(b_0, b_1) = -\bar X \dfrac{\sigma^2}{\sum (X_i - \bar X)^2}$：兩者**不是**不相關的；$\bar X > 0$ 時共變異數為負。證明見 [[cov-b0-b1-01]]。
- $Cov(\bar Y, b_1) = 0$：$b_1$ 和 $\bar Y$ 不相關。證明見 [[cov-ybar-b1-01]]。這也解釋了 [[centered-slr]] 中 $Cov(b_0^*, b_1) = 0$。

## 教學提示
- 先建立「$X$ 固定、重複抽樣」的畫面，再談 $b_1$ 的分配。
- 第 4 步的改寫是關鍵：讓學生看出分子是 $Z$、分母是 $\sqrt{W/\nu}$。
- 證明 $SSE/\sigma^2 \sim \chi^2_{n-2}$ 時，重點是「n 個自由度扣掉 2 個」的直覺。

## 出處
- [[sources/lecture-03]] p.2–6
