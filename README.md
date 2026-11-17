# Chavan Clinic Website

A responsive Chavan Clinic website with one scrolling home page and a separate Medical Information page, built with React, Vite, React Router, Tailwind CSS and Lucide React icons.

The home page contains the clinic overview, doctors, specialities, timings, locations and contact details. Medical Information has QR-linked resources and doctor videos. Visitors can switch between English and Marathi.

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

Clinic details and resource links are in `src/config/clinicConfig.js`. Interface and clinic-copy translations are in `src/config/translations.js`.

| Setting | What it controls |
| --- | --- |
| `name`, `tagline`, `introduction` | Clinic name, headline and intro text |
| `navLinks` | Home-page section links, Medical Information link and footer links |
| `locations` | One entry per clinic (see below) |
| `doctors` | Doctor names, qualifications, speciality, photo, introduction and `locationIds` (the clinics where the doctor consults) |
| `specialities` | Speciality titles, descriptions and service lists |
| `timings` | Doctor hours by day and clinic. Consecutive days with the same schedule are grouped in the timings section |
| `announcement` | Notice banner. Set `enabled: true` to show it; `tone` can be `info`, `warning` or `success` |
| `medicalInfo` | QR-linked educational resources and doctor videos for the Medical Information page |

### Adding medical resources and videos

Add resource items to `medicalInfo.resources` with a unique `id`, localized `title` and `description` objects (`en` and `mr`), and an `https://` `url`. A QR code is generated locally for each resource URL.

Add doctor video items to `medicalInfo.doctorVideos` with a unique `id`, localized `title`, the doctor's name, and a YouTube `embedUrl`. An optional `url` can link to the public video page. The embedded player accepts YouTube and YouTube-nocookie URLs.

The Medical Information page currently has empty resource lists until the clinic's QR destinations and doctor video links are provided.

### Editing English and Marathi copy

Edit the matching English and Marathi entries in `src/config/translations.js`. The language selection is saved in the visitor's browser and applies across page navigation.

Each entry in `locations` holds the details for one clinic:

| Setting | What it controls |
| --- | --- |
| `label` | Clinic name shown in location and contact details |
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
    ClinicTimings.jsx    Grouped schedule cards for doctors and clinics
    Announcements.jsx    Optional notice banner
    Location.jsx         Map and address card per clinic
    Contact.jsx          Phone, WhatsApp, email and address per clinic
    Footer.jsx           Branding, navigation, clinic details and copyright
    Reveal.jsx           Fade-in on scroll wrapper
    SectionHeading.jsx   Shared section title block
  config/
    clinicConfig.js       All editable clinic information
    translations.js       English and Marathi copy
  utils/
    contactLinks.js  Builds phone, WhatsApp and email links
  pages/
    Home.jsx                Clinic landing page
    MedicalInformation.jsx QR resources and doctor videos
  context/
    LanguageProvider.jsx   Persistent English/Marathi language state
  hooks/
    useLanguage.js        Accesses the selected language
  App.jsx                 Page routes and shared shell
  main.jsx                Application entry point
  index.css               Tailwind theme (colours, fonts) and global styles
```

## Future Features

The app uses hash-based routing for the separate Medical Information page and home-page section links, so it works on static hosting without server-side route rewrites. It does not include appointment booking, patient feedback, an admin dashboard or database/login features.

## Medical Disclaimer

The content of this website is for general information only and does not replace professional medical advice, diagnosis or treatment.
