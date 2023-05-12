document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("button").addEventListener("click", () => {
        
        const request = new XMLHttpRequest();
        request.onload = function(){
            console.log("getting json")
            const data = JSON.parse(this.responseText);
            const setup = data.setup;
            const punchline = data.punchline;

            console.log("changing heading")

            document.getElementById("heading1").innerHTML = "jokes";
            document.getElementById("Jokes").innerHTML = setup;
            document.getElementById("heading2").innerHTML = "punchline";
            document.getElementById("Punchline").innerHTML = punchline;

            console.log("done")

        }
        request.open("GET", "https://official-joke-api.appspot.com/random_joke");
        request.send();
        console.log("requesting json")




    })

})