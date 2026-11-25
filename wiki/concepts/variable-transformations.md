---
type: concept
topic: [linear, model-building]
aliases: [Variable transformations, Transformations, 變數轉換, 資料轉換, power transformation, 冪次轉換, ladder of powers]
sources: ["[[sources/lecture-05]]"]
related: ["[[remedial-measures]]", "[[box-cox-transformation]]", "[[interpreting-transformed-models]]", "[[lowess-smoothing]]", "[[linearity-of-regression-function]]", "[[constant-error-variance]]"]
status: draft
updated: 2026-11-25
---

# 變數轉換 (Variable Transformations)

> 換一把尺：把 X 或 Y 換成 $\sqrt{\cdot}$、$\log$、倒數等，讓彎曲的關係變直、讓喇叭形的變異數變平。

## 定義
用一個函數改寫解釋變數或反應變數，例如 $X' = \sqrt X$ 或 $Y' = \log_{10} Y$，再對轉換後的資料配適 SLR。轉換可以改善 SLR 的非線性、變異數不相同與非常態問題（[[sources/lecture-05]] p.3）。

| 轉換誰 | 主要處理 | 何時用 |
|---|---|---|
| $X$ | 非線性 | 非線性是問題，但常態與變異數相同沒問題 |
| $Y$ | 變異數不相同、非常態 | 誤差分配偏斜、變異數隨 $E(Y)$ 變化 |
| 兩者 | 兩類問題同時存在 | 例如轉換 Y 後關係變彎 |

（[[sources/lecture-05]] p.3, 6）

## 轉換 X：讓關係變直
（[[sources/lecture-05]] p.3–4）
- 適合「非線性，但常態與變異數相同都 OK」的情況。轉換 X 不會改變誤差的分配，所以每個 $X$ 水準的散布程度不變。
- 可能要**先修正非線性**，才能正確評估常態與變異數相同（非線性本身會讓殘差看起來有問題）。
- 依散布圖的形狀選擇（課本 Fig 3.13）：

| 形狀（變異數固定） | 建議的 $X'$ |
|---|---|
| (a) 遞增、越來越平緩（凹向下） | $\log_{10} X$、$\sqrt X$ |
| (b) 遞增、越來越陡（凹向上） | $X^2$、$\exp(X)$ |
| (c) 遞減、越來越平緩 | $1/X$、$\exp(-X)$ |

- 形狀不容易看出來時，用 [[lowess-smoothing|LOWESS]] 畫一條平滑曲線，再找形狀相近的轉換（[[sources/lecture-05]] p.4）。
- 例子：[[sales-training]]。

## 轉換 Y：讓變異數變平、分配變對稱
（[[sources/lecture-05]] p.6–7）
- 非常態與變異數不相同常常一起出現：$E(Y)$ 越大，誤差分配**越偏斜、變異越大**（課本 Fig 3.4c、3.15）。
- 附帶好處：轉換 Y 也可能順便把彎曲的關係拉直。
- 依形狀選擇（課本 Fig 3.15，變異數隨平均變大的三種曲線）：$Y' = \sqrt Y$、$\log_{10} Y$、$1/Y$；圖註提醒同時轉換 X 也可能有幫助或是必要的。
- 殘差對配適值 $\hat Y_i$ 的圖也能提供線索；所以要同時準備**散布圖與殘差圖**來決定轉換。
- 例子：[[plasma-levels]]。

### 變異數與平均的關係 → 該用哪種轉換
講義 p.7 列出殘差對配適值的五種形狀：(a) $\sigma^2 = k$（常數）、(b) $\sigma^2 = k\lvert\mu\rvert$、(c) $\sigma^2 = k\mu$、(d) $\sigma^2 = k\mu^2$、(e) $\sigma = k\mu^{-2}$。

標準的變異數穩定 (variance-stabilizing) 結果如下（補充，非講義內容；Montgomery et al. 2021）：

| 變異數與平均的關係 | 穩定變異數的轉換 |
|---|---|
| $\sigma^2 \propto$ 常數 | 不用轉換 |
| $\sigma^2 \propto \mu$（例如計數資料） | $\sqrt Y$ |
| $\sigma^2 \propto \mu^2$ | $\log Y$ |
| $\sigma^2 \propto \mu^3$ | $1/\sqrt Y$ |
| $\sigma^2 \propto \mu^4$ | $1/Y$ |

> ⚠️ 講義 p.7 圖上把 (c) $\sigma^2 = k\mu$ 標為「logarithm」、(d) $\sigma^2 = k\mu^2$ 標為「square root」，與上表的標準對應相反；wiki 採用標準對應（使用者確認，2026-11-25）。

## 冪次轉換階梯 (ladder of powers)
最常用的是冪次轉換 $Y' = Y^\lambda$，其中 $\lambda = 0$ 另外定義成 $\log_e Y$（[[sources/lecture-05]] p.9）：

| $\lambda$ | −2 | −1 | −1/2 | 0 | 1/2 | 1 | 2 |
|---|---|---|---|---|---|---|---|
| $Y'$ | $1/Y^2$ | $1/Y$ | $1/\sqrt Y$ | $\log_e Y$ | $\sqrt Y$ | $Y$ | $Y^2$ |

$\lambda < 1$ 會壓縮大的值（處理右偏、變異數隨平均變大），越往左壓縮越強。由資料決定 $\lambda$ 的方法見 [[box-cox-transformation]]。

## 幾點注意
（[[sources/lecture-05]] p.9）
1. 處理變異數不相同的常見方法有兩種：轉換（X 或 Y），以及 [[weighted-least-squares|加權最小平方法]]。
2. 關係原本是線性、只有變異數不相同時，轉換 Y 雖然能穩定變異數，卻會把直線變成曲線，所以可能還要轉換 X。例如課本 Fig 3.4(c) 的情況，常把 X 和 Y 都取 log。見 [[transform-y-only-fixes-variance]]。
3. 轉換後的係數要在轉換後的尺度上解讀，見 [[interpreting-transformed-models]]。

## 常見誤解
- [[transform-y-only-fixes-variance]]：轉換 Y 也會改變 $X$ 與 $Y$ 的關係形狀。
- [[transformed-coefficient-original-scale]]：轉換後的 $b_1$ 不是原單位的變化量。

## 教學提示
- 學生常卡關：分不清「什麼時候轉換 X、什麼時候轉換 Y」。口訣：**形狀問題轉 X，散布問題轉 Y**。
- 建議講解順序：轉換 X（銷售訓練）→ 轉換 Y（Plasma）→ 冪次階梯 → Box–Cox → 解讀。
- 可以畫的圖：
  - Fig 3.13 的三種曲線，各配上轉換後變直的樣子（示意圖）。
  - 同一組右偏資料取 $\sqrt{\cdot}$、$\log$、倒數後的直方圖並排。
- 提醒：轉換之後一定要重新畫殘差圖、常態機率圖。
- 相關練習：[[choose-transformation-01]]、[[box-cox-01]]

## 出處
- [[sources/lecture-05]] p.3–4, 6–7, 9
- 變異數穩定轉換表：補充，非講義內容（Montgomery, Peck & Vining 2021）
