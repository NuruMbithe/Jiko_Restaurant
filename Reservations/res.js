document.addEventListener("DOMContentLoaded", function() {
    let amount = document.querySelector("#amount").innerHTML;
  
    document.querySelectorAll("button").forEach(function(button) {
      button.addEventListener("click", function() {
        const id = this.id;
  
        if (id === "minus" && amount > 0) {
          amount--;
          document.querySelector("#amount").innerHTML = amount;
        } else if (id === "plus") {
          amount++;
          document.querySelector("#amount").innerHTML = amount;
        }
      });
    });
  });
  

  // Get the submit button element
const myButton = document.getElementById("confirm-btn");

// Submit the form when the button is clicked
myButton.addEventListener("click", function() {
  const myForm = document.getElementById("my-form");
  myForm.submit();
});