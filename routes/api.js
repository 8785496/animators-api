var express = require('express');
const router = express.Router();

router.get('/animators', (req, res) => {
  res.send([
    { name: 'Золушка' },
    { name: 'Белоснежка' },
  ]);
});

module.exports = router;