export const fixMuiSelectLabels = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const muiSelects = document.querySelectorAll('.Mui-select');
      muiSelects.forEach((select) => {
        const legend = select.querySelector('#lang legend');
        const label = select.querySelector('#lang label');
        if (legend && label) {
          legend.style.width = label.offsetWidth * 0.93 + 'px';
        }
      });
    }, 25);
  }
};

export const fixMuiInputAutofills = (initialize, fields) => {
  const firstInitializeFields = {};
  const secondInitializeFields = {};

  fields.forEach((field) => {
    firstInitializeFields[field] = ' ';
    secondInitializeFields[field] = undefined;
  });

  initialize(firstInitializeFields);
  setTimeout(() => {
    initialize(secondInitializeFields);
  }, 10);
};
