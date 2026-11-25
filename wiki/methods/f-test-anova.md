---
type: method
topic: linear
aliases: [ANOVA F test, F 檢定, F test for beta1, F*=MSR/MSE]
sources: ["[[sources/lecture-03]]"]
related: ["[[anova-decomposition]]", "[[expected-mean-squares]]", "[[inference-regression-coefficients]]", "[[general-linear-f-test]]"]
status: draft
updated: 2026-11-24
---

# ANOVA F 檢定 (ANOVA F Test for β₁)

> 比較「迴歸解釋的變異」和「誤差的變異」：$F^* = MSR/MSE$ 夠大就拒絕 $\beta_1 = 0$。

## 檢定
檢定 $H_0: \beta_1 = 0$ vs. $H_a: \beta_1 \neq 0$（[[sources/lecture-03]] p.25）：

$$F^* = \frac{MSR}{MSE} \sim F(1,\,n-2) \quad (H_0 \text{ 為真時})$$

- 拒絕 $H_0$ 若 $F^* > F(1-\alpha;\,1,\,n-2)$。
- 依據：$SSE/\sigma^2 \sim \chi^2_{n-2}$；$H_0$ 下 $SSR/\sigma^2 \sim \chi^2_1$；兩者獨立。
- $H_1$ 下 $F^*$ 服從非中心 F 分配。
- 理由見 [[expected-mean-squares]]：$\beta_1 \neq 0$ 時 $E(MSR) > E(MSE)$。

## 與 t 檢定等價
對 $H_0: \beta_1 = 0$ vs. $H_1: \beta_1 \neq 0$，ANOVA F 檢定（單尾）等價於**雙尾** t 檢定：$(t^*)^2 = F^*$，且 $t(1-\alpha/2;\,n-2)^2 = F(1-\alpha;\,1,\,n-2)$（[[sources/lecture-03]] p.25；ALSM p.71）。

## 用 F 還是 t？
（[[sources/lecture-03]] p.25）
1. F 檢定只適合檢定斜率「不等於 0」。
2. 要檢定斜率為正或為負（單尾），用 t 檢定。
3. 多元迴歸要同時檢定**多個**斜率為 0 時，F 檢定更有用。

## 例子
- [[toluca-company]]：$F^* = 252{,}378 / 2{,}384 = 105.9$；$F(0.95;\,1,\,23) = 4.28$（補充計算：$= 2.069^2$），拒絕 $H_0$。也可驗證 $10.29^2 \approx 105.9$。

## 教學提示
- 用 Toluca 的 R 輸出示範：summary 裡的 t 值平方就是 anova 表的 F 值。
- 相關練習：[[slr-inference-01]]

## 出處
- [[sources/lecture-03]] p.24–26
