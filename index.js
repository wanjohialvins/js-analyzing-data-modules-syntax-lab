require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args 
  args.forEach(function (userArray) {
    // Merge each array into users using spread operator
    combinedObject.users.push(...userArray);
  });

  // Merge date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};