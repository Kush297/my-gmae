const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var character;
var plant1,plant2,plant3,plant4,plant5;
var plant1c,plant2c,plant3c,plant4c,plant5c,totalplants;
var insect;
var level=1;
var insect2;

var health;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
character=createSprite(600,400,20,20);
plant1g=new Group();
plant2g=new Group();
plant3g=new Group();
plant4g=new Group();
plant5g=new Group();
insectg=new Group();
insectg2=new Group();
  plant1c=0;
  plant2c=0;
  plant3c=0;
  plant4c=0;
  plant5c=0;
totalplants=0
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%100===0){
        var rand=Math.round(random(1,9))
        if(rand===1 || rand===6 || rand===7){
            spawnPlant1();
        }
        else if(rand===2 || rand===8){
            spawnPlant2();
        }
        else if(rand===3 || rand===9){
            spawnPlant3();
        }
        else if(rand===4){
            spawnPlant4();
        }
        else if(rand===5){
            spawnPlant5();
        }
        

    }
    if(plant1g.isTouching(character)){
    console.log("pressed1");
    plant1c=plant1c+1;
    plant1.destroy();
    totalplants++;
    }
    
    if(plant2g.isTouching(character)){
        plant2.destroy();
        console.log("pressed2")
        plant2c=plant2c+1;
        totalplants++;
    }
    if(plant3g.isTouching(character)){
        plant3.destroy();
        console.log("pressed3")
        plant3c=plant3c+1;
        totalplants++;
    }
    if(plant4g.isTouching(character)){
        plant4.destroy();
        console.log("pressed4")
        plant4c=plant4c+1;
        totalplants++;
    }
    if(plant5g.isTouching(character)){
        plant5.destroy();
        console.log("pressed5")
        plant5c=plant5c+1;
        totalplants++;
    }
    if(keyDown(UP_ARROW)){
        character.y=character.y-5;

    }
    if(keyDown(DOWN_ARROW)){
        character.y=character.y+5;

    }
    if(keyDown(LEFT_ARROW)){
        character.x=character.x-5;

    }
    if(keyDown(RIGHT_ARROW)){
        character.x=character.x+5;

    }
    if(frameCount%500===0){
        spawnInsects();
        if(level===2){
            spawnInsects2();
        }
    }
    if(insectg.isTouching(character)){
        insectg.destroyEach();
        var rando=Math.round(random(1,5))
if(rando===1 &&plant1c>0){
    plant1c=plant1c-1;
    totalplants=totalplants-1;
}
else if(rando===2 &&plant2c>0){
    plant2c=plant2c-1;
    totalplants=totalplants-1
}
else if(rando===3 &&plant3c>0){
    plant3c=plant3c-1;
    totalplants=totalplants-1
}
else if(rando===4 &&plant4c>0){
    plant4c=plant4c-1;
    totalplants=totalplants-1
}
else if(rando===5 &&plant5c>0){
    plant5c=plant5c-1;
    totalplants=totalplants-1
}
    }
if(insectg2.isTouching(character)){
    insectg2.destroyEach();
    var rando=Math.round(random(1,5))
if(rando===1 &&plant1c>1){
plant1c=plant1c-2;
totalplants=totalplants-2;
}
else if(rando===2 &&plant2c>1){
plant2c=plant2c-2;
totalplants=totalplants-2
}
else if(rando===3 &&plant3c>1){
plant3c=plant3c-2;
totalplants=totalplants-2
}
else if(rando===4 &&plant4c>1){
plant4c=plant4c-2;
totalplants=totalplants-2
}
else if(rando===5 &&plant5c>1){
plant5c=plant5c-2;
totalplants=totalplants-2
}
    }
    if(totalplants>5  && level===1){
        level=2;
    }
    text("plant1:"+plant1c,10,30);
    text("plant2:"+plant2c,10,60);
    text("plant3:"+plant3c,10,90);
    text("plant4:"+plant4c,10,120);
    text("plant5:"+plant5c,10,150);
    text("total no. of plants"+totalplants,10,180)
    

    drawSprites();
}

function spawnPlant1(){
    plant1=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);
    plant1.shapeColor="red";
    plant1.lifetime=180;
    plant1g.add(plant1);
}





function spawnPlant2(){
    plant2=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);
    plant2.shapeColor="green";
    plant2.lifetime=170;
    plant2g.add(plant2);
}
function spawnPlant3(){
    plant3=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);
    plant3.shapeColor="blue";
    plant3.lifetime=150;
    plant3g.add(plant3);
}
function spawnPlant4(){
    plant4=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);
    plant4.shapeColor="yellow";
    plant4.lifetime=120;
    plant4g.add(plant4);
}
function spawnPlant5(){
    plant5=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);
    plant5.shapeColor="purple";
    plant5.lifetime=80;
    plant5g.add(plant5);
}
function spawnInsects(){
    var insect=createSprite(Math.round(random(0,1200)), Math.round(random(0,800)),10,10);
    insect.shapeColor="brown";
    insectg.add(insect);


}
function spawnInsects2(){
    var insect2=createSprite(Math.round(random(0,1200)), Math.round(random(0,800)),10,10);
    insect2.shapeColor="yellow";
    insectg2.add(insect2);

}
