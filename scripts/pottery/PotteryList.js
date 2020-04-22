
const contentTarget=document.querySelector(".addPotteryForm")
const eventHub=document.querySelector(".container")



export const createPotteryObject = () => {

    if(event.target.id === "savePotteryItem") {
        const potteryShape = document.querySelector("#potteryShape").value
        const potteryWeight = document.querySelector("#potteryWeight").value
        const potteryHeight = document.querySelector("#potteryHeight").value

        /* finalPotteryItem represents a piece of pottery - 1.i
           It outlines it's shape, weight, and height - 1.ii
           It uses an HTML form to input each of these items - 1.iii
           Still need to attribute
        */
        const finalPotteryObject = {
            shape: potteryShape,
            weight: potteryWeight,
            height: potteryHeight,
        }
    }
}