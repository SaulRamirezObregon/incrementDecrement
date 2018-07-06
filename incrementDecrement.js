function incrementDecrement(inicio,fin){
    function resolver(){
        const array = new Array();
        for(let i=inicio;i<=fin;i++){
            array.push(inicio);
            console.log(inicio++);
        }
        const decremento = array.reverse();
        decremento.forEach(function(element) {
            console.log(element);
        });
    }
    resolver();
}

incrementDecrement(1,18);
