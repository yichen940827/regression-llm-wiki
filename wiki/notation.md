---
type: notation
updated: 2026-11-25
---

# 符號對照表 (Notation)

全 wiki 以本頁的「標準符號」為準。標準符號以**講義**為主；與主教科書 ALSM（Kutner et al.《Applied Linear Statistical Models》）不同時，記在「ALSM 寫法」欄。

## 標準符號

| 符號 | 意義 | ALSM 寫法 | 首次出現 |
|---|---|---|---|
| $Y$ | 反應變數（應變數） | 同 | [[sources/lecture-01]] p.3 |
| $X_1, \dots, X_k$ | 解釋變數（自變數、預測變數） | $X_1, \dots, X_{p-1}$ | [[sources/lecture-01]] p.3 |
| $k$ | 解釋變數個數 | $p-1$（$p$ 為參數個數） | [[sources/lecture-01]] p.3 |
| $n$ | 樣本數 | 同 | [[sources/lecture-01]] p.3 |
| $i = 1, \dots, n$ | 觀測單位的下標 | 同 | [[sources/lecture-01]] p.3 |
| $X_{ij}$ | 第 $i$ 個單位的第 $j$ 個解釋變數 | 同 | [[sources/lecture-01]] p.3 |
| $\mathbf{X}_i = (X_{i1}, \dots, X_{ik})$ | 第 $i$ 個單位所有解釋變數的向量 | — | [[sources/lecture-01]] p.3 |
| $\varepsilon$, $\varepsilon_i$ | 誤差項（偏離趨勢的部分） | 同 | [[sources/lecture-01]] p.4 |
| $f(X)$ | 趨勢（函數形式） | — | [[sources/lecture-01]] p.4 |
| $E(Y \mid \mathbf{X})$ | 迴歸函數：給定 $\mathbf{X}$ 時 $Y$ 的期望值 | $E\{Y\}$ | [[sources/lecture-01]] p.6 |
| $\mu_Y$ | $Y$ 的平均（$= E(Y)$） | — | [[sources/lecture-01]] p.6 |
| $\beta_0, \beta_1$ | 簡單線性迴歸的截距與斜率參數 | 同 | [[sources/lecture-01]] p.6 |
| $\sigma^2$ | 誤差變異數 $Var(\varepsilon_i)$ | 同 | [[sources/lecture-02]] p.2 |
| $b_0, b_1$ | $\beta_0, \beta_1$ 的最小平方估計量 | 同 | [[sources/lecture-02]] p.6 |
| $\hat\beta_0, \hat\beta_1, \hat\sigma^2$ | 最大概似估計量（常態誤差下 $\hat\beta = b$） | 同 | [[sources/lecture-02]] p.18 |
| $\hat Y_i$ | 配適值 $b_0 + b_1 X_i$ | 同 | [[sources/lecture-02]] p.12 |
| $e_i$ | 殘差 $Y_i - \hat Y_i$ | 同 | [[sources/lecture-02]] p.12 |
| $\bar X, \bar Y$ | 樣本平均 | 同 | [[sources/lecture-02]] p.7 |
| $S_{XX}$ | $\sum (X_i - \bar X)^2$ | — | [[sources/lecture-02]] p.11 |
| $S_{XY}$ | $\sum (X_i - \bar X)(Y_i - \bar Y)$ | — | [[sources/lecture-02]] p.16 |
| $SSE$ | 殘差（誤差）平方和 $\sum e_i^2$ | 同 | [[sources/lecture-02]] p.15 |
| $MSE$, $s^2$ | 均方誤差 $SSE/(n-2)$，$\sigma^2$ 的不偏估計 | 同 | [[sources/lecture-02]] p.15 |
| $s$ | $\sqrt{MSE}$，$\sigma$ 的估計 | 同 | [[sources/lecture-02]] p.15 |
| $Var(b_1)$ | 估計量的變異數 | $\sigma^2\{b_1\}$ | [[sources/lecture-02]] p.11 |
| $k_i, l_i$ | 把 $b_1, b_0$ 寫成 $\sum k_i Y_i$、$\sum l_i Y_i$ 的權數 | 同 | [[sources/lecture-02]] p.10 |
| $t(1-\alpha/2;\,\nu)$ | t 分配的第 $1-\alpha/2$ 百分位（臨界值） | $t(1-\alpha/2;\,n-2)$ | [[sources/lecture-03]] p.7 |
| $\chi^2(p;\,\nu)$、$F(p;\,\nu_1,\nu_2)$ | χ²、F 分配的第 $p$ 百分位 | 同 | [[sources/lecture-03]] p.11, 25 |
| $s\{b_1\}, s\{b_0\}$ | 估計量的估計標準誤 | 同 | [[sources/lecture-03]] p.3 |
| $\sigma\{b_1\}$ | $b_1$ 的真實標準差 $\sqrt{Var(b_1)}$ | 同 | [[sources/lecture-03]] p.3 |
| $T^*, t^*$ | 檢定統計量與其計算值 | 同 | [[sources/lecture-03]] p.6 |
| $\beta_{10}, \beta_{00}$ | 虛無假設下的參數值 | 同 | [[sources/lecture-03]] p.6 |
| $X_h$、$\hat Y_h$ | 新的解釋變數值、該處的平均反應估計 | 同 | [[sources/lecture-03]] p.13–14 |
| $E(Y_h)$ | $X_h$ 處的平均反應 | $E\{Y_h\}$ | [[sources/lecture-03]] p.14 |
| $Y_{h(new)}$、$\bar Y_{h(new)}$ | $X_h$ 處的一個新觀測、$m$ 個新觀測的平均 | 同 | [[sources/lecture-03]] p.16–17 |
| $s\{\hat Y_h\}, s\{pred\}, s\{predmean\}$ | 平均反應、單一預測、m 個預測平均的標準誤 | 同 | [[sources/lecture-03]] p.15–17 |
| $\delta$ | 非中心參數 $\lvert\beta_1-\beta_{10}\rvert/\sigma\{b_1\}$ | 同 | [[sources/lecture-03]] p.12 |
| $SSTO$ | 總平方和 $\sum(Y_i-\bar Y)^2$ | 同 | [[sources/lecture-03]] p.22 |
| $SSR$、$MSR$ | 迴歸平方和 $\sum(\hat Y_i-\bar Y)^2$、迴歸均方 $SSR/1$ | 同 | [[sources/lecture-03]] p.23–24 |
| $F^*$ | F 檢定統計量 | 同 | [[sources/lecture-03]] p.25 |
| $SSE(F), SSE(R)$；$df_F, df_R$ | 完整／縮減模型的殘差平方和與自由度 | 同 | [[sources/lecture-03]] p.27 |
| $S_{YY}$ | $\sum(Y_i-\bar Y)^2$（$=SSTO$） | — | [[sources/lecture-03]] p.29 |
| $r$、$R^2$ | 樣本相關係數、判定係數 | 同 | [[sources/lecture-03]] p.29 |
| $r_i$ | 標準化（內部學生化）殘差 $e_i/\sqrt{MSE(1-h_{ii})}$ | 同 | [[sources/lecture-04]] p.2 |
| $e_i^*$ | 半學生化殘差 $e_i/\sqrt{MSE}$ | 同 | [[sources/lecture-04]] p.2 |
| $h_{ii}$ | 槓桿值（之後的講次介紹） | 同 | [[sources/lecture-04]] p.2 |
| $z(A)$、$A$ | 標準常態第 $100A$ 百分位；$A=(k-0.375)/(n+0.25)$ | 同 | [[sources/lecture-04]] p.7 |
| $\tilde e_1, \tilde e_2$；$d_{i1}, d_{i2}$ | 兩組殘差的中位數；與中位數的絕對離差 | 同 | [[sources/lecture-04]] p.18 |
| $t^*_{BF}$ | Brown–Forsythe 統計量 | 同 | [[sources/lecture-04]] p.18 |
| $\gamma_0, \gamma_1$；$SSR^*$；$X^2_{BP}$ | Breusch–Pagan 的變異數模型參數、$e^2$ 對 $X$ 迴歸的 SSR、統計量 | 同 | [[sources/lecture-04]] p.20–21 |
| $c$、$n_j$、$Y_{ij}$、$\bar Y_j$、$\mu_j$ | 缺適檢定：$X$ 水準數、各水準觀測數、觀測值、水準平均、水準的真實平均 | 同 | [[sources/lecture-04]] p.21–22 |
| $SSPE$、$MSPE$ | 純誤差平方和（df $n-c$）、純誤差均方 | 同 | [[sources/lecture-04]] p.22–23 |
| $SSLF$、$MSLF$ | 缺適平方和（df $c-2$）、缺適均方 | 同 | [[sources/lecture-04]] p.22–23 |
| $X'$、$Y'$ | 轉換後的解釋變數、反應變數（例如 $X'=\sqrt X$、$Y'=\log_{10}Y$） | 同 | [[sources/lecture-05]] p.4, 8 |
| $\lambda$、$\hat\lambda$ | Box–Cox 冪次參數與其最大概似估計；$Y'(\lambda)=(Y^\lambda-1)/\lambda$，$\lambda=0$ 時為 $\log_e Y$ | 同 | [[sources/lecture-05]] p.9 |
| $W_i$、$K_1$、$K_2$ | Box–Cox 的標準化反應變數；$K_2$ 為 $Y$ 的幾何平均（補充，講義未列） | ALSM 式 3.36 | [[box-cox-transformation]] |
| $W$、$W'=\log W$ | 解讀 log 轉換時的一般變數 | — | [[sources/lecture-05]] p.14 |
| $\beta_0^*, b_0^*$ | 中心化 SLR 的截距（$\beta_0 + \beta_1 \bar X$）與其估計 $\bar Y$ | — | [[sources/lecture-02]] p.15–16 |

