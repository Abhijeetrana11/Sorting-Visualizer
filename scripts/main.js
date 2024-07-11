var inp_as=document.getElementById('a_size');
var array_size=document.getElementById('a_size').value;
// console.log(array_size);
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var btn_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;

var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

// GENERATING RANDOM ARRAY USING RANDOM FUNCTION
function generate_array(){
    cont.innerHTML="";
    for(var i=0;i<array_size;i++){
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement('div');
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:purple; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

// INITALISING ARRAY AT THE LOAD TIME OF WINDOW
window.onload=update_array_size();


// RUNNING THE SORTING ALGORITHM.
for(var i=0;i<btn_algos.length;i++){
    btn_algos[i].addEventListener("click",runalgo);
}

function disable_buttons(){
    for(var i=0;i<btn_algos.length;i++){
        btn_algos[i].classList=[];
        btn_algos[i].classList.add('butt_locked');
        btn_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo(){
    disable_buttons();
    this.classList.add('butt_selected');
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
}
}