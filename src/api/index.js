export const getDateTime = (raw) => new Date(raw).toLocaleString();
export const getDate = (raw) => new Date(raw).toLocaleDateString();

export const performWithPagination = (fn) => (raw, ...props) => {
  const { skip = 0, take = 0, amount = 0, list, ...rawElse } = raw;

  const pagination = {
    skip: Number(skip),
    take: Number(take),
    amountItems: Number(amount),
    amountPages: Math.ceil(amount / take),
    currentPage: Math.ceil(skip / take),
  };

  const performedList = fn(list, ...props);

  return {
    list: performedList,
    pagination,
    ...rawElse,
  };
};
