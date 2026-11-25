---
type: misconception
topic: linear
aliases: [Intercept interpretation, 截距一定有意義, meaningless intercept]
sources: ["[[sources/lecture-02]]"]
related: ["[[simple-linear-regression]]", "[[scope-and-extrapolation]]", "[[height-weight]]", "[[electrical-distributor]]"]
status: draft
updated: 2026-11-24
---

# 誤解：截距一定能解讀成「X = 0 時的 Y」

## 錯誤的想法
「$b_0$ 就是 $X = 0$ 時 $Y$ 的平均，一定要解讀出來。」

## 正確的觀念
- $\beta_0$ 是 $X = 0$ 時 $E(Y)$ 的值，但如果 $X = 0$ 不合理，或遠在觀測資料的範圍之外（模型的適用範圍不包含 $X = 0$），$\beta_0$ **通常沒有實際意義**（[[sources/lecture-02]] p.4）。
- 解讀截距其實是一種**外插**，見 [[scope-and-extrapolation]]。

## 例子
- [[height-weight]]：截距 −11.66，意思是「身高 0 英尺時平均體重 −11.66 磅」，完全不合理（[[sources/lecture-02]] p.10）。
- [[electrical-distributor]]：模型只適用於每週 20 到 80 件標案，截距 9.5 沒有獨立意義（[[sources/lecture-02]] p.5）。

## 補充：讓截距有意義的方法
把 $X$ 中心化：[[centered-slr]] 的截距是 $\bar Y$，也就是 $X$ 在平均值時 $Y$ 的平均。

## 教學提示
- 先秀身高體重的 −11.66 磅讓學生笑，再問「那截距什麼時候有意義？」
- 相關概念：[[extrapolation-beyond-data]]

## 出處
- [[sources/lecture-02]] p.4–5, 10
