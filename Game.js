class g_status{
    constructor(){

    }
    getStates(){
        var GameModeref=database.ref("GameMode")
        GameModeref.on("value",function(data){
            GameMode=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            GameMode:state
        })
    }
    START(){
        if(GameMode==0){
            player=new Player()
            player.getNo_()
            form=new user_interfase()
            form.display()
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Started", 290, 100)
        Player.INFO_ALL();
    
        if(allplayers !== undefined){
          var display_position = 130;
          for(var plr in allplayers){
            if (plr === "Name" + player.Intex)
              fill("red")
            else
              fill("black");
    
            display_position+=20;
            textSize(15);
            text(allplayers[plr].name + ": " + allplayers[plr].Distance, 120,display_position)
          }
        }
    
        if(keyIsDown(UP_ARROW) && player.Intex !== null){
          player.Distance+=50
          player.updateName();
        }
    }
}