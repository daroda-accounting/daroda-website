## Header Layout

- Reusable `Header` component
- Contains:
  1. Logo: `/public/images/da-logo-horizontal-white.png`
  2. Navigation Links:
    Each link:
      - onHover: BG color changes to red, text color changes to white
      - Active Link: BG color is #E86402, text color is white
    - "Home" (route: `/`)
    - "About" (route: `/about`)
      - onHover exposes a dropdown with the following links:
        - "Podcast" (route: `/podcast`)
    - "Services" (route: `/services`)
    - "Contact" (route: `/contact`)
    - "How Can We Help? **>**" (URL: `https://calendly.com/darodaaccounting/initialconsult`)
  3. Social Media Icons (use icons from `react-icons` library):
    - Facebook Icon (URL: `https://www.facebook.com/Daroda-Accounting-LLC-112612040114720/`)
    - Instagram Icon (URL: `https://www.instagram.com/rosetheaccountant`)
    - LinkedIn Icon (URL: `https://www.linkedin.com/company/51715048/admin/`)

## Notes
- The `Header` component is reusable across all pages, so it should be designed to be flexible and adaptable to different page layouts and content.
- The navigation links should be implement using the `RouterLink` component from `react-router-dom` to enable client-side routing and ensure that the active link styling works correctly.
- The dropdown menu for the "About" link should be implemented using a hover state, and should be accessible and easy to use on both desktop and mobile devices. Consider using a library like `react-dropdown` or implementing a custom dropdown component that meets accessibility standards.
- The active link styling should be implemented in a way that allows for easy identification of the current

## Current Build Scope
For the first scaffold pass: