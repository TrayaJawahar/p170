AFRAME.registerComponent("create-markers", {
  
    init: async function() {
  
      var mainScene = document.querySelector("#main-scene");
  
      //get the dishes collection from firestore database
      var toys = await this.getDishes();
     
      toys.map(dish => {
        var marker = document.createElement("a-marker");   
        marker.setAttribute("id", toy.id);
        marker.setAttribute("type", "pattern");
        marker.setAttribute("url", toy.marker_pattern_url);
        marker.setAttribute("cursor", {
          rayOrigin: "mouse"
        });
  
        //set the markerhandler component
        marker.setAttribute("markerhandler", {});
        mainScene.appendChild(marker);
  
        // Adding 3D model to scene
        var model = document.createElement("a-entity");    
       
        model.setAttribute("id", `model-${dish.id}`);
        model.setAttribute("position", dish.model_geometry.position);
        model.setAttribute("rotation", dish.model_geometry.rotation);
        model.setAttribute("scale", dish.model_geometry.scale);
        model.setAttribute("gltf-model", `url(${dish.model_url})`);
        model.setAttribute("gesture-handler", {});
        marker.appendChild(model);
  
      });
    },
    //function to get the dishes collection from firestore database
    get: async function() {
      return await firebase
        .firestore()
        .collection("dishes")
        .get()
        .then(snap => {
          return snap.docs.map(doc => doc.data());
        });
    }
  });