import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));

const Header = ()=>{
    return(
        <div className="header flex border border-black ">
            <div className="logo-container w-[30%] flex justify-center">
                <img src={require("./Tasty_Trove.png")} className="logo h-[200px] w-[200px]"/>
            </div>
            <div className="nav-items w-[70%] flex justify-center items-center">
                <ul className="flex">
                    <li className="pr-24 text-2xl">Home</li>
                    <li className="pr-24 text-2xl">About Us</li>
                    <li className="pr-24 text-2xl">Contact Us</li>
                    <li className="pr-24 text-2xl">Cart</li>
                </ul>
            </div>
        </div>
    );
}

const resobj = [
  {
    "info": {
      "id": "770810",
      "name": "Chai Sutta Bar",
      "cloudinaryImageId": "fcee676df41abe3fa8b474ece9d2b77d",
      "locality": "Anand Nagar",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Beverages",
        "Italian-American",
        "Fast Food",
        "Snacks",
        "Ice Cream"
      ],
      "veg": true,
      "parentId": "14909",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-sutta-bar-anand-nagar-harsh-nagar-nanded-770810",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "408635",
      "name": "Rolls Mania",
      "cloudinaryImageId": "klut9pz4hgl0r3bjcply",
      "locality": "Kailash Nagar",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "171118",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/rolls-mania-kailash-nagar-harsh-nagar-nanded-408635",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "379317",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "fmyguqh7cewflvfsvt8v",
      "locality": "Bhagya Nagar Road",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-bhagya-nagar-road-harsh-nagar-nanded-379317",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "689633",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "d940666c8d2376a8d89661d09a1497f5",
      "locality": "Kishor Nagar",
      "areaName": "Nanded",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "2093",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-kishor-nagar-nanded-nanded-689633",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "121528",
      "name": "shree Vijaya sai idli center",
      "cloudinaryImageId": "ywj69lln8oexs48nstlm",
      "locality": "Harsh nagar",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "185865",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shree-vijaya-sai-idli-center-harsh-nagar-nanded-121528",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "410153",
      "name": "Eat Street",
      "cloudinaryImageId": "zlhx7egkny6gwfguuvrb",
      "locality": "Tirumala Nagar \n",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.6,
      "veg": true,
      "parentId": "352",
      "avgRatingString": "3.6",
      "totalRatingsString": "5",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 7.7,
        "serviceability": "SERVICEABLE",
        "slaString": "49 mins",
        "lastMileTravelString": "7.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eat-street-tirumala-nagar-harsh-nagar-nanded-410153",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "457470",
      "name": "Gurudevji Udpi",
      "cloudinaryImageId": "ymqbrxzfgannvt117ua4",
      "locality": "Harsh Nagar",
      "areaName": "Chikhalwadi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.1,
      "parentId": "274998",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 15:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gurudevji-udpi-harsh-nagar-chikhalwadi-nanded-457470",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "119988",
      "name": "Om Veg Restaurant",
      "cloudinaryImageId": "c8bb4b8f0077448e5cb7f0a7002b5c63",
      "locality": "Shivaji Nagar",
      "areaName": "Gokul Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "151973",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 22:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/om-veg-restaurant-shivaji-nagar-gokul-nagar-nanded-119988",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "488067",
      "name": "Shegaon Kachori",
      "cloudinaryImageId": "nvthovh20t8270buu5vn",
      "locality": "Workshop Road \n",
      "areaName": "Harsh Nagar",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Snacks"
      ],
      "avgRating": 3.5,
      "veg": true,
      "parentId": "182680",
      "avgRatingString": "3.5",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-23 21:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ae45ed3-8540-4122-a3b7-d7d1acb324a1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shegaon-kachori-workshop-road-harsh-nagar-nanded-488067",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];


const RestaurantCard = (props)=>{

    const {resdata} = props;
    const {name,cloudinaryImageId,avgRating,sla,cuisines,costForTwo} = resdata?.info;
    return(
        <div className="res-card bg-[#f0f0f0]  w-[250px] m-4">
            <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }
            alt="image"
            className="res-img  h-[50%] w-[100%]"
            />
            <h3 className="pl-2 py-2 font-bold text-lg">{name}</h3>
            <h4 className="pl-2 py-2">{cuisines.join(", ")}</h4>
            <h4 className="pl-2 py-2">{avgRating} stars</h4>
            <h4 className="pl-2 py-2">{costForTwo}</h4>
            <h4 className="pl-2 py-2">{sla.deliveryTime} minutes</h4>
        </div>
    );
}

const Body = ()=>{
    return (
        <div>
            <div className="restaurant-container">
                <div className="flex flex-wrap">
                  {
                    resobj.map((restro,index)=>(
                      <RestaurantCard key={restro?.info?.id} resdata={restro}/>
                    ))
                  }
                </div>
            </div>
        </div>
    );
}
const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    );
}
root.render(<AppLayout/>);