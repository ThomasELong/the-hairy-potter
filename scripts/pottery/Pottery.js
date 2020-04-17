

export const potteryItem = (potteryObject) => {
    return `
        <div>
            <section>
                <ul>
                    <li>${potteryObject.shape}</li>
                    <li>${potteryObject.weight}</li>
                    <li>${potteryObject.height}</li>
                </ul>
            </section>
        </div>
    `
}