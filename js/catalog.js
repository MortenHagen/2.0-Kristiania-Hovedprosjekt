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
			stickerImg: 'https://www.xxl.no/filespin/a171c26f735646babecb15377ba91e64?resize=750,750&quality=75&bgcolor=efefef',
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
			 detailsContent: 'Her k21462uy4435',
			 buyContent: 'Produktet koster 2500kr',
			 historyContent: 'pleide å koste 1200',
			 productPicture1:'assets/catalog-img/red-jacket-back.webp',
			 productPicture2:'assets/catalog-img/red-jacket-front.webp',
			 productPicture3:'assets/catalog-img/red-jacket-static.webp',
		},
		{
			 stickerImg: 'assets/catalog-img/blue-jacket.webp',
			 productHeader: 'Overskrift',
			 productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			 productAttribute: 'blue-jacket',
			 detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			 buyContent: 'Produktet koster 2000kr',
			 historyContent: 'pleide å koste 1500',
			 productPicture1:'assets/catalog-img/blue-jacket.webp',
			 productPicture2:'assets/catalog-img/blue-jacket-back.webp',
			 productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
		{
			stickerImg: 'https://www.xxl.no/filespin/a171c26f735646babecb15377ba91e64?resize=750,750&quality=75&bgcolor=efefef',
			productHeader: 'Overskrift',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'yellow-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'https://www.xxl.no/filespin/4cbae4df5a974d75875733e80c185b9a?resize=750,750&quality=75&bgcolor=efefef',
			productPicture2:'https://www.xxl.no/filespin/8860a0cfa9aa45399c92ab359476bd41?resize=750,750&quality=75&bgcolor=efefef',
			productPicture3:'https://www.xxl.no/filespin/e16bdb0821eb4b11afdd73e9c4c06c75?resize=750,750&quality=75&bgcolor=efefef',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			productHeader: 'Overskrift',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'orange-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'assets/catalog-img/blue-jacket.webp',
			productPicture2:'assets/catalog-img/blue-jacket-back.webp',
			productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
		{
			stickerImg: 'assets/catalog-img/blue-jacket.webp',
			productHeader: 'Overskrift',
			productTextContent: 'Her kan du skrive masse tekst. owbeg2222',
			productAttribute: 'pink-jacket',
			detailsContent: 'Her kan du skrive masse tekst. owbeg2222',
			buyContent: 'Produktet koster 2000kr',
			historyContent: 'pleide å koste 1500',
			productPicture1:'assets/catalog-img/blue-jacket.webp',
			productPicture2:'assets/catalog-img/blue-jacket-back.webp',
			productPicture3:'assets/catalog-img/blue-jacket-smile.webp',
		},
	];
	
	const mainStickers = document.querySelectorAll('.main-sticker');
	
	function filterStickers(event) {
		const pageToShow = event.currentTarget.dataset.stickerFilter;
  
		newProductPages.forEach(newProductPage => {
			if (pageToShow === newProductPage.productAttribute) {
				const productPage = document.createElement('div');
				productPage.classList.add('product-page');
				productPage.setAttribute('data-catalog-page', newProductPage.productAttribute);
		// exit-button
				const exitButton = document.createElement('button');
				exitButton.classList.add('exit-button__grid');
				exitButton.textContent = 'X';
				productPage.appendChild(exitButton);
		// logo-container
				const logoContainer = document.createElement('div');
				logoContainer.classList.add('product-page__header', 'show', 'offset--8', 'column--2', 'offset-small--5', 'column-small--2');
				const logoImg = document.createElement('img');
				logoImg.setAttribute('src', newProductPage.stickerImg);
				logoContainer.appendChild(logoImg);
				productPage.appendChild(logoContainer);
		// slideshow-container
				const slideshowContainer = document.createElement('div');
				slideshowContainer.classList.add('product-page__slideshow', 'offset-small--1', 'offset--1', 'column--6');
		// 
				const pictures = document.createElement('div');
				pictures.classList.add('slideshow__pictures');
				slideshowContainer.appendChild(pictures);

				const img1 = document.createElement('img');
				img1.classList.add('productPicture');
				img1.setAttribute('src', newProductPage.productPicture1);
				pictures.appendChild(img1);
		
				const img2 = document.createElement('img');
				img2.classList.add('productPicture');
				img2.setAttribute('src', newProductPage.productPicture2);
				pictures.appendChild(img2);
		
				const img3 = document.createElement('img');
				img3.classList.add('productPicture');
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
				detailButton.classList.add('column--4', 'column-small--4', 'product-page__button');
				detailButton.textContent = 'Detaljer';
				
				const buyButton = document.createElement('div');
				buyButton.setAttribute('data-product-spec', 'buy');
				buyButton.classList.add('column--4', 'column-small--4', 'product-page__button');
				buyButton.textContent = 'Kjøp';
				
				const historyButton = document.createElement('div');
				historyButton.setAttribute('data-product-spec', 'history');
				historyButton.classList.add('column--4', 'column-small--4', 'product-page__button');
				historyButton.textContent = 'Historikk';
				
				infoNav.appendChild(detailButton);
				infoNav.appendChild(buyButton);
				infoNav.appendChild(historyButton);
				
				infoContainer.appendChild(infoNav);
				
				const detailsContainer = document.createElement('div');
				detailsContainer.setAttribute('data-product-info', 'details');
				detailsContainer.classList.add('product-page__info', 'show', 'column--12');
				detailsContainer.textContent = newProductPage.detailsContent;
				
				const buyContainer = document.createElement('div');
				buyContainer.setAttribute('data-product-info', 'buy');
				buyContainer.classList.add('product-page__info', 'column--12');
				buyContainer.textContent = newProductPage.buyContent;
				
				const historyContainer = document.createElement('div');
				historyContainer.setAttribute('data-product-info', 'history');
				historyContainer.classList.add('product-page__info', 'column--12');
				historyContainer.textContent = newProductPage.historyContent;
				
				infoContainer.appendChild(detailsContainer);
				infoContainer.appendChild(buyContainer);
				infoContainer.appendChild(historyContainer);
				
				productPage.appendChild(infoContainer);
				
				document.body.appendChild(productPage);
			}
			
		});

		
// Details - Buy - History buttons show and hide content
		const productPageButtons = document.querySelectorAll('.product-page__button');
		const productOptions = document.querySelectorAll('.product-page__info');

		function showInfo(event) {
			productOptions.forEach(option => {
				option.classList.remove('show');
			});
			const currentInfoButton = event.currentTarget;
			const currentInfoButtonData = currentInfoButton.dataset.productSpec;

			productOptions.forEach(option => {
				const optionInfo = option.dataset.productInfo;

				if (optionInfo === currentInfoButtonData) {
						option.classList.add('show');
				}
			});
		}

		productPageButtons.forEach((infoButton) => {
			infoButton.addEventListener('click', showInfo);
		});


// Exit button
		const exitButtonsGrid = document.querySelectorAll('.exit-button__grid');

		function closeGrid() {
			const productPages = document.querySelectorAll('.product-page');

			productPages.forEach(function (productPage) {
				productPage.remove();
			});
		}
		
		exitButtonsGrid.forEach(function (exitButtonGrid) {
			exitButtonGrid.addEventListener('click', closeGrid);
		});



// Close product-page with escape button
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				closeGrid();
			}
		});



