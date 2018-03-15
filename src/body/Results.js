import React, { Component } from "react";

class Results extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isKeto: null
    };
  }

  render() {
    let dummyResults = {
      foods: [
        {
          food_name: "cheetos",
          brand_name: null,
          serving_qty: 1,
          serving_unit: "package 1.25 oz",
          serving_weight_grams: 35,
          nf_calories: 196,
          nf_total_fat: 12.6,
          nf_saturated_fat: 1.88,
          nf_cholesterol: 2.45,
          nf_sodium: 329.7,
          nf_total_carbohydrate: 18.74,
          nf_dietary_fiber: 0.49,
          nf_sugars: 1.12,
          nf_protein: 2.05,
          nf_potassium: 63.7,
          nf_p: 46.55,
          full_nutrients: [
            {
              attr_id: 203,
              value: 2.0475
            },
            {
              attr_id: 204,
              value: 12.6035
            },
            {
              attr_id: 205,
              value: 18.7355
            },
            {
              attr_id: 207,
              value: 1.064
            },
            {
              attr_id: 208,
              value: 196
            },
            {
              attr_id: 209,
              value: 16.38
            },
            {
              attr_id: 210,
              value: 0
            },
            {
              attr_id: 211,
              value: 0
            },
            {
              attr_id: 212,
              value: 0
            },
            {
              attr_id: 213,
              value: 1.1165
            },
            {
              attr_id: 214,
              value: 0
            },
            {
              attr_id: 221,
              value: 0
            },
            {
              attr_id: 255,
              value: 0.5495
            },
            {
              attr_id: 262,
              value: 0
            },
            {
              attr_id: 263,
              value: 0
            },
            {
              attr_id: 268,
              value: 820.05
            },
            {
              attr_id: 269,
              value: 1.1165
            },
            {
              attr_id: 287,
              value: 0
            },
            {
              attr_id: 291,
              value: 0.49
            },
            {
              attr_id: 301,
              value: 19.6
            },
            {
              attr_id: 303,
              value: 0.8855
            },
            {
              attr_id: 304,
              value: 5.95
            },
            {
              attr_id: 305,
              value: 46.55
            },
            {
              attr_id: 306,
              value: 63.7
            },
            {
              attr_id: 307,
              value: 329.7
            },
            {
              attr_id: 309,
              value: 0.14
            },
            {
              attr_id: 312,
              value: 0.0112
            },
            {
              attr_id: 313,
              value: 2.31
            },
            {
              attr_id: 315,
              value: 0.0203
            },
            {
              attr_id: 317,
              value: 2.835
            },
            {
              attr_id: 318,
              value: 0
            },
            {
              attr_id: 319,
              value: 0
            },
            {
              attr_id: 320,
              value: 0
            },
            {
              attr_id: 321,
              value: 0
            },
            {
              attr_id: 322,
              value: 0
            },
            {
              attr_id: 323,
              value: 1.463
            },
            {
              attr_id: 324,
              value: 0.7
            },
            {
              attr_id: 328,
              value: 0.035
            },
            {
              attr_id: 334,
              value: 0
            },
            {
              attr_id: 337,
              value: 0
            },
            {
              attr_id: 338,
              value: 0.7
            },
            {
              attr_id: 341,
              value: 0.0035
            },
            {
              attr_id: 342,
              value: 0.063
            },
            {
              attr_id: 343,
              value: 0.0035
            },
            {
              attr_id: 344,
              value: 0.049
            },
            {
              attr_id: 345,
              value: 0
            },
            {
              attr_id: 346,
              value: 0.063
            },
            {
              attr_id: 347,
              value: 0
            },
            {
              attr_id: 401,
              value: 0
            },
            {
              attr_id: 404,
              value: 0.056
            },
            {
              attr_id: 405,
              value: 0.0557
            },
            {
              attr_id: 406,
              value: 1.6471
            },
            {
              attr_id: 410,
              value: 0.343
            },
            {
              attr_id: 415,
              value: 0.0277
            },
            {
              attr_id: 417,
              value: 19.95
            },
            {
              attr_id: 418,
              value: 0.168
            },
            {
              attr_id: 421,
              value: 4.06
            },
            {
              attr_id: 428,
              value: 0
            },
            {
              attr_id: 429,
              value: 1.855
            },
            {
              attr_id: 430,
              value: 0.455
            },
            {
              attr_id: 431,
              value: 16.1
            },
            {
              attr_id: 432,
              value: 3.85
            },
            {
              attr_id: 435,
              value: 31.15
            },
            {
              attr_id: 454,
              value: 0.175
            },
            {
              attr_id: 501,
              value: 0.0252
            },
            {
              attr_id: 502,
              value: 0.0781
            },
            {
              attr_id: 503,
              value: 0.1292
            },
            {
              attr_id: 504,
              value: 0.272
            },
            {
              attr_id: 505,
              value: 0.1484
            },
            {
              attr_id: 506,
              value: 0.0616
            },
            {
              attr_id: 507,
              value: 0.0266
            },
            {
              attr_id: 508,
              value: 0.1281
            },
            {
              attr_id: 509,
              value: 0.1008
            },
            {
              attr_id: 510,
              value: 0.1481
            },
            {
              attr_id: 511,
              value: 0.0896
            },
            {
              attr_id: 512,
              value: 0.0774
            },
            {
              attr_id: 513,
              value: 0.1103
            },
            {
              attr_id: 514,
              value: 0.1586
            },
            {
              attr_id: 515,
              value: 0.5667
            },
            {
              attr_id: 516,
              value: 0.0532
            },
            {
              attr_id: 517,
              value: 0.2695
            },
            {
              attr_id: 518,
              value: 0.1348
            },
            {
              attr_id: 521,
              value: 0
            },
            {
              attr_id: 601,
              value: 2.45
            },
            {
              attr_id: 605,
              value: 0.2009
            },
            {
              attr_id: 606,
              value: 1.876
            },
            {
              attr_id: 607,
              value: 0.0088
            },
            {
              attr_id: 608,
              value: 0.006
            },
            {
              attr_id: 609,
              value: 0.0077
            },
            {
              attr_id: 610,
              value: 0.0186
            },
            {
              attr_id: 611,
              value: 0.014
            },
            {
              attr_id: 612,
              value: 0.049
            },
            {
              attr_id: 613,
              value: 1.4105
            },
            {
              attr_id: 614,
              value: 0.2853
            },
            {
              attr_id: 615,
              value: 0.0455
            },
            {
              attr_id: 617,
              value: 3.4307
            },
            {
              attr_id: 618,
              value: 6.1072
            },
            {
              attr_id: 619,
              value: 0.1124
            },
            {
              attr_id: 620,
              value: 0.0004
            },
            {
              attr_id: 621,
              value: 0
            },
            {
              attr_id: 624,
              value: 0
            },
            {
              attr_id: 625,
              value: 0.0035
            },
            {
              attr_id: 626,
              value: 0.0207
            },
            {
              attr_id: 627,
              value: 0
            },
            {
              attr_id: 628,
              value: 0.0392
            },
            {
              attr_id: 629,
              value: 0
            },
            {
              attr_id: 630,
              value: 0.0018
            },
            {
              attr_id: 631,
              value: 0
            },
            {
              attr_id: 636,
              value: 96.6
            },
            {
              attr_id: 645,
              value: 3.5182
            },
            {
              attr_id: 646,
              value: 6.2374
            },
            {
              attr_id: 652,
              value: 0.0042
            },
            {
              attr_id: 653,
              value: 0.0095
            },
            {
              attr_id: 654,
              value: 0.0175
            },
            {
              attr_id: 662,
              value: 0.0018
            },
            {
              attr_id: 663,
              value: 0.0963
            },
            {
              attr_id: 664,
              value: 0
            },
            {
              attr_id: 669,
              value: 0.0672
            },
            {
              attr_id: 670,
              value: 0.0042
            },
            {
              attr_id: 671,
              value: 0
            },
            {
              attr_id: 672,
              value: 0.0028
            },
            {
              attr_id: 673,
              value: 0.0186
            },
            {
              attr_id: 674,
              value: 3.3345
            },
            {
              attr_id: 675,
              value: 6.0001
            },
            {
              attr_id: 676,
              value: 0.0018
            },
            {
              attr_id: 685,
              value: 0.0035
            },
            {
              attr_id: 687,
              value: 0.0035
            },
            {
              attr_id: 689,
              value: 0.0147
            },
            {
              attr_id: 693,
              value: 0.098
            },
            {
              attr_id: 695,
              value: 0.1029
            },
            {
              attr_id: 696,
              value: 0
            },
            {
              attr_id: 697,
              value: 0
            },
            {
              attr_id: 851,
              value: 0.1092
            },
            {
              attr_id: 852,
              value: 0
            },
            {
              attr_id: 853,
              value: 0.0007
            },
            {
              attr_id: 857,
              value: 0
            },
            {
              attr_id: 858,
              value: 0
            }
          ],
          nix_brand_name: null,
          nix_brand_id: null,
          nix_item_name: null,
          nix_item_id: null,
          upc: null,
          consumed_at: "2018-03-15T05:01:39+00:00",
          metadata: {
            is_raw_food: false
          },
          source: 1,
          ndb_no: 19008,
          tags: {
            item: "cheetos",
            measure: null,
            quantity: "1.0",
            food_group: 0,
            tag_id: 1671
          },
          alt_measures: [
            {
              serving_weight: 35,
              measure: "package 1.25 oz",
              seq: 2,
              qty: 1
            },
            {
              serving_weight: 28.35,
              measure: "oz",
              seq: 1,
              qty: 1
            },
            {
              serving_weight: 100,
              measure: "g",
              seq: null,
              qty: 100
            }
          ],
          lat: null,
          lng: null,
          meal_type: 5,
          photo: {
            thumb: "https://d2xdmhkmkbyw75.cloudfront.net/1671_thumb.jpg",
            highres: "https://d2xdmhkmkbyw75.cloudfront.net/1671_highres.jpg",
            is_user_uploaded: false
          },
          sub_recipe: null
        }
      ]
    };

    return <h1> Results </h1>;
  }
}
export default Results;
