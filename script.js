//
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      

      // document.getElementById("id").textContent = data.id;

      const { advice, id } = data.slip;

      document.getElementById("id").textContent = id;
      document.getElementById("advice").textContent = `"${advice}"`;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

// document.querySelector('.btn').addEventListener("click", () => {
//   fetch("https://api.adviceslip.com/advice")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data, 22);
//     const { advice, id } = data.slip;
//     console.log(advice);
//     console.log(id);

//     document.getElementById("id").textContent = id;
//     document.getElementById("advice").textContent = advice;
//   })
//   .catch((error) => {
//     console.error("Error fetching joke:", error);
//   })
// })

fetchAdvice();
