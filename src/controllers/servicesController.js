import { ObjectId } from "mongodb";
import { serviceCollection } from "../constants.js";

export const AllServices = async (req,res) => {
  const cursor = serviceCollection.find();
  const result = await cursor.toArray();
  res.send(result);
}

export const getSingleService = async (req, res) => {
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const options = {
    projection : {title : 1, price : 1, service_id : 1},
  }
  const result = await serviceCollection.findOne(query, options);
  res.send(result);
}
