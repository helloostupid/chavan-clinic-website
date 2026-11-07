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

  locations: [
    {
      id: 'clinic-one',
      label: 'Chavan Clinic - Kothrud',
      address: {
        lines: ['Shop No 8, Opposite Ashish Garden', 'New DP Road, Kothrud', 'Pune - 411038, Maharashtra'],
        placeholder: true,
      },
      contact: {
        phone: '+91 8055506512',
        phoneDisplay: '',
        whatsapp: '+91 8055506512',
        whatsappDisplay: '',
        email: 'vivekchavan6111@gmail.com',
      },
      googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5920716560186!2d73.79954127465167!3d18.502127969738456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8a1bd9a96f%3A0x930c19b775725a45!2sChavan%20Clinic!5e0!3m2!1sen!2sin!4v1794066670245!5m2!1sen!2sin',
      googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Chavan+Clinic,+Shop+No+8,+Opposite+Ashish+Garden,+New+DP+Road,+Kothrud,+Pune+411038',
    },
    {
      id: 'clinic-two',
      label: 'Chavan Clinic - Bhugaon',
      address: {
        lines: ['Chavan Clinic, S.No271/1, Ingawale Patil Complex', 'Near HP Petroleum, Tal.Mulshi Poud Road', 'Bhugaon, Pune - 412115, Maharashtra'],
        placeholder: true,
      },
      contact: {
        phone: '+91 8055506512',
        phoneDisplay: '',
        whatsapp: '+91 8055506512',
        whatsappDisplay: '',
        email: 'vivekchavan6111@gmail.com',
      },
      googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6391755776126!2d73.75033417465178!3d18.499996269803418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bdb441696db9%3A0x2102e70984b4d585!2sDr.%20Vivek%20Chavan%20%7C%20Best%20Diabetologist%20near%20me%20Bhugaon%20Pune!5e0!3m2!1sen!2sin!4v1794067003144!5m2!1sen!2sin',
      googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Dr.+Vivek+Chavan,+Ingawale+Patil+Complex,+Bhugaon,+Pune+412115',
    },
  ],

  doctors: [
    {
      id: 'vivek',
      name: 'Dr. Vivek Chavan',
      qualification: 'MD - General Medicine',
      speciality: 'Physician',
      photo: 'vivek.jpg',
      locationIds: ['clinic-one', 'clinic-two'],
      introduction:
      'Dr. Vivek Chavan is a physician specialising in General Medicine. He focuses on understanding patients’ health concerns, providing medical evaluations and guiding them towards appropriate care. His approach emphasises careful assessment, clear communication and personalised attention.',
      consultationAreas: [
        'General health check-ups and medical consultations',
        'Fever, infections and common illnesses',
        'Diabetes and blood pressure management',
        'Preventive healthcare and routine health assessments',
        'Follow-up consultations and ongoing medical care',
      ],
    },
    {
      id: 'shwetali',
      name: 'Dr. Shwetali Chavan',
      qualification: 'MD - Psychiatry',
      speciality: 'Psychiatrist',
      photo: 'shwetali.jpeg',
      locationIds: ['clinic-one'],
      introduction:
      'Dr. Shwetali Chavan is a psychiatrist specialising in mental health and emotional well-being. She provides a supportive and understanding environment for individuals seeking help with mental health concerns. Her approach focuses on careful assessment, individual needs and guiding patients through their mental healthcare journey.',
      consultationAreas: [
        'Anxiety and stress-related concerns',
        'Depression and mood-related concerns',
        'Sleep-related difficulties',
        'Emotional and behavioural concerns',
        'Mental health assessments and follow-up consultations',
      ],
    },
  ],

  specialities: [
    {
      id: 'physician',
      title: 'General Medicine / Physician',
      doctorId: 'vivek',
      description:
        'Comprehensive medical consultations for common health concerns, preventive care and ongoing health conditions. Focused on accurate assessment, appropriate guidance and continuity of care.',
      services: [
        'General physician consultations',
        'Fever, infections and common illnesses',
        'Diabetes and blood pressure management',
        'Routine health check-ups',
        'Preventive healthcare and follow-up care',
      ],
    },
    {
      id: 'psychiatry',
      title: 'Psychiatry',
      doctorId: 'shwetali',
      description:
        'Mental healthcare focused on understanding individual concerns and supporting emotional well-being. Providing a comfortable, confidential and non-judgmental environment for psychiatric consultations.',
      services: [
        'Anxiety and stress-related concerns',
        'Depression and mood-related concerns',
        'Sleep-related difficulties',
        'Emotional and behavioural concerns',
        'Psychiatric assessments and follow-up consultations',
      ],
    },
  ],

  timings: {
    schedule: [
      {
        day: 'Monday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Tuesday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Wednesday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Thursday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Friday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Saturday',
        closed: false,
        slots: {
          vivek: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
            'clinic-two': '2:00 PM - 3:00 PM',
          },
          shwetali: {
            'clinic-one': ['10:30 AM - 12.30 PM', '5:00 PM - 9:00 PM'],
          },
        },
      },
      {
        day: 'Sunday',
        closed: true,
        slots: {
          vivek: {
            'clinic-one': 'Closed',
            'clinic-two': 'Closed',
          },
          shwetali: {
            'clinic-one': 'Closed',
          },
        },
      },
    ],

    notes: [
      'Kothrud clinic: Open Monday to Saturday from 10:30 AM to 9:00 PM. Closed on Sundays.',
      'Bhugaon clinic: Open Monday to Saturday from 2:00 PM to 3:00 PM. Closed on Sundays.',
    ],

    summary: 'Kothrud: 10:30 AM - 12:30 PM, 5:00 PM - 9:00 PM | Bhugaon: 2:00 PM - 3:00 PM (Monday to Saturday) | Both clinics closed on Sundays',
  },

  announcement: {
    enabled: false,
    tone: 'info',
    title: 'Clinic Notice',
    message: 'Example: The clinic will be closed on public holidays. Please call ahead.',
  },
}
