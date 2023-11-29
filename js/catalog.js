document.addEventListener('DOMContentLoaded', function () {
	const newSticker = [
		{
			stickerImg: 'assets/catalog-img/red-jacket-back.webp',
			stickerHeader: 'Innføring',
			stickerText: 'Her er litt tekst om produktet som selger. slogan. kort info.',
			stickerAttribute: 'red-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'blue-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'yellow-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'orange-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'pink-jacket',
		},
];

 const stickerContainer = document.createElement('div');
	 stickerContainer.classList.add('catalog__sticker-container', 'column--12', 'column-small--12');


	newSticker.forEach((sticker) => {
		 const mainSticker = document.createElement('div');
		 mainSticker.setAttribute('data-sticker-filter', sticker.stickerAttribute);
		 mainSticker.classList.add('main-sticker', 'column--4', 'offset-small--1');

		 const mainStickerImg = document.createElement('div');
		 mainStickerImg.classList.add('main-sticker__img');

		 const mainStickerImg1 = document.createElement('div');
		 mainStickerImg1.classList.add('main-sticker__img1');

		 const img = document.createElement('img');
		 img.setAttribute('src', sticker.stickerImg);

		 mainStickerImg1.appendChild(img);
		 mainStickerImg.appendChild(mainStickerImg1);

		 const textContainer = document.createElement('div');
		 textContainer.classList.add('main-sticker__text-container');

		 const spanElement = document.createElement('span');
		 spanElement.textContent = sticker.stickerHeader;
		 textContainer.appendChild(spanElement);

		 const pElement = document.createElement('p');
		 pElement.textContent = sticker.stickerText;
		 textContainer.appendChild(pElement);

		 mainSticker.appendChild(mainStickerImg);
		 mainSticker.appendChild(textContainer);

		 stickerContainer.appendChild(mainSticker);
	});

	document.body.appendChild(stickerContainer);



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
			 productPicture2:'assets/catalog-img/red-jacket-back.webp',
			 productPicture3:'assets/catalog-img/blue-jacket.webp',
			 productPicture4:'assets/catalog-img/red-jacket-back.webp',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'yellow-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'orange-jacket',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			stickerHeader: 'Overskrift',
			stickerText: 'Her ds. slogan. kort info.',
			stickerAttribute: 'pink-jacket',
		},
	];
	
	
	
	const productPages = document.querySelectorAll('.product-page');
	const mainStickers = document.querySelectorAll('.main-sticker');
	
	function filterStickers (event) {
		  const pageToShow = event.currentTarget.dataset.stickerFilter;
	
		 newProductPages.forEach(newProductPage => {
			if (pageToShow === newProductPage.productAttribute) {
				console.log(newProductPage.productAttribute);
			  const productPage = document.createElement('div');
			  productPage.classList.add('product-page');
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
				
				const pictures = document.createElement('div');
				pictures.classList.add('slideshow__pictures');
				slideshowContainer.appendChild(pictures);
		
				const img1 = document.createElement('img');
				img1.classList.add('productPicture1');
				img1.setAttribute('src', newProductPage.productPicture1);
				pictures.appendChild(img1);
		
				const img2 = document.createElement('img');
				img2.classList.add('productPicture2');
				img2.setAttribute('src', newProductPage.productPicture2);
				pictures.appendChild(img2);
		
				const img3 = document.createElement('img');
				img3.classList.add('productPicture3');
				img3.setAttribute('src', newProductPage.productPicture3);
				pictures.appendChild(img3);

				const prevButton = document.createElement('div');
				prevButton.classList.add('prev-button');
				prevButton.textContent = 'Previous';
				slideshowContainer.appendChild(prevButton);
				
				const nextButton = document.createElement('div');
				nextButton.classList.add('next-button');
				nextButton.textContent = 'Next';
				slideshowContainer.appendChild(nextButton);
					
				productPage.appendChild(slideshowContainer);
				
				const infoContainer = document.createElement('div');
				infoContainer.classList.add('product-page__info-container', 'offset-small--1', 'offset--7', 'column--4');
				
				const infoNav = document.createElement('div');
				infoNav.classList.add('product-page__info-nav', 'column--12');
				
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
	
	
	
	
});