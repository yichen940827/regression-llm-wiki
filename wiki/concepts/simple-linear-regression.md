---
type: concept
topic: linear
aliases: [Simple linear regression, SLR, 簡單線性迴歸, 一階模型, first-order model]
sources: ["[[sources/lecture-02]]"]
related: ["[[regression-function]]", "[[slr-error-assumptions]]", "[[least-squares]]", "[[regression-model]]"]
status: draft
updated: 2026-11-24
---

# 簡單線性迴歸 (Simple Linear Regression, SLR)

> 只有一個解釋變數的線性迴歸：$Y$ 的平均隨 $X$ 沿一條直線變化，實際觀測值在直線上下散布。

## 定義
觀測值 $X_i$ 與 $Y_i$ 的關係為（[[sources/lecture-02]] p.2）：

$$Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i, \quad i = 1, \dots, n$$

- $Y_i$：第 $i$ 個單位的反應變數觀測值。
- $X_i$：第 $i$ 個單位的解釋變數，視為**固定、已知**的數（非隨機）。
- $\beta_0, \beta_1$：參數（迴歸係數），**未知但固定**。
- $\varepsilon_i$：誤差項，值未知的隨機變數，假設見 [[slr-error-assumptions]]。

## 何時適用
線性迴歸最適合**連續型**的 $Y$（[[sources/lecture-02]] p.1）：
- $Y$ 只能是整數（例如事故件數）：可能值夠多時還可以用。
- $Y$ 只能是非負：觀測值離 0 夠遠、不會被 0 截斷時還可以用。
- $Y$ 只有兩類或少數幾類（例如存活／死亡）：不適合，要改用其他模型（見 [[regression-model]]）。

## Y 的分配
因為 $\beta_0 + \beta_1 X_i$ 是常數、$\varepsilon_i$ 是隨機變數，所以 $Y_i$ 也是隨機變數（[[sources/lecture-02]] p.2）：

$$E(Y_i \mid X_i) = \beta_0 + \beta_1 X_i + E(\varepsilon_i) = \beta_0 + \beta_1 X_i$$
$$Var(Y_i \mid X_i) = Var(\varepsilon_i) = \sigma^2, \qquad Cov(Y_i, Y_j) = Cov(\varepsilon_i, \varepsilon_j) = 0$$

- $E(Y_i \mid X_i) = \beta_0 + \beta_1 X_i$ 就是 SLR 的[[regression-function|迴歸函數]]，也稱為母體迴歸線。
- 母體可以看成很多個子母體，每個 $X$ 值一個，各有自己的 $Y$ 分配（[[sources/lecture-02]] p.2–3）。
- 誤差 $\varepsilon_i = Y_i - E(Y_i \mid X_i)$，代表 $Y$ 中沒被線性關係解釋的部分。

## 為什麼叫「線性」
模型叫線性，是因為平均函數 $\beta_0 + \beta_1 X$ **對參數 $\beta_0, \beta_1$ 是線性的**，而不是因為它對 $X$ 是線性（[[sources/lecture-02]] p.4）：
- $Y = \beta_0 + \beta_1 e^X + \varepsilon$：線性模型。
- $Y = \beta_0 + X^{\beta_1} + \varepsilon$：非線性模型。
- 多項式迴歸 $Y_i = \beta_0 + \beta_1 X_i + \beta_2 X_i^2 + \beta_3 X_i^3 + \varepsilon_i$ 也是線性模型，之後用多元迴歸的方法處理。
- 對參數**和**解釋變數都線性的模型，稱為**一階模型** (first-order model)。

見 [[linear-means-straight-line]]。

## 參數的意義
（[[sources/lecture-02]] p.4）
- **$\beta_1$（斜率）**：$X$ 增加 1 單位時，$Y$ 的**平均**增加（或減少）多少：
  $$E(Y \mid X = x+1) - E(Y \mid X = x) = [\beta_0 + \beta_1(x+1)] - [\beta_0 + \beta_1 x] = \beta_1$$
- **$\beta_0$（截距）**：$X = 0$ 時 $Y$ 的平均。如果 $X = 0$ 不合理，或遠在觀測範圍之外（[[scope-and-extrapolation|模型的適用範圍]]不包含 $X=0$），$\beta_0$ 通常沒有實際意義。見 [[intercept-always-meaningful]]。

## 例子
- [[electrical-distributor]]：$E(Y) = 9.5 + 2.1X$ 的參數解讀。
- [[toluca-company]]、[[height-weight]]：用最小平方法估計參數。

## 常見誤解
- [[linear-means-straight-line]]
- [[intercept-always-meaningful]]

## 教學提示
- 學生常卡關：分不清 $\beta_0, \beta_1$（母體參數，未知）、$b_0, b_1$（從樣本算出的估計值）與 $\varepsilon_i$、$e_i$（誤差 vs. 殘差）。建議一開始就畫一張「母體 vs. 樣本」對照表。
- 斜率要說成「$Y$ 的**平均**增加 $\beta_1$」，不是「$Y$ 增加 $\beta_1$」。
- 建議順序：模型式子 → 誤差假設 → $Y$ 的分配 → 參數意義 → 為什麼叫線性。
- 可以畫的圖：ALSM Figure 1.6（每個 $X$ 上一條常態曲線，迴歸線穿過平均）。
- 相關練習：[[linear-model-01]]

## 出處
- [[sources/lecture-02]] p.1–5
