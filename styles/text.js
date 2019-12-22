const regular = {
  fontFamily: 'Helvetica',
};

const light = {
  ...regular,
  fontWeight: '100',
};
const medium = {
  ...regular,
  fontWeight: '500',
};

const bold = {
  ...regular,
  fontWeight: 'bold',
};

const italic = {
  ...regular,
  fontStyle: 'italic',
};

const text = {regular, bold, light, medium, italic};

export default text;
