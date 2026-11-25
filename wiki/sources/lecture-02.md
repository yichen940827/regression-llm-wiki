---
type: source
topic: linear
aliases: [Lecture 02, Basic Theory for SLR, 簡單線性迴歸基本理論]
raw: raw/lecture-02.pdf
textbook: ALSM Sections 1.3, 1.6–1.8
pages: 19
status: draft
updated: 2026-11-24
---

# Lecture 02：簡單線性迴歸的基本理論 (Basic Theory for Simple Linear Regression)

> 定義簡單線性迴歸 (SLR) 與誤差假設，用最小平方法估計參數，介紹估計量的性質、配適值與殘差、誤差變異數的估計，最後加上常態誤差假設並連到最大概似法。

- 課程：114-1 迴歸分析 I（商學院），Fall 2025
- 對應課本：ALSM Chapter 1 的 1.3、1.6–1.8 節
- 參考書同 [[sources/lecture-01|Lecture 01]]

## 各頁重點

| 頁 | 主題 | wiki 頁面 |
|---|---|---|
| p.1 | 線性迴歸適用的反應變數；先談一個 $X$ 的 SLR | [[simple-linear-regression]] |
| p.2–3 | SLR 的定義、誤差三假設、$Y$ 的平均／變異數／共變異數；電器經銷商例題 | [[simple-linear-regression]]、[[slr-error-assumptions]]、[[electrical-distributor]] |
| p.4 | 為什麼叫「線性」：對參數線性；多項式迴歸；一階模型 | [[simple-linear-regression]]、[[linear-means-straight-line]] |
| p.4–5 | 參數 $\beta_0$、$\beta_1$ 的意義；截距不一定有意義 | [[simple-linear-regression]]、[[intercept-always-meaningful]] |
| p.5–7 | 最小平方法、正規方程式、$b_0$、$b_1$ 公式 | [[least-squares]]、[[least-squares-estimators]] |
| p.7–9, 13 | Toluca 公司例題 | [[toluca-company]] |
| p.9–10 | 學生身高與體重例題 | [[height-weight]] |
| p.10–11 | 估計量是 $Y_i$ 的線性組合；不偏性；$Var(b_1)$、$Var(b_0)$ | [[ls-unbiasedness-and-variance]] |
| p.12 | BLUE、Gauss–Markov 定理；一致性 | [[gauss-markov-theorem]] |
| p.12–14 | 配適值、殘差、配適線的 6 個性質 | [[fitted-values-and-residuals]] |
| p.15 | 誤差變異數的估計：$s^2 = MSE = SSE/(n-2)$ | [[error-variance-mse]] |
| p.15–16 | 中心化的 SLR | [[centered-slr]] |
| p.16 | 常態誤差模型 | [[normal-errors]] |
| p.17–19 | 最大概似法；常態下 LS＝ML；$\hat\sigma^2$ 有偏 | [[maximum-likelihood]]、[[mle-normal-slr]] |

## 符號

- 最小平方估計量 $b_0, b_1$；最大概似估計量 $\hat\beta_0, \hat\beta_1, \hat\sigma^2$。講義 p.7 也提到 LS 估計量常寫成 $\hat\beta_0, \hat\beta_1$，兩種都可以，只要定義清楚、前後一致。
- 配適值 $\hat Y_i$、殘差 $e_i$、$SSE$、$MSE$、$s^2$、$S_{XX}$、$S_{XY}$。
- 講義用 $\sigma^2\{b_1\}$ 表示 $Var(b_1)$（ALSM 寫法）；誤差項有時印成 $\epsilon_i$，與 $\varepsilon_i$ 同義。見 [[notation]]。
- 本講都是純量形式。

## 講義中的題目

- 本講沒有練習題；三個例題整理成例題頁。
- 補充題（使用者同意）：[[linear-model-01]]、[[least-squares-01]]、[[error-variance-01]]

## 待確認事項（已依使用者決定處理）

- ⚠️→已處理 **p.10 印刷錯誤**：$b_0 = 152.5 - 20.01 \times 5.86$ 應為 $152.5 - 28.02 \times 5.86 \approx -11.66$（$b_1 = 28.02$）。wiki 採 28.02，見 [[height-weight]]。
- ⚠️→已處理 **p.18 下標印刷錯誤**：第一列 $f_2(\mu=259)=0.026609$ 應為 $f_1$，見 [[maximum-likelihood]]。
- Toluca 的 R 輸出含標準誤、t 值、$R^2$，屬於之後的推論內容，本次只取估計值。

## 本次 ingest 建立的頁面

- concepts：[[simple-linear-regression]]、[[fitted-values-and-residuals]]、[[error-variance-mse]]、[[centered-slr]]
- assumptions：[[slr-error-assumptions]]、[[normal-errors]]
- methods：[[least-squares]]、[[maximum-likelihood]]
- derivations：[[least-squares-estimators]]、[[ls-unbiasedness-and-variance]]、[[gauss-markov-theorem]]、[[mle-normal-slr]]
- examples：[[electrical-distributor]]、[[toluca-company]]、[[height-weight]]
- misconceptions：[[linear-means-straight-line]]、[[intercept-always-meaningful]]
- exercises：[[linear-model-01]]、[[least-squares-01]]、[[error-variance-01]]
- 更新：[[regression-function]]、[[regression-model]]、[[scope-and-extrapolation]]、[[notation]]、[[roadmap]]、[[index]]
