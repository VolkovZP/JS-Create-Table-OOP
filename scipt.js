'use strict'
const data = [
    {
        company: 'Blizzar',
        chef: 'John Doe',
        country: 'USA',
    },
    {
        company: 'Ubisoft',
        chef: 'Andry Murei',
        country: 'Canada',
    },
    {
        company: 'Valve',
        chef: 'Richard Jrea',
        country: 'Germany',
    },
    {
        company: 'Rocktar',
        chef: '',
        country: 'USA',
    },
    {
        company: 'Bethesda',
        chef: 'Anderson Silva',
        country: 'Scotland',
    },
];
const f1 = new GreedView();
f1.header = 'table';
f1.headerClass = ['header-table', 'fb'];
f1.attribute = {
    'company': {
        'label': 'Компания',
    },
    'chef': {
        'label': 'Директор',
    },
    'country': {
        'label': 'Страна',
    },
}
f1.render();
