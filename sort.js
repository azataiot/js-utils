function bubbleSort(a) {
  let exchange = a.length - 1
  while(exchange != 0) {
    let bound = exchange 
    exchange = 0
    for(let i=0;i<bound;i++) {
      if(a[i] > a[i+1]) {
        let tmp = a[i]
        a[i] = a[i+1]
        a[i+1] = tmp
        exchange = i
      }
    }
  }
  return a
}
function partition(r, first, end) {
  let i = first, j = end
  while(i < j) {
    while(i < j && r[i] <= r[j])j--
    if(i < j) {
      let tmp = r[i]
      r[i] = r[j]
      r[j] = tmp
      i++
    }
    while(i < j && r[i] <= r[j])i++
    if(i < j) {
      let tmp = r[i]
      r[i] = r[j]
      r[j] = tmp
    }
  }
  return i
}
function quickSortFn(r, first, end) {
  if(first < end) {
    let pivot = partition(r, first, end)
    quickSortFn(r, first, pivot-1)
    quickSortFn(r, pivot+1, end)
  }
}
function quickSort(a) {
  quickSortFn(a, 0, a.length-1)
  return a
}
function insertSort(a) {
  for(let i=1,len=a.length;i<len;i++) {
    let tmp = a[i]
    for(let j=i-1;j>=0 && tmp < r[j];j--) {
      r[j+1] = r[j]
    }
    r[j+1] = tmp
  }
  return a
}
function shellSort(a) {
  for(let d=parseInt(a.length/2);d>0;d=parseInt(d/2)) {
    for(let i=d;i<a.length;i++) {
      let tmp = a[i]
      for(j=i-d;j>=0 && tmp<a[j];j=j-d) {
        a[j+d] = a[j]
      } 
      a[j+d] = tmp
    }
  }
  return a
}
function selectSort(a) {
  let minIndex = 0
  for(let i=0,len=a.length;i<len;i++) {
    minIndex = i
    for(let j=i+1;j<len;j++) {
      if(a[j] < a[minIndex]) minIndex = j
    }
    if(minIndex != i) {
      let tmp = a[i]
      a[i] = a[minIndex]
      a[minIndex] = tmp
    }
  }
  return a
}
function sift(r, k, m) {  // 大根堆
  // k为当前要筛选的节点，m为最后一个节点
  let i = k, j = 2*i+1 // i为当前筛选节点，其左孩子2i+1，其右孩子2i+2，j指向左孩子
  while(j <= m) {
    if(j < m && r[j] < r[j+1])j++  // 比较左右孩子，将j指向最大者
    if(r[i] > r[j])break
    else {
      let tmp = r[i]
      r[i] = r[j]
      r[j] = tmp
      i = j
      j = 2*i+1
    }
  }
  return r
}
function heapSort(a) { // 堆排序
  let n = a.length
  for(let i = parseInt(n/2)-1;i>=0;i--) {
    sift(a, i, n-1)
  }
  for(let i = n-1; i>=0; i--) {
    let tmp = a[i]
    a[i] = a[0]
    a[0] = tmp
    sift(a, 0, i-1)
  }
  return a
}
function merge(r, r1, s, m, t) { // 两两归并
  // r待归并数组，r1已归并数组，待归并数组下标[s~m] [m+1~t]
  let i=s,j=m+1,k=s
  while(i<=m && j<=t) {
    if(r[i] <= r[j]) r1[k++] = r[i++]
    else r1[k++] = r[j++]
  }
  if(i<=m) {
    while(i<=m) r1[k++]=r[i++]
  } else {
    while(j<=t) r1[k++]=r[j++]
  }
}
function mergePass(r, r1, n, h) { // 一趟归并
  // r待归并，r1已归并，n总长度， h待归并数组的长度1/2/4/8/16
  let i = 0 // 指向待归并的第一个记录
  while(i <= n-2*h+1) { // 待归并记录至少有两个长度为h的子序列
    merge(r, r1, i, i+h-1, i+2*h-1)
    i += 2*h
  }
  if(i<n-h+1) {
    merge(r,r1,i,i+h-1,n)
  } else {
    for(let k=i;k<=n;k++) {
      r1[k] = r[k]
    }
  }
}
function mergeSort(a) { // 归并排序非递归实现
  let h = 1, n = a.length, sr = aay.from(a)
  while(h<n) {
    mergePass(a,sr,n-1,h)
    h = 2*h
    mergePass(sr,a,n-1,h)
    h = 2*h
  }
  return a
}
export default {
  bubbleSort,
  quickSort,
  insertSort,
  shellSort, 
  selectSort,
  heapSort,
  mergeSort
}