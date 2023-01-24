const addInput = document.querySelector("#add-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(addInput.value !== "") {
        console.log(addInput.value);

        const liItem = document.createElement("li");
        liItem.innerHTML = `
            <p>${addInput.value}</p>
            <p>
                <i class="fa fa-pencil-square-o"></i>
                <i class="fa fa-times"></i>
            </p>
            <input type="text" class="edit-note">
        `

        const editBtn = liItem.querySelector(".fa-pencil-square-o");
        const deleteBtn = liItem.querySelector(".fa-times");
        editBtn.addEventListener("click", () => {
    
            if(liItem.querySelector("input").style.display === "" || liItem.querySelector("input").style.display === "none") {
                liItem.querySelector("input").style.display = "block";
            } else {
                liItem.querySelector("input").style.display = "none";
                liItem.querySelector("input").value = "";
            }
            
        });
    
        deleteBtn.addEventListener("click", () => {
            list.removeChild(liItem);
        });
    
        liItem.querySelector("input").addEventListener("change", (e) => {
            liItem.querySelector("p").innerText = e.target.value;
        });

        list.appendChild(liItem);
    }

    addInput.value = "";
})

for(let i = 0; i < list.children.length; i++) {
    const liItem = list.children[i];
    const editBtn = liItem.querySelector(".fa-pencil-square-o");
    const deleteBtn = liItem.querySelector(".fa-times");
    editBtn.addEventListener("click", () => {

        if(liItem.querySelector("input").style.display === "" || liItem.querySelector("input").style.display === "none") {
            liItem.querySelector("input").style.display = "block";
        } else {
            liItem.querySelector("input").style.display = "none";
            liItem.querySelector("input").value = "";
        }
        
    });

    deleteBtn.addEventListener("click", () => {
        list.removeChild(liItem);
    });

    liItem.querySelector("input").addEventListener("change", (e) => {
        liItem.querySelector("p").innerText = e.target.value;
    });

}