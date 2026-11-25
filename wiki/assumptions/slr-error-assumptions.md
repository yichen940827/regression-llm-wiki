---
type: assumption
topic: linear
aliases: [SLR error assumptions, 誤差項假設, Gauss–Markov assumptions, 誤差三假設]
sources: ["[[sources/lecture-02]]", "[[sources/lecture-04]]"]
related: ["[[simple-linear-regression]]", "[[normal-errors]]", "[[gauss-markov-theorem]]"]
status: draft
updated: 2026-11-24
---

# SLR 的誤差假設 (Error Assumptions in SLR)

> 誤差平均為 0、變異數都一樣、彼此不相關。只靠這三條，就能推出最小平方估計量的平均和變異數。

## 假設內容
誤差項 $\varepsilon_i$ 是隨機變數，滿足（[[sources/lecture-02]] p.2）：
1. **平均為 0**：$E(\varepsilon_i) = 0$，對所有 $i$。
2. **變異數相同**：$Var(\varepsilon_i) = \sigma^2$，對所有 $i$ 都一樣；$\sigma^2$ 是未知參數。
3. **彼此不相關**：$Cov(\varepsilon_i, \varepsilon_j) = 0$，對任兩個不同的 $i \neq j$。因為 $Corr(\varepsilon_i, \varepsilon_j) = Cov(\varepsilon_i, \varepsilon_j)/\sqrt{Var(\varepsilon_i)Var(\varepsilon_j)}$，這表示任兩個單位的誤差不相關。

此時**還沒有**對誤差的分配做任何假設（[[sources/lecture-02]] p.2）。

## 推出的結果
- $Y_i$ 的平均、變異數、共變異數：見 [[simple-linear-regression]]。
- 最小平方估計量不偏、變異數公式：見 [[ls-unbiasedness-and-variance]]。
- 最小平方估計量是 BLUE：見 [[gauss-markov-theorem]]。

## 什麼時候還不夠
要做**統計推論**（信賴區間、假設檢定），必須再指定誤差的完整分配，通常假設常態，見 [[normal-errors]]（[[sources/lecture-02]] p.16）。

## 違反的後果、診斷與對策
每條假設各有專頁（[[sources/lecture-04]]）：
- 變異數相同：[[constant-error-variance]]
- 彼此獨立（不相關）：[[independent-errors]]
- 常態（推論時另加的假設）：[[normal-errors]]
- 模型本身的線性：[[linearity-of-regression-function]]

整體的診斷流程見 [[model-diagnostics]]。

## 教學提示
- 學生常卡關：以為「誤差平均為 0」代表每個誤差都很小。要說明是「平均」為 0，個別誤差可大可小。
- 三條假設可以對應到 $Y_i$ 的三個性質（平均、變異數、共變異數），建議並排寫。
- 可以畫的圖：每個 $X$ 上一個寬度相同、以迴歸線為中心的分配（變異數相同）。

## 出處
- [[sources/lecture-02]] p.2, 16
- [[sources/lecture-04]] p.1
