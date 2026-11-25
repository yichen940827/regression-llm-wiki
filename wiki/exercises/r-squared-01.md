---
type: exercise
topic: [linear, model-building]
origin: supplementary
difficulty: 1
sources: ["[[sources/lecture-03]]"]
related: ["[[r-squared-and-correlation]]", "[[high-r-squared-good-model]]"]
status: draft
updated: 2026-11-24
---

# 練習：R² 的解讀是非題

## 題目
（補充題）判斷對錯並說明理由。

1. 某簡單迴歸的 R² = 0.02，所以 $X$ 和 $Y$ 沒有關係。
2. R² = 0.85 代表直線模型一定配適得很好。
3. Toluca 的 R² = 0.82，所以預測下一批的工時一定很準。
4. 在簡單線性迴歸中，$r^2 = R^2$。
5. 無截距模型的 R² 比有截距模型高，所以應該選無截距模型。
6. 多加一個解釋變數，R² 可能會下降。

> [!hint]- 提示
> R² 只衡量**線性**關聯，而且是相對 SSTO 的**比例**。

> [!solution]- 詳解
> 1. **錯**：R² 只看線性關聯，可能有很強的曲線關係（ALSM Figure 2.9b）。
> 2. **錯**：關係可能是曲線，直線並不合適（ALSM Figure 2.9a，R² = 0.69）。
> 3. **錯**：下一批 100 件的 90% 預測區間是 332 到 507 小時，仍然很寬；R² 不提供絕對精確度。
> 4. **對**：只在簡單線性迴歸成立；一般而言 $R^2 = r^2_{Y\hat Y}$。
> 5. **錯**：兩者的 SSTO 定義不同（無截距用未修正平方和），R² 不能比；要看 MSE 或做一般線性檢定（[[cars-stopping-distance]]）。
> 6. **錯**：加變數 R² 不會下降。
>
> （[[sources/lecture-03]] p.31–32, 35）

## 考到的觀念
- [[r-squared-and-correlation]]
- [[high-r-squared-good-model]]
