---
type: exercise
topic: [linear, model-building]
origin: supplementary
difficulty: 1
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[remedial-measures]]", "[[lowess-smoothing]]"]
status: draft
updated: 2026-11-25
---

# 練習：看散布圖選擇轉換

## 題目
（補充題）以下是四組資料的散布圖描述。對每一組，判斷應該轉換 $X$、轉換 $Y$，或兩者都要，並提出一到兩個候選的轉換。

(a) $Y$ 隨 $X$ 遞增，一開始上升很快、之後越來越平緩；每個 $X$ 附近的上下散布程度差不多。
(b) $Y$ 隨 $X$ 遞增，而且越來越陡；散布程度固定。
(c) $Y$ 隨 $X$ 遞減並逐漸變平；$X$ 小的地方點很分散，$X$ 大的地方很集中；誤差分配右偏。
(d) $Y$ 與 $X$ 大致呈直線，但殘差圖呈喇叭形，$\hat Y$ 越大殘差越分散。

> [!hint]- 提示
> 先問：問題是「形狀」（彎曲）還是「散布」（變異數不相同、偏斜）？形狀問題轉 X，散布問題轉 Y。對照課本 Fig 3.13 與 Fig 3.15。

> [!solution]- 詳解
> **(a)** 彎曲、變異數固定 → **轉換 X**。Fig 3.13(a)：$X' = \sqrt X$ 或 $\log_{10} X$。這正是 [[sales-training]] 的情況。
>
> **(b)** 彎曲、變異數固定 → **轉換 X**。Fig 3.13(b)：$X' = X^2$ 或 $\exp(X)$。
>
> **(c)** 散布程度隨 $X$ 改變、又偏斜 → **轉換 Y**，例如 $\log_{10} Y$、$\sqrt Y$ 或 $1/Y$；轉換 Y 也可能順便把曲線拉直。這正是 [[plasma-levels]] 的情況。可以用 [[box-cox-transformation|Box–Cox]] 協助選 $\lambda$。
>
> **(d)** 關係本來是直線，只有變異數不相同 → 轉換 Y（例如 $\log Y$）可以穩定變異數，但會把直線變彎，所以**可能 X 也要轉換**（例如 X、Y 都取 log）；另一個選擇是 [[weighted-least-squares|WLS]]。見 [[transform-y-only-fixes-variance]]。
>
> 所有情況：轉換後都要重新畫散布圖、殘差圖與常態機率圖確認。

## 考到的觀念
- [[variable-transformations]]
- [[remedial-measures]]
- [[transform-y-only-fixes-variance]]
