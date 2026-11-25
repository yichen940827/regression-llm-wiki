---
type: misconception
topic: [linear, model-building]
aliases: [R-squared cautions, R² 越高模型越好, R² 的解讀]
sources: ["[[sources/lecture-03]]"]
related: ["[[r-squared-and-correlation]]", "[[regression-through-origin]]", "[[prediction-interval]]"]
status: draft
updated: 2026-11-24
---

# 誤解：R² 越高，模型就越好、預測就越準

## 錯誤的想法
「R² 很高，所以模型配適得好、可以準確預測；R² 很低，所以 $X$ 和 $Y$ 沒關係。」

## 正確的觀念
（[[sources/lecture-03]] p.31–32）
1. **R² 小不代表沒關係**：R² 衡量的是**線性**關聯。ALSM Figure 2.9b 的 R² = 0.02，但 $X$、$Y$ 有很強的曲線關係。
2. **R² 大不代表配適好**：ALSM Figure 2.9a 的 R² = 0.69，但關係是曲線，直線並不合適。
3. **R² 大不代表預測有用**：Toluca 的 R² = 0.82，但下一批 100 件的 90% 預測區間仍寬達 332 到 507 小時，不足以排班。R² 只衡量相對 $SSTO$ 減少的比例，不提供估計或預測的**絕對**精確度。
4. **加變數 R² 不會下降**；R² 大也不代表斜率陡。
5. **不同 SSTO 定義的 R² 不能比**：過原點迴歸的 R² 用未修正平方和，不能和有截距模型比較（見 [[cars-stopping-distance]]）。

## 教學提示
- 先畫一個完美拋物線（R² 接近 0）讓學生說「沒關係」，再揭露其實是很強的曲線關係。
- 搭配 [[toluca-company]] 的預測區間，說明「相對」與「絕對」精確度的差別。
- 相關練習：[[r-squared-01]]

## 出處
- [[sources/lecture-03]] p.31–32, 35
