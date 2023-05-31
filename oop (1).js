

function Vector(x, y) {
  'use strict'
  this.x = x
  this.y = y
}
Vector.prototype.plus = function(vector) {
  // 'this' is also a vector
  var x = this.x + vector.x
  var y = this.y + vector.y
  return new Vector(x, y)
}
Vector.prototype.minus = function(vector) {
  // 'this' is also a vector
  var x = this.x - vector.x
  var y = this.y - vector.y
  return new Vector(x, y)
}
Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
})

var a = new Vector(2, 3)
var b = new Vector(3, -1)



function Complex(real, imag) {
  this.real = real
  this.imag = imag
}
Complex.prototype.plus = function(c) {
  var real = this.real + c.real
  var imag = this.imag + c.imag
  return new Complex(real, imag)
}
Complex.prototype.minus = function(c) {
  var real = this.real - c.real
  var imag = this.imag - c.imag
  return new Complex(real, imag)
}
Complex.prototype.mul = function(c) {
  var real = this.real * c.real - this.imag * c.imag
  var imag = this.real * c.imag + this.imag * c.real
  return new Complex(real, imag)
}
Complex.prototype.div = function(c) {
  var helper = new Complex(c.real, -c.imag)
  var up = this.mul(helper)
  var down = c.mul(helper) // down的虚部应该是0
  var real = up.real / down.real
  var imag = up.imag / down.real
  return new Complex(real, imag)
}


function Stack() {
  this.head = null
  this.nodeCount = 0
}
// 添加一个元素到栈中
Stack.prototype.push = function(val) {
  var node = {
    val, next: null
  }
  this.nodeCount++
  if (this.head == null) {
    this.head = node
  } else {
    node.next = this.head
    this.head = node
  }
}
// 从栈中取出一个元素，先添加的是后被取出的
// 栈为空时返回undefined
Stack.prototype.pop = function() {
  if (this.head == null) {
    return undefined
  }
  this.nodeCount--
  var result = this.head.val
  this.head = this.head.next
  return result
}
// 返回栈的长度
Object.defineProperty(Stack.prototype, 'size', {
  get: function() {
    return this.nodeCount
  }
})



function Queue() {
  this.head = null
  this.tail = null
  this.nodeCount = 0
}
// 添加一个元素到队列中
Queue.prototype.add = function(val) {
  var node = {
    val, next: null
  }
  if (this.head == null) {
    this.head = this.tail = node
  }

  this.tail.next = node
  this.tail = node
  this.nodeCount++
}
// 从队列中取出一个元素，先添加的是先被取出的
// 队列为空时返回undefined
Queue.prototype.pop = function() {
  // 没有结点时
  if (this.head == null) {
    return
  }
  this.nodeCount--
  // 只有一个结点时
  if (this.head == this.tail) {
    var result = this.head.val
    this.head = this.tail = null
    return result
  }

  var result = this.head.val
  this.head = this.head.next
  return result
}
// // 返回队列的长度
// Queue.prototype.size = function() {
//   return this.nodeCount
// }
Object.defineProperty(Queue.prototype, 'size', {
  get: function() {
    return this.nodeCount
  }
})



function LinkedList(...initVals) {
  this.head = null
  this.tail = null

  for (var item of initVals) {
    this.append(item)
  }
}


// 往链表的末尾增加一个元素
LinkedList.prototype.append = function(val) {
  var node = {
    val, next: null
  }
  if (this.head == null) {
    this.head = this.tail = node
    return
  } else {
    this.tail.next = node
    this.tail = node
    return
  }
}
// 往链表的头部增加一个元素
LinkedList.prototype.prepend = function(val) {
  var node = {
    val, next: null
  }
  if (this.head == null) {
    this.head = this.tail = node
    return
  } else {
    node.next = this.head
    this.head = node
    return
  }
}
// 返回链表第idx个元素
LinkedList.prototype.at = function(idx) {
  var p = this.head
  var count = 0
  while (count < idx) {
    p = p.next
    count++
  }
  return p.val
}

Object.defineProperty(LinkedList.prototype, 'size', {
  get: function() {
    var p = this.head
    var l = 0
    while(p) {
      l++
      p = p.next
    }
    return l
  }
})



function MySet() {
  this._elements = [] // 用以存储集合里的元素们
}
MySet.prototype.add = function(val) {
  if (!this.has(val)) {
    this._elements.push(val)
  }
}
MySet.prototype.delete = function(val) {
  if (this.has(val)) {
    var idx = this._elements.indexOf(val)
    this._elements.splice(idx, 1)
  }
}
MySet.prototype.has = function(val) {
  return this._elements.includes(val)
} // -> boolean
Object.defineProperty(MySet.prototype, 'size', {
  get: function() {
    return this._elements.length
  }
})


function MyMap(...args) {
  this._keys = []
  this._vals = []
}

// 设置key的映射目标，如果不存在，增加一组映射，如果存在就修改 obj[key] = val
MyMap.prototype.set = function(key, val) {
  var keyIdx = this._keys.indexOf(key)
  if (keyIdx >= 0) {
    this._vals[keyIdx] = val
  } else {
    this._keys.push(key)
    this._vals.push(val)
  }
  return this
}
// 获取key的映射目标 obj[key]
MyMap.prototype.get = function(key) {
  var keyIdx = this._keys.indexOf(key)
  if (keyIdx >= 0) {
    return this._vals[keyIdx]
  }
}
// 判断是否存在key这个映射   key in obj
MyMap.prototype.has = function(key) {
  if (this._keys.includes(key)) {
    return true
  } else {
    return false
  }
}
// 删除key及key的映射  delete obj[key]
// 返回是否删除成功
MyMap.prototype.delete = function(key) {
  var keyIdx = this._keys.indexOf(key)
  if (keyIdx >= 0) {
    this._keys.splice(keyIdx, 1)
    this._vals.splice(keyIdx, 1)
    return true
  }
  return false
}
Object.defineProperty(MyMap.prototype, 'size', {
  get: function() {
    return this._keys.length
  }
})


var m = new MyMap()

m.set('foo', 8)

console.log(m.get('foo'))
