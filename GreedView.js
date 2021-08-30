class GreedView {
    constructor() {
        this.header = '';
        this._headerClass = [];
        this._tableClass = [];
        this.attribute = [];
    }
    set header(header) {
        if (!this._header) {
            this._header = 'unknown table'
        }
        if (typeof header === 'string' && header.trim()) {
            this._header = header;
        }
        return false;
    }
    set headerClass(headerClass) {
        if (Array.isArray(headerClass)) {
            this._headerClass = headerClass;
        }
        return false;
    }
    render() {
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(item => {
                header.classList.add(item)
            });
            document.querySelector('body').append(header)
        }
        const table = document.createElement('table');
        this._tableClass.forEach(item => {
            table.classList.add(item)
        });
        //=====================создаем заголовки таблици=================================>
        const trHeader = document.createElement('tr');
        for (let [key, item] of Object.entries(this.attribute)) {
            const th = document.createElement('th');
            if (item['label']) {
                th.textContent = item['label']
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader)
        //============Создаем ячейки таблици======================>
        for (let item of data) {
            const tr = document.createElement('tr');
            for (let key in this.attribute) {
                const td = document.createElement('td');
                td.textContent = item[key] || '----------';
                tr.append(td)
            }
            table.append(tr)
        }
        document.querySelector('body').append(table)
    };

}


