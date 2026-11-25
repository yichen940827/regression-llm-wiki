---
type: method
topic: linear
aliases: [Normal probability plot, Normal QQ plot, 常態機率圖, 常態分位圖, qqnorm]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[normal-errors]]", "[[normality-tests]]", "[[residual-plots]]", "[[sales-training]]", "[[plasma-levels]]"]
status: draft
updated: 2026-11-25
---

# 常態機率圖 (Normal Probability Plot)

> 把排序後的殘差和「常態下應有的值」對照作圖；點大致成一直線，就支持誤差是常態。

## 想法
我們假設 $\varepsilon_i \overset{iid}{\sim} N(0, \sigma^2)$，但看不到誤差。殘差是它的對應，所以如果 $e_i$ 看起來像 iid $N(0, MSE)$，就相信這個假設合理（[[sources/lecture-04]] p.6）。

## 期望值
若 $e_i$ 是 iid $N(0, MSE)$，第 $k$ 小的殘差的期望值為（[[sources/lecture-04]] p.7；ALSM p.111）：

$$\sqrt{MSE}\; z(A), \qquad A = \frac{k - 0.375}{n + 0.25}$$

- $k$ 是殘差的排名；$z(A)$ 是標準常態的第 $100A$ 百分位。
- **常態機率圖**：排序後的殘差 $e_i$ 對期望值 $\sqrt{MSE}\, z(A)$ 作圖。
- R 的 `qqnorm` 畫的是 $e_i$ 對 $z(A)$，$n \le 10$ 時 $A = (k - 0.375)/(n + 0.25)$，$n > 10$ 時 $A = (k - 0.5)/n$，稱為**常態分位圖**。

## 怎麼看
（[[sources/lecture-04]] p.5–7）
- 圖大致是一條直線 → 有證據支持誤差是常態。
- 偏離直線 → 常態假設可能被違反。常見的偏離：分配偏斜（不對稱）、尾巴比常態輕或重。
- 也可以用盒形圖、直方圖、莖葉圖看殘差分配，但常態機率圖通常更有用。

## 注意座標軸
（[[sources/lecture-04]] p.9）
- 常見畫法：$y$ 軸是排序的樣本殘差、$x$ 軸是對應的期望值（理論分位數）。
- R 的 `qqnorm` 預設 $x$ 軸是理論常態分位數；用 `datax = TRUE` 會把兩軸對調。**沒注意到兩軸對調，對偏斜方向的判斷可能會相反。**

## 檢查順序
有些統計學家建議最後才檢查常態，因為非線性和變異數不相同都會影響常態機率圖（[[sources/lecture-04]] p.10）。

## 例子
- [[toluca-company]]：講義列出 25 個殘差的排名、$z(A)$ 與期望值；例如最大殘差 103.53（排名 25）的期望值為 $\sqrt{2384} \times 1.964 = 95.91$。圖接近直線。
- [[sales-training]]：轉換 $X' = \sqrt X$ 後，排序殘差與期望值的相關係數 0.979 > 臨界值 0.879（α = 0.01，n = 10）（[[sources/lecture-05]] p.6）。
- [[plasma-levels]]：轉換 $Y' = \log_{10} Y$ 後，相關係數 0.981 > 臨界值 0.959（α = 0.05，n = 25）（[[sources/lecture-05]] p.8）。

## 正式檢定
把這張圖量化：排序殘差與期望值的相關係數，見 [[normality-tests]] 的常態相關檢定。

## 教學提示
- 讓學生手算 3、4 個點的 $A$ 與 $z(A)$，理解圖是怎麼來的。
- 可以畫的圖：常態、右偏、重尾三種殘差的 QQ 圖並排。

## 出處
- [[sources/lecture-04]] p.5–10
- [[sources/lecture-05]] p.6, 8
