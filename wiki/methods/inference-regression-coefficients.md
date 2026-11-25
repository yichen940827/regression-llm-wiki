---
type: method
topic: linear
aliases: [t test for slope, Inference about beta1, Inference about beta0, 斜率的 t 檢定, 迴歸係數的信賴區間, confidence interval for sigma^2, σ² 的信賴區間]
sources: ["[[sources/lecture-03]]"]
related: ["[[sampling-distribution-of-estimators]]", "[[f-test-anova]]", "[[power-of-slope-test]]", "[[confidence-interval-interpretation]]"]
status: draft
updated: 2026-11-24
---

# 迴歸係數的推論：t 檢定與信賴區間 (Inference on β₁, β₀ and σ²)

> 用 $(b_1 - \beta_1)/s\{b_1\} \sim t_{n-2}$ 做檢定和造區間；最常問的是「$\beta_1 = 0$ 嗎？」

## 為什麼需要推論
點估計只給一個「最好」的值。推論要回答（[[sources/lecture-03]] p.1）：
1. **信賴區間**：哪些參數值和資料合理一致？
2. **假設檢定**：資料和某個敘述（例如 $\beta_1 = 0$）一致嗎？不一致的話，反對的證據有多強？

前提：常態誤差 $\varepsilon_i \overset{iid}{\sim} N(0, \sigma^2)$（見 [[normal-errors]]）。β₁ 的推論通常最重要；σ² 本身不是重點，但推論 β₀、β₁ 需要它（[[sources/lecture-03]] p.2）。

## β₁ 的檢定
（[[sources/lecture-03]] p.6–7）

$$T^* = \frac{b_1 - \beta_{10}}{\sqrt{MSE / \sum (X_i - \bar X)^2}} \sim t_{n-2} \quad (H_0 \text{ 為真時})$$

| 假設 | 拒絕 $H_0$ 的條件 |
|---|---|
| $H_0: \beta_1 = \beta_{10}$ vs. $H_1: \beta_1 \neq \beta_{10}$ | $\lvert t^* \rvert > t(1-\alpha/2;\,n-2)$ |
| $H_0: \beta_1 \le \beta_{10}$ vs. $H_1: \beta_1 > \beta_{10}$ | $t^* > t(1-\alpha;\,n-2)$ |
| $H_0: \beta_1 \ge \beta_{10}$ vs. $H_1: \beta_1 < \beta_{10}$ | $t^* < -t(1-\alpha;\,n-2)$ |

特例 $H_0: \beta_1 = 0$（迴歸的顯著性）：不拒絕 $H_0$ 等於結論「$X$ 和 $Y$ 之間沒有**線性**關係」（[[sources/lecture-03]] p.7）。

## β₁ 的信賴區間
（[[sources/lecture-03]] p.7）

$$b_1 \pm t(1-\alpha/2;\,n-2)\, s\{b_1\}, \qquad s\{b_1\} = \sqrt{\frac{MSE}{\sum (X_i - \bar X)^2}}$$

區間表達 $b_1$ 估計得多精確。解讀見 [[confidence-interval-interpretation]]。

## β₀ 的推論
β₀ 的推論通常不太重要；需要時做法與 β₁ 相同（[[sources/lecture-03]] p.10–11）：

$$T^* = \frac{b_0 - \beta_{00}}{s\{b_0\}} \sim t_{n-2}, \qquad s\{b_0\} = \sqrt{MSE\left[\frac1n + \frac{\bar X^2}{\sum (X_i - \bar X)^2}\right]}$$

信賴區間 $b_0 \pm t(1-\alpha/2;\,n-2)\, s\{b_0\}$；拒絕規則同上表。

## σ² 的信賴區間
因為 $SSE/\sigma^2 = (n-2)MSE/\sigma^2 \sim \chi^2_{n-2}$（[[sources/lecture-03]] p.11）：

$$\left[ \frac{SSE}{\chi^2(1-\alpha/2;\,n-2)},\ \frac{SSE}{\chi^2(\alpha/2;\,n-2)} \right]$$

其中 $\chi^2(p;\,\nu)$ 表示第 $p$ 百分位。

> 符號註：講義寫成 $\left[\frac{(n-2)MSE}{\chi^2_{\alpha/2,n-2}}, \frac{(n-2)MSE}{\chi^2_{1-\alpha/2,n-2}}\right]$，其中 $\chi^2_{\alpha/2}$ 指**上尾**臨界值；wiki 改用百分位寫法，兩者是同一個區間（2026-11-24 經使用者確認）。

## 偏離常態的影響
見 [[normal-errors]]：輕微偏離時 t 推論近似成立；樣本大時估計量漸近常態（[[sources/lecture-03]] p.11）。

## 例子
- [[toluca-company]]：$t^* = 10.29$，拒絕 $\beta_1 = 0$；β₁ 的 95% 信賴區間 2.85 到 4.29。

## 常見誤解
- [[ci-probability-interpretation]]
- 「不拒絕 $\beta_1 = 0$ 代表 $X$、$Y$ 無關」：只代表沒有**線性**關係（見 [[high-r-squared-good-model]] 的曲線例子）。

## 教學提示
- 統計量的結構：「（估計 − 假設值）／標準誤」，之後所有 t 檢定都長這樣。
- 單尾檢定的臨界值用 $1-\alpha$，雙尾用 $1-\alpha/2$，學生常混。
- 何時用 F、何時用 t：見 [[f-test-anova]]。
- 相關練習：[[slr-inference-01]]

## 出處
- [[sources/lecture-03]] p.1–2, 6–11
