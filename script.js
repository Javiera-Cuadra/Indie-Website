function createStars(n, size, containerId, duration) {
  const container = document.getElementById(containerId);
  let shadows = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000); // ancho
    const y = Math.floor(Math.random() * 2000); // alto
    shadows.push(`${x}px ${y}px #FFF`);
  }
  container.style.width = size + "px";
  container.style.height = size + "px";
  container.style.background = "transparent";
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.boxShadow = shadows.join(", ");
  container.style.animation = `animStar ${duration}s linear infinite`;
  container.style.zIndex = "0";
}

createStars(730, 1, "stars", 330);   // 750 estrellas pequeñas
createStars(220, 2, "stars2", 250); // 200 medianas
createStars(100, 3, "stars3", 180); // 100 grandes
