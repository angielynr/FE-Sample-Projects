const advice = document.getElementById("advice");
const quote = document.getElementById("quote-text");
const refreshButton = document.getElementById("refresh-button");

getAdvice();

refreshButton.addEventListener("click", getAdvice);

function getAdvice() {
    let response = fetch("https://api.adviceslip.com/advice");

    response
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            quote.innerHTML = `"${result.slip.advice}"`;
            advice.innerHTML = `ADVICE # ${result.slip.id}`;
        })
        .catch(() => {
            alert(
                "Error occurred in acquiring the advice from the internet, please try again after some time"
            );
        });
}
