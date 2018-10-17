const add = (a,b) => {
        if(!a && !b) {
          return 0;
        }
      
        return (!b && a) || a + b;
      }
    // if (b === undefined) {
    //     return a;
    // }
    // return a+b;

    // if (!a && !b){
    //     return 0;
    // }
    // return (!b && a) || a + b;
// }
//  return (b === undefined) ? a : a+b;

const substract = (a,b) => {
    if(!a && !b) {
        return 0;
      }
    
      return (!b && a) || a - b;
}



module.exports = {
    add,
    substract
};