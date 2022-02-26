const inputs = document.querySelectorAll(".angle-input")
const triangleBtn = document.querySelector("#triangle-button")
const output = document.querySelector('#output')

triangleBtn.addEventListener('click', isTriangle)




function sumOfAllAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
}

function isTriangle(){
    sumOfAngles = sumOfAllAngles(Number(inputs[0].value), Number(inputs[1].value) , Number(inputs[2].value))

    if(sumOfAngles === 180){
        output.innerText = "The given angles form a triangle"
    }

    else{
        output.innerText = "The angles do not form triangle"
    }
    console.log(sumOfAngles);
    sumOfAngles = 0

}