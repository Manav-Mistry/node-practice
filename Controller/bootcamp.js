// @des get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @des get bootcamp with id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamps ${req.params.id}` });
};

// @des create bootcamp
// @route POST /api/v1/bootcamps
// @access Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create Bootcamp" });
};

// @des update bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @des delete bootcamp 
// @route DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `bootcamp ${req.params.id} deleted` });
};
