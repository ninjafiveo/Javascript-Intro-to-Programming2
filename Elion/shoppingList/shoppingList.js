function addItemBtn(){
    var table = document.getElementById("shoppingItemTable");
    var row = table.insertRow(1);
    var itemCell = row.insertCell(0);
    var numberOfEachItemCell = row.insertCell(1);

    var costPerCell = row.insertCell(2);

    var totalCell = row.insertCell(3);

    var addDeleteCellBtn = row.insertCell(4);
    itemCell.innerHTML = document.getElementById("itemName").value;
    numberOfEachItemCell.innerHTML = document.getElementById("numberOfItem").value;
    costPerCell.innerHTML = document.getElementById("costPerItem").value;
    totalCell.innerHTML = document.getElementById("itemTotal").value;
    addDeleteCellBtn.innerHTML = '<button id="deleteItemBtn" onclick="deleteBtn(this)">❌</button>';
    

    // var numberOfItems = parseInt(costPerCell);
    // var itemCost = parseInt(costPerCell);
    // var total = parseInt(numberOfItems * itemCost);

    
    var numberOfItems = costPerCell;
    var itemCost = costPerCell;
    var total = parseInt(numberOfItems) * parseInt(itemCost);

    console.log(total);
    console.log(typeof total)
}



function deleteBtn(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("shoppingItemTable").deleteRow(i);

}
