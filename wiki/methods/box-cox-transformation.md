---
type: method
topic: [linear, model-building]
aliases: [Box-Cox transformation, Box–Cox 轉換, Box-Cox method, power transformation, 冪次轉換]
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[maximum-likelihood]]", "[[constant-error-variance]]", "[[plasma-levels]]"]
status: draft
updated: 2026-11-25
---

# Box–Cox 轉換 (Box–Cox Transformation)

> 不用一個一個試：讓資料自己挑出最合適的冪次 $\lambda$，也就是讓轉換後的 SLR 配適得最好的那個 $Y^\lambda$。

## 定義
用試誤法找 Y 的好轉換通常很困難。Box–Cox 方法（George Box 與 D. R. Cox 提出）提供一個**系統化**選擇 Y 轉換的方式：從冪次轉換族 $Y^\lambda$ 中，由資料決定參數 $\lambda$（[[sources/lecture-05]] p.9）。

轉換族（[[sources/lecture-05]] p.9）：
$$Y'(\lambda) = \begin{cases} \dfrac{Y^\lambda - 1}{\lambda}, & \lambda \ne 0 \\[2mm] \log_e Y, & \lambda = 0 \end{cases}$$

減 1 再除以 $\lambda$ 的寫法讓 $\lambda \to 0$ 時連續地接到 $\log_e Y$（補充，非講義內容）。

## 怎麼選 λ
（[[sources/lecture-05]] p.9）
1. 對模型 $Y_i^\lambda \sim N(\beta_0 + \beta_1 X_i,\ \sigma^2)$ 用 [[maximum-likelihood|最大概似法]]。
2. 搜尋 $\lambda$，找出讓**對數概似最大**（等價地，讓 **SSE 最小**）的值。
3. 可以證明：$\lambda$ 的最大概似估計 $\hat\lambda$，就是讓 SSE 最小的那個 $\lambda$。

### 補充：比較 SSE 時要先標準化
（補充，非講義內容；ALSM 式 3.36）

直接用 $(Y^\lambda - 1)/\lambda$ 算出的 SSE，在不同 $\lambda$ 之間的**尺度不同**，不能直接比較。ALSM 用幾何平均把各個 $\lambda$ 的反應變數標準化：
$$W_i = \begin{cases} K_1\,(Y_i^\lambda - 1), & \lambda \ne 0 \\ K_2\,\log_e Y_i, & \lambda = 0 \end{cases}
\qquad K_2 = \Big(\prod_{i=1}^n Y_i\Big)^{1/n},\quad K_1 = \frac{1}{\lambda K_2^{\lambda-1}}$$

對 $W_i$ 做 SLR 得到的 SSE 才能跨 $\lambda$ 比較；「SSE 最小 ＝ 概似最大」指的就是這個版本。

驗算（[[plasma-levels]] 的 25 筆資料）：用 $W_i$ 算出 $\lambda = 1, 0.5, 0, -0.5, -1$ 時的 SSE 為 78.0、48.4、34.5、30.6、33.9，與講義 Table 3.9 相同；若用未標準化的 $(Y^\lambda-1)/\lambda$，則得到 78.0、5.68、0.48、0.05、0.006，數值隨 $\lambda$ 縮小，無法比較。

> ⚠️ 講義 p.9 只寫未標準化的公式並說「等價於最小 SSE」；wiki 依使用者確認（2026-11-25）以補充方式附上 ALSM 的標準化版本。

## 使用條件
（[[sources/lecture-05]] p.9）
- 只適用於反應變數 **$Y$ 全部為正值**，這通常不是問題。
- 若 $Y$ 有負值，可以先把所有觀測加上一個適當的常數，當作「前置轉換」(pre-transformation)（Montgomery et al. 2021）。

## 軟體輸出與實務選擇
（[[sources/lecture-05]] p.10）
軟體（R、SAS、Minitab）通常會給：
- 對數概似（或 SSE、殘差標準差）對 $\lambda$ 的圖；
- 一條決定 $\lambda$ **信賴區間**的水平線；
- 有時另附表格。

講義的 Minitab 例（Box-Cox Plot of MPG）：估計 $\hat\lambda = -0.10$，95% 信賴區間 $(-0.37,\ 0.20)$，建議取整數值 0（即 log 轉換）。

**實務上不直接用精確的 $\hat\lambda$**，而是取最接近、又**容易解讀**的值。例如 $\hat\lambda = -1.19$ 時，用 $Y^{-1} = 1/Y$，而不是 $Y^{-1.19}$（[[sources/lecture-05]] p.10）。若信賴區間包含某個簡單的值（例如 0、0.5、1），就可以選它。

## 例子
- [[plasma-levels]]：SSE 在 $\lambda \approx -0.5$ 最小（R 給 $\hat\lambda = -0.505$），但 $\lambda$ 在 0 到 −1 之間 SSE 都差不多，所以先前選的 $\log_{10} Y$（$\lambda = 0$）是合理的（[[sources/lecture-05]] p.11–12）。

## 教學提示
- 學生常卡關：以為 $\hat\lambda$ 一定要照用。強調「曲線平坦區內挑好解讀的」。
- 建議講解順序：冪次階梯（[[variable-transformations]]）→ 為什麼要自動化 → 轉換族 → MLE/SSE 曲線 → 實務取整。
- 可以畫的圖：SSE 對 $\lambda$ 的 U 形曲線，標出最小點與平坦區（用 Table 3.9 的數字）。
- 提醒：Box–Cox 只處理 Y；轉換後仍要重新診斷，也可能需要再轉換 X。
- 相關練習：[[box-cox-01]]

## 出處
- [[sources/lecture-05]] p.9–12
- 標準化公式與驗算：補充，非講義內容（ALSM Section 3.9）
