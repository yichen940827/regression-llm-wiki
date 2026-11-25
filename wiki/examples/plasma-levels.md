---
type: example
topic: [linear, model-building]
aliases: [Plasma levels example, Plasma 例題, 血漿多元胺濃度, ALSM Table 3.8, log transformation of Y]
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[box-cox-transformation]]", "[[interpreting-transformed-models]]", "[[normality-tests]]"]
status: draft
updated: 2026-11-25
---

# Plasma 例題 (Plasma Levels Example)

> 年紀越大，血漿中的多元胺濃度越低，而且年紀小的孩子變異大得多：曲線加上變異數不相同，取 $\log_{10} Y$ 一次解決兩個問題；Box–Cox 也支持這個選擇。

## 資料
25 位健康兒童的年齡 $X$（歲）與血漿中多元胺 (polyamine) 濃度 $Y$（課本 Table 3.8；[[sources/lecture-05]] p.7）。每個年齡各 5 人（資料取自講義 p.12 的 SAS 程式）：

| 年齡 $X$ | 濃度 $Y$ |
|---|---|
| 0 | 13.44、12.84、11.91、20.09、15.60 |
| 1 | 10.11、11.38、10.28、8.96、8.59 |
| 2 | 9.83、9.00、8.65、7.85、8.88 |
| 3 | 7.94、6.01、5.14、6.90、6.77 |
| 4 | 4.86、5.10、5.67、5.75、6.23 |

## 一、試誤選轉換
（[[sources/lecture-05]] p.8）
1. **原始散布圖**（Fig 3.16a）：明顯的**曲線**關係，而且年紀小的孩子變異比年紀大的大 → 轉換 Y。
2. **取 $Y' = \log_{10} Y$**（Fig 3.16b）：關係變得大致線性，各 $X$ 水準的變異也大致**相同**。
3. **配適 SLR**：
   $$\hat Y' = 1.135 - 0.1023\,X$$
4. **重新診斷**（Fig 3.16c、3.16d）：
   - 殘差對 $X$ 的圖與常態機率圖都支持 SLR。
   - 排序殘差與常態期望值的相關係數 = **0.981**；α = 0.05 時 Table B.6 的臨界值為 **0.959**，支持誤差常態（見 [[normality-tests]]）。

## 二、Box–Cox 的結果
（[[sources/lecture-05]] p.11–12）
對 $\lambda$ 從 −1.0 到 1.0 的各個值算出 SSE（Table 3.9）：

| $\lambda$ | 1.0 | .9 | .7 | .5 | .3 | .1 | 0 |
|---|---|---|---|---|---|---|---|
| SSE | 78.0 | 70.4 | 57.8 | 48.4 | 41.4 | 36.4 | 34.5 |

| $\lambda$ | −.1 | −.3 | −.4 | −.5 | −.6 | −.7 | −.9 | −1.0 |
|---|---|---|---|---|---|---|---|---|
| SSE | 33.1 | 31.2 | 30.7 | **30.6** | 30.7 | 31.1 | 32.7 | 33.9 |

- SSE 在 $\lambda \approx -0.5$ 最小（SAS-JMP 圖 Fig 3.17；R 的 `boxcox` 給 $\hat\lambda = -0.505$）。
- 但 $\lambda$ 在 0 到 −1.0 之間 SSE 都相當平穩，所以先前選的 $\log_{10} Y$（$\lambda = 0$）依 Box–Cox 的觀點並非不合理。
- 選 log 的一個理由是**容易解讀**。用以 10 為底而不是自然對數，不影響 log 轉換是否合適（[[sources/lecture-05]] p.11）。
- Table 3.9 的 SSE 是標準化後的版本，見 [[box-cox-transformation]] 的補充說明。

## 三、解讀
（補充，非講義內容；見 [[interpreting-transformed-models]]）
- 年齡每增加 1 歲，$\log_{10} Y$ 平均減少 0.1023；
- 換成原尺度：濃度乘以 $10^{-0.1023} \approx 0.790$，也就是**每年約下降 21%**。
- 0 歲時的配適值 $10^{1.135} \approx 13.6$；4 歲時 $10^{1.135 - 0.4092} \approx 5.3$。

## 補充驗算
（補充，非講義內容）用上表 25 筆資料重算：$b_0 = 1.1348$、$b_1 = -0.10228$，與講義一致；Table 3.9 的 SSE 也可以用 ALSM 的標準化公式重現。

## 教學提示
- 和 [[sales-training]] 對照：那裡散布程度固定 → 轉換 X；這裡散布程度隨 X 改變 → 轉換 Y。
- 讓學生先從 Table 3.9 找最小值，再討論「為什麼不直接用 −0.5」。
- 可以畫的圖：SSE 對 $\lambda$ 的 U 形曲線（用 Table 3.9 的數字），標出 0 到 −1 的平坦區。
- 相關練習：[[box-cox-01]]、[[log-interpretation-01]]

## 出處
- [[sources/lecture-05]] p.7–8, 11–12
