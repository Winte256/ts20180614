"use strict";
var menuData = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Коровы'
                    }, {
                        title: 'Ослы'
                    }, {
                        title: 'Собаки'
                    }, {
                        title: 'Тигры'
                    }
                ]
            }, {
                title: 'Другие',
                items: [
                    {
                        title: 'Змеи'
                    }, {
                        title: 'Птицы'
                    }, {
                        title: 'Ящерицы'
                    }
                ]
            }
        ]
    }, {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {
                        title: 'Гуппи'
                    }, {
                        title: 'Скалярии'
                    }
                ]
            }, {
                title: 'Форель',
                items: [
                    {
                        title: 'Морская форель'
                    }
                ]
            }
        ]
    }
];
var renderList = function (list) {
    var ul = document.createElement('ul');
    list.forEach(function (item) {
        ul.appendChild(renderItem(item));
    });
    return ul;
};
var renderItem = function (item) {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.innerText = item.title;
    li.appendChild(link);
    if (item.hasOwnProperty('items') && Array.isArray(item.items)) {
        li.appendChild(renderList(item.items));
        link.addEventListener('click', function () {
            li.classList.toggle('menu-open');
        });
    }
    return li;
};
var navMenuList = document.querySelector('.menu');
if (navMenuList) {
    var rendered = renderList(menuData);
    console.log(rendered);
    navMenuList.appendChild(rendered);
    // navMenuList.onclick = (ev: MouseEvent) => {
    //     const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
    //     const classList = el.classList;
    //     if (!classList.contains('title')) {
    //         return;
    //     }
    //     const parentLi = el.parentNode as HTMLLIElement;
    //     parentLi.classList.toggle('menu-open');
    // };
}
