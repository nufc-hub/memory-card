// import all PNGs in /src/assets/icons
const icons = import.meta.glob('../assets/icons/*.png', { eager: true });

// Data in the memory cards
export const foodData = [
  {
    id: crypto.randomUUID(),
    name: 'korean melon',
    url: icons['../assets/icons/melon.png'].default, // <a href="https://www.flaticon.com/free-icons/melon" title="melon icons">Melon icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'kimchi',
    url: icons['../assets/icons/kimchi.png'].default, // <a href="https://www.flaticon.com/free-icons/kimchi" title="kimchi icons">Kimchi icons created by Flat Icons - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'corndog',
    url: icons['../assets/icons/corndog.png'].default, // <a href="https://www.flaticon.com/free-icons/corndog" title="corndog icons">Corndog icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'kkakdugi',
    url: icons['../assets/icons/kkakdugi.png'].default, // <a href="https://www.flaticon.com/free-icons/kimchi" title="kimchi icons">Kimchi icons created by Asep Saripudin - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'bungeoppang ',
    url: icons['../assets/icons/bungeoppang.png'].default, // <a href="https://www.flaticon.com/free-icons/fish" title="fish icons">Fish icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'fried rice',
    url: icons['../assets/icons/fried-rice.png'].default, // <a href="https://www.flaticon.com/free-icons/rice" title="rice icons">Rice icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'bibimbap',
    url: icons['../assets/icons/bibimbap.png'].default, // <a href="https://www.flaticon.com/free-icons/bibimbap" title="bibimbap icons">Bibimbap icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'budae jjigae',
    url: icons['../assets/icons/budae-jjigae.png'].default, // <a href="https://www.flaticon.com/free-icons/korean-food" title="korean food icons">Korean food icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'soju',
    url: icons['../assets/icons/soju.png'].default, // <a href="https://www.flaticon.com/free-icons/soju" title="soju icons">Soju icons created by iconixar - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'kimchi jjigae',
    url: icons['../assets/icons/kimchi-jjigae.png'].default, // <a href="https://www.flaticon.com/free-icons/kimchi" title="kimchi icons">Kimchi icons created by Prosymbols Premium - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'tteokbokki',
    url: icons['../assets/icons/tteokbokki.png'].default, // <a href="https://www.flaticon.com/free-icons/tteokbokki" title="tteokbokki icons">Tteokbokki icons created by Freepik - Flaticon</a>
  },
  {
    id: crypto.randomUUID(),
    name: 'pajeon',
    url: icons['../assets/icons/pajeon.png'].default, // <a href="https://www.flaticon.com/free-icons/korean-food" title="korean food icons">Korean food icons created by MetamorphLab - Flaticon</a>
  },
];
