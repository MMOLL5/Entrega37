const between = (pmin, pmax) => {
  return Math.floor(Math.random() * (pmax + 1 - pmin) + pmin);
};

export const calculo = () => {
  const cant = 100000000;
  let obj = [];
  let bandera=false;
    for (let i = 0; i < cant; i++) {
      let num = between(1, 1000);
      let key, value = 0;
      let myObj = obj.find(el => el.clave=num);
      if (myObj = {}){
        let newItem = {clave: num, valor: 1};
        obj.push(newItem);
      }else{
        myObj.valor =+ 1;
      }
    }
    console.log('obj', obj);
    return obj;

  };
  
  process.on('message' , (msg) => {
    if (msg == 'start') {
      console.log('Start randoms');
      const obj = calculo();
  
      if (process && process.send) {
        process.send(obj);
      }
    }
  });