---
type: concept
topic: linear
aliases: [Regression model, 迴歸模型, simple linear regression, SLR, multiple regression, 多元迴歸]
sources: ["[[sources/lecture-01]]", "[[sources/lecture-02]]"]
related: ["[[regression-function]]", "[[functional-vs-statistical-relation]]", "[[observational-vs-experimental-data]]", "[[scope-and-extrapolation]]", "[[bias-variance-tradeoff]]"]
status: draft
updated: 2026-11-24
---

# 迴歸模型 (Regression Model)

> 迴歸模型區分「反應變數」和「解釋變數」，用來描述解釋變數如何影響反應變數，並用這個關係來推論或預測。

## 定義
迴歸模型區分（連續型的）**反應變數**與一組**解釋變數**，描述解釋變數對反應變數的影響。反應變數與解釋變數之間的統計關係，可以用來推論給定解釋變數值時的反應（[[sources/lecture-01]] p.6）。核心是 [[regression-function]]。

## 變數與資料結構
（[[sources/lecture-01]] p.3）
- **解釋變數** $X_1, \dots, X_k$：又稱自變數 (independent variable)、預測變數 (predictor)、regressor。
- **反應變數** $Y$：又稱應變數 (dependent variable)、結果變數 (outcome)。本課程只考慮一個反應變數（univariate）。
- 有 $n$ 筆資料、$k$ 個解釋變數時，資料存成 $n \times (k+1)$ 的矩陣：

$$\begin{bmatrix} Y_1 & X_{11} & X_{12} & \cdots & X_{1k} \\ Y_2 & X_{21} & X_{22} & \cdots & X_{2k} \\ \vdots & \vdots & \vdots & & \vdots \\ Y_n & X_{n1} & X_{n2} & \cdots & X_{nk} \end{bmatrix}$$

- 下標 $1, \dots, n$ 代表不同的觀測單位（人、試驗、受試者等），$n$ 是樣本數。
- $\mathbf{X}_i = (X_{i1}, \dots, X_{ik})$ 是第 $i$ 個單位所有 $X$ 變數的測量值。

## 迴歸的三種用途
（[[sources/lecture-01]] p.7）
1. **描述資料**：迴歸模型比表格甚至圖形更有資訊量，也更方便摘要資料。
2. **估計參數**：估計未知的量（參數）。
3. **預測**：預測未來的反應值。

## 線性模型
- 本課程考慮**線性模型**，這是最常用的一類統計模型；受歡迎的原因之一是估計（例如最小平方法）與相關計算比其他模型簡單（[[sources/lecture-01]] p.7）。
- 只有一個解釋變數：**簡單線性迴歸 (simple linear regression, SLR)**，詳見 [[simple-linear-regression]]。
- 超過一個解釋變數：**多元（線性）迴歸 (multiple linear regression)**。
- $Y$ 不是連續型（例如二元）時，傳統迴歸模型不適用，應使用 **Logistic 迴歸**（[[sources/lecture-01]] p.7）。

## 模型的基本設定
- 迴歸模型把 $Y$ 當作**隨機變數**，考慮它在給定 $\mathbf{X}$ 下的條件分配（[[sources/lecture-01]] p.9）。
- $\mathbf{X}$ 通常視為**固定**而非隨機，即使它們實際上是隨機抽出的（大部分觀察研究都是）。實際上我們考慮的是：給定觀測資料中這些特定 $\mathbf{X}$ 值時，$Y$ 的分配（[[sources/lecture-01]] p.9）。

## 建模的態度
- 幾乎所有應用中，迴歸方程式都只是變數間真實關係的**近似**。George E. P. Box：「All models are wrong, but some are useful.」（[[sources/lecture-01]] p.8）
- 建模步驟（[[sources/lecture-01]] p.8）：
  1. 建立一個或多個暫定的迴歸模型，有時至少部分根據既有理論。
  2. 檢查模型適切性 (model adequacy checking)，評估模型是否合適、配適品質如何。
  3. 同樣常見的是，模型主要是為了方便而選的。本課程的線性模型多半屬於這類：簡單好用，即使真實模型複雜得多，也是有用的第一步近似。
  4. 這是一個反覆的過程。
- 分析結論以資料為條件，所以資料必須能**代表**所研究的系統，否則結論很可能有誤（[[sources/lecture-01]] p.8）。
- 配適模型之前，應先做**探索性資料分析 (EDA)**，對資料長什麼樣子有初步認識（[[sources/lecture-01]] p.10）。
- 使用限制：見 [[scope-and-extrapolation]]、[[correlation-is-not-causation]]；模型複雜度的取捨見 [[bias-variance-tradeoff]]。

## 常見誤解
- [[correlation-is-not-causation]]
- [[extrapolation-beyond-data]]

## 教學提示
- 學生常卡關：「$X$ 是隨機抽的，為什麼說 $X$ 固定？」可以解釋成「我們只問：在這些已經觀察到的 $X$ 值之下，$Y$ 會怎麼變動」。
- 建議順序：變數角色 → 資料矩陣 → [[regression-function]] → 三種用途 → SLR 與多元迴歸 → 使用限制。
- 可以畫的圖：資料矩陣示意圖，標出哪一欄是 $Y$、哪幾欄是 $X$、每一列是一個觀測單位。

## 出處
- [[sources/lecture-01]] p.3, 6–10
- [[sources/lecture-02]] p.1
