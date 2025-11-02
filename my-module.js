/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges 
 * @param {number} threshold 
 * @returns {Array<[number, number]>} 
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

 
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currentStart, currentEnd] = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const [nextStart, nextEnd] = ranges[i];

 
    if (nextStart <= currentEnd + threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }

  merged.push([currentStart, currentEnd]);
  return merged;
};

module.exports = {
  mergeTimeRanges
};


if (require.main === module) {
  const ranges = [
    [1000, 2000],
    [2500, 4000],
    [3900, 4100],
    [8000, 9000],
    [9050, 9500]
  ];
  const threshold = 200;

  console.log(mergeTimeRanges(ranges, threshold));
}
