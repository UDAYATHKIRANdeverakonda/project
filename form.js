class Form
{

constructor()
{
  this.greeting=createElement('h2')
  this.input=createInput("")
  this.email=createInput("")
  this.button=createButton('submit')
  this.title=createElement('h2')
  this.name=createElement('h3')
  this.email1=createElement('h3')
  this.reset=createButton('reset')

  this.input.position(760,120)
  this.email.position(760,150)
  this.input.style('width','160px')
  this.email.style('width','160px')
  this.button.style('width','100px')
  this.button.style('height','40px')
  this.button.style('background','green')
  this.reset.style('width','100px')
  this.reset.style('height','40px')
  this.reset.style('background','green')

  // question 1:
  this.question1=createElement('h4',"Q1. Is education good in India compared to other countries ?")
  this.radio1=createRadio('h5');
  this.radio1.option('YES')
  this.radio1.option('NO')
  this.radio1.style('width','1500px')

  // question 2:
  this.question2=createElement('h4',"Q2. Is cocurricular activities necessary ?")
  this.radio2=createRadio('h5');
  this.radio2.option('YES')
  this.radio2.option('NO')
  this.radio2.style('width','1500px')

// question 3:
this.question3=createElement('h4',"Q3. Should we change the learning style of education in India ?")
this.radio3=createRadio('h5');
this.radio3.option('YES')
this.radio3.option('NO')
this.radio3.style('width','1500px')



// question 4:
this.question4=createElement('h4',"Q4. Is to many exams needed to access the children?")
this.radio4=createRadio('h5');
this.radio4.option('YES')
this.radio4.option('NO')
this.radio4.style('width','1500px')

// question 5:
this.question5=createElement('h4',"Q5. Give your feedback based on India's educt ")
this.description=createInput("mention your feedback here")
this.description.style('width','630px')


}

display()
{
  this.title.html("STUDENT SURVEY ON EDUCATION SYSTEM");
  this.title.position(500,20)

  this.name.html("Your name");
  this.name.position(650,100)

  this.email1.html("Your Email")
  this.email1.position(650,130)
 // this.email.position(displayWidth/2+300,225)
  this.button.position(650,750)
  this.reset.position(1100,80)

  this.question1.position(400,190)
  this.radio1.position(200,210)

  this.question2.position(400,280)
  this.radio2.position(200,310)

  this.question3.position(400,390)
  this.radio3.position(200,410)

  this.question4.position(400,490)
  this.radio4.position(200,510)

  this.question5.position(400,600)
  this.description.position(400,680)
  this.description.style('color','blue')
  this.description.style('font-size','20px')
  this.button.mousePressed(()=>{
  this.greeting.show();
  this.description.hide();
  this.greeting.html("THANKYOU FOR YOUR SUBMISSION");
  this.greeting.position(400,800)
  this.greeting.style('width','500px')
  this.greeting.style('height','50px')
  this.greeting.style('background','violet')
  this.greeting.style('padding','30px')

  User.input=this.input.value()
  User.email=this.email.value()
  User.radio1=this.radio1.value()
  User.radio2=this.radio2.value()
  User.radio3=this.radio3.value()
  User.radio4=this.radio4.value()
  personcount+=1;
  User.index=personcount;
  User.update();
  User.updateCount(personcount)
})
  this.reset.mousePressed(()=>{
  this.greeting.hide();
  this.description.show();
  this.input.value('');
  this.email.value('');
  this.radio1.value();
  this.radio2.value();
  this.radio3.value();
  this.radio4.value();
  })
}








}