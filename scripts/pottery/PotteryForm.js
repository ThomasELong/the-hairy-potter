
const contentTarget=document.querySelector(".addPotteryForm")
const eventHub=document.querySelector(".container")

export const potteryInputForm = () => {
    contentTarget.innerHTML = `
    <dialog id="potteryInputFormContainer">
            <form action="" class="potteryInputForm">
                <fieldset>
                    <label for="shape">Shape:</label>
                    <textarea name="shape" id="potteryShape" cols="60 rows="2"></textarea>
                </fieldset>
                <fieldset>
                    <label for="weight">Weight:</label>
                    <textarea name="weight" id="potteryWeight" cols="60" rows="2"></textarea>
                </fieldset>
                <fieldset>
                    <label for="height">Height:</label>
                    <textarea name="height" id="potteryHeight" cols="60" rows="2"></textarea>
                </fieldset>
                <button id="savePotteryButton">Save Pottery Item</button>
            </form>
    </dialog>
    `
}