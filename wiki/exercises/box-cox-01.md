---
type: exercise
topic: [linear, model-building]
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-05]]"]
related: ["[[box-cox-transformation]]", "[[plasma-levels]]", "[[interpreting-transformed-models]]"]
status: draft
updated: 2026-11-25
---

# 練習：從 Box–Cox 結果選 λ，並反轉換預測

## 題目
（補充題）使用 [[plasma-levels]] 的 Box–Cox 結果（Table 3.9）：

| $\lambda$ | 1.0 | .5 | 0 | −.3 | −.5 | −.7 | −1.0 |
|---|---|---|---|---|---|---|---|
| SSE | 78.0 | 48.4 | 34.5 | 31.2 | 30.6 | 31.1 | 33.9 |

(a) 哪個 $\lambda$ 讓 SSE 最小？它對應什麼轉換？
(b) 為什麼最後選 $\lambda = 0$（log 轉換）也是合理的？
(c) 選用 $\hat Y' = 1.135 - 0.1023X$（$Y' = \log_{10} Y$）。求 2 歲兒童濃度的配適值（原尺度）。
(d) 若 2 歲時 $Y'$ 的預測區間是 $(0.85,\ 1.01)$，原尺度的預測區間是多少？這個區間對稱嗎？
(e) 若另一組資料的 $\hat\lambda = -1.19$，實務上會用什麼轉換？
(f) 若某組資料的 $Y$ 有負值，能直接用 Box–Cox 嗎？

> [!hint]- 提示
> 實務上不必照用精確的 $\hat\lambda$，要看 SSE 曲線在哪裡平坦、哪個值容易解讀。反轉換：$Y = 10^{Y'}$，區間端點也直接反轉換。

> [!solution]- 詳解
> **(a)** $\lambda = -0.5$（SSE = 30.6），對應 $Y' = 1/\sqrt Y$。
>
> **(b)** $\lambda$ 在 0 到 −1 之間 SSE 都很接近（30.6～34.5），曲線平坦；log 轉換比 $1/\sqrt Y$ 好解讀（相對變化），所以選 $\lambda = 0$ 不算不合理（[[sources/lecture-05]] p.11）。
>
> **(c)** $\hat Y' = 1.135 - 0.1023 \times 2 = 0.9304$，$\hat Y = 10^{0.9304} \approx 8.52$。（對照資料：2 歲的 5 個觀測平均 8.84。反轉換的配適值比較接近中位數，見 [[interpreting-transformed-models]]。）
>
> **(d)** $(10^{0.85},\ 10^{1.01}) = (7.08,\ 10.23)$。log 轉換是單調的，端點可以直接反轉換。區間**不對稱**：8.52 往下 1.44、往上 1.71。
>
> **(e)** 取最接近又好解讀的值 $\lambda = -1$，即 $Y' = 1/Y$（[[sources/lecture-05]] p.10）。
>
> **(f)** 不能直接用，Box–Cox 只適用於 $Y > 0$。可以先把所有觀測加上一個適當的常數，再做 Box–Cox（[[sources/lecture-05]] p.9）。

## 考到的觀念
- [[box-cox-transformation]]
- [[interpreting-transformed-models]]
