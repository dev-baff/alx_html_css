# 📘 CSS Advanced — Smile School Project

This project is part of the **ALX Front-End Curriculum** and focuses on building a fully styled, responsive web page using advanced CSS techniques, including layout manipulation, custom fonts, positioning, gradients, flexbox, and interactive elements.

The design implemented in this project is based on a **Figma prototype** provided by ALX. The goal was to faithfully recreate the full layout of the page, including the hero section, instructor grid, testimonial section, tutorials grid with play icons, and more.

---

## 🎯 Project Objectives

This project demonstrates the ability to:

### ✔ Layout a fully structured webpage
- Build multiple sections including hero, testimonials, tutorials, membership, and FAQ
- Apply proper semantic HTML

### ✔ Apply advanced CSS
- Flexbox for complex layouts
- Absolute/relative positioning
- Background images + gradients
- Hover states and interactive elements
- Custom play button overlay
- Custom fonts using `@font-face`

### ✔ Work with Assets
- Importing fonts
- Using multiple images (avatars, backgrounds, thumbnails)
- Applying SVG logos

### ✔ Reproduce a pixel-perfect Figma design
- Maintaining correct spacing, typography, colors, and alignment

---

## 📁 Folder Structure

Your project contains the following files and folders:

```
📦css_advanced
 ┣ 📂fonts
 ┃ ┣ 📜SIL Open Font License.txt
 ┃ ┣ 📜SourceSansPro-Black.otf
 ┃ ┣ 📜SourceSansPro-BlackIt.otf
 ┃ ┣ 📜SourceSansPro-Bold.otf
 ┃ ┣ 📜SourceSansPro-BoldIt.otf
 ┃ ┣ 📜SourceSansPro-ExtraLight.otf
 ┃ ┣ 📜SourceSansPro-ExtraLightIt.otf
 ┃ ┣ 📜SourceSansPro-It.otf
 ┃ ┣ 📜SourceSansPro-Light.otf
 ┃ ┣ 📜SourceSansPro-LightIt.otf
 ┃ ┣ 📜SourceSansPro-Regular.otf
 ┃ ┣ 📜SourceSansPro-Semibold.otf
 ┃ ┗ 📜SourceSansPro-SemiboldIt.otf
 ┣ 📂images
 ┃ ┣ 📜avatar1.jpg
 ┃ ┣ 📜avatar2.jpg
 ┃ ┣ 📜avatar3.jpg
 ┃ ┣ 📜avatar4.jpg
 ┃ ┣ 📜avatar5.jpg
 ┃ ┣ 📜Object.jpg
 ┃ ┣ 📜video1.jpg
 ┃ ┣ 📜video2.jpg
 ┃ ┣ 📜video3.jpg
 ┃ ┗ 📜video4.jpg
 ┣ 📂logos
 ┃ ┣ 📜logo1.svg
 ┃ ┗ 📜logo2.svg
 ┣ 📜index.html
 ┣ 📜README.md
 ┗ 📜styles.css
```

---

## 📄 Files Description

### `index.html`
Main structure of the webpage containing all sections:
- Header navigation
- Hero section
- "Learn from the pros"
- Testimonials
- Most popular tutorials
- Membership
- FAQ
- Footer

### `styles.css`
Contains all styling rules including:
- Layout and alignment
- Font imports
- Colors and backgrounds
- Play icon styling
- Avatar formatting
- Responsive flex formatting

### `fonts/`
Directory of Source Sans Pro font files (multiple weights). Loaded using `@font-face` in your CSS.

### Images
All images used in the project:
- Avatars (avatar1.jpg - avatar5.jpg)
- Tutorial thumbnails (video1.jpg - video4.jpg)
- Background image (Object.jpg)
- Logos (logo.svg, logo1.svg)

---

## 🧪 How to Run the Project

1. Download or clone the project folder
2. Make sure the folder structure remains exactly the same
3. Open `index.html` in any web browser
4. Ensure that images and fonts load correctly — paths must not be changed

```bash
# Clone the repository (if applicable)
git clone <repository-url>

# Navigate to project directory
cd css_advanced

# Open in browser
open index.html
```

---

## 📚 Additional Notes

- The project must match the Figma design as closely as possible
- All styling is done using CSS only (no frameworks)
- FontAwesome is used for the star icons
- Play icons were manually recreated using CSS shapes
- Ensure compatibility with modern browsers

---

## 🛠 Technologies Used

- HTML5
- CSS3
- Source Sans Pro Font Family
- FontAwesome Icons
- SVG Graphics

---

## 👨‍💻 Author

**Baffour Gyau Amanfo**

---

## 📝 License

This project is part of the ALX Software Engineering Program curriculum.

---

## 🎓 Learning Outcomes

By completing this project, you will have:
- Mastered advanced CSS layout techniques
- Gained experience with custom font implementation
- Learned to work with design specifications (Figma)
- Practiced creating responsive, pixel-perfect web pages
- Enhanced your understanding of semantic HTML structure