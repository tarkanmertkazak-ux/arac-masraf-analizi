const CARS = {};

// =====================
// ALFA ROMEO (TÜRKİYE)
// =====================
CARS["Alfa Romeo"] = {

  "147": {
    "937 (2001-2010)": [
      { motor: "1.6 TS", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 TS", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 JTD", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  "156": {
    "932 (1997-2007)": [
      { motor: "1.6 TS", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 TS", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 JTD", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.4 JTD", hacim: "2.4", yakit: "Dizel" }
    ]
  },

  "159": {
    "939 (2005-2011)": [
      { motor: "1.9 JTS", hacim: "1.9", yakit: "Benzin" },
      { motor: "2.2 JTS", hacim: "2.2", yakit: "Benzin" },
      { motor: "1.9 JTDm", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.4 JTDm", hacim: "2.4", yakit: "Dizel" }
    ]
  },

  "Giulietta": {
    "940 (2010-2020)": [
      { motor: "1.4 TB Multiair", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 TB T-Jet", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 JTDm", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 JTDm", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Giulia": {
    "952 (2016-2025)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 JTDm", hacim: "2.2", yakit: "Dizel" }
    ]
  },

  "Stelvio": {
    "949 (2017-2025)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 JTDm", hacim: "2.2", yakit: "Dizel" }
    ]
  },

  "Mito": {
    "955 (2008-2018)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 TB T-Jet", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 JTDm", hacim: "1.3", yakit: "Dizel" }
    ]
  }
};
// =====================
// AUDI (TÜRKİYE)
// =====================
CARS["Audi"] = {

  "80": {
    "B2 (1978-1986)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "B3 (1986-1991)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "90": {
    "B3/B4 (1987-1995)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "100": {
    "C3 (1982-1991)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.3", hacim: "2.3", yakit: "Benzin" }
    ],
    "C4 (1991-1994)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 TDI", hacim: "2.5", yakit: "Dizel" }
    ]
  },

  "A3": {
    "8L (1996-2003)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "8P (2003-2012)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 TFSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "8V (2012-2020)": [
      { motor: "1.4 TFSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "8Y (2020-2025)": [
      { motor: "1.5 TFSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "A4": {
    "B5 (1994-2001)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "B6/B7 (2001-2008)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "B8 (2008-2015)": [
      { motor: "1.8 TFSI", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "B9 (2015-2025)": [
      { motor: "1.4 TFSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "A6": {
    "C4 (1994-1997)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 TDI", hacim: "2.5", yakit: "Dizel" }
    ],
    "C5 (1997-2004)": [
      { motor: "2.4", hacim: "2.4", yakit: "Benzin" },
      { motor: "2.5 TDI", hacim: "2.5", yakit: "Dizel" }
    ],
    "C6 (2004-2011)": [
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "3.0 TDI", hacim: "3.0", yakit: "Dizel" }
    ],
    "C7 (2011-2018)": [
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "3.0 TDI", hacim: "3.0", yakit: "Dizel" }
    ],
    "C8 (2018-2025)": [
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Q3": {
    "8U (2011-2018)": [
      { motor: "1.4 TFSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "F3 (2018-2025)": [
      { motor: "1.5 TFSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Q5": {
    "8R (2008-2017)": [
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "FY (2017-2025)": [
      { motor: "2.0 TFSI", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  }
};
// =====================
// BMW (1980+ / TR'de yaygın kasa & motorlar)
// Şema:
// CARS["BMW"][Model][Kasa (Yıl)] = [{ motor, hacim, yakit }, ...]
// =====================
CARS["BMW"] = {
  // --- 1 SERİSİ ---
  "1 Serisi": {
    "E81/E82/E87/E88 (2004-2013)": [
      { motor: "N45 1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "N46 2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "M47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "F20/F21 (2011-2019)": [
      { motor: "N13 1.6T", hacim: "1.6", yakit: "Benzin" },
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "F40 (2019-2025)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- 2 SERİSİ ---
  "2 Serisi": {
    "F22/F23 (2014-2021)": [
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "F45/F46 Active Tourer (2014-2021)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "G42 (2021-2025)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" }
    ],
    "U06 Gran Coupe (2022-2025)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- 3 SERİSİ ---
  "3 Serisi": {
    "E30 (1982-1994)": [
      { motor: "M10 1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "M20 2.0/2.5", hacim: "2.0-2.5", yakit: "Benzin" }
    ],
    "E36 (1990-2000)": [
      { motor: "M40 1.6/1.8", hacim: "1.6-1.8", yakit: "Benzin" },
      { motor: "M43 1.6/1.8", hacim: "1.6-1.8", yakit: "Benzin" },
      { motor: "M50 2.0/2.5", hacim: "2.0-2.5", yakit: "Benzin" },
      { motor: "M52 2.0/2.5/2.8", hacim: "2.0-2.8", yakit: "Benzin" }
    ],
    "E46 (1998-2006)": [
      { motor: "N42 1.8/2.0", hacim: "1.8-2.0", yakit: "Benzin" },
      { motor: "M54 2.2/2.5/3.0", hacim: "2.2-3.0", yakit: "Benzin" },
      { motor: "M47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "E90/E91/E92/E93 (2004-2013)": [
      { motor: "N46 1.8/2.0", hacim: "1.8-2.0", yakit: "Benzin" },
      { motor: "N43 1.6/2.0", hacim: "1.6-2.0", yakit: "Benzin" },
      { motor: "N52 2.5/3.0", hacim: "2.5-3.0", yakit: "Benzin" },
      { motor: "N54 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "F30/F31/F34 (2011-2019)": [
      { motor: "N13 1.6T", hacim: "1.6", yakit: "Benzin" },
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G20/G21 (2018-2025)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  // --- 4 SERİSİ ---
  "4 Serisi": {
    "F32/F33/F36 (2013-2020)": [
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "G22/G23/G26 (2020-2025)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- 5 SERİSİ ---
  "5 Serisi": {
    "E28 (1981-1988)": [
      { motor: "M20 2.0/2.5", hacim: "2.0-2.5", yakit: "Benzin" }
    ],
    "E34 (1987-1996)": [
      { motor: "M20 2.0/2.5", hacim: "2.0-2.5", yakit: "Benzin" },
      { motor: "M50 2.0/2.5", hacim: "2.0-2.5", yakit: "Benzin" }
    ],
    "E39 (1995-2004)": [
      { motor: "M52 2.0/2.5/2.8", hacim: "2.0-2.8", yakit: "Benzin" },
      { motor: "M54 2.2/2.5/3.0", hacim: "2.2-3.0", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "E60/E61 (2003-2010)": [
      { motor: "N52 2.5/3.0", hacim: "2.5-3.0", yakit: "Benzin" },
      { motor: "N53 3.0", hacim: "3.0", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "F10/F11 (2010-2017)": [
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N63 4.4T", hacim: "4.4", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G30/G31 (2017-2025)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  // --- 6 SERİSİ ---
  "6 Serisi": {
    "E24 (1976-1989)": [
      { motor: "M30 3.0/3.5", hacim: "3.0-3.5", yakit: "Benzin" }
    ],
    "E63/E64 (2003-2010)": [
      { motor: "N52 3.0", hacim: "3.0", yakit: "Benzin" },
      { motor: "N62 4.4/4.8", hacim: "4.4-4.8", yakit: "Benzin" }
    ],
    "F12/F13/F06 (2011-2018)": [
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N63 4.4T", hacim: "4.4", yakit: "Benzin" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G32 GT (2017-2023)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- 7 SERİSİ ---
  "7 Serisi": {
    "E32 (1986-1994)": [
      { motor: "M30 3.0/3.5", hacim: "3.0-3.5", yakit: "Benzin" }
    ],
    "E38 (1994-2001)": [
      { motor: "M52 2.8", hacim: "2.8", yakit: "Benzin" },
      { motor: "M62 4.4", hacim: "4.4", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "E65/E66 (2001-2008)": [
      { motor: "N52 3.0", hacim: "3.0", yakit: "Benzin" },
      { motor: "N62 4.4/4.8", hacim: "4.4-4.8", yakit: "Benzin" }
    ],
    "F01/F02 (2008-2015)": [
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N63 4.4T", hacim: "4.4", yakit: "Benzin" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G11/G12 (2015-2022)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N63 4.4T", hacim: "4.4", yakit: "Benzin" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G70 (2022-2025)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" }
    ]
  },

  // --- 8 SERİSİ ---
  "8 Serisi": {
    "E31 (1989-1999)": [
      { motor: "M60 4.0", hacim: "4.0", yakit: "Benzin" },
      { motor: "M70 5.0 V12", hacim: "5.0", yakit: "Benzin" }
    ],
    "G15/G14/G16 (2018-2025)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N63 4.4T", hacim: "4.4", yakit: "Benzin" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  // --- X SERİSİ (SUV) ---
  "X1": {
    "E84 (2009-2015)": [
      { motor: "N46 2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "F48 (2015-2022)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" }
    ],
    "U11 (2022-2025)": [
      { motor: "B38 1.5T", hacim: "1.5", yakit: "Benzin" },
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "X3": {
    "E83 (2003-2010)": [
      { motor: "M54 2.5/3.0", hacim: "2.5-3.0", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "F25 (2010-2017)": [
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G01 (2017-2025)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B47 2.0d", hacim: "2.0", yakit: "Dizel" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" }
    ]
  },

  "X5": {
    "E53 (1999-2006)": [
      { motor: "M54 3.0", hacim: "3.0", yakit: "Benzin" },
      { motor: "M62 4.4", hacim: "4.4", yakit: "Benzin" }
    ],
    "E70 (2006-2013)": [
      { motor: "N52 3.0", hacim: "3.0", yakit: "Benzin" },
      { motor: "N62 4.8", hacim: "4.8", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "F15 (2013-2018)": [
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G05 (2018-2025)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  "X6": {
    "E71 (2008-2014)": [
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "M57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "F16 (2014-2019)": [
      { motor: "N55 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "N57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ],
    "G06 (2019-2025)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  "X7": {
    "G07 (2018-2025)": [
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" },
      { motor: "B57 3.0d", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  // --- Z SERİSİ (Roadster) ---
  "Z3": {
    "E36/7 (1995-2002)": [
      { motor: "M43 1.9", hacim: "1.9", yakit: "Benzin" },
      { motor: "M52 2.8", hacim: "2.8", yakit: "Benzin" }
    ]
  },

  "Z4": {
    "E85/E86 (2002-2008)": [
      { motor: "M54 2.2/2.5/3.0", hacim: "2.2-3.0", yakit: "Benzin" }
    ],
    "E89 (2009-2016)": [
      { motor: "N20 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "N54 3.0T", hacim: "3.0", yakit: "Benzin" }
    ],
    "G29 (2018-2025)": [
      { motor: "B48 2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "B58 3.0T", hacim: "3.0", yakit: "Benzin" }
    ]
  },

  // --- i SERİSİ (Elektrikli/Hybrid - TR’de görülenler) ---
  "i Serisi": {
    "i3 I01 (2013-2022)": [
      { motor: "Elektrik", hacim: "EV", yakit: "Elektrik" }
    ],
    "i8 I12 (2014-2020)": [
      { motor: "B38 1.5 Hybrid", hacim: "1.5", yakit: "Hybrid" }
    ],
    "iX I20 (2021-2025)": [
      { motor: "Elektrik", hacim: "EV", yakit: "Elektrik" }
    ],
    "i4 G26 (2021-2025)": [
      { motor: "Elektrik", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// CHEVROLET (TÜRKİYE)
// =====================
CARS["Chevrolet"] = {

  "Aveo": {
    "T200/T250 (2002-2011)": [
      { motor: "1.2 16V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 16V", hacim: "1.4", yakit: "Benzin" }
    ],
    "T300 (2011-2020)": [
      { motor: "1.2 16V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 16V", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  "Corsa": {
    "A/B (1982-1993)": [
      { motor: "1.0 S", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.2 S", hacim: "1.2", yakit: "Benzin" }
    ],
    "C (1993-2000)": [
      { motor: "1.2 8V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 8V", hacim: "1.4", yakit: "Benzin" }
    ],
    "D (2000-2006)": [
      { motor: "1.2 8V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.3 CDTi", hacim: "1.3", yakit: "Dizel" }
    ],
    "E (2006-2014)": [
      { motor: "1.2 8V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.3 CDTi", hacim: "1.3", yakit: "Dizel" }
    ],
    "F (2014-2019)": [
      { motor: "1.0 12V", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.4 8V", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  "Lacetti": {
    "J200 (2003-2011)": [
      { motor: "1.4 16V", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 16V", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8 16V", hacim: "1.8", yakit: "Benzin" }
    ]
  },

  "Cruze": {
    "J300 (2008-2016)": [
      { motor: "1.6 16V", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8 16V", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0 D", hacim: "2.0", yakit: "Dizel" }
    ],
    "J400 (2016-2019)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 Turbo", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "Spark": {
    "M300 (2010-2015)": [
      { motor: "1.0 12V", hacim: "1.0", yakit: "Benzin" }
    ],
    "M400 (2015-2024)": [
      { motor: "1.0 12V", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  "Trax": {
    "T300 (2013-2019)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 Turbo", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "Orlando": {
    "J309 (2011-2018)": [
      { motor: "1.8 16V", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0 D", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Tahoe": {
    "GMT900 (2006-2014)": [
      { motor: "5.3 V8", hacim: "5.3", yakit: "Benzin" }
    ],
    "K2 (2015-2025)": [
      { motor: "5.3 V8", hacim: "5.3", yakit: "Benzin" }
    ]
  }

};
// =====================
// CITROËN (1980-2025 / TR'de yaygın)
// Şema:
// CARS["Citroën"][Model][Kasa (Yıl)] = [{ motor, hacim, yakit }, ...]
// =====================
CARS["Citroën"] = {
  // --- Klasik/Eski seri (TR’de hâlâ bulunanlar) ---
  "Visa": {
    "I/II (1978-1988)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.8 D", hacim: "1.8", yakit: "Dizel" }
    ]
  },

  "AX": {
    "ZA (1986-1998)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 D", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "BX": {
    "XB (1982-1994)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9", hacim: "1.9", yakit: "Benzin" },
      { motor: "1.9 D", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  "CX": {
    "I/II (1974-1991)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 D", hacim: "2.5", yakit: "Dizel" }
    ]
  },

  "XM": {
    "Y3/Y4 (1989-2000)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.1 TD", hacim: "2.1", yakit: "Dizel" },
      { motor: "2.5 TD", hacim: "2.5", yakit: "Dizel" }
    ]
  },

  "Xantia": {
    "X1/X2 (1993-2002)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 TD", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "ZX": {
    "N2 (1991-1998)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 D", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  "Saxo": {
    "S0/S1 (1996-2003)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 D", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "Xsara": {
    "N0/N1 (1997-2006)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Xsara Picasso": {
    "N68 (1999-2012)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- Şehir/kompakt ---
  "C1": {
    "I (2005-2014)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" }
    ],
    "II (2014-2022)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ]
  },

  "C2": {
    "A6 (2003-2009)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" }
    ]
  },

  "C3": {
    "I (2002-2009)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2009-2016)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 VTi", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2016-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "C3 Picasso": {
    "I (2009-2017)": [
      { motor: "1.4 VTi", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  "C3 Aircross": {
    "I (2017-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" },
      { motor: "1.6 BlueHDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- C4 ailesi ---
  "C4": {
    "I (2004-2010)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2010-2018)": [
      { motor: "1.2 e-VTi", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 THP", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2020-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "C4 Sedan": {
    "II Sedan (2013-2022)": [
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  "C4 Cactus": {
    "I (2014-2021)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 e-HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "C4 X": {
    "I (2022-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" }
    ]
  },

  "C4 Picasso": {
    "I (2006-2013)": [
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "II / SpaceTourer adıyla (2013-2022)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 THP", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 BlueHDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 BlueHDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- C5 / üst sınıf ---
  "C5": {
    "I (2001-2008)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2008-2017)": [
      { motor: "1.6 THP", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "C5 Aircross": {
    "I (2018-2025)": [
      { motor: "1.6 PureTech", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "C6": {
    "I (2005-2012)": [
      { motor: "2.2 HDi", hacim: "2.2", yakit: "Dizel" },
      { motor: "2.7 HDi", hacim: "2.7", yakit: "Dizel" },
      { motor: "3.0 HDi", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  "C8": {
    "I (2002-2014)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" },
      { motor: "2.2 HDi", hacim: "2.2", yakit: "Dizel" }
    ]
  },

  "Evasion": {
    "I (1994-2002)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- Sedan (Türkiye’nin çok gördüğü) ---
  "C-Elysée": {
    "I (2012-2022)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- Hafif ticari / MPV (TR’de çok yaygın) ---
  "Berlingo": {
    "I (1996-2008)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 D", hacim: "1.9", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2008-2018)": [
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2018-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "Nemo": {
    "I (2008-2017)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 HDi", hacim: "1.3", yakit: "Dizel" }
    ]
  },

  "Jumpy": {
    "I (1994-2006)": [
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2007-2016)": [
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "III (2016-2025)": [
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" },
      { motor: "2.0 BlueHDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "SpaceTourer": {
    "I (2016-2025)": [
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" },
      { motor: "2.0 BlueHDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Jumper": {
    "I (1994-2006)": [
      { motor: "2.8 HDi", hacim: "2.8", yakit: "Dizel" }
    ],
    "II (2006-2025)": [
      { motor: "2.2 HDi", hacim: "2.2", yakit: "Dizel" },
      { motor: "3.0 HDi", hacim: "3.0", yakit: "Dizel" }
    ]
  },

  // --- Yeni nesil şehir EV (TR’de görünmeye başladı) ---
  "Ami": {
    "I (2020-2025)": [
      { motor: "Elektrik", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// CUPRA (2018-2025 / TÜRKİYE)
// =====================
CARS["CUPRA"] = {

  "Ateca": {
    "I (2018-2023)": [
      { motor: "2.0 TSI 300", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "Leon": {
    "KL1 (2020-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TSI 300", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TSI 310", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "Leon Sportstourer": {
    "KL1 ST (2020-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TSI 310", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  "Formentor": {
    "KM7 (2020-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TSI 310", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.4 e-Hybrid", hacim: "1.4", yakit: "Hibrit" }
    ]
  },

  "Born": {
    "K11 (2021-2025)": [
      { motor: "EV 58 kWh", hacim: "EV", yakit: "Elektrik" },
      { motor: "EV 77 kWh", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  "Tavascan": {
    "I (2024-2025)": [
      { motor: "EV 77 kWh", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// DACIA (2004-2025 / TÜRKİYE)
// =====================
CARS["Dacia"] = {

  "Logan": {
    "I (2004-2012)": [
      { motor: "1.4 MPI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "II (2013-2020)": [
      { motor: "1.0 SCe", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.2 16V", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.0 ECO-G", hacim: "1.0", yakit: "Benzin/LPG" }
    ]
  },

  "Logan MCV": {
    "I (2007-2012)": [
      { motor: "1.4 MPI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "II (2013-2020)": [
      { motor: "1.0 SCe", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "Sandero": {
    "I (2008-2012)": [
      { motor: "1.4 MPI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "II (2013-2020)": [
      { motor: "1.0 SCe", hacim: "1.0", yakit: "Benzin" },
      { motor: "0.9 TCe", hacim: "0.9", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.0 ECO-G", hacim: "1.0", yakit: "Benzin/LPG" },
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  "Sandero Stepway": {
    "I (2009-2012)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2013-2020)": [
      { motor: "0.9 TCe", hacim: "0.9", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.0 ECO-G", hacim: "1.0", yakit: "Benzin/LPG" },
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  "Duster": {
    "I (2010-2017)": [
      { motor: "1.6 16V", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 16V", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "II (2018-2023)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2024-2025)": [
      { motor: "1.2 TCe Hybrid", hacim: "1.2", yakit: "Hibrit" }
    ]
  },

  "Jogger": {
    "I (2022-2025)": [
      { motor: "1.0 ECO-G", hacim: "1.0", yakit: "Benzin/LPG" },
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  "Lodgy": {
    "I (2012-2022)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.2 TCe", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "Dokker": {
    "I (2012-2021)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.2 TCe", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  "Spring": {
    "I (2021-2025)": [
      { motor: "Elektrik", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// FIAT (1980-2025 / TÜRKİYE)
// =====================
CARS["Fiat"] = {

  // --- KLASİKLER ---
  "124": {
    "II (1983-1985)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "131": {
    "II (1981-1984)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "Uno": {
    "I (1983-1989)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "II (1989-1995)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  "Tempra": {
    "I (1990-1999)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 D", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  "Tipo": {
    "I (1988-1995)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2016-2020)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 E-Torq", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.0 Firefly", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- PALIO / ALBEA / SIENA ---
  "Palio": {
    "I (1996-2005)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "Siena": {
    "I (1996-2004)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  "Albea": {
    "I (2002-2012)": [
      { motor: "1.2 Fire", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" }
    ]
  },

  // --- PUNTO AİLESİ ---
  "Punto": {
    "I (1993-1999)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ],
    "II (1999-2005)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.9 JTD", hacim: "1.9", yakit: "Dizel" }
    ],
    "Grande Punto (2005-2012)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" }
    ],
    "Punto Evo (2010-2015)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" }
    ]
  },

  // --- LINEA / EGEA ---
  "Linea": {
    "I (2007-2018)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 T-Jet", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  "Egea": {
    "Sedan (2015-2025)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ],
    "Hatchback (2016-2025)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ],
    "Cross (2020-2025)": [
      { motor: "1.0 Firefly", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- 500 AİLESİ ---
  "500": {
    "I (2007-2025)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "0.9 TwinAir", hacim: "0.9", yakit: "Benzin" }
    ]
  },

  "500L": {
    "I (2012-2022)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  "500X": {
    "I (2015-2025)": [
      { motor: "1.4 MultiAir", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 Multijet", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- DOBLO / FIORINO ---
  "Doblo": {
    "I (2001-2009)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 JTD", hacim: "1.9", yakit: "Dizel" }
    ],
    "II (2010-2022)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" }
    ]
  },

  "Fiorino": {
    "III (2007-2025)": [
      { motor: "1.4 Fire", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 Multijet", hacim: "1.3", yakit: "Dizel" }
    ]
  },

  // --- SUV ---
  "Freemont": {
    "I (2011-2016)": [
      { motor: "2.0 Multijet", hacim: "2.0", yakit: "Dizel" }
    ]
  }
};
// =====================
// FORD (1980-2025 / TÜRKİYE)
// =====================
CARS["Ford"] = {

  // --- Fiesta ---
  "Fiesta": {
    "Mk1/Mk2 (1976-1983)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" }
    ],
    "Mk3 (1989-1997)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "Mk4 (1995-2002)": [
      { motor: "1.25", hacim: "1.25", yakit: "Benzin" },
      { motor: "1.8 D", hacim: "1.8", yakit: "Dizel" }
    ],
    "Mk5 (2002-2008)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 TDCi", hacim: "1.4", yakit: "Dizel" }
    ],
    "Mk6 (2008-2017)": [
      { motor: "1.25", hacim: "1.25", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "Mk7 (2017-2025)": [
      { motor: "1.1 Ti-VCT", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- Focus ---
  "Focus": {
    "Mk1 (1998-2004)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "1.8 TDCi", hacim: "1.8", yakit: "Dizel" }
    ],
    "Mk2 (2004-2011)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 TDCi", hacim: "1.6", yakit: "Dizel" }
    ],
    "Mk3 (2011-2018)": [
      { motor: "1.0 EcoBoost", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "Mk4 (2018-2025)": [
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 EcoBoost", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.5 EcoBlue", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- Fiesta Van / Courier ---
  "Courier": {
    "I (1996-2002)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.8 D", hacim: "1.8", yakit: "Dizel" }
    ],
    "II (2002-2014)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2014-2025)": [
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- C-MAX ---
  "C-Max": {
    "I (2003-2010)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 TDCi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2010-2019)": [
      { motor: "1.0 EcoBoost", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.5 TDCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- Mondeo ---
  "Mondeo": {
    "Mk1 (1993-2000)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "Mk2 (2000-2007)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDCi", hacim: "2.0", yakit: "Dizel" }
    ],
    "Mk3 (2007-2014)": [
      { motor: "1.6 EcoBoost", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 TDCi", hacim: "2.0", yakit: "Dizel" }
    ],
    "Mk4 (2014-2025)": [
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 EcoBlue", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- Kuga ---
  "Kuga": {
    "Mk1 (2008-2013)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 TDCi", hacim: "2.0", yakit: "Dizel" }
    ],
    "Mk2 (2013-2019)": [
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDCi", hacim: "2.0", yakit: "Dizel" }
    ],
    "Mk3 (2019-2025)": [
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 EcoBlue", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- Puma ---
  "Puma": {
    "Mk1 (2019-2025)": [
      { motor: "1.0 EcoBoost", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.5 EcoBoost", hacim: "1.5", yakit: "Benzin" }
    ]
  },

  // --- Edge ---
  "Edge": {
    "I (2016-2025)": [
      { motor: "2.0 EcoBoost", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- Transit & Transit Connect ---
  "Transit Connect": {
    "I (2002-2013)": [
      { motor: "1.8 TDCi", hacim: "1.8", yakit: "Dizel" }
    ],
    "II (2013-2021)": [
      { motor: "1.5 EcoBlue", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "2.0 EcoBlue", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  "Transit": {
    "Mk6 (2000-2006)": [
      { motor: "2.0 D", hacim: "2.0", yakit: "Dizel" },
      { motor: "2.4 D", hacim: "2.4", yakit: "Dizel" }
    ],
    "Mk7 (2006-2013)": [
      { motor: "2.2 TDCi", hacim: "2.2", yakit: "Dizel" }
    ],
    "Mk8 (2014-2025)": [
      { motor: "2.0 EcoBlue", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- Tourneo / Tourneo Connect ---
  "Tourneo Connect": {
    "I (2002-2014)": [
      { motor: "1.8 TDCi", hacim: "1.8", yakit: "Dizel" }
    ],
    "II (2014-2021)": [
      { motor: "1.5 EcoBlue", hacim: "1.5", yakit: "Dizel" }
    ]
  }
};
// =====================
// HONDA (1980-2025 / TÜRKİYE)
// =====================
CARS["Honda"] = {

  // --- CIVIC ---
  "Civic": {
    "III (1983-1987)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "IV (1987-1991)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "V (1991-1995)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "VI (1996-2000)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "VII (2001-2005)": [
      { motor: "1.6 VTEC", hacim: "1.6", yakit: "Benzin" }
    ],
    "VIII (2006-2011)": [
      { motor: "1.6 i-VTEC", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8 i-VTEC", hacim: "1.8", yakit: "Benzin" }
    ],
    "IX (2012-2016)": [
      { motor: "1.6 i-VTEC", hacim: "1.6", yakit: "Benzin" }
    ],
    "X (2016-2021)": [
      { motor: "1.5 VTEC Turbo", hacim: "1.5", yakit: "Benzin" }
    ],
    "XI (2022-2025)": [
      { motor: "1.5 e:HEV", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- ACCORD ---
  "Accord": {
    "IV (1989-1993)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "V (1994-1997)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "VI (1998-2002)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.3", hacim: "2.3", yakit: "Benzin" }
    ],
    "VII (2003-2007)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.4", hacim: "2.4", yakit: "Benzin" }
    ],
    "VIII (2008-2013)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.4", hacim: "2.4", yakit: "Benzin" }
    ],
    "IX (2014-2018)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- JAZZ ---
  "Jazz": {
    "I (2001-2008)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "II (2009-2015)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "III (2016-2020)": [
      { motor: "1.3 i-VTEC", hacim: "1.3", yakit: "Benzin" }
    ],
    "IV (2021-2025)": [
      { motor: "1.5 e:HEV", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- CR-V ---
  "CR-V": {
    "I (1996-2001)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II (2002-2006)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "III (2007-2011)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "IV (2012-2018)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "V (2019-2025)": [
      { motor: "2.0 Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  // --- HR-V ---
  "HR-V": {
    "I (1999-2006)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2015-2021)": [
      { motor: "1.5 i-VTEC", hacim: "1.5", yakit: "Benzin" }
    ],
    "III (2021-2025)": [
      { motor: "1.5 e:HEV", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- FR-V ---
  "FR-V": {
    "I (2004-2009)": [
      { motor: "1.7", hacim: "1.7", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- STREAM ---
  "Stream": {
    "I (2001-2006)": [
      { motor: "1.7", hacim: "1.7", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II (2007-2014)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ]
  },

  // --- LEGEND ---
  "Legend": {
    "III (1996-2004)": [
      { motor: "3.5 V6", hacim: "3.5", yakit: "Benzin" }
    ],
    "IV (2004-2012)": [
      { motor: "3.5 V6", hacim: "3.5", yakit: "Benzin" }
    ]
  }
};
// =====================
// HYUNDAI (1980-2025 / TÜRKİYE)
// =====================
CARS["Hyundai"] = {

  // --- ACCENT ---
  "Accent": {
    "I (1995-2000)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "II (2000-2006)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.5 CRDi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III Era (2006-2011)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 CRDi", hacim: "1.5", yakit: "Dizel" }
    ],
    "IV Blue (2011-2018)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- ELANTRA ---
  "Elantra": {
    "III (2000-2006)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "IV (2006-2010)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "V (2011-2015)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" }
    ],
    "VI (2016-2020)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" }
    ],
    "VII (2021-2025)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- GETZ ---
  "Getz": {
    "I (2002-2011)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 CRDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- I20 ---
  "i20": {
    "I (2009-2014)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 CRDi", hacim: "1.4", yakit: "Dizel" }
    ],
    "II (2015-2020)": [
      { motor: "1.2 MPI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 MPI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 CRDi", hacim: "1.4", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.2 MPI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.0 T-GDI", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  // --- I30 ---
  "i30": {
    "I (2007-2011)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2012-2017)": [
      { motor: "1.6 GDI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2017-2023)": [
      { motor: "1.5 MPI", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- TUCSON ---
  "Tucson": {
    "I (2004-2009)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II ix35 (2010-2015)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 CRDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "III (2015-2020)": [
      { motor: "1.6 GDI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "IV (2021-2025)": [
      { motor: "1.6 T-GDI Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- SANTA FE ---
  "Santa Fe": {
    "II (2006-2012)": [
      { motor: "2.7 V6", hacim: "2.7", yakit: "Benzin" },
      { motor: "2.2 CRDi", hacim: "2.2", yakit: "Dizel" }
    ],
    "III (2013-2018)": [
      { motor: "2.2 CRDi", hacim: "2.2", yakit: "Dizel" }
    ],
    "IV (2019-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- KONA ---
  "Kona": {
    "I (2017-2023)": [
      { motor: "1.0 T-GDI", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ],
    "II (2023-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// KIA (1980-2025 / TÜRKİYE)
// =====================
CARS["Kia"] = {

  // --- PRIDE ---
  "Pride": {
    "I (1994-2000)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "II (2000-2011)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  // --- RIO ---
  "Rio": {
    "I (2000-2005)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "II (2006-2011)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 CRDi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2012-2016)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.4 CRDi", hacim: "1.4", yakit: "Dizel" }
    ],
    "IV (2017-2023)": [
      { motor: "1.4 MPI", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  // --- PICANTO ---
  "Picanto": {
    "I (2004-2010)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" }
    ],
    "II (2011-2017)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.25", hacim: "1.25", yakit: "Benzin" }
    ],
    "III (2018-2025)": [
      { motor: "1.0 MPI", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  // --- CEED ---
  "Ceed": {
    "I (2007-2012)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2013-2018)": [
      { motor: "1.6 GDI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "III (2019-2023)": [
      { motor: "1.5 T-GDI", hacim: "1.5", yakit: "Benzin" }
    ]
  },

  // --- CERATO ---
  "Cerato": {
    "I (2004-2008)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2009-2013)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- OPTIMA ---
  "Optima": {
    "III (2011-2015)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "IV (2016-2020)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- SPORTAGE ---
  "Sportage": {
    "I (1995-2004)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II (2005-2010)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 CRDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "III (2011-2015)": [
      { motor: "1.6 GDI", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 CRDi", hacim: "2.0", yakit: "Dizel" }
    ],
    "IV (2016-2021)": [
      { motor: "1.6 GDI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 CRDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "V (2022-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- SORENTO ---
  "Sorento": {
    "I (2002-2009)": [
      { motor: "2.4", hacim: "2.4", yakit: "Benzin" }
    ],
    "II (2010-2014)": [
      { motor: "2.2 CRDi", hacim: "2.2", yakit: "Dizel" }
    ],
    "III (2015-2020)": [
      { motor: "2.2 CRDi", hacim: "2.2", yakit: "Dizel" }
    ],
    "IV (2021-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- NIRO ---
  "Niro": {
    "I (2016-2022)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ],
    "II (2023-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- EV MODELLER ---
  "EV6": {
    "I (2022-2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// MAZDA (1980-2025 / TÜRKİYE)
// =====================
CARS["Mazda"] = {

  // --- MAZDA 323 ---
  "323": {
    "BF (1985-1989)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "BG (1989-1994)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "BA (1994-1998)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ]
  },

  // --- MAZDA 3 ---
  "3": {
    "BK (2004-2009)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "BL (2009-2013)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "BM (2014-2018)": [
      { motor: "1.5 Skyactiv-G", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" }
    ],
    "BP (2019-2025)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- MAZDA 6 ---
  "6": {
    "GG/GY (2002-2008)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.3", hacim: "2.3", yakit: "Benzin" }
    ],
    "GH (2008-2012)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "GJ (2013-2018)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 Skyactiv-G", hacim: "2.5", yakit: "Benzin" }
    ],
    "GL (2019-2025)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- MAZDA CX-3 ---
  "CX-3": {
    "DK (2015-2022)": [
      { motor: "1.5 Skyactiv-D", hacim: "1.5", yakit: "Dizel" },
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- MAZDA CX-5 ---
  "CX-5": {
    "KE (2012-2016)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 Skyactiv-D", hacim: "2.2", yakit: "Dizel" }
    ],
    "KF (2017-2023)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 Skyactiv-G", hacim: "2.5", yakit: "Benzin" }
    ]
  },

  // --- MAZDA CX-30 ---
  "CX-30": {
    "DM (2020-2025)": [
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 Skyactiv-X", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- MAZDA MX-5 ---
  "MX-5": {
    "NA/NB (1990-2005)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "NC (2006-2015)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "ND (2016-2025)": [
      { motor: "1.5 Skyactiv-G", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Skyactiv-G", hacim: "2.0", yakit: "Benzin" }
    ]
  }
};
// =====================
// MERCEDES-BENZ (1980-2025 / TÜRKİYE)
// =====================
CARS["Mercedes-Benz"] = {

  // ===== A SERİSİ =====
  "A Serisi": {
    "W168 (1997-2004)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "W169 (2004-2012)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.7 CDI", hacim: "1.7", yakit: "Dizel" }
    ],
    "W176 (2013-2018)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 CDI", hacim: "1.5", yakit: "Dizel" }
    ],
    "W177 (2019-2025)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5 CDI", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // ===== B SERİSİ =====
  "B Serisi": {
    "W245 (2005-2011)": [
      { motor: "1.7", hacim: "1.7", yakit: "Benzin" },
      { motor: "2.0 CDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "W246 (2012-2018)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 CDI", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // ===== C SERİSİ =====
  "C Serisi": {
    "W201 (1982-1993)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "W202 (1993-2000)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W203 (2000-2007)": [
      { motor: "1.8 Kompressor", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W204 (2007-2014)": [
      { motor: "1.6 Kompressor", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W205 (2015-2021)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 CDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "W206 (2022-2025)": [
      { motor: "1.5 Mild Hybrid", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // ===== E SERİSİ =====
  "E Serisi": {
    "W124 (1984-1995)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "W210 (1995-2002)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W211 (2002-2009)": [
      { motor: "2.0 Kompressor", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W212 (2009-2016)": [
      { motor: "1.8 CGI", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.2 CDI", hacim: "2.2", yakit: "Dizel" }
    ],
    "W213 (2017-2025)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 CDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // ===== S SERİSİ =====
  "S Serisi": {
    "W126 (1980-1991)": [
      { motor: "3.0", hacim: "3.0", yakit: "Benzin" }
    ],
    "W140 (1991-1998)": [
      { motor: "3.2", hacim: "3.2", yakit: "Benzin" }
    ],
    "W220 (1998-2005)": [
      { motor: "3.2", hacim: "3.2", yakit: "Benzin" }
    ],
    "W221 (2005-2013)": [
      { motor: "3.5", hacim: "3.5", yakit: "Benzin" }
    ],
    "W222 (2014-2020)": [
      { motor: "3.0 CDI", hacim: "3.0", yakit: "Dizel" }
    ],
    "W223 (2021-2025)": [
      { motor: "3.0 Mild Hybrid", hacim: "3.0", yakit: "Hibrit" }
    ]
  },

  // ===== SUV =====
  "GLC": {
    "X253 (2016-2022)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 CDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "X254 (2023-2025)": [
      { motor: "2.0 Mild Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  "GLA": {
    "X156 (2014-2020)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 CDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "H247 (2021-2025)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ]
  }
};
// =====================
// MINI (2001-2025 / TÜRKİYE)
// =====================
CARS["Mini"] = {

  // ===== MINI HATCH =====
  "Hatch": {
    "R50 (2001-2006)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "R56 (2007-2013)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "F56 (2014-2025)": [
      { motor: "1.5 Turbo", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // ===== MINI CLUBMAN =====
  "Clubman": {
    "R55 (2007-2014)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "F54 (2015-2023)": [
      { motor: "1.5 Turbo", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // ===== MINI COUNTRYMAN =====
  "Countryman": {
    "R60 (2010-2016)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 Dizel", hacim: "2.0", yakit: "Dizel" }
    ],
    "F60 (2017-2025)": [
      { motor: "1.5 Turbo", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.5 Hybrid", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // ===== MINI CABRIO =====
  "Cabrio": {
    "R52 (2004-2008)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "R57 (2009-2015)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "F57 (2016-2025)": [
      { motor: "1.5 Turbo", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" }
    ]
  }
};
// =====================
// MITSUBISHI (1980-2025 / TÜRKİYE)
// =====================
CARS["Mitsubishi"] = {

  // --- LANCER ---
  "Lancer": {
    "V (1988-1992)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ],
    "VI (1992-1996)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "VII (1996-2000)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "VIII (2000-2007)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "IX (2007-2017)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- COLT ---
  "Colt": {
    "IV (1988-1992)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "V (1992-1996)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "VI (2004-2012)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ]
  },

  // --- CARISMA ---
  "Carisma": {
    "I (1995-2004)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 DI-D", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  // --- GALANT ---
  "Galant": {
    "VI (1988-1992)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "VII (1992-1996)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "VIII (1996-2003)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- SPACE STAR ---
  "Space Star": {
    "I (1998-2005)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2013-2025)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ]
  },

  // --- ASX ---
  "ASX": {
    "I (2010-2022)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8 DI-D", hacim: "1.8", yakit: "Dizel" }
    ]
  },

  // --- OUTLANDER ---
  "Outlander": {
    "I (2003-2006)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II (2007-2012)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 DI-D", hacim: "2.2", yakit: "Dizel" }
    ],
    "III (2013-2020)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 PHEV", hacim: "2.0", yakit: "Hibrit" }
    ],
    "IV (2021-2025)": [
      { motor: "2.4 PHEV", hacim: "2.4", yakit: "Hibrit" }
    ]
  },

  // --- PAJERO ---
  "Pajero": {
    "II (1991-1999)": [
      { motor: "3.0 V6", hacim: "3.0", yakit: "Benzin" }
    ],
    "III (1999-2006)": [
      { motor: "3.2 DI-D", hacim: "3.2", yakit: "Dizel" }
    ],
    "IV (2007-2018)": [
      { motor: "3.2 DI-D", hacim: "3.2", yakit: "Dizel" }
    ]
  },

  // --- L200 (PICK-UP) ---
  "L200": {
    "III (1996-2005)": [
      { motor: "2.5 TD", hacim: "2.5", yakit: "Dizel" }
    ],
    "IV (2006-2015)": [
      { motor: "2.5 DI-D", hacim: "2.5", yakit: "Dizel" }
    ],
    "V (2016-2025)": [
      { motor: "2.3 DI-D", hacim: "2.3", yakit: "Dizel" }
    ]
  }
};
// =====================
// NISSAN (1980-2025 / TÜRKİYE)
// =====================
CARS["Nissan"] = {

  // --- MICRA ---
  "Micra": {
    "K10 (1982-1992)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" }
    ],
    "K11 (1992-2003)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "K12 (2003-2010)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "K13 (2011-2016)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ],
    "K14 (2017-2023)": [
      { motor: "1.0 IG-T", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  // --- ALMERA ---
  "Almera": {
    "N15 (1995-2000)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "N16 (2000-2006)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "Classic (2006-2012)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" }
    ]
  },

  // --- PRIMERA ---
  "Primera": {
    "P10 (1990-1996)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "P11 (1996-2002)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "P12 (2002-2007)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ]
  },

  // --- SUNNY ---
  "Sunny": {
    "B12 (1986-1991)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "B13 (1991-1995)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "B14 (1995-1999)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- NOTE ---
  "Note": {
    "E11 (2006-2013)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E12 (2013-2019)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ]
  },

  // --- JUKE ---
  "Juke": {
    "F15 (2010-2019)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 Turbo", hacim: "1.6", yakit: "Benzin" }
    ],
    "F16 (2020-2025)": [
      { motor: "1.0 DIG-T", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  // --- QASHQAI ---
  "Qashqai": {
    "J10 (2007-2013)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "J11 (2014-2020)": [
      { motor: "1.2 DIG-T", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 DIG-T", hacim: "1.6", yakit: "Benzin" }
    ],
    "J12 (2021-2025)": [
      { motor: "1.3 Mild Hybrid", hacim: "1.3", yakit: "Hibrit" }
    ]
  },

  // --- X-TRAIL ---
  "X-Trail": {
    "T30 (2001-2007)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "T31 (2007-2013)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "T32 (2014-2022)": [
      { motor: "1.6 dCi", hacim: "1.6", yakit: "Dizel" }
    ],
    "T33 (2023-2025)": [
      { motor: "1.5 e-Power", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- NAVARA ---
  "Navara": {
    "D22 (1997-2005)": [
      { motor: "2.5 TD", hacim: "2.5", yakit: "Dizel" }
    ],
    "D40 (2005-2014)": [
      { motor: "2.5 dCi", hacim: "2.5", yakit: "Dizel" }
    ],
    "D23 (2015-2025)": [
      { motor: "2.3 dCi", hacim: "2.3", yakit: "Dizel" }
    ]
  },

  // --- LEAF (EV) ---
  "Leaf": {
    "I (2011-2017)": [
      { motor: "EV 24 kWh", hacim: "EV", yakit: "Elektrik" }
    ],
    "II (2018-2025)": [
      { motor: "EV 40 kWh", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// OPEL (1980-2025 / TÜRKİYE)
// =====================
CARS["Opel"] = {

  // --- CORSA ---
  "Corsa": {
    "A (1983-1993)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" }
    ],
    "B (1993-2000)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "C (2000-2006)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "D (2006-2014)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 CDTi", hacim: "1.3", yakit: "Dizel" }
    ],
    "E (2015-2019)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.3 CDTi", hacim: "1.3", yakit: "Dizel" }
    ],
    "F (2020-2025)": [
      { motor: "1.2 Turbo", hacim: "1.2", yakit: "Benzin" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  // --- ASTRA ---
  "Astra": {
    "F (1991-1998)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "G (1998-2004)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 DTI", hacim: "2.0", yakit: "Dizel" }
    ],
    "H (2004-2010)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 CDTi", hacim: "1.9", yakit: "Dizel" }
    ],
    "J (2010-2015)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 CDTi", hacim: "1.6", yakit: "Dizel" }
    ],
    "K (2016-2021)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 CDTi", hacim: "1.6", yakit: "Dizel" }
    ],
    "L (2022-2025)": [
      { motor: "1.2 Turbo", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- VECTRA ---
  "Vectra": {
    "A (1988-1995)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "B (1995-2002)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.2 DTI", hacim: "2.2", yakit: "Dizel" }
    ],
    "C (2002-2008)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 CDTi", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  // --- INSIGNIA ---
  "Insignia": {
    "A (2009-2017)": [
      { motor: "1.6 Turbo", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 CDTi", hacim: "2.0", yakit: "Dizel" }
    ],
    "B (2017-2023)": [
      { motor: "1.5 Turbo", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 CDTi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- MERIVA ---
  "Meriva": {
    "A (2003-2010)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "B (2010-2017)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 CDTi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- ZAFIRA ---
  "Zafira": {
    "A (1999-2005)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "B (2005-2014)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "1.9 CDTi", hacim: "1.9", yakit: "Dizel" }
    ],
    "C Tourer (2012-2019)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  // --- MOKKA ---
  "Mokka": {
    "I (2013-2020)": [
      { motor: "1.4 Turbo", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 CDTi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2021-2025)": [
      { motor: "1.2 Turbo", hacim: "1.2", yakit: "Benzin" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// PEUGEOT (1980-2025 / TÜRKİYE)
// =====================
CARS["Peugeot"] = {

  // --- 106 ---
  "106": {
    "I (1991-1996)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" }
    ],
    "II (1996-2003)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  // --- 205 ---
  "205": {
    "I (1983-1998)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ]
  },

  // --- 206 ---
  "206": {
    "I (1998-2009)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" }
    ]
  },

  // --- 207 ---
  "207": {
    "I (2006-2014)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- 208 ---
  "208": {
    "I (2012-2019)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 HDi", hacim: "1.4", yakit: "Dizel" }
    ],
    "II (2020-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  // --- 301 ---
  "301": {
    "I (2013-2021)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- 306 ---
  "306": {
    "I (1993-2002)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 D", hacim: "1.9", yakit: "Dizel" }
    ]
  },

  // --- 307 ---
  "307": {
    "I (2001-2008)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- 308 ---
  "308": {
    "I (2007-2013)": [
      { motor: "1.6 VTi", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2014-2021)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2022-2025)": [
      { motor: "1.2 Hybrid", hacim: "1.2", yakit: "Hibrit" }
    ]
  },

  // --- 406 ---
  "406": {
    "I (1995-2004)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 HDi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- 407 ---
  "407": {
    "I (2004-2010)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- 508 ---
  "508": {
    "I (2011-2018)": [
      { motor: "1.6 THP", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2019-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- PARTNER ---
  "Partner": {
    "I (1996-2008)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2008-2018)": [
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- RIFTER ---
  "Rifter": {
    "I (2019-2025)": [
      { motor: "1.5 BlueHDi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- 2008 ---
  "2008": {
    "I (2013-2019)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2020-2025)": [
      { motor: "1.2 PureTech", hacim: "1.2", yakit: "Benzin" },
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  // --- 3008 ---
  "3008": {
    "I (2009-2016)": [
      { motor: "1.6 THP", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2017-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- 5008 ---
  "5008": {
    "I (2009-2016)": [
      { motor: "1.6 HDi", hacim: "1.6", yakit: "Dizel" }
    ],
    "II (2017-2025)": [
      { motor: "1.6 Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  }
};
// =====================
// PORSCHE (1980-2025 / TÜRKİYE)
// =====================
CARS["Porsche"] = {

  // --- 911 ---
  "911": {
    "964 (1989-1994)": [
      { motor: "3.6", hacim: "3.6", yakit: "Benzin" }
    ],
    "993 (1994-1998)": [
      { motor: "3.6", hacim: "3.6", yakit: "Benzin" }
    ],
    "996 (1998-2004)": [
      { motor: "3.4", hacim: "3.4", yakit: "Benzin" },
      { motor: "3.6", hacim: "3.6", yakit: "Benzin" }
    ],
    "997 (2004-2012)": [
      { motor: "3.6", hacim: "3.6", yakit: "Benzin" },
      { motor: "3.8", hacim: "3.8", yakit: "Benzin" }
    ],
    "991 (2012-2019)": [
      { motor: "3.0 Turbo", hacim: "3.0", yakit: "Benzin" }
    ],
    "992 (2019-2025)": [
      { motor: "3.0 Turbo", hacim: "3.0", yakit: "Benzin" }
    ]
  },

  // --- BOXSTER ---
  "Boxster": {
    "986 (1996-2004)": [
      { motor: "2.5", hacim: "2.5", yakit: "Benzin" },
      { motor: "2.7", hacim: "2.7", yakit: "Benzin" }
    ],
    "987 (2005-2012)": [
      { motor: "2.7", hacim: "2.7", yakit: "Benzin" },
      { motor: "3.2", hacim: "3.2", yakit: "Benzin" }
    ],
    "981 (2012-2016)": [
      { motor: "2.7", hacim: "2.7", yakit: "Benzin" },
      { motor: "3.4", hacim: "3.4", yakit: "Benzin" }
    ],
    "718 (2016-2025)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5 Turbo", hacim: "2.5", yakit: "Benzin" }
    ]
  },

  // --- CAYMAN ---
  "Cayman": {
    "987 (2006-2012)": [
      { motor: "2.7", hacim: "2.7", yakit: "Benzin" },
      { motor: "3.4", hacim: "3.4", yakit: "Benzin" }
    ],
    "981 (2013-2016)": [
      { motor: "2.7", hacim: "2.7", yakit: "Benzin" }
    ],
    "718 (2016-2025)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- CAYENNE ---
  "Cayenne": {
    "955 (2002-2006)": [
      { motor: "3.2 V6", hacim: "3.2", yakit: "Benzin" },
      { motor: "4.5 V8", hacim: "4.5", yakit: "Benzin" }
    ],
    "957 (2007-2010)": [
      { motor: "3.6 V6", hacim: "3.6", yakit: "Benzin" },
      { motor: "4.8 V8", hacim: "4.8", yakit: "Benzin" }
    ],
    "958 (2010-2017)": [
      { motor: "3.0 Diesel", hacim: "3.0", yakit: "Dizel" },
      { motor: "3.6 V6", hacim: "3.6", yakit: "Benzin" }
    ],
    "9YA (2018-2025)": [
      { motor: "3.0 V6", hacim: "3.0", yakit: "Benzin" },
      { motor: "Hybrid", hacim: "Hybrid", yakit: "Hibrit" }
    ]
  },

  // --- PANAMERA ---
  "Panamera": {
    "970 (2009-2016)": [
      { motor: "3.6 V6", hacim: "3.6", yakit: "Benzin" },
      { motor: "4.8 V8", hacim: "4.8", yakit: "Benzin" }
    ],
    "971 (2017-2023)": [
      { motor: "2.9 V6", hacim: "2.9", yakit: "Benzin" },
      { motor: "Hybrid", hacim: "Hybrid", yakit: "Hibrit" }
    ]
  },

  // --- MACAN ---
  "Macan": {
    "I (2014-2021)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" },
      { motor: "3.0 V6", hacim: "3.0", yakit: "Benzin" }
    ],
    "II (2022-2025)": [
      { motor: "2.0 Turbo", hacim: "2.0", yakit: "Benzin" }
    ]
  },

  // --- TAYCAN ---
  "Taycan": {
    "I (2020-2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// RENAULT (1980-2025 / TÜRKİYE)
// =====================
CARS["Renault"] = {

  // --- R5 ---
  "R5": {
    "I (1972-1985)": [
      { motor: "1.1", hacim: "1.1", yakit: "Benzin" }
    ]
  },

  // --- CLIO ---
  "Clio": {
    "I (1990-1998)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "II (1998-2005)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2005-2012)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "IV (2012-2019)": [
      { motor: "1.2 TCe", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "V (2020-2025)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" },
      { motor: "E-Tech Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- MEGANE ---
  "Megane": {
    "I (1996-2002)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2002-2009)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2009-2016)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "IV (2016-2022)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5 Blue dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- SYMBOL ---
  "Symbol": {
    "I (1999-2008)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "II (2008-2012)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- FLUENCE ---
  "Fluence": {
    "I (2009-2016)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- LAGUNA ---
  "Laguna": {
    "I (1994-2001)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "II (2001-2007)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.9 dCi", hacim: "1.9", yakit: "Dizel" }
    ],
    "III (2007-2015)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.0 dCi", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- KANGOO ---
  "Kangoo": {
    "I (1997-2007)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2008-2021)": [
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "III (2021-2025)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  // --- SCENIC ---
  "Scenic": {
    "I (1996-2003)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2003-2009)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 dCi", hacim: "1.9", yakit: "Dizel" }
    ],
    "III (2009-2016)": [
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "IV (2016-2022)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  // --- CAPTUR ---
  "Captur": {
    "I (2013-2019)": [
      { motor: "1.2 TCe", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ],
    "II (2020-2025)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" },
      { motor: "E-Tech Hybrid", hacim: "1.6", yakit: "Hibrit" }
    ]
  },

  // --- KADJAR ---
  "Kadjar": {
    "I (2015-2022)": [
      { motor: "1.3 TCe", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.5 dCi", hacim: "1.5", yakit: "Dizel" }
    ]
  },

  // --- TALISMAN ---
  "Talisman": {
    "I (2016-2022)": [
      { motor: "1.6 TCe", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.6 dCi", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- ZOE ---
  "Zoe": {
    "I (2013-2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// ŠKODA (1980–2025 / TÜRKİYE)
// =====================
CARS["Skoda"] = {

  // --- FAVORIT / FORMEN / PICKUP ---
  "Favorit": {
    "X (1987–1995)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- FELICIA ---
  "Felicia": {
    "I (1994–2001)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- FABIA ---
  "Fabia": {
    "I (1999–2007)": [
      { motor: "1.2", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "II (2007–2014)": [
      { motor: "1.2 HTP", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 TDI", hacim: "1.4", yakit: "Dizel" }
    ],
    "III (2014–2021)": [
      { motor: "1.0 TSI", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.4 TDI", hacim: "1.4", yakit: "Dizel" }
    ],
    "IV (2022–2025)": [
      { motor: "1.0 TSI", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" }
    ]
  },

  // --- RAPID ---
  "Rapid": {
    "I (2012–2019)": [
      { motor: "1.2 TSI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- OCTAVIA ---
  "Octavia": {
    "I (1996–2004)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2004–2013)": [
      { motor: "1.6 MPI", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "III (2013–2020)": [
      { motor: "1.2 TSI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ],
    "IV (2020–2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- SUPERB ---
  "Superb": {
    "I (2001–2008)": [
      { motor: "1.8 TSI", hacim: "1.8", yakit: "Benzin" }
    ],
    "II (2008–2015)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "III (2015–2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- KODIAQ ---
  "Kodiaq": {
    "I (2016–2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- KAROQ ---
  "Karoq": {
    "I (2017–2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- ENYAQ iV ---
  "Enyaq iV": {
    "I (2021–2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// TOYOTA (1980-2025 / TÜRKİYE)
// =====================
CARS["Toyota"] = {

  // --- STARLET ---
  "Starlet": {
    "P70 (1984-1989)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "P80 (1989-1996)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ]
  },

  // --- COROLLA ---
  "Corolla": {
    "E80 (1983-1987)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "E90 (1987-1992)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E100 (1992-1997)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E110 (1997-2001)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E120/E130 (2001-2007)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E140/E150 (2007-2013)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E160/E170 (2013-2018)": [
      { motor: "1.33", hacim: "1.33", yakit: "Benzin" },
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "E210 (2019-2025)": [
      { motor: "1.5", hacim: "1.5", yakit: "Benzin" },
      { motor: "1.8 Hybrid", hacim: "1.8", yakit: "Hibrit" }
    ]
  },

  // --- YARIS ---
  "Yaris": {
    "XP10 (1999-2005)": [
      { motor: "1.0", hacim: "1.0", yakit: "Benzin" },
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "XP40 (2006-2011)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "XP130 (2011-2019)": [
      { motor: "1.33", hacim: "1.33", yakit: "Benzin" },
      { motor: "1.4 D-4D", hacim: "1.4", yakit: "Dizel" }
    ],
    "XP210 (2020-2025)": [
      { motor: "1.5 Hybrid", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- AURIS ---
  "Auris": {
    "I (2006-2012)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.4 D-4D", hacim: "1.4", yakit: "Dizel" }
    ],
    "II (2012-2019)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.8 Hybrid", hacim: "1.8", yakit: "Hibrit" }
    ]
  },

  // --- AVENSIS ---
  "Avensis": {
    "T22 (1997-2003)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "T25 (2003-2009)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" },
      { motor: "2.0 D-4D", hacim: "2.0", yakit: "Dizel" }
    ],
    "T27 (2009-2018)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ]
  },

  // --- CAMRY ---
  "Camry": {
    "XV70 (2018-2025)": [
      { motor: "2.5 Hybrid", hacim: "2.5", yakit: "Hibrit" }
    ]
  },

  // --- C-HR ---
  "C-HR": {
    "I (2016-2025)": [
      { motor: "1.8 Hybrid", hacim: "1.8", yakit: "Hibrit" }
    ]
  },

  // --- RAV4 ---
  "RAV4": {
    "III (2006-2012)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "IV (2013-2018)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "V (2019-2025)": [
      { motor: "2.5 Hybrid", hacim: "2.5", yakit: "Hibrit" }
    ]
  },

  // --- LAND CRUISER ---
  "Land Cruiser": {
    "J90 (1996-2002)": [
      { motor: "3.0 D", hacim: "3.0", yakit: "Dizel" }
    ],
    "J120 (2002-2009)": [
      { motor: "3.0 D-4D", hacim: "3.0", yakit: "Dizel" }
    ],
    "J150 (2009-2025)": [
      { motor: "2.8 D-4D", hacim: "2.8", yakit: "Dizel" }
    ]
  },

  // --- HILUX ---
  "Hilux": {
    "VIGO (2005-2015)": [
      { motor: "2.5 D-4D", hacim: "2.5", yakit: "Dizel" }
    ],
    "REVO (2016-2025)": [
      { motor: "2.4 D-4D", hacim: "2.4", yakit: "Dizel" }
    ]
  },

  // --- PROACE ---
  "Proace": {
    "I (2016-2023)": [
      { motor: "1.5 D-4D", hacim: "1.5", yakit: "Dizel" }
    ]
  }
};
// =====================
// VOLKSWAGEN (1980-2025 / TÜRKİYE)
// =====================
CARS["Volkswagen"] = {

  // --- POLO ---
  "Polo": {
    "II (1981-1994)": [
      { motor: "1.3", hacim: "1.3", yakit: "Benzin" }
    ],
    "III (1994-2001)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" }
    ],
    "IV (2001-2009)": [
      { motor: "1.4", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "V (2009-2017)": [
      { motor: "1.2 TSI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ],
    "VI (2017-2025)": [
      { motor: "1.0 TSI", hacim: "1.0", yakit: "Benzin" }
    ]
  },

  // --- GOLF ---
  "Golf": {
    "Mk2 (1983-1992)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "Mk3 (1991-1997)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "Mk4 (1997-2004)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "Mk5 (2004-2009)": [
      { motor: "1.6 FSI", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "Mk6 (2009-2013)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ],
    "Mk7 (2013-2020)": [
      { motor: "1.2 TSI", hacim: "1.2", yakit: "Benzin" },
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ],
    "Mk8 (2020-2025)": [
      { motor: "1.5 eTSI", hacim: "1.5", yakit: "Hibrit" }
    ]
  },

  // --- JETTA ---
  "Jetta": {
    "A4 (1999-2005)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "A5 (2005-2011)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "A6 (2011-2018)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- PASSAT ---
  "Passat": {
    "B3/B4 (1988-1996)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" }
    ],
    "B5/B5.5 (1996-2005)": [
      { motor: "1.8T", hacim: "1.8", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "B6 (2005-2010)": [
      { motor: "1.6 FSI", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "B7 (2010-2014)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ],
    "B8 (2015-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" },
      { motor: "1.4 eHybrid", hacim: "1.4", yakit: "Hibrit" }
    ]
  },

  // --- TIGUAN ---
  "Tiguan": {
    "I (2007-2016)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2016-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- TOURAN ---
  "Touran": {
    "I (2003-2010)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" }
    ],
    "II (2010-2015)": [
      { motor: "1.4 TSI", hacim: "1.4", yakit: "Benzin" },
      { motor: "1.6 TDI", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- CADDY ---
  "Caddy": {
    "III (2004-2015)": [
      { motor: "1.6", hacim: "1.6", yakit: "Benzin" },
      { motor: "1.9 TDI", hacim: "1.9", yakit: "Dizel" }
    ],
    "IV (2015-2025)": [
      { motor: "1.5 TSI", hacim: "1.5", yakit: "Benzin" },
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- TRANSPORTER ---
  "Transporter": {
    "T4 (1990-2003)": [
      { motor: "2.4 D", hacim: "2.4", yakit: "Dizel" }
    ],
    "T5 (2003-2015)": [
      { motor: "2.5 TDI", hacim: "2.5", yakit: "Dizel" }
    ],
    "T6 (2015-2025)": [
      { motor: "2.0 TDI", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- ID. MODELLER ---
  "ID.3": {
    "I (2020-2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  "ID.4": {
    "I (2021-2025)": [
      { motor: "EV", hacim: "EV", yakit: "Elektrik" }
    ]
  }
};
// =====================
// VOLVO (1980-2025 / TÜRKİYE)
// =====================
CARS["Volvo"] = {

  // --- 240 / 260 ---
  "240": {
    "I (1974-1993)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.3", hacim: "2.3", yakit: "Benzin" }
    ]
  },

  // --- 740 / 760 ---
  "740": {
    "I (1984-1992)": [
      { motor: "2.3", hacim: "2.3", yakit: "Benzin" }
    ]
  },

  // --- 850 ---
  "850": {
    "I (1991-1997)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.5", hacim: "2.5", yakit: "Benzin" }
    ]
  },

  // --- S40 / V40 ---
  "S40": {
    "I (1995-2004)": [
      { motor: "1.8", hacim: "1.8", yakit: "Benzin" }
    ],
    "II (2004-2012)": [
      { motor: "2.0", hacim: "2.0", yakit: "Benzin" },
      { motor: "1.6 D", hacim: "1.6", yakit: "Dizel" }
    ]
  },

  // --- S60 ---
  "S60": {
    "I (2000-2009)": [
      { motor: "2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.4 D5", hacim: "2.4", yakit: "Dizel" }
    ],
    "II (2010-2018)": [
      { motor: "1.6 T4", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 D4", hacim: "2.0", yakit: "Dizel" }
    ],
    "III (2019-2025)": [
      { motor: "2.0 T5", hacim: "2.0", yakit: "Benzin" },
      { motor: "Recharge Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  // --- S80 ---
  "S80": {
    "I (1998-2006)": [
      { motor: "2.9", hacim: "2.9", yakit: "Benzin" }
    ],
    "II (2006-2016)": [
      { motor: "2.0T", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.4 D5", hacim: "2.4", yakit: "Dizel" }
    ]
  },

  // --- S90 ---
  "S90": {
    "II (2016-2025)": [
      { motor: "2.0 T6", hacim: "2.0", yakit: "Benzin" },
      { motor: "Recharge Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  // --- V40 ---
  "V40": {
    "I (2012-2019)": [
      { motor: "1.6 T3", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 D3", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- V60 ---
  "V60": {
    "I (2010-2018)": [
      { motor: "1.6 T4", hacim: "1.6", yakit: "Benzin" },
      { motor: "2.0 D4", hacim: "2.0", yakit: "Dizel" }
    ],
    "II (2018-2025)": [
      { motor: "2.0 T6", hacim: "2.0", yakit: "Benzin" },
      { motor: "Recharge Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  // --- V70 ---
  "V70": {
    "I (1996-2000)": [
      { motor: "2.5", hacim: "2.5", yakit: "Benzin" }
    ],
    "II (2000-2007)": [
      { motor: "2.4", hacim: "2.4", yakit: "Benzin" },
      { motor: "2.4 D5", hacim: "2.4", yakit: "Dizel" }
    ],
    "III (2007-2016)": [
      { motor: "2.0 D4", hacim: "2.0", yakit: "Dizel" }
    ]
  },

  // --- XC40 ---
  "XC40": {
    "I (2018-2025)": [
      { motor: "1.5 T3", hacim: "1.5", yakit: "Benzin" },
      { motor: "Recharge EV", hacim: "EV", yakit: "Elektrik" }
    ]
  },

  // --- XC60 ---
  "XC60": {
    "I (2008-2017)": [
      { motor: "2.0 T5", hacim: "2.0", yakit: "Benzin" },
      { motor: "2.4 D5", hacim: "2.4", yakit: "Dizel" }
    ],
    "II (2017-2025)": [
      { motor: "2.0 T6", hacim: "2.0", yakit: "Benzin" },
      { motor: "Recharge Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  },

  // --- XC90 ---
  "XC90": {
    "I (2002-2014)": [
      { motor: "2.5 T", hacim: "2.5", yakit: "Benzin" },
      { motor: "2.4 D5", hacim: "2.4", yakit: "Dizel" }
    ],
    "II (2015-2025)": [
      { motor: "2.0 T6", hacim: "2.0", yakit: "Benzin" },
      { motor: "Recharge Hybrid", hacim: "2.0", yakit: "Hibrit" }
    ]
  }
};
