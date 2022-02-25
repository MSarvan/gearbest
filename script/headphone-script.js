function headphonedata() {
    try {
      fetch("http://localhost:4800/Headphone")
        .then((res) => res.json())
        .then((data) => {
          hpData(data);
          // console.log(data)
        });
    } catch (e) {
      console.log(e.message);
    }
  }
  // console.log("Headphones:");
  
  headphonedata();


  function hpData(data) {
    var mob = document.getElementById("hp");
    // console.log("hp:", hp);
    data.forEach((product) => {
      
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
        var user_id = "62176d4641e5973cf4667a6b";
        console.log('product:', product)
  
        try {
          fetch(`http://localhost:4800/User/${user_id}`, {
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
      hp.append(div);
    });
  }