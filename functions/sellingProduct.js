exports.handler = async (event) => {
  return {
    headers: {
      "Cache-Control": "max-age=60",
      "Content-Type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify({
      "data" : {
        "id" : "1600459725",
        "type" : "selling-product",
        "attributes" : {
          "identification" : {
            "productId" : "1600459725",
            "itemNumber" : "QA779",
            "prodNumber" : "prod1089604461"
          },
          "brand" : {
            "name" : "Nike"
          },
          "name" : "Golf Air Max 270 - Black/White",
          "description" : "<h2>Nike&nbsp;Golf Air Max 270 Shoes</h2><p></p><strong>Size &amp; Fit</strong><br /><ul><li>Standard fit</li><li>Available in sizes: 6-12</li></ul><strong>Details</strong><br /><ul><li>End use: Golf</li><li>Men's Golf Air Max 270 G by Nike</li><li>Black/White</li><li>An exact replica of the original Air icon, the Air Max 270 features a sleek, sleeve-like upper that's waterproof too, keeping you comfy and dry till the very last hole. The foam midsole is decked with a Max Air unit to cushion every step, whilst the integrated traction pattern gives superior grip.</li><li>External heel counter stabilises your foot</li><li>Heel pull tab</li></ul><strong>Material</strong>",
          "price" : {
            "currencyCode" : "GBP",
            "current" : 130
          },
          "images" : [ {
            "identifier" : "QA779_SQ1_0000000019_BLACK_WHITE_SLf",
            "tags" : [ ]
          }, {
            "identifier" : "QA779_SQ2_0000000019_BLACK_WHITE_SLb",
            "tags" : [ ]
          }, {
            "identifier" : "QA779_SQ3_0000000019_BLACK_WHITE_SLs",
            "tags" : [ ]
          }, {
            "identifier" : "QA779_SQ4_0000000019_BLACK_WHITE_SLt",
            "tags" : [ ]
          }, {
            "identifier" : "QA779_SQ5_0000000019_BLACK_WHITE_SLu",
            "tags" : [ ]
          }, {
            "identifier" : "QA779_SQ6_0000000019_BLACK_WHITE_SLd",
            "tags" : [ ]
          } ],
          "options" : [ {
            "SIZE" : [ "6", "7" ]
          }, {
            "COLOUR" : [ "BLACK/WHITE" ]
          } ],
          "skus" : [ {
            "identification" : {
              "atgSkuId" : "sku22710276"
            },
            "options" : {
              "COLOUR" : "BLACK/WHITE",
              "SIZE" : "6"
            },
            "stock" : {
              "primaryAvailability" : "In stock",
              "secondaryAvailability" : ""
            },
            "price" : {
              "current" : 130
            }
          }, {
            "identification" : {
              "atgSkuId" : "sku22710278"
            },
            "options" : {
              "COLOUR" : "BLACK/WHITE",
              "SIZE" : "7"
            },
            "stock" : {
              "primaryAvailability" : "In stock",
              "secondaryAvailability" : ""
            },
            "price" : {
              "current" : 130
            }
          } ],
          "reviews" : {
            "total" : "23",
            "stars" : "2.9130001068115234"
          }
        }
      }
    }),
  };
};
