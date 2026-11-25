---
type: method
topic: [linear, model-building]
aliases: [General linear test, General linear F test, 一般線性檢定, full model, reduced model, 完整模型, 縮減模型]
sources: ["[[sources/lecture-03]]"]
related: ["[[f-test-anova]]", "[[regression-through-origin]]", "[[cars-stopping-distance]]"]
status: draft
updated: 2026-11-24
---

# 一般線性檢定 (General Linear F Test)

> 比較「完整模型」和「$H_0$ 下的縮減模型」各剩下多少誤差；縮減模型的誤差多太多，就拒絕它。

## 三個步驟
（[[sources/lecture-03]] p.26–27）
1. 定義較大的**完整模型** (full / unrestricted model)：認為最適合資料的模型，參數較多。SLR 中是 $Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$。
2. 定義較小的**縮減模型** (reduced / restricted model)：$H_0$ 描述的模型。例如 $H_0: \beta_1 = 0$ 時把斜率「歸零」，得 $Y_i = \beta_0 + \varepsilon_i$。
3. 用 F 統計量決定要不要放棄縮減模型、改用完整模型。

## 檢定
$H_0$：縮減模型；$H_a$：完整模型（[[sources/lecture-03]] p.27）。
1. 配適完整模型，得 $SSE(F)$，自由度 $df_F$。
2. 配適縮減模型，得 $SSE(R)$，自由度 $df_R$。
3. 一定有 $SSE(F) \le SSE(R)$。統計量：
   $$F^* = \frac{SSE(R) - SSE(F)}{df_R - df_F} \div \frac{SSE(F)}{df_F}$$
4. 拒絕 $H_0$ 若 $F^* > F(1-\alpha;\,df_R - df_F,\,df_F)$；p 值為 $P(F > f^*)$。

## SLR 的特例
$H_0: \beta_1 = 0$ 時（[[sources/lecture-03]] p.27–28）：$SSE(R) = SSTO$、$SSE(F) = SSE$、$df_R = n-1$、$df_F = n-2$，

$$F^* = \frac{SSTO - SSE}{(n-1) - (n-2)} \div \frac{SSE}{n-2} = \frac{MSR}{MSE}$$

和 ANOVA F 檢定完全相同（見 [[f-test-anova]]）。

## 例子
- [[toluca-company]]：縮減模型 $SSE(R) = 307{,}203$（df 24），完整模型 $SSE(F) = 54{,}825$（df 23），$F^* = 105.88$，拒絕縮減模型。
- [[cars-stopping-distance]]：比較無截距（縮減）與有截距（完整）模型，$F^* = 6.77$、p = 0.012，截距不能拿掉。

## 教學提示
- 這個方法是之後多元迴歸「一次檢定多個係數」的基礎，現在先建立「比較兩個模型的 SSE」的直覺。
- 可以畫的圖：同一組資料上的水平線（縮減）與斜線（完整），比較殘差。

## 出處
- [[sources/lecture-03]] p.26–28, 36
