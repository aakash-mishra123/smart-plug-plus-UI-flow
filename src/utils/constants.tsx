export const barChartData = [
  {
    id: 0,
    data: { //red prog bar
      "date": "2024-01-22",
      powerUsage: 58,
      maxPower: 3,
      limitPower: 2.5,
      "totalConsumption": 26.155,
      "averageConsumption": 4.2,
      "peakConsumption": 6.1,
      "peakTime": "13:00-14:00",
    },
    "detailedConsumption": {
      "timeRange": "10:00-11:00",
      "average": 2.8,
      "quarterlyData": [
        { "time": "10:00-10:15", "value": 1.2 },
        { "time": "10:15-10:30", "value": 4.1 },
        { "time": "10:30-10:45", "value": 3.3 },
        { "time": "10:45-11:00", "value": 1.2 }
      ]
    }
  },
  {
    id: 1,
    data: { //red prog bar
      "date": "2024-01-22",
      powerUsage: 35,
      maxPower: 3,
      limitPower: 2.5,
      "totalConsumption": 26.155,
      "averageConsumption": 4.2,
      "peakConsumption": 6.1,
      "peakTime": "13:00-14:00",
    },
    "detailedConsumption": {
      "timeRange": "10:00-11:00",
      "average": 2.8,
      "quarterlyData": [
        { "time": "10:00-10:15", "value": 1.2 },
        { "time": "10:15-10:30", "value": 4.1 },
        { "time": "10:30-10:45", "value": 3.3 },
        { "time": "10:45-11:00", "value": 1.2 }
      ]
    }
  },
  {
    id: 2,
    data: { //red prog bar
      "date": "2024-01-22",
      powerUsage: 98,
      maxPower: 3,
      limitPower: 2.5,
      "totalConsumption": 26.155,
      "averageConsumption": 4.2,
      "peakConsumption": 6.1,
      "peakTime": "13:00-14:00",
    },
    "detailedConsumption": {
      "timeRange": "10:00-11:00",
      "average": 2.8,
      "quarterlyData": [
        { "time": "10:00-10:15", "value": 1.2 },
        { "time": "10:15-10:30", "value": 4.1 },
        { "time": "10:30-10:45", "value": 3.3 },
        { "time": "10:45-11:00", "value": 1.2 }
      ]
    }
  }
];

export const dummyUserData = {
  title: 'Luce',
  address: 'VIA ROMA 70 - 00041 ALBANO LAZIALE RM',
  clientNumber: '110163341',
  pod: 'IT001E60727485',
  activationDate: '01.02.2024',
  offer: 'ENERGIA PURA SPECIAL',
};


export const dummyAlertData = [
  {
    type: "success",
    message: "La tua potenza attuale è entro la soglia del tuo piano",
    bgColor: "bg-white",
    textColor: "text-green-600",
    borderColor: "border-green-500",
  },
  {
    type: "warning",
    message: "Stai raggiungendo il limite di utilizzo.",
    bgColor: "bg-[#faf0e6]",
    textColor: "text-orange-800",
    borderColor: "border-orange-500",
  },
  {
    type: "danger",
    message: "Hai superato il limite di utilizzo.",
    subMessage:
      "Riduci il consumo di energia elettrica per evitare l’interruzione della fornitura.",
    bgColor: "bg-[#ffe8e8]",
    textColor: "text-red-900",
    borderColor: "border-red-500",
  },
];

export const plugDummyData = {
  "status": {
    "icon": "error",
    "title": "Sembra che la tua presa plus non sia connessa!",
    "description": "Il dispositivo non riesce a completare la connessione."
  },
  "solution": {
    "title": "Come posso risolvere il problema?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  "steps": [
    {
      "id": 1,
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem."
    },
    {
      "id": 2,
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem."
    },
    {
      "id": 3,
      "title": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem."
    }
  ],
  "additional_help": {
    "title": "Non riesci a risolvere il problema?",
    "description": "Contatta l'assistenza cliccando sul pulsante ⓘ che si trova in alto a destra."
  }
}


