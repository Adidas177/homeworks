// xndir 1

function arrSpacedElem(a,b,step){
    let length = (Math.floor((b-a)/step))
    let result = [];
    result [0] = a;
    for(let i = 0; i<length; i++){
        if(a<=b);
            result.push(a+=step);
    }
    return result
}

undefined

arrSpacedElem(1,5,1)
(5) [1, 2, 3, 4, 5]

arrSpacedElem(10,100,20)
(5) [10, 30, 50, 70, 90]

arrSpacedElem(1,5,0.5)
(9) [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

// xndir 2

function arrMax(array){
    let max = -Infinity;
    for(let i = 0; i<array.length; i++){
        if(array[i]>max)
            max = array[i];
    }
    return max
}

undefined

arrMax([15,25,14,30,1,158])
158
arrMax([1,4,43,-112])
43

// xndir 3

function arrReverse(array){
    let result = [];
    for(let i = 0; i<array.length; i++){
        result.unshift(array[i]);
    }
    return result
}

undefined

arrReverse([1,1,32,4,6])
(5) [6, 4, 32, 1, 1]

// xndir 4

function arrElemProd(array){
    let result = [];
    for(let i = 0; i<array.length-1; i++){
        result.push(array[i]*array[i+1])
    }
    return result
}

undefined

arrElemProd([3, 7, 12, 5, 20, 0])
(5) [21, 84, 60, 100, 0]

arrElemProd([1, 1, 4, 32, 6])
(4) [1, 4, 128, 192]

// xndir 5
// Davit jan,es ete chem sxalvum menq splice-in chenq andradarzel uxxaki splice ogtagorcelov em lucel,vorovhetev ayl tarberak chkar

function isIncluded (array,number){
    for(let i = 0; i<array.length; i++){
       if(array[i]===number){
           array.splice(i,1);    
           return array 
        }
    }
        for(let j = 0; j<array.length; j++){
            if(array[j]!==number){
                array.push(number);
                    return array
        }  
    }
}

undefined

isIncluded([1,2,3],4)
(4) [1, 2, 3, 4]

isIncluded([1,2,3],2)
(2) [1, 3]