  var rabbit, rabbitImg ;
  var garden , gardenImg ;

  var apples , applesImg , applesGroup;

  function preload(){
    
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    applesImg = loadImage("apple.png");
  }

  function setup(){
    
    createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }


  function draw() {
    background(0);
    
    rabbit.x = World.mouseX;
      
    if(rabbit.x < 50)
    {
    rabbit.x = 50;
    }
    
    if(rabbit.x > 350)
    {
    rabbit.x = 350;
    }


    edges= createEdgeSprites();
    rabbit.collide(edges);

  createApples();


    drawSprites();
  }

  function createApples(){
    if(frameCount % 80 == 0){
  apples = createSprite(350,100,70,60);
    apples.x = Math.round(random(50 , 350));
    apples.addImage( applesImg);
    apples.velocityY = 3;
    apples.scale = 0.1;
  apples.lifetime = 350;
    
  }
  }
 