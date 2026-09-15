import { assetPath } from './asset-path';

export const themes = {
  sage: {
    primary: "#B2BEB5",
    secondary: "#E8EDE6",
    accent: "#9CAF88",
    text: "#454B1B"
  },
  dustyBlue: {
    primary: "#4F6F8F",
    secondary: "#E5EDF5",
    accent: "#8FA5BC",
    text: "#2C3E50"
  },
  softBrown: {
    primary: "#B49F89",
    secondary: "#F5E6D3",
    accent: "#DEC4A7",
    text: "#5E4B3B"
  },
  roseDust: {
    primary: "#C5AFA0",
    secondary: "#F2E9E4",
    accent: "#E6D1C5",
    text: "#8C7267"
  },
  oliveGreen: {
    primary: "#A3B18A",
    secondary: "#E9EDe4",
    accent: "#CAD2C5",
    text: "#52573D"
  }
};

export const weddingConfig = {
  couple: {
    bride: {
      name: "Kadunjikliu",
      fullName: "Kadunjikliu Malangmei",
      photo: {
        url: assetPath('/images/couple/bride.webp'),
        aspectRatio: "1:1",
        frame: {
          "1:1": assetPath('/images/couple/frame-photo-1.webp'),
          portrait: assetPath('/images/couple/frame-photo-2.webp')
        }
      },
      parents: "Daughter of Mrs. Ariuliu Malangmei and Late K. Achung Malangmei",
      about: "Known as Adun",
      socialMedia: {}
    },
    groom: {
      name: "Ngimchube",
      fullName: "Ngimchube Yalie",
      photo: {
        url: assetPath('/images/couple/groom.webp'),
        aspectRatio: "1:1",
        frame: {
          "1:1": assetPath('/images/couple/frame-photo-1.webp'),
          portrait: assetPath('/images/couple/frame-photo-2.webp')
        }
      },
      parents: "Son of Mrs. Widiang Zeliang and Mr. Kedibilung Zeliang",
      about: "Known as Chuchu",
      socialMedia: {}
    },
  },
  event: {
    akad: {
      date: "2026-10-07",
      time: "2:00 PM",
      venue: "Futsal Ground",
      address: "Opposite House of Prayer for All Nations, Ura Villa Colony, Dimapur, Nagaland",
    },
    reception: {
      date: "2026-10-07",
      time: "2:00 PM",
      venue: "Futsal Ground",
      address: "Opposite House of Prayer for All Nations, Ura Villa Colony, Dimapur, Nagaland",
    }
  },
  officiant: {
    role: "Officiating minister",
    name: "Namdingauzeung Thou",
    church: "Pastor, Zeme Baptist Church, Dimapur"
  },
  specialFeatures: { countdownTimer: true }
};