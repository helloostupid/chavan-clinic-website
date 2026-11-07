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
| `locations` | One entry per clinic (see below) |
| `doctors` | Doctor names, qualifications, speciality, photo, introduction, consultation areas and `locationIds` (the clinics where the doctor consults) |
| `specialities` | Speciality titles, descriptions and service lists |
| `timings` | One combined weekly timings table. Each day lists each doctor's timing at each clinic they attend, plus `closed`, `summary` and `notes` |
| `announcement` | Notice banner. Set `enabled: true` to show it; `tone` can be `info`, `warning` or `success` |
| `disclaimer` | Medical disclaimer shown in the footer |

Each entry in `locations` holds the details for one clinic:

| Setting | What it controls |
| --- | --- |
| `label` | Clinic name shown in the timings table, map and contact details |
| `address` | Address lines. Set `placeholder: false` once the address is real |
| `contact` | Phone, WhatsApp and email. Leave a value empty to show it as "To be added" without a link |
| `googleMapsEmbedUrl` | Google Maps embed link that shows that clinic's map |
| `googleMapsDirectionsUrl` | Google Maps directions link for that clinic |

Text in square brackets (for example `[Professional introduction to be added ...]`) marks a placeholder that still needs real content.

### Adding or removing a clinic location

The site shows one card per entry in `locations`. To add a clinic, copy an existing entry, paste it below, and change `id`, `label`, address, contact and map. Give the clinic's `id` to each doctor who consults there in their `locationIds`, and add a time for it in each day of `timings.schedule`. To remove a clinic, delete its block and remove its id from the doctors and timings.

### Setting up Google Maps

1. In Google Maps, search for the clinic, then choose **Share** and copy the link for directions.
2. Open Google Maps, choose **Share > Embed a map**, and copy the URL from the `src` attribute of the iframe code.
3. Paste the embed URL into that clinic's `googleMapsEmbedUrl` and the directions link into its `googleMapsDirectionsUrl`. Repeat for each clinic.

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
    ClinicTimings.jsx    Combined weekly timings table for all doctors and clinics
    Announcements.jsx    Optional notice banner
    Location.jsx         Map and address card per clinic
    Contact.jsx          Phone, WhatsApp, email and address per clinic
    Footer.jsx           Branding, links, timings, disclaimer and copyright
    Reveal.jsx           Fade-in on scroll wrapper
    SectionHeading.jsx   Shared section title block
  config/
    clinicConfig.js  All editable clinic information
  utils/
    contactLinks.js  Builds phone, WhatsApp and email links
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
