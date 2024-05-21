import {Languages, OptionsGame, Themes} from './interefaces.ts';

const audioMap = {
  [Languages.ES]: {
    [Themes.ANIMALS]: {
      0: require('../../assets/audios/animals/dog-es.mp3'),
      1: require('../../assets/audios/animals/cat-es.mp3'),
      2: require('../../assets/audios/animals/horse-es.mp3'),
      3: require('../../assets/audios/animals/lion-es.mp3'),
      4: require('../../assets/audios/animals/wolf-es.mp3'),
      5: require('../../assets/audios/animals/bird-es.mp3'),
    },
    [Themes.COLORS]: {
      0: require('../../assets/audios/colors/black-english.mp3'),
      1: require('../../assets/audios/colors/green-english.mp3'),
      2: require('../../assets/audios/colors/blue-english.mp3'),
      3: require('../../assets/audios/colors/violet-english.mp3'),
      4: require('../../assets/audios/colors/yellow-english.mp3'),
      5: require('../../assets/audios/colors/red-english.mp3'),
    },
    [Themes.NUMBERS]: {
      0: require('../../assets/audios/numbers/one-english.mp3'),
      1: require('../../assets/audios/numbers/two-english.mp3'),
      2: require('../../assets/audios/numbers/three-english.mp3'),
      3: require('../../assets/audios/numbers/four-english.mp3'),
      4: require('../../assets/audios/numbers/five-english.mp3'),
      5: require('../../assets/audios/numbers/six-english.mp3'),
    },
  },
  [Languages.PO]: {
    [Themes.ANIMALS]: {
      0: require('../../assets/audios/animals/dog-english.mp3'),
      1: require('../../assets/audios/animals/cat-english.mp3'),
      2: require('../../assets/audios/animals/horse-english.mp3'),
      3: require('../../assets/audios/animals/lion-english.mp3'),
      4: require('../../assets/audios/animals/wolf-english.mp3'),
      5: require('../../assets/audios/animals/bird-english.mp3'),
    },
    [Themes.COLORS]: {
      0: require('../../assets/audios/colors/black-english.mp3'),
      1: require('../../assets/audios/colors/green-english.mp3'),
      2: require('../../assets/audios/colors/blue-english.mp3'),
      3: require('../../assets/audios/colors/violet-english.mp3'),
      4: require('../../assets/audios/colors/yellow-english.mp3'),
      5: require('../../assets/audios/colors/red-english.mp3'),
    },
    [Themes.NUMBERS]: {
      0: require('../../assets/audios/numbers/one-english.mp3'),
      1: require('../../assets/audios/numbers/two-english.mp3'),
      2: require('../../assets/audios/numbers/three-english.mp3'),
      3: require('../../assets/audios/numbers/four-english.mp3'),
      4: require('../../assets/audios/numbers/five-english.mp3'),
      5: require('../../assets/audios/numbers/six-english.mp3'),
    },
  },
  [Languages.EN]: {
    [Themes.ANIMALS]: {
      0: require('../../assets/audios/animals/dog-english.mp3'),
      1: require('../../assets/audios/animals/cat-english.mp3'),
      2: require('../../assets/audios/animals/horse-english.mp3'),
      3: require('../../assets/audios/animals/lion-english.mp3'),
      4: require('../../assets/audios/animals/wolf-english.mp3'),
      5: require('../../assets/audios/animals/bird-english.mp3'),
    },
    [Themes.COLORS]: {
      0: require('../../assets/audios/colors/black-english.mp3'),
      1: require('../../assets/audios/colors/green-english.mp3'),
      2: require('../../assets/audios/colors/blue-english.mp3'),
      3: require('../../assets/audios/colors/violet-english.mp3'),
      4: require('../../assets/audios/colors/yellow-english.mp3'),
      5: require('../../assets/audios/colors/red-english.mp3'),
    },
    [Themes.NUMBERS]: {
      0: require('../../assets/audios/numbers/one-english.mp3'),
      1: require('../../assets/audios/numbers/two-english.mp3'),
      2: require('../../assets/audios/numbers/three-english.mp3'),
      3: require('../../assets/audios/numbers/four-english.mp3'),
      4: require('../../assets/audios/numbers/five-english.mp3'),
      5: require('../../assets/audios/numbers/six-english.mp3'),
    },
  },
};

const imageMap = {
  [Themes.ANIMALS]: {
    0: require('../../assets/images/animals/dog.png'),
    1: require('../../assets/images/animals/cat.png'),
    2: require('../../assets/images/animals/horse.png'),
    3: require('../../assets/images/animals/lion.png'),
    4: require('../../assets/images/animals/wolf.png'),
    5: require('../../assets/images/animals/bird.jpeg'),
  },
  [Themes.COLORS]: {
    0: require('../../assets/images/colors/black.jpg'),
    1: require('../../assets/images/colors/green.png'),
    2: require('../../assets/images/colors/blue.png'),
    3: require('../../assets/images/colors/violet.png'),
    4: require('../../assets/images/colors/yellow.jpg'),
    5: require('../../assets/images/colors/red.jpg'),
  },
  [Themes.NUMBERS]: {
    0: require('../../assets/images/numbers/one.png'),
    1: require('../../assets/images/numbers/two.png'),
    2: require('../../assets/images/numbers/three.png'),
    3: require('../../assets/images/numbers/four.png'),
    4: require('../../assets/images/numbers/five.png'),
    5: require('../../assets/images/numbers/six.jpg'),
  },
};

export const data = (option: OptionsGame) => {
  const audios = audioMap?.[option.language];
  const images = imageMap?.[option.theme];

  return [
    {key: '0', audio: audios?.[option.theme]['0'], image: images?.['0']},
    {key: '1', audio: audios?.[option.theme]['1'], image: images?.['1']},
    {key: '2', audio: audios?.[option.theme]['2'], image: images?.['2']},
    {key: '3', audio: audios?.[option.theme]['3'], image: images?.['3']},
    {key: '4', audio: audios?.[option.theme]['4'], image: images?.['4']},
    {key: '5', audio: audios?.[option.theme]['5'], image: images?.['5']},
  ];
};

export const themes = [
  {
    key: 'colors',
    image: require('../../assets/images/Colors.png'),
  },
  {key: 'numbers', image: require('../../assets/images/Numbers.png')},
  {
    key: 'animals',
    image: require('../../assets/images/Animals.png'),
  },
];

export const languages = [
  {
    key: 'es',
    image: require('../../assets/images/Flag_of_Argentina.png'),
  },
  {key: 'po', image: require('../../assets/images/Flag_of_Brazil.png')},
  {
    key: 'en',
    image: require('../../assets/images/Flag_of_the_United_Kingdom.png'),
  },
];
