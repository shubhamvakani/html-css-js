const addButton = document.querySelector('#add');  // Get ref of add button 
const newdiv = document.querySelector('.outer_container')
const outerdiv = document.createElement('div')
    outerdiv.classList.add('outer_container')
    document.body.appendChild(outerdiv);


const updateLSdata = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) =>{   // it will add data to empty array 
        return notes.push(note.value);
    })


    localStorage.setItem('notes', JSON.stringify(notes))  // this will data to local storage
}


// 2. when button clicked this below addnewnote function will call
const addNewNotes = (text = '') => {

    
    const note = document.createElement('div');  // this will create div element
    note.classList.add('note');  // this will add class to created div 
    
    

    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
    <div class="main ${text ? " " : "hidden" } "></div>
    <textarea class=" ${text ? "hidden" : "" }" placeholder="Write here..."></textarea>`;
    

    note.insertAdjacentHTML('afterbegin', htmlData);  // this will add htmldata to created div 
    outerdiv.insertAdjacentElement('beforebegin',note)

    // Getting Refreance 
    const editBtn = note.querySelector('.edit');
    const delBtn = note.querySelector('.delete');
    const mainBtn = note.querySelector('.main');
    const textarea = note.querySelector('textarea'); // ref using tag name 
    
    // deleting notes
    delBtn.addEventListener('click', () => {
        note.remove();
        updateLSdata();
    })
    
    // toggle using edit button
    textarea.value = text;
    mainBtn.innerHTML = text;

    editBtn.addEventListener('click', ()=>{
        mainBtn.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('change',(event) =>{
        const value = event.target.value;
        mainBtn.innerHTML = value

        // When we add data to this .
        updateLSdata();
    })

    
    document.body.appendChild(note); // it will add 
    outerdiv.appendChild(note);


}


// Getting data from local storage

const notes = JSON.parse(localStorage.getItem('notes')) // we have data as array json.parse will convert that data into 

if (notes){
    notes.forEach((note)=> addNewNotes(note));
}


addButton.addEventListener('click', () =>{  
    addNewNotes(); // 1. When we clicked on add this function will call
})