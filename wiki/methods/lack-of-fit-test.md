---
type: method
topic: linear
aliases: [Lack of fit test, 缺適檢定, pure error, 純誤差, SSPE, SSLF, lack-of-fit F test]
sources: ["[[sources/lecture-04]]"]
related: ["[[linearity-of-regression-function]]", "[[general-linear-f-test]]", "[[lack-of-fit-toy]]", "[[bank-new-accounts]]"]
status: draft
updated: 2026-11-24
---

# 缺適檢定 (Lack-of-Fit F Test)

> 用「同一個 $X$ 下的重複觀測」估計純誤差，看直線模型剩下的誤差是否明顯比純誤差大。

## 假設
正式檢定一階（直線）模型是否正確（[[sources/lecture-04]] p.21）：

$$H_0: E(Y \mid X) = \beta_0 + \beta_1 X \quad \text{vs.} \quad H_1: E(Y \mid X) \neq \beta_0 + \beta_1 X$$

在誤差獨立、常態、變異數相同的假設下進行。

## 需要的資料
**至少在一個 $X$ 水準上有 $Y$ 的重複觀測**（[[sources/lecture-04]] p.21）。符號：
- $X$ 有 $c$ 個不同水準 $X_j$，$j = 1, \dots, c$；在 $X_j$ 有 $n_j$ 個觀測，總數 $n = \sum_{j=1}^c n_j$。
- $Y_{ij}$：在 $X_j$ 的第 $i$ 個觀測，$i = 1, \dots, n_j$。

> 註：講義 p.21 寫「at the *i*th level of the regressor $X_j$」，依上下文應為第 *j* 個水準，wiki 直接改正（2026-11-24 經使用者確認）。

## 用一般線性檢定建構
（[[sources/lecture-04]] p.22–23；見 [[general-linear-f-test]]）
- **完整模型**：$Y_{ij} = \mu_j + \varepsilon_{ij}$（每個 $X$ 水準有自己的平均，不限制形狀）。
- **縮減模型**：$Y_{ij} = \beta_0 + \beta_1 X_j + \varepsilon_{ij}$（直線）。

令 $\bar Y_j$ 為 $X_j$ 處的樣本平均，$\hat Y_{ij}$ 為直線在 $X_j$ 的配適值（同一水準的配適值都一樣，記為 $\hat Y_j$）。誤差分解：

$$\underbrace{Y_{ij} - \hat Y_{ij}}_{\text{誤差離差}} = \underbrace{(Y_{ij} - \bar Y_j)}_{\text{純誤差離差}} + \underbrace{(\bar Y_j - \hat Y_{ij})}_{\text{缺適離差}}$$

平方加總（交叉項為 0）：

$$\underbrace{\sum_j \sum_i (Y_{ij} - \hat Y_{ij})^2}_{SSE} = \underbrace{\sum_j \sum_i (Y_{ij} - \bar Y_j)^2}_{SSPE} + \underbrace{\sum_j n_j (\bar Y_j - \hat Y_j)^2}_{SSLF}$$

- $SSE(F) = SSPE$，自由度 $n - c$；$SSE(R) = SSE$，自由度 $n - 2$。

## 統計量
（[[sources/lecture-04]] p.23）

$$F^* = \frac{SSE - SSPE}{(n-2) - (n-c)} \div \frac{SSPE}{n-c} = \frac{SSLF/(c-2)}{SSPE/(n-c)} = \frac{MSLF}{MSPE}$$

期望均方：

$$E(MSPE) = \sigma^2, \qquad E(MSLF) = \sigma^2 + \frac{\sum_{j=1}^c n_j [\mu_j - \beta_0 - \beta_1 X_j]^2}{c-2}$$

- $H_0$ 下 $F^* \sim F_{c-2,\,n-c}$。
- 若 $F^* > F(1-\alpha;\,c-2,\,n-c)$，拒絕 $H_0$，結論迴歸函數**不是線性**。

## 延伸
可以用在多元迴歸，但需要在相同的 $X$ 組合上有重複觀測，多元迴歸很少符合這個條件（[[sources/lecture-04]] p.23）。

## 例子
- [[lack-of-fit-toy]]：6 筆資料，$F^* = 0.0916$，p = 0.782，不拒絕直線模型。
- [[bank-new-accounts]]：$F^* = 14.80$，拒絕直線模型（補充計算）。

## 教學提示
- 關鍵直覺：純誤差只來自「同一個 $X$ 下的 $Y$ 差多少」，和模型形狀無關，所以是 σ² 的「乾淨」估計。
- 只有一個觀測的 $X$ 水準不貢獻純誤差。
- 相關練習：[[lack-of-fit-01]]

## 出處
- [[sources/lecture-04]] p.21–28
