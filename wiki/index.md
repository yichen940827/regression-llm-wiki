# 迴歸分析知識庫 — 目錄

## 導覽
- [[roadmap|學習路徑]] — 主題順序與先備知識
- [[notation|符號對照表]] — 全 wiki 統一使用的符號，以及與 ALSM 的對照

## 來源 (sources)
- [[sources/lecture-01|Lecture 01：迴歸分析導論]] — 迴歸的由來、統計關係、迴歸模型的用途與限制
- [[sources/lecture-02|Lecture 02：簡單線性迴歸的基本理論]] — SLR 定義與假設、最小平方法、估計量性質、MSE、常態誤差與最大概似
- [[sources/lecture-03|Lecture 03：簡單線性迴歸的推論]] — 抽樣分配、t 檢定與信賴區間、平均反應與預測區間、ANOVA 與 F 檢定、R²、過原點迴歸
- [[sources/lecture-04|Lecture 04：簡單線性迴歸的模型診斷]] — 殘差圖、標準化殘差、常態機率圖、常態與變異數檢定、缺適檢定
- [[sources/lecture-05|Lecture 05：簡單線性迴歸的補救方法]] — 放棄模型或轉換資料；轉換 X、轉換 Y、Box–Cox、轉換後的解讀

## 概念 (concepts)
- [[regression-to-the-mean|趨向平均數]] — Galton 的身高研究，「迴歸」一詞的由來
- [[functional-vs-statistical-relation|函數關係與統計關係]] — $Y=f(X)$ 與 $Y=f(X)+\varepsilon$
- [[regression-function|迴歸函數]] — $E(Y\mid\mathbf{X})=f(\mathbf{X})$：給定 X 時 Y 的平均
- [[regression-model|迴歸模型]] — 變數角色、資料矩陣、三種用途、SLR 與多元迴歸、建模態度
- [[observational-vs-experimental-data|觀察資料與實驗資料]] — 隨機分派與因果證據的強弱
- [[scope-and-extrapolation|模型適用範圍與外插]] — 迴歸式只在觀測到的 X 範圍內有效
- [[bias-variance-tradeoff|偏誤–變異取捨]] — 模型太簡單偏誤大、太複雜變異大
- [[simple-linear-regression|簡單線性迴歸]] — $Y_i=\beta_0+\beta_1X_i+\varepsilon_i$、Y 的分配、參數意義、為什麼叫線性
- [[fitted-values-and-residuals|配適值與殘差]] — $\hat Y_i$、$e_i$、配適線的 6 個性質
- [[error-variance-mse|誤差變異數的估計（MSE）]] — $s^2=SSE/(n-2)$，少 2 個自由度
- [[centered-slr|中心化的 SLR]] — 以 $X_i-\bar X$ 迴歸，截距變 $\bar Y$
- [[chi-square-t-f-distributions|χ²、t、F 分配]] — 推論用的三個分配；$F_{1,\nu}=t_\nu^2$
- [[anova-decomposition|平方和分解與 ANOVA 表]] — $SSTO=SSR+SSE$，自由度 n−1、1、n−2
- [[r-squared-and-correlation|R² 與相關係數]] — $R^2=SSR/SSTO$；SLR 中 $r^2=R^2$
- [[confidence-interval-interpretation|信賴區間的解讀]] — 重複抽樣下約 95% 的區間蓋住真值
- [[regression-through-origin|過原點迴歸]] — $b_1=\sum XY/\sum X^2$、df n−1、未修正平方和
- [[model-diagnostics|模型診斷]] — 6 種可能的問題；圖形為主、檢定為輔
- [[standardized-residuals|標準化殘差]] — $r_i=e_i/\sqrt{MSE(1-h_{ii})}$；半學生化殘差
- [[outliers|離群值]] — 對斜率影響大；$\lvert r_i\rvert>3$（L05 用 >4）標出調查；處理原則
- [[remedial-measures|補救方法]] — 診斷出問題後：放棄 SLR 或轉換資料；問題與對策對照
- [[variable-transformations|變數轉換]] — 形狀問題轉 X、散布問題轉 Y；冪次階梯 $Y^\lambda$
- [[interpreting-transformed-models|轉換後模型的解讀]] — 在新尺度上解讀；反轉換；log＝相對變化

