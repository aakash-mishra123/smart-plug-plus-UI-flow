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
