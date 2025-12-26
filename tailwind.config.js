// tailwind.config.js
module.exports = {
  // ... other config
  theme: {
    extend: {
      backgroundImage: {
        // Theme 1: Home Decor
        "bg-img-1": "url('/images/home-decor-item1.jpg')",
        "bg-img-2": "url('/images/home-decor-item2.jpg')",
        "bg-img-3": "url('/images/home-decor-item3.jpg')",
        "bg-img-4": "url('/images/home-decor-item4.jpg')",

        // Theme 2: Mobile Covers
        "bg-img-5": "url('/images/mobile-cover-item1.jpg')",
        "bg-img-6": "url('/images/mobile-cover-item2.jpg')",
        // ... and so on for all 12 unique images
      },
    },
  },
  // ... other config
};
