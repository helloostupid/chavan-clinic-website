# Chavan Clinic Website

A responsive, multi-section website for Chavan Clinic, built with React, Vite, Tailwind CSS and Lucide React icons.

The site introduces the clinic, showcases Dr. Vivek Chavan (MD, General Medicine, Physician) and Dr. Shwetali Chavan (MD, Psychiatry, Psychiatrist), describes the two specialities, shows clinic timings, a location section with Google Maps, contact details and a footer.

## Requirements

- Node.js 18 or newer
- npm (installed with Node.js)

## Installation

1. Unzip the project folder and open a terminal inside it.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the address shown in the terminal (usually `http://localhost:5173`).

To create a production build, run `npm run build`. To preview that build, run `npm run preview`.

## Updating the Clinic Information

Almost all content is in one file: `src/config/clinicConfig.js`. Edit the values there and save; the website updates automatically.

| Setting | What it controls |
| --- | --- |
| `name`, `tagline`, `introduction` | Clinic name, headline and intro text |
| `navLinks` | Navigation menu and footer links |
| `address` | Clinic address lines. Set `placeholder: false` once the address is real |
| `contact` | Phone, WhatsApp and email. Leave a value empty to show it as "To be added" without a link |
| `googleMapsEmbedUrl` | Google Maps embed link that shows the live map |
| `googleMapsDirectionsUrl` | Link used for every "Get Directions" button |
| `doctors` | Doctor names, qualifications, speciality, photo, introduction and consultation areas |
| `specialities` | Speciality titles, descriptions and service lists |
| `timings` | Weekly consultation timings per doctor, closed days and notes |
| `announcement` | Notice banner. Set `enabled: true` to show it; `tone` can be `info`, `warning` or `success` |
| `disclaimer` | Medical disclaimer shown in the footer |

Text in square brackets (for example `[Professional introduction to be added ...]`) marks a placeholder that still needs real content.

### Setting up Google Maps

1. In Google Maps, search for the clinic, then choose **Share** and copy the link for directions.
2. Open Google Maps, choose **Share > Embed a map**, and copy the URL from the `src` attribute of the iframe code.
3. Paste the embed URL into `googleMapsEmbedUrl` and the directions link into `googleMapsDirectionsUrl`.

### Adding doctor photographs

Place each photograph in `src/assets/` (for example `src/assets/vivek-chavan.jpg`), then import it in `src/config/clinicConfig.js` and set the doctor's `photo` value to that imported image. Until a photo is set, a placeholder is shown.

## Project Structure

```
src/
  components/      Reusable page sections and UI pieces
    Navbar.jsx           Responsive navigation with mobile menu
    Hero.jsx             Opening section with main call-to-action buttons
    About.jsx            Introduction to the clinic
    Doctors.jsx          "Meet Our Doctors" section
    DoctorCard.jsx       Single doctor profile card
    Specialities.jsx     Physician and psychiatry services
    ClinicTimings.jsx    Weekly timings table (stacks on mobile)
    Announcements.jsx    Optional notice banner
    Location.jsx         Map and clinic address
    Contact.jsx          Phone, WhatsApp, email and address
    Footer.jsx           Branding, links, timings, disclaimer and copyright
    Reveal.jsx           Fade-in on scroll wrapper
    SectionHeading.jsx   Shared section title block
  config/
    clinicConfig.js  All editable clinic information
  pages/
    Home.jsx         Assembles the homepage sections
  App.jsx            Page shell (navigation, content, footer)
  main.jsx           Application entry point
  index.css          Tailwind theme (colours, fonts) and global styles
```

## Future Features

The site is intentionally static. Appointment booking, patient feedback, an FAQ section, an admin dashboard and database or login features are not included yet. New sections can be added as components and placed in `src/pages/Home.jsx`.

## Medical Disclaimer

The content of this website is for general information only and does not replace professional medical advice, diagnosis or treatment.
