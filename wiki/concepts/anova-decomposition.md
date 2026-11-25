---
type: concept
topic: linear
aliases: [ANOVA decomposition, Partitioning sums of squares, SSTO, SSR, SSE, 平方和分解, ANOVA table, 變異數分析表]
sources: ["[[sources/lecture-03]]"]
related: ["[[f-test-anova]]", "[[r-squared-and-correlation]]", "[[expected-mean-squares]]", "[[error-variance-mse]]"]
status: draft
updated: 2026-11-24
---

# 平方和分解與 ANOVA 表 (Partitioning Sums of Squares)

> 把 $Y$ 的總變異拆成「迴歸解釋的部分」和「解釋不了的部分」。

## 三個平方和
（[[sources/lecture-03]] p.22–23）
- **總平方和**：沒有 $X$（$\beta_1 = 0$，配適值都是 $\bar Y$）時的變異
  $$SSTO = \sum (Y_i - \bar Y)^2$$
  $SSTO = 0$ 表示所有觀測值都一樣。
- **誤差（殘差）平方和**：觀測值繞著配適線的變異
  $$SSE = \sum (Y_i - \hat Y_i)^2$$
- **迴歸平方和**：配適值繞著平均的變異，也就是和迴歸線有關的變異
  $$SSR = \sum (\hat Y_i - \bar Y)^2$$

## 分解
$$\underbrace{\sum (Y_i - \bar Y)^2}_{SSTO} = \underbrace{\sum (\hat Y_i - \bar Y)^2}_{SSR} + \underbrace{\sum (Y_i - \hat Y_i)^2}_{SSE}$$

**推導**（[[sources/lecture-03]] p.23）：$Y_i - \bar Y = (\hat Y_i - \bar Y) + (Y_i - \hat Y_i)$，兩邊平方後加總；交叉項 $2\sum (\hat Y_i - \bar Y)(Y_i - \hat Y_i) = 0$。

解讀（[[sources/lecture-03]] p.24）：$SSR$ 佔 $SSTO$ 越大，$X$ 和 $Y$ 的迴歸關係越強；$SSE$ 是模型解釋不了的變異。

## ANOVA 表
（[[sources/lecture-03]] p.24）

| 來源 | SS | df | MS | F |
|---|---|---|---|---|
| 迴歸 | $SSR$ | 1 | $MSR = SSR/1$ | $F^* = MSR/MSE$ |
| 殘差 | $SSE$ | $n-2$ | $MSE = SSE/(n-2)$ | |
| 總和 | $SSTO$ | $n-1$ | | |

自由度：
1. $SSTO$：$n-1$，因為受 $\sum (Y_i - \bar Y) = 0$ 這個限制少了 1 個。
2. $SSR$：1，因為 $SSR = b_1 S_{XY} = b_1^2 S_{XX}$，只由一個參數決定。
3. $SSE$：$n-2$，估計了 $\beta_0$、$\beta_1$。

## 例子
- [[toluca-company]]：$SSR = 252{,}378$、$SSE = 54{,}825$、$SSTO = 307{,}203$。

## 注意
- 這個分解需要模型**有截距**；過原點迴歸的交叉項一般不為 0，要改用未修正平方和，見 [[regression-through-origin]]。

## 教學提示
- 可以畫的圖：單一點上三段垂直距離 $Y_i - \bar Y$、$\hat Y_i - \bar Y$、$Y_i - \hat Y_i$。
- 學生常卡關：SSR 是「解釋的」，SSE 是「沒解釋的」，名稱容易混；用 R 輸出的「x」與「Residuals」兩列對照。
- 相關練習：[[slr-inference-01]]

## 出處
- [[sources/lecture-03]] p.22–24
