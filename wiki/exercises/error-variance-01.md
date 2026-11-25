---
type: exercise
topic: linear
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-02]]"]
related: ["[[error-variance-mse]]", "[[mle-normal-slr]]"]
status: draft
updated: 2026-11-24
---

# 練習：MSE、自由度與 σ̂²

## 題目
（補充題）
1. 延續 [[least-squares-01]] 的 5 筆資料，殘差為 −0.8, 0.6, 1.0, −0.6, −0.2。求 $SSE$、$MSE$ 與 $s$。
2. 另一筆 SLR 資料 $n = 12$、$SSE = 300$。求 $s^2$、$s$，以及常態誤差下的最大概似估計 $\hat\sigma^2$。
3. 為什麼 $MSE$ 的分母是 $n-2$？$\hat\sigma^2$ 和 $s^2$ 哪一個不偏？

> [!hint]- 提示
> $s^2 = SSE/(n-2)$；$\hat\sigma^2 = SSE/n = \frac{n-2}{n} s^2$。

> [!solution]- 詳解
> **1.** $SSE = 0.64 + 0.36 + 1.00 + 0.36 + 0.04 = 2.4$；$MSE = 2.4 / (5-2) = 0.8$；$s = \sqrt{0.8} \approx 0.894$。
>
> **2.** $s^2 = 300 / 10 = 30$，$s = \sqrt{30} \approx 5.48$；$\hat\sigma^2 = 300 / 12 = 25$。檢查：$\frac{n-2}{n} s^2 = \frac{10}{12} \times 30 = 25$ ✔。
>
> **3.** 估計了 $\beta_0$、$\beta_1$ 兩個參數，少了 2 個自由度（[[sources/lecture-02]] p.15）。$s^2 = MSE$ 是不偏的；$\hat\sigma^2$ 有偏，但 $n$ 稍大時兩者差異很小（[[sources/lecture-02]] p.19）。

## 考到的觀念
- [[error-variance-mse]]
- [[mle-normal-slr]]
