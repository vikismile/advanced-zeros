module.exports = function getZerosCount(number, base) {
  let a = 2
  let b = 1
  let ar = []
  let power
  let sum = 0
  while (a <= base){
      if (base % a == 0){
        if(a==ar){b++}
        if(a!==ar){
          b=0
          power = base % a 
          if(power%a==0){b++}
        }
        ar = a;
        base = Math.floor(base/a)
        
      } else {
        a++
      }
  }
  for (let i = 1;i <= 10000;i ++)
  {
    round = Math.floor(number / Math.pow(ar, i))
    sum = sum + round          
      }
  if(b>1){
    sum=Math.floor(sum/b)
  }
      return sum;
}