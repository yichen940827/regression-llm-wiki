---
type: concept
topic: linear
aliases: [Centered SLR, Alternative version of SLR, 中心化簡單線性迴歸]
sources: ["[[sources/lecture-02]]"]
related: ["[[simple-linear-regression]]", "[[least-squares-estimators]]"]
status: draft
updated: 2026-11-24
---

# 中心化的簡單線性迴歸 (Centered SLR)

> 把 $X$ 減掉平均再做迴歸：斜率不變，截距變成 $\bar Y$，而且兩個估計量不相關。

## 定義
把解釋變數改成 $X_i - \bar X$（中心化），得到 SLR 的另一種寫法（[[sources/lecture-02]] p.15–16）：

$$Y_i = \beta_0^* + \beta_1 (X_i - \bar X) + \varepsilon_i, \qquad \beta_0^* = \beta_0 + \beta_1 \bar X$$

## 估計量
- $b_0^* = \bar Y$
- $b_1 = S_{XY} / S_{XX}$（斜率不受轉換影響）

## 好處
（[[sources/lecture-02]] p.16）
1. 兩個最小平方估計量不相關：$Cov(b_0^*, b_1) = 0$。
2. 配適模型變成 $\hat Y = \bar Y + b_1 (X - \bar X)$。
3. 讓模型的應用更容易。

## 教學提示
- 可以和 [[intercept-always-meaningful]] 一起講：中心化後的截距 $\bar Y$ 一定有意義（是 $X$ 在平均時 $Y$ 的平均）。
- 可以畫的圖：同一組資料，原座標與把 $y$ 軸移到 $\bar X$ 的座標並排，看出斜率相同、截距改變。

## 出處
- [[sources/lecture-02]] p.15–16
