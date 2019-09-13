var config = {
  style: 'mapbox://styles/lobenichou/ck0ea92lu1jph1dpshjmdd5zp?fresh=true',
  accessToken: 'pk.eyJ1IjoibG9iZW5pY2hvdSIsImEiOiJjajdrb2czcDQwcHR5MnFycmhuZmo4eWwyIn0.nUf9dWGNVRnMApuhQ44VSw',
  showMarkers: false,
  alignment: 'left',
  mapStart: {
    center: [-90.07055, 29.95170],
    zoom: 11.32,
    pitch: 0.00,
    bearing: 0.29
  },
  chapters: [{
      id: 'intro',
      title: 'For when you need a break: A French Quarter walking tour to interesting sites',
      image: 'images/streetcar.png',
      description: '<p>First time in New Orleans and planning to take a tour? Regular visitor who loves to wander? While there’s a boatload of must-see programming at our conference this year, there’s also a whole history of one of the oldest places in the United States to explore just beyond the doors of the Sheraton and Intercontinental hotels. </p><p>If you have an hour or two to spare during the day, here’s a little walking tour that takes you to six interesting geographical and cultural sites in the French Quarter.</p>',
      location: {
        center: [-90.07055, 29.95170],
        zoom: 11.32,
        pitch: 0.00,
        bearing: 0.29
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'french-quarter',
      title: 'A bit of history',
      image: '',
      description: "<p>The French Quarter, also known as the Vieux Carré, is the oldest neighborhood in the city of New Orleans. After New Orleans (La Nouvelle-Orléans in French) was founded in 1718 by Jean-Baptiste Le Moyne de Bienville, the city developed around the Vieux Carré ('Old Square' in English), a central square. The district is more commonly called the French Quarter today, or simply 'The Quarter,' related to changes in the city with American immigration after the Louisiana Purchase. Most of the extant historic buildings were constructed either in the late 18th century, during the city's period of Spanish rule, or were built during the first half of the 19th century, after U.S. annexation and statehood.</p> <p>The district as a whole has been designated as a National Historic Landmark, with numerous contributing buildings that are separately deemed significant. It is a prime tourist destination in the city, as well as attracting local residents. Because of its distance from areas where the levee was breached during Hurricane Katrina in 2005 as well as the strength and height of the nearest Mississippi River Levees in contrast to other levees along the canals and lakefront, it suffered relatively light damage from floodwater as compared to other areas of the city and the greater region.</p><p><a href='https://en.wikipedia.org/wiki/French_Quarter'>Wikipedia</a></p>",
      location: {
        center: [-90.06750, 29.95815],
        zoom: 14.21,
        pitch: 0,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'french-quarter',
          opacity: 1
        },
        {
          layer: 'cover',
          opacity: 1
        }
      ],
      onChapterExit: [{
          layer: 'french-quarter',
          opacity: 0
        },
        {
          layer: 'cover',
          opacity: 0
        }
      ]
    },
    {
      id: 'aquarium',
      title: 'Audubon Aquarium of the Americas',
      image: '',
      description: "<p>Walk down Canal Street towards towards the river. At the very end is the Audubon Aquarium, one of New Orleans’ most beloved exhibits of the Gulf ecosystem. But while it’s a great place to visit, the spot you want is in front of the Aquarium entrance, where there’s a small plaza facing the river. From this vantage point, you have an up-close view of the mighty Mississippi River with its barges, ferries and the Natchez, a working steamboat modeled after the ones that traveled the river centuries ago.</p> <p>Once you’ve taken in the sights of the river, walk back down Canal St. Take a right on Decatur St. and walk through the Quarter for about 10 minutes until you reach:</p>",
      location: {
        center: [-90.06322, 29.95087],
        zoom: 16.74,
        pitch: 60,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'aquarium',
          opacity: 1
        },
        {
          layer: 'aquarium-line',
          opacity: 1
        }
      ],
      onChapterExit: [{
          layer: 'aquarium',
          opacity: 0
        },
        {
          layer: 'aquarium-line',
          opacity: 0
        }
      ]
    },
    {
      id: 'jackson-square',
      title: 'Jackson Square',
      image: '',
      description: "<p>You’re now in the heart of the French Quarter, at the site where Louisiana officially became part of U.S. territory with the Louisiana Purchase in 1803. Jackson Square is surrounded by historic buildings like St. Louis Cathedral, the Cabildo and the Presbytère. If you have some time, wander inside the latter two for fascinating exhibits about old New Orleans. Also, the famous  Café du Monde is just steps away, so it’s a good place to break for a café au lait and beignets.</p><p>Facing St. Louis Cathedral, you’ll see a small alleyway between it and the Cabildo — that’s Pirate Alley. Walk down the alley until you get to:</p>",
      location: {
        center: [-90.06292, 29.95748],
        zoom: 16.74,
        pitch: 60,
        bearing: 36.40
      },
      onChapterEnter: [{
          layer: 'jackson-square',
          opacity: 1
        },
        {
          layer: 'jackson-square-line',
          opacity: 1
        }
      ],
      onChapterExit: [{
          layer: 'jackson-square',
          opacity: 0
        },
        {
          layer: 'jackson-square-line',
          opacity: 0
        }
      ]
    },
    {
      id: 'faulkner-bookstore',
      title: 'Faulkner House Books',
      image: '',
      description: "<p>This bookstore, a national literary landmark, is housed in the old residence of William Faulkner. In 1925, Faulkner rented rooms here and wrote his first novel, <em>Soldiers’ Pay</em>.</p><p>There’s a lot of mystery surrounding Pirate Alley itself. Rumors have it that pirates caught in the Gulf were led through the alley to be held in the prison in the Cabildo.</p><p>From Pirate Alley, take a right on Royal St. and walk until you get to the:</p>",
      location: {
        center: [-90.06425, 29.95825],
        zoom: 16.74,
        pitch: 60,
        bearing: 36.40
      },
      onChapterEnter: [{
        layer: 'faulkner',
        opacity: 1
      }],
      onChapterExit: [{
        layer: 'faulkner',
        opacity: 0
      }]
    },
    {
      id: 'rodrigue-studio',
      title: 'Rodrigue Studio',
      image: 'images/nola-walk-2.jpg',
      description: "<p>This gallery shows artwork by the late Louisiana artist, George Rodrigue. Famous for his iconic blue dog paintings — many of which are on display here — Rodrigue created works that explored Cajun culture and tradition.</p><p>From there, walk down Royal St. in the opposite direction until you get to Saint Peter St. Take a right, and on the left side of the street you’ll see:</p>",
      location: {
        center: [-90.06423, 29.95859],
        zoom: 16.74,
        pitch: 60,
        bearing: 36.40
      },
      onChapterEnter: [{
        layer: 'rodrigue',
        opacity: 1
      }],
      onChapterExit: [{
        layer: 'rodrigue',
        opacity: 0
      }]
    },
    {
      id: 'preservation-hall',
      title: 'Preservation Hall',
      image: '',
      description: "<p>This famous jazz hall was founded in 1961 to preserve the traditions of New Orleans jazz developed against a backdrop of Caribbean, European and African influences. Today, it’s a venue to experience the city’s musical heritage, with live acoustic shows every night on the hour from 5 to 10 p.m. General admission is $20 at the door, but since there’s often a line, you can also reserve a limited number of seats in advance.</p>",
      location: {
        center: [-90.06540, 29.95829],
        zoom: 16.74,
        pitch: 60,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'preservation',
        opacity: 1
      }],
      onChapterExit: [{
        layer: 'preservation',
        opacity: 0
      }]
    },
    {
      id: 'author',
      title: 'The Author',
      image: '',
      description: "Diya Chacko is an Audience Engagement Editor for the Los Angeles Times. A New Orleans native, Diya graduated with a dual master’s degree from Columbia University’s Earth and Environmental Science Journalism program in 2010. She tends to geek out over dogs, horror movies and journalists learning to code.",
      location: {
        center: [-90.06500, 29.95442],
        zoom: 15.5,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
          layer: 'aquarium',
          opacity: 1
        },
        {
          layer: 'aquarium-line',
          opacity: 1
        },
        {
          layer: 'jackson-square',
          opacity: 1
        },
        {
          layer: 'jackson-square-line',
          opacity: 1
        },
        {
          layer: 'faulkner',
          opacity: 1
        },
        {
          layer: 'preservation',
          opacity: 1
        },
        {
          layer: 'rodrigue',
          opacity: 1
        },
        {
          layer: 'walk',
          opacity: 1
        }
      ],
      onChapterExit: [{
          layer: 'aquarium',
          opacity: 0
        },
        {
          layer: 'aquarium-line',
          opacity: 0
        },
        {
          layer: 'jackson-square',
          opacity: 0
        },
        {
          layer: 'jackson-square-line',
          opacity: 0
        },
        {
          layer: 'faulkner',
          opacity: 0
        },
        {
          layer: 'preservation',
          opacity: 0
        },
        {
          layer: 'rodrigue',
          opacity: 0
        },
        {
          layer: 'walk',
          opacity: 0
        }
      ]
    }
  ]
};
