// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main' : '#000',
      'second' : '#FE8067',
      'third' : '#77c1dd',
    },
    extend: {
      animation: {
        'right_left': 'right_left 1s linear infinite',
        'slide': 'slide 15s step-start infinite',
        'blinker': 'blinker 1.5s infinite',
        'rotate': 'rotate 10s linear infinite',
        'moveAround': 'moveAround 5s linear infinite',
        'moveUpDown': 'moveUpDown 5s linear infinite',
        'moveLeftRight': 'moveLeftRight 3s linear infinite',
      },
      keyframes: {
        right_left: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 0)' },
        },
        slide: {
          '33.33%': { fontSize: '1.5rem', letterSpacing: '1.5px' },
          to: { fontSize: '0', letterSpacing: '0' },
        },
        blinker: {
          '100%': { opacity: 1 },
        },
        rotate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
        moveAround: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '20%': { transform: 'translate(73px, -1px) rotate(36deg)' },
          '40%': { transform: 'translate(141px, 72px) rotate(72deg)' },
          '60%': { transform: 'translate(141px, 72px) rotate(72deg)' },
          '80%': { transform: 'translate(-40px, 72px) rotate(144deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        moveUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-40px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'bg_img' : "url('img/earnestroi-digital-marketing-agency-bg-img.webp')",
        'bg_laptop' : "url('img/earnestroi-digital-marketing-agency-laptop-bg.webp')",
        'bg_graphic' : "url('img/earnestroi-graphic-designing-mockup.webp')",
        'bg_graphic_4' : "url('img/earnestroi-graphic-designing-laptop.webp')",
        'landingbg' : "url('img/earnestroi-landing-herodiv-bg.jpg')",
        'topblack' : "url('img/landing/earnestroi-landing-top-black.png')",
        'bottomblue' : "url('img/landing/earnestroi-landing-bottom-blue.png')",
        'bottomblack' : "url('img/landing/earnestroi-landing-bottom-black.png')",
        'topblue' : "url('img/landing/earnestroi-landing-top-mainsection.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}