import nonWorking from "../models/nonworking";

const list = (_, res) => {
  nonWorking.find((error, data) => {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(200).json(data);
  });
};

const create = (req, res) => {
  nonWorking.create(req.body, (error, data) => {
    if (error) {
      console.log({ error });
      return res.status(500).json(error);
    }

    console.log({ data });
    return res.status(200).json(data);
  });
};

const update = (req, res) => {
  const data = req.body.data;

  nonWorking.update({ _id: req.body._id }, data, (error, data) => {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(200).json(data);
  });
};

export default { list, create, update };
