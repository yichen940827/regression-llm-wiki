---
type: concept
topic: [linear, model-building]
aliases: [Interpreting transformed models, 轉換後模型的解讀, back-transformation, 反轉換, log interpretation, 對數轉換的解讀, elasticity, 彈性]
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[transformed-coefficient-original-scale]]", "[[prediction-interval]]", "[[simple-linear-regression]]"]
status: draft
updated: 2026-11-25
---

# 轉換後模型的解讀 (Interpreting Models with Transformed Variables)

> 轉換後，係數說的是「新尺度」上的故事；要講給別人聽，常常得翻譯回原尺度。log 轉換特別好翻譯：加法變乘法，係數變成百分比變化。

## 原則：在轉換後的尺度上解讀
（[[sources/lecture-05]] p.14）
若模型是 $Y_i' = \beta_0 + \beta_1 X_i' + \varepsilon_i$，則 $\beta_1$ 是 $X_i'$ 增加一單位時，$Y_i'$ 的期望變化量，**不是** $Y$ 隨 $X$ 的變化量（見 [[transformed-coefficient-original-scale]]）。

有時在轉換後的尺度上解讀並不比原尺度困難；有時則最好把結論轉回原尺度。

## 反轉換回原尺度
（[[sources/lecture-05]] p.14）
- **配適值**：若模型為 $1/Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$，$X = X_h$ 時 $Y = 1/(1/Y)$ 的配適值為
  $$\hat Y_h = \frac{1}{b_0 + b_1 X_h}.$$
- **預測區間**：若 $X = X_h$ 時 $\sqrt Y$ 的預測區間是 $(1.2,\ 4.3)$，則 $Y = (\sqrt Y)^2$ 的預測區間是 $(1.2^2,\ 4.3^2) = (1.44,\ 18.49)$。

區間端點可以直接反轉換，是因為轉換是**單調**的：$\sqrt Y$ 落在區間內的機率等於 $Y$ 落在反轉換區間內的機率（補充，非講義內容）。反轉換後的區間通常**不對稱**。

> 補充，非講義內容：反轉換的配適值（例如 $10^{\hat Y'}$）估計的比較接近原尺度上的**中位數**，而不是平均數 $E(Y)$，因為 $E(g(Y)) \ne g(E(Y))$。

## log 轉換：相對變化
模型中有 log 轉換的變數，常常可以用**相對變化**（百分比）來解讀（[[sources/lecture-05]] p.14）。

**(1) 一般性質。** 設 $W' = \log W$，則
$$W' + a = \log W + a = \log W + \log(e^a) = \log(e^a W).$$
所以 $W'$ 增加 $a$ 單位，相當於 $W$ **乘以** $e^a$：
- $a = 1$：$W$ 乘以 $e^1 \approx 2.7$。
- $a = \log 1.5 \approx 0.41$：$W$ 乘以 $e^{\log 1.5} = 1.5$，也就是 $W$ 增加 50%。

**(2) 反應變數取 log。** 若 $\log Y_i = \beta_0 + \beta_1 X_i' + \varepsilon_i$，則
- $X' = X_i'$ 時 $E(Y_i) = c\,e^{\beta_1 X_i'}$；
- $X' = X_i' + a$ 時 $E(Y_i) = c\,e^{\beta_1 X_i'}\,e^{\beta_1 a}$（$c$ 是某個常數）。

所以 $X_i'$ 增加 $a$ 單位，$E(Y_i)$ 乘以 $e^{\beta_1 a}$。

> 補充，非講義內容：上面的 $e$ 對應**自然對數**。若用的是 $\log_{10}$（例如 [[plasma-levels]]），倍數要改成 $10^{\beta_1 a}$。底數不影響轉換是否合適，只影響係數的數值與解讀方式（[[sources/lecture-05]] p.11）。

**(3) 兩邊都取 log：汽車例。**（[[sources/lecture-05]] p.14）
模型 $\log(\text{MPG}) = \beta_0 + \beta_1 \log(\text{weight}) + \varepsilon$，估計 $b_0 = 4.21$、$b_1 = -1.06$。
- 重量增加 50%，等於 $\log(\text{weight})$ 增加 $\log 1.5 \approx 0.41$；
- 期望 MPG 乘以 $\exp(-1.06 \times 0.41) = 0.65$，也就是**下降約 35%**。

等價的寫法：重量乘以 1.5，MPG 乘以 $1.5^{-1.06} \approx 0.65$（補充驗算）。

## 常用的對照表
（補充，非講義內容；以自然對數表示）

| 模型 | $\beta_1$ 的解讀 |
|---|---|
| $Y = \beta_0 + \beta_1 X$ | $X$ 加 1，$Y$ 加 $\beta_1$ |
| $\log Y = \beta_0 + \beta_1 X$ | $X$ 加 1，$Y$ 乘以 $e^{\beta_1}$（$\beta_1$ 小時約變化 $100\beta_1\%$） |
| $Y = \beta_0 + \beta_1 \log X$ | $X$ 乘以 $e^a$，$Y$ 加 $\beta_1 a$；$X$ 增加 1%，$Y$ 約加 $\beta_1/100$ |
| $\log Y = \beta_0 + \beta_1 \log X$ | $X$ 乘以 $k$，$Y$ 乘以 $k^{\beta_1}$；$\beta_1$ 稱為**彈性** (elasticity) |

## 常見誤解
- [[transformed-coefficient-original-scale]]：把轉換後的 $b_1$ 當成原單位的變化量。

## 教學提示
- 學生常卡關：$\log$ 的「加 $a$」等於原尺度的「乘 $e^a$」。先用數字示範：$\log 100 + \log 2 = \log 200$。
- 建議講解順序：一般原則 → 反轉換配適值與區間 → log 性質 → 汽車例 → 對照表。
- 商學院學生熟悉「彈性」，可以用 log–log 模型連結經濟學的價格彈性。
- 可以畫的圖：原尺度上的指數曲線與 log 尺度上的直線並排（示意圖）。
- 相關練習：[[log-interpretation-01]]、[[box-cox-01]]

## 出處
- [[sources/lecture-05]] p.11, 14
- 單調轉換的區間、中位數、底數與對照表：補充，非講義內容
