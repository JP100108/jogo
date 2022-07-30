var MAS=1 
var FEM=0
var gender = MAS
var Pmas1,Pmas2,Pmas3,Pmas4,Pfem1,Pfem2,Pfem3,Pfem4,P
var beckground,BGimg
var trofeis,Timg
var ivbarrier
var form
var bPressed = false
var cidade2
var rua,Icurva,curva
//variveis pugnastras
var darkSlime,DSsprite

function preload(){
Pmas1 = loadImage("./IMGS/frente.png")
DSsprite = loadImage("./IMGS/dark slime.png")
BGimg = loadImage("./IMGS/background1.png")
Pfem1 = loadImage("./IMGS/Pfem.png")
cidade2 = loadImage("./IMGS/cidade 2.png")
rua = loadImage("./IMGS/rua.png")
Icurva = loadImage("./IMGS/curva.png")
}

function setup () {
 createCanvas(2000,2000)
 P = createSprite(700,700)
 P.addImage("frente",Pmas1)
 P.addImage("fem",Pfem1)
 darkSlime = createSprite(1000,500)
 darkSlime.addImage("DS",DSsprite)
 curva = createSprite(1120,1120,150,255)
 curva.addImage("curv",Icurva)
 curva.rotate
 P.visible = false
 darkSlime.visible = false
 form = new menu()
 

}

function draw () {
 
 image(BGimg,500,500,400,400)
 image(cidade2,1000,1000,500,500)
 image(rua,535,880,150,255)
 
 



 camera.x = P.x
 camera.y = P.y









 if (gender==MAS && bPressed) {
 P.changeImage("frente",Pmas1)   
 P.visible = true
 darkSlime.visible = true

 }
 else if(gender==FEM){
 P.changeImage("fem",Pfem1)
 P.visible = true
 darkSlime.visible = true

}

if (!bPressed) {
    background("black");
    form.display()
    
}






if (keyIsDown(DOWN_ARROW)) {
    
    
    
    
    P.y += 5
}
if (keyIsDown(UP_ARROW)) {
    
    
    
    
    P.y -= 5
}
if (keyIsDown(LEFT_ARROW)) {
    
    
    
    
    P.x -= 5
}
if (keyIsDown(RIGHT_ARROW)) {
    
    
    
    
    P.x += 5
}


drawSprites();
console.log(World.mouseY+"Y")
console.log(World.mouseX+"X")
}



















