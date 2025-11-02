s
# SaralWeb Assignment – Merge Discontinuous Time Ranges

## 🧩 Problem Description
You are given an array of time ranges representing when a system was active.  
Each range is represented as `[start, end)` where:
- `start` and `end` are UNIX timestamps in milliseconds.
- The range includes `start` and excludes `end`.

Ranges may overlap, touch, or have small gaps.  
Gaps smaller than a given **threshold** (in milliseconds) should be treated as continuous and merged.

 Task is to implement a **NodeJS module** that merges such ranges into non-overlapping, sorted intervals.

---

## ⚙️ Function Signature

```javascript
/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges 
 * @param {number} threshold 
 * @returns {Array<[number, number]>} 
const mergeTimeRanges = (ranges, threshold) => {
 
}

module.exports = { mergeTimeRanges };





