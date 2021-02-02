
 const canvas = document.getElementById("main");
 const ctx = canvas.getContext("2d");
let countLife = 3
let score = 0
let lifes = [];
// for( i =0;i<3;i++){
//   lifes[i].push({
//     x:10+10*i,
//     y:50
//   })
// }




let lastUpdate = Date.now();
  const balls = [];

  const drawCircle = (ctx, x, y, radius, color) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
  };

 let paddle = {
   x:200,
   y:280,
   width:50,
   height:10
 } 

  let accumulate = 0;
  

  function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, 400, 300);

    const elapsed = Date.now() - lastUpdate;
    lastUpdate = Date.now();
    const delta = elapsed / 1000;

    accumulate += delta;
    if (accumulate >= 3) {
      accumulate = 0;
      balls.push({
        x: Math.random() * 400,
        y: 0,
      });
    }

    for (let ball of balls) {
     
      ball.y += 1;
      
    
      
    }

for(i = 0;i<countLife;i++){
 
  ctx.fillStyle = "red"
  ctx.fillRect(10+20*i,50,10,10)
}

    for (let ball of balls) {
      drawCircle(ctx, ball.x, ball.y, 10, "green");
    }
    for(let ball of balls){
      if(ball.y == paddle.y){
        if(ball.x>=paddle.x&&ball.x<=paddle.x+50){
          score++
          console.log(score)}
          else{
            countLife--
            
          }
        
      }
    }
    ctx.fillStyle = "blue"
    ctx.fillRect(paddle.x,paddle.y,paddle.width,paddle.height)
    ctx.font = 'bold 10px Open Sans'
    ctx.fillText("Score "+score,10,10)

  };
  loop();
  function left(){
    paddle.x = paddle.x-20
   

    if(paddle.x<=0){
      paddle.x = 0
    }
  }
  function right(){
    paddle.x = paddle.x+20

    if(paddle.x>=350){
      paddle.x = 350
    }
  }
  
 console.log(lifes)



  
