---
type: concept
topic: linear
aliases: [Coefficient of determination, R-squared, R2, 判定係數, Correlation coefficient, 相關係數, r]
sources: ["[[sources/lecture-03]]"]
related: ["[[anova-decomposition]]", "[[high-r-squared-good-model]]", "[[regression-through-origin]]"]
status: draft
updated: 2026-11-24
---

# 判定係數 R² 與相關係數 r (Coefficient of Determination and Correlation)

> R² 是「$Y$ 的變異中，有多少比例被 $X$ 解釋」；r 是 $X$ 和 $Y$ 線性關聯的方向與強度。

## 相關係數
（[[sources/lecture-03]] p.29）

$$r = \frac{\sum (Y_i - \bar Y)(X_i - \bar X)}{\sqrt{\sum (Y_i - \bar Y)^2 \sum (X_i - \bar X)^2}} = \frac{S_{XY}}{\sqrt{S_{YY} S_{XX}}}$$

- 衡量兩個變數的線性關聯程度，$-1 \le r \le 1$。
- 0 表示沒有線性關聯；±1 表示完全的負／正線性關聯。

## 判定係數
（[[sources/lecture-03]] p.29）

$$R^2 = \frac{SSR}{SSTO}$$

- $0 \le R^2 \le 1$。
- $R^2 = 0$：迴歸模型完全沒有解釋 $Y$ 的變異。
- $R^2 = 1$：所有觀測值都剛好落在配適線上。

## R² 和 r 的關係
（[[sources/lecture-03]] p.32）
1. **簡單**線性迴歸中 $r^2 = R^2$；多元迴歸不成立。
2. 簡單與多元迴歸都成立：$R^2 = r^2_{Y\hat Y}$，即觀測值與配適值的相關係數平方。
3. 多元迴歸時 $r$ 比較沒用，因為 $r$ 只對一個 $X$ 定義。
4. 斜率與 $r$：
   $$b_1 = \left[ \frac{\sum (Y_i - \bar Y)^2}{\sum (X_i - \bar X)^2} \right]^{1/2} \times r$$
   所以 $r = 0 \Leftrightarrow b_1 = 0$，而且 $r$ 的正負號和 $b_1$ 相同。

## 解讀的注意事項
見 [[high-r-squared-good-model]]（[[sources/lecture-03]] p.31–32）：R² 小不代表沒關係、R² 大不代表配適好或預測準、加變數 R² 不會下降、R² 大不代表斜率陡。過原點迴歸不能用 R² 和有截距模型比較（[[regression-through-origin]]）。

## 例子
- [[toluca-company]]：$R^2 = 252{,}378 / 307{,}203 = 0.8215$，約 82% 的工時變異由批量解釋；$r = 0.906$，$r^2 = 0.8215 = R^2$。

## 教學提示
- 用 Toluca 的數字同時算 $r$ 與 $R^2$，讓學生自己驗證 $r^2 = R^2$。
- 強調 R² 是「相對」的減少比例，不告訴你預測的絕對精確度。
- 相關練習：[[r-squared-01]]、[[slr-inference-01]]

## 出處
- [[sources/lecture-03]] p.29–32
