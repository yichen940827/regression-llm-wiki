---
type: method
topic: linear
aliases: [Least squares, Ordinary least squares, OLS, 最小平方法, LS estimates, 最小平方估計]
sources: ["[[sources/lecture-02]]"]
related: ["[[least-squares-estimators]]", "[[fitted-values-and-residuals]]", "[[ls-unbiasedness-and-variance]]", "[[gauss-markov-theorem]]"]
status: draft
updated: 2026-11-24
---

# 最小平方法 (Method of Least Squares)

> 在所有可能的直線中，選讓「觀測值到直線的垂直距離平方和」最小的那一條。

## 想法
穿過資料點可以畫出很多條線，要怎麼選出「好的」$\beta_0$、$\beta_1$ 估計？（[[sources/lecture-02]] p.5–6）
- 用 $\beta_0 + \beta_1 X_i$ 近似 $Y_i$ 的誤差是 $Y_i - \beta_0 - \beta_1 X_i$。
- 希望整體誤差越小越好，但**不能直接相加**：正負誤差會互相抵消。
- 絕對值 $|Y_i - \beta_0 - \beta_1 X_i|$ 是一種選擇，但**平方**比較好：數學上較容易，得到的估計量也有很多好的統計性質。

## 定義
最小平方估計 $b_0$、$b_1$ 讓下面的平方和最小（[[sources/lecture-02]] p.6）：

$$Q = \sum_{i=1}^n (Y_i - \beta_0 - \beta_1 X_i)^2$$

## 公式
（推導見 [[least-squares-estimators]]，[[sources/lecture-02]] p.7）

$$b_1 = \frac{\sum_{i=1}^n (X_i - \bar X)(Y_i - \bar Y)}{\sum_{i=1}^n (X_i - \bar X)^2} = \frac{S_{XY}}{S_{XX}}, \qquad b_0 = \bar Y - b_1 \bar X$$

其中 $\bar Y = \sum Y_i / n$、$\bar X = \sum X_i / n$。

## 為什麼用它
最小平方估計量有很多好性質，大多數情況下不需要考慮其他估計方法（[[sources/lecture-02]] p.10–12）：
- 是 $Y_i$ 的線性組合、**不偏**：見 [[ls-unbiasedness-and-variance]]。
- 在所有線性不偏估計量中變異數最小（**BLUE**）：見 [[gauss-markov-theorem]]。
- 一致 (consistent)。
- 誤差常態時，也是最大概似估計：見 [[mle-normal-slr]]。

## 計算步驟
1. 算 $\bar X$、$\bar Y$。
2. 算每筆的 $X_i - \bar X$、$Y_i - \bar Y$。
3. 算 $S_{XX} = \sum (X_i - \bar X)^2$、$S_{XY} = \sum (X_i - \bar X)(Y_i - \bar Y)$。
4. $b_1 = S_{XY}/S_{XX}$，$b_0 = \bar Y - b_1 \bar X$。
5. 寫出 $\hat Y = b_0 + b_1 X$，並在資料範圍內解讀斜率與截距。

## 例子
- [[toluca-company]]：$b_1 = 70{,}690 / 19{,}800 = 3.5702$，$b_0 = 62.37$。
- [[height-weight]]：$b_1 = 56.04 / 2.00 = 28.02$，$b_0 = -11.66$。

## 常見誤解
- [[intercept-always-meaningful]]：算出來的 $b_0$ 不一定能解讀。

## 教學提示
- 學生常卡關：「為什麼不用絕對值？」回答：平方可以微分、解有公式，估計量性質也好。
- 建議順序：先畫幾條候選線 → 定義殘差 → 為什麼要平方 → 寫出 $Q$ → 公式 → 例題。
- 可以畫的圖：同一組資料上兩條線，各自的殘差平方畫成正方形，比較面積總和。
- 相關練習：[[least-squares-01]]

## 出處
- [[sources/lecture-02]] p.5–7, 10–12
