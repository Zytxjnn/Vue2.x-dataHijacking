import reactive from "./reactive";
import {arrMethods} from "./array";
import observeArr from "./observeArr";

function Observer(data){
  if(Array.isArray(data)){  // 数组和对象做不同的处理
    data.__proto__  = arrMethods;
    observeArr(data)
  }else{
    this.walk(data);
  }
}

Observer.prototype.walk = function (data){
  var keys = Object.keys(data);

  for(var i = 0;i < keys.length;i++){
    var key = keys[i],
        value = data[key];

    reactive(data,key,value);
  }
}

export default Observer