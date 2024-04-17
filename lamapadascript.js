function switchlamp(){
   const lamp = document.getElementById("lampImg");
   const button = document.getElementById("btn");
   const background = document.body
   console.log(button)
   if (lamp.getAttribute("name") == "on"){
    lamp.setAttribute("src", "https://i.postimg.cc/KjK1wL3c/bulb-off.png")
    lamp.setAttribute("name", "off")
    button.innerHTML = 'ACENDER'
    background.style.cssText = " background-color: gray ; -webkit-transition: background-color 1000ms linear; -ms-transition: background-color 1000ms linear;transition: background-color 1000ms linear;"
   }
   else{
    lamp.setAttribute("src", "https://i.postimg.cc/6QyTynzr/bulb-on.png")
    lamp.setAttribute("name", "on")
    button.innerHTML = 'APAGAR'
    background.style.cssText = " background-color: yellow ; -webkit-transition: background-color 1000ms linear; -ms-transition: background-color 1000ms linear;transition: background-color 1000ms linear;"
   }
}
