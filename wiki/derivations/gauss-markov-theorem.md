---
type: derivation
topic: linear
aliases: [Gauss–Markov theorem, BLUE, Best Linear Unbiased Estimator, 最佳線性不偏估計量]
sources: ["[[sources/lecture-02]]"]
related: ["[[ls-unbiasedness-and-variance]]", "[[slr-error-assumptions]]", "[[least-squares]]"]
status: draft
updated: 2026-11-24
---

# Gauss–Markov 定理 (Gauss–Markov Theorem)

> 在三條誤差假設下，最小平方估計量是所有線性不偏估計量中變異數最小的：BLUE。

## 敘述
最小平方估計量 $b_0$、$b_1$ 是 $\beta_0$、$\beta_1$ 的**最佳線性不偏估計量** (Best Linear Unbiased Estimator, BLUE)（[[sources/lecture-02]] p.12）：
在所有以 $Y_i$ 線性組合構成的不偏估計量中，LS 估計量的變異數最小（最精確）：

$$Var(b_0) \le Var(b_0^*), \qquad Var(b_1) \le Var(b_1^*)$$

其中 $b_0^*$、$b_1^*$ 是任何其他 $\beta_0$、$\beta_1$ 的線性不偏估計量。

## 需要的條件
[[slr-error-assumptions]] 的三條假設（平均為 0、變異數相同、不相關）；**不需要**常態假設。

## 證明
講義未給，見課本 ALSM p.43–44（[[sources/lecture-02]] p.12）。

## 相關性質
- LS 估計量也是**一致的** (consistent)，講義不深入討論（[[sources/lecture-02]] p.12）。
- 總結：LS 估計量有這麼多好性質，大多數情況下不需要考慮其他估計方法（[[sources/lecture-02]] p.12）。

## 常見誤解
- 「BLUE 代表 LS 是所有估計量中最好的」：只在**線性且不偏**的估計量裡最好，不代表比所有（例如有偏的）估計量都好（補充，非講義內容）。

## 教學提示
- 把 BLUE 四個字母拆開講：Best（變異數最小）、Linear（$Y_i$ 的線性組合）、Unbiased（不偏）、Estimator。
- 可以連回 [[bias-variance-tradeoff]]：有偏的估計量有可能總誤差更小（補充）。

## 出處
- [[sources/lecture-02]] p.12
