module.exports = function getZerosCount(number, base) {
      let a = 2
      let b = base
      let ar = []
      let power
      let sum = 0
      while (a <= base && a <= b){
          if (base % a == 0){
            ar = base;
            base = Math.floor(base/a)
            
          } else {
            a++
          }
      }
      for (let i = 1;i <= 10000;i ++)
      {
          power = Math.pow(ar,i)    
          if (number <= power){
            a = i
            break
          }   
      }
      for (let i = a;i >= 1;i --)              
      {
        round = Math.floor(number / Math.pow(ar, i))
          sum = sum + round          
      }
      return sum;
}