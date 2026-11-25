---
type: concept
topic: linear
aliases: [Chi-square distribution, t distribution, F distribution, 卡方分配, t 分配, F 分配, 抽樣分配複習]
sources: ["[[sources/lecture-03]]"]
related: ["[[sampling-distribution-of-estimators]]", "[[f-test-anova]]", "[[inference-regression-coefficients]]"]
status: draft
updated: 2026-11-24
---

# χ²、t、F 分配 (Chi-square, t and F Distributions)

> 迴歸推論用到的三個分配，都是從標準常態「組裝」出來的。

## 定義
（[[sources/lecture-03]] p.1–2）
- **常態**：$X \sim N(\mu, \sigma^2)$；標準常態 $\mu = 0$、$\sigma^2 = 1$。
- **χ² 分配**：$Z_1, \dots, Z_\nu$ 是 $\nu$ 個獨立標準常態，則
  $$W = Z_1^2 + \cdots + Z_\nu^2 \sim \chi^2_\nu$$
  - $E(W) = \nu$，$Var(W) = 2\nu$；永遠為正。
- **t 分配**：$Z \sim N(0,1)$、$W \sim \chi^2_\nu$ 且兩者獨立，則
  $$T = \frac{Z}{\sqrt{W/\nu}} \sim t_\nu$$
  - $E(T) = 0$；$\nu > 2$ 時 $Var(T) = \nu/(\nu-2)$。
  - 對稱於 0，形狀像常態但尾巴較厚；$\nu$ 大時接近常態。
- **F 分配**：$W_1 \sim \chi^2_{\nu_1}$、$W_2 \sim \chi^2_{\nu_2}$ 且獨立，則
  $$F = \frac{W_1/\nu_1}{W_2/\nu_2} \sim F_{\nu_1, \nu_2}$$
  - 重要等價：$F_{1,\nu} = (t_\nu)^2$。

## 在迴歸中的用途
- $SSE/\sigma^2 \sim \chi^2_{n-2}$ → σ² 的信賴區間、t 統計量的分母。
- $(b_1 - \beta_1)/s\{b_1\} \sim t_{n-2}$ → β₁ 的檢定與信賴區間。
- $MSR/MSE \sim F_{1,n-2}$ → ANOVA F 檢定；$F_{1,n-2} = t_{n-2}^2$ 所以和雙尾 t 檢定等價。

見 [[sampling-distribution-of-estimators]]、[[f-test-anova]]。

## 教學提示
- 用「積木」的比喻：常態平方相加得 χ²；常態除以 χ² 的根號得 t；兩個 χ² 相除得 F。
- 學生常忘記「獨立」這個條件，要強調 $b_1$ 和 $MSE$ 獨立才能得到 t 分配。
- 可以畫的圖：自由度 2、5、30 的 t 分配和標準常態疊在一起。

## 出處
- [[sources/lecture-03]] p.1–2
