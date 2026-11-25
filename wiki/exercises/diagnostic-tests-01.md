---
type: exercise
topic: linear
origin: supplementary
difficulty: 1
sources: ["[[sources/lecture-04]]"]
related: ["[[model-diagnostics]]", "[[normality-tests]]", "[[brown-forsythe-test]]", "[[breusch-pagan-test]]", "[[lack-of-fit-test]]"]
status: draft
updated: 2026-11-24
---

# 練習：把檢定對應到假設

## 題目
（補充題）

(a) 把左邊的檢定對應到右邊要檢查的假設：

| 檢定 | 假設 |
|---|---|
| 1. 常態相關檢定 | A. 迴歸函數為線性 |
| 2. Brown–Forsythe 檢定 | B. 誤差變異數相同 |
| 3. Breusch–Pagan 檢定 | C. 誤差為常態 |
| 4. 缺適檢定 | D. 誤差彼此獨立 |
| 5. Durbin–Watson 檢定 | |

(b) 寫出每個檢定需要的前提或資料條件（至少說出 3 個檢定的）。
(c) 三個檢定的 p 值都大於 0.05，可以直接下結論「模型的假設都成立」嗎？

> [!hint]- 提示
> 想想哪個檢定需要分組、哪個需要常態、哪個需要重複觀測、哪個需要時間順序。

> [!solution]- 詳解
> **(a)** 1–C、2–B、3–B、4–A、5–D。
>
> **(b)**
> - 常態相關檢定：比較排序殘差與常態期望值的相關，用表 B.6 的臨界值（[[normality-tests]]）。
> - Brown–Forsythe：依 $X$ 把殘差分成兩組；用中位數，不需要常態，穩健（[[brown-forsythe-test]]）。
> - Breusch–Pagan：**假設誤差常態**，且變異數以 $\log \sigma_i^2 = \gamma_0 + \gamma_1 X_i$ 的形式隨 $X$ 變化（[[breusch-pagan-test]]）。
> - 缺適檢定：**至少一個 $X$ 水準有重複觀測**，並假設獨立、常態、變異數相同（[[lack-of-fit-test]]）。
> - Durbin–Watson：需要知道資料的**時間順序**（之後的章節）。
>
> **(c)** 不行。檢定只是圖形的輔助，很受樣本數影響；樣本小時檢定力低。仍要看殘差圖（[[tests-replace-plots]]）。

## 考到的觀念
- [[model-diagnostics]]
- [[tests-replace-plots]]
