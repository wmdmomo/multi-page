var isEqual = function (arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    return arr1.filter((item, i) => arr2[i] !== item).length === 0

}
var checkInclusion = function (s1, s2) {
    var n = s1.length, m = s2.length
    var cnt1 = new Array(26).fill(0)
    var cnt2 = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)
    for (let i = 0; i < n; i++) {
        cnt1[s1.charCodeAt(i) - base]++
        cnt2[s2.charCodeAt(i) - base]++
    }
    console.log(cnt1, cnt2)
    if (isEqual(cnt1, cnt2)) return true
    for (let i = n; i < m; i++) {
        cnt2[s2.charCodeAt(i) - base]++
        cnt2[s2.charCodeAt(i - n) - base]--
        console.log(cnt1, cnt2)
        if (isEqual(cnt1, cnt2)) {

            return true
        }
    }
    return false
};
console.log(checkInclusion('ab', "eidboaoo"))