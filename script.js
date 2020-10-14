// console.log("hello");
const quizRes = {
    0: `There are a variety of colors for which are used for recycling different materials. 
    For instance, it a universal rule that blue bins are meant for containing plastic, glass, and metal materials.
    As for green bins, they are reserved for paper. Sourced from 
    <a href="https://www.grownyc.org/recycling/faq#:~:text=New%20York%20City%20does%20not,clear%20bag%2013%2D55%20gallons.">
    GrowNYC</a>`,
    1: `It's a horrid truth but NYC is pretty bad at recycling, with a lot of our trash AND RECYCLING being placed in 
    landfills. The situation was made even worse in 2017 when China stopped recieving our trash. Prior to 2017, when China 
    was smaller and poorer, they took U.S trash and sorted through it for recyclables they would use to make products and 
    ship it back to the U.S. As such, the U.S is having trouble handling the amount of trash to sort through, making it much more
    efficient to reuse plastic and other products rather than placing plastic in recycling and buying a new one.
    `,
    2: `Yes you should recycle. Can't think of a reason not to since it's imperative to prevent the amount of trash being produced 
    that ruins our environment. `,
    3: `Recycling would help our planet by `,
    4: `NYC has a page listing what can and can't be recycled at <a href="https://portal.311.nyc.gov/article/?kanumber=KA-02013">
    here.</a> Essentially the ` 
}

const quizColor = [];

document.getElementById("submit").onclick = function(e){
    
    e.preventDefault()
    let data = Array.from(document.querySelectorAll("#form-data input")).reduce((acc, input)=>({...acc,[input.id]: input.checked}), {});
    console.log(data);
    revealAnswers(data);
};

function revealAnswers(info){
    if(info["black-bin"]){
        quizColor.push("red");
    } else {
        quizColor.push("green");
    }

    if(info["amount-recycled"]){
        quizColor.push("green");
    } else {
        quizColor.push("red");
    }

    if(info["yes-recycling"]){
        quizColor.push("green");
    }else{
        quizColor.push("green");
    }

    if(info["global-warming"]){
        quizColor.push("green");
    } else {
        quizColor.push("red");
    }

    if(info["plastic-film"] || info["binder-plastic"] || info["pvc]"]){
        quizColor.push("red");
    } else {
        quizColor.push("green");
    }

    let constant = `
    <div id="answers">
        <p class="${quizColor[0]}">${quizRes[0]}</p>
        <p class="${quizColor[1]}">${quizRes[1]}</p>
        <div class="vid">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-htnUTN4mH0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="${quizColor[2]}">${quizRes[2]}</p>
        <p class="${quizColor[3]}">${quizRes[3]}</p>
        <p class="${quizColor[4]}">${quizRes[4]}</p>
    </div>
    `;
    const form = document.getElementById("form-container");
    form.innerHTML = constant;
    form.style.overflowX = "scroll";
    form.style.padding = "20px";
    const answers = document.getElementById("answers");
    answers.style.padding = "20px";
    console.log(form.style);
}