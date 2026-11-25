---
type: exercise
topic: linear
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-03]]"]
related: ["[[ci-mean-response]]", "[[prediction-interval]]", "[[prediction-vs-confidence-interval]]"]
status: draft
updated: 2026-11-24
---

# 練習：信賴區間與預測區間

## 題目
（補充題）延續 [[slr-inference-01]] 的資料（$n = 5$、$\bar X = 3$、$S_{XX} = 10$、$MSE = 0.8$、$\hat Y = 2.2 + 0.6X$，$t(0.975;\,3) = 3.182$）。

(a) $X_h = 3$ 時，求 $E(Y_h)$ 的 95% 信賴區間與 $Y_{h(new)}$ 的 95% 預測區間。
(b) $X_h = 5$ 時，重做 (a)。
(c) 比較四個區間的寬度，說明原因。

> [!hint]- 提示
> $s^2\{\hat Y_h\} = MSE\left[\frac1n + \frac{(X_h - \bar X)^2}{S_{XX}}\right]$；$s^2\{pred\} = MSE\left[1 + \frac1n + \frac{(X_h - \bar X)^2}{S_{XX}}\right]$。

> [!solution]- 詳解
> **(a)** $\hat Y_h = 4.0$。
> - $s\{\hat Y_h\} = \sqrt{0.8(0.2 + 0)} = 0.4$ → 信賴區間 $4.0 \pm 1.273$：2.73 到 5.27。
> - $s\{pred\} = \sqrt{0.8(1 + 0.2)} = 0.980$ → 預測區間 $4.0 \pm 3.118$：0.88 到 7.12。
>
> **(b)** $\hat Y_h = 5.2$，$(5-3)^2/10 = 0.4$。
> - $s\{\hat Y_h\} = \sqrt{0.8(0.2 + 0.4)} = 0.693$ → 信賴區間 $5.2 \pm 2.205$：3.00 到 7.40。
> - $s\{pred\} = \sqrt{0.8(1 + 0.6)} = 1.131$ → 預測區間 $5.2 \pm 3.600$：1.60 到 8.80。
>
> **(c)** 同一個 $X_h$，預測區間比信賴區間寬（多了新觀測本身的 σ²）；$X_h = 5$ 離 $\bar X = 3$ 較遠，兩種區間都比 $X_h = 3$ 寬。

## 考到的觀念
- [[ci-mean-response]]、[[prediction-interval]]
- [[prediction-vs-confidence-interval]]