## 模型假設 (assumptions)
- [[slr-error-assumptions|SLR 的誤差假設]] — 平均 0、變異數相同、彼此不相關
- [[normal-errors|常態誤差假設]] — $\varepsilon_i \sim N(0,\sigma^2)$，推論的前提；不相關＝獨立；診斷方法
- [[linearity-of-regression-function|迴歸函數為線性]] — 殘差圖呈曲線；缺適檢定
- [[constant-error-variance|變異數相同]] — 喇叭形殘差圖；BF、BP 檢定；轉換、WLS
- [[independent-errors|誤差獨立]] — 殘差對時間的趨勢或週期；GLS、落後項、一階差分

## 推導與定理 (derivations)
- [[least-squares-estimators|最小平方估計量的推導]] — 正規方程式 → $b_0$、$b_1$
- [[ls-unbiasedness-and-variance|不偏性與變異數]] — $b_1=\sum k_iY_i$、$E(b_1)=\beta_1$、$Var(b_1)=\sigma^2/S_{XX}$
- [[gauss-markov-theorem|Gauss–Markov 定理]] — LS 估計量是 BLUE
- [[mle-normal-slr|常態誤差 SLR 的最大概似估計]] — LS＝ML；$\hat\sigma^2=\sum e_i^2/n$ 有偏
- [[sampling-distribution-of-estimators|估計量的抽樣分配]] — $b_1$ 常態、$(b_1-\beta_1)/s\{b_1\}\sim t_{n-2}$、$SSE/\sigma^2\sim\chi^2_{n-2}$
- [[expected-mean-squares|期望均方]] — $E(MSE)=\sigma^2$、$E(MSR)=\sigma^2+\beta_1^2S_{XX}$

## 檢定與診斷 (methods)
- [[least-squares|最小平方法]] — 讓殘差平方和最小的估計方法
- [[maximum-likelihood|最大概似法]] — 找最可能產生這組資料的參數
- [[inference-regression-coefficients|β₁、β₀ 的 t 檢定與信賴區間]] — 含單尾檢定與 σ² 的信賴區間
- [[power-of-slope-test|檢定力]] — 非中心參數 δ、查表 B.5
- [[ci-mean-response|平均反應的信賴區間]] — $X_h$ 離 $\bar X$ 越遠越寬
- [[prediction-interval|新觀測值的預測區間]] — 多一個 σ²；含 m 個新觀測的平均
- [[f-test-anova|ANOVA F 檢定]] — $F^*=MSR/MSE$，等價於雙尾 t 檢定
- [[general-linear-f-test|一般線性檢定]] — 比較完整與縮減模型的 SSE
- [[residual-plots|殘差圖]] — 7 種殘差圖與判讀；遺漏變數；lowess
- [[normal-probability-plot|常態機率圖]] — 期望值 $\sqrt{MSE}\,z(A)$；注意座標軸
- [[normality-tests|常態性檢定]] — 常態相關檢定、Shapiro–Wilk、AD、Lilliefors
- [[brown-forsythe-test|Brown–Forsythe 檢定]] — 兩組殘差與中位數的絕對離差比較；穩健
- [[breusch-pagan-test|Breusch–Pagan 檢定]] — $e^2$ 對 $X$ 迴歸；假設常態
- [[lack-of-fit-test|缺適檢定]] — $SSE=SSPE+SSLF$，$F^*=MSLF/MSPE$
- [[box-cox-transformation|Box–Cox 轉換]] — 由資料選 $\lambda$（MLE＝最小標準化 SSE）；取好解讀的值
- [[lowess-smoothing|LOWESS 平滑曲線]] — 局部加權平滑，判斷線性、找 X 的轉換

## 例題與資料集 (examples)
- [[father-son-heights|父子身高資料]] — 高個子父親的兒子平均矮 1.42 吋
- [[steroid-age|類固醇濃度與年齡]] — 曲線型的統計關係
- [[electrical-distributor|電器經銷商]] — 已知模型下算迴歸函數與誤差（$\varepsilon_i=4$）
- [[toluca-company|Toluca 公司]] — 批量與工時：$b_1=3.5702$、$b_0=62.37$、$MSE=2384$
- [[height-weight|學生身高與體重]] — 手算例題；截距 −11.66 磅沒有意義
- [[warehouse|倉庫例題]] — 過原點迴歸 $\hat Y=4.685X$；殘差和不為 0
- [[cars-stopping-distance|車速與煞車距離]] — 無截距 R² 較高，但截距不能拿掉
- [[lack-of-fit-toy|缺適檢定小例題]] — 6 筆資料，$F^*=0.0916$，不拒絕直線
- [[bank-new-accounts|銀行例題]] — 最低存款與新開戶數，$F^*=14.80$，拒絕直線
- [[sales-training|銷售訓練例題]] — 轉換 X：$\hat Y=-10.33+83.45\sqrt X$
- [[plasma-levels|Plasma 例題]] — 轉換 Y：$\hat Y'=1.135-0.1023X$，Box–Cox $\hat\lambda\approx-0.5$

