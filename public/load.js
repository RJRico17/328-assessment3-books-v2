window.addEventListener('DOMContentLoaded', loadReviews);

async function loadReviews() {
    const res = await fetch('/api/reviews', {method: "get"});
    const data = await res.json();
    const reviewList = document.getElementById('review-list');
    data.forEach(book => {
        let markup = "";
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.appendChild(document.createElement(`img src="${book.image}"`));
        td.appendChild(document.createElement('div').append(book.title));

        tr.appendChild(td);
        markup.appendChild(tr)
        reviewList.innerHTML += markup;
    });
}

