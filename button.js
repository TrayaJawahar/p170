AFRAME.registerComponent("create-buttons" ,{
    init:function(){
        var button1=document.createElement("button")
        button1.innerHTML="ORDER NOW"
        button1.setAttribute("id" , "order-button")
        button1.setAttribute("class" , "btn btn-danger ml-3 mr-3")
        
        var button2=document.createElement("button")
        button2.innerHTML="ORDER SUMMARY"
        button2.setAttribute("id" , "order-summary-button")
        button2.setAttribute("class" , "btn btn-danger ml-3")

        var buttondiv=document.getElementById("button-div")
        buttondiv.appendChild(button1)
        buttondiv.appendChild(button2)
    }
})