export const timeTariffData = {
  "title": "Come funziona la tariffa a fasce?",
  "description": "Le tariffe di consumo a fasce si basano sulla suddivisione della giornata in diversi periodi orari, con costi variabili a seconda della fascia oraria in cui si utilizza l’energia. Ecco le principali distinzioni:",
  "tariff_bands": [
    {
      "name": "Fascia F1",
      "type": "ore di punta",
      "schedule": "Dal lunedì al venerdì, dalle 8:00 alle 19:00.",
      "description": "È la fascia con il costo più alto, poiché corrisponde ai momenti di maggior richiesta energetica."
    },
    {
      "name": "Fascia F2",
      "type": "ore intermedie",
      "schedule": "Dal lunedì al venerdì, dalle 7:00 alle 8:00 e dalle 19:00 alle 23:00; il sabato dalle 7:00 alle 23:00.",
      "description": "Tariffa intermedia, con un costo più basso rispetto alla F1 ma più alto della F3."
    },
    {
      "name": "Fascia F3",
      "type": "ore fuori punta",
      "schedule": "Dal lunedì al sabato, dalle 23:00 alle 7:00; domenica e festivi tutto il giorno.",
      "description": "Tariffa più economica, perché la domanda di energia è più bassa."
    }
  ],
  "button": {
    "text": "Ok, ho capito"
  }
}

export const FAQData = [
  "How do I change the Wi-Fi network to which the Plus socket is connected?",
  "How do the consumption bands work?",
  "What does it mean if the light does X or Y?",
  "Lorem ipsum dolor sit amet elit?",
  "What does it mean if the light does X or Y?"
]

export const dummyBarChartData = [
  {
    monthName: "January 2025",
    totalConsumption: "213, 35",
    data: [
      {
        "date": "01-02-2025",
        "powerIntervals": [
          {
            date: "09h-10h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "10h-11h",
            "interval_one": 1,
            "interval_two": 2,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "11h-12h",
            "interval_one": 4,
            "interval_two": 1,
            "interval_three": 2,
            "interval_four": 3
          },
          {
            date: "12h-13h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "13h-14h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "14h-15h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          }
        ]
      },
      {
        "date": "02-02-2025",
        "powerIntervals": [
          {
            date: "09h-10h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "10h-11h",
            "interval_one": 1,
            "interval_two": 2,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "11h-12h",
            "interval_one": 4,
            "interval_two": 1,
            "interval_three": 2,
            "interval_four": 3
          },
          {
            date: "12h-13h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "13h-14h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "14h-15h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          }
        ]
      },
      {
        "date": "03-02-2025",
        "powerIntervals": [
          {
            date: "09h-10h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "10h-11h",
            "interval_one": 1,
            "interval_two": 2,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "11h-12h",
            "interval_one": 4,
            "interval_two": 1,
            "interval_three": 2,
            "interval_four": 3
          },
          {
            date: "12h-13h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "13h-14h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "14h-15h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          }
        ]
      },
      {
        "date": "04-02-2025",
        "powerIntervals": [
          {
            date: "09h-10h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "10h-11h",
            "interval_one": 1,
            "interval_two": 2,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "11h-12h",
            "interval_one": 4,
            "interval_two": 1,
            "interval_three": 2,
            "interval_four": 3
          },
          {
            date: "12h-13h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "13h-14h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "14h-15h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          }
        ]
      },
      {
        "date": "05-02-2025",
        "powerIntervals": [
          {
            date: "09h-10h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "10h-11h",
            "interval_one": 1,
            "interval_two": 2,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "11h-12h",
            "interval_one": 4,
            "interval_two": 1,
            "interval_three": 2,
            "interval_four": 3
          },
          {
            date: "12h-13h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "13h-14h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          },
          {
            date: "14h-15h",
            "interval_one": 2,
            "interval_two": 4,
            "interval_three": 1,
            "interval_four": 3
          }
        ]
      }

      // Repeat for each day of January 2025
    ]
  },
