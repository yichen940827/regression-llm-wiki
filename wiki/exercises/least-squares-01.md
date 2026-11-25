---
type: exercise
topic: linear
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-02]]"]
related: ["[[least-squares]]", "[[fitted-values-and-residuals]]", "[[least-squares-estimators]]"]
status: draft
updated: 2026-11-24
---

# 練習：手算最小平方估計

## 題目
（補充題）5 筆資料如下：

| $i$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $X_i$ | 1 | 2 | 3 | 4 | 5 |
| $Y_i$ | 2 | 4 | 5 | 4 | 5 |

(a) 求最小平方估計 $b_0$、$b_1$。
(b) 求每筆的配適值 $\hat Y_i$ 與殘差 $e_i$。
(c) 驗證 $\sum e_i = 0$ 與 $\sum X_i e_i = 0$。
(d) 解讀斜率；截距在這裡有意義嗎？

> [!hint]- 提示
> 先算 $\bar X$、$\bar Y$，再算 $S_{XX} = \sum (X_i - \bar X)^2$ 與 $S_{XY} = \sum (X_i - \bar X)(Y_i - \bar Y)$。

> [!solution]- 詳解
> **(a)** $\bar X = 3$，$\bar Y = 4$。
>
> | $i$ | $X_i - \bar X$ | $Y_i - \bar Y$ | 乘積 | $(X_i - \bar X)^2$ |
> |---|---|---|---|---|
> | 1 | −2 | −2 | 4 | 4 |
> | 2 | −1 | 0 | 0 | 1 |
> | 3 | 0 | 1 | 0 | 0 |
> | 4 | 1 | 0 | 0 | 1 |
> | 5 | 2 | 1 | 2 | 4 |
> | 和 | | | $S_{XY} = 6$ | $S_{XX} = 10$ |
>
> $b_1 = 6/10 = 0.6$，$b_0 = 4 - 0.6 \times 3 = 2.2$，所以 $\hat Y = 2.2 + 0.6X$。
>
> **(b)** $\hat Y_i$ = 2.8, 3.4, 4.0, 4.6, 5.2；$e_i$ = −0.8, 0.6, 1.0, −0.6, −0.2。
>
> **(c)** $\sum e_i = -0.8 + 0.6 + 1.0 - 0.6 - 0.2 = 0$ ✔；$\sum X_i e_i = -0.8 + 1.2 + 3.0 - 2.4 - 1.0 = 0$ ✔。這正是兩條正規方程式（[[least-squares-estimators]]）。
>
> **(d)** $X$ 每增加 1，$Y$ 的平均估計增加 0.6。截距 2.2 是 $X = 0$ 時的平均，但資料範圍是 1 到 5，$X = 0$ 在範圍外，解讀要小心（[[intercept-always-meaningful]]）。

## 考到的觀念
- [[least-squares]]
- [[fitted-values-and-residuals]]
- [[intercept-always-meaningful]]
