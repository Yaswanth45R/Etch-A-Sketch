const mainDiv = document.querySelector('.main-container');
let mainContainer = document.querySelector('.main-container');
mainContainer.style.height = "352px";
mainContainer.style.width = "352px";
for(let i=0;i<256;i++)
{
    let div = document.createElement("div");
    div.classList.add('grid');
    mainDiv.appendChild(div);
};

const divs = document.querySelectorAll('.grid');
divs.forEach((divd) => divd.addEventListener('mouseenter',colorChange));

function colorChange(event){
    event.target.style.background=`#${Math.floor(Math.random()*16777215).toString(16)}`;
}

const clearButton = document.querySelector('.btnClear');
clearButton.addEventListener('click',resetColor)

function resetColor()
{
    divs.forEach((divd)=>(divd.style.background='white'));
}

const changeBtn = document.querySelector('.btnChangeSquare');
changeBtn.addEventListener('click',changeSquare);

function changeSquare()
{
    let numSqr = prompt('Please enter number of square for each side (must be in range 16-64)');
    if (numSqr>0 && numSqr<64)
    {
        let divs = document.querySelectorAll(".grid");
        divs.forEach((div)=>{div.remove()});

        for(let i=0;i<numSqr*numSqr;i++)
        {
            let div = document.createElement("div");
            div.classList.add('grid');
            mainDiv.appendChild(div);
        };

        mainContainer.style.height = `${((20+2)*(numSqr))}px`;
        mainContainer.style.width = `${((20+2)*(numSqr))}px`;

        const divds = document.querySelectorAll('.grid');
        divds.forEach((divd) => divd.addEventListener('mouseenter',colorChange));

        const clearBtn = document.querySelector('.btnClear');
        clearBtn.addEventListener('click',()=>{divds.forEach((divd)=>(divd.style.background='white'));})
    }
}