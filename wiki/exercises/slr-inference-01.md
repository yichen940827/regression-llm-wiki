---
type: exercise
topic: linear
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-03]]"]
related: ["[[inference-regression-coefficients]]", "[[anova-decomposition]]", "[[f-test-anova]]", "[[r-squared-and-correlation]]"]
status: draft
updated: 2026-11-24
---

# 練習：一套完整的 SLR 推論

## 題目
（補充題）延續 [[least-squares-01]] 的 5 筆資料：$\bar X = 3$、$\bar Y = 4$、$S_{XX} = 10$、$b_1 = 0.6$、$b_0 = 2.2$、$SSE = 2.4$、$MSE = 0.8$；$Y$ = 2, 4, 5, 4, 5。

(a) 求 $s\{b_1\}$，在 α = 0.05 下檢定 $H_0: \beta_1 = 0$（雙尾）。
(b) 求 β₁ 的 95% 信賴區間。
(c) 求 $SSTO$、$SSR$，寫出 ANOVA 表並做 F 檢定；驗證 $t^{*2} = F^*$。
(d) 求 $R^2$ 與 $r$。

（$t(0.975;\,3) = 3.182$，$F(0.95;\,1,\,3) = 10.13$）

> [!hint]- 提示
> $s\{b_1\} = \sqrt{MSE/S_{XX}}$；$SSTO = \sum (Y_i - \bar Y)^2$；$SSR = SSTO - SSE$ 或 $b_1^2 S_{XX}$。

> [!solution]- 詳解
> **(a)** $s\{b_1\} = \sqrt{0.8/10} = 0.283$；$t^* = 0.6 / 0.283 = 2.12$。$\lvert t^* \rvert = 2.12 < 3.182$，**不拒絕** $H_0$：樣本太小，證據不足以說有線性關係。
>
> **(b)** $0.6 \pm 3.182 \times 0.283 = 0.6 \pm 0.900$，即 −0.300 到 1.500。區間包含 0，和 (a) 一致。
>
> **(c)** $SSTO = 4 + 0 + 1 + 0 + 1 = 6$；$SSR = 6 - 2.4 = 3.6$（$= 0.6^2 \times 10$ ✔）。
>
> | 來源 | SS | df | MS | F |
> |---|---|---|---|---|
> | 迴歸 | 3.6 | 1 | 3.6 | 4.5 |
> | 殘差 | 2.4 | 3 | 0.8 | |
> | 總和 | 6.0 | 4 | | |
>
> $F^* = 4.5 < 10.13$，不拒絕。$t^{*2} = 2.121^2 = 4.5 = F^*$ ✔，且 $3.182^2 = 10.13$ ✔。
>
> **(d)** $R^2 = 3.6 / 6 = 0.6$；$r = +\sqrt{0.6} = 0.775$（正號跟 $b_1$ 相同）。R² 不低，但 $n = 5$ 太小，檢定仍不顯著。

## 考到的觀念
- [[inference-regression-coefficients]]
- [[anova-decomposition]]、[[f-test-anova]]
- [[r-squared-and-correlation]]
