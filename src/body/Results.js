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
    if (
      dummyResults.foods[0].nf_total_carbohydrate -
        dummyResults.foods[0].nf_dietary_fiber <
      10
    ) {
      return (
        <div>
          <h1> Results </h1>
          <p>{dummyResults.foods[0].food_name} is Keto!</p>
          <p>
            {dummyResults.foods[0].nf_total_carbohydrate -
              dummyResults.foods[0].nf_dietary_fiber}g of carbs!
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Results </h1>
          <p>{dummyResults.foods[0].food_name} is not Keto!</p>
          <p>
            {dummyResults.foods[0].nf_total_carbohydrate -
              dummyResults.foods[0].nf_dietary_fiber}g of carbs!
          </p>
        </div>
      );
    }
  }
}
export default Results;
