// toursData.js

export const internationalTours = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: 'Blue Paradise: Andaman Adventure',
    location: 'Andaman Islands',
    duration: '5 Days / 4 Nights',
    price: 'Sold Out',
    soldOut: true,
    travelers: 20,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Gokarna Beach',
    location: 'Bangalore - Gokarna',
    duration: '4 Days / 3 Nights',
    price: 'Sold Out',
    soldOut: true,
    travelers: 1,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop'
  },
  {
    id: 6,
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
    id: 7,
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
  }
  
];
