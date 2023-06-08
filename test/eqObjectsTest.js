const index = require('../index')


const multiColorShirtObject = { colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = { size: "medium",
  colors: ["red", "blue"]
};

index.assertEqual(index.eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};

index.assertEqual(index.eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);