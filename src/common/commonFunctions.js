
export const sortArr = (data, sortingParam) => {
  const sortData = data.sort(function (a, b) {
    return b[sortingParam] - a[sortingParam];
  });
  return sortData
}

export const calculateCourierCharges = (weight) => {
  // 	0 to 200g	$5 
  // 200g to 500g	$10 
  // 500g to 1000g	$15 
  // 1000g to 5000g 	$20 
  if (weight > 1000 && weight < 5000) {
    return 20
  }
  if (weight > 500 && weight < 1000) {
    return 15
  }
  if (weight > 200 && weight < 500) {
    return 10
  }
  if (weight > 0 && weight < 200) {
    return 5
  }
}