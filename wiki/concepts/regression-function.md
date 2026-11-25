---
type: concept
topic: linear
aliases: [Regression function, 迴歸函數, 條件期望值, conditional mean]
sources: ["[[sources/lecture-01]]", "[[sources/lecture-02]]"]
related: ["[[functional-vs-statistical-relation]]", "[[regression-model]]", "[[simple-linear-regression]]"]
status: draft
updated: 2026-11-24
---

# 迴歸函數 (Regression Function)

> 迴歸函數描述的是「在給定 $X$ 時，$Y$ 的平均值是多少」，也就是散布圖裡的那條趨勢線。

## 定義
迴歸模型中的「趨勢」，由 $\mathbf{X}$ 與 $Y$ 的某個特徵之間的函數關係來描述，例如（[[sources/lecture-01]] p.6）：

$$E(Y \mid \mathbf{X}) = f(\mathbf{X})$$

這稱為**迴歸函數**：給定 $\mathbf{X}$ 時 $Y$ 的期望值，描述 $Y$ 的平均如何隨一個或多個 $X$ 變數變化。

## 觀測值的拆解
每一筆觀測都可以拆成兩部分（[[sources/lecture-01]] p.6）：

$$\underbrace{Y_i}_{\text{這筆觀測的 } Y} = \underbrace{E(Y \mid X_i)}_{\text{在這個 } X \text{ 下的趨勢}} + \underbrace{\varepsilon_i}_{\text{這筆觀測偏離趨勢的部分}}$$

- $f(X) = E(Y\mid X)$：函數關係，散布圖上的「線」。
- $Y - E(Y\mid X) = \varepsilon$：實際觀測值與趨勢的差。

## 簡單線性迴歸的情況
講義 Figure 2（高中 GPA 對大學入學成績）把迴歸函數寫成直線（[[sources/lecture-01]] p.6）：

$$\mu_Y = E(Y) = \beta_0 + \beta_1 x, \qquad Y_i = (\beta_0 + \beta_1 x) + \varepsilon_i$$

在每個 $x$ 值下，$Y$ 有一個機率分配；迴歸線穿過這些分配的平均值。

在 [[simple-linear-regression|簡單線性迴歸]] 的誤差假設下，可以直接推出 $E(Y_i \mid X_i) = \beta_0 + \beta_1 X_i$，稱為母體迴歸線；用樣本估計出來的是 $\hat Y = b_0 + b_1 X$（見 [[fitted-values-and-residuals]]）（[[sources/lecture-02]] p.2, 12）。

## 建模時要決定什麼
（[[sources/lecture-01]] p.6）
- $f(\mathbf{X})$ 的可能形式
- 要放進哪些解釋變數
- 是否要轉換某些 $X$（例如放入 $\sqrt{X_1}$）
- 最後的模型通常是反覆修正後的結果

## 教學提示
- 學生常卡關：分不清 $Y_i$（個別觀測值）和 $E(Y\mid X)$（平均）。可以指著散布圖問「這個點是 $Y_i$ 還是 $E(Y\mid X)$？」
- 建議順序：散布圖 → 在每個 $X$ 畫出 $Y$ 的分配 → 把各分配的平均連起來就是迴歸函數。
- 可以畫的圖：講義 Figure 2 的 3D 圖（每個 $X$ 上方有一個常態曲線，迴歸線穿過各曲線的中心）。

## 出處
- [[sources/lecture-01]] p.6
- [[sources/lecture-02]] p.2, 12
