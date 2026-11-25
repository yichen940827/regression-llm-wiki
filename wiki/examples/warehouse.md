---
type: example
topic: linear
aliases: [Warehouse example, Charles Plumbing Supplies, 倉庫例題, 鉛管供應公司]
sources: ["[[sources/lecture-03]]"]
related: ["[[regression-through-origin]]"]
status: draft
updated: 2026-11-24
---

# 倉庫例題：過原點迴歸 (Warehouse Example)

> 工作量為 0 時變動人工成本自然是 0，適合用過原點迴歸。

## 情境
Charles 鉛管供應公司有 12 座倉庫。為了加強規劃與控管，顧問研究各倉庫在測試期間的**工作單位數** ($X$) 與**變動人工成本** ($Y$，美元) 的關係（[[sources/lecture-03]] p.36；ALSM p.163、Table 4.2、Figure 4.1）。

## 資料摘要
（[[sources/lecture-03]] p.37）

| 量 | 值 |
|---|---|
| $n$ | 12 |
| $\sum X_i$ ／ $\sum Y_i$ | 1,359 ／ 6,390 |
| $\sum X_i Y_i$ | 894,714 |
| $\sum X_i^2$ | 190,963 |
| $\sum \hat Y_i$ | 6,367.28 |
| $\sum e_i$ | 22.72（不為 0） |

## 估計
$$b_1 = \frac{\sum X_i Y_i}{\sum X_i^2} = \frac{894{,}714}{190{,}963} = 4.685, \qquad \hat Y = 4.685X$$

每多一個工作單位，平均變動人工成本估計增加約 4.69 美元。

## SAS 輸出（無截距）
（[[sources/lecture-03]] p.38）

| 來源 | df | SS | MS |
|---|---|---|---|
| Model | 1 | 4,191,980 | 4,191,980 |
| Error | 11 | 2,457.66 | 223.42 |
| Uncorrected Total | 12 | 4,194,438 | |

- $F = 18{,}762.5$；Root MSE $= 14.947$；R² $= 0.9994$。
- $b_1 = 4.68527$，標準誤 0.03421，$t = 136.98$，95% 信賴區間 4.60999 到 4.76056。

## 重點
- 誤差自由度是 $n - 1 = 11$；總平方和是**未修正**的 $\sum Y_i^2$，自由度 12。
- 殘差和 22.72 不為 0：沒有截距時，殘差和為 0 的性質不成立。
- R² = 0.9994 是用未修正平方和算的，不能拿來和有截距模型比較。

## 教學提示
- 先問「工作量 0 時成本應該是多少？」來說明為什麼選無截距模型。

## 出處
- [[sources/lecture-03]] p.36–38
