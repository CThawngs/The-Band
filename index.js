document.addEventListener('DOMContentLoaded', function() 
{
    const buyBtns = document.querySelectorAll('.js-buy-ticket');
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.js-modal-content');
    const modalClose = document.querySelector('.modal-close');

    var header = document.getElementById('header');
    var menu_mobile = document.querySelector('.menu-mobile');
    var header_height = header.clientHeight;
    var menuItems = document.querySelectorAll('#nav > li > a[href*="#"]');

    // Hiện Modal
    function showBuyTickets()
    {
        modal.classList.add('open');
    }

    // Ẩn Modal
    function hideBuyTickets()
    {
        modal.classList.remove('open');
    }

    for (const buyBtn of buyBtns)
    {
        buyBtn.addEventListener('click', showBuyTickets);
    }
    modalClose.addEventListener('click', hideBuyTickets);
    modal.addEventListener('click', hideBuyTickets);
    modalContent.addEventListener('click', function (event) 
    {
        event.stopPropagation();
    });


    // Mở & đóng Menu_Mobile
    menu_mobile.onclick = function() 
    {
        var Close = header.clientHeight === header_height;
        if (Close)
        {
            header.style.height = 'auto';
        }
        else
        {
            header.style.height = null;
        }
    }

    // Tự động đóng Menu_Mobile khi click vào Element
    for (var i = 0; i < menuItems.length; i++)
    {
        var menuItem = menuItems[i];
        menuItem.addEventListener('click', function(event) 
        {
            var parentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav');
            if (parentMenu)
            {
                event.preventDefault();
            }
            else 
            {
                header.style.height = null;
            }
        });
    }
}, false);
