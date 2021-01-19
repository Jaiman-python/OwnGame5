class Lesiure{

    constructor(){
        this.lesiureImg = loadImage("images/Lesiure card.png");
        this.Sprite = createSprite(1000,300);
        this.iceCreamImg = loadImage("images/IceCream.png")
        this.iceCreamSprite = createSprite(width/2+100,height/2);
        this.iceCreamSprite.scale = 0.7;
        this.iceCreamSprite.visible = false;
    }
    
    
    display(){
        this.Sprite.addImage(this.lesiureImg);
        this.iceCreamSprite.addImage(this.iceCreamImg);
        if(mousePressedOver(this.Sprite)){
            familyCard.visible = false;
            workCard.Sprite.visible = false;
            this.Sprite.visible = false;
            eat = true;
            
        }
        
        
    
        if(eat == true){
            this.iceCreamSprite.visible = true;
            text("Click on the icecream to eat it. Cost:$10",10,height/2)
            if(mousePressedOver(this.iceCreamSprite)){
                task1_count -=10;
                Happiness += 5;
                eat = false;
                this.iceCreamSprite.visible = false;
                familyCard.visible = true;
                this.Sprite.visible = true;  
                workCard.Sprite.visible = true;

            }
                
        }
        
    }
    }