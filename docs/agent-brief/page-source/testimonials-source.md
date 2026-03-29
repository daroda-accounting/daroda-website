## Sections in Order

Full primary view: (`./testimonials-00-full.png`)

0. Header (`./header.png`)
Contains:
   - Reusable `Header` component

1. Testimonials (`./testimonials-01-testimonial-list.png`)
Contains:
  - Header Text: "What Our Clients Say"
  - Testimonial Cards (Component):
    The card data is stored in an array of objects, with each object containing the client's name, business name, role, a photo (if available), and their feedback about the services provided by Daroda Accounting--import the data from `/public/data/testimonials.json` into the component. For styling, use a common card design for each testimonial card. Display the testimonial cards in a vertical stack, with a medium amount of spacing between each card. Add pagination controls at the bottom of the testimonial list to allow users to navigate through more testimonials if desired, with 5 testimonials displayed per page.

2. Image testimonial(s) (`./testimonials-02-screenshot-sample.png`)
Contains:
  - Image: `/public/images/testimonial-screenshot-1.avif`

3. Consult CTA (`./testimonials-03-consult-cta.png`)
Contains:
  - Text Header: "Ready to work together? Let's chat!"
   - Form:
    - First Name: [Input Field] {placeholder text: "E.g., Kat"}
    - Last Name: [Input Field] {placeholder text: "E.g., Jones"}
    - Email: [Input Field] {placeholder text: "E.g., kat.jones@example.com"}
    - Phone: [Input Field] {placeholder text: "E.g., 123 456 7890"}
    - Message: [Input Field - Textarea] {placeholder text: "Type your message here..."}
    - Submit Button:
      - Text: "Book your free consult"
      - visual form only, no real submission logic yet (mailing list logic)
      - URL: `https://calendly.com/darodaaccounting/initialconsult`

4. Footer (`./footer.png`)
Contains:
  - Reusable `Footer` component

## Current Build Scope
For the first scaffold pass:
- prioritize visual layout fidelity
- use placeholder/static behavior for form submission
- visual forms only, mailing list logic and form validation logic do not need to be implemented yet, but the form should have a visually clear structure and hierarchy, with appropriate spacing and alignment for all elements. The submit button should have a hover effect to indicate interactivity, even though it won't have real submission logic yet.
- overall, the focus for the first scaffold pass should be on creating a visually accurate and well-structured form layout, with placeholder/static behavior for form submission, and without implementing any complex logic or backend integration at this stage. Use the linked screenshots as a visual reference for layout and design, but feel free to make adjustments as needed to create a clean and user-friendly form interface.