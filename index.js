


function namaUser() {
    let inputValue = document.getElementById('fname').value;
    console.log(inputValue + 'ini input Value')
    return inputValue
}

function dineTakeAway() {
  let radioValue = document.getElementsByName("makan");
  let output = "";
  for (let i = 0; i < radioValue.length; i++) {
      if (radioValue[i].checked) {
          output = radioValue[i].value;
      }
      
  }
     console.log(output +  "<<=== radio Value output");
  return output
}

function cariProtein() {
  let selectedValue = document.getElementById("lunch").value;
  let Num = Number(selectedValue)
  console.log(Num, "<<<=== selected value");
  return Num
}

function toppingBurger() {
  let radioValue = document.getElementsByName("topping");
  let output = 0;
  for (let i = 0; i < radioValue.length; i++) {
      if (radioValue[i].checked) {
          output += Number(radioValue[i].value);
      }
    
  }
     console.log(Number(output), "<<=== output topping");
  return Number(output)
}



function cheesed() {
  let radioValue = document.getElementsByName('Cheeses');
  let output = 0;
  for (let i = 0; i < radioValue.length; i++) {
      if (radioValue[i].checked) {
          output += Number(radioValue[i].value);
      }
    
  }
     console.log(Number(output), "<<=== output topping");
   return Number(output)
}

function frenchFries() {
    let radioValue = document.getElementsByName("fries");
    let output = 0;
    for (let i = 0; i < radioValue.length; i++) {
        if (radioValue[i].checked) {
            output += Number(radioValue[i].value);
        }    
    }
       console.log(Number(output), "<<=== output topping");
    return Number(output)
  }

  document.getElementById('submitButton').addEventListener('click',function(event){
    event.preventDefault()
    let cheese = cheesed()
    let fries1 = frenchFries()
    let topping = toppingBurger()
    let protein = cariProtein()
    
    let total = (cheese+fries1+topping+protein)
    document.getElementById("total").innerHTML = total
    console.log(total,'masuk total')
    

    let name = namaUser()
  
    alert(`Hello! ${name} Thank You For Ordering Your Total Price is ${total} Please Come back anytime!`)
  })



