# 迴歸分析講義知識庫（LLM Wiki）

114-1「迴歸分析 I」的講義知識庫，依照 Karpathy 的「LLM Wiki」做法建立：Claude 閱讀講義、撰寫並維護 wiki，使用者負責提供講義、確認重點，並在 Obsidian 中瀏覽。

## 成果

- **Wiki**：[`wiki/`](wiki/)，從 [`wiki/index.md`](wiki/index.md) 開始看，學習順序見 [`wiki/roadmap.md`](wiki/roadmap.md)。
  - 已 ingest Lecture 01–05，共 98 頁：概念、模型假設、推導、方法、例題、練習、常見誤解。
  - 用 Obsidian 開啟 `wiki/` 資料夾，可以看到 `[[連結]]` 與公式。
- **簡報**（GitHub Pages）：
  - [迴歸分析導論](https://yichen940827.github.io/regression-llm-wiki/outputs/slides/regression-introduction.html)（Lecture 01）
  - [簡單線性迴歸的基本理論](https://yichen940827.github.io/regression-llm-wiki/outputs/slides/simple-linear-regression.html)（Lecture 02）
  - [圖文講義：迴歸分析導論](https://yichen940827.github.io/regression-llm-wiki/outputs/handouts/regression-introduction.html)
  - 操作：← → 換頁、N 講者備註、F 全螢幕。

## 結構

| 路徑 | 內容 |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | schema：目錄結構、寫作慣例、Ingest／Query／Lint 與簡報產生流程 |
| `raw/` | 原始講義 PDF（授課老師的著作，只留在本機，不上傳） |
| [`wiki/`](wiki/) | Claude 撰寫的知識頁面，[`log.md`](wiki/log.md) 記錄每次 ingest 與簡報產生 |
| [`outputs/slides/`](outputs/slides/) | html 簡報與共用 theme |
| [`outputs/slides/plans/`](outputs/slides/plans/) | 簡報產生流程的中間檔：`outline.md`（大綱）、`spec.md`（逐頁內容）、`checks.md`（每個節點的檢查紀錄） |
| [`outputs/handouts/`](outputs/handouts/) | 圖文講義 |

## 簡報產生流程（graph）

節點 0 素材盤點 → 節點 1 大綱 → 節點 2 逐頁內容 → 節點 3 產生 html。

- 每個節點都有自動檢查，不通過就自動修正，最多 2 次；之後由使用者確認。
- 使用者檢閱時依問題種類退回：樣式回節點 3、內容回節點 2、結構回節點 1。
- 詳細規則見 `CLAUDE.md` 的「產生簡報」。
