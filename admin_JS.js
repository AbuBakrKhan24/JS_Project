let properties = JSON.parse(localStorage.getItem("Property_Info"))
? JSON.parse(localStorage.getItem("Property_Info"))
:  [
      {
        id: 1,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%201/Chitanda%20Family%20House.jpeg?raw=true",
        badge: "For Rent",
        description: "Quiet place, You can visit its exclusive fashion stores.",
        price: "4 500",
      },
      {
        id: 2,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%202/sawa's%20home.png?raw=true",
        badge: "For Sale",
        description:
          "Quiet neighbourhood, park close by and beautiful scenery.",
        price: "950 000",
      },
      {
        id: 3,
        property_type: "Apartment",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%203/Kagome's%20Home.jpeg?raw=true",
        badge: "For Rent",
        description:
          "Friendly neighbours, grocery store 5km away public transpot 30m away and no pets allowed.",
        price: "2 500",
      },
      {
        id: 4,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%204/Glass%20Workshop.png?raw=true",
        badge: "For Sale",
        description:
          "Beautiful decor and scenery, marketplace 3km away quiet neighbourhood.",
        price: "2 000 000",
      },
      {
        id: 5,
        property_type: "Apartment",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%205/Citrus.jpg?raw=true",
        badge: "For Rent",
        description:
          "Busy neighbourhood but Friendly, very spaciuos market place 5km away and pets allowed.",
        price: "8 000",
      },
      {
        id: 6,
        property_type: "Apartment",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%206/El%20Nuevo.jpg?raw=true",
        badge: "For Rent",
        description:
          "Busy neighbourhood but Friendly, different markets nearby 3km away.",
        price: "5 000",
      },
      {
        id: 7,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%207/Rose%20Hill%20Ct.jpg?raw=true",
        badge: "For Sale",
        description:
          "Luxurious home, very spaciuos, enough for 3 families to live in.",
        price: "7 000 000",
      },
      {
        id: 8,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%208/Victorique's%20House.jpeg?raw=true",
        badge: "For Rent",
        description:
          "Cosy house for a family starting out, market place 8km away and neighbourhood is Friendly but quiet.",
        price: "4 000",
      },
      {
        id: 9,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%209/Farm%20(Anime%20Background)%20002%20D.jpg?raw=true",
        badge: "For Sale",
        description:
          "Beautiful home with a fresh air in its atmosphere, garderns to grow your crops and flowers.",
        price: "1 250 000",
      },
      {
        id: 10,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%2010/2713947.jpg?raw=true",
        badge: "For Rent",
        description:
          "Nice house to live in with beautiful scenery, open fields and lots of free space, marketplace is far 120km away.",
        price: "4 500",
      },
      {
        id: 11,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%2011/urban.jpg?raw=true",
        badge: "For Sale",
        description:
          "Beautiful cosy house for a nice loving family, busy and Friendly neighbourhood.",
        price: "2 500 000",
      },
      {
        id: 12,
        property_type: "House",
        property_img:
          "https://github.com/AbuBakrKhan24/JS_Project/blob/main/Images/Property%2012/2713955.jpg?raw=true",
        badge: "For Rent",
        description:
          "Beautiful home for a family that is starting out, loving neighbours and very Friendly.",
        price: "3 500",
      },
    ];

//Show Properties
function showProperty(properties) {
  document.querySelector("#propertyHolder").innerHTML = "";
  properties.forEach((property) => {
    console.log(property);
    document.getElementById("propertyHolder").innerHTML += `
    <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">House/Apartment</th>
              <th scope="col">Image-link</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Customize</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${property.id}</th>
              <td>${property.property_type} ${property.badge}</td>
              <td><img src="${property.property_img}"></td>
              <td class="desc">${property.description}</td>
              <td class="price">R${property.price} ${
      property.badge == "For Sale" ? "" : "pm"
    }</td>
              <td><div class="edit_buttons"><i class="fa-solid fa-trash bin onclick="deleteProperty(id)"></i><i class="fa-solid fa-pen edit" onclick="editProperty(id);"></i></div></td>
            </tr>
          </tbody>
        </table>
      `;
  });
}
showProperty(properties);

// Add function
function addProperty() {
  NewProperty = {
    id: properties.length + 1,
    property_type: document.getElementById("property_type").value,
    property_img: document.getElementById("image_link").value,
    badge: document.getElementById("rent_sale").value,
    description: document.getElementById("desc").value,
    price: document.getElementById("price_given").value,
  };
  properties.push(NewProperty);
  document.getElementById("propertyHolder").innerHTML += `
  <div class="col-md-4 col-sm-6">
              <div class="staff">
                <img id="property_img"
                  class="img-fluid"
                  src="${NewProperty.property_img}"
                />
                <div class="staff-details">
                  <div class="badge_div" >
                    <span class="badge text-bg-primary" id="sale/rent">${
                      NewProperty.badge
                    }</span>
                  </div>
                  

                  <h5 id="property_type">${NewProperty.property_type}</h5>
                  <p id="property_details">
                    ${NewProperty.description}
                  </p>
                  <div>R 
                  <span id="price">
                    ${NewProperty.price} ${
    NewProperty.badge == "For Sale" ? "" : "pm"
  }
                  </span> 
                  
                </div>
                </div>
              </div>
            </div>
  `;

  console.log(properties);
  localStorage.setItem("Property_Info", JSON.stringify(properties));
  showProperty(properties);
}

// Delete function
function deleteProperty(id) {
  properties = properties.filter((property) => {
    property.id !== id;
  });
  console.log(properties);
  localStorage.setItem("Property_Info", JSON.stringify(properties));
  showProperty(properties);
}

// Edit function
function editProperty(id) {
  let = properties.find((properties) => properties.id === id);
  properties.property_type = "new";
}

// add this to button in html
//  editProperty(${properties.id})

// Incase needed this is setting local storage
// JSON.parse(localStorage.getItem("Property_Info"))
//   ? JSON.parse(localStorage.getItem("Property_Info"))
//   :