> ALSM 的期望值習慣寫成大括號 $E\{Y\}$；wiki 統一用 $E(Y)$。

## 各講義的寫法差異

| 標準符號 | 講義 | 講義寫法 | 備註 |
|---|---|---|---|
| $\varepsilon_i$ | Lecture 02 | 有時印成 $\epsilon_i$ | 同義，wiki 統一用 $\varepsilon$ |
| $Var(b_1)$ | Lecture 02 | $\sigma^2\{b_1\}$ | ALSM 寫法 |
| $b_0, b_1$ | Lecture 02 p.7 | 也常寫成 $\hat\beta_0, \hat\beta_1$ | wiki 中 $\hat\beta$ 保留給最大概似估計 |
| $\sigma^2$ | Lecture 03 | PDF 文字層把 σ 存成 ε | 印刷版面正確，只是抽出的文字有誤 |
| $t(1-\alpha/2;\,n-2)$ | Lecture 03 | 多數寫 $t_{(1-\alpha/2,n-2)}$；p.15、p.17 寫 $t_{\alpha/2,n-2}$ | wiki 統一用百分位寫法 |
| $\chi^2(1-\alpha/2;\,n-2)$ | Lecture 03 p.11 | $\chi^2_{\alpha/2,n-2}$（上尾臨界值） | 同一個值，寫法相反 |
| $SSR = SSTO-SSE$ | Lecture 03 p.23 | 迴歸平方和 | 確認與 ALSM 相同 |
| $r_i$ | Lecture 04 p.2 | 標準化殘差（R 的 `rstandard`） | ALSM 稱為 internally studentized residual；ALSM 的 $e_i^*$ 是半學生化殘差 |

