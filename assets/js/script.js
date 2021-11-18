// TODO: Declare any global variables we need

let totalTails = 0;
let totalHeads = 0;

let coinImg = document.getElementById('penny-heads');
let total = totalHeads + totalTails;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    document.getElementById('flip-button').addEventListener('click', () => {
        // If 0.5 or less = tails, else = heads
        let result = Math.random() < 0.5;
        //
        if (result < 0.5) {
            coinImg.src = './assets/images/penny-heads.jpg';

            totalHeads = totalHeads + 1;
        } else {
            coinImg.src = './assets/images/penny-tails.jpg';

            totalTails = totalTails + 1;
        }
        //Update the scoreboard
        let total = totalHeads + totalTails;
        
        let percentTails = 0;
        let percentHeads = 0;


        if (total > 0) {
            //Calculate the percents of heads and tails
            percentHeads = Math.round((totalHeads / total) * 100);
            percentTails = Math.round((totalTails / total) * 100);
        }

        //Update the scoreboard values
        document.getElementById('heads').textContent = totalHeads;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails').textContent = totalTails;
        document.getElementById('tails-percent').textContent = percentTails + '%';


    });

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})