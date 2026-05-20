import logoImage from '../assets/client/logo.png';
import heroImage from '../assets/client/hero.png';
import gallery1Image from '../assets/client/gallery1.png';
import gallery2Image from '../assets/client/gallery2.png';
import gallery3Image from '../assets/client/gallery3.png';

const galleryImages = [gallery1Image, gallery2Image, gallery3Image];

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export interface SiteConfig {
  restaurantName: string;
  logoImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  galleryImages: string[];
  phone: {
    display: string;
    telHref: string;
    whatsappUrl: string;
  };
  address: {
    street: string;
    postalCity: string;
    full: string;
    mapEmbedUrl: string;
  };
  email: string;
  hours: {
    days: string;
    time: string;
  };
  menuItems: MenuCategory[];
  colors: {
    gold: string;
    midnight: string;
    cream: string;
  };
  navigation: {
    label: string;
    to: string;
  }[];
  home: {
    eyebrow: string;
    primaryButton: string;
    secondaryButton: string;
    features: {
      icon: 'utensils' | 'clock' | 'mapPin';
      title: string;
      desc: string;
    }[];
    testimonial: {
      text: string;
      rating: number;
      label: string;
    };
    ctaTitleBefore: string;
    ctaTitleHighlight: string;
    ctaTitleAfter: string;
    ctaText: string;
    ctaPrimaryButton: string;
    ctaSecondaryButton: string;
  };
  menuPage: {
    eyebrow: string;
    title: string;
    categoryLabels: Record<string, string>;
    categoryNotes: Record<string, string>;
    categoryImages: Record<string, string>;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    emailLabel: string;
    whatsappText: string;
  };
  reservationPage: {
    eyebrow: string;
    title: string;
    description: string;
    subjectPrefix: string;
    successTitle: string;
    successMessage: string;
    successFollowUp: string;
    submitText: string;
    sendingText: string;
  };
  reviewsSection: {
    eyebrow: string;
    title: string;
  };
  reviews: {
    text: string;
    rating: number;
  }[];
  footer: {
    description: string;
    navigationTitle: string;
    hoursTitle: string;
    socialTitle: string;
    copyrightText: string;
    taglinePrefix: string;
    taglineItems: string[];
    socialLinks: {
      name: string;
      icon: string;
      href: string;
    }[];
  };
}

