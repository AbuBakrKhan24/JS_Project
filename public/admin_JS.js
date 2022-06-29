// To do app
// Adding array
const items = [
    {
      id: 1,
      property_type: "House",
      description: "Quiet place, You can visit its exclusive fashion stores.",
      price: "R4 500",
      createDate: new Date(),
    },
  ];
  
  // Original Loop
  
  items.forEach((item) => {
    console.log(item);
    document.getElementById("list").innerHTML += `
    <div class="item" id="listing"><input class="chb checkboxes"  type="checkbox"  ><label for="add_info">${item.product} <button type="button" onclick="deleteTask()">✂</button></label></div>
    `;
  });
  
  // Add Function
  function add() {
    NewItem = {
      id: items.length + 1,
      product: document.getElementById("add_info").value,
      createDate: new Date(),
    };
    items.push(NewItem);
    document.getElementById("list").innerHTML += `
    <div class="item" id="listing"><input class="chb checkboxes " type="checkbox"><label for="add_info">${NewItem.product  } <button type="button" onclick="deleteTask()">✂</button></label></div>
    `;
    
  }
  
    console.log(items);
  
    function deleteTask(){
    const id = items.indexOf(items); 
    const removeTask = items.splice(id,  1);  //splice array method
    
    }
  
// To do app done