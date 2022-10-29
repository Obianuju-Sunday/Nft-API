// if (bar){
//     bar.addEventListener('click', () => {
//         nav.classList.add('active')
//     })
// }

// AOS.init({
//   duration: 2000,
//   once: true
// });

// var navLinks = document.getElementById("navLinks");

// function showMenu(){
//     navLinks.style.left = "0";
// }
// function hideMenu(){
//     navLinks.style.left = "-200px";
// }


const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: '8a341535-9704-4b9d-a42a-1246440eeda6' }
  };
  const nftSection = document.querySelector('.resource')
  nftSection.innerHTML = '';
  const addr = ['0xa7a05e655cbed5356d2fa851e96f7f68e4a6f954',
   '0xef979d2cc57538bd2a3f48a033ebd06955b513b3/371', '0x567fafaa1dc3c6f6447e0d898ec25a404aa08b3e/2741']
  for (var i = 0; i < addr.length; i++) {
    console.log(addr[i])
    // const contract = nfts.nfts[i].contract_address
    let img, desc, name = ''
      fetch(`https://api.nftport.xyz/v0/nfts/${addr[i]}?chain=ethereum`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          img = response.contract.metadata?.thumbnail_url || response.nft.cached_file_url
          desc = response.contract.metadata?.description.substring(0, 88) || response.nft.metadata?.description.substring(0, 88)
          name = response.contract?.name || response.nft.metadata?.name
          nftSection.innerHTML += `
          <div class="resos">
            <div class="rce">
                <h5>${name}</h5>
                <img src="${img}">
            </div>
            <h3>${desc}</h3>
            <span>
                <h6>Ladunle Coker</h6>
                <h6>June 17th, 2022</h6>
            </span>
        </div>
          `;
        })
        .catch(err => console.error(err));
  
  }
/*
  fetch(`https://api.nftport.xyz/v0/nfts?chain=ethereum`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })*/