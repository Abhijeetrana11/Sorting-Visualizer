// ******************
// || IMPLEMENTED BY - ABHIJEET S. RANA || 
// ******************
function Bubble()
{
    // Container Visibility
    let visElement=document.getElementsByClassName("Sub_Heading")
    for(let i=0;i<visElement.length;i++){
        visElement[i].style.display='inline';
    }
    let element=document.getElementById("AlgoName");
    element.innerText="Bubble Sort:";
    //Setting Time complexities
    element.style.color='#3557e8'
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "blue");//Color update
                div_update(divs[j+1],div_sizes[j+1], "blue");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "blue");//Height update
                div_update(divs[j+1],div_sizes[j+1], "blue");//Height update
            }
            div_update(divs[j],div_sizes[j], "purple");//Color updat
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}
