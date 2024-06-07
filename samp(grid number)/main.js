const colors = ['#FF6666', '#66B2FF', '#FFD966', '#66CC66', '#B266FF', '#FF99CC', '#FF9933', '#66FF99', '#FF6666', '#6699FF', '#FF66B2', '#99FF66'];
const container = document.getElementById('container');

for (let i = 1; i <= 12; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.textContent = i;
    block.style.backgroundColor = colors[i - 1];
    container.appendChild(block);
}