---
type: concept
topic: linear
aliases: [Observational data, Experimental data, 觀察資料, 實驗資料, 非實驗資料]
sources: ["[[sources/lecture-01]]"]
related: ["[[correlation-is-not-causation]]", "[[regression-model]]"]
status: draft
updated: 2026-11-23
---

# 觀察資料與實驗資料 (Observational vs. Experimental Data)

> 研究者有沒有「控制並隨機分派」$X$，決定了迴歸結果能不能往因果的方向解讀。

## 定義

**觀察（非實驗）資料**（[[sources/lecture-01]] p.7）
- 研究者沒有控制想研究的解釋變數，只是收集資料。
- 因此觀察到的關聯更可能來自一個同時影響 $X$ 和 $Y$、但沒被測量的變數。
- 迴歸分析經常以觀察資料為基礎。

**實驗資料**（[[sources/lecture-01]] p.7）
- 來自控制實驗：$X$ 的值（常稱為**處理 (treatment)**，例如藥物的不同劑量）(i) 是固定或受控制的，且 (ii) 被**隨機分派**給不同的單位（例如病人）。
- 目的是平衡掉其他未測量變數的影響，從而分離出 $X$ 對 $Y$ 的效果。
- **變異數分析 (ANOVA) 模型**：用來比較多個母體或多種條件，跟迴歸模型很像，但對 $X$ 的值有限制。

## 與因果推論的關係
- 觀察資料對因果幾乎說明不了什麼；實驗資料可以提供較強、但仍非決定性的證據（[[sources/lecture-01]] p.8）。
- 見 [[correlation-is-not-causation]]。

## 比較表

| | 觀察資料 | 實驗資料 |
|---|---|---|
| 研究者控制 $X$？ | 否 | 是 |
| 隨機分派？ | 否 | 是 |
| 未測量變數的干擾 | 可能很大 | 透過隨機分派平衡掉 |
| 因果證據 | 很弱 | 較強，但仍非決定性 |
| 常見分析 | 迴歸 | ANOVA、迴歸 |

## 教學提示
- 學生常卡關：以為「資料量大」就能彌補觀察資料的問題。要強調問題出在未測量的變數，不是樣本數。
- 建議順序：先舉收入與肥胖的例子（[[correlation-is-not-causation]]）→ 問「怎麼設計才能知道 $X$ 會不會造成 $Y$」→ 引出隨機分派。
- 相關練習：[[observational-vs-experimental-01]]

## 出處
- [[sources/lecture-01]] p.7–8
