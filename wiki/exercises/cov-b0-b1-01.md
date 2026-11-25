---
type: exercise
topic: linear
origin: lecture
difficulty: 3
sources: ["[[sources/lecture-03]]"]
related: ["[[sampling-distribution-of-estimators]]", "[[ls-unbiasedness-and-variance]]"]
status: draft
updated: 2026-11-24
---

# 練習：證明 Cov(b₀, b₁) = −X̄ σ² / S_XX

## 題目
（[[sources/lecture-03]] p.6，講義留作練習）在 SLR 的誤差假設下，證明

$$Cov(b_0, b_1) = -\bar X \frac{\sigma^2}{\sum (X_i - \bar X)^2}$$

並說明 $\bar X > 0$ 時共變異數的正負號。

> [!hint]- 提示
> 用 $b_0 = \bar Y - b_1 \bar X$，再利用 $Cov(\bar Y, b_1) = 0$（[[cov-ybar-b1-01]]）。

> [!solution]- 詳解
> （詳解為補充，非講義內容）
>
> $$Cov(b_0, b_1) = Cov(\bar Y - b_1 \bar X,\ b_1) = Cov(\bar Y, b_1) - \bar X\, Var(b_1)$$
>
> 由 [[cov-ybar-b1-01]]，$Cov(\bar Y, b_1) = 0$；又 $Var(b_1) = \sigma^2 / S_{XX}$（[[ls-unbiasedness-and-variance]]），所以
>
> $$Cov(b_0, b_1) = -\bar X \frac{\sigma^2}{S_{XX}}$$
>
> 當 $\bar X > 0$ 時共變異數為負：斜率估計偏高時，截距估計傾向偏低（迴歸線繞著 $(\bar X, \bar Y)$ 轉）。

## 考到的觀念
- [[sampling-distribution-of-estimators]]
