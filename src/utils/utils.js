export const getrandom = ()=>{
    let n = 50;
    let array = [];
    for(let i =0 ; i<n ; i++){
        array.push({
            value : Math.floor((Math.random() * 50) + 1),
            curr : 0
        });
    }
    return array;
}