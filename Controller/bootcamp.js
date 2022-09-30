const Bootcamp = require("../Models/Bootcamp");

// @des get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find({});
  try {
    res.status(200).json({ success: true, data: bootcamps });
  } catch {
    res.status(400).json({ error: "Something is going wrong" });
  }
};

// @des get bootcamp with id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find({ id: req.params.id });

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: "No such bootcamp found" });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch {
    res.status(400).json({ error: "Something is going wrong" });
  }
};

// @des create bootcamp
// @route POST /api/v1/bootcamps
// @access Public
exports.createBootcamp = async (req, res, next) => {
  console.log(req.body);
  console.log(req.body.name);

  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    msg: "Bootcamp added",
  });
};

// @des update bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return res
      .status(400)
      .json({ success: false, msg: "No such bootcamp found" });
  }

  res.status(200).json({ success: true, data: bootcamp });
};

// @des delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `bootcamp ${req.params.id} deleted` });
};
