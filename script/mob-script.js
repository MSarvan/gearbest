function mobilesdata() {
    try {
      fetch("https://gaerbest-backend.herokuapp.com/Mobiles")
        .then((res) => res.json())
        .then((data) => {
          mobData(data);
          // console.log(data)
        });
    } catch (e) {
      console.log(e.message);
    }
  }
  // console.log("Mobiles:");
  
  mobilesdata();


  function mobData(data) {
    var mob = document.getElementById("mob");
    // console.log("mob:", mob);
    data.forEach((product) => {
      // console.log(product);
      //let link = document.createElement("a");
      //link.href = `./product_detail.html?id=${product._id}`;
      //link.setAttribute("target", "_blank");
  
      let div = document.createElement("div");
  
      let img = document.createElement("img");
      img.src = product.img;
      img.setAttribute("id", "pro_img")
  
      let name = document.createElement("p");
      name.innerText = product.name;
      name.setAttribute("id", "pro_name");
  
      let price = document.createElement("p");
      price.innerText = product.price;
      price.setAttribute("id", "pro_price");

      let btn = document.createElement("button");
      btn.innerText = "Add to cart";
      btn.setAttribute("id", "cart_btn");
      
      btn.onclick = () => {
        function loadData(key) {
          try {
          let data = window.localStorage.getItem(key);
          data = JSON.parse(data);
          return data;
          } catch (e) {
          console.log("e:", e);
          return undefined;
          }
        }
        
        var user_id = loadData("userdetails")._id;
  
        try {
          fetch(`https://gaerbest-backend.herokuapp.com/User/${user_id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Product Added Successfully");
            });
        } catch (e) {
          console.log(e.message);
        }
      };
      
      div.append(img, name, price, btn);
      //link.append(div);
      mob.append(div);
    });
  }
  