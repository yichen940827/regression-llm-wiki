---
type: method
topic: linear
aliases: [Power of test, 檢定力, noncentrality parameter, 非中心參數, noncentral t]
sources: ["[[sources/lecture-03]]"]
related: ["[[inference-regression-coefficients]]", "[[toluca-company]]"]
status: draft
updated: 2026-11-24
---

# 斜率檢定的檢定力 (Power of the Test on β₁)

> 檢定力是「$H_0$ 錯的時候，真的拒絕它」的機率；用非中心參數 δ 查表。

## 定義
雙尾檢定 $H_0: \beta_1 = \beta_{10}$ vs. $H_1: \beta_1 \neq \beta_{10}$，$T^* = (b_1 - \beta_{10})/s\{b_1\}$。檢定力為（[[sources/lecture-03]] p.12）：

$$\text{Power} = P\left\{ \lvert T^* \rvert > t(1-\alpha/2;\,n-2) \mid \delta \right\}, \qquad \delta = \frac{\lvert \beta_1 - \beta_{10} \rvert}{\sigma\{b_1\}}, \quad \sigma^2\{b_1\} = \frac{\sigma^2}{\sum (X_i - \bar X)^2}$$

- δ 是**非中心參數**，衡量真正的 β₁ 離 $\beta_{10}$ 多遠（標準化的尺度）。
- $T^*$ 在 $H_1$ 下服從非中心 t 分配。
- 計算需要知道 σ²（所以 $\sigma^2\{b_1\}$）和 $n$。
- 檢定力可以從 ALSM 附錄表 B.5 查得；β₀ 的檢定同理（[[sources/lecture-03]] p.12）。
- 單邊檢定：查表 B.5 時，表上顯著水準的一半才是單邊檢定的顯著水準（[[sources/lecture-03]] p.12）。

## 例子：Toluca
檢定 $H_0: \beta_1 = 0$ vs. $H_a: \beta_1 \neq 0$，求 β₁ = 1.5 時的檢定力；假設 σ² = 2500、α = 0.05（[[sources/lecture-03]] p.12–13）。

補充計算（講義只印題目與結論，依上面公式重算）：

$$\sigma^2\{b_1\} = \frac{2500}{19{,}800} = 0.1263, \quad \sigma\{b_1\} = 0.3553, \quad \delta = \frac{1.5 - 0}{0.3553} = 4.22$$

以 df = 23 查表 B.5，檢定力約 **0.98**（[[sources/lecture-03]] p.13）。

**解讀**：若 β₁ = 1.5，有約 0.98 的機率會結論 $H_a$（$\beta_1 \neq 0$）；也就是幾乎可以確定會判斷工時和批量之間有線性關係。

> 註：講義 p.13 結論印成「conclude $H_a$ ($\beta_1 \neq 1.5$)」，依題意應為 $\beta_1 \neq 0$（2026-11-24 經使用者確認）。

## 教學提示
- 先複習型一、型二錯誤，再定義檢定力 = 1 − P(型二錯誤)。
- 讓學生想：δ 變大（真值離 0 越遠、σ 越小、X 越分散）時，檢定力怎麼變？

## 出處
- [[sources/lecture-03]] p.12–13
