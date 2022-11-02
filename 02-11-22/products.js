const products = [
  {
    id: 1,
    title: "Sneaker Gucci Basket donna",
    price: 850,
    description:
      "Con un look che ricorda le scarpe da basket degli anni '90, la Maison presenta una nuova rivisitazione delle sneaker stringate: Gucci Basket.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1632436209/676111_2SHG0_9076_001_100_0000_Light-Sneaker-Gucci-Basket-donna.jpg",
    color: "white",
  },
  {
    id: 2,
    title: "Stivaletto donna trapuntato con motivo GG",
    price: 1190,
    description:
      "Questo paio di stivaletti, che ricorda l'abbigliamento da montagna, è caratterizzato da una silhouette oversize, impreziosita da una suola dentellata ben definita.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_2400x2400/1664814617/718386_DS8U0_1000_001_095_0000_Light-Stivaletto-stringato-donna-trapuntato-con-motivo-GG.jpg",
    color: "black",
  },
  {
    id: 3,
    title: "Décolleté donna tacco alto",
    price: 750,
    description:
      "Nuova interpretazione della classica silhouette, questo paio di décolleté è semplice ma elegante. Il modello è valorizzato da un tacco a stiletto in metallo per un look contemporaneo.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_2400x2400/1661792407/715145_BKO00_9049_002_090_0000_Light-Dcollet-donna-tacco-alto.jpg",
    color: "white",
  },
  {
    id: 4,
    title: "Mocassino Jordaan donna",
    price: 980,
    description:
      "La pelle Matelassé continua a caratterizzare i modelli del Direttore Creativo in nuovi e unici modi, stagione dopo stagione.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_2400x2400/1649089816/699903_BKO60_1000_001_100_0000_Light-Mocassino-Jordaan-donna.jpg",
    color: "black",
  },
  {
    id: 5,
    title: "Ballerina Gucci Lovelight con cristalli e Morsetto",
    price: 750,
    description:
      "La Maison presenta una vivace collezione di capi ready-to-wear, scarpe e accessori realizzati con una palette ricca di colore.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_2400x2400/1656519346/707703_KSP20_8461_001_100_0000_Light-Ballerina-Gucci-Lovelight-con-cristalli-e-Morsetto.jpg",
    color: "glitter",
  },
  {
    id: 6,
    title: "Sandalo Gucci Lovelight con fiore",
    price: 1150,
    description:
      "La Maison presenta una vivace collezione di capi ready-to-wear, scarpe e accessori realizzati con una palette ricca di colore.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_2400x2400/1657292447/707742_C9D00_4914_001_090_0000_Light-Sandalo-Gucci-Lovelight-con-fiore.jpg",
    color: "blue",
  },
  {
    id: 7,
    title: "Zoccolo GG donna",
    price: 950,
    description:
      "Le forme retrò sono protagoniste della collezione Gucci Love Parade, rappresentando il fascino della Maison verso le epoche passate.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_2400x2400/1648062043/700062_KY950_9765_001_095_0000_Light-Zoccolo-GG-donna.jpg",
    color: "brown",
  },
  {
    id: 8,
    title: "Sandalo donna effetto rafia GG con plateau",
    price: 750,
    description:
      "Materiali, texture e motivi si mescolano per creare l'atmosfera delle stagioni più calde. Questi sandali con plateau sono realizzati in tessuto effetto rafia con motivo GG.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXA7C3D9_Center_0_0_2400x2400/1649089839/703791_UWB80_9665_001_090_0000_Light-Sandalo-donna-in-tessuto-effetto-rafia-GG-con-plateau.jpg",
    color: "yellow",
  },
  {
    id: 9,
    title: "Sandalo donna in coccodrillo cut-out",
    price: 4600,
    description:
      "Ispirato a un simbolo d'archivio degli anni '70, l'Incrocio GG appare qui come dettaglio su questo paio di sandali in coccodrillo rosa.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1654553803/694451_E5V00_5245_001_100_0000_Light-Sandalo-donna-in-coccodrillo-con-dettaglio-cut-out.jpg",
    color: "pink",
  },
  {
    id: 10,
    title: "Stivale donna effetto shearling con GG",
    price: 1490,
    description:
      "I simboli del logo della Maison vengono reinventati ogni stagione. Questo paio di stivali in pelle nascondono un dettaglio caratteristico: la fodera in tessuto effetto shearling GG.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1665072028/719822_AAA5Q_3145_001_100_0000_Light-Stivale-donna-effetto-shearling-con-GG.jpg",
    color: "green",
  },
  {
    id: 11,
    title: "Stivaletto donna con motivo GG e fibbie",
    price: 1150,
    description:
      "Cristalli luccicanti enfatizzano lo stile di questi stivaletti, elevando il classico hardware. Il modello è realizzato in un mix di pelle bianca e tessuto GG Supreme.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1647369951/701100_UVV30_9078_001_095_0000_Light-Stivaletto-donna-con-motivo-GG-e-fibbie.jpg",
    color: "white",
  },
  {
    id: 12,
    title: "Sandalo donna con dettaglio Incrocio GG",
    price: 890,
    description:
      "Le iniziali di Guccio Gucci compaiono in ogni collezione attraverso i loghi più emblematici della Maison. Questo paio di sandali in pelle nera è definito dall'Incrocio GG con cristalli.",
    category: "women's shoes",
    image: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649870110/694863_C9D00_1000_001_090_0000_Light-Sandalo-donna-con-dettaglio-Incrocio-GG.jpg",
    color: "black",
  },
];

export default products;