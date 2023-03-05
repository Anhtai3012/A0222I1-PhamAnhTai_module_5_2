import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {Dictionary} from "../model/dictionary";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word:Dictionary;
  constructor(private dictionaryService:DictionaryService) { }

  ngOnInit(): void {
  }

  search(word:string){
    const mean= this.dictionaryService.search(word);
    this.word={
      keyWord:word,
      meaning:mean
    }
  }

}
