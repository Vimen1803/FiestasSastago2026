// Datos del programa de Fiestas de San Roque y la Virgen de Montler — Sástago 2026
// Del 13 al 18 de agosto. Editar aquí para actualizar cualquier acto.

export const TOWN = 'Sástago';

// --- Ubicaciones reales (lat, lng) resueltas a partir de los enlaces de Google Maps ---
const PLACES = {
  polideportivo: { label: 'Polideportivo Municipal', lat: 41.3242201, lng: -0.3448996 },
  petanca: { label: 'Pistas de petanca', lat: 41.32221, lng: -0.345418 },
  plazaAyuntamiento: { label: 'Plaza Ramón y Cajal / Ayuntamiento', lat: 41.321422, lng: -0.354861 },
  peña35: { label: 'Peña "35 ½" (Calle del Medio)', lat: 41.321284, lng: -0.351136 },
  plazaDiputacion: { label: 'Plaza de la Diputación / de los Arcos', lat: 41.321689, lng: -0.352424 },
  ermita: { label: 'Ermita de Ntra. Sra. de Montler', lat: 41.340508, lng: -0.3275932 },
  caminoErmita: { label: 'Camino de la Ermita desde el Puente', lat: 41.319545, lng: -0.339862 },
  basculaAntigua: { label: 'Antigua báscula', lat: 41.322826, lng: -0.343642 },
  iglesia: { label: 'Iglesia', lat: 41.3213747, lng: -0.3543105 },
  placetaFarmacia: { label: 'Placeta de la Farmacia', lat: 41.321454, lng: -0.353169 },
  residencia: { label: 'Residencia Luis Carlos Piquer', lat: 41.321543, lng: -0.354855 },
  hogarJubilado: { label: 'Hogar del Jubilado', lat: 41.321752, lng: -0.352536 },
  fronton: { label: 'Pista de frontón', lat: 41.323904, lng: -0.341846 },
  peñaPolvoLoco: { label: 'Peña "Polvo Loco" (Calle del Medio)', lat: 41.3221641, lng: -0.3490678 },
  barLaMartina: { label: 'Bar "La Martina"', lat: 41.3216018, lng: -0.3528749 },
  pabellonFestejos: { label: 'Pabellón de Festejos', lat: 41.324669, lng: -0.341648 },
  campoFutbol: { label: 'Campo de Fútbol "El Royo"', lat: 41.3246581, lng: -0.3434493 },
  peñaNacional3: { label: 'Peña "Nacional III" (C. Ramón Artigas)', lat: 41.3238686, lng: -0.3447983 },
  institutoCalderete: { label: 'Puerta del instituto', lat: 41.3231887, lng: -0.3455881 },
  // Pendiente: el enlace de la piscina municipal no se pudo resolver todavía (link roto).
  // En cuanto llegue el correcto, rellenar lat/lng aquí y listo.
  piscina: { label: 'Piscina Municipal', lat: 41.3240405, lng: -0.3430078 },
};

function loc(key) {
  const p = PLACES[key];
  if (!p) throw new Error(`Ubicación desconocida: ${key}`);
  if (p.lat == null || p.lng == null) {
    // Fallback temporal: sin coordenadas todavía, buscamos por nombre + Sástago
    const q = encodeURIComponent(`${p.label}, ${TOWN}, Zaragoza`);
    return {
      place: p.label,
      embedSrc: `https://www.google.com/maps?q=${q}&z=18&output=embed`,
      linkHref: `https://www.google.com/maps/search/?api=1&query=${q}`,
    };
  }
  return {
    place: p.label,
    embedSrc: `https://www.google.com/maps?q=${p.lat},${p.lng}&z=18&output=embed`,
    linkHref: `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`,
  };
}

// Para actos "por todo el pueblo" sin ubicación fija: no se muestra mapa.
function noMap(label) {
  return { place: label, embedSrc: null, linkHref: null };
}