## 容易混淆的地方

- **$\varepsilon$ 的兩種用法**：Lecture 01 p.4 的波以耳定律 $P = \varepsilon/V$ 中，$\varepsilon$ 是氣體常數，與誤差項無關。
- **SSR／SSE**：不同教材中可能分別代表「迴歸平方和」或「殘差平方和」。ALSM 中 SSR = 迴歸平方和、SSE = 誤差（殘差）平方和。Lecture 02 已確認 $SSE = \sum e_i^2$（殘差平方和）；Lecture 03 確認 $SSR$ 是迴歸平方和，與 ALSM 相同。
- **過原點迴歸的 SSTO**：改用未修正平方和 $\sum Y_i^2$（自由度 $n$），不是 $\sum (Y_i-\bar Y)^2$。見 [[regression-through-origin]]。
- **$r$ 的兩種用法**：Lecture 03 的 $r$ 是相關係數；Lecture 04 的 $r_i$（有下標）是標準化殘差。
- **log 的底數**：講義 p.9 的冪次階梯與 Box–Cox 用 $\log_e$；Plasma 例題用 $\log_{10}$；p.14 的 $e^{\beta_1 a}$ 對應自然對數。wiki 寫 $\log$ 而未註明底數時指自然對數；底數不影響轉換是否合適，只影響係數的解讀（見 [[interpreting-transformed-models]]）。
- **$W$ 的兩種用法**：Lecture 05 p.14 的 $W$ 是解讀用的一般變數；Box–Cox 標準化的 $W_i$ 是 ALSM 的寫法，兩者無關。
- **誤差 vs. 殘差**：$\varepsilon_i$ 用母體迴歸線、看不到；$e_i$ 用配適線、看得到。見 [[fitted-values-and-residuals]]。
