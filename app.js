
const btn = document.getElementById('basic-addon2');
const input = document.getElementById('input-search');



const fetchCountry = async () => {
  const name = input.value
  const url = `https://restcountries.com/v3.1/name/${name}`;
  try {
    const res = await fetch(url);
    if(!res.ok){
      renderError(`Something is wrong: ${res.status}`);
      throw new Error()
      
      
    }
    const data = await res.json();
    console.log("çalıştı");
    
    renderCountry(data[0])
  }catch(error){}
  
  
  
};
btn.addEventListener('click',fetchCountry);
const countriesDiv = document.querySelector('.countries')
const renderError = (err)=> {
  
  countriesDiv.innerHTML = `
  <h1 class="text-danger">${err}</h1>
  <img src="./404.png" alt="">
  `
}

const renderCountry = (country) => {
  console.log(country);
  
  const countriesDiv = document.querySelector('.countries');
  const {
    capital,
    name:{common},
    region,
    flags: {svg},
    languages,
    currencies,
  }= country

 
  
  
  countriesDiv.innerHTML +=` <div class="card" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>${capital}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>
      ${Object.values(currencies)[0].name},${Object.values(currencies)[0].symbol}</li>
  </ul>
</div>`
input.value=''
  }
 
    
   
  
  
  


