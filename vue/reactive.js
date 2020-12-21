import observe from "./observe";

function defineReactive(data,key,value){
  observe(value)

  Object.defineProperty(data,key,{
    get(){
      console.log('响应式数据获取:',value)
      return value;
    },
    set(newValue){
      console.log('响应式数据设置:'+newValue);
      observe(newValue)
      if(newValue === value) return;
      value = newValue
    }
  })
}

export default defineReactive