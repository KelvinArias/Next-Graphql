import * as types from "../types"

const initialState = {
        "businesses": [
            {
                "id": "TJljvcQrbgaHyrWRTJDSJA",
                "alias": "slapfish-irvine",
                "name": "Slapfish",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/J4kmq5em3AxL_76I1LgnhQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/slapfish-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 753,
                "categories": [
                    {
                        "alias": "seafood",
                        "title": "Seafood"
                    },
                    {
                        "alias": "fishnchips",
                        "title": "Fish & Chips"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.64985,
                    "longitude": -117.838758
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4249 Campus Dr",
                    "address2": "Ste B148",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4249 Campus Dr",
                        "Ste B148",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19497481174",
                "display_phone": "(949) 748-1174",
                "distance": 483.372943590282
            },
            {
                "id": "5Ltso2MkgLT_UWzDRmYSaw",
                "alias": "bento-sushi-irvine",
                "name": "Bento Sushi",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2Ne-zL0pp824uLjusDbCZQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/bento-sushi-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 1,
                "categories": [
                    {
                        "alias": "sushi",
                        "title": "Sushi Bars"
                    }
                ],
                "rating": 5,
                "coordinates": {
                    "latitude": 33.648865,
                    "longitude": -117.842108
                },
                "transactions": [],
                "location": {
                    "address1": "311 W Peltason Dr",
                    "address2": "",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92697",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "311 W Peltason Dr",
                        "Irvine, CA 92697"
                    ]
                },
                "phone": "",
                "display_phone": "",
                "distance": 195.24230662904893
            },
            {
                "id": "17G67GkODedOfTM5QTGCwQ",
                "alias": "taquiero-taco-patio-irvine",
                "name": "Taquiero Taco Patio",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/BOOhxIf8_DbzZ1WSLVBcYA/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/taquiero-taco-patio-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 780,
                "categories": [
                    {
                        "alias": "tacos",
                        "title": "Tacos"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.6494036670827,
                    "longitude": -117.832385413349
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4517 Campus Dr",
                    "address2": "",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4517 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19493331671",
                "display_phone": "(949) 333-1671",
                "distance": 1000.2126522411663
            },
            {
                "id": "pm1SGfjnSDIDw-1W1XbCSQ",
                "alias": "eureka-irvine-2",
                "name": "Eureka!",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/j2QEU8HL2KtlIv9R-XsmEQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/eureka-irvine-2?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 935,
                "categories": [
                    {
                        "alias": "tradamerican",
                        "title": "American (Traditional)"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.6505959,
                    "longitude": -117.8392817
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4143 Campus Dr",
                    "address2": null,
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4143 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19495968881",
                "display_phone": "(949) 596-8881",
                "distance": 499.6241805109884
            },
            {
                "id": "jTyfj3e8PIkc4KTVh3sAqw",
                "alias": "mendocino-farms-irvine",
                "name": "Mendocino Farms",
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K75XnHTj8fH4z3xXcvyHrg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/mendocino-farms-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 596,
                "categories": [
                    {
                        "alias": "sandwiches",
                        "title": "Sandwiches"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    }
                ],
                "rating": 4.5,
                "coordinates": {
                    "latitude": 33.6508949,
                    "longitude": -117.8391509
                },
                "transactions": [],
                "price": "$$",
                "location": {
                    "address1": "4175 Campus Dr",
                    "address2": "",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4175 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19497832900",
                "display_phone": "(949) 783-2900",
                "distance": 532.6555775161935
            },
            {
                "id": "lzx8_1F8TqC9y8L3ElRifg",
                "alias": "hen-house-grill-irvine",
                "name": "Hen House Grill",
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5aKzzBs-d7_zthw5w7gdXw/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/hen-house-grill-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 979,
                "categories": [
                    {
                        "alias": "persian",
                        "title": "Persian/Iranian"
                    },
                    {
                        "alias": "mediterranean",
                        "title": "Mediterranean"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.6493026913943,
                    "longitude": -117.832296946294
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4515 Campus Dr",
                    "address2": "",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4515 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19497862000",
                "display_phone": "(949) 786-2000",
                "distance": 1005.547240028807
            },
            {
                "id": "rvQ1dbL0UOKmcQyMEgvO0g",
                "alias": "california-gogi-grill-irvine-3",
                "name": "California Gogi Grill",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/nqrCJVQAPpI1m9TC3HDtNA/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/california-gogi-grill-irvine-3?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 567,
                "categories": [
                    {
                        "alias": "korean",
                        "title": "Korean"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.6504850618367,
                    "longitude": -117.838828038363
                },
                "transactions": [
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4237 Campus Dr",
                    "address2": "Ste 157B",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4237 Campus Dr",
                        "Ste 157B",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19498540000",
                "display_phone": "(949) 854-0000",
                "distance": 519.8844074320237
            },
            {
                "id": "jhA6AtQuXJT_dJPb7QGGxQ",
                "alias": "anthill-pub-and-grille-irvine",
                "name": "Anthill Pub & Grille",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/zhVXNnMe7FV3jCvIobLkow/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/anthill-pub-and-grille-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 381,
                "categories": [
                    {
                        "alias": "tradamerican",
                        "title": "American (Traditional)"
                    },
                    {
                        "alias": "pubs",
                        "title": "Pubs"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.648875001478,
                    "longitude": -117.842283696117
                },
                "transactions": [
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4200 Campus Dr",
                    "address2": "",
                    "address3": "UC Irvine C215 Student Center",
                    "city": "Irvine",
                    "zip_code": "92697",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4200 Campus Dr",
                        "UC Irvine C215 Student Center",
                        "Irvine, CA 92697"
                    ]
                },
                "phone": "+19498243050",
                "display_phone": "(949) 824-3050",
                "distance": 189.56482152978498
            },
            {
                "id": "_QdDPfAoJg5k3_Y6d-Rd5Q",
                "alias": "breakfast-republic-irvine-2",
                "name": "Breakfast Republic",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/C6dbx-OR1rQk0Tb9X1SBiw/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/breakfast-republic-irvine-2?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 532,
                "categories": [
                    {
                        "alias": "breakfast_brunch",
                        "title": "Breakfast & Brunch"
                    },
                    {
                        "alias": "tradamerican",
                        "title": "American (Traditional)"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.650451,
                    "longitude": -117.837774
                },
                "transactions": [
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4213 Campus Dr",
                    "address2": "Ste P166B",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4213 Campus Dr",
                        "Ste P166B",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19493797177",
                "display_phone": "(949) 379-7177",
                "distance": 604.9552786495499
            },
            {
                "id": "_T9fl1NkIDGcbJbag9w2Gg",
                "alias": "tender-greens-irvine-6",
                "name": "Tender Greens",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JZWsMMUShUz4Cauf-D8DOg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/tender-greens-irvine-6?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 520,
                "categories": [
                    {
                        "alias": "newamerican",
                        "title": "American (New)"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    },
                    {
                        "alias": "grocery",
                        "title": "Grocery"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.6503121997947,
                    "longitude": -117.838142904177
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4237 Campus Dr",
                    "address2": "Ste B165",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4237 Campus Dr",
                        "Ste B165",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19499541950",
                "display_phone": "(949) 954-1950",
                "distance": 555.2655295261229
            },
            {
                "id": "QzJxZ67PVrqy6Z_5gKfxyw",
                "alias": "le-diplomate-cafe-irvine",
                "name": "Le Diplomate Cafe",
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/qPt7kLwXFkuGv-aA8pGuVw/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/le-diplomate-cafe-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 1793,
                "categories": [
                    {
                        "alias": "bakeries",
                        "title": "Bakeries"
                    },
                    {
                        "alias": "sandwiches",
                        "title": "Sandwiches"
                    },
                    {
                        "alias": "cafes",
                        "title": "Cafes"
                    }
                ],
                "rating": 4.5,
                "coordinates": {
                    "latitude": 33.650408,
                    "longitude": -117.838442
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4237 Campus Dr",
                    "address2": "Ste B161",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4237 Campus Dr",
                        "Ste B161",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19498545161",
                "display_phone": "(949) 854-5161",
                "distance": 540.5736985884298
            },
            {
                "id": "z6ZyXlSfhftN-h7FfAJo6Q",
                "alias": "asian-box-irvine",
                "name": "Asian Box",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/b6TnkckEE0p1n_Da7XsIiQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/asian-box-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 440,
                "categories": [
                    {
                        "alias": "asianfusion",
                        "title": "Asian Fusion"
                    },
                    {
                        "alias": "vegan",
                        "title": "Vegan"
                    },
                    {
                        "alias": "gluten_free",
                        "title": "Gluten-Free"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.6488063941744,
                    "longitude": -117.8320658952
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4503 Campus Dr",
                    "address2": "",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4503 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19497696196",
                "display_phone": "(949) 769-6196",
                "distance": 1015.4963633423711
            },
            {
                "id": "FxXL4MXQoS8gKf3sy9J8Tg",
                "alias": "luna-grill-irvine-irvine",
                "name": "Luna Grill",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_iqE3pnC9dw7jI1_kV1fNg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/luna-grill-irvine-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 132,
                "categories": [
                    {
                        "alias": "mediterranean",
                        "title": "Mediterranean"
                    },
                    {
                        "alias": "greek",
                        "title": "Greek"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.6505091,
                    "longitude": -117.8393749
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4143 Campus Dr",
                    "address2": "No. C195",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4143 Campus Dr",
                        "No. C195",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19498612667",
                "display_phone": "(949) 861-2667",
                "distance": 486.679030548291
            },
            {
                "id": "qRkAHPVSKEYykpNjb-URAw",
                "alias": "delsushi-irvine",
                "name": "Delsushi",
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/czZIxyW5OgsJpYwwssUYYQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/delsushi-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 419,
                "categories": [
                    {
                        "alias": "japanese",
                        "title": "Japanese"
                    },
                    {
                        "alias": "sushi",
                        "title": "Sushi Bars"
                    },
                    {
                        "alias": "soup",
                        "title": "Soup"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.649876,
                    "longitude": -117.838854
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4249 Campus Dr",
                    "address2": "Ste B146",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4249 Campus Dr",
                        "Ste B146",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19493247171",
                "display_phone": "(949) 324-7171",
                "distance": 473.5386807652602
            },
            {
                "id": "esUqa0VrYZoKlAr0RpFtYQ",
                "alias": "in-n-out-burger-irvine",
                "name": "In-N-Out Burger",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DHPrhA1urp3nEoAc_X8MSQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/in-n-out-burger-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 720,
                "categories": [
                    {
                        "alias": "burgers",
                        "title": "Burgers"
                    },
                    {
                        "alias": "hotdogs",
                        "title": "Fast Food"
                    }
                ],
                "rating": 4.5,
                "coordinates": {
                    "latitude": 33.650154,
                    "longitude": -117.84063
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "4115 Campus Dr",
                    "address2": "",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4115 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+18007861000",
                "display_phone": "(800) 786-1000",
                "distance": 384.65762866482305
            },
            {
                "id": "saKl29canx_KLrDf1YmBTA",
                "alias": "blaze-pizza-irvine-3",
                "name": "Blaze Pizza",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/n18QxnT_nbysFcSkktjQfg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/blaze-pizza-irvine-3?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 1225,
                "categories": [
                    {
                        "alias": "pizza",
                        "title": "Pizza"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    },
                    {
                        "alias": "hotdogs",
                        "title": "Fast Food"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.649757115819,
                    "longitude": -117.839082472835
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "4255 Campus Dr",
                    "address2": "A120",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4255 Campus Dr",
                        "A120",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19492984841",
                "display_phone": "(949) 298-4841",
                "distance": 448.75213102304303
            },
            {
                "id": "uhOztX8_pe52lQlYKTaFjw",
                "alias": "rays-pizza-irvine",
                "name": "Ray's Pizza",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/nwFOQNxW917y4qe2ThAxfg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/rays-pizza-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 282,
                "categories": [
                    {
                        "alias": "pizza",
                        "title": "Pizza"
                    },
                    {
                        "alias": "italian",
                        "title": "Italian"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    }
                ],
                "rating": 4,
                "coordinates": {
                    "latitude": 33.65076,
                    "longitude": -117.83831
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4199 Campus Dr",
                    "address2": "",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4199 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19498545044",
                "display_phone": "(949) 854-5044",
                "distance": 585.7672209536753
            },
            {
                "id": "8bYPc0rN7XEJtyGoN-I6Lg",
                "alias": "chick-fil-a-irvine-7",
                "name": "Chick-fil-A",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zb_erM23_IsSH1aSnAOB8w/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/chick-fil-a-irvine-7?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 215,
                "categories": [
                    {
                        "alias": "hotdogs",
                        "title": "Fast Food"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.6496647,
                    "longitude": -117.8398073
                },
                "transactions": [
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4127 Campus Dr",
                    "address2": "",
                    "address3": "",
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4127 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19497250230",
                "display_phone": "(949) 725-0230",
                "distance": 391.3294874023645
            },
            {
                "id": "9uebDfWMT10Zl_aGi8MI1g",
                "alias": "the-buffalo-spot-irvine",
                "name": "The Buffalo Spot - Irvine",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/GCXxZIxO5__q2F7lvSUbXg/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/the-buffalo-spot-irvine?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 90,
                "categories": [
                    {
                        "alias": "chicken_wings",
                        "title": "Chicken Wings"
                    },
                    {
                        "alias": "salad",
                        "title": "Salad"
                    },
                    {
                        "alias": "wraps",
                        "title": "Wraps"
                    }
                ],
                "rating": 3.5,
                "coordinates": {
                    "latitude": 33.64929367,
                    "longitude": -117.83214817
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$",
                "location": {
                    "address1": "4511 Campus Dr",
                    "address2": "",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4511 Campus Dr",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19493333889",
                "display_phone": "(949) 333-3889",
                "distance": 1009.9683626580729
            },
            {
                "id": "Q30Zh4ivr1b4mXrLTyLvDA",
                "alias": "adya-irvine-2",
                "name": "ADYA",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZWCV9QOY5m0zFsn9e6oQ_w/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/adya-irvine-2?adjust_creative=7jscdSKK_dwicGoOTF0ESQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7jscdSKK_dwicGoOTF0ESQ",
                "review_count": 165,
                "categories": [
                    {
                        "alias": "indpak",
                        "title": "Indian"
                    },
                    {
                        "alias": "cookingclasses",
                        "title": "Cooking Classes"
                    },
                    {
                        "alias": "catering",
                        "title": "Caterers"
                    }
                ],
                "rating": 3,
                "coordinates": {
                    "latitude": 33.6505451832087,
                    "longitude": -117.837922341357
                },
                "transactions": [
                    "pickup",
                    "delivery"
                ],
                "price": "$$",
                "location": {
                    "address1": "4213 Campus Dr",
                    "address2": "Ste P-166D",
                    "address3": null,
                    "city": "Irvine",
                    "zip_code": "92612",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "4213 Campus Dr",
                        "Ste P-166D",
                        "Irvine, CA 92612"
                    ]
                },
                "phone": "+19496792299",
                "display_phone": "(949) 679-2299",
                "distance": 587.3460743836956
            }
        ],
        "total": 48,
        "region": {
            "center": {
                "longitude": -117.84287452697754,
                "latitude": 33.64724269240946
            }
        }
}

export default function historyReducer(state = initialState, action){
    switch (action.type){
        case "INIT":
            return {
                ...state,
            }
        default:
            return state
    }
}