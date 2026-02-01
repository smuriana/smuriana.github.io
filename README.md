# Sergio M - Personal Website

Personal portfolio and contact page hosted on GitHub Pages.

## Live Site

[https://sergiom.github.io](https://sergiom.github.io)

## About

This is a personal website built with modern web technologies, featuring:

- Clean, responsive design
- About/Bio section
- Contact information with social links
- Mobile-friendly navigation
- Smooth scrolling and animations

## Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS for interactions
- **Font Awesome**: Icon library
- **GitHub Pages**: Static site hosting

## Project Structure

```
sergiom.github.io/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS styles
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Images and assets
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Local Development

### Option 1: Open directly in browser

Simply open `index.html` in your web browser:

```bash
open index.html
```

### Option 2: Use a local server (Recommended)

Using Python:

```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

Using Node.js (if you have npx):

```bash
npx serve
```

Using PHP:

```bash
php -S localhost:8000
```

## Customization

### Update Personal Information

1. **Profile Photo**: Add your photo to the `images/` folder and update line 69 in `index.html`
2. **Name & Title**: Update the hero section (lines 55-61)
3. **About Section**: Edit the bio text (lines 99-108)
4. **Skills**: Modify the skill badges (lines 114-123)
5. **Contact Links**: Update email and social media links (lines 151-197)

### Update Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    --secondary-color: #64748b;
    --accent-color: #6366f1;
}
```

### Add More Sections

You can add additional sections by following the existing pattern:

```html
<section id="your-section" class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add navigation links in the header!

## Deployment

### GitHub Pages Setup

1. **Create a GitHub repository** named `sergiom.github.io`

2. **Initialize git and push**:
   ```bash
   cd /Users/sergio/dev/sergiom.github.io
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/sergiom/sergiom.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from main branch
   - Root directory: / (root)
   - Save

4. **Wait for deployment** (1-2 minutes)
   - Your site will be live at: `https://sergiom.github.io`

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Features

### Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

### Smooth Scrolling

Navigation links smoothly scroll to different sections of the page.

### Mobile Menu

Hamburger menu for mobile devices with smooth toggle animation.

### Contact Cards

Interactive contact cards with hover effects for email and social media links.

### Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Minimal dependencies
- Fast loading via CDN
- Optimized images (when added)
- Clean, efficient code

## Future Enhancements

Potential additions:
- [ ] Blog section
- [ ] Portfolio/Projects showcase
- [ ] Dark mode toggle
- [ ] Contact form
- [ ] Custom favicon
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Resume/CV download

## License

This project is open source and available for personal use.

## Contact

For questions or feedback, reach out via:
- Email: your.email@example.com
- GitHub: [@sergiom](https://github.com/sergiom)
- LinkedIn: [linkedin.com/in/sergiom](https://linkedin.com/in/sergiom)

---

Built with ❤️ using HTML, Tailwind CSS, and JavaScript
