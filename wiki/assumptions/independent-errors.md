---
type: assumption
topic: linear
aliases: [Independence of errors, 誤差獨立, serial correlation, 序列相關, autocorrelation]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[slr-error-assumptions]]", "[[residual-plots]]", "[[model-diagnostics]]", "[[remedial-measures]]"]
status: draft
updated: 2026-11-25
---

# 誤差彼此獨立 (Independence of Error Terms)

> 第 $i$ 個誤差的值不受第 $j$ 個誤差影響；資料有時間或空間順序時最容易出問題。

## 假設內容
$\varepsilon_i$ 獨立服從 $N(0, \sigma^2)$：第 $i$ 個誤差的值不依賴第 $j$ 個誤差的值（[[sources/lecture-04]] p.11）。

## 違反的後果
誤差相關時，資料提供的「獨立資訊」比表面上少，以獨立為前提的推論會失準（[[sources/lecture-04]] p.1：假設被違反可能導致無效推論）。

## 如何診斷
**圖形**：殘差對收集順序作圖，檢查**序列相關**（[[sources/lecture-04]] p.11–12）。
- 資料是依時間（或空間）順序取得時，可以看出順序上相鄰的誤差有沒有相關。
- **只有在知道資料收集順序時才適用**。
- 圖中出現趨勢或週期 → 誤差之間有相關。
- 誤差獨立時，殘差應在 0 附近大致隨機地波動。

**例子**（[[sources/lecture-04]] p.12）：
- **時間趨勢**（課本 Fig. 3.8a）：研究焊接面直徑 ($X$) 與焊接點剪力強度 ($Y$)。早期試驗的殘差多為負、後期多為正，誤差明顯相關。
- **週期性**（課本 Fig. 3.8b）：相鄰誤差相關，但呈週期模式、沒有趨勢。

**檢定**：runs 檢定、Durbin–Watson 檢定，見之後的章節（ALSM Chapter 12；[[durbin-watson-test]]）（[[sources/lecture-04]] p.28）。

## 違反時對 LS 的影響
（[[sources/lecture-05]] p.2）觀測依時間排序時，時間相近的誤差可能相關。若仍用假設誤差不相關的線性模型：
- 最小平方估計 $b_0$、$b_1$ 仍然是 $\beta_0$、$\beta_1$ 的**不偏**估計；
- 但變異數估計 $\widehat{Var}(b_j)$、檢定與信賴區間都會**不正確**。

## 對策
有時可以把誤差不獨立看成**漏掉了一個重要變數**（例如時間）（[[sources/lecture-04]] p.12）；把它加進模型就可能解決。

Lecture 05 的整理（[[sources/lecture-05]] p.2；總覽見 [[remedial-measures]]）：
- **最好的做法**：用能處理相關與時間依賴的方法，例如一般化最小平方法 [[generalized-least-squares|GLS]]（ALSM p.430，Ch.11）或時間序列分析（ALSM Ch.12）。
- **簡單的做法**（常能消除大部分相關）：
  - 把時間變數，或落後一期的觀測 $Y_{i-1}$，當作 $Y_i$ 的解釋變數；
  - 改用**一階差分** $Y_i - Y_{i-1}$ 當反應變數。

## 教學提示
- 先問學生：「Toluca 的資料有時間順序嗎？」強調沒有順序資訊就畫不出這張圖。
- 可以畫的圖：殘差對時間的折線圖，一張有趨勢、一張有週期、一張隨機。
- 相關練習：[[residual-patterns-01]]

## 出處
- [[sources/lecture-04]] p.1, 11–12, 28
- [[sources/lecture-05]] p.2
