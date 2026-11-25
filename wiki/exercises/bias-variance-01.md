---
type: exercise
topic: [linear, model-building]
origin: lecture
difficulty: 1
sources: ["[[sources/lecture-01]]"]
related: ["[[bias-variance-tradeoff]]"]
status: draft
updated: 2026-11-23
---

# 練習：從靶心圖判斷偏誤與變異

## 題目
（[[sources/lecture-01]] p.9）四個靶上各有幾次射擊的落點（靶心代表我們想預測的正確值）：

- (a) 落點分散，而且整體偏離靶心
- (b) 落點分散，但圍繞著靶心
- (c) 落點很集中，但集中在偏離靶心的位置
- (d) 落點很集中，而且集中在靶心

請判斷每個靶是 Low / High Bias、Low / High Variance。

> [!hint]- 提示
> 偏誤看的是「落點的中心」離靶心多遠；變異看的是「落點彼此」有多分散。

> [!solution]- 詳解
> | 靶 | 偏誤 | 變異 | 理由 |
> |---|---|---|---|
> | (a) | 高 | 高 | 中心偏離靶心，落點也分散 |
> | (b) | 低 | 高 | 中心大致在靶心，但落點分散 |
> | (c) | 高 | 低 | 落點集中，但集中處不在靶心 |
> | (d) | 低 | 低 | 落點集中在靶心，是最理想的情況 |

## 考到的觀念
- [[bias-variance-tradeoff]]：偏誤（準確度）與變異（精確度）的定義
