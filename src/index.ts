var tabl:Array <string|number> =["Ala","1","Ewa","12.5"]
var zmm
function czyl(){
    for (var i=0;i<tabl.length;i++){
        if(Number(tabl[i]>0)){
            zmm=zmm+tabl[i]
        }
    }
    console.log(zmm)
}