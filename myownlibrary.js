function bounce(movingRect,fixedRect){
    if(movingRect.x - fixedRect.x< fixedRect.width/2 + movingRect.width/2 &&
      fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect/2){
        fixedRect.veloctiyX= fixedRect.veloctyX*(-1)
  
        movingRect.velocityX= fixedRect.velocityX*(-1)
      }
      if(movingRect.y- fixedRect.y < fixedRect.height/2 +  movingRect.height/2 &&
        fixedRect.y - movingRect.y<  fixedRect.height/2 +movingRect.height/2){
           fixedRect.velocityY= fixedRect.velocityY*(-1)
           movingRect.velocityY = movingRect.velocityY*(-1)
        }
  }