// Edit this file when reusing the site for a new restaurant client.
export const siteConfig = {
  restaurantName: 'Spice & Valley',
  logoImage,
  heroTitle: 'Spice & Valley',
  heroSubtitle: 'Fast Food Gourmand au Bourget',
  heroDescription:
    'Burgers smashes, poulet croustillant, wraps savoureux. Le gout authentique, servi vite et bien.',
  heroImage,
  galleryImages,
  phone: {
    display: '09 54 75 24 84',
    telHref: 'tel:0954752484',
    whatsappUrl: 'https://wa.me/33954752484',
  },
  address: {
    street: '11b Av. Francis de Pressense',
    postalCity: '93350 Le Bourget',
    full: '11b Av. Francis de Pressense, 93350 Le Bourget',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2!2d2.4167!3d48.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d2e7b6a6a6d%3A0x0!2s11b+Av.+Francis+de+Pressens%C3%A9%2C+93350+Le+Bourget!5e0!3m2!1sfr!2sfr!4v1',
  },
  email: 'contact@spiceandvalley.fr',
  hours: {
    days: 'Lundi - Dimanche',
    time: '06h00 - 00h00',
  },
  menuItems: [
    {
      "id": "deals",
      "name": "Good Deals",
      "items": [
        {
          "name": "Chicken Wrap + 5 Wings Menu",
          "description": "Tender chicken wrap, mayo sauce, crisp salad + 5 spicy wings, fries and a 33cl drink",
          "price": 14.99
        },
        {
          "name": "Double Cheese + 5 Wings Menu",
          "description": "Double cheeseburger with cheese, special sauce and crisp salad + 5 spicy wings, fries and a 33cl drink",
          "price": 14.99
        },
        {
          "name": "Fillet Burger + Double Cheese Menu",
          "description": "Fillet chicken burger + double cheese burger, fries and 33cl drink",
          "price": 14.99
        },
        {
          "name": "Chicken Steak + Cheese Burger Menu",
          "description": "Chicken steak burger + cheeseburger, fries and 33cl drink",
          "price": 12.99
        }
      ]
    },
    {
      "id": "smash_burgers",
      "name": "Smash Burgers",
      "items": [
        {
          "name": "Chicken Beef OMG",
          "description": "Brioche bun with a chicken patty and a beef patty, fries and a 33cl drink",
          "price": 12.99
        },
        {
          "name": "Royal Chicken OMG",
          "description": "Brioche bun with two chicken patties and caramelised onions, fries and a 33cl drink",
          "price": 12.99
        },
        {
          "name": "Bacon Special OMG",
          "description": "Brioche bun with beef, bacon and egg, lettuce, tomato and onion",
          "price": 12.99
        },
        {
          "name": "Royal Bacon OMG",
          "description": "Brioche bun with two beef patties, bacon, crisp salad, tomato and onion",
          "price": 12.99
        }
      ]
    },
    {
      "id": "burger_menus",
      "name": "Burger Menus",
      "note": "All menus include fries and a 33cl drink",
      "items": [
        {
          "name": "Chicken Fillet Menu",
          "description": "Tender chicken fillet, crisp salad, mayo and cheddar cheese sauce",
          "price": 10.99
        },
        {
          "name": "Tikka Burger Menu",
          "description": "Tikka-marinated grilled chicken fillet, crisp salad, mayo sauce and cheese",
          "price": 10.99
        },
        {
          "name": "Empire Fillet Menu",
          "description": "Tender chicken fillet with golden potato pancake, crisp salad and mayo sauce",
          "price": 11.99
        },
        {
          "name": "Chicken Steak Menu",
          "description": "Chicken steak with lettuce, mayo and cheese in a bun",
          "price": 9.99
        },
        {
          "name": "Cheese Burger Menu",
          "description": "100% beef burger, crisp salad, fresh tomatoes, special sauce and melted cheese",
          "price": 8.99
        },
        {
          "name": "Double Cheese Menu",
          "description": "Two 100% beef patties, crisp salad, fresh tomatoes, onion, special sauce and 2 slices of melted cheese",
          "price": 10.99
        },
        {
          "name": "Triple Beef Menu",
          "description": "Three 80g 100% beef patties, crisp salad, fresh tomatoes, onion, special sauce and 2 slices of melted cheese",
          "price": 11.99
        },
        {
          "name": "CK Special Menu",
          "description": "113g beef burger + potato patty, crunchy salad and burger sauce in a floured bun",
          "price": 10.99
        },
        {
          "name": "Fish Burger Menu",
          "description": "Fish fillet, crisp salad and mayo sauce",
          "price": 10.99
        },
        {
          "name": "Veg Burger Menu",
          "description": "Vegetable burger, crisp salad and mayo sauce",
          "price": 10.99
        }
      ]
    },
    {
      "id": "chicken_menus",
      "name": "Chicken Menus",
      "note": "All menus include fries and a 33cl drink",
      "items": [
        {
          "name": "Spicy Wings Menu x10",
          "description": "10 marinated chicken wings and drumlets",
          "price": 12.99
        },
        {
          "name": "Flaky Strips (Tenders) Menu",
          "description": "5 tender chicken pieces, marinated to the house recipe",
          "price": 11.99
        },
        {
          "name": "Mixed Chicken Menu",
          "description": "2 chicken pieces + 3 wings",
          "price": 11.99
        },
        {
          "name": "Flaky + Wings Menu",
          "description": "3 tenders + 5 spicy wings",
          "price": 11.99
        },
        {
          "name": "Nuggets x6 Menu",
          "description": "6 chicken nuggets",
          "price": 9.99
        },
        {
          "name": "Tikka Strips Menu",
          "description": "5 tikka-marinated chicken tenders, spiced to a unique recipe",
          "price": 11.99
        },
        {
          "name": "Wings x6 Menu",
          "description": "6 spicy wings",
          "price": 9.99
        },
        {
          "name": "Spicy Wings Menu x15",
          "description": "15 marinated chicken wings and drumlets",
          "price": 16.99
        }
      ]
    },
    {
      "id": "wraps_naans",
      "name": "Wraps & Cheese Naans",
      "note": "All menus include fries and a 33cl drink",
      "items": [
        {
          "name": "Chicken Wrap Menu",
          "description": "Tender chicken fillet, crunchy salad, mayo sauce and melted cheese in a tortilla",
          "price": 11.99
        },
        {
          "name": "Tikka Wrap Menu",
          "description": "Tikka-marinated grilled chicken, crunchy salad, mayo and melted cheese in a tortilla",
          "price": 11.99
        },
        {
          "name": "Lamb Seekh Wrap Menu",
          "description": "Flame-grilled lamb seekh kebab, crunchy salad, melted cheese and mayo in a tortilla",
          "price": 11.99
        },
        {
          "name": "Chicken Seekh Wrap Menu",
          "description": "Flame-grilled chicken seekh kebab, crunchy salad, melted cheese and mayo in a tortilla",
          "price": 11.99
        },
        {
          "name": "Beef Steak Wrap Menu",
          "description": "Flame-grilled beef steaks, crunchy salad, melted cheese and mayo in a tortilla",
          "price": 11.99
        },
        {
          "name": "Chicken Tenders Naan Menu",
          "description": "Chicken tenders in a cheese naan with mayo sauce and crunchy salad",
          "price": 14.99
        },
        {
          "name": "Chicken Tikka Naan Menu",
          "description": "Spiced tikka chicken in a cheese naan with mayo sauce and crunchy salad",
          "price": 14.99
        },
        {
          "name": "Beef Steak Naan Menu",
          "description": "Beef steaks in a cheese naan with biggi burger sauce and crunchy salad",
          "price": 14.99
        },
        {
          "name": "Mix Naan Menu (Chicken + Steak)",
          "description": "Tender chicken fillet + beef steak with biggi sauce and mayo in a cheese naan",
          "price": 14.99
        }
      ]
    },
    {
      "id": "family_boxes",
      "name": "Family Boxes",
      "note": "All boxes include a large family fries and a 1.5L drink",
      "items": [
        {
          "name": "Family Box 10pcs",
          "description": "10 large chicken pieces",
          "price": 27.99
        },
        {
          "name": "Family Box 1 \u2013 6pcs + 10 Wings",
          "description": "6 large chicken pieces + 10 wings",
          "price": 27.99
        },
        {
          "name": "Family Box \u2013 25 Wings",
          "description": "25 spicy chicken wings",
          "price": 29.99
        },
        {
          "name": "Family Box 20 Tenders",
          "description": "20 chicken breast tenders",
          "price": 34.99
        },
        {
          "name": "Family Box \u2013 50 Wings",
          "description": "50 spicy wings (drumlets and winglets)",
          "price": 47.99
        },
        {
          "name": "Family Box 2 \u2013 10 Tenders + 15 Wings",
          "description": "10 chicken breast tenders + 15 wings",
          "price": 34.99
        }
      ]
    },
    {
      "id": "chicken_a_la_carte",
      "name": "Chicken (\u00C0 La Carte)",
      "items": [
        {
          "name": "Tenders x5",
          "description": "5 breaded fried chicken breast tenders",
          "price": 8.99
        },
        {
          "name": "Mix (3 Tenders + 5 Wings)",
          "description": "3 tenders + 5 spicy hot wings",
          "price": 8.99
        },
        {
          "name": "Nuggets x6",
          "description": "6 chicken nuggets",
          "price": 7.99
        },
        {
          "name": "Nuggets x10",
          "description": "10 chicken nuggets",
          "price": 10.99
        },
        {
          "name": "Nuggets x15",
          "description": "15 chicken nuggets with sauces",
          "price": 14.99
        },
        {
          "name": "Spicy Wings x5",
          "description": "5 hot and spicy wings (drumlets and winglets)",
          "price": 7.99
        },
        {
          "name": "Spicy Wings x10",
          "description": "10 marinated spicy chicken wings",
          "price": 9.99
        },
        {
          "name": "Spicy Wings x15",
          "description": "15 marinated spicy chicken wings",
          "price": 12.99
        },
        {
          "name": "Spicy Wings x20",
          "description": "20 marinated spicy chicken wings",
          "price": 17.99
        },
        {
          "name": "Tikka Strips x5",
          "description": "5 tikka-marinated, grilled and spiced chicken tenders",
          "price": 8.99
        },
        {
          "name": "King Box (2 Tenders + 3 Wings)",
          "description": "2 tenders + 3 wings combo box",
          "price": 9.99
        },
        {
          "name": "Chicken Mixte Box",
          "description": "2 large chicken pieces + 4 spicy wings",
          "price": 9.99
        }
      ]
    },
    {
      "id": "burgers_a_la_carte",
      "name": "Burgers & Wraps (\u00C0 La Carte)",
      "items": [
        {
          "name": "Fillet Burger",
          "description": "Tender chicken fillet, crunchy salad, cheese and mayo in a warm bun",
          "price": 8.99
        },
        {
          "name": "Chicken + Beef Burger",
          "description": "Chicken and beef burger combo",
          "price": 9.99
        },
        {
          "name": "Tikka Burger",
          "description": "Grilled spiced marinated chicken fillet, crunchy salad and mayo in a warm bun",
          "price": 9.99
        },
        {
          "name": "Chicken Steak",
          "description": "Chicken steak, cheese, crunchy salad and mayo in a warm bun",
          "price": 6.99
        },
        {
          "name": "Royal Bacon Burger",
          "description": "Two 100% beef patties with halal beef bacon, melted cheese, crunchy salad, onion, tomato and burger sauce",
          "price": 9.99
        },
        {
          "name": "Empire Fillet",
          "description": "Tender chicken fillet + potato pancake, crunchy salad and mayo in a warm bun",
          "price": 9.99
        },
        {
          "name": "Cheeseburger",
          "description": "100% beef patty with melted cheese, crunchy salad and special burger sauce",
          "price": 5.99
        },
        {
          "name": "CK Special",
          "description": "Two 100% beef patties with halal turkey bacon, melted cheese, crunchy salad, onion, tomato and burger sauce",
          "price": 9.99
        },
        {
          "name": "Double Cheese Burger",
          "description": "Two 100% beef patties with melted cheese, crunchy salad and special burger sauce",
          "price": 8.99
        },
        {
          "name": "Fish Burger",
          "description": "Breaded fish fillet, melted cheese, crunchy salad and special mayo sauce in a warm bun",
          "price": 7.99
        },
        {
          "name": "Veg Burger",
          "description": "Vegetable patty, cheese, special mayo sauce and crunchy salad in a warm bun",
          "price": 7.99
        },
        {
          "name": "Chicken Wrap",
          "description": "Chicken tenders, crunchy salad, cheese and mayo rolled in a tortilla",
          "price": 8.99
        },
        {
          "name": "Tikka Wrap",
          "description": "Grilled spiced tikka chicken, melted cheese, crunchy salad and mayo",
          "price": 8.99
        },
        {
          "name": "Seekh Wrap",
          "description": "Lamb or chicken mince, oven-cooked, melted cheese, mayo and crunchy salad",
          "price": 8.99
        },
        {
          "name": "Bacon Chicken",
          "description": "Tender chicken fillet + beef bacon, crunchy salad, cheese and mayo in a warm bun",
          "price": 8.99
        }
      ]
    },
    {
      "id": "starters",
      "name": "Starters & Sides",
      "items": [
        {
          "name": "Mozza Sticks x6",
          "description": "6 mozzarella sticks (fried cheese bites)",
          "price": 5.99
        },
        {
          "name": "Camembert Bites x6",
          "description": "6 fried camembert bites",
          "price": 5.99
        },
        {
          "name": "Jalape\u00F1os Red x6",
          "description": "6 red jalape\u00F1o bites (fried cheese with red chilli)",
          "price": 5.99
        },
        {
          "name": "Jalape\u00F1os Green x6",
          "description": "6 green jalape\u00F1o bites (fried cheese with green chilli)",
          "price": 5.99
        },
        {
          "name": "Medium Fries",
          "description": "Classic medium-cut fries",
          "price": 2.99
        },
        {
          "name": "Crispy Rice",
          "description": "Chicken tenders with chilli or sweet sauce, fried onions and cheese sauce",
          "price": 8
        }
      ]
    },
    {
      "id": "kids",
      "name": "Kids Menus",
      "note": "All kids menus include a Kinder, fries and a Capri-Sun",
      "items": [
        {
          "name": "Kids Cheeseburger Menu",
          "description": "1 cheeseburger",
          "price": 9.99
        },
        {
          "name": "Kids Chicken Steak Menu",
          "description": "1 chicken steak burger with small fries",
          "price": 9.99
        },
        {
          "name": "Kids Nuggets x4 Menu",
          "description": "4 chicken nuggets",
          "price": 9.99
        },
        {
          "name": "Kids Chicken Poppers Menu",
          "description": "8 pieces of non-spicy chicken",
          "price": 9.99
        }
      ]
    },
    {
      "id": "desserts",
      "name": "Desserts",
      "items": [
        {
          "name": "Daim Tart",
          "description": "Daim cake tart",
          "price": 3.99
        },
        {
          "name": "Tiramisu",
          "description": "Choice of caramel or chocolate",
          "price": 3.99
        }
      ]
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "items": [
        {
          "name": "Coca-Cola 33cl",
          "description": "Original flavour",
          "price": 2.2
        },
        {
          "name": "Coca-Cola Zero 33cl",
          "description": "Zero sugar, zero calories",
          "price": 2.2
        },
        {
          "name": "Fanta Orange 33cl",
          "description": "Refreshing orange drink",
          "price": 2.2
        },
        {
          "name": "Orangina 33cl",
          "description": "Classic orangina",
          "price": 2.2
        },
        {
          "name": "Oasis Tropical",
          "description": "Choice of size",
          "price": 2.2
        },
        {
          "name": "Pepsi 33cl",
          "description": "",
          "price": 2.2
        },
        {
          "name": "7Up Mojito",
          "description": "Choice of size",
          "price": 2.2
        },
        {
          "name": "Perrier 33cl",
          "description": "Sparkling water",
          "price": 2.2
        },
        {
          "name": "Still Water 50cl",
          "description": "Still mineral water",
          "price": 1.99
        },
        {
          "name": "Coca-Cola 1.5L",
          "description": "Original flavour, large bottle",
          "price": 3.99
        }
      ]
    }
  ] as MenuCategory[],
  colors: {
    gold: '#D4AF37',
    midnight: '#0A0A0B',
    cream: '#f5f1e8',
  },
  navigation: [
    { label: 'Accueil', to: '/' },
    { label: 'La Carte', to: '/carte' },
    { label: 'Reservation', to: '/reservation' },
    { label: 'Contact', to: '/contact' },
  ],
  home: {
    eyebrow: 'Restaurant Gourmand',
    primaryButton: 'Decouvrir la Carte',
    secondaryButton: 'Reserver',
    features: [
      {
        icon: 'utensils',
        title: 'Saveurs Authentiques',
        desc: 'Des recettes originales, des ingredients frais et un savoir-faire unique pour chaque plat.',
      },
      {
        icon: 'clock',
        title: 'Service Rapide',
        desc: 'Votre commande preparee avec soin et servie rapidement, sans compromis sur la qualite.',
      },
      {
        icon: 'mapPin',
        title: 'Le Bourget, Paris',
        desc: '11b Av. Francis de Pressense, 93350 Le Bourget. Ouvert tous les jours de 06h00 a 00h00.',
      },
    ],
    testimonial: {
      text: 'Le meilleur Smash Burger du Bourget ! Service rapide et viande de qualite.',
      rating: 5,
      label: 'Avis Client',
    },
    ctaTitleBefore: 'Pret a',
    ctaTitleHighlight: 'deguster',
    ctaTitleAfter: '?',
    ctaText:
      'Commandez maintenant ou reservez votre table pour une experience gourmande inoubliable.',
    ctaPrimaryButton: 'Commander',
    ctaSecondaryButton: 'Reserver une Table',
  },
  menuPage: {
    eyebrow: 'Nos Specialites',
    title: 'La Carte',
    categoryLabels: {
      deals: 'Bonnes Affaires',
      smash_burgers: 'Smash Burgers',
      burger_menus: 'Menus Burgers',
      chicken_menus: 'Menus Poulet',
      wraps_naans: 'Wraps & Naans',
      family_boxes: 'Boites Familiales',
      chicken_a_la_carte: 'Poulet (\u00C0 La Carte)',
      burgers_a_la_carte: 'Burgers & Wraps (\u00C0 La Carte)',
      starters: 'Entrees & Accompagnements',
      kids: 'Menus Enfants',
      desserts: 'Desserts',
      drinks: 'Boissons',
    },
    categoryNotes: {
      burger_menus: 'Tous les menus incluent des frites et une boisson 33cl',
      chicken_menus: 'Tous les menus incluent des frites et une boisson 33cl',
      wraps_naans: 'Tous les menus incluent des frites et une boisson 33cl',
      family_boxes:
        'Toutes les boites incluent des grandes frites familiales et une boisson 1.5L',
      kids: 'Tous les menus enfants incluent un Kinder, des frites et un Capri-Sun',
    },
    categoryImages: {
      deals: galleryImages[0],
      smash_burgers: galleryImages[1],
      burger_menus: galleryImages[2],
      chicken_menus: galleryImages[0],
      wraps_naans: galleryImages[1],
      family_boxes: galleryImages[2],
      chicken_a_la_carte: galleryImages[0],
      burgers_a_la_carte: galleryImages[1],
      starters: galleryImages[2],
      kids: galleryImages[0],
      desserts: galleryImages[1],
      drinks: galleryImages[2],
    },
  },
  contactPage: {
    eyebrow: 'Nous Trouver',
    title: 'Contact',
    addressLabel: 'Adresse',
    phoneLabel: 'Telephone',
    hoursLabel: 'Horaires',
    emailLabel: 'Email',
    whatsappText: 'Contactez-nous sur WhatsApp',
  },
  reservationPage: {
    eyebrow: 'Reservez',
    title: 'Reservation',
    description: 'Reservez votre table et decouvrez une experience gourmande',
    subjectPrefix: 'Nouvelle reservation',
    successTitle: 'Merci !',
    successMessage: 'Votre demande a ete envoyee.',
    successFollowUp:
      'Nous vous confirmerons votre reservation par telephone.',
    submitText: 'Envoyer la demande',
    sendingText: 'Envoi en cours...',
  },
  reviewsSection: {
    eyebrow: 'Temoignages',
    title: 'Avis Clients',
  },
  reviews: [
    {
      text: 'Le meilleur Smash Burger du Bourget ! Service rapide et viande de qualite.',
      rating: 5,
    },
    {
      text: 'Les Cheese Naans sont incroyables. Une adresse a ne pas manquer.',
      rating: 5,
    },
    {
      text: 'Super rapport qualite-prix. Les menus Family sont parfaits pour le weekend.',
      rating: 5,
    },
  ],
  footer: {
    description:
      "L'authenticite culinaire au Bourget. Decouvrez nos delicieux burgers, wraps et poulet epice prepares avec passion.",
    navigationTitle: 'Navigation',
    hoursTitle: 'Horaires',
    socialTitle: 'Suivez-nous',
    copyrightText: 'Tous droits reserves.',
    taglinePrefix: 'Restaurant Authentique au Bourget, Paris',
    taglineItems: ['Burgers', 'Wraps', 'Poulet Epice'],
    socialLinks: [
      { name: 'Facebook', icon: 'f', href: '#' },
      { name: 'Instagram', icon: 'ig', href: '#' },
      { name: 'WhatsApp', icon: 'wa', href: '#' },
    ],
  },
} satisfies SiteConfig;

export default siteConfig;
