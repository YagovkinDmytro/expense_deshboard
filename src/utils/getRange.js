const getRange = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

export default getRange;
