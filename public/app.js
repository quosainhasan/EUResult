window.onload = async () => {
    const response = await fetch('./data');
    const data = await response.json();
    const dataDiv = document.getElementById('data');
    const searchInput = document.getElementById('search');

    function displayData(filteredData) {
        dataDiv.innerHTML = '';
        filteredData.forEach(item => {
            const div = document.createElement('div');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            a.target = '_blank';
            div.appendChild(a);
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createElement('br'));
            dataDiv.appendChild(div);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item => item.text.toLowerCase().includes(searchTerm));
        displayData(filteredData);
    });

    displayData(data);
};
