class Transaction{
  logs:any[]=[];
  store:{} | null={};
  errContain:any;
//dispatch  (the beginning)

dispatch=(GlobArr:any)=>{

GlobArr.sort((ano:any,bano:any)=>{return ano.index-bano.index;});
//sorting by indexes
//======


//validation (the beginning)

for(let a=0;a<GlobArr.length;a++){
var CurrOb=GlobArr[a],bool1:boolean=false,bool2:boolean=false,bool3:boolean=false;
//------
if(CurrOb.hasOwnProperty("index"))bool1=true;
if(CurrOb.hasOwnProperty("meta")){
  if(CurrOb.meta.hasOwnProperty("title") && CurrOb.meta.hasOwnProperty("description"))bool2=true;
}
if(CurrOb.hasOwnProperty("call"))bool3=true;


if(bool1 && bool2 && bool3 && Object.keys(CurrOb).length<5)0;//do nothing
else throw new Error("Invalid Object found, it lacks one of the important properties").message;
//------
}
//validation

//------

//call and restore

for(let a=0;a<GlobArr.length;a++){


let InitialStore=GlobArr[a];

GlobArr[a].call()
.catch((err:any)=>{/*console.log("stuka");*/this.errContain=err; return "errorm";})
.then((ee:any)=>{if(ee==="errorm"){
//------
//------
//------
//------გიორგი გიორგი გიორგი!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//------აქედან 121-ე ხაზამდე რაც წერია მერეც იგივე წერია უბრალოდ ესაა ის შემთხვევა
//------როცა ქოლის ერორთან ერთად რესტორი არ გხვდება და მერეა ის, რესტორი რომ გხვდება, მაგრამ ეგეც ერორდება  
//------რჩევაა, თორემ აქაც სწორადაა ყველაფერი
//------ვიცი რომ გაცილებით უფრო ლაკონიურადაც შეიძლებოდა, მაგრამ სიცხე მაქვს გუშინ და დღეს, ამიტომ ესეც ძლივს დავწერე
//------ბოდიში ამდენი წვალება რომ გიწევს
if(!GlobArr[a].hasOwnProperty("restore")){



  for(let ji=a-1;ji>-1;ji--){
    if(this.logs[ji].error==null){
    GlobArr[ji].restore().catch((erts:any)=>{
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
   
    
    }
    
    let uuuu=this.logs.length-1;
    for(let tupik=uuuu;tupik>a-1;tupik--){
      this.logs.splice(tupik,1);
    }
    
    
    
    //---
    this.logs.push({
      index:InitialStore.index,
      meta:InitialStore.meta,
      error:{
        comment:"both, call and restore were errorred in this object"
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
GlobArr[a].restore().catch((tre:any)=>{
return ["errork",tre];
}).then((trek:any)=>{
  if(Array.isArray(trek)){
//console.log("restore was also errored");


for(let ji=a-1;ji>-1;ji--){
if(this.logs[ji].error==null){
GlobArr[ji].restore().catch((erts:any)=>{
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

let uuuu=this.logs.length-1;
for(let tupik=uuuu;tupik>a-1;tupik--){
  this.logs.splice(tupik,1);
}
//ნუ ეს ნაგავს ასუფთავებს logs-დან,
//რომელიც ჩემმა კოდმა არასაჭირო რაოდენობით დატოვა logs-ში




//---
this.logs.push({
  index:InitialStore.index,
  meta:InitialStore.meta,
  error:{
    comment:`both, call and restore were errorred in this object,
     or restore was not defined and it was needed`
  }
});
//---



}
  else {
    setTimeout(()=>{
      this.logs.push({
        index:InitialStore.index,
        meta:InitialStore.meta,
        error:{
          name:this.errContain.name,
          message:this.errContain.message,
          stack:this.errContain.stack,
        }
      });
    },0)
    


  }
})


}
else {
this.logs.push({
  index:InitialStore.index,
  meta:InitialStore.meta,
  storeBefore:InitialStore,
  storeAfter:GlobArr[a],
  error:null
})
}
});
  
  





}
setTimeout(()=>{console.log(this.logs)},0);





//call and restore (the end)




///////evaluating final store parameter value(the beginnig)
let counter=0;
for(let iter=0;iter<GlobArr.length;iter++){
if(GlobArr[iter].error==null)counter++;}


if(counter==GlobArr.length)this.store={};//beacause in this case, not even one, restore waslaunched, to begin with
//so it could not have been successful



else {this.store=null}//in other cases, beacause program reached this point
//without encountering any unrestorable errors and it encountered at 
//least 1 of them(I made sure of it using these ifs and for cycle) store should be equited to null
//!!!!! every other case is covered in my code


///////evaluating final store parameter value(the end)
}
//dispatch (the end)
}
const scenario = [
    {
        index: 1,
        meta: {
          title: 'Read popular customers',
          description: 'This action is responsible for reading the most popular customers'
          },
				// callback for main execution
        call: async (store:any) => {var t=90;
throw new Error("err");
        return 2;
        },
				// callback for rollback
        restore: async (store:any) => {
          throw new Error("err");
        }
    },
    {
        index: 2,
        meta: {
          title: 'Delete customer',
          description: 'This action is responsible for deleting customer'
        },
				// callback for main execution
        call: async (store:any) => {
          
         // throw new Error("asd");
        },
				// callback for rollback
        restore: async (store:any) => {
         // throw new Error("asd");
        }
    },
    {
        index: 0,
        meta: {
        title: 'Read popular customers',
        description: 'This action is responsible for reading the most popular customers'
        },
				// callback for main execution
        call: async (store:any) => {
          //throw new Error("hghh")
        },
				// callback for rollback
        restore: async (store:any) => {
          //throw new Error("hghh")
        }
    }
];
var transaction=new Transaction();
//transaction.dispatch(scenario);

(async() => {
  try {
    await transaction.dispatch(scenario);
    const store = transaction.store; // {} | null
    const logs = transaction.logs; // []
    
  } catch (err:any) {
    console.log(err.stack);
    // log detailed error
  }
})();
/*
P.S
ნაგულისხმებია, რომ წარმატებული გენერალური როლბექის შემთხვევაში store იძლევა მაინც null-ს
" -   If `transaction.store` returns ` null`, this means that the rollback mechanism was successfully launched. "
თუ გენერალურიც ჩაიშალა მაშინ ვაბრუნებ {}-ს დანარჩენი შემთხვევები ზემოთაა აღწერილი და ნაზრუნი მაქვს, ცხადია თუ სწორად გავიაზრე პირობა.

!!!!!!!!!!!!!!!!!!!!!!!!!!!და კიდევ ერთხელ - ბოდიში ასე გაწვალებისთვის!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

*/