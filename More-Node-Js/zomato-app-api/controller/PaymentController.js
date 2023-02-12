const OrderModel = require("../model/OrderModel");
module.exports.saveOrder = async (request, response) => {
  // request => get details post
  let data = request.body;

  let newOrder = new OrderModel({
    order_list: data.order_list,
    total: data.total,
    user_email: data.user_email,
    mobile: data.mobile,
    order_id: data.order_id,
    payment_id: data.payment_id,
    order_status: data.order_status,
  });
  try {
    await newOrder.save();
    response.status(200).send({
      status: true,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      status: false,
      message: "server error",
    });
  }
};
