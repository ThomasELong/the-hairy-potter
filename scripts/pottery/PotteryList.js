
const contentTarget=document.querySelector(".addPotteryForm")
const eventHub=document.querySelector(".container")



const createPotteryObject = () => {

    if(event.target.id === "savePotteryItem") {
        const potteryShape = document.querySelector("#potteryShape").value
        const potteryWeight = document.querySelector("#potteryWeight").value
        const potteryHeight = document.querySelector("#potteryHeight").value

        const finalPotteryItem = {
            shape: potteryShape,
            weight: potteryWeight,
            height: potteryHeight,
        }
    }
}