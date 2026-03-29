## Sections in Order

Full primary view: (`./speak-00-full.png`)

0. Header (`./header.png`)
Contains:
   - Reusable `Header` component

1. Hero (`./speak-01-hero.png`)
Contains:
  - BG Image: `/public/images/speak-01-hero-image.avif`
  - Header Text: "Invite us to speak!"

// TODO: Potentially add a "speaking topics" section here if we have time, but for now we can just have a general contact form for speaking inquiries. Also, maybe a "previous speaking engagements" section could be added in the future if we have time, but for now we can just have a general contact form for speaking inquiries.

1. Form (`./speak-02-form.png`)
Contains:
  - Text: "Please fill out the form below to book us for a speaking engagement. We will get back to you as soon as possible to discuss further details."
  - Form Fields:
    - Full Name: [Input Field] {placeholder text: "E.g., Kat Jones"}
    - Organization: [Input Field] {placeholder text: "E.g., Kat's Beauty School"}
    - Email: [Email Input] {placeholder text: "E.g., kat@example.com"}
    - Phone: [Input Field] {placeholder text: "E.g., 123 456 7890"}
    - Event Date: [Input Field - Date] {placeholder text: "E.g., 2023-12-31"}
    - Event Time: [Input Field - Time] {placeholder text: "E.g., 18:30"}
    - Event Location: [Input Field - City, State] {placeholder text: "E.g., Anytown, USA"}
    - Event Type [Dropdown Select] {options: "Conference", "Workshop", "Panel", "Webinar", "Other"}
      - If "Other" is selected, an additional input field should appear to specify the event type.
    - Audience Demographics: [Textarea]
      - Brief description of the audience type, e.g., industry professionals, students, size of audience, etc.
    - Speaking Topic(s): [Textarea]
      - Brief description of the desired speaking topic(s) or themes for the event.
    - Duration: [Dropdown Select] {options: "30 minutes", "45 minutes", "1 hour", "2 hours", "Other"}
      - If "Other" is selected, an additional input field should appear to specify the desired duration.
    - Do you have a budget allocated for this speaking engagement? Radio buttons: "Yes", "No", "Not sure yet"
    - If yes, what is the budget range? [Dropdown Select] {options: "$500-$1,000", "$1,000-$2,000", "$2,000-$3,000", "$3,000+"}
    - Additional Details: [Textarea]
      - Any other relevant information or specific requirements for the speaking engagement can be provided here.
  - Button:
    - Text: "Submit"

2. Footer (`./footer.png`)
Contains:
  - Reusable `Footer` component

## Current Build Scope
- prioritize visual layout fidelity
- use placeholder/static behavior for form submission
- do not implement mailing list logic yet
- the form should have a visually clear structure and hierarchy, with appropriate spacing and alignment for all elements. The submit button should have a hover effect to indicate interactivity, even though it won't have real submission logic yet.
- do not build any conditional logic for form fields yet (e.g., showing additional input fields based on dropdown selections), but the form should have a clear structure that would allow for easy implementation of such logic in the future if desired.
- do not implement any form validation logic yet, but the form should have a clear structure that would allow for easy implementation of such logic in the future if desired.
- do not implement any real backend integration for form submission yet, but the form should have a clear structure that would allow for easy implementation of such integration in the future if desired.
- overall, the focus for the first scaffold pass should be on creating a visually accurate and well-structured form layout, with placeholder/static behavior for form submission, and without implementing any complex logic or backend integration at this stage. Use the linked screenshots as a visual reference for layout and design, but feel free to make adjustments as needed to create a clean and user-friendly form interface.