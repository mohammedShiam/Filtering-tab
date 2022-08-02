let list = document.querySelectorAll('.list')
let item = document.querySelectorAll('.item')



for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')
        }
        this.classList.add('active')
        let filter = this.getAttribute('data-filter')


        for (let k = 0; k < item.length; k++) {
            item[k].classList.add('hide')
            if (item[k].getAttribute('data-value') == filter || filter == 'all'){
                item[k].classList.remove('hide')

            }

        }
    })
}