## 设计文档

### 拖拽过程所可能的情况
  首先明确几个概念,以根节点为中心,思维导图可以划分为左右两部分,左边部分在下面称为左节点,右边部分称为右节点 
1. 拖动左边的元素
  - 最终目标点在左边
    > 计算方式: 小于根节点的offsetLeft 并且  小于
  - 最终目标点在右边
2. 拖动右边的元素
  - 最终目标点在左边
  - 最终目标点在右边