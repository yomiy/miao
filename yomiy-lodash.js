// compact,chunk,fill,drop,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth
// fromPairs,toPairs,head,indexOf,lastIndexOf,initial,join,last,pull,reverse,every,some
// countBy,groupBy,keyBy,forEach,map,filter,reduce,reduceRight,size,sortBy,sample,
// isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
// flagMap,flatMapDepth,get,has,mapKeys,mapValues
// range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
// round,ceil,floor,cloneDeep
// trim,trimStart,trimEnd,assign,merge


var yomiy = {
  //chunck函数:以size的大小将数组进行平均分配，最后不足以平均分配的元素就保留原样，最后返回一个新数组
  chunk:function(ary,size){
    var res = []
    for(var i = 0; i < ary.length; i += size){
      result.push(ary.slice(i,i+size))
    }
    return res
  },
  //compact函数：将错误的值移除，错误的值包括false，null，0，"",undefined,NaN,最终返回一个被删选过后的新数组
  compact:function(array){
    var res = []
    for(var item of array){
      if(item){
        res.push(item)
      }
    }
    return res
  },
  //fill函数：
  fill:function(array,val,start = 0,end = array.length){
    for(var i = start; i < end; i++){
      array[i] = val
    }
    return array
  }
  //drop函数
}

