class menu {
constructor(){
this.IMenu = createImg("./IMGS/menu.png")
this.B1 = createButton(" ")
this.B2 = createButton(" ")
}









b1(){
  this.B1.mousePressed(() => {
  this.hide();
  gender = MAS
  bPressed = true
  })
}

b2(){
    this.B2.mousePressed(() => {
    this.hide();
    gender = FEM
    bPressed = true
    })
}





hide(){
 this.IMenu.hide()
 this.B1.hide()
 this.B2.hide()
}

display(){
 this.IMenu.position(1000,1000);
 this.IMenu.size(500,500);
 this.B1.position(1030,1300);
 this.B2.position(1330,1300);
 this.B1.size(10,30);
 this.B2.size(10,30);
 this.B1.class("customButtom");
 this.B2.class("customButtom");
 this.b1();
 this.b2();

}




}
