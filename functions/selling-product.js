exports.handler = async (event) => {
  const productId = event.path.substring(event.path.lastIndexOf('/') + 1)

  let products = new Map()
  products.set(
    "1600459725", {
      "data" : {
        "id" : "1600459725",
        "type" : "selling-product",
        "attributes" : {
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
    }
  )
  products.set("1600233182", {
    "data" : {
      "id" : "1600233182",
      "type" : "selling-product",
      "attributes" : {
        "identification" : {
          "productId" : "1600233182"
        },
        "brand" : {
          "name" : ""
        },
        "name" : "Hampshire Premium Leather Corner Group Sofa",
        "price" : {
          "currencyCode" : "GBP",
          "current" : 1499,
          "previous" : 1699
        },
        "images" : [ {
          "identifier" : "MCTQN_SQ1_0000011520_VINTAGE_TAN_SLf",
          "tags" : [ ]
        }, {
          "identifier" : "MCTQN_SQ2_0000011520_VINTAGE_TAN_RSr",
          "tags" : [ ]
        }, {
          "identifier" : "MCTQN_SQ4_0000011520_VINTAGE_TAN_SLa",
          "tags" : [ ]
        }, {
          "identifier" : "MCTQN_SQ5_0000011520_VINTAGE_TAN_SLd",
          "tags" : [ ]
        }, {
          "identifier" : "MCTQN_SQ6_0000011520_VINTAGE_TAN_SLd1",
          "tags" : [ ]
        } ],
        "options" : [ {
          "COLOUR" : [ "VINTAGE_GREY", "VINTAGE_TAN" ]
        } ],
        "skus" : [ {
          "identification" : {
            "atgSkuId" : "sku20503064"
          },
          "options" : {
            "COLOUR" : "VINTAGE_GREY"
          },
          "stock" : {
            "primaryAvailability" : "In stock",
            "secondaryAvailability" : "Delivery from 24 Hours. <a href='' class='reviewAvailableDates'>Review available dates.</a>"
          },
          "price" : {
            "current" : 1499
          }
        }, {
          "identification" : {
            "atgSkuId" : "sku20503065"
          },
          "options" : {
            "COLOUR" : "VINTAGE_TAN"
          },
          "stock" : {
            "primaryAvailability" : "In stock",
            "secondaryAvailability" : "Delivery from 24 Hours. <a href='' class='reviewAvailableDates'>Review available dates.</a>"
          },
          "price" : {
            "current" : 1499
          }
        } ],
        "reviews" : {
          "total" : "9",
          "stars" : "3.6666998863220215"
        }
      }
    }
  })

  if (!products.has(productId)) {
    return {
      headers: {
        "Cache-Control": "max-age=60",
        "Content-Type": "application/json",
      },
      statusCode: 404,
      body: JSON.stringify({
        error: {
          message: "Product does not exist"
        }
      })
    }
  }

  const product = products.get(productId)

  return {
    headers: {
      "Cache-Control": "max-age=60",
      "Content-Type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify(product),
  };
};
