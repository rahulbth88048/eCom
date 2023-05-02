const container = document.getElementsByClassName('container');

async function data() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function cardRender() {
    let cardData = await data();
    console.log(cardData);
    let html = '';
    cardData.forEach(apiData => {
        let card = `<div class="card">
        
        <a href="./details.html?product=${apiData.id}"><img src="${apiData.image}" alt="${apiData.title}" class="image"></a>
        <div class="card-body">
            <div> <h4>${apiData.title}</h4></div>
           <div class="card-footer"> 
                <div><h3>Price : ${apiData.price}</h3></div>
                <div><button>Add to Cart</button></div>
                
           </div>
        </div>
        
      </div>`;

        html += card;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

cardRender();

const searchInput = document.getElementById('search');
const cards = document.getElementsByClassName('card');
console.log(cards);
searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < cards.length; i++) {
    const productName = cards[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
    if (productName.includes(searchValue) ) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
});
