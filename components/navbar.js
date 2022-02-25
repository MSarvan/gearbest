function navbar()
{
    return `<div class="outer_div">
    <div class="brand_logo">
        <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" alt="">
    </div>
    <div class="search">
        <div class="top">
            <p class="sc">Support Center</p>
            <p class="st">Ship to <img src="https://uidesign.gbtcdn.com/GB/app/2018/flag_png/in.png" alt=""> / INR</p>
            <div class="down_arrow"><span class="material-icons-outlined">expand_more</span></div>
            <p class="st">Language</p>
            <div class="down_arrow"><span class="material-icons-outlined">expand_more</span></div>
            <p class="st">Country Website</p>
            <div class="down_arrow"><span class="material-icons-outlined">expand_more</span></div>
        </div>
        <div class="bottom">
            <div class="searchbar">
                <p class="all">All</p>
                <div class="down_arrow1"><span class="material-icons-outlined">expand_more</span></div>
                <div><input type="text" placeholder="    What are you looking for?" class="input"></div>
                <div class="search1"><span class="material-icons-outlined">search</span></div>
            </div>
            <div class="signin">
                <a href="./html/signin.html"><button><div class="logo"><span class="material-icons-outlined">perm_identity</span></div>
                <p id="user2_id"> Sign In</p></button></a>
            </div>
            <div class="fav">
                <button><div class="logo"><span class="material-icons-outlined">favorite</span></div>
                <p> Favourites</p></button>
            </div>
            <div class="cart">
                <a href="./html/cart.html"><button   onclick="toCartPage()"><div class="logo"><span class="material-icons-outlined">shopping_cart</span></div>
                <p> Cart</p></button></a>
            </div>
        </div>
    </div>
</div>  
<div class="options">
    <p class="cat">Category</p>
    <p class="app">APP ONLY</p>
    <p class="arr">NEW ARRIVALS</p>
</div>`
}

export default navbar
