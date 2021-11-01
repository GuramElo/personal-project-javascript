//type err_ch=any;
import { nm_complect } from './!Important Transaction_class'; 

import { Transaction } from './!Important Transaction_class';
import {scenario} from './init_scenario';
////<reference path="./init_scenario"/>
////<reference path="./!Important Transaction_class"/>
var transaction=new Transaction();
//transaction.dispatch(scenario);

interface another_logs extends nm_complect.logs_struct{};

(async() =>{
  try {
    await transaction.dispatch(scenario);
    const store:{} | null = transaction.store; // {} | null
    const logs:another_logs = transaction.logs; // []
    
  } catch (err:nm_complect.err_ch) {
    console.log(err.stack);
    // log detailed error
  }
})();
/*
P.S
ნაგულისხმებია, რომ წარმატებული გენერალური როლბექის შემთხვევაში store იძლევა მაინც null-ს
" -   If `transaction.store` returns ` null`, this means that the rollback mechanism was successfully launched. "
თუ გენერალურიც ჩაიშალა მაშინ ვაბრუნებ {}-ს დანარჩენი შემთხვევები ზემოთაა აღწერილი და ნაზრუნი მაქვს, ცხადია თუ სწორად გავიაზრე პირობა.

*/