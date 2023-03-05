import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys:Dictionary []=[{
    keyWord:"provide",
    meaning:"cung cấp"
  },
    {
      keyWord:"interaction",
      meaning:"tương tác lẫn nhau"
    },
    {
      keyWord:"service",
      meaning:"dịch vụ"
    },
    {
      keyWord:"serve",
      meaning:"phục vụ"
    },
    {
      keyWord:'receptionist',
      meaning:"lễ tân"
    }]
  constructor() {}

  search(word:string){
    if (word===''){
      return '';
    }
    const w = this.dictionarys.find(item => item.keyWord === word.toLowerCase())
    if (w){
      return w.meaning;
    }
    return 'not found'
  }
}
