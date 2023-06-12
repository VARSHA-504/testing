import { getShopifyObject } from "../helper/shopify";
import product from "../models/product";

//Create QC Giftcard Product
export const createGiftcardProducts = async (req, res, next) => {
  console.log("createGiftcardProducts function start");
  try {
    let shopify = await getShopifyObject(req.body.store); //Get Shopify Object
    console.log("createGiftcardProducts test1");
    console.log(shopify);
    let tags = "cpgn_" + req.body.cpg_name;
    tags = tags.replace(/\s/g, "_");
    console.log("createGiftcardProducts shopify call start");
    let body = {
      // Create a product in Shopify with the details sent in API
      title: req.body.title,
      body_html: "",
      vendor: req.body.vendor
        ? req.body.vendor
        : "asdfghjkl",
      product_type: "qwikcilver_gift_card", //The product type is hardcode. This will be used to detect the product later
      published: JSON.parse(req.body.published),
      images: req.body.images,
      tags: tags,
      variants: req.body.variants,
    };
    console.log("Body shopify");
    console.log(body);
    let newProduct = await shopify.product.create({
      // Create a product in Shopify with the details sent in API
      title: req.body.title,
      body_html: "",
      vendor: req.body.vendor
        ? req.body.vendor
        : "asdfghjkl",
      product_type: "qwikcilver_gift_card", //The product type is hardcode. This will be used to detect the product later
      published: JSON.parse(req.body.published),
      images: req.body.images,
      tags: tags,
      variants: req.body.variants,
    });
    await product.create({store_url : req.body.store , id : newProduct.id ,newProduct});
       console.log("createGiftcardProducts response shopify");
    console.log(newProduct);
    res.status(200).send({
      success: true,
      message: "Product created in shopify successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error)
    var err = new Error("Internal Server Error");
    err.status = 500;

    next(error);
  }
};

//Update QC Giftcard Product
export const updateGiftcardProduct = async (req, res, next) => {
  try {
    let shopify = await getShopifyObject(req.token.store); // Get Shopify Object
    let updateObj = {};
    //Update only the fields sent in request
    if (req.body.images && req.body.images.length >= 0) {
      updateObj["images"] = req.body.images;
    }
    if (req.body.published) {
      updateObj["published"] = JSON.parse(req.body.published);
    }
    if (req.body.title) {
      updateObj["title"] = req.body.title;
    }
    if (req.body.body_html) {
      updateObj["body_html"] = req.body.body_html;
    }
    if (req.body.variants) {
      updateObj["variants"] = req.body.variants;
    }
    console.log(updateObj);
    let updatedProduct = await shopify.product.update(
      req.body.product_id,
      updateObj
    );
    res.status(200).send({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    var err = new Error("Internal Server Error");
    err.status = 500;

    next(error);
  }
};

//Retrieve QC Giftcard Products.
export const getGiftcardProducts = async (req, res, next) => {
    console.log(req.body)
      try {
        console.log(req.token.store);
        let products = await Product.find({ store: req.token.store }); //Get Store Object
        console.log(products.length);
        //Since this API is used in the dashboard, the redemption status is also sent along in the response
        if (products && products.length) {
          if (req.token.store !== "plumgoodness-2.myshopify.com") {
            var qcRedemptionEnabled = await checkQcRedemption(req.token.store);
          }
          if (req.token.store == "plumgoodness-2.myshopify.com") {
            var qcRedemptionEnabled = true;
          }
    
          //Check the status of the QC Redemption Snippet
          res.status(200).send({
            success: true,
            message: "Giftcard Products fetched successfully",
            data: products,
            qcRedemptionEnabled: qcRedemptionEnabled,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "No products found for the store",
          });
        }
      } catch (error) {
        var err = new Error("Internal Server Error");
        err.status = 500;
        console.log(error);
        next(error);
      }
    };
    