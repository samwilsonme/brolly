export function getBrollyAdvice(weatherData) {
  const main = weatherData.weather[0].main;

  switch (main) {
    case 'Thunderstorm':
      const thunderstormAdvice = [
        "Brolly essential!",
        "Definitely a brolly day.",
        "Don't leave without it!",
        "Brolly: your best mate."
      ];
      return thunderstormAdvice[Math.floor(Math.random() * thunderstormAdvice.length)];
    case 'Drizzle':
      const drizzleAdvice = [
        "Might need a brolly.",
        "Brolly could be handy.",
        "Consider a brolly.",
        "Perhaps a brolly?"
      ];
      return drizzleAdvice[Math.floor(Math.random() * drizzleAdvice.length)];
    case 'Rain':
      const rainAdvice = [
        "Grab the brolly!",
        "Brolly needed today.",
        "Definitely brolly weather.",
        "Brolly alert!"
      ];
      return rainAdvice[Math.floor(Math.random() * rainAdvice.length)];
    case 'Snow':
      const snowAdvice = [
        "Wrap up warm!",
        "Hat and gloves time.",
        "Keep snug!",
        "Layer up!"
      ];
      return snowAdvice[Math.floor(Math.random() * snowAdvice.length)];
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Sand':
    case 'Fog':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return "Stay safe indoors!"; // Generic for less common, non-rainy hazards
    case 'Clear':
      const clearAdvice = [
        "Sun's out!",
        "Lovely and clear.",
        "Enjoy the sunshine!",
        "Shades might be good."
      ];
      return clearAdvice[Math.floor(Math.random() * clearAdvice.length)];
    case 'Clouds':
      const cloudsAdvice = [
        "Could stay dry...",
        "No brolly required... yet",
        "Keep an eye on it...",
        "Looking good for now."
      ];
      return cloudsAdvice[Math.floor(Math.random() * cloudsAdvice.length)];
    default:
      return "Weather's doing its thing...";
  }
};


