// Central place for all clinic information. Update the values here to change the website.
// Values marked "To be added" are placeholders; the site shows them as such until replaced.

export const clinicConfig = {
  name: 'Chavan Clinic',
  tagline: 'Your Health, Our Priority',
  introduction:
    'Chavan Clinic offers physician and psychiatric consultations in a calm, caring and professional setting. Our goal is to listen carefully, explain clearly and support every patient through their care.',

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Clinic Timings', href: '#timings' },
    { label: 'Find Us', href: '#find-us' },
    { label: 'Contact', href: '#contact' },
  ],

  // One entry per clinic. Add or remove entries to change the number of locations.
  locations: [
    {
      id: 'clinic-one',
      label: 'Clinic Location 1',
      address: {
        lines: ['[Clinic 1 street address]', '[Area / Landmark]', '[City, State, PIN code]'],
        placeholder: true,
      },
      contact: {
        phone: '',
        phoneDisplay: 'To be added',
        whatsapp: '',
        whatsappDisplay: 'To be added',
        email: '',
      },
      // Paste the "Embed a map" src URL from Google Maps to show the live map.
      googleMapsEmbedUrl: '',
      // Paste the Google Maps directions link for this clinic.
      googleMapsDirectionsUrl: '',
      // Use 'To be confirmed' until the real timings are known. Set closed: true for closed days.
      timings: {
        schedule: [
          { day: 'Monday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Tuesday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Wednesday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Thursday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Friday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Saturday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Sunday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
        ],
        notes: ['Timings above are placeholders and will be confirmed by the clinic.'],
        summary: 'To be confirmed',
      },
    },
    {
      id: 'clinic-two',
      label: 'Clinic Location 2',
      address: {
        lines: ['[Clinic 2 street address]', '[Area / Landmark]', '[City, State, PIN code]'],
        placeholder: true,
      },
      contact: {
        phone: '',
        phoneDisplay: 'To be added',
        whatsapp: '',
        whatsappDisplay: 'To be added',
        email: '',
      },
      googleMapsEmbedUrl: '',
      googleMapsDirectionsUrl: '',
      timings: {
        schedule: [
          { day: 'Monday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Tuesday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Wednesday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Thursday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Friday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Saturday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
          { day: 'Sunday', vivek: 'To be confirmed', shwetali: 'To be confirmed', closed: false },
        ],
        notes: ['Timings above are placeholders and will be confirmed by the clinic.'],
        summary: 'To be confirmed',
      },
    },
  ],

  doctors: [
    {
      id: 'vivek',
      name: 'Dr. Vivek Chavan',
      qualification: 'MD - General Medicine',
      speciality: 'Physician',
      photo: '',
      introduction: '[Professional introduction to be added by Dr. Vivek Chavan]',
      consultationAreas: [
        '[Area of consultation to be added]',
        '[Area of consultation to be added]',
        '[Area of consultation to be added]',
      ],
    },
    {
      id: 'shwetali',
      name: 'Dr. Shwetali Chavan',
      qualification: 'MD - Psychiatry',
      speciality: 'Psychiatrist',
      photo: '',
      introduction: '[Professional introduction to be added by Dr. Shwetali Chavan]',
      consultationAreas: [
        '[Area of consultation to be added]',
        '[Area of consultation to be added]',
        '[Area of consultation to be added]',
      ],
    },
  ],

  specialities: [
    {
      id: 'physician',
      title: 'General Medicine / Physician',
      doctorId: 'vivek',
      description:
        '[Description of physician consultation services to be added by the clinic.]',
      services: [
        'General physician consultation',
        'Evaluation of common medical concerns',
        'Follow-up and ongoing care',
      ],
    },
    {
      id: 'psychiatry',
      title: 'Psychiatry',
      doctorId: 'shwetali',
      description:
        '[Description of psychiatric consultation services to be added by the clinic.]',
      services: [
        'Psychiatric consultation',
        'Assessment and review',
        'Follow-up and ongoing care',
      ],
    },
  ],

  // Set enabled: true to show the banner on the website.
  announcement: {
    enabled: false,
    tone: 'info',
    title: 'Clinic Notice',
    message: 'Example: The clinic will be closed on public holidays. Please call ahead.',
  },

  disclaimer:
    'The information on this website is for general awareness only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified doctor for medical concerns. In case of a medical emergency, please call your local emergency number immediately.',
}
