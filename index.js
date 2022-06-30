// localStorage.removeItem('records');
// Adding array

// JSON.parse(localStorage.getItem("Stored_Info"))
//   ? JSON.parse(localStorage.getItem("Stored_Info"))
//   :

// let properties = [
//   {
//     id: 1,
//     property_type: "House",
//     description: "Quiet place, You can visit its exclusive fashion stores.",
//     price: "R4 500",
//     createDate: new Date(),
//   },
// ];

// Loop
// function showProperty(properties) {
//   document.querySelector("#propertyHolder").innerHTML = "";
//   properties.forEach((property) => {
//     console.log(property);
//     document.getElementById("propertyHolder").innerHTML += `
//     <div class="col-md-4 col-sm-6">
//               <div class="staff">
//                 <img
//                   class="img-fluid"
//                   src="https://raw.githubusercontent.com/AbuBakrKhan24/JS_Project/main/public/Images/Property%201/Chitanda%20Family%20House.jpeg"
//                 />
//                 <div class="staff-details">
//                   <div class="badge_div">
//                     <span class="badge text-bg-primary">For Rent</span>
//                   </div>

//                   <h5>House</h5>
//                   <p>
//                     Quiet place, You can visit its exclusive fashion stores.
//                   </p>
//                   R4 500 per month
//                 </div>
//               </div>
//             </div>
//     `;
//   });
// }
// showProperty(properties);

// Add Function
// function add() {
//   NewItem = {
//     id: items.length + 1,
//     product: document.getElementById("add_info").value,
//     createDate: new Date(),
//   };
//   items.push(NewItem);
//   document.getElementById("list").innerHTML += `
//   <div class="item" id="listing"><input class="chb checkboxes " type="checkbox"><label for="add_info">${NewItem.product}</label></div>
//   `;

//   console.log(items);
//   localStorage.setItem("Stored_Info", JSON.stringify(items));
// showItems(items);
// }