## 練習題 (exercises)
- [[bias-variance-01|從靶心圖判斷偏誤與變異]] — 講義原題，難度 1
- [[functional-vs-statistical-01|函數關係還是統計關係？]] — 補充題，難度 1，5 個情境判斷
- [[observational-vs-experimental-01|觀察資料還是實驗資料？]] — 補充題，難度 2，含因果推論判斷
- [[extrapolation-01|這個預測算不算外插？]] — 補充題，難度 2，以類固醇資料為例
- [[linear-model-01|線性模型還是非線性模型？]] — 補充題，難度 1，5 個模型判斷
- [[least-squares-01|手算最小平方估計]] — 補充題，難度 2，5 筆資料算 $b_0$、$b_1$、殘差
- [[error-variance-01|MSE、自由度與 σ̂²]] — 補充題，難度 2
- [[cov-b0-b1-01|證明 Cov(b₀,b₁)]] — 講義原題，難度 3
- [[cov-ybar-b1-01|證明 Cov(Ȳ,b₁)=0]] — 講義原題，難度 2
- [[slr-inference-01|一套完整的 SLR 推論]] — 補充題，難度 2，t 檢定、ANOVA、R²
- [[ci-vs-pi-01|信賴區間與預測區間]] — 補充題，難度 2
- [[r-squared-01|R² 的解讀是非題]] — 補充題，難度 1
- [[residual-patterns-01|看殘差圖判斷問題]] — 補充題，難度 1
- [[lack-of-fit-01|手算缺適檢定]] — 補充題，難度 2
- [[diagnostic-tests-01|把檢定對應到假設]] — 補充題，難度 1
- [[choose-transformation-01|看散布圖選擇轉換]] — 補充題，難度 1
- [[log-interpretation-01|解讀 log 轉換模型的係數]] — 補充題，難度 2
- [[box-cox-01|從 Box–Cox 結果選 λ 並反轉換]] — 補充題，難度 2

## 常見誤解 (misconceptions)
- [[correlation-is-not-causation|迴歸關係顯著不代表因果]] — 收入與肥胖都與年齡有關
- [[extrapolation-beyond-data|配適好不代表能外插]] — 超出 X 範圍的預測不可信
- [[linear-means-straight-line|線性就是直線？]] — 線性是對參數，不是對 X
- [[intercept-always-meaningful|截距一定有意義？]] — X=0 不在範圍內時截距沒有意義
- [[ci-probability-interpretation|β₁ 有 95% 機率在區間內？]] — 95% 指的是造區間的方法
- [[high-r-squared-good-model|R² 越高越好？]] — R² 只衡量線性關聯的相對比例
- [[prediction-vs-confidence-interval|信賴區間能預測個體？]] — 個體要用較寬的預測區間
- [[tests-replace-plots|檢定通過就不用看圖？]] — 檢定受樣本數影響，只是輔助
- [[delete-outliers|離群值直接刪掉？]] — 先調查是錯誤還是真實資訊
- [[transform-y-only-fixes-variance|轉換 Y 只會修正變異數？]] — 也會改變關係的形狀，可能要再轉換 X
- [[transformed-coefficient-original-scale|轉換後的係數用原單位解讀？]] — 要在新尺度上解讀或反轉換

## 待建頁面
- [[leverage|槓桿值 (leverage) $h_{ii}$]] — Lecture 04 提及，之後的講次介紹
- [[weighted-least-squares|加權最小平方法 (WLS)]] — 變異數不相同的對策，Lecture 04、05 提及（ALSM Ch.11）
- [[durbin-watson-test|Durbin–Watson 檢定]] — 檢查誤差序列相關，Lecture 04 提及（ALSM Ch.12）
- [[robust-regression|穩健迴歸 (robust regression)]] — 降低離群值影響的估計方法，Lecture 05 提及（ALSM Section 11.3）
- [[generalized-least-squares|一般化最小平方法 (GLS)]] — 處理誤差相關，Lecture 05 提及（ALSM Ch.11）
