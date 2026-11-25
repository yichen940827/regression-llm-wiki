---
topic: simple-linear-regression
title: 簡單線性迴歸的基本理論 (Simple Linear Regression: Basic Theory)
stage: 1-outline
status: 已確認（2026-11-25）
updated: 2026-11-25
---

# 大綱：簡單線性迴歸的基本理論

> 簡報產生流程的節點 0（素材盤點）與節點 1（大綱）。使用者確認整份大綱後，才進入節點 2（逐頁內容）。
> 產出檔案：`outputs/slides/simple-linear-regression.html`

## 0 素材清單

起點：`roadmap.md` 的「1.1 簡單線性迴歸的基本理論」，從 12 個核心頁沿 `[[連結]]` 往外一層。

| 類型 | 頁面 | 狀態 | 用在 |
|---|---|---|---|
| 來源 | [[sources/lecture-02]] | draft | 全部（出處頁碼） |
| 概念 | [[simple-linear-regression]] | draft | 第 1 章 |
| 假設 | [[slr-error-assumptions]] | draft | 第 1 章 |
| 方法 | [[least-squares]] | draft | 第 2 章 |
| 推導 | [[least-squares-estimators]] | draft | 第 2 章 |
| 推導 | [[ls-unbiasedness-and-variance]] | draft | 第 3 章 |
| 推導 | [[gauss-markov-theorem]] | draft | 第 3 章 |
| 概念 | [[centered-slr]] | draft | 第 3 章 |
| 概念 | [[fitted-values-and-residuals]] | draft | 第 4 章 |
| 概念 | [[error-variance-mse]] | draft | 第 4 章 |
| 假設 | [[normal-errors]] | draft | 第 5 章 |
| 方法 | [[maximum-likelihood]] | draft | 第 5 章 |
| 推導 | [[mle-normal-slr]] | draft | 第 5 章 |
| 例題 | [[electrical-distributor]] | draft | 第 1 章 |
| 例題 | [[toluca-company]]（只用第 1–4 段，L02 的部分） | draft | 第 2、4 章 |
| 例題 | [[height-weight]] | draft | 第 2 章 |
| 誤解 | [[linear-means-straight-line]] | draft | 第 1 章 |
| 誤解 | [[intercept-always-meaningful]] | draft | 第 1、2 章 |
| 練習 | [[linear-model-01]]（補充題） | draft | 第 1 章 |
| 練習 | [[least-squares-01]]（補充題） | draft | 第 2 章 |
| 練習 | [[error-variance-01]]（補充題） | draft | 第 4 章 |

往外一層但**不用**的頁面：
- [[regression-function]]、[[regression-model]]、[[scope-and-extrapolation]]：屬於導論簡報（regression-introduction），這裡只當先備提醒。
- [[toluca-company]] 第 5–8 段、[[warehouse]]、[[regression-through-origin]]、[[sampling-distribution-of-estimators]]：屬於 Lecture 03 以後，留給「SLR 的推論」簡報。
- [[remedial-measures]]、[[variable-transformations]]：由 [[normal-errors]] 連出，屬於 Lecture 05。

先備提醒（只提醒，不放進內容）：迴歸函數 $E(Y\mid X)$（導論簡報）、期望值／變異數／共變異數的運算（第 1、3 章）、偏微分（第 2 章）、常態分配與機率密度函數（第 5 章）。

素材檢查的標示：
- ⚑ **全部頁面都是 `draft`**：可以用，但內容還沒經過你審閱。
- ⚑ **缺練習**：[[slr-error-assumptions]]、[[ls-unbiasedness-and-variance]]、[[gauss-markov-theorem]]、[[centered-slr]]、[[normal-errors]]、[[maximum-likelihood]] 沒有對應的練習題（[[mle-normal-slr]] 由 [[error-variance-01]] 的 σ̂² 小題部分涵蓋）。
- ✅ wiki 中沒有未處理的 `⚠️ 待確認`。L02 的兩個印刷錯誤（p.10 的 20.01、p.18 的 $f_2$）已在 wiki 更正，簡報沿用更正後的數字。

## 1 大綱

**總頁數：29 頁**（封面、路線、5 章、回顧）

### 開場（2 頁）
- 封面：簡單線性迴歸的基本理論 Simple Linear Regression: Basic Theory（Lecture 02 · ALSM Ch.1）
- 今天的路線：5 章的標題；先備提醒「迴歸函數 $E(Y\mid X)$」

### 第 1 章　簡單線性迴歸模型（6 頁）
- 目標：寫出 $Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$ 與三條誤差假設；說出 $Y_i$ 的平均與變異數；知道「線性」指對參數線性；能解讀 $\beta_0$、$\beta_1$
- wiki 頁面：[[simple-linear-regression]]、[[slr-error-assumptions]]、[[electrical-distributor]]、[[linear-means-straight-line]]、[[intercept-always-meaningful]]
- 頁面：章節頁 → 模型與三條誤差假設 → $Y_i$ 的分配（每個 $X$ 上方的分配圖＋電器經銷商例題）→ 為什麼叫「線性」（誤解卡）→ 練習 1 → 參數的意義（截距不一定有意義）
- 先備提醒：期望值、變異數、共變異數
- 練習：[[linear-model-01]]（補充題，難度 1）
- 出處：Lecture 02 p.1–5

