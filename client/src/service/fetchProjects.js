const getAllProjects = () => {
  const projects = [
    {
      title: '1 Day Project',
      img: require('../assets/img/illustration_small.jpg'),
      accent: '#fff'
    },
    {
      title: 'Save the Date',
      img: require('../assets/img/stamp_michelle_yan.jpg'),
      accent: '#111'
    },
    {
      title: 'Mirayon',
      img: require('../assets/img/mirayon.jpg'),
      accent: '#fff'
    },
    {
      title: 'Ireland',
      img: require('../assets/img/ireland.jpg'),
      accent: '#d4d2d4'
    },
    {
      title: 'Seoul',
      img: require('../assets/img/south-korea-19-61.jpg'),
      accent: '#b65433'
    },
    {
      title: 'Ex Humanitas',
      img: require('../assets/img/ex-humanitas-cover-WIDE.jpg'),
      accent: '#fff'
    },
    {
      title: 'JG Genesis',
      img: require('../assets/img/genesis_stories_logo_v2-crop-u3554.jpg'),
      accent: '#111'
    },
    {
      title: 'DBC Swisscom',
      img: require('../assets/img/dbc.jpg'),
      accent: '#fff'                 
    },
    {
      title: 'Portfolio',
      img: require('../assets/img/portfolio_2.jpg'),
      accent: '#fff'                 
    }
  ]

  return projects;
}


export default {
  getAllProjects
};