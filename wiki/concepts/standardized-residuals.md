---
type: concept
topic: linear
aliases: [Standardized residuals, Internally studentized residuals, 標準化殘差, 內部學生化殘差, Semistudentized residuals, 半學生化殘差]
sources: ["[[sources/lecture-04]]"]
related: ["[[fitted-values-and-residuals]]", "[[outliers]]", "[[model-diagnostics]]"]
status: draft
updated: 2026-11-24
---

# 標準化殘差 (Standardized Residuals)

> 把殘差除以它的標準差，讓所有殘差在同一個尺度上比較；超過 ±3 就值得懷疑。

## 標準化（內部學生化）殘差
殘差平均為 0、誤差變異數用 $MSE$ 估計，所以自然的標準化方式是（[[sources/lecture-04]] p.2）：

$$r_i = \frac{e_i - \bar e}{\sqrt{MSE(1 - h_{ii})}} = \frac{e_i}{\sqrt{MSE(1 - h_{ii})}}$$

- $h_{ii}$ 是**槓桿值** (leverage)：第 $i$ 個點在 $X$ 空間中離其他資料多遠，之後的講次才介紹（見 [[leverage]]）。
- 一般**較推薦**這種標準化殘差，也是 R 的 `rstandard()`、`plot.lm()` 的預設（[[sources/lecture-04]] p.2）。
- 變異數為 1，所以可以用來找離群值（[[sources/lecture-04]] p.11）。

## 半學生化殘差
課本另外使用（[[sources/lecture-04]] p.2）：

$$e_i^* = \frac{e_i - \bar e}{\sqrt{MSE}} = \frac{e_i}{\sqrt{MSE}}$$

平均 0、變異數約 1，但**不是**較推薦的標準化方式：它忽略了每個殘差的變異數其實不同（差一個 $1 - h_{ii}$）。

## 用途
- 找離群值：$\lvert r_i \rvert > 3$ 的點標出來進一步調查（[[sources/lecture-04]] p.11；見 [[outliers]]）。
- 畫殘差圖時用 $r_i$，尺度統一、比較容易判斷（見 [[residual-plots]]）。

## 教學提示
- 學生常卡關：為什麼殘差的變異數不是 σ²？先只說「每個點不一樣，和 $h_{ii}$ 有關」，等講到槓桿值再完整解釋。
- 可以比較同一個點的 $e_i$、$e_i^*$、$r_i$，看出差別。

## 出處
- [[sources/lecture-04]] p.2, 11
