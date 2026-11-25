---
type: derivation
topic: linear
aliases: [Unbiasedness of LS estimators, Variance of b1, Variance of b0, 不偏性, 估計量的變異數, linear combination of Y]
sources: ["[[sources/lecture-02]]"]
related: ["[[least-squares]]", "[[slr-error-assumptions]]", "[[gauss-markov-theorem]]"]
status: draft
updated: 2026-11-24
---

# 最小平方估計量的不偏性與變異數 (Unbiasedness and Variance of LS Estimators)

> $b_0$、$b_1$ 都可以寫成 $Y_i$ 的加權和；用這個寫法，可以證明它們不偏，並算出變異數。

## 1. 估計量是 Yᵢ 的線性組合
（[[sources/lecture-02]] p.10）

$$b_1 = \frac{\sum (X_i - \bar X)(Y_i - \bar Y)}{\sum (X_i - \bar X)^2} = \frac{\sum (X_i - \bar X) Y_i}{\sum (X_i - \bar X)^2} - \frac{\bar Y \sum (X_i - \bar X)}{\sum (X_i - \bar X)^2} = \sum_{i=1}^n k_i Y_i$$

其中 $k_i = \dfrac{X_i - \bar X}{\sum (X_i - \bar X)^2}$；第二項為 0，因為 $\sum (X_i - \bar X) = \sum X_i - n\bar X = 0$。

同理：

$$b_0 = \bar Y - b_1 \bar X = \sum \frac{Y_i}{n} - \sum k_i Y_i \bar X = \sum \left( \frac1n - k_i \bar X \right) Y_i = \sum l_i Y_i$$

## 2. 兩個有用的性質
$$\sum k_i = 0, \qquad \sum k_i X_i = 1$$

- $\sum k_i = \dfrac{\sum (X_i - \bar X)}{\sum (X_i - \bar X)^2} = 0$。
- $\sum k_i X_i = \dfrac{\sum (X_i - \bar X) X_i}{\sum (X_i - \bar X)^2}$；分子 $= \sum (X_i - \bar X)(X_i - \bar X) + \bar X \sum (X_i - \bar X) = \sum (X_i - \bar X)^2$，所以等於 1。（講義 p.11 只寫結論，此兩行展開為補充，非講義內容）

## 3. 不偏性
（[[sources/lecture-02]] p.11）

$$E(b_1) = E\left(\sum k_i Y_i\right) = \sum k_i E(Y_i) = \sum k_i (\beta_0 + \beta_1 X_i) = \beta_0 \sum k_i + \beta_1 \sum k_i X_i = \beta_1$$

$$E(b_0) = \sum l_i E(Y_i) = \sum \left( \frac1n - k_i \bar X \right)(\beta_0 + \beta_1 X_i) = \beta_0 + \beta_1 \bar X - \beta_0 \bar X \sum k_i - \beta_1 \bar X \sum k_i X_i = \beta_0$$

意思是：「平均來說」最小平方估計量不會系統性地高估或低估 $\beta_0$、$\beta_1$。

## 4. 變異數
（[[sources/lecture-02]] p.11；用到誤差變異數相同、彼此不相關，見 [[slr-error-assumptions]]）

$$Var(b_1) = Var\left(\sum k_i Y_i\right) = \sum k_i^2 Var(Y_i) = \sigma^2 \sum k_i^2 = \frac{\sigma^2}{\sum (X_i - \bar X)^2} = \frac{\sigma^2}{S_{XX}}$$

因為 $\sum k_i^2 = \dfrac{\sum (X_i - \bar X)^2}{[\sum (X_i - \bar X)^2]^2} = \dfrac{1}{\sum (X_i - \bar X)^2}$。

$$Var(b_0) = Var(\bar Y - b_1 \bar X) = \sigma^2 \left( \frac1n + \frac{\bar X^2}{\sum_{i=1}^n (X_i - \bar X)^2} \right)$$

（講義寫「可以證明」，未給推導）

## 解讀
- $X$ 越分散（$S_{XX}$ 越大），$b_1$ 越精確。
- $\bar X$ 離 0 越遠，$b_0$ 越不精確。

## 教學提示
- 先講「線性組合」這個技巧，後面的不偏性與變異數都只是把 $E$、$Var$ 套進去。
- $\sum k_i X_i = 1$ 是學生最常卡住的地方，建議用上面第 2 段的展開完整寫一次。
- 可以問學生：要讓斜率估計更準，收集資料時 $X$ 應該集中還是分散？

## 出處
- [[sources/lecture-02]] p.10–11
