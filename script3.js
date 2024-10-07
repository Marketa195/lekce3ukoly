const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  apartment.status = 'taken'


document.body.innerHTML += "<P>Dispozice bytu: " + apartment.disposition + "</p>"
document.body.innerHTML += "<P>Čistý nájem: " + apartment.price.rent + " CZK" + "</p>"
document.body.innerHTML += "<P>Výměra bytu: " + (apartment.area.floorage + apartment.area.balcony) + " metrů čtverečních." + "</p>"

const mesto = apartment.city
const mestskaCast = apartment.district
const novyStatus = apartment.status

document.body.innerHTML += "<p>Město: " + mesto + "</p>"
document.body.innerHTML += "<p>Městská část: " + mestskaCast + "</p>"

document.body.innerHTML += "<p>Aktuální stav: " + novyStatus + "</p>"

