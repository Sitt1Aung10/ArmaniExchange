$(document).ready(function () {
    var body = $("body");

    //variable For sanme UI elements

    //For flex elements
    var flexelements = {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.5rem",
        boxSizing: "border-box"
    }

    //For text transform contents
    var transformText = {
        textTransform: "uppercase",
    }

    //For Centered Elements
    var centerElements = {
        display: "block",
        margin: "0 auto",
    }
    //header section
    var header = $("<header>");
    header.css(flexelements);

    var related_Websites_LinkContainer = $("<div>");
    related_Websites_LinkContainer.css(flexelements);
    related_Websites_LinkContainer.addClass("related_Websites_LinkContainer")

    var iconForRWLC = $("<i>");
    /**rwlc mean related website link container */
    iconForRWLC.addClass("fa-solid fa-bars");
    iconForRWLC.css("cursor", "pointer")

    var related_websites = $("<div>");
    related_websites.addClass("related_websites");
    const related_websites_list = [
        {
            name: "emporio armani",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "ea7",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani exchange",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "giorgio armani",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/casa",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/beauty",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/hotels",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/clubs",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/restaurants",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/dolci",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
        {
            name: "armani/flori",
            link: "https://www.armani.com/en-us/experience/sale-emporio-armani",
        },
    ]
    var xmarkIcon = $("<i>");
    xmarkIcon.addClass("fa-solid fa-xmark");
    xmarkIcon.css({
        position: "absolute",
        right: "1rem",
        top: '1rem',
        color: "#fff",
        cursor: "pointer",
    }),
    iconForRWLC.click(function () {
        related_websites.css("display" , "block")
    })
    xmarkIcon.click(function () {
        related_websites.css("display", "none")
    })
    $.each(related_websites_list, function (index, value) {
        var linkTag = $("<a>");
        linkTag.attr("href", value.link);
        linkTag.text(value.name);
        linkTag.css({
            fontSize: "1rem",
            textTransform: "capitalize",
            fontFamily: 'Gill Sans MT',
            display: "block",
            padding: "20px 0 20px 0",
            boxSizing: "border-box"
        });

        related_websites.append(xmarkIcon, linkTag);
    })

    var header_hub_title = $("<div>");
    header_hub_title.css(flexelements);
    header_hub_title.addClass("header_hub_title")

    var armani = $("<a>");
    armani.attr("href", "https://www.armani.com/en-us");
    armani.text("Armani.com");
    armani.css(transformText);

    var contact_us = $("<a>");
    contact_us.addClass("contact_us")
    contact_us.attr("href", "https://www.armani.com/experience/contact-us");
    contact_us.text("Contact Us");
    contact_us.css(transformText);

    header_hub_title.append(armani, contact_us);

    related_Websites_LinkContainer.append(iconForRWLC, header_hub_title);

    var searchBox = $("<div>");
    searchBox.addClass("searchBox")

    var searchLogo = $("<i>");
    searchLogo.addClass("fa-solid fa-magnifying-glass searchLogo");
    searchLogo.css({
        position : "absolute",
        left : "7px",
        top : "9px",
        zIndex : "9",
    })

    var visiblesearchInput = $("<input>");
    visiblesearchInput.attr("type", "search");
    visiblesearchInput.attr("placeholder", "Search The Products")
    visiblesearchInput.addClass("visiblesearchInput");

    searchBox.append(searchLogo,  visiblesearchInput);
    
    $(document).ready(function() {
            searchBox.click(function() {
                $("#productBox").addClass("activeproductBox")
            });
    })
   

   $(document).mouseup(function(event) {
    if(!$("#productBox").is(event.target) && $("#productBox").has(event.target).length === 0) {
        $("#productBox").removeClass("activeproductBox");
    }
   })
    var products = [
        {
            id: "1",
            name: "Sisburma Chamois Shirt Jacket - Black",
            img: "b-Shirt-Web-9.jpg",
            link: "https://sisburma.com/product/sisburma-chamois-shirt-jacket-navy/",
        },
        {
            id: "2",
            name: "Sisburma Chamois Shirt Jacket - Navy",
            img: "color-change-2-900x900.jpg",
            link: "https://sisburma.com/product/sisburma-chamois-shirt-jacket-navy/",
        },{
            id: "3",
            name: "Sisburma Modern Chic Jacket - Black",
            img: "Wind-breaker-web-7.jpg",
            link: "https://sisburma.com/product/sisburma-chamois-shirt-jacket-navy/",
        },{
            id: "4",
            name: "Sisburma AUBURNSTOMP",
            img: "Sneaker-luke-web-13.jpg",
            link: "https://sisburma.com/product/sisburma-auburnstomp/",
        },{
            id: "5",
            name: "Sisburma Half-Zip Polo - Grey",
            img: "3-2-450x450.jpg",
            link: "https://sisburma.com/product/sisburma-half-zip-polo-grey/",
        }
    ]
     // Function to display products based on search input
function displayProducts(searchText) {
// Filter products based on the search input
var filteredProducts = products.filter(function(product) {
  // Case-insensitive search by product name
  return product.name.toLowerCase().includes(searchText.toLowerCase());
});

// Display the filtered products
var productList = $('#productList');
productList.empty(); // Clear previous results
 if($("#searchInput").val().length === 0) {
    productList.hide()
 } 

if (filteredProducts.length === 0) {
  productList.append('<li>No matching products found</li>');
} else {
  filteredProducts.forEach(function(product) {
    var filteredProductLink = $("<a>");
    filteredProductLink.attr("href",product.link);

    var filteredProductImg = $("<img>");
    filteredProductImg.attr("src",product.img);
    filteredProductImg.addClass("filteredProductImg");

    filteredProductLink.append(filteredProductImg);

    var filteredProductName= $("<p>");
    filteredProductName.text(product.name);

    var filteredProductContainer = $("<div>");
    filteredProductContainer.css("textAlign" , "center")
    filteredProductContainer.append(filteredProductLink,filteredProductName);

    productList.append(filteredProductContainer);
    productList.css('backgroundColor' , '#fff')
  });
}
}

// Add an event listener for the search button click
$('#searchButton').on('click', function() {
// Get the current value of the search input
var searchText = $('#searchInput').val();

// Display products based on the search input
displayProducts(searchText);
});

$("#productBox").keypress(function(event) {
var key = event.keyCode || event.which;
if(key == 13) {
    // Get the current value of the search input
var searchText = $('#searchInput').val();

// Display products based on the search input
displayProducts(searchText);
}
})

    const personal_information = [
        {
            id: "1",
            name: "Log In",
            href: "#",
            class: "fa-solid fa-circle-user",
        },
        {
            id: "2",
            name: "Location",
            href: "https://locations.armani.com/search?country=us&_ga=2.217641109.245793242.1700018105-137106127.1700018105",
            class: "fa-solid fa-location-dot",
        },
        {
            id: "3",
            name: "Wish List",
            href: "https://www.armani.com/en-us/Account/WishList",
            class: "fa-solid fa-heart",
        },
        {
            id: "4",
            name: "Cart",
            href: "#",
            class: "fa-solid fa-cart-shopping",
        },
    ]

    var personal_information_container = $("<div>");
    personal_information_container.css(flexelements);
    personal_information_container.addClass("personal_information_container")
    $.each(personal_information, function (index, value) {
        var personal_linktag = $("<a>");
        personal_linktag.attr("href", value.href);
        personal_linktag.addClass("personal_linktag")

        var personal_icontag = $("<i>");
        personal_icontag.addClass(value.class);
        personal_icontag.attr("title", value.name);

        personal_linktag.append(personal_icontag);

        personal_information_container.append(personal_linktag);
    })

    personal_information_container.prepend(searchBox)

    header.append(related_Websites_LinkContainer, personal_information_container);

    var logo = $("<img>");
    logo.attr("src", "/ArmaniExchange/logo.png");
    logo.css(centerElements);
    logo.addClass("logo");

    //nav section
    var nav = $("<nav>");
    nav.css(flexelements);

    var menuBar = $("<i>");
    menuBar.addClass("fa-solid fa-bars menuBar");
    menuBar.css({
        color: "#000",
        cursor: "pointer",
        zIndex: "9",
    })

    menuBar.on('click', function () {
        nav.addClass("activeNav");
    })

    const nav_links = [
        {
            id: "1",
            name: "new arrivals",
            href: "",
        },
        {
            id: "2",
            name: "women",
            href: "",
        },
        {
            id: "3",
            name: "men",
            href: "",
        },
        {
            id: "4",
            name: "style tips",
            href: "",
        },
        {
            id: "5",
            name: "fw23 catalog",
            href: "",
        },
        {
            id: "6",
            name: "outlet",
            href: "",
        },
        {
            id: "7",
            name: "you.me.us",
            href: "",
        },
        {
            id: "8",
            name: "@armani exchange",
            href: "",
        },
        {
            id: "9",
            name: "book an appointment",
            href: "",
        },
    ]

    var xmarkIcon = $("<i>");
    xmarkIcon.addClass("fa-solid fa-xmark disableNavBtn");

   
    $.each(nav_links, function (index, value) {
        var nav_linktag = $("<a>");
        nav_linktag.attr("href", value.href);
        nav_linktag.text(value.name);
        nav_linktag.css(transformText);

        nav.append(nav_linktag);
    })

    nav.prepend(xmarkIcon);
    xmarkIcon.click(function () {
        nav.addClass("disableNav")
    })

    //A|X Campus Section
    var campus_section = $("<section>");
    campus_section.addClass("campus_section")

    var campus_photo = $("<img>");
    campus_photo.attr("src", "/ArmaniExchange/campusPhoto.webp");
    campus_photo.addClass("campus_photo")

    var titleForCampusSection = $("<h1>");
    titleForCampusSection.text("a|x campus");
    titleForCampusSection.css(transformText);
    titleForCampusSection.addClass("titleForCampusSection")

    var paraForCampusSection = $("<p>");
    paraForCampusSection.text("Collegiate inspired, the A|X Campus capsule reinterprets the iconic varsity jackets, cardigans and bomber jackets in an urban key with striped details and A|X patches.");
    paraForCampusSection.css("line-height", "35px")

    var shoppingContentForCampus = $("<div>");
    shoppingContentForCampus.css({
        display: "flex",
        justifyContent: "left",
        gap: "1rem",
        marginTop: "2rem"
    });

    //css for both btn
    var shoppingBtn = {
        width: "10rem",
        height: "2rem",
        border: "2px solid #000",
        color: "#000",
        textAlign: "center",
        padding: ".5rem",
        boxSizing: "border-box",
        textTransform: "uppercase",
        fontWeight: "bolder",
        position: "relative"
    }
    var man_btn = $("<a>");
    man_btn.attr("href", "https://www.armani.com/armani-exchange/man/highlights/campus")
    man_btn.text("man");
    man_btn.css(shoppingBtn);
    man_btn.addClass("shoppingBtn")

    var woman_btn = $("<a>");
    woman_btn.attr("href", "https://www.armani.com/armani-exchange/woman/highlights/campus")
    woman_btn.text("woman");
    woman_btn.css(shoppingBtn);
    woman_btn.addClass("shoppingBtn")


    shoppingContentForCampus.append(man_btn, woman_btn);

    var contentForCampusSection = $("<div>");
    contentForCampusSection.css({
        "position": "relative",
        "top": "-2rem"
    })
    contentForCampusSection.append(titleForCampusSection, paraForCampusSection, shoppingContentForCampus);

    campus_section.append(campus_photo, contentForCampusSection);
    campus_section.css(flexelements);



    //sneaker & boots section
    var sneakerAndBoots = $("<section>");
    sneakerAndBoots.addClass("sneakerAndBoots");

    var titleForSneakerAndBoots = $("<h1>");
    titleForSneakerAndBoots.text("sneakers & boots");
    titleForSneakerAndBoots.css(transformText);

    var contentForSneakerAndBoots = $("<div>");
    contentForSneakerAndBoots.addClass("contentForSneakerAndBoots")
    contentForSneakerAndBoots.append(titleForSneakerAndBoots, shoppingContentForCampus);
    shoppingContentForCampus.css("justifyContent", "center")

    sneakerAndBoots.append(contentForSneakerAndBoots);



    //men's collection
    var menCollection = $("<section>");
    menCollection.css(flexelements);
    menCollection.addClass("menCollection")

    var contentFormenCollection = $("<div>");

    var titleFormencollection = $("<h1>");
    titleFormencollection.text("men's collection");
    titleFormencollection.css(transformText);
    titleFormencollection.addClass("titleFormencollection")

    var btnFormenCollection = $("<a>");
    btnFormenCollection.text("shop now")
    btnFormenCollection.attr("href", "https://www.armani.com/armani-exchange/man");
    btnFormenCollection.css(shoppingBtn);
    btnFormenCollection.addClass("shoppingBtn")

    contentFormenCollection.append(titleFormencollection, btnFormenCollection);

    var menCollectionImg = $("<img>");
    menCollectionImg.addClass("menCollectionImg")
    menCollectionImg.attr("src", "/ArmaniExchange/men'scollection.jpg.webp");

    menCollection.append(contentFormenCollection, menCollectionImg);

    //highlight section
    var highlight_section = $("<section>");
    highlight_section.addClass("highlight_section")

    var titleForhighlight_section = $("<h1>");
    titleForhighlight_section.text("highlights");
    titleForhighlight_section.css(transformText)
    titleForhighlight_section.addClass("titleForhighlight_section")

    var slider_section = $("<div>");
    slider_section.addClass("slider_section");

    var leftBtn = $("<i>");
    leftBtn.addClass("fa-solid fa-arrow-left");
    leftBtn.css({
        display: "block",
        position: "absolute",
        left: "5.5vw",
        fontSize: "2vw",
        color: "#000",
        backgroundColor: "#FAF9F9",
        paddingInline: "10px",
        boxSizing: "border-box",
        zIndex: "8",
        cursor: "pointer",
        borderRadius : "5px"
    })

    var rightBtn = $("<i>");
    rightBtn.addClass("fa-solid fa-arrow-right");
    rightBtn.css({
        display: "block",
        position: "absolute",
        right: "4.5vw",
        fontSize: "2vw",
        color: "#000",
        backgroundColor: "#FAF9F9",
        paddingInline: "10px",
        boxSizing: "border-box",
        zIndex: "8",
        cursor: "pointer",
        borderRadius : "5px"
    })

    const slider_imgs = [
        {
            id: "1",
            name: "Men's Essential",
            src: "/ArmaniExchange/menessential.jpg.webp",
            href: "https://www.armani.com/armani-exchange/man/highlights/essentials",
            title: "Men's Essential",
            btn: "Discover More",
        },
        {
            id: "2",
            name: "Women's Essential",
            src: "/ArmaniExchange/womaessential.jpg.webp",
            href: "https://www.armani.com/armani-exchange/woman/highlights/essentials",
            title: "Women's Essential",
            btn: "Discover More",
        },
        {
            id: "3",
            name: "A|X Soho",
            src: "/ArmaniExchange/axsoho.jpg.webp",
            href: "https://www.armani.com/experience/armani-exchange/style-tips/ax-soho-new-york",
            title: "A|X Soho",
            btn: "Discover More",
        },
        {
            id: "4",
            name: "Men's Denim Fit Guide",
            src: "/ArmaniExchange/mendenimfit.jpg.webp",
            href: "https://www.armani.com/experience/armani-exchange/denim-guide-men",
            title: "Men's Denim Fit Guide",
            btn: "Discover More",
        },
        {
            id: "5",
            name: "Women's Denim Fit Guide",
            src: "/ArmaniExchange/womendenimfit.jpg.webp",
            href: "https://www.armani.com/experience/armani-exchange/denim-guide-women",
            title: "Women's Denim Fit Guide",
            btn: "Discover More",
        },
        {
            id: "6",
            name: "A|X Campus",
            src: "/ArmaniExchange/axcampushighlight.jpg.webp",
            href: "https://www.armani.com/experience/armani-exchange/denim-guide-women",
            title: "A|X Campus",
            btn: "Discover More",
        },
    ]

    $.each(slider_imgs, function (index, value) {
        var slider_content = $("<div>");
        slider_content.addClass("slider_content")

        var slider_img_link = $("<a>");
        slider_img_link.attr("href", value.href);

        var slider_img = $("<img>");
        slider_img.attr("src", value.src);
        slider_img.attr("title", value.title);
        slider_img.addClass("slider_img")

        var nameForslider_img = $("<h4>");
        nameForslider_img.text(value.name);

        var discover_more = $("<a>");
        discover_more.attr("href", value.href);
        discover_more.text(value.btn);
        discover_more.addClass("discover_more")

        //appending elements
        slider_img_link.append(slider_img);

        slider_content.append(slider_img_link, nameForslider_img, discover_more);

        slider_section.append(slider_content);

        //sliding function
        $(document).ready(function () {
            var currentIndex = 0;
            var slideCount = $(".slider_content").length;
            var slideWidth = $(".slider_content").width();

            rightBtn.on('click', function () {
                if (currentIndex < slideCount - 3) {
                    currentIndex++;
                }
                else {
                    currentIndex = 0;
                }
                updateSlider();

            });

            leftBtn.on('click', function () {
                if (currentIndex > 0) {
                    currentIndex--;
                }
                else {
                    currentIndex = slideCount - 3;
                }
                updateSlider();

            });

            function updateSlider() {
                var translateValue = -currentIndex * slideWidth;
                slider_content.css('transform', 'translateX(' + translateValue + 'px')
            }

        });
    });

    //appending elements to section
    highlight_section.append(titleForhighlight_section, leftBtn, slider_section, rightBtn)

    //fpls strip section
    var strip_section = $("<section>");
    strip_section.addClass("strip_section")

    var titleForstrip_section = $("<h1>");
    titleForstrip_section.text("@armaniexchange");

    const imgsForstrip = [
        {
            id: "1",
            src: "/ArmaniExchange/653d46efd5050000088fb553_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "2",
            src: "/ArmaniExchange/653ead7110452c00081cdb58_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "3",
            src: "/ArmaniExchange/653ff0f697c4370008b8d8d0_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "4",
            src: "/ArmaniExchange/6541498f97c4370008e3794e_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "5",
            src: "/ArmaniExchange/6547d24597c4370008b54f24_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "6",
            src: "/ArmaniExchange/6547e7a110452c00084b025a_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "7",
            src: "/ArmaniExchange/6549247397c4370008e0bb6f_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "8",
            src: "/ArmaniExchange/6549321210452c0008769d91_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "9",
            src: "/ArmaniExchange/654a7607d505000008386f9d_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "10",
            src: "/ArmaniExchange/654a8b1697c43700080e75ae_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "11",
            src: "/ArmaniExchange/654bc7ae10452c0008cb9d10_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "12",
            src: "/ArmaniExchange/654d26dc10452c0008f85e83_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "13",
            src: "/ArmaniExchange/654e7130d505000008b37279_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "14",
            src: "/ArmaniExchange/654fbc12d505000008dbf258_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "15",
            src: "/ArmaniExchange/6555bcc5ae95200008e26d70_00.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "16",
            src: "/ArmaniExchange/jeanpant.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "17",
            src: "/ArmaniExchange/menunderwearjpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "18",
            src: "/ArmaniExchange/womendenimfit.jpg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "19",
            src: "/ArmaniExchange/womanjean.jpeg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
        {
            id: "20",
            src: "/ArmaniExchange/mendenimfit.jpg.webp",
            hvElementText: "View",
            photo: "@sanesdieu",
            stylist: "@marcgoehring",
            model: "@djibrilfal",
        },
    ]
    var sliderSectionForstrip_section = $("<div>");
    sliderSectionForstrip_section.addClass("sliderSectionForstrip_section");

    var zoominCardContent = $("<div>");

    $.each(imgsForstrip, function (index, value) {
        var containerForstripImg = $("<div>");
        containerForstripImg.addClass("containerForstripImg")

        var imgTagForstrip = $("<div>");
        imgTagForstrip.css("background-image", 'url(' + value.src + ')')
        imgTagForstrip.addClass("imgTagForstrip");

        var hoverElement = $("<div>");
        hoverElement.text(value.hvElementText);
        hoverElement.addClass("hoverElement");

        //zoom in img
        var imgCard = $("<div>");
        imgCard.addClass("imgCard");

        var titleForimgCard = $("<h2>");
        titleForimgCard.text("@armaniexchange");
        titleForimgCard.css({
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%)"
        })

        var someTextForimgCard = $("<div>");
        var photoText = $("<h5>");
        photoText.text("Photo" + value.photo);

        var stylistText = $("<h5>");
        stylistText.text("Stylist" + value.stylist);

        var modelText = $("<h5>");
        modelText.text("Model" + value.model);

        someTextForimgCard.append(photoText, stylistText, modelText);

        var contentForimgCard = $("<div>");
        contentForimgCard.addClass("contentForimgCard")

        var imgTagForCard = $("<img>");
        imgTagForCard.attr("src", value.src);
        imgTagForCard.addClass("imgTagForCard");
        contentForimgCard.append(imgTagForCard, someTextForimgCard);

        var xmarkIcon = $("<i>");
        xmarkIcon.addClass("fa-solid fa-xmark");
        xmarkIcon.css({
            position: "absolute",
            right: "1rem",
            top: '1rem',
            color: "#000",
            cursor: "pointer"
        }),

            xmarkIcon.click(function () {
                imgCard.css("display", "none")
            })

        imgCard.append(titleForimgCard, xmarkIcon, contentForimgCard);

        containerForstripImg.append(imgTagForstrip);
        containerForstripImg.prepend(hoverElement);

        zoominCardContent.append(imgCard)

        // hover function
        imgTagForstrip.on({
            mouseenter: function () {
                hoverElement.css("opacity", "1");
            },
            mouseleave: function () {
                hoverElement.css("opacity", "0");
            },
            click: function () {
                imgCard.css("display", "block")
            }
        })

        sliderSectionForstrip_section.append(containerForstripImg);

        strip_section.append(titleForstrip_section, sliderSectionForstrip_section);
    })

    var prevBtn = $("<i>");
    prevBtn.addClass("fa-solid fa-arrow-left prevBtn");
    prevBtn.css({
        display: "block",
        position: "absolute",
        top: "50%",
        left: "5.5vw",
        fontSize: "2vw",
        color: "#000",
        backgroundColor: "#FAF9F9",
        paddingInline: "10px",
        boxSizing: "border-box",
        zIndex: "8",
        cursor: "pointer",
        borderRadius: "5px",
    })

    var forwBtn = $("<i>");
    forwBtn.addClass("fa-solid fa-arrow-right forwBtn");
    forwBtn.css({
        display: "block",
        position: "absolute",
        top: "50%",
        right: "4vw",
        fontSize: "2vw",
        color: "#000",
        backgroundColor: "#FAF9F9",
        paddingInline: "10px",
        boxSizing: "border-box",
        zIndex: "8",
        cursor: "pointer",
        borderRadius: "5px",
    })
    //sliding function
    $(document).ready(function () {
        var currentIndex = 0;
        var slideCount = $(".containerForstripImg").length;
        var slideWidth = $(".containerForstripImg").outerWidth();

        forwBtn.on('click', function () {
            if (currentIndex < slideCount - 4) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            updateSlider();
        });

        prevBtn.on('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            }
            else {
                currentIndex = slideCount - 4;
            }
            updateSlider();
        });

        function updateSlider() {
            var translateValue = -currentIndex * slideWidth;
            $(".containerForstripImg").css('transform', 'translateX(' + translateValue + 'px')
        }

    });

    strip_section.prepend(prevBtn);
    strip_section.append(forwBtn)

    //subscribing
    var subscribing = $("<section>");
    subscribing.addClass("subscribing");
    subscribing.text("subscribe to our new letter");

    var emailBox = $("<div>");
    emailBox.addClass("emailBox");

    var emailTypeArea = $("<input>")
    emailTypeArea.attr("type", "email");
    emailTypeArea.attr("placeholder", "Email Address");
    emailTypeArea.attr("pattern", "username@gmail.com");
    emailTypeArea.prop('required', true);
    emailTypeArea.addClass("emailTypeArea");



    function displayEmail() {
        var userInputEmail = emailTypeArea.val();

        // Display the email in the email input
        emailCheck.val(userInputEmail);
    }

    var subBtn = $("<button>");
    subBtn.addClass("subBtn");
    subBtn.text("subscribe");

    //dropBox
    var dropBox = $("<div>");
    dropBox.addClass("dropBox");
    dropBox.css({
        display: "none",
        position: "fixed",
        left: "50%", top: "50%",
        transform: "translate(-50% , -50%)",
        gap: "2rem",
        width: "60vw",
        height: "35vw",
        backgroundColor: "#f8f8f8",

    })

    var xmarkIcon = $("<i>");
    xmarkIcon.addClass("fa-solid fa-xmark");
    xmarkIcon.css({
        position: "absolute",
        right: "1rem",
        top: '1rem',
        color: "#000",
        cursor: "pointer"
    })

    var imgFordropBox = $("<img>");
    imgFordropBox.attr("src", "/ArmaniExchange/GA.png");
    imgFordropBox.addClass("imgFordropBox");

    var contentFordropBox = $("<div>");
    contentFordropBox.css({
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "absolute",
        right: "-1rem",
        top: "1rem",
        width: "50%"
    })

    var titleFordropBox = $("<h2>");
    titleFordropBox.text("subscribe to our new letter");
    titleFordropBox.css(transformText);

    var emailCheck = $("<input>");
    emailCheck.addClass("emailCheck");

    var noticeText = $("<p>");
    noticeText.text("By clicking on subscribe you declare that you are at least 18 years old and agree to have your personal data processed to register for the personalised Giorgio Armani S.p.A. and its affiliated entities worldwide newsletter as indicated in the policy.");
    noticeText.css({
        "font-size": ".8rem",
        "color": "#7a7a7a"
    })


    var subBtnIndropBox = $("<button>");
    subBtnIndropBox.text("subscribe");
    subBtnIndropBox.addClass("subBtn");

    subBtnIndropBox.click(function () {
        var errorText = $("<p>");
        errorText.text("Not Available Now.Excitement yet to be come soon!");
        errorText.css({
            position: "absolute",
            right: "0",
            bottom: "30%",
            color: "red",
            fontSize: ".8rem"
        })

        dropBox.append(errorText)
    })

    contentFordropBox.append(titleFordropBox, emailCheck, noticeText, subBtnIndropBox);

    dropBox.append(imgFordropBox, contentFordropBox, xmarkIcon);

    emailBox.append(emailTypeArea, subBtn);

    subscribing.append(emailBox);

    subBtn.click(function () {
        dropBox.css("display", "block");
        displayEmail()
    })

    xmarkIcon.click(function () {
        dropBox.css("display", "none");
    })

    //site map
    var sitemap_section = $("<section>");
    sitemap_section.addClass("sitemap_section")
    //customer care
    var customer_care = $("<div>");

    const sitelinksForcustomer_care = [
        {
            name: "contact us",
            link: "https://www.armani.com/contactus",
        },
        {
            name: "size guide",
            link: "https://www.armani.com/customercare/topic/size-guide_ccid604300000001040",
        },
        {
            name: "my order",
            link: "https://www.armani.com/yTos/Plugins/AreaLocalizer/Redirectarea?area=account&controllerName=searchorder",
        },
        {
            name: "my account",
            link: "https://www.armani.com/customercare/topic/my-account_ccid604300000001041",
        },
    ]

    const title = {
        textTransform: "uppercase",
    }
    var sitemapText = {
        color: "#000",
        textTransform: "uppercase",
        display: "block",
        padding: "10px 30px 10px 0"
    }
    var titleForcustomer_care = $("<h3>");
    titleForcustomer_care.text("customer care");
    titleForcustomer_care.css(title)
    $.each(sitelinksForcustomer_care, function (index, value) {
        var linkTag = $("<a>");
        linkTag.text(value.name);
        linkTag.attr("href", value.link);
        linkTag.css(sitemapText)

        customer_care.append(linkTag);
        customer_care.prepend(titleForcustomer_care);
    });

    //shipping
    var shipping = $("<section>");
    const sitelinksForshipping = [
        {
            name: "shipping",
            link: "https://www.armani.com/yTos/Plugins/AreaLocalizer/Redirectarea?area=account&controllerName=searchorder",
        },
        {
            name: "track your order",
            link: "https://www.armani.com/yTos/Plugins/AreaLocalizer/Redirectarea?area=account&controllerName=searchorder",
        },
        {
            name: "returns and exchanges",
            link: "https://www.armani.com/yTos/Plugins/AreaLocalizer/Redirectarea?area=account&controllerName=searchorder",
        },
    ]
    var titleForshipping = $("<h3>");
    titleForshipping.text("shipping and returns");
    titleForshipping.css(title)
    $.each(sitelinksForshipping, function (index, value) {
        var linkTag = $("<a>");
        linkTag.text(value.name);
        linkTag.attr("href", value.link);
        linkTag.css(sitemapText);

        shipping.append(linkTag);
        shipping.prepend(titleForshipping);
    });

    //our company
    var ourCompany = $("<section>");

    const sitelinksForourCompany = [
        {
            name: "find a boutique",
            link: "https://locations.armani.com/",
        },
        {
            name: "carrers",
            link: "https://armanicareers.pcrecruiter.net/pcrbin/regmenu.aspx?uid=giorgio%20armani%20corp.giorgioarmanicorp",
        },
        {
            name: "armani/values",
            link: "http://www.armanivalues.com/",
        },
        {
            name: "transparency in coverage",
            link: "https://health1.aetna.com/app/public/#/one/insurerCode=AETNACVS_I&brandCode=ALICSI/machine-readable-transparency-in-coverage?searchTerm=11475213&lock=true",
        },
    ]

    var titleForourCompany = $("<h3>");
    titleForourCompany.text("our company");
    titleForourCompany.css(title);
    $.each(sitelinksForourCompany, function (index, value) {
        var linkTag = $("<a>");
        linkTag.text(value.name);
        linkTag.attr("href", value.link);
        linkTag.css(sitemapText);

        ourCompany.append(linkTag);
        ourCompany.prepend(titleForourCompany);
    })

    //follow us
    var followUs = $("<section>");

    const socialMediaIcons = [
        {
            name: "Facebook",
            class: "fa-brands fa-facebook",
            link: "https://www.facebook.com/armaniexchange",
        },
        {
            name: "Instagram",
            class: "fa-brands fa-instagram",
            link: "https://www.instagram.com/armaniexchange/",
        },
        {
            name: "Twitter",
            class: "fa-brands fa-x-twitter",
            link: "https://twitter.com/armaniexchange",
        },
        {
            name: "Youtube",
            class: "fa-brands fa-youtube",
            link: "https://www.youtube.com/armaniexchange",
        },
        {
            name: "Tik Tok",
            class: "fa-brands fa-tiktok",
            link: "https://www.tiktok.com/@armaniexchange",
        },
    ]
    var titleForfollowUs = $("<h3>");
    titleForfollowUs.text("follow us");
    titleForfollowUs.css(title);
    var follow_box = $("<div>");
    follow_box.css({
        display: "flex"
    })
    $.each(socialMediaIcons, function (index, value) {
        var linkTag = $("<a>");
        linkTag.css(sitemapText);
        linkTag.attr("href", value.link);

        var socialMediaIcon = $("<i>");
        socialMediaIcon.addClass(value.class);
        socialMediaIcon.css({
            color: "#000",
            fontSize: "1.5rem",
        })

        linkTag.append(socialMediaIcon);

        follow_box.append(linkTag);

        followUs.prepend(titleForfollowUs);
        followUs.append(follow_box)
    })
    sitemap_section.append(
        customer_care,
        shipping,
        ourCompany,
        followUs
    )

    body.append(
        header,
        related_websites,
        logo,
        menuBar,
        nav,
        campus_section,
        sneakerAndBoots,
        menCollection,
        highlight_section,
        strip_section,
        zoominCardContent,
        subscribing,
        dropBox,
        sitemap_section
    );
})