### 第 2 章　最小平方法（6 頁）
- 目標：理解「垂直距離平方和最小」的想法；能從正規方程式推出 $b_0$、$b_1$；會手算並解讀
- wiki 頁面：[[least-squares]]、[[least-squares-estimators]]、[[toluca-company]]、[[height-weight]]、[[intercept-always-meaningful]]
- 頁面：章節頁 → 想法：讓 $Q=\sum(Y_i-\beta_0-\beta_1X_i)^2$ 最小（垂直距離示意圖）→ 推導：偏微分 → 正規方程式 → $b_0$、$b_1$ → Toluca 公司（$b_1 = 3.5702$、$b_0 = 62.37$，散布圖＋配適線）→ 學生身高與體重（先猜再揭曉：截距 −11.66 磅）→ 練習 2
- 互動：🤔 先猜猜看（截距的意義）
- 先備提醒：偏微分
- 練習：[[least-squares-01]]（補充題，難度 2）
- 出處：Lecture 02 p.5–10

### 第 3 章　估計量的性質（5 頁）
- 目標：知道 $b_1 = \sum k_i Y_i$ 是 $Y_i$ 的線性組合；會用它證明不偏性、說出 $Var(b_1)=\sigma^2/S_{XX}$ 的意義；理解 BLUE；知道中心化的好處
- wiki 頁面：[[ls-unbiasedness-and-variance]]、[[gauss-markov-theorem]]、[[centered-slr]]
- 頁面：章節頁 → 線性組合與不偏性（$\sum k_i = 0$、$\sum k_i X_i = 1$）→ 變異數與解讀（$X$ 越分散、$b_1$ 越準；示意圖）→ Gauss–Markov 定理：BLUE（需要的條件、常見誤解）→ 中心化的 SLR（截距變 $\bar Y$、與斜率不相關）
- 先備提醒：期望值與變異數的線性運算
- 練習：⚑ 無（見「待你決定」）
- 出處：Lecture 02 p.10–12, 15–16

### 第 4 章　配適值、殘差與 MSE（5 頁）
- 目標：區分誤差 $\varepsilon_i$ 與殘差 $e_i$；記得配適線的 6 個性質；理解 $MSE = SSE/(n-2)$ 為什麼除以 $n-2$
- wiki 頁面：[[fitted-values-and-residuals]]、[[error-variance-mse]]、[[toluca-company]]
- 頁面：章節頁 → 配適值與殘差（Toluca 第 1 筆：$\hat Y_1 = 347.98$、$e_1 = 51.02$；誤差 vs. 殘差圖）→ 配適線的 6 個性質（$\sum e_i = 0$ 等）→ 估計 σ²：MSE 與 $n-2$（Toluca $s = 48.8$）→ 練習 3
- 練習：[[error-variance-01]]（補充題，難度 2）
- 出處：Lecture 02 p.12–15

### 第 5 章　常態誤差與最大概似（4 頁）
- 目標：知道加上常態假設才能做推論；理解最大概似的想法；知道常態下 LS ＝ ML，但 $\hat\sigma^2$ 除以 $n$ 是有偏的
- wiki 頁面：[[normal-errors]]、[[maximum-likelihood]]、[[mle-normal-slr]]
- 頁面：章節頁 → 常態誤差模型（每個 $X$ 上方的常態曲線；「不相關＝獨立」只在常態下成立）→ 最大概似的想法（講義例題：哪個 μ 比較合理？先猜再揭曉）→ 常態 SLR 的 MLE：$\hat\beta = b$、$\hat\sigma^2 = SSE/n$ 與 MSE 比較
- 互動：🤔 先猜猜看（哪個 μ）
- 先備提醒：常態分配、機率密度函數
- 練習：沿用第 4 章練習 3 的 σ̂² 小題（不另放）
- 出處：Lecture 02 p.16–19

### 收尾（1 頁）
- 重點回顧：每章一句話；預告下一份簡報「SLR 的推論」

## 待你決定

1. **頁數 29 頁，接近上限 30**：要保留全部，還是把「中心化的 SLR」併進第 3 章的變異數頁、或改成講者備註（變 28 頁）？
2. **第 3 章沒有練習**：要不要我為「不偏性與變異數」補一題補充題（例如：給 5 個 $X$ 值，算 $k_i$ 並驗證 $\sum k_i = 0$、$\sum k_i X_i = 1$，再比較兩種 $X$ 設計的 $Var(b_1)$）？補的話要先建 wiki 練習頁，再放進簡報。
3. 全部頁面都還是 `draft`：直接用來做簡報（同上一份的做法），還是先審閱 wiki？
