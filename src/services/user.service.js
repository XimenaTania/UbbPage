import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

export const getDataList = () => {
    return new Promise((resolve, reject) => {resolve([
        {
            name : 'Cochabamba',
            major: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA Rodny',
                        address: 'No 233 Main St. New York, United States',
                        date: 'Friday 23:39 IST Saturday 11:20 ISD',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA Pablo',
                        address: 'No 233 Main St. New York, United States',
                        date: 'Friday 23:39 IST Saturday 11:20 ISD',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]
        },
        {
            name : 'La Paz',
            major: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]
        },
        {
            name : 'Gran Chaco',
            major: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]
        },
        { name : 'Oruro', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',  members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : 'Tarija', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : 'Potosi', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : ' Santa Cruz ', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : 'Norte Potosi', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : 'Tropico Cochabamba', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        { name : 'Sucre', major: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',   members: [
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                },
                {
                    dataPerson: {
                        name: 'RODRIGO JAUREGUI CHOQUE',
                        birthdate: '17 de septiembre de 1991',
                        date: 1708990596000,
                        city: 'La Paz Bolivia'
                    },
                    dateIglesia: {
                        name: 'IGLESIA BAUTISTA LOS ANDES',
                        address: 'No 233 Main St. New York, United States',
                        location: {
                            lat: 10.99835602,
                            lng: 77.01502627
                        }
                    }
                }
            ]},
        // Agrega más datos según sea necesario
    ]) })
    //return axios.get(API_URL + "all");
};

export const setRegisterMember = () => {
    return new Promise((resolve, reject) => {
        resolve({success: true})
    })
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getDataList,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
    setRegisterMember
};