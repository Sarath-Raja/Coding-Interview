// Write a program to rearrange a given array in such a way that the odd and even number should be in the sequence. The condition is odd number should start in descending order and even numbers should start in ascending order
// Example: Input [1,3,7,8,-10,4,2,14] Output: [7,-10,3,2,1,4,8,14]


function arrage(arr) {
    const evenArr = arr.filter((num) => {
        if(num == 0) return true;
        else if(num%2 == 0) return num;
    })
    const oddArr = arr.filter((num) => {
        if(num%2 !== 0) { return num; }
    })
    evenArr.sort((a, b)=>{
        return a-b;
    })
    oddArr.sort((a, b)=>{
        return b-a;
    })
    // console.log(evenArr)
    // console.log(oddArr)

    let resArr = [];
    let c1 = 0;
    let c2 = 1;
    oddArr.forEach(n => {
        resArr[c1] = n;
        c1 = c1+ 2
    })
    
    evenArr.forEach(n => {
        resArr[c2] = n;
        c2 = c2+ 2
    })

    console.log(resArr)
}
arrage([-1,-3,0,7,4,2,10,5,3]);