export const DAYS = [
  {
    day: 13,
    weekday: 'Jueves',
    tag: 'Prefiestas',
    dateLabel: '13 de agosto',
    events: [
      {
        time: '18:00',
        title: 'Torneo interpeñas de fútbol sala',
        description:
          'En el Pabellón de Deportes, ambientado con música y barra. Organizado y patrocinado por el Club Sala Sástago. Para apuntarse, se enviará un mensaje a través del Instagram @e.s.salasastago.',
        ...loc('polideportivo'),
      },
    ],
  },
  {
    day: 14,
    weekday: 'Viernes',
    tag: null,
    dateLabel: '14 de agosto',
    events: [
      {
        time: '9:00',
        title: 'Campeonato de petanca',
        description:
          'En las pistas locales, organizado por la Asociación de Petanca. Se repartirá chocolate y raspao, organizado por la Peña "Ni + Ni -". Premio patrocinado por Elena Tremps, colaboradora del Banco Santander.',
        ...loc('petanca'),
      },
      {
        time: '12:00',
        title: 'Pregón, Puesta del Pañuelo y Chupinazo',
        description:
          'Comienzo de las fiestas con la Pregonera/o 2026 Pedro Miguel Aznar, en el balcón del ayuntamiento. Continuamos con la Puesta del Pañuelo y el tradicional Chupinazo, primer acto del concurso "No me pierdo ni 1". Amenizado por la Charanga "El Empujón", con recorrido por el pueblo acompañados de los cabezudos en colaboración con la Peña "Ni + Ni -".',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '16:00',
        title: 'Tradicional Mojadina y Fiesta de la Espuma',
        description:
          'En la Plaza Ramón y Cajal. Se ruega a vecinos y visitantes que ese día se dejen libres de coches la Plaza Ramón y Cajal y la Calle San Miguel desde las 9:00 h.',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '17:00',
        title: 'I Concurso Internacional de Gorros de Baño',
        description:
          'Venid con vuestros gorros de baño tuneados a la zona de la Mojadina. Premio patrocinado por Ferretería Barceló.',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '17:30',
        title: 'Concurso de Traineras',
        description:
          'En la Plaza Ramón y Cajal, organizado por la Peña "El Desnivel". Premio patrocinado por ESMAS.',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '18:00',
        title: 'Discurso de las Majas 2026',
        description:
          'En el balcón del ayuntamiento. A continuación, desfile de carrozas por la localidad, acompañados por la Charanga "El Empujón".',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '23:15',
        title: 'Primera charanga de fiestas',
        description:
          'Acompañada de los cabezudos en colaboración de la Peña "Ni + Ni -" y la Charanga "El Empujón". La salida será desde la Peña "35 ½", en la Calle del Medio.',
        ...loc('peña35'),
      },
      {
        time: '00:30',
        title: 'Sesión de Baile — Orquesta "Titanes Show"',
        description:
          'En la Plaza de la Diputación. En el descanso, entrega del premio del Torneo Interpeñas y del Concurso de Traineras, y bingo en beneficio del Club Trail Sástago. Al finalizar, Discomóvil a cargo de DJ Erik Romero.',
        ...loc('plazaDiputacion'),
      },
    ],
  },
  {
    day: 15,
    weekday: 'Sábado',
    tag: null,
    dateLabel: '15 de agosto',
    events: [
      {
        time: '6:00',
        title: 'Salida de la Virgen de Montler',
        description: 'Desde la ermita, por el camino tradicional.',
        ...loc('ermita'),
      },
      {
        time: '6:30',
        title: 'Reparto de chocolate y raspao',
        description: 'Para almorzar, en la antigua báscula. Organizado por la Peña "Pa q +".',
        ...loc('basculaAntigua'),
      },
      {
        time: '7:00',
        title: 'Procesión de la Virgen de Montler',
        description:
          'Acompañando a la Virgen desde el puente hasta la iglesia, junto a la Charanga "El Empujón".',
        ...loc('caminoErmita'),
      },
      {
        time: '8:00',
        title: 'Misa aragonesa',
        description:
          'En honor a nuestra señora Virgen de Montler, acompañados por el coro parroquial.',
        ...loc('iglesia'),
      },
      {
        time: '19:00',
        title: 'VI Recorrido de Peñas',
        description:
          'Acompañados por Batukada Sambala y la Charanga "El Empujón". Se entregará premio a la parada más original, patrocinado por Carnicería Miguel Barceló. Salida en la Placeta de la Farmacia.',
        ...loc('placetaFarmacia'),
      },
      {
        time: '21:30',
        title: 'Cena popular',
        description:
          'Al finalizar el recorrido, en la Plaza de la Diputación. Se repartirán bocadillos a cambio del ticket adquirido previamente, amenizado por la Charanga y DJ Funes "El Yayo".',
        ...loc('plazaDiputacion'),
      },
      {
        time: '23:00',
        title: 'Sesión de baile — Orquesta "La Fania"',
        description:
          'En el descanso, BINGO de 1.000 € en beneficio de la Comisión 2026. Al finalizar, Discomóvil a cargo de DJ Nerea Lucky.',
        ...loc('plazaDiputacion'),
      },
    ],
  },
  {
    day: 16,
    weekday: 'Domingo',
    tag: null,
    dateLabel: '16 de agosto',
    events: [
      {
        time: '7:00',
        title: 'Almuerzo con huevos fritos',
        description: 'En la antigua báscula, organizado por la Peña "Euralita".',
        ...loc('basculaAntigua'),
      },
      {
        time: '12:00',
        title: 'Misa y Procesión en honor a San Roque',
        description:
          'Acudiremos ataviados con el traje regional y acompañados por la Charanga "El Empujón".',
        ...loc('iglesia'),
      },
      {
        time: '13:00',
        title: 'Homenaje a nuestros mayores',
        description: 'En el salón de actos de la residencia Luis Carlos Piquer.',
        ...loc('residencia'),
      },
      {
        time: '13:30',
        title: 'Vermut Popular',
        description:
          'En el mirador de la Plaza Ramón y Cajal, organizado por Bar/Restaurante "Monasterio de Rueda".',
        ...loc('plazaAyuntamiento'),
      },
      {
        time: '15:30',
        title: 'Concurso de Rabino',
        description:
          'En el hogar de los Jubilados, organizado por la Peña "FDJ" y patrocinado por la Asociación de la Tercera Edad. Las inscripciones comienzan a las 15:30 h y el campeonato empieza a las 16:00 h.',
        ...loc('hogarJubilado'),
      },
      {
        time: '16:00',
        title: 'Concurso de Tiro de Carabina',
        description:
          'En la pista de frontón, organizado por Rafael Espinosa y patrocinado por Armería Liso.',
        ...loc('fronton'),
      },
      {
        time: '17:30',
        title: 'Concurso de Tripadas',
        description: 'En la Piscina Municipal. Premio patrocinado por Carnicería Conchita Yuste.',
        ...loc('piscina'),
      },
      {
        time: '19:00',
        title: 'Festival de Jota',
        description:
          'A cargo de Ángela Aured y Alberto Remiro, profesores de la escuela de canto local, en la Plaza de la Diputación.',
        ...loc('plazaDiputacion'),
      },
      {
        time: '20:30',
        title: 'Piscolabis',
        description:
          'Organizado por la Comisión de Festejos y elaborado por el Bar "La Martina", en la Calle del Carmen (Placeta de la Farmacia).',
        ...loc('placetaFarmacia'),
      },
      {
        time: '23:00',
        title: 'Segunda charanga de fiestas',
        description:
          'Con disfraces infantiles, con detalle patrocinado por Estanco Esther Catalán. Salida desde la Peña "Polvo Loco" en la Calle del Medio, amenizado por la Charanga "El Empujón" y los cabezudos.',
        ...loc('peñaPolvoLoco'),
      },
      {
        time: '00:00',
        title: 'Tributo "Leyendas del Pop"',
        description:
          'En la Plaza de la Diputación. Al finalizar, bingo en beneficio del Club Sala Sástago y Macrodiscomóvil a cargo de DJ Joker y DJ Zalaya.',
        ...loc('plazaDiputacion'),
      },
    ],
  },
  {
    day: 17,
    weekday: 'Lunes',
    tag: null,
    dateLabel: '17 de agosto',
    events: [
      {
        time: '6:30',
        title: 'Almuerzo con huevos fritos',
        description: 'En la antigua báscula, organizado por la Peña "El Deskoloke".',
        ...loc('basculaAntigua'),
      },
      {
        time: '14:00',
        title: 'Paella popular',
        description:
          'En el Pabellón de Festejos, a cambio del ticket adquirido previamente. Menú compuesto por paella, postre y bebida.',
        ...loc('pabellonFestejos'),
      },
      {
        time: '17:00',
        title: 'Camión discomóvil con barra',
        description:
          'Tarde brava en el campo de fútbol. A cargo del Bar de las Piscinas, zona de sombra habilitada.',
        ...loc('campoFutbol'),
      },
      {
        time: '18:00',
        title: 'Mojitada Popular',
        description: 'Tarde brava en el campo de fútbol.',
        ...loc('campoFutbol'),
      },
      {
        time: '18:30',
        title: 'Toros chiquis',
        description:
          'Para los más pequeños (y no tan pequeños), organizado por Ruedo Bravo. Tarde brava en el campo de fútbol.',
        ...loc('campoFutbol'),
      },
      {
        time: '18:30',
        title: '"Pica Pica"',
        description: 'En el mismo recinto, elaborado por el Bar "Las Piscinas".',
        ...loc('campoFutbol'),
      },
      {
        time: '19:00',
        title: 'Gymkhana Prix',
        description:
          'Organizado por Ruedo Bravo. Para participar en los juegos, los interesados deberán ser mayores de 16 años y acudir al acto antes del inicio del mismo. El número de equipos es limitado.',
        ...loc('campoFutbol'),
      },
      {
        time: '23:30',
        title: 'Tercera charanga de fiestas',
        description:
          'Salida desde la Peña "Nacional III" en la calle Ramón Artigas. Acompañados de la Charanga "El Empujón" y los cabezudos.',
        ...loc('peñaNacional3'),
      },
      {
        time: '00:30',
        title: 'Sesión de baile — Orquesta "La Fiesta"',
        description:
          'En el descanso, bingo en beneficio del Club Ciclista Sástago. Al finalizar, Discomóvil a cargo de DJ Alberto Legado.',
        ...loc('plazaDiputacion'),
      },
    ],
  },
  {
    day: 18,
    weekday: 'Martes',
    tag: null,
    dateLabel: '18 de agosto',
    events: [
      {
        time: '7:00',
        title: 'Almuerzo de bocadillos',
        description: 'En la Plaza de la Diputación, organizado por la Peña "FDJ".',
        ...loc('plazaDiputacion'),
      },
      {
        time: '11:00',
        title: 'Reparto de panes benditos',
        description: 'Por el municipio, acompañados por la Charanga "El Empujón".',
        ...noMap('Por todo el municipio'),
      },
      {
        time: '12:00–14:00',
        title: 'Parque infantil acuático-terrestre',
        description: 'En las inmediaciones de la piscina municipal, a cargo de Ruedo Bravo.',
        ...loc('piscina'),
      },
      {
        time: '15:30',
        title: 'Concurso de Guiñote',
        description: 'En el Bar "La Martina". Premio patrocinado por el Bar "La Martina".',
        ...loc('barLaMartina'),
      },
      {
        time: '17:00–19:00',
        title: 'Continúa el parque infantil acuático-terrestre',
        description: 'En las inmediaciones de la piscina municipal.',
        ...loc('piscina'),
      },
      {
        time: '19:00',
        title: 'Reparto de alimentos para el Tradicional Calderete',
        description:
          'En la puerta del instituto. Los alimentos solo se repartirán a las cuadrillas que realicen el calderete en las inmediaciones del instituto; se proporcionarán tablones para que no tengáis que traer mesas.',
        ...loc('institutoCalderete'),
      },
      {
        time: '20:00',
        title: 'Concurso de sangría',
        description:
          'Mientras elaboramos nuestros calderetes, realizaremos una cata de sangrías en la que la mejor obtendrá un premio patrocinado por Coaliment Monserrat Anglés.',
        ...loc('institutoCalderete'),
      },
      {
        time: '21:30',
        title: 'Concurso de calderete',
        description:
          'Premio patrocinado por PP Sástago. Este será el último acto que cuente para el concurso "No me pierdo ni 1".',
        ...loc('institutoCalderete'),
      },
      {
        time: '00:00',
        title: 'Gran espectáculo de Fuegos Artificiales',
        description:
          'En el campo de fútbol. Al finalizar iremos a la Plaza de la Diputación acompañados por la Charanga "El Empujón".',
        ...loc('campoFutbol'),
      },
      {
        time: '00:45',
        title: 'Última noche de Discomóvil',
        description:
          'A cargo de DJ Catadani. Se hará entrega del premio del concurso "No me pierdo ni 1". También se dará un obsequio a todas las peñas colaboradoras durante las fiestas. Para dar fin a las fiestas, gran traca, siguiendo después con la continuación de la discomóvil.',
        ...loc('plazaDiputacion'),
      },
    ],
  },
];

export function getDay(dayNumber) {
  return DAYS.find((d) => d.day === Number(dayNumber));
}
