module.exports = (err, req, res, next) => {
  // 400
  console.log("WHERWE ARE JLJS");
  if ([6800, 6969].includes(err.code)) {
    return res.status(400).json(err.json());
  }

  // 403
  if ([6900, 6901].includes(err.code)) {
    return res.status(403).json(err.json());
  }

  return res.status(500).json(err);

  console.log("asjflajUREOIUEJ JLSJD");
};
