const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "<insert nft collection name here>";
const description = "<insert nft collection description here>";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "<src>",
  creators: [
    {
      address: "<wallet>",
      share: 100,
    },
  ],
};

const layerConfig = [
  {
    id: 1,
    name: 'Background',
    mutual: [],
    required: true,
    rarity: [5, 10, 40, 10, 5, 5, 5, 10, 10, 10],
  },
  {
    id: 2,
    name: 'Body',
    mutual: [],
    required: true,
    rarity: [100, 2, 15, 5, 5, 15, 20, 5, 20],
  },
  {
    id: 3,
    name: 'Horns',
    mutual: [],
    required: true,
    rarity: [30, 5, 2, 20, 2, 10, 100],
  },
  {
    id: 4,
    name: 'Tattoo',
    mutual: ['Sweater', 'ShirtNoJacket', 'Jacket'],
    required: false,
    rarity: 'None',
  },
  {
    id: 5,
    name: 'Shirt',
    mutual: ['ShirtNoJacket'],
    required: false,
    rarity: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 3, 20, 20, 20, 3, 20],
  },
  {
    id: 6,
    name: 'ShirtNoJacket',
    mutual: ['Jacket', 'Suspenders'],
    required: false,
    rarity: [100, 10, 15, 10, 15, 10, 15, 10],
  },
  {
    id: 7,
    name: 'Sweater',
    mutual: ['Shirt', 'ShirtNoJacket'],
    required: false,
    rarity: [100, 20, 15, 15, 20, 20, 20, 30],
  },
  {
    id: 8,
    name: 'Suspenders',
    mutual: ['Jacket', 'Sweater', 'Shirt'],
    required: false,
    rarity: 'None',
  },
  {
    id: 9,
    name: 'Necklace',
    mutual: ['ShirtNoJacket', 'Sweater'],
    required: false,
    rarity: [100, 5, 20, 5, 20, 20, 5],
  },
  {
    id: 10,
    name: 'Jacket',
    mutual: ['Sweater', 'Shirt'],
    required: false,
    rarity: [100, 50, 20, 20, 20, 20, 5, 20],
  },
  {
    id: 11,
    name: 'Eyes',
    mutual: [],
    required: true,
    rarity: [10, 100, 5, 10, 30],
  },
  {
    id: 12,
    name: 'Glasses',
    mutual: [],
    required: false,
    rarity: [500, 10, 30, 10, 5, 20, 10, 20, 30, 5],
  },
  {
    id: 13,
    name: 'Hair',
    mutual: [],
    required: true,
    rarity: [100, 5, 2, 5, 5],
  },
  {
    id: 14,
    name: 'Wig',
    mutual: ['Hat', 'Hair'],
    required: false,
    rarity: [100, 10, 10, 10, 10, 10],
  },
  {
    id: 15,
    name: 'Hat',
    mutual: ['Horniment'],
    required: false,
    rarity: [600, 10, 15, 10, 15, 15, 15, 15, 15, 5, 5, 5, 5, 10, 15, 15, 15, 15, 15, 15, 10, 15],
  },
  {
    id: 16,
    name: 'Horniment',
    mutual: [],
    required: false,
    rarity: [100, 5, 15, 5, 15],
  },
  {
    id: 17,
    name: 'Mustache',
    mutual: [],
    required: false,
    rarity: [100, 30],
  },
  {
    id: 18,
    name: 'Jewelery',
    mutual: [],
    required: false,
    rarity: [100, 10, 10, 20],
  },
  {
    id: 19,
    name: 'Mouth',
    mutual: ['MaskNoMouth'],
    required: true,
    rarity: [10, 15, 30, 15, 5, 30, 15, 30, 5],
  },
  {
    id: 20,
    name: 'MaskNoMouth',
    mutual: ['Mustache', 'Glasses', 'Wig', 'Hat', 'Mask'],
    required: false,
    rarity: [100, 10, 20, 10, 20, 10],
  },
  {
    id: 21,
    name: 'Mask',
    mutual: ['Mustache', 'Glasses', 'Wig', 'Hat'],
    required: false,
    rarity: [100, 10, 10],
  },
  {
    id: 22,
    name: 'FullMask',
    mutual: ['Mustache', 'Glasses', 'Wig', 'Hat', 'Jewelery', 'Horniment', 'Mask', 'MaskNoMouth', 'Mouth'],
    required: false,
    rarity: 'None',
  }
]

const growEditionSizeTo = 2500;
const shuffleLayerConfigurations = false;
const debugLogs = false;

const format = {
  width: 800,
  height: 800,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  layerConfig,
  growEditionSizeTo
};
