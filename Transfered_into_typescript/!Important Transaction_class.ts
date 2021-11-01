//import { scenario } from "./init_scenario";
export namespace nm_complect{//./
export  interface logs_struct{
    [index:number]:{
      index:number;
      meta:{title:string;} & {description:string};
      storeBefore?:Object;
      storeAfter?:Object;
      error:err_property;
    };
}


export type err_ch=any;
export type arr_value={
  call(store:any):Promise<any>;
  restore?(store:any):Promise<any>;
  index:number;
  meta:{
    title:string;
    description:string;
  }
};


                                                                             }//   .\
                                                                             
type err_property=null | {
  name:string;
  message:string;
  stack:string;
} | {
  comment:string;
};


interface scenarios{
[index:number]:nm_complect.arr_value;
}




interface clas_trans<T>{
  logs:nm_complect.logs_struct;
store:Object | null;
errContain:T;
dispatch(arr:scenarios):void;
}





//აქამდეა ინტერფეისები და ტიპები







export class Transaction implements clas_trans<nm_complect.err_ch>{

  logs:nm_complect.logs_struct=[];
  store:{} | null={};
  errContain:nm_complect.err_ch;
//dispatch  (the beginning)

dispatch=(GlobArr:Object)=>{

(<any>GlobArr).sort((ano:Object,bano:Object):number=>{return (<any>ano).index-(<any>bano).index;});
//sorting by indexes
//======


//validation (the beginning)

for(let a=0;a<(<any>GlobArr).length;a++){
var CurrOb:any=(<any>GlobArr)[a],bool1:boolean=false,bool2:boolean=false,bool3:boolean=false;
//------
if(CurrOb.hasOwnProperty("index"))bool1=true;
if(CurrOb.hasOwnProperty("meta")){
  if(CurrOb.meta.hasOwnProperty("title") && CurrOb.meta.hasOwnProperty("description"))bool2=true;
}
if(CurrOb.hasOwnProperty("call"))bool3=true;


if(bool1 && bool2 && bool3 && Object.keys(CurrOb).length<5)0;//do nothing
else (():never=>{throw new Error("Invalid Object found, it lacks one of the important properties").message;})();
//------
}
//validation

//------

//call and restore

for(let a=0;a<(<any>GlobArr).length;a++){


let InitialStore=(<any>GlobArr)[a];

(<any>GlobArr)[a].call()
.catch((err:nm_complect.err_ch)=>{/*console.log("stuka");*/this.errContain=err; return "errorm";})
.then((ee:nm_complect.err_ch)=>{if(ee==="errorm"){
//------
//------
//------
//------გიორგი გიორგი გიორგი!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//------აქედან 121-ე ხაზამდე რაც წერია მერეც იგივე წერია უბრალოდ ესაა ის შემთხვევა
//------როცა ქოლის ერორთან ერთად რესტორი არ გხვდება და მერეა ის, რესტორი რომ გხვდება, მაგრამ ეგეც ერორდება  
//------რჩევაა, თორემ აქაც სწორადაა ყველაფერი
//------ვიცი რომ გაცილებით უფრო ლაკონიურადაც შეიძლებოდა, მაგრამ სიცხე მაქვს გუშინ და დღეს, ამიტომ ესეც ძლივს დავწერე
//------ბოდიში ამდენი წვალება რომ გიწევს
if(!(<any>GlobArr)[a].hasOwnProperty("restore")){



  for(let ji=a-1;ji>-1;ji--){
    if(this.logs[ji].error==null){
    (<any>GlobArr)[ji].restore().catch((erts:nm_complect.err_ch):never=>{
     this.store={};//სანამ ერორს გავისვრით, რაც იმის ნიშანია, რომ გენერალური როლბექი ჩაიშალა სთორში ვწერ ცარიელ ობიექტს
      throw new Error("General rollback wasn't successful on the way up, so we can't do anything");
      
    }).then(()=>{
      delete this.logs[ji].storeBefore;
      delete this.logs[ji].storeAfter;
      this.logs[ji].error={
        name:<string>"General rollback",
        message:<string>"ვაროლბექებთ ყველაფერს და ამიტომ ამასაც",
        stack:<string>"ტექნიკურად არ მომხდარა შეცდომა, General rollback-ში მოყვა"
      }
    });
    }
    if(this.logs[ji].error!=null && this.logs[ji].hasOwnProperty("error"))continue;
   
    
    }
    
    let uuuu=(<any>this.logs).length-1;
    for(let tupik=uuuu;tupik>a-1;tupik--){
      (<any>this.logs).splice(tupik,1);
    }
    
    
    
    //---
    (<any>this.logs).push({
      index:InitialStore.index,
      meta:InitialStore.meta,
      error:{
        comment:<string>"both, call and restore were errorred in this object"
      }
    });

}

//------
//------
//------
//------
//------
//------
//------
//------
//------
//------
(<any>GlobArr)[a].restore().catch((tre:nm_complect.err_ch):[string,any]=>{
return ["errork",tre];
}).then((trek:nm_complect.err_ch)=>{
  if(Array.isArray(trek)){
//console.log("restore was also errored");


for(let ji=a-1;ji>-1;ji--){
if(this.logs[ji].error==null){
  (<any>GlobArr)[ji].restore().catch((erts:nm_complect.err_ch):never=>{
//ამ შემთხვევაში ზემოთ მიმავალს კიდევ არასწორი რესთორი შეგვხვდა, ამიტომ ვაერორებთ:
//სხვა შემთხვევაში პროგრამა ამ catch-ში საერთოდ არ შემოიხედავს და დაბლა ჩავა, სადაც წარმატებული ქოლის როლბექი მოხდება
  
this.store={};//სანამ ერორს გავისვრით, რაც იმის ნიშანია, რომ გენერალური როლბექი ჩაიშალა სთორში ვწერ ცარიელ ობიექტს
throw new Error("General rollback wasn't successful on the way up, so we can't do anything");

}).then(()=>{
  delete this.logs[ji].storeBefore;
  delete this.logs[ji].storeAfter;
  this.logs[ji].error={
    name:"General rollback",
    message:"ვაროლბექებთ ყველაფერს და ამიტომ ამასაც",
    stack:"ტექნიკურად არ მომხდარა შეცდომა, General rollback-ში მოყვა"
  }
});
}
if(this.logs[ji].error!=null && this.logs[ji].hasOwnProperty("error"))continue;
//ეს ^^^^ უბრალოდ ის შემთხვევაა, როცა უკან აბრუნებულს ობიექტი უკვე დაროლბექებული დაგხვდება
//და მარტივად აგრძელებ სვლას ზევით ეს if აუცილებელიც არაა, თვალსაჩინოებისთვისაა


}

let uuuu:number=(<any>this.logs).length-1;
for(let tupik=uuuu;tupik>a-1;tupik--){
  (<any>this.logs).splice(tupik,1);
}
//ნუ ეს ნაგავს ასუფთავებს logs-დან,
//რომელიც ჩემმა კოდმა არასაჭირო რაოდენობით დატოვა logs-ში




//---
(<any>this.logs).push({
  index:<number>InitialStore.index,
  meta:<string>InitialStore.meta,
  error:{
    comment:<string>`both, call and restore were errorred in this object,
     or restore was not defined and it was needed`
  }
});
//---



}
  else {
    setTimeout(()=>{
      (<any>this.logs).push({
        index:InitialStore.index,
        meta:InitialStore.meta,
        error:{
          name:<string>this.errContain.name,
          message:<string>this.errContain.message,
          stack:<string>this.errContain.stack,
        }
      });
    },0)
    


  }
})


}
else {
  (<any>this.logs).push({
  index:InitialStore.index,
  meta:InitialStore.meta,
  storeBefore:InitialStore,
  storeAfter:(<any>GlobArr)[a],
  error:null
})
}
});
  
  





}
setTimeout(()=>{console.log(this.logs)},0);





//call and restore (the end)




///////evaluating final store parameter value(the beginnig)
let counter:number=0;
for(let iter=0;iter<(<any>GlobArr).length;iter++){
if((<any>GlobArr)[iter].error==null)counter++;}


if(counter==(<any>GlobArr).length)this.store={};//beacause in this case, not even one, restore waslaunched, to begin with
//so it could not have been successful



else {this.store=null}//in other cases, beacause program reached this point
//without encountering any unrestorable errors and it encountered at 
//least 1 of them(I made sure of it using these ifs and for cycle) store should be equited to null
//!!!!! every other case is covered in my code


///////evaluating final store parameter value(the end)
}
//dispatch (the end)
}