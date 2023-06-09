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
      res.push(ary.slice(i,i+size))
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
  },
  //drop函数：从头开始删除n个元素，最终返回新数组
  drop:function(array,n = 1){
    return array.slice(n)
  },
  //findIndex：

  //findLastIndex:

  //flatten:减少一级array的嵌套深度
  flatten:function(array){
    var res = []
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        res = res.push(...array[i])
      }else{
        res.push(array[i])
      }
    }
    return res
    },
    //flattendeep函数：将数组递归为一个一维数组
    //思路：遍历整个数组，如果是数组再递归调用，如果不是数组，就将该值传到新数组里
    flattenDeep:function(array){
      var res = []
      for(var i = 0; i < array.length; i++){
        if(array[i] instanceof Array){
          yomiy.flattenDeep(array[i])
        }else{
          res.push(array[i])
        }
      }
      return res
    },
    //flattenDepth函数：根据给定的flatten递归减少数组的层级
    flattenDepth:function(array,depth = 1){
      for(var i = 0; i < depth; i++){
        array = array.flat()
      }
      return array
    },
    //fromPairs函数：将数组对应的项转换为对象
    fromPairs:function(pairs){
      var map = {}
      for(var item of pairs){
        map[item[0]] = item[1]
      }
      return map
    },

    //toPairs函数：将对象转换为相应的数组

    //head函数：获取数组的第一个元素
    head:function(array){
      if(array.length == 0){
        return undefined
      }else{
        return array[0]
      }
    },
    //indexOf()
    indexOf:function(array,value,fromIndex = 0){
      if(fromIndex < 0){
        fromIndex = fromIndex + array.length
      }
      for(var i = fromIndex; i < array.length; i++){
        if(array[i] == value)
        return i
      }
      return -1
    },

    //lastIndexOf()
    lastIndexOf:function(array,value,fromIndex = array.length - 1){
      for(var i = fromIndex; i > 0; i--){
        if(array[i] == value){
          return i
        }
      }
      return -1
    },

    //initial函数：获取除最后一个元素以外的所有元素
    initial:function(array){
      return array.slice(0,array.length - 1)
    },

    //join函数：将数组以给定的符号拼接
    join:function(array,separator = ','){
      let res = array[0]
      if(array.length < 0 ){
        return
      }
      for(let i = 1; i < array.length; i++){
        res = res + separator + array[i]
      }
      return res
    },

    //last函数：获取数组的最后一个元素
    last:function(array){
      return array[array.length - 1]
    },

    //pull函数：给定一个value值，将数组中与value值相同的值删除。
    pull:function(array,val){
      var res = []
      for(var i = 0; i < array.length; i++){
        if(array[i] !== val){
          res.push(array[i])
        }
      }
      return res
    },

    //reverse函数：原地反转一个数组
    reverse:function(array){
      var n = array.length
      for(var i = 0; i < n / 2; i++){
        var temp = array[i]
        array[i] = array[n - i - 1]
        array[n - i - 1] = temp
      }
    }

    //every函数：
}

