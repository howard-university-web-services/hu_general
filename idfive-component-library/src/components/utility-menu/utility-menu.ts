export function searchToggle() {

    const searchTrigger = document.querySelector('.utility__search-trigger');
    const searchForm = document.querySelector('.utility__search-form');

    const utility = document.querySelector('.utility');
    const body = <HTMLElement>document.querySelector('body');

    if (searchTrigger) {
        let searchSubmit = <HTMLElement>searchForm.querySelector('.utility__search-submit');
        let searchInput = document.getElementById('keyword');
        searchTrigger.addEventListener('click', event => {
            event.preventDefault();
            if (searchForm.classList.contains('search-open')) {

                searchForm.classList.remove('effects');
                setTimeout(function () { searchForm.classList.remove('search-open'); }, 50);

            }
            else {
                setTimeout(function () { searchForm.classList.add('search-open'); }, 50)
                setTimeout(function () { searchForm.classList.add('effects'); }, 70);
            }

            searchTrigger.classList.toggle('search-open');
            utility.classList.toggle('search-open');

            if (searchForm.classList.contains('search-open')) {
                searchInput.focus();
            }

        }, false);

        body.addEventListener('click', event => {
            let eventTarget = (event.target as HTMLElement);
            // console.log(eventTarget);
            if (eventTarget != searchTrigger && eventTarget != searchInput) {

                searchForm.classList.remove('search-open');
                searchTrigger.classList.remove('search-open');
                utility.classList.remove('search-open');
            }

        }, false);

    }

    //     var specifiedElement = <HTMLElement>document.getElementById('mainSearch');

    // //I'm using "click" but it works with any event
    // document.addEventListener('click', function(event) {
    //   let isClickInside = specifiedElement.contains(event.target as Node);

    //   if (!isClickInside|| !(event.target as HTMLElement).classList.contains('utility__search-trigger') ) {
    //     searchForm.classList.remove('search-open');
    //   }
    // });
}