// Slideshow
		let currentSlideIndex = 0;
		const slides = document.querySelectorAll('.productPicture');
		const prevButton = document.querySelector('.prev-button');
		const nextButton = document.querySelector('.next-button');

		function showSlide(index) {
			slides.forEach((slide, i) => {
				if (i === index) {
					slide.style.display = 'block';
				} else {
					slide.style.display = 'none';
				}
			});
		}

		function nextSlide() {
			currentSlideIndex = (currentSlideIndex + 1) % slides.length;
			showSlide(currentSlideIndex);
		}

		function prevSlide() {
			currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
			showSlide(currentSlideIndex);
		}

		showSlide(currentSlideIndex);

		prevButton.addEventListener('click', prevSlide);
		nextButton.addEventListener('click', nextSlide);
	};



// Creating the following productpage for each spesific stickers

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
	


// Open navigation dropdowns

const catalogNavButtons = document.querySelectorAll('.catalog__nav-button')

function openDropdown(event) {
	currentNavButton = event.currentTarget
	currentChild = currentNavButton.firstElementChild;
	currentChild.classList.add('show')
	
}
catalogNavButtons.forEach(function(catalogNavButton) {
	catalogNavButton.addEventListener('click', openDropdown);
});

// close navigation dropdowns

const exitButtonsFlex = document.querySelectorAll('.exit-button-flex');

function closeDropdown(event) {
	currentExitButton = event.currentTarget;
	currentParent = currentExitButton.parentElement;
	currentParent.classList.remove('show')
	event.stopPropagation();
}

exitButtonsFlex.forEach(function(exitButtonFlex) {
	exitButtonFlex.addEventListener('click', closeDropdown)
})




})