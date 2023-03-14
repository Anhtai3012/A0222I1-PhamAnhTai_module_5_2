import { Pipe, PipeTransform } from '@angular/core';
import {Contract} from "./model/contract";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(contracts: Contract[],searchValue :string): Contract[] {
  //   if (!contracts || searchValue){
  //     return contracts
  //   }
  //   return contracts.filter((contract) => {
  //     contract.contractCode.toLowerCase().includes(searchValue.toLowerCase());
  //   })
  // }
  transform(contracts: Contract[], searchValue: string): Contract[] {
    if (!contracts || !searchValue){
          return contracts
        }
        return contracts.filter((contract) => {
          contract.contractCode.includes(searchValue);
        })
}

}
