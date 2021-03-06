// localStorage.removeItem('records');
// JSON.parse(localStorage.getItem("PropertyInfo"))
// ? JSON.parse(localStorage.getItem("PropertyInfo"))
// : 

// Properties Array
let properties =  [
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

function showProperty(properties) {
  document.querySelector("#propertyHolder").innerHTML = "";
  properties.forEach((property) => {
    console.log(property);
    document.getElementById("propertyHolder").innerHTML += `
      <div class="col-md-4 col-sm-6">
              <div class="staff">
                <img id="property_img"
                  class="img-fluid"
                  src="${property.property_img}"
                />
                <div class="staff-details">
                  <div class="badge_div" >
                    <span class="badge text-bg-primary" id="sale/rent">${
                      property.badge
                    }</span>
                  </div>
                  

                  <h5 id="property_type">${property.property_type}</h5>
                  <p id="property_details">
                    ${property.description}
                  </p>
                  <div>R 
                  <span id="price">
                    ${property.price} ${
      property.badge == "For Sale" ? "" : "pm"
    }
                  </span> 
                  
                </div>
                </div>
              </div>
            </div>
      `;
  });
}
showProperty(properties);

