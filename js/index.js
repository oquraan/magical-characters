let obj = [],
  obj2 = [];
const CardContaier = document.getElementsByClassName("CardContaier")[0];
let selectValue;
const selectHouseValue = document.getElementById("selectHouse");

selectValue = selectHouseValue.value;
console.log(selectValue);

selectHouseValue.addEventListener("change", () => {
  selectValue = selectHouseValue.value;
  console.log(selectValue);
  // fetchData();
  selectHouse();
  CardContaier.innerHTML = "";
  displayData(obj2, selectValue);
});

function fetchData() {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => {
      if (!response.ok) throw new Error("");

      // obj = obj.slice(0, 16);
      return response.json();
    })
    .then((data) => {
      obj = data.slice(0, 16);
      displayData(data.slice(0, 16), selectValue);
      // selectHouse();
    })
    .catch(() => {
      // document.body.innerHTML =
      //   '<img class="imgclas" src="images/not-found.png">';
      // const main1 = document.getElementsByClassName("CardContaier")[0];
      // main1.innerHTML = '<img class="imgclas" src="images/not-found.png">';

      const main = document.getElementsByTagName("main")[0];
      main.innerHTML = `
    
          <img class="imgclass" src="images/not-found.png" alt="Error Image">
      
      `;
      // main.style.backgroun = "url('images/not-found.png')";
      // main.style.backgroundSize = "fit";
      // main.style.backgroundRepeat = "no-repeat";
      // main.style.backgroundPosition = "center center";
    });
}

function displayData(data, selectValue) {
  data.forEach(
    (element) => {
      // if (selectValue == "All houses") {

      
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `         <img class="imgcard" src="${
        element.image ? element.image : "images/not-found.png"
      }" />

              <div class="cardContant">
              
      <p class="nameOfCard">${element.name}</p>
            <p class="houseOfCard">${element.house}</p>

            <p class="houseOfCard">${element.dateOfBirth}</p> 
              
              </div>

    `;
      CardContaier.appendChild(card);
    }
    // }
  );

  // data.forEach((element) => {
  //   if (element.house == selectValue) {
  //     obj2.push(element);
  //   }
  // });

  // obj2.forEach((element) => {
  //   const card = document.createElement("div");
  //   card.className = "card";
  //   card.innerHTML = `       <img  class="imgcard" src="${element.image}"/>

  //             <div class="cardContant">

  //     <p class="nameOfCard">${element.name}</p>
  //           <p class="houseOfCard">${element.house}</p>

  //           <p class="houseOfCard">${element.dateOfBirth}</p>

  //             </div>

  //   `;
  //   CardContaier.appendChild(card);
  // });
}

function selectHouse() {
  obj2 = [];
  obj.forEach((element) => {
    if (element.house == selectValue) {
      obj2.push(element);
    } else if (selectValue == "All houses") {
      obj2.push(element);
    }
    // else if (selectValue == "All houses") {

    // }
  });
  //   if (selectValue == "Gryffindor") {
  //     obj.forEach((element) => {
  //       if (selectValue == "Gryffindor" && element.house == selectValue)
  //         obj2.push(element);
  //     });
  //   }
  //  else  if (selectValue == "Slvtherin") {
  //     obj.forEach((element) => {
  //       if (selectValue == "Slvtherin" && element.house == selectValue)
  //         obj2.push(element);
  //     });
  //   }
  //   else if (selectValue == "Hufflepuff") {
  //     obj.forEach((element) => {
  //       if (selectValue == "Hufflepuff" && element.house == selectValue)
  //         obj2.push(element);
  //     });
  //   }

  // else  if (selectValue == "Ravenclaw") {
  //     obj.forEach((element) => {
  //       if (selectValue == "Ravenclaw" && element.house == selectValue)
  //         obj2.push(element);
  //     });
  //   }
  //   else
  //   {

  //   }

  // } else if (selectValue == "Slvtherin") {
  //   obj.forEach((element) => {
  //     obj2.push(element);
  //   });
  // } else if (selectValue == "Hufflepuff") {
  //   obj.forEach((element) => {
  //     obj2.push(element);
  //   });
  // } else if (selectValue == "Ravenclaw") {
  //   obj.forEach((element) => {
  //     obj2.push(element);
  //   });
}

fetchData();
// selectHouse();
