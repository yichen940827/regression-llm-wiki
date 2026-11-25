---
type: assumption
topic: linear
aliases: [Normal error regression model, 常態誤差, 常態誤差迴歸模型, iid normal errors]
sources: ["[[sources/lecture-02]]", "[[sources/lecture-03]]", "[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[slr-error-assumptions]]", "[[maximum-likelihood]]", "[[mle-normal-slr]]", "[[remedial-measures]]", "[[variable-transformations]]"]
status: draft
updated: 2026-11-25
---

# 常態誤差假設 (Normal Errors)

> 在三條誤差假設之外，再假設誤差服從常態分配；這樣才能做信賴區間和假設檢定。

## 假設內容
對模型 $Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$，假設（[[sources/lecture-02]] p.16）：

$$\varepsilon_i \sim N(0, \sigma^2)$$

## 為什麼需要
- 只有平均、變異數、共變異數的假設（[[slr-error-assumptions]]），足以求出最小平方估計量的平均與變異數。
- 但要對 $\beta_0$、$\beta_1$ 做**統計推論**（信賴區間、假設檢定），必須指定 $\varepsilon_i$ 的完整分配（[[sources/lecture-02]] p.16）。
- 選常態，是因為它讓數學盡可能簡單（[[sources/lecture-02]] p.16）。

## 推出的結果
（[[sources/lecture-02]] p.16）
- $Y_i$ 也服從常態：$Y_i \sim N(\beta_0 + \beta_1 X_i, \sigma^2)$。
- $Cov(\varepsilon_i, \varepsilon_j) = 0$ 加上常態，推得 $\varepsilon_i$ 與 $\varepsilon_j$ **獨立**。「不相關就獨立」只對常態隨機變數成立。
- 所以 $\varepsilon_i$ 是獨立同分配 (iid) 的 $N(0, \sigma^2)$。
- 常態下，最小平方估計量也是最大概似估計量，見 [[mle-normal-slr]]。

## 偏離常態的影響
（[[sources/lecture-03]] p.11）
1. $Y$ 的分配不完全是常態、但沒有嚴重偏離時，$b_0$、$b_1$ 的抽樣分配近似常態，用 t 分配仍可大致得到指定的信賴係數或顯著水準。
2. 即使 $Y$ 離常態很遠，$b_0$、$b_1$ 通常仍有**漸近常態性**：樣本數增加時，在很一般的條件下分配會趨近常態。

## 如何診斷
（[[sources/lecture-04]] p.5–10, 15–17）
- 看殘差 $e_i$（或標準化殘差 $r_i$）的樣本分配：盒形圖、直方圖、莖葉圖。
- 更有用的是 [[normal-probability-plot|常態機率圖]]：大致成一直線就支持常態。
- 常見的偏離：偏斜（不對稱）、尾巴比常態輕或重。
- 正式檢定：[[normality-tests]]（常態相關檢定、Shapiro–Wilk 等）。
- 建議最後才檢查常態：非線性與變異數不相同都會影響常態機率圖。

## 對策
（[[sources/lecture-05]] p.2, 6；總覽見 [[remedial-measures]]）
- **轉換 Y**：非常態常以「$E(Y)$ 越大、誤差越偏斜」的形式出現，和變異數不相同一起發生；取 $\sqrt Y$、$\log Y$、$1/Y$ 等常能同時改善（見 [[variable-transformations]]、[[box-cox-transformation]]；例題 [[plasma-levels]]）。
- **換模型**：其他類型的模型（ALSM Ch.14）。
- 轉換後要重新做常態機率圖與 [[normality-tests|常態相關檢定]]。

## 推論的結果
常態誤差下的抽樣分配與推論方法：見 [[sampling-distribution-of-estimators]]、[[inference-regression-coefficients]]（[[sources/lecture-03]] p.2）。

## 常見誤解
- 「不相關就代表獨立」：一般不成立，只有常態等特殊情況才成立。

## 教學提示
- 建議並列兩層假設：「三條基本假設」能做估計；「＋常態」才能做推論。
- 可以畫的圖：ALSM Figure 1.6，每個 $X$ 上方的常態曲線。

## 出處
- [[sources/lecture-02]] p.16
- [[sources/lecture-03]] p.2, 11
- [[sources/lecture-04]] p.5–10, 15–17
- [[sources/lecture-05]] p.2, 6
