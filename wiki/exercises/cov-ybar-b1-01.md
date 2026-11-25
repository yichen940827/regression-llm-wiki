---
type: exercise
topic: linear
origin: lecture
difficulty: 2
sources: ["[[sources/lecture-03]]"]
related: ["[[sampling-distribution-of-estimators]]", "[[centered-slr]]"]
status: draft
updated: 2026-11-24
---

# 練習：證明 Cov(Ȳ, b₁) = 0

## 題目
（[[sources/lecture-03]] p.6，講義留作練習）在 SLR 的誤差假設下，證明 $Cov(\bar Y, b_1) = 0$。

> [!hint]- 提示
> 把 $\bar Y$ 和 $b_1$ 都寫成 $Y_i$ 的線性組合：$\bar Y = \sum \frac1n Y_i$、$b_1 = \sum k_i Y_i$，再用 $Y_i$ 彼此不相關、$\sum k_i = 0$。

> [!solution]- 詳解
> （詳解為補充，非講義內容）
>
> $$Cov(\bar Y, b_1) = Cov\left( \sum_i \frac1n Y_i,\ \sum_j k_j Y_j \right) = \sum_i \frac1n k_i\, Var(Y_i) = \frac{\sigma^2}{n} \sum k_i = 0$$
>
> （$i \neq j$ 時 $Cov(Y_i, Y_j) = 0$；$\sum k_i = 0$ 見 [[ls-unbiasedness-and-variance]]。）
>
> 這也說明 [[centered-slr]] 中 $b_0^* = \bar Y$ 與 $b_1$ 不相關。

## 考到的觀念
- [[sampling-distribution-of-estimators]]
- [[centered-slr]]
