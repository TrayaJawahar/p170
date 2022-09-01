AFRAME.registerComponent("markerhandler" , {
    init:async function() {
        this.el.addEventListener("markerFound" , () =>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost" , () =>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttondiv=document.getElementById("button-div")
        buttondiv.style.display="flex"
        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")
        ratingButton.addEventListener("click" , function(){
            swal({
                icon:"warning" , 
                title:"Rate Dish" ,
                text:"Work In Progress"
            })
        })
        orderButton.addEventListener("click" , function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpeg" , 
                title:"Thanks For Order" ,
                text:"Your Order Will Be Served Soon To Your Table"
            })
        })
    },
    handleMarkerLost:function(){
        var buttondiv=document.getElementById("button-div")
        buttondiv.style.display="none"   
    },
   //get the toys collection from firestore database
  getToys: async function () {
    return await firebase
      .firestore()
      .collection("toys")
      .get()
      .then(snap => {
        return snap.docs.map(doc => doc.data());
      });
  }
});

    