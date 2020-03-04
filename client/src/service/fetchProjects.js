const getAllProjects = () => {
  const projects = [
    {
      id: '1',
      title: '1 Day Project',
      img: require('../assets/img/illustration_small.jpg'),
      accent: '#fff'
    },
    {
      id: '2',
      title: 'Save the Date',
      img: require('../assets/img/stamp_michelle_yan.jpg'),
      accent: '#111'
    },
    {
      id: '3',
      title: 'Mirayon',
      img: require('../assets/img/mirayon.jpg'),
      accent: '#fff'
    },
    {
      id: '4',
      title: 'Ireland',
      img: require('../assets/img/ireland.jpg'),
      accent: '#d4d2d4'
    },
    {
      id: '5',
      title: 'Seoul',
      img: require('../assets/img/south-korea-19-61.jpg'),
      accent: '#b65433'
    },
    {
      id: '6',
      title: 'Ex Humanitas',
      img: require('../assets/img/ex-humanitas-cover-WIDE.jpg'),
      accent: '#fff'
    },
    {
      id: '7',
      title: 'JG Genesis',
      img: require('../assets/img/genesis_stories_logo_v2-crop-u3554.jpg'),
      accent: '#111'
    },
    {
      id: '8',
      title: 'DBC Swisscom',
      img: require('../assets/img/dbc.jpg'),
      accent: '#fff'                 
    },
    {
      id: '9',
      title: 'Jelly',
      img: require('../assets/img/jelly.png'),
      accent: '#fff'                 
    },
    {
      id: '10',
      title: 'Apps Team',
      img: require('../assets/img/comic.jpg'),
      accent: '#111'                 
    },
    {
      id: '11',
      title: 'Sledgecamp',
      img: require('../assets/img/sledgecamp_flyer_19.jpg'),
      accent: '#111'                 
    },
    {
      id: '12',
      title: 'El Timon',
      img: require('../assets/img/photo5978709766295368137.jpg'),
      accent: '#fff'                 
    },
    {
      id: '13',
      title: 'Portfolio',
      img: require('../assets/img/portfolio_2.jpg'),
      accent: '#fff'                 
    }
  ]

  return projects;
}

const getProjectById = id => {
  const all = getAllProjects();
  let project;
  all.forEach(p => {
    if (p.id === id) { project = p }
  })
  return project
}


export default {
  getAllProjects,
  getProjectById
};