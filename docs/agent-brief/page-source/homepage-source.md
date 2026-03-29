## Sections in Order

Full primary view: (`./homepage-00-full.png`)

0. Header (`./header.png`)
Contains:
   - Reusable `Header` component

1. Hero (`./homepage-01-hero.png`)
Contains:
   - BG Image: `/public/images/homepage-01-hero-image.avif`
   - Text:
    "Hey beauty professionals!"
    "Tired of leaving money on the table?"
    "It's time to be empowered about your money, run your business with ease and do what you do best!"
   - Button:
    Text: "TAKE THE NEXT BEST STEP!"
    URL: `https://calendly.com/darodaaccounting/initialconsult`

2. Intro (`./homepage-02-intro.png`)
Contains:
   - Image: `/public/images/homepage-02-rose-profile.avif`
   - Text:
    "Let's be honest...."
    "Your business should be serving you, not the other way around."
    "Hey! I'm Rose!"
    "As a seasoned finance professional with over
    10 years of experience, I know first-hand that running a business can be hard AF! I've made mistakes and I don't want you to make the same ones."
    "Since running my business, I've helped my clients
    save an average of 600% at tax time!"
   - Button:
    Text: "IT'S YOUR TURN!"
    URL: `https://calendly.com/darodaaccounting/initialconsult`

3. Work Hard (`./homepage-03-work-hard.png`)
Contains:
- Text:
  "You work hard in your business, and don't need to be stressed out about..."
- List:
  - Item 1:
    - Icon: see `./homepage-svg-info`
    - Text: "Having enough money to take care of your day-to-day activities."
  - Item 2:
    - Icon: see `./homepage-svg-info`
    - Text: "Going on that much needed vacation (whether solo or with family)."
  - Item 3:
    - Icon: see `./homepage-svg-info`
    - Text: "Saving for your retirement."
  - Item 4:
    - Icon: see `./homepage-svg-info`
    - Text: "Writing checks with ease."

4. Goals (`./homepage-04-goals.png`)
Contains:
- Image: `/public/images/homepage-04-video-sample.png`
- Text:
  "Profits made easy..."
  "Our main goal is to help you make your business profitable. We specialize in helping business owners in the beauty industry navigate the complexities of taxes, payroll, financial statements and more. With our expertise and dedication to our clients, we can help you make the most of your business without the added stress. Let us help you take the guesswork out of your finances and make the right profits with ease."
- Buttons:
  - Button 1:
    - Text: "SERVICES"
    - Route: `/services`
- Button 2:
    - Text: "BOOK A FREE CALL"
    - URL: `https://calendly.com/darodaaccounting/initialconsult`

5. Planner (`./homepage-05-planner.png`)
Contains:
   - Text:
    "Salon Owners: Access my Free Cash Flow Planner!"
    "Discover the hidden cash and profits in your salon business with my simple planner!"

   - Form:
     First Name: [Input Field]
     Last Name: [Input Field]
     Email: [Input Field]
   - Button:
     - Text: "Submit"
     - visual form only, no real submission logic yet
   - Image: `/public/images/homepage-05-cash-flow-planner.avif`

6. Services (`./homepage-06-services.png`)
Contains:
   - Text:
    "Quality Accounting: Core Service Areas"
    "We only provide services you need so you always receive real value!"
    - Font: brandon-grot-w01-light, brandon-grot-w05-light, sans-serif; // TODO: use sans-serif for now if the brandon fonts are not easily accessible
   - Service Cards (Component) (x4):
     - For each card:
       - each card uses a soft backer with small shadow
       - image aligned to top, centered horizontally
       - medium internal padding around text
       - use a 2-column grid on desktop and 1-column on mobile
     - Item 1:
       - Icon: see `./homepage-svg-info.html` and use `2. Homepage Services Financial Analysis SVG:`
       - Text:
         "Financial Analysis"
         "We know you are tired of spending countless hours hunting down reports that don't make sense."
         "Let us customize everything!" = font-weight: 900
     - Item 2:
       - Icon: see `/public/images/homepage-06-specialized-service-icon.png`
       - Header Text: "Specialized Service"
       - Main Text: "We help you get the financial details out of your hair so you can get back to focusing your clients!"
     - Item 3:
       - Icon: see `/public/images/homepage-06-bookkeeping-icon.png`
       - Text:
         "Bookkeeping"
         "Tired of trying to keep track of all your receipts in an organized manner?"
         "With Daroda, you can take the burden of spending hours handling your finances off your shoulders."
     - Item 4:
       - Icon: see `/public/images/homepage-06-sensible-service-icon.png`
       - Text:
         "Sensible Service"
         "We will never charge you for services you don't need."
   - Button:
     - Text: "TAKE THE NEXT BEST STEP!"
     - URL: `https://calendly.com/darodaaccounting/initialconsult`

7. Testimonials (`./homepage-07-testimonial.png`)
Contains:
  - Header Text: "What our clients say..."
  - Image: `/public/images/testimonial-screenshot-1.avif`
  - Testimonials: Testimonial Carousel (Component - do not implement carousel logic yet):
    The card data is stored in an array of objects, with each object containing the client's name, business name, role, a photo (if available), and their feedback about the services provided by Daroda Accounting--import the data from `/public/data/testimonials.json` into the component. For styling, use a common card design for each testimonial card.
    For the first scaffold pass, just display 3 random testimonial cards in a vertical stack for now instead of implementing carousel logic.
  - Button:
    - Text: "VIEW MORE TESTIMONIALS"
    - Route: `/testimonials`

8. Podcast (`./homepage-08-podcast.png`)
Contains:
  - Image 1: `/public/images/homepage-08-podcast-card.avif`
  - Text Header: "Keep Your Business (and profits) Growing!"
  - Text Body: "The WDINA Podcast answers all your small business questions about what you need, who you should work with, and the process for doing most things small business!"
  - Button:
    - Text: "TUNE IN NOW!"
    - URL: `https://www.youtube.com/playlist?list=PL_3tF4MFWg-Y3ZcNppBsXx6wU5l4vSXac`
  - Image 2: `/public/images/homepage-08-rose-profile-02.avif`

9.  Booking CTA (`./homepage-09-booking-cta.png`)
Contains:
  - Text Header (small): "Helping beauty professionals achieve better profit margins!"
  - Image: `/public/images/homepage-09-da-logo-icon.png`
  - Text Body:
    "Book a meeting with us!"
    "We'd love to hear from you!"
  - Inline Embedded Calendly Component (use placeholder image for now if necessary):
    - URL: `https://calendly.com/darodaaccounting/initialconsult`
    - If using placeholder image, use `/public/images/calendly-booking-calendar-widget-placeholder.png`

10.   Footer (`./footer.png`)
Contains:
  - Reusable `Footer` component

## Current Build Scope

For the first scaffold pass:
- prioritize visual layout fidelity
- use placeholder/static behavior for form submission
- embed Calendly only if easy; otherwise use a placeholder CTA block
- do not implement mailing list logic yet
- do not build testimonials carousel logic yet unless necessary
- overall, the focus for the first scaffold pass should be on creating a visually accurate and well-structured form layout, with placeholder/static behavior for form submission, and without implementing any complex logic or backend integration at this stage. Use the linked screenshots as a visual reference for layout and design, but feel free to make adjustments as needed to create a clean and user-friendly form interface.