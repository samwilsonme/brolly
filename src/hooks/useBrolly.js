// This function generates messages based on the weather data and time of day
// Replace with calls to fetch messages from backend database in the future
export function getBrollyMessage(weatherData) {
  const id = weatherData.weather[0].id;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const now = weatherData.dt;

  const isDaytime = now > sunrise && now < sunset;

  const daytimeMessages = {
    // Thunderstorm
    200: `A rumble and a bit of a sprinkle. A classic British 'surprise'.`,
    201: `Bit more than a spit and spot now, a proper thunderstorm with rain.`,
    202: `Crikey, a heavy thunderstorm! Sounds like the heavens are really having a go.`,
    210: `Just a light rumble and a bit of a show.`,
    211: `A proper thunderstorm brewing. Best keep an eye on the sky!`,
    212: `Heavy thunderstorm alert! Sounds a bit dramatic, doesn't it?`,
    221: `A raggedy old thunderstorm, still packing a punch though.`,
    230: `Thunder with a light drizzle. Bit of a weird one, that.`,
    231: `Thunder and drizzle. A bit of a dampener, literally.`,
    232: `Thunder with heavy drizzle. That's a proper soaking if you're not careful.`,

    // Drizzle
    300: [
      `Just a light intensity drizzle. Barely enough to notice... until you realise you're a bit damp.`,
      `A fine mist of drizzle. The kind that gets right into your bones.`
    ],
    301: [
      `A standard drizzle. Enough to make the pavements gleam and your hair frizz.`,
      `Just 'drizzle', they say. Don't be fooled, it's determined to make you slightly uncomfortable.`
    ],
    302: [
      `Heavy intensity drizzle. That's practically rain in disguise.`,
      `More of a persistent soaking than a drizzle, really.`
    ],
    310: [
      `Light intensity drizzle rain. A right old mix! Best to be prepared for a bit of dampness.`,
      `A bit of light drizzle with some rain thrown in for good measure. You know how it is.`
    ],
    311: [
      `Drizzle and rain together. The classic British wet weather combo.`,
      `A steady mix of drizzle and rain. Perfect for staying indoors with a cuppa.`
    ],
    312: [
      `Heavy intensity drizzle rain. That's a proper soaking waiting to happen.`,
      `More like a downpour disguised as drizzle.`
    ],
    313: [
      `Shower rain and drizzle. A bit of everything, then?`,
      `On-again, off-again with the showers and drizzle. You might get lucky, but probably not.`
    ],
    314: [
      `Heavy shower rain and drizzle. Sounds like a right old mess out there!`,
      `That's a proper deluge of showers and drizzle.`
    ],
    321: [
      `Shower drizzle. One of those annoying little bursts of dampness.`,
      `Just a little bit of drizzle. Might clear up quickly... or not.`
    ],

    // Rain
    500: [
      `Just a bit of light rain. Barely enough to ruffle your feathers.`,
      `A gentle shower of light rain. The kind that makes the roses happy (and you slightly damp).`
    ],
    501: [
      `Moderate rain. Enough to make you think twice about that walk.`,
      `A steady bit of rain. Not torrential, but enough to soak you through eventually.`
    ],
    502: [
      `Heavy intensity rain! That's a proper downpour.`,
      `Right, the heavens have well and truly opened.`
    ],
    503: [
      `Very heavy rain! Blimey, it's really coming down in stair rods!`,
      `That's more like a waterfall than rain!`
    ],
    504: [
      `Extreme rain! This is biblical stuff.`,
      `Crikey, the weather's gone properly mad! That's an awful lot of rain.`
    ],
    511: [
      `Freezing rain! Treacherous conditions out there. Ice and wet – a delightful combo.`,
      `That's icy rain, folks. Be very careful if you're out and about, it'll be slippy!`
    ],
    520: [
      `Light intensity shower rain. A brief little burst, hopefully.`,
      `Just a light shower passing through. Might not even get you properly wet.`
    ],
    521: [
      `Shower rain. Could be a quick one, could linger.`,
      `A bit of shower rain about. Might get caught in it if you're unlucky.`
    ],
    522: [
      `Heavy intensity shower rain. Sounds like a proper soaking if you get caught in that downpour!`,
      `That's a hefty shower!`
    ],
    531: [
      `Ragged shower rain. On and off, a bit unpredictable.`,
      `One of those messy, intermittent showers. You might dodge it, you might not.`
    ],

    // Snow
    600: `Light snow falling. Looks a bit picturesque, doesn't it? Wrap up warm!`,
    601: `It's snowing! Proper snow now. Time for some winter fun (and maybe a shovel later).`,
    602: `Heavy snow! Looks like a proper whiteout out there. Take it easy if you're travelling.`,
    611: `Sleet. That lovely mix of rain and snow that's just generally unpleasant. Take care on the roads.`,
    612: `Light shower sleet. A brief flurry of the messy stuff.`,
    613: `Shower sleet. One of those icy bursts. Not the nicest!`,
    615: `Light rain and snow. A bit of a wintry mix. Keep warm!`,
    616: `Rain and snow. Proper messy conditions. Take it easy out there.`,
    620: `Light shower snow. Just a little flurry, might not last.`,
    621: `Shower snow. A bit more persistent than a flurry.`,
    622: `Heavy shower snow. Could accumulate quickly!`,

    // Other conditions
    701: `Mist in the air. Makes everything look a bit eerie. Drive carefully.`,
    711: `Smoky conditions reported. Keep those windows closed!`,
    721: `Hazy today. Makes the sunshine look a bit odd.`,
    731: `Dusty/sandy conditions. Might want to keep the windows shut and perhaps wear a mask if you're sensitive.`,
    741: `Foggy as pea soup! Can barely see a thing. Take it very slow if you're out and about.`,
    751: `Sand in the air! A bit unusual for the UK. Might want to protect your eyes.`,
    761: `Dusty/sandy conditions. Might want to keep the windows shut and perhaps wear a mask if you're sensitive.`,
    762: `Volcanic ash reported. Best to stay indoors and follow any local advice.`,
    771: `Squalls reported. Sounds a bit dramatic! Expect sudden increases in wind speed.`,
    781: `Tornado! Right, that's serious. Seek shelter immediately and follow safety guidelines!`,

    // Clear and clouds
    800: [
      `Clear sky! Get out there and soak up that rare British sunshine.`,
      `Lovely clear skies. Makes a change, doesn't it?`
    ],
    801: [
      `A few clouds dotted about. Nothing to worry about just yet.`,
      `Patches of blue with a smattering of clouds. Could be a decent day after all!`
    ],
    802: [
      `Scattered clouds. Could brighten up, could cloud over more. The suspense!`,
      `More clouds than blue sky, but nothing too ominous... yet.`
    ],
    803: [
      `Broken clouds. Looks a bit grey, doesn't it?`,
      `Broken clouds. Looks like the sky's having a bit of a patchy moment.`
    ],
    804: [
      `Overcast clouds. Solid grey sky. Don't expect much sunshine today.`,
      `Overcast clouds. Looks like the sky's put its grumpy face on this morning.`
    ],
    default: `The weather is doing its thing... whatever that is. Best to have a look outside!`
  };

  const nighttimeMessages = {
    // Thunderstorm
    200: `A rumble and a bit of a sprinkle in the dark. Hope it doesn't wake the neighbours!`,
    201: `Bit more than a spit and spot now, a proper thunderstorm with rain at night.`,
    202: `Crikey, a heavy thunderstorm at night! Sounds like the monsters are having a party.`,
    210: `Just a light rumble and a bit of a light show in the night sky.`,
    211: `A proper thunderstorm brewing in the dark. Best stay tucked up in bed!`,
    212: `Heavy thunderstorm alert at night! Sounds a bit dramatic for bedtime, doesn't it?`,
    221: `A raggedy old thunderstorm rumbling through the night.`,
    230: `Thunder with a light drizzle in the dark. A bit of a spooky mix.`,
    231: `Thunder and drizzle at night. A bit of a dampener on any late-night strolls.`,
    232: `Thunder with heavy drizzle in the dark. That's a proper soaking if you're out and about.`,

    // Drizzle
    300: [
      `Just a light intensity drizzle in the night. Barely enough to notice... until your pyjamas feel a bit damp.`,
      `A fine mist of drizzle in the dark. The kind that makes everything feel a bit clammy.`
    ],
    301: [
      `A standard drizzle at night. Enough to make the streets gleam under the streetlights.`,
      `Just 'drizzle' they say, even in the dark. Still determined to make things slightly uncomfortable.`
    ],
    302: [
      `Heavy intensity drizzle at night. That's practically rain while you're trying to sleep.`,
      `More of a persistent soaking than a drizzle in the darkness, really.`
    ],
    310: [
      `Light intensity drizzle rain at night. A right old mix! Hope it doesn't keep you awake.`,
      `A bit of light drizzle with some rain in the dark. You know how it is, even at night.`
    ],
    311: [
      `Drizzle and rain together at night. The classic British wet weather combo, even after dark.`,
      `A steady mix of drizzle and rain in the night. Perfect for staying indoors with a hot chocolate.`
    ],
    312: [
      `Heavy intensity drizzle rain at night. That's a proper soaking waiting to happen while you're dreaming.`,
      `More like a downpour disguised as drizzle in the darkness.`
    ],
    313: [
      `Shower rain and drizzle at night. A bit of everything, even when it's dark?`,
      `On-again, off-again with the showers and drizzle in the night. You might get lucky and stay dry... until the next one.`
    ],
    314: [
      `Heavy shower rain and drizzle at night. Sounds like a right old mess out there while you're sleeping!`,
      `That's a proper deluge of showers and drizzle in the darkness.`
    ],
    321: [
      `Shower drizzle at night. One of those annoying little bursts of dampness in the dark.`,
      `Just a little bit of drizzle in the night. Might clear up quickly... or not, it's hard to tell in the dark.`
    ],

    // Rain
    500: [
      `Just a bit of light rain at night. Barely enough to hear on the roof.`,
      `A gentle shower of light rain in the dark. The kind that makes the streets glisten under the moonlight.`
    ],
    501: [
      `Moderate rain at night. Enough to make you glad you're indoors.`,
      `A steady bit of rain in the darkness. Not torrential, but enough to make everything properly wet by morning.`
    ],
    502: [
      `Heavy intensity rain at night! That's a proper downpour while you're trying to sleep.`,
      `Right, the heavens have well and truly opened in the dead of night.`
    ],
    503: [
      `Very heavy rain at night! Blimey, it's really coming down in stair rods outside!`,
      `That's more like a waterfall than rain in the darkness!`
    ],
    504: [
      `Extreme rain at night! This is biblical stuff happening outside your window.`,
      `Crikey, the weather's gone properly mad in the dark! That's an awful lot of rain.`
    ],
    511: [
      `Freezing rain at night! Treacherous conditions if you're out. Ice and wet – a delightful nighttime combo.`,
      `That's icy rain in the dark, folks. Be very careful if you have to venture out, it'll be slippy!`
    ],
    520: [
      `Light intensity shower rain at night. A brief little burst, hopefully it won't last long.`,
      `Just a light shower passing through in the night. Might not even properly wet the ground by morning.`
    ],
    521: [
      `Shower rain at night. Could be a quick one, could linger until morning.`,
      `A bit of shower rain about in the dark. Might get caught in it if you're unlucky enough to be out.`
    ],
    522: [
      `Heavy intensity shower rain at night. Sounds like a proper soaking if you get caught in that downpour!`,
      `That's a hefty shower in the middle of the night!`
    ],
    531: [
      `Ragged shower rain at night. On and off, a bit unpredictable in the darkness.`,
      `One of those messy, intermittent showers in the night. You might wake up to puddles, you might not.`
    ],

    // Snow
    600: `Light snow falling at night. Looks a bit magical under the streetlights. Wrap up warm if you're out!`,
    601: `It's snowing at night! Proper snow now. Time for some quiet winter magic.`,
    602: `Heavy snow at night! Looks like a proper whiteout outside. Take it easy if you're travelling in the morning.`,
    611: `Sleet at night. That lovely mix of rain and snow that's just generally unpleasant, even in the dark. Take care on the roads in the morning.`,
    612: `Light shower sleet at night. A brief flurry of the messy stuff.`,
    613: `Shower sleet at night. One of those icy bursts. Not the nicest way to end the day!`,
    615: `Light rain and snow at night. A bit of a wintry mix. Keep warm if you're out!`,
    616: `Rain and snow at night. Proper messy conditions. Take it easy if you're out and about.`,
    620: `Light shower snow at night. Just a little flurry, might not last until morning.`,
    621: `Shower snow at night. A bit more persistent than a flurry.`,
    622: `Heavy shower snow at night. Could accumulate quickly while you're sleeping!`,

    // Other conditions
    701: `Mist in the air tonight. Makes everything look a bit ghostly under the streetlights. Drive carefully if you're out.`,
    711: `Smoky conditions reported tonight. Keep those windows closed while you sleep!`,
    721: `Hazy tonight. Makes the moon look a bit odd.`,
    731: `Dusty/sandy conditions tonight. Might want to keep the windows shut overnight.`,
    741: `Foggy as pea soup tonight! Can barely see a thing. Take it very slow if you're out and about.`,
    751: `Sand in the air tonight! A bit unusual for the UK at night.`,
    761: `Dusty/sandy conditions tonight. Might want to keep the windows shut overnight.`,
    762: `Volcanic ash reported tonight. Best to stay indoors and follow any local advice.`,
    771: `Squalls reported tonight. Sounds a bit dramatic! Expect sudden increases in wind speed.`,
    781: `Tornado! Right, that's serious. Seek shelter immediately and follow safety guidelines!`,

    // Clear and clouds
    800: [
      `Clear sky tonight! Perfect for stargazing.`,
      `Lovely clear skies tonight. Makes a change, doesn't it?`
    ],
    801: [
      `A few clouds dotted about tonight. Nothing to worry about just yet.`,
      `Patches of clear sky with a smattering of clouds tonight. Could be a decent night after all!`
    ],
    802: [
      `Scattered clouds tonight. Could stay clear, could cloud over more. The suspense!`,
      `More clouds than clear sky tonight, but nothing too ominous... yet.`
    ],
    803: [
      `Broken clouds tonight. Looks a bit grey, even in the dark, doesn't it?`,
      `Broken clouds tonight. Enough to make it feel a bit moody, but not a total blackout.`
    ],
    804: [
      `Overcast clouds tonight. Solid grey sky. Don't expect much moonlight.`,
      `Overcast clouds tonight. A solid blanket of grey up there. The moon's gone into hiding.`
    ],
    default: `The weather is doing its thing tonight... whatever that is. Best to have a peek out the window before bed!`
  };

  const getMessage = (messages) => {
    if (Array.isArray(messages)) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
    return messages;
  };

  const message = isDaytime ? daytimeMessages[id] : nighttimeMessages[id];
  return message ? getMessage(message) : (isDaytime ? daytimeMessages.default : nighttimeMessages.default);
};