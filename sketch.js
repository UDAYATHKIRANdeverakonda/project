var database,form,user;
var personcount=0;
function setup()
{
  createCanvas(1000,1100)
  database=firebase.database();
  form=new Form();
  user=new User();
  user.getCount();
}

function draw()
{
 background("lightGreen")
 form.display();
  drawSprites();
}


