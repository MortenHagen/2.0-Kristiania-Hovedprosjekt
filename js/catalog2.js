
const newProductPages = [
	{
		 stickerImg: 'assets/catalog-img/red-jacket-back.webp',
		 productHeader: 'Innføring',
		 productTextContent: 'Her kan du skrsadgawrgW1111',
		 productAttribute: 'red-jacket',
	},
	{
		 stickerImg: 'assets/catalog-img/blue-jacket.webp',
		 productHeader: 'Overskrift',
		 productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
		 productAttribute: 'blue-jacket',
		 productPicture1:'assets/catalog-img/blue-jacket.webp',
		 productPicture2:'assets/catalog-img/blue-jacket.webp',
		 productPicture3:'assets/catalog-img/blue-jacket.webp',
		 productPicture4:'assets/catalog-img/blue-jacket.webp',
	}
];



const productPages = document.querySelectorAll('.product-page');
const mainStickers = document.querySelectorAll('.main-sticker');

function filterStickers (event) {
	  const pageToShow = event.currentTarget.dataset.stickerFilter;

    newProductPages.forEach(newProductPage => {
      if (pageToShow === newProductPage.productAttribute) {
			console.log(newProductPage.productAttribute);
        const productPage = document.createElement('div');
        productPage.classList.add('product-page', 'showGrid');
        productPage.setAttribute('data-catalog-page', newProductPage.productAttribute);

        const exitButton = document.createElement('button');
			exitButton.classList.add('exit-button__grid');
			exitButton.textContent = 'X';
			productPage.appendChild(exitButton);
			
			const logoContainer = document.createElement('div');
			logoContainer.classList.add('product-page__header', 'show', 'offset--8', 'column--2', 'offset-small--5', 'column-small--2');
			const logoImg = document.createElement('img');
			logoImg.setAttribute('src', newProductPage.stickerImg);
			logoContainer.appendChild(logoImg);
			productPage.appendChild(logoContainer);
			
			const slideshowContainer = document.createElement('div');
			slideshowContainer.classList.add('product-page__slideshow', 'offset-small--1', 'offset--1', 'column--6');
			
			const picture1 = document.createElement('div');
			picture1.classList.add('slideshow__pictures');
			picture1.innerHTML = newProductPage.productPicture1;
			slideshowContainer.appendChild(picture1);
			
			const picture2 = document.createElement('div');
			picture2.classList.add('slideshow__pictures');
			picture2.innerHTML = newProductPage.productPicture2;
			slideshowContainer.appendChild(picture2);
			
			const picture3 = document.createElement('div');
			picture3.classList.add('slideshow__pictures');
			picture3.innerHTML = newProductPage.productPicture3;
			slideshowContainer.appendChild(picture3);
			
			const prevButton = document.createElement('button');
			prevButton.classList.add('prev-button');
			prevButton.textContent = 'Previous';
			slideshowContainer.appendChild(prevButton);
			
			const nextButton = document.createElement('button');
			nextButton.classList.add('next-button');
			nextButton.textContent = 'Next';
			slideshowContainer.appendChild(nextButton);
				
			productPage.appendChild(slideshowContainer);
			
			const infoContainer = document.createElement('div');
			infoContainer.classList.add('product-page__info-container', 'offset-small--1', 'offset--7', 'column--4');
			
			const infoNav = document.createElement('div');
			infoNav.classList.add('product-page__nav', 'column--12');
			
			const detailButton = document.createElement('div');
			detailButton.setAttribute('data-product-spec', 'details');
			detailButton.classList.add('column--4', 'column-small--4');
			detailButton.textContent = 'Detaljer';
			
			const buyButton = document.createElement('div');
			buyButton.setAttribute('data-product-spec', 'buy');
			buyButton.classList.add('column--4', 'column-small--4');
			buyButton.textContent = 'Kjøp';
			
			const historyButton = document.createElement('div');
			historyButton.setAttribute('data-product-spec', 'history');
			historyButton.classList.add('column--4', 'column-small--4');
			historyButton.textContent = 'Historikk';
			
			infoNav.appendChild(detailButton);
			infoNav.appendChild(buyButton);
			infoNav.appendChild(historyButton);
			
			infoContainer.appendChild(infoNav);
			
			const detailsContainer = document.createElement('div');
			detailsContainer.setAttribute('data-product-info', 'details');
			detailsContainer.classList.add('show', 'product-page__info-options', 'column--12');
			detailsContainer.textContent = newProductPage.productTextContent;
			
			const buyContainer = document.createElement('div');
			buyContainer.setAttribute('data-product-info', 'buy');
			buyContainer.classList.add('product-page__info-options', 'column--12');
			detailsContainer.textContent = newProductPage.productTextContent;
			
			const historyContainer = document.createElement('div');
			historyContainer.setAttribute('data-product-info', 'history');
			historyContainer.classList.add('product-page__info-options', 'column--12');
			detailsContainer.textContent = newProductPage.productTextContent;
			
			infoContainer.appendChild(detailsContainer);
			infoContainer.appendChild(buyContainer);
			infoContainer.appendChild(historyContainer);
			
			productPage.appendChild(infoContainer);
			
			document.body.appendChild(productPage);
			console.log(mainSticker);
      }
	});
 };

mainStickers.forEach(function(mainSticker) {
 mainSticker.addEventListener('click', filterStickers);
});


// Search-bar 

const catalogInput = document.querySelector('.catalog__input-bar input');
const catalogImg = document.querySelector('.catalog__input-bar img');

catalogInput.addEventListener('focus', function () {
		catalogImg.style.display = 'none';
});

catalogInput.addEventListener('blur', function () {
		catalogImg.style.display = 'block';
});



// Exit-buttons

const exitButtonsGrid = document.querySelectorAll('.exit-button__grid');

function closeGrid(event) {
    const exitButtonGrid = event.target;
    const parentGrid = exitButtonGrid.parentElement;
    parentGrid.classList.remove('showGrid');
}

exitButtonsGrid.forEach(function(exitButtonGrid) {
    exitButtonGrid.addEventListener('click', closeGrid);
});

const exitButtons = document.querySelectorAll('.exit-button');

function closeDiv(event) {
    const exitButton = event.target;
    const parentDiv = exitButton.parentElement;
    parentDiv.classList.remove('show');
}

exitButtons.forEach(function(exitButton) {
    exitButton.addEventListener('click', closeDiv);
});

