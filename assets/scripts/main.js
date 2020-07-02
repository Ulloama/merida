let linkCraftPack;

window.onload = function () {
    linkCraftPack = document.getElementById("craft-pack");
    linkCraftPack.addEventListener("click", function(){
        window.open("craftpack/index-cp.html", linkCraftPack)
    }
    )

};