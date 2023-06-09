  class Vector{
    constructor(x,y){
      this.x = x
      this.y = y
    }
    plus(vector){
      var x = this.x + vector.x
      var y = this.y + vector.y
      return new Vector(x, y)
    }
    minus(vector){
      var x = this.x - vector.x
      var y = this.y - vector.y
      return new Vector(x, y)
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  }

  class Complex{
    constructor(real, imag){
      this.real = real
      this.imag = imag
    }
    plus(c){
      var real = this.real + c.real
      var imag = this.imag + c.imag
      return new Complex(real, imag)
    }
    minus(c){
      var real = this.real - c.real
      var imag = this.imag - c.imag
      return new Complex(real, imag)
    }
    mul(c){
      var real = this.real * c.real - this.imag * c.imag
      var imag = this.real * c.imag + this.imag * c.real
      return new Complex(real, imag)
    }
    div(c){
      var helper = new Complex(c.real, -c.imag)
      var up = this.mul(helper)
      var down = c.mul(helper) 
      var real = up.real / down.real
      var imag = up.imag / down.real
      return new Complex(real, imag)
    }
  }

  class LinkedList{
    constructor(){
      this.head = null
      this.tail = null
    }
    append(val){
      var node = {
        val: val, 
        next: null
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
    prepend(val) {
      var node = {
        val: val,
        next: null
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
    at(idx) {
      if (this.head === this.tail === null) return null
      var p = this.head
      var count = 0
      while (count < idx) {
        p = p.next
        count++
      }
      return p.val
    }
    get size () {
      var p = this.head
      var l = 0
      while (p) {
        l++
        p = p.next
      }
      return l
    }
  }

  class Stack{
    constructor(){
      this.head = null
      this.count = 0
    }
    push(val){
      var node = {
        val, next: null
      }
      if(!this.head){
        this.head = node
      }else{
        node.next = this.head
        this.head = node
      }
      this.count++
    }

    pop(){
      if(!this.head){
        return undefined
      }
      this.count--
      var p = this.head.val
      this.head = this.head.next
      return p
    }

    get size(){
      return this.count
    }
  }

  class Queue{
    constructor(){
      this.head = null
      this.tail = null
      this.count = 0
    }
    add(val){
      var ndoe ={
        val,next:null
      }
      if(!this.head){
        this.head = this.tail =node
      }
      this.tail.next = node
      this.tail = node
      this.count++
    }

    pop(){
      if(!this.head){
        return
      }
      this.count--
      if(this.head == this.tail){
        var p = this.head.val
        this.head = this.tail = null
        return p 
      }
      var p = this.head.val
      this.head = this.head.next
      return p
    }

    get size(){
      return this.count
    }
  }

  class Myset{
    constructor(){
      this.MyMap = new MyMap()
    }
    add(key,val){
      return this.MyMap.set(key, val)
    }
    get(key) {
      return this.MyMap.get(key)
    }
    has(key) {
      return this.MyMap.has(key)
    }
    delete(val) {
      return this.MyMap.delete(val)
    }
    get size() {
      return this.MyMap.size
    }
  }

  class MyMap{
    constructor(){
      this._keys = []
      this._vals = []
    }
    set(key, val){
      var keyIdx = this._keys.indexOf(key)
      if (keyIdx >= 0) {
        this._vals[keyIdx] = val
      } else {
        this._keys.push(key)
        this._vals.push(val)
      }
        return this
     }
    get(key){
      var keyIdx = this._keys.indexOf(key)
      if (keyIdx >= 0) {
        return this._vals[keyIdx]
      }
    }
    has(key) {
      if (this._keys.includes(key)) {
        return true
      } else {
        return false
      }
    }
    delete(key) {
      var keyIdx = this._keys.indexOf(key)
      if (keyIdx >= 0) {
        this._keys.splice(keyIdx, 1)
        this._vals.splice(keyIdx, 1)
        return true
      }
      return false
    }
    get size() {
      return this._keys.length
    }
  }
