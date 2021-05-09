export const getrandom = (data)=>{
    let n = data;
    let array = [];
    for(let i =0 ; i<n ; i++){
        array.push({
            value : Math.floor((Math.random() * 50) + 1),
            curr : 0
        });
    }
    return array;
}

export const getRandomColor = ()=>{
    const arr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let first   = arr[Math.floor((Math.random() * 15) + 0)];
    let second  = arr[Math.floor((Math.random() * 15) + 0)];
    let third   = arr[Math.floor((Math.random() * 15) + 0)];
    let fourth  = arr[Math.floor((Math.random() * 15) + 0)];
    let fifth   = arr[Math.floor((Math.random() * 15) + 0)];
    let sixth   = arr[Math.floor((Math.random() * 15) + 0)];
    const color = '#' + first + second + third + fourth + fifth + sixth;
    return color;


}