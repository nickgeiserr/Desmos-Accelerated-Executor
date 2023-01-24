const Main_Object = new DAX_OBJECT(
    DAX_PARENT_OBJECT, {
        Element: DAX_MAIN_ELEMENT,
        Size: ["100%","100%"]
    }    
)

const Screen = new DAX_OBJECT(
    DAX_CHILD_OBJECT, {
        Element: DAX_DISPLAY_SCREEN,
        Size: ["600px","400px"]
    }
)

Main_Object.appendChild(Screen)

const Graph = Main_Object.loadGraph(Screen)
Graph.loadApi()
Graph.addLatex("y=x")

/////////////////////
// Main Graph Code //
/////////////////////

function Tick(){
    console.log("Graph Ticked!")
}

function gameLoop(){
    Graph.onTick(Tick()) // must be inside game loop or will only execute once
}

Graph.startExecution(gameLoop)
