export const peopleandAssetsDummyData = {
    role: 'Admin',
    company: 'Site 1',
    name: 'Kumaravel',
    email: 'email@domain.com',
    helmetid: 'ABC 124',
    currentLocation: '',
    firstSeen: '07:00 AM',
    lastSeen: '18:00 PM',
    totalHours: '11h 00 min',
    directionLocation: '',
    imageSrc: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}


// layout = 1,3,4
const DEFAULT_DATA = [
    {
        title: 'Title',
        value: 'Content'
    },
    {
        title: 'Title',
        value: 'Content'
    },
    {
        title: 'Title',
        value: 'Content'
    }
]

// layout = 2
// This is a sample data layout for the second layout of the InfoPopup component.
// If two datas are provided, then the first design will be showned and if one data is provided, then the second design will be showned.
const DEFAULT_DATA_LAYOUT2 = [
    {
        title: 'Title',
        value: 'Content'
    },
    {
        title: 'Title',
        value: 'Content'
    },
]

export const pointofInterestDummyDataImages = [
    'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/164572/pexels-photo-164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7651586/pexels-photo-7651586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

export const pointofInterestDummyData = {
    images: pointofInterestDummyDataImages,
    title: 'Title',
    currentLocation: '',
    directionLocation: '',
}

export const pointofInterestDummyDataLayoutOne = {
    contents: DEFAULT_DATA,
    ...pointofInterestDummyData
}

export const pointofInterestDummyDataLayoutTwoType1 = {
    contents: DEFAULT_DATA_LAYOUT2,
    largeContent: {
        title: 'Title',
        value: 'Lorem Ipsum is simply dummy text of the printing...'
    },
    ...pointofInterestDummyData
}

export const pointofInterestDummyDataLayoutTwoType2 = {
    contents: [DEFAULT_DATA_LAYOUT2[0]],
    largeContent: {
        title: 'Title',
        value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    ...pointofInterestDummyData
}

export const pointofInterestDummyDataLayoutThree = {
    contents: DEFAULT_DATA,
    ...pointofInterestDummyData
}

export const pointofInterestDummyDataLayoutFour: any = {
    contents: DEFAULT_DATA,
    footerContent: {
        title: 'Title',
        value: 'Content'
    },
    ...pointofInterestDummyData
}

export const pointofInterestDummyDataLayoutFive = {
    content: {
        title: 'Title',
        value: 'Content'
    },
    largeContent: {
        title: 'Title',
        value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    ...pointofInterestDummyData
}