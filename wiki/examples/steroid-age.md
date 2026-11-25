---
type: example
topic: linear
aliases: [Steroid level and age, 類固醇與年齡]
sources: ["[[sources/lecture-01]]"]
related: ["[[functional-vs-statistical-relation]]", "[[scope-and-extrapolation]]"]
status: draft
updated: 2026-11-23
---

# 類固醇濃度與年齡 (Steroid Level and Age)

> 統計關係不一定是直線：這筆資料的關係是曲線。

## 資料
- 27 位 8 到 25 歲健康女性的年齡 ($X$) 與血漿中類固醇濃度 ($Y$)（[[sources/lecture-01]] p.5；ALSM Figure 1.3）。

## 觀察
- 資料強烈顯示統計關係是**曲線**（非線性）：隨年齡增加，類固醇濃度上升到某個程度後開始趨於平緩（[[sources/lecture-01]] p.5）。
- 因此 $Y = f(X) + \varepsilon$ 中的 $f$ 不應該是直線。

## 延伸討論（補充，非講義內容）
- 資料範圍只有 8–25 歲。若要預測 40 歲女性的類固醇濃度，就是 [[scope-and-extrapolation|外插]]，結果不可信。

## 教學提示
- 用來說明 [[functional-vs-statistical-relation]] 中「$f(X)$ 可以是線性，但不一定」。
- 也可以當作外插的例子：問學生「這個模型能不能拿來預測 40 歲？」
- 相關練習：[[extrapolation-01]]

## 出處
- [[sources/lecture-01]] p.5