export function getBrollyMessage(weatherData) {
  const id = weatherData.weather[0].id;
  const main = weatherData.weather[0].main;
  const description = weatherData.weather[0].description;

  switch (id) {
    // Thunderstorm
    case 200:
      return `A rumble and a bit of a sprinkle. A classic British summer 'surprise'.`;
    case 201:
      return `Bit more than a spit and spot now, a proper thunderstorm with rain.`;
    case 202:
      return `Crikey, a heavy thunderstorm! Sounds like the heavens are really having a go.`;
    case 210:
      return `Just a light rumble and a bit of a show.`;
    case 211:
      return `A proper thunderstorm brewing. Best keep an eye on the sky!`;
    case 212:
      return `Heavy thunderstorm alert! Sounds a bit dramatic, doesn't it?`;
    case 221:
      return `A raggedy old thunderstorm, still packing a punch though.`;
    case 230:
      return `Thunder with a light drizzle. Bit of a weird one, that.`;
    case 231:
      return `Thunder and drizzle. A bit of a dampener, literally.`;
    case 232:
      return `Thunder with heavy drizzle. That's a proper soaking if you're not careful.`;

    // Drizzle
    case 300:
      const lightIntensityDrizzleMessages = [
        `Just a light intensity drizzle. Barely enough to notice... until you realise you're a bit damp.`,
        `A fine mist of drizzle. The kind that gets right into your bones.`
      ];
      return lightIntensityDrizzleMessages[Math.floor(Math.random() * lightIntensityDrizzleMessages.length)];
    case 301:
      const drizzleMessages = [
        `A standard drizzle. Enough to make the pavements gleam and your hair frizz.`,
        `Just 'drizzle', they say. Don't be fooled, it's determined to make you slightly uncomfortable.`
      ];
      return drizzleMessages[Math.floor(Math.random() * drizzleMessages.length)];
    case 302:
      const heavyIntensityDrizzleMessages = [
        `Heavy intensity drizzle. That's practically rain in disguise.`,
        `More of a persistent soaking than a drizzle, really.`
      ];
      return heavyIntensityDrizzleMessages[Math.floor(Math.random() * heavyIntensityDrizzleMessages.length)];
    case 310:
      const lightIntensityDrizzleRainMessages = [
        `Light intensity drizzle rain. A right old mix! Best to be prepared for a bit of dampness.`,
        `A bit of light drizzle with some rain thrown in for good measure. You know how it is.`
      ];
      return lightIntensityDrizzleRainMessages[Math.floor(Math.random() * lightIntensityDrizzleRainMessages.length)];
    case 311:
      const drizzleRainMessages = [
        `Drizzle and rain together. The classic British wet weather combo.`,
        `A steady mix of drizzle and rain. Perfect for staying indoors with a cuppa.`
      ];
      return drizzleRainMessages[Math.floor(Math.random() * drizzleRainMessages.length)];
    case 312:
      const heavyIntensityDrizzleRainMessages = [
        `Heavy intensity drizzle rain. That's a proper soaking waiting to happen.`,
        `More like a downpour disguised as drizzle.`
      ];
      return heavyIntensityDrizzleRainMessages[Math.floor(Math.random() * heavyIntensityDrizzleRainMessages.length)];
    case 313:
      const showerRainAndDrizzleMessages = [
        `Shower rain and drizzle. A bit of everything, then?`,
        `On-again, off-again with the showers and drizzle. You might get lucky, but probably not.`
      ];
      return showerRainAndDrizzleMessages[Math.floor(Math.random() * showerRainAndDrizzleMessages.length)];
    case 314:
      const heavyShowerRainAndDrizzleMessages = [
        `Heavy shower rain and drizzle. Sounds like a right old mess out there!`,
        `That's a proper deluge of showers and drizzle.`
      ];
      return heavyShowerRainAndDrizzleMessages[Math.floor(Math.random() * heavyShowerRainAndDrizzleMessages.length)];
    case 321:
      const showerDrizzleMessages = [
        `Shower drizzle. One of those annoying little bursts of dampness.`,
        `Just a shower of drizzle. Might clear up quickly... or not.`
      ];
      return showerDrizzleMessages[Math.floor(Math.random() * showerDrizzleMessages.length)];

    // Rain
    case 500:
      const lightRainMessages = [
        `Just a bit of light rain. Barely enough to ruffle your feathers.`,
        `A gentle shower of light rain. The kind that makes the roses happy (and you slightly damp).`
      ];
      return lightRainMessages[Math.floor(Math.random() * lightRainMessages.length)];
    case 501:
      const moderateRainMessages = [
        `Moderate rain. Enough to make you think twice about that walk.`,
        `A steady bit of rain. Not torrential, but enough to soak you through eventually.`
      ];
      return moderateRainMessages[Math.floor(Math.random() * moderateRainMessages.length)];
    case 502:
      const heavyIntensityRainMessages = [
        `Heavy intensity rain! That's a proper downpour.`,
        `Right, the heavens have well and truly opened.`
      ];
      return heavyIntensityRainMessages[Math.floor(Math.random() * heavyIntensityRainMessages.length)];
    case 503:
      const veryHeavyRainMessages = [
        `Very heavy rain! Blimey, it's really coming down in stair rods!`,
        `That's more like a waterfall than rain!`
      ];
      return veryHeavyRainMessages[Math.floor(Math.random() * veryHeavyRainMessages.length)];
    case 504:
      const extremeRainMessages = [
        `Extreme rain! This is biblical stuff.`,
        `Crikey, the weather's gone properly mad! That's an awful lot of rain.`
      ];
      return extremeRainMessages[Math.floor(Math.random() * extremeRainMessages.length)];
    case 511:
      const freezingRainMessages = [
        `Freezing rain! Treacherous conditions out there. Ice and wet – a delightful combo.`,
        `That's icy rain, folks. Be very careful if you're out and about, it'll be slippy!`
      ];
      return freezingRainMessages[Math.floor(Math.random() * freezingRainMessages.length)];
    case 520:
      const lightIntensityShowerRainMessages = [
        `Light intensity shower rain. A brief little burst, hopefully.`,
        `Just a light shower passing through. Might not even get you properly wet.`
      ];
      return lightIntensityShowerRainMessages[Math.floor(Math.random() * lightIntensityShowerRainMessages.length)];
    case 521:
      const showerRainMessages = [
        `Shower rain. Could be a quick one, could linger.`,
        `A bit of shower rain about. Might get caught in it if you're unlucky.`
      ];
      return showerRainMessages[Math.floor(Math.random() * showerRainMessages.length)];
    case 522:
      const heavyIntensityShowerRainMessages = [
        `Heavy intensity shower rain. Sounds like a proper soaking if you get caught in that downpour!`,
        `That's a hefty shower!`
      ];
      return heavyIntensityShowerRainMessages[Math.floor(Math.random() * heavyIntensityShowerRainMessages.length)];
    case 531:
      const raggedShowerRainMessages = [
        `Ragged shower rain. On and off, a bit unpredictable.`,
        `One of those messy, intermittent showers. You might dodge it, you might not.`
      ];
      return raggedShowerRainMessages[Math.floor(Math.random() * raggedShowerRainMessages.length)];

    // Snow and other conditions (no changes requested for these)
    case 600:
      return `Light snow falling. Looks a bit picturesque, doesn't it? Wrap up warm!`;
    case 601:
      return `It's snowing! Proper snow now. Time for some winter fun (and maybe a shovel later).`;
    case 602:
      return `Heavy snow! Looks like a proper whiteout out there. Take it easy if you're travelling.`;
    case 611:
      return `Sleet. That lovely mix of rain and snow that's just generally unpleasant. Take care on the roads.`;
    case 612:
      return `Light shower sleet. A brief flurry of the messy stuff.`;
    case 613:
      return `Shower sleet. One of those icy bursts. Not the nicest!`;
    case 615:
      return `Light rain and snow. A bit of a wintry mix. Keep warm!`;
    case 616:
      return `Rain and snow. Proper messy conditions. Take it easy out there.`;
    case 620:
      return `Light shower snow. Just a little flurry, might not last.`;
    case 621:
      return `Shower snow. A bit more persistent than a flurry.`;
    case 622:
      return `Heavy shower snow. Could accumulate quickly!`;
    case 701:
      return `Mist in the air. Makes everything look a bit eerie. Drive carefully.`;
    case 711:
      return `Smoky conditions reported. Keep those windows closed!`;
    case 721:
      return `Hazy today. Makes the sunshine look a bit odd.`;
    case 731:
    case 761:
      return `Dusty/sandy conditions. Might want to keep the windows shut and perhaps wear a mask if you're sensitive.`;
    case 741:
      return `Foggy as pea soup! Can barely see a thing. Take it very slow if you're out and about.`;
    case 751:
      return `Sand in the air! A bit unusual for the UK. Might want to protect your eyes.`;
    case 762:
      return `Volcanic ash reported. Best to stay indoors and follow any local advice.`;
    case 771:
      return `Squalls reported. Sounds a bit dramatic! Expect sudden increases in wind speed.`;
    case 781:
      return `Tornado! Right, that's serious. Seek shelter immediately and follow safety guidelines!`;
    case 800:
      const clearMessages = [
        `Clear sky! Get out there and soak up that rare British sunshine.`,
        `Lovely clear skies. Makes a change, doesn't it?`
      ];
      return clearMessages[Math.floor(Math.random() * clearMessages.length)];
    case 801:
      const fewCloudsMessages = [
        `A few clouds dotted about. Nothing to worry about just yet.`,
        `Patches of blue with a smattering of clouds. Could be a decent day after all!`
      ];
      return fewCloudsMessages[Math.floor(Math.random() * fewCloudsMessages.length)];
    case 802:
      const scatteredCloudsMessages = [
        `Scattered clouds. Could brighten up, could cloud over more. The suspense!`,
        `More clouds than blue sky, but nothing too ominous... yet.`
      ];
      return scatteredCloudsMessages[Math.floor(Math.random() * scatteredCloudsMessages.length)];
    case 803:
      return `Broken clouds. Looks a bit grey, doesn't it?`;
    case 804:
      return `Overcast clouds. Solid grey sky. Don't expect much sunshine today.`;
    default:
      return `The weather is doing its thing... whatever that is. Best to have a look outside!`;
  }
};