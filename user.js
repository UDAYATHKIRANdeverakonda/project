class User
{

constructor() 
{
  this.index=null;
  this.email=null;
  this.input=null;
  this.radio1=null;
  this.radio2=null;
  this.radio3=null;
  this.radio4=null;


}
 getCount()
 {
    var personcount=database.ref('playerCount');
    personcount.on("value",(data)=>{
    personcount=data.val();
    })





 }

 updateCount(count)
 {
    database.ref('/').update({
    personcount:count
    })
}

update()
{
   var PlayerIndex="players/player"+this.index;
   database.ref(PlayerIndex).set({
   input:this.input,
   email:this.email,
   radio1:this.radio1,
   radio2:this.radio2,
   radio3:this.radio3,
   radio4:this.radio4
 })
}


reset()
{
 this.index=null;
 this.email=null;
 this.input=null;
 this.radio1=null;
 this.radio2=null;
 this.radio3=null;
 this.radio4=null;
  



}










}