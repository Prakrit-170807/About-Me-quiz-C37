class user_interfase{
    constructor(){
        this.input= createInput("YOUR NAME")
        this.input.position(670,250)

        this.button = createButton("PLAY")
        this.button.position(670,275)
    }
    hide(){
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title=createElement("H1")
        title.html('About Me Quiz')
        title.position(620,20)
        title.style('white')

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            Players=Players+1
            player.Intex=Players
            player.updateName()
            player.updateNo_(Players)
            var Welcome_pls = createElement("H2")
            Welcome_pls.html("Hi,"+player.name)
            Welcome_pls.position(200,160)
        })


    }
}