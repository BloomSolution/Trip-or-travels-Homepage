// toursData.js

export const internationalTours = [
  {
    id: 1,
    title: 'Discover the Wonders of Abu Dhabi & Dubai',
    location: 'Abu Dhabi, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹97,000.00',
    // seatsLeft: 5,
    soldOut: false,
    date: [
    { date: '28 Nov - 03 Dec', seatsLeft: 20 },
  ],
    // date: '9 Dec - 11 Dec, 10 Feb - 15 Feb',
    travelers: 20,
    image: 'https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg',
    fullDetails: {
      perPerson: true,
      age: 'AllAges',
      happyTravelers: '250+',
      overview: "Experience the luxury and charm of the UAE with our 6 Days / 5 Nights Abu Dhabi & Dubai Tour. From futuristic skylines and desert adventures to cultural landmarks and pristine beaches, this journey blends adventure, relaxation, and Arabian elegance perfectly.",
      highlights: [
        'Visit the majestic Sheikh Zayed Grand Mosque',
        'Enjoy a luxury Dhow Cruise with dinner at Dubai Marina',
        'Experience thrilling Desert Safari with BBQ dinner & live shows',
        'Explore the world-famous Burj Khalifa and Dubai Mall',
        'Relax at the Corniche Beach and Heritage Village in Abu Dhabi',
        'Visit Ferrari World and the newly built BAPS Hindu Temple',
      ],
      inclusions: [
        '5 Nights 4★ Hotel Accommodation (Twin Sharing)',
        'Daily Breakfast, Lunch & Dinner',
        'Return Airfare & Visa',
        'All Entry Fees and Transfers (SIC basis)',
      ],
      exclusions: [
        'Personal expenses (tips, laundry, shopping)',
        'Optional activities or items not mentioned',
        'Peak season surcharges / early check-in / late checkout',
        '5% GST'
      ],
      itinerary: [
        {
          day: 1,
          title: '28 Nov 2025 – Arrival & Dhow Cruise Marina',
          description: 'Welcome to Dubai! After immigration and hotel check-in, relax until your evening pickup at 6 PM for a Dhow Cruise at Dubai Marina. Enjoy breathtaking canal views, buffet dinner, and live entertainment aboard a traditional dhow.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '4★ Hotel in Dubai'
        },
        {
          day: 2,
          title: '29 Nov 2025 – Dubai City Tour & Desert Safari',
          description: 'After breakfast, explore Dubai’s landmarks including Jumeirah Beach, Burj Al Arab, Museum of the Future, Palm Atlantis, and more. Afternoon: Desert Safari adventure with dune bashing, camel ride, Tanura show, belly dance, and BBQ dinner.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '4★ Hotel in Dubai'
        },
        {
          day: 3,
          title: '30 Nov 2025 – Dubai Mall & Burj Khalifa',
          description: 'Visit Dubai Mall and ascend the Burj Khalifa (125th floor) for panoramic views. Enjoy leisure and shopping at Meena Bazaar, Gold Souq, or Deira City Centre.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '4★ Hotel in Dubai'
        },
        {
          day: 4,
          title: '01 Dec 2025 – Dubai Frame, Miracle Garden & Global Village',
          description: 'Start at Dubai Frame for panoramic city views, then Miracle Garden — the world’s largest flower park, followed by Global Village — Dubai’s multicultural festival of food and shopping.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '4★ Hotel in Dubai'
        },
        {
          day: 5,
          title: '02 Dec 2025 – Abu Dhabi City Tour',
          description: 'Visit BAPS Hindu Mandir, Sheikh Zayed Grand Mosque, Emirates Palace, Corniche, Heritage Village, Ferrari World (photo stop), and shop at Marina Mall or Dates Market.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '4★ Hotel in Dubai'
        },
        {
          day: 6,
          title: '03 Dec 2025 – Limousine Ride & Departure',
          description: 'After breakfast, enjoy a 1-hour luxury limousine ride around Dubai. Check out by noon and transfer to the airport for your return flight.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: '_'
        }
      ],
      images: [
         'https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg',
      'https://www.itl.cat/pngfile/big/80-801682_abu-dhabi.jpg',
      'https://www.tourpackagedubai.com/wp-content/uploads/2019/12/abu_dhabi_Sheikh_Zayed_Mosque-city-tour-deals_with_family_from_Dubai.jpg',
      'https://media.istockphoto.com/photos/beautiful-high-angle-view-of-modern-skyscrapers-in-abu-dhabi-taken-a-picture-id1143221045?b=1&k=20&m=1143221045&s=170667a&w=0&h=_hnOm_elRroeOoA0d0OJcVWopiBm4ZRohGYodeE8_Hc=',
      'https://visitabudhabi.ae/-/media/project/vad/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi/article-images/corniche-beach.jpg'
      ],
    //   upcomingDates: [
    //     { date: '19 Nov - 21 Nov', seatsLeft: 5 }
    //   ]
    }
  },
  {
    id: 2,
    title: 'Japan Bloomscape',
    location: 'Japan',
    duration: '8 Days / 7 Nights',
    price: '₹324,999.00',
    originalPrice: null,
    seatsLeft: 10,
    date: '01 Apr',
    travelers: 4,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Majestic South Africa: Safari, Cape Town',
    location: 'South Africa',
    duration: '8 Days / 7 Nights',
    price: '₹219,999.00',
    originalPrice: '₹229,999.00',
    seatsLeft: 5,
    date: '01 Dec',
    travelers: 20,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Delightful Malaysia & Singapore',
    location: 'Malaysia & Singapore',
    duration: '7 Days / 6 Nights',
    price: '₹134,999.00',
    originalPrice: '₹149,999.00',
    seatsLeft: 25,
    date: '24 Jan',
    travelers: 150,
    image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=400&h=300&fit=crop'
  }
];

export const nationalTours = [
  {
    id: 5,
    title: 'Blue Paradise: Andaman Adventure',
    location: 'Andaman Islands',
    duration: '5 Days / 4 Nights',
    price: 'Sold Out',
    soldOut: true,
    travelers: 20,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Gokarna Beach',
    location: 'Bangalore - Gokarna',
    duration: '4 Days / 3 Nights',
    price: 'Sold Out',
    soldOut: true,
    travelers: 1,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    title: 'The Sacred Spiritual Triangle: Ayodhya - Varanasi - Prayagraj',
    location: 'Ayodhya',
    duration: '3 Days / 2 Nights',
    price: '₹35,999.00',
    // seatsLeft: 5,
    soldOut: true,
    date: [
    { date: '9 Dec - 11 Dec', seatsLeft: 5 },
    { date: '10 Feb - 15 Feb', seatsLeft: 2 },
  ],
    // date: '9 Dec - 11 Dec, 10 Feb - 15 Feb',
    travelers: 4,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop',
    fullDetails: {
      perPerson: true,
      age: 'All',
      happyTravelers: '4+',
      overview: "Embark on a spiritual pilgrimage through the cradle of Hinduism with our meticulously crafted 2 Night 3 Day Varanasi & Ayodhya Tour Package. Immerse yourself in the vibrant culture, rich history, and profound spiritual significance of these ancient cities, experiencing the essence of India's spiritual heartland.",
      highlights: [
        'Visit the sacred Ram Janmabhoomi Temple in Ayodhya',
        'Experience evening Ganga Aarti at Varanasi Ghats',
        'Explore ancient temples and spiritual sites',
        'Witness the confluence at Prayagraj Sangam'
      ],
      inclusions: [
        'Flights',
        'Transport',
        'Meals',
        'Accommodation',
        'Boat Charges',
        'Kannada Tour Manager',
        'VIP Tickets',
        'Driver Charges'
      ],
      exclusions: [
        'Personal expenses',
        'Travel insurance',
        'Any meals not mentioned',
        'Monument entrance fees not mentioned'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Bangalore → Ayodhya',
          description: 'Your spiritual journey begins with an early morning flight from Bangalore to Ayodhya (via Lucknow). It is a star hotel. After check-in and a brief refresh, the sacred city of Ayodhya awaits. The day is filled with divine experiences as you visit important religious sites.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: 'Overnight Stay at Neelkanth or similar'
        },
        {
          day: 2,
          title: 'Ayodhya → Prayagraj → Varanasi',
          description: 'After breakfast, proceed to Prayagraj to witness the holy confluence of three rivers. Continue your journey to the spiritual capital of India, Varanasi. Evening Ganga Aarti at the ghats.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: 'Overnight Stay in Varanasi'
        },
        {
          day: 3,
          title: 'Varanasi → Bangalore',
          description: 'Early morning boat ride on the Ganges. Visit Kashi Vishwanath Temple and explore the ancient lanes of Varanasi. Return flight to Bangalore with blessed memories.',
          meals: 'Breakfast',
          accommodation: 'None'
        }
      ],
    //   refundPolicy: [
    //     'If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.',
    //     'If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.',
    //     'If cancellations are made within 0-15 days before the start date of trip, 100% of the trip cost will be charged as cancellation fees.',
    //     'In the case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such cases, the operator will try its best to provide an alternate feasible activity. However, no refund will be provided for the same.'
    //   ],
    //   cancellationPolicy: [
    //     'Cancellations must be made in writing via email',
    //     'Refunds will be processed within 10-15 working days',
    //     'Bank charges if any will be borne by the customer'
    //   ],
    //   paymentTerms: [
    //     '25% advance payment at the time of booking',
    //     'Balance payment 15 days before departure',
    //     'Payment modes: Bank Transfer, UPI, Credit/Debit Card'
    //   ],
      images: [
        'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop'
      ],
    //   upcomingDates: [
    //     { date: '19 Nov - 21 Nov', seatsLeft: 5 }
    //   ]
    }
  },
  {
    id: 8,
    title: 'Majestic Kashmir Delight',
    location: 'Srinagar, Gulmarg & Pahalgam',
    duration: '6 Days / 5 Nights',
    price: '₹48,999.00',
    originalPrice: '₹54,999.00',
    // seatsLeft: 8,
    // date: '19 Nov - 21 Nov, 10 Dec - 15 Dec',
    date: [
    { date: '19 Nov - 21 Nov', seatsLeft: 5 },
    { date: '10 Dec - 15 Dec', seatsLeft: 2 },
  ],
    travelers: 25,
    image: 'https://www.sikhtours.in/admin/uploads/Kashmir-Tour-package.png',
    fullDetails: {
      overview:
        'Experience the breathtaking beauty of Kashmir with this 6-day tour covering Srinagar, Gulmarg, and Pahalgam. Enjoy shikara rides, snow adventures, and serene mountain views.',
      highlights: [
        'Shikara ride on Dal Lake',
        'Gulmarg cable car experience',
        'Visit to Pahalgam valley',
        'Local shopping at Srinagar market'
      ],
      inclusions: [
        'Flights',
        'Transport',
        'Meals',
        'Accommodation',
        'Local Guide',
        'Driver Charges'
      ],
    //   upcomingDates: [{ date: '10 Dec - 15 Dec', seatsLeft: 8 }],

      images: [
        'https://www.sikhtours.in/admin/uploads/Kashmir-Tour-package.png',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?w=300&h=200&fit=crop',

        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop'
        
      ],
    }
  },
  
  
];
