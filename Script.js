// Daftar meme yang ada di folder memes/
const memes = [
  {id: "meme1", file: "memes/meme1.jpg"},
  {id: "meme2", file: "memes/meme2.png"},
  {id: "meme3", file: "memes/meme3.jpg"}
];

// Render semua meme ke halaman
const container = document.getElementById("meme-container");

memes.forEach(meme => {
  const card = document.createElement("div");
  card.className = "meme-card";

  card.innerHTML = `
    <img src="${meme.file}" alt="${meme.id}">
    <div class="actions">
      <button onclick="vote('${meme.id}','up')">👍</button>
      <span id="${meme.id}-votes">0</span>
      <button onclick="vote('${meme.id}','down')">👎</button>
      <a href="${meme.file}" download>⬇️ Download</a>
    </div>
  `;
  container.appendChild(card);
});

// Voting sistem pake localStorage
function vote(memeId, type) {
  let votes = localStorage.getItem(memeId) || 0;
  votes = parseInt(votes);

  if(type === "up") votes++;
  else votes--;

  localStorage.setItem(memeId, votes);
  document.getElementById(memeId+"-votes").innerText = votes;
}

// Load vote awal saat halaman dibuka
window.onload = function() {
  memes.forEach(meme => {
    let saved = localStorage.getItem(meme.id) || 0;
    document.getElementById(meme.id+"-votes").innerText = saved;
  });
}