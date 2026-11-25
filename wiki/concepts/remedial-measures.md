---
type: concept
topic: [linear, model-building]
aliases: [Remedial measures, 補救方法, 補救措施, model failures, 模型失效]
sources: ["[[sources/lecture-05]]"]
related: ["[[model-diagnostics]]", "[[variable-transformations]]", "[[box-cox-transformation]]", "[[outliers]]", "[[independent-errors]]"]
status: draft
updated: 2026-11-25
---

# 補救方法 (Remedial Measures)

> 診斷是「找出病因」，補救是「對症下藥」：要嘛換一個更合適的模型，要嘛轉換資料讓簡單線性迴歸重新成立。

## 定義
當 [[model-diagnostics|模型診斷]] 顯示 SLR 不適合資料時，用來修正模型的方法。診斷可能發現的問題有（[[sources/lecture-05]] p.1）：
1. 平均 $E(Y \mid X)$ 不是 $X$ 的線性函數。
2. 誤差變異數 $Var(\varepsilon_i)$ 不是常數，稱為**異質變異** (heteroscedasticity)。
3. $\varepsilon_i$ 不是常態分配。
4. 不同的 $\varepsilon_i$ 彼此相關。
5. 某些觀測是離群值，模型不適用於它們。

## 兩條路線
（[[sources/lecture-05]] p.1）
1. **放棄 SLR**，改用更合適（通常也更複雜）的模型。
2. **轉換資料**，讓 SLR 在轉換後的資料上成立，見 [[variable-transformations]]。

## 放棄 SLR 時的方法

| 問題 | 方法 | ALSM 章節 |
|---|---|---|
| 非線性 | 換成其他函數，例如二次或指數函數 | Ch.7 |
| 變異數不相同 | 加權最小平方法 [[weighted-least-squares\|WLS]] | Ch.11 |
| 誤差不獨立 | 資料與時間有關時，用時間序列模型 | Ch.12 |
| 遺漏重要的解釋變數 | 複迴歸模型 | Ch.6 |
| 離群值 | 穩健估計 [[robust-regression\|robust estimation]] | Ch.11 |
| 非常態 | 其他類型的模型 | Ch.14 |

（[[sources/lecture-05]] p.2）本課程只簡短討論誤差相關與離群值兩項：
- 誤差相關：見 [[independent-errors]] 的「對策」。
- 離群值：見 [[outliers]] 的「處理方式」。

## 轉換資料時的分工
（[[sources/lecture-05]] p.3）
- **轉換 X**：處理非線性。
- **轉換 Y**：處理變異數不相同或非常態。
- 有時 X 和 Y 都要轉換。
- 轉換一定是**試誤** (trial and error) 的過程：轉換後要重新診斷。

## 問題與對策對照

| 問題 | 轉換 | 換模型 |
|---|---|---|
| 非線性（變異數正常） | 轉換 X：$\sqrt X$、$\log X$、$X^2$、$1/X$… | 多項式、非線性迴歸 |
| 變異數不相同、非常態 | 轉換 Y：$\sqrt Y$、$\log Y$、$1/Y$；[[box-cox-transformation\|Box–Cox]] | WLS |
| 誤差相關 | 一階差分 $Y_i - Y_{i-1}$ | GLS、時間序列 |
| 離群值 | — | 穩健估計 |

## 例子
- [[sales-training]]：非線性、變異數穩定 → 轉換 X。
- [[plasma-levels]]：曲線且變異數不相同 → 轉換 Y。

## 教學提示
- 用「看病」比喻：Lecture 04 是檢查，這一講是開藥。先複習 6 種問題，再一一對應到藥方。
- 建議講解順序：兩條路線 → 放棄模型的方法表（只介紹名稱）→ 轉換（本講重點）。
- 強調「轉換之後要再做一次診斷」，形成「診斷 → 補救 → 再診斷」的循環。
- 可以畫的圖：「問題 → 對策」的對照流程圖。
- 相關練習：[[choose-transformation-01]]

## 出處
- [[sources/lecture-05]] p.1–3
