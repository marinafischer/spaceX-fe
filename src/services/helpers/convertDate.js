export default (Isodata) => {
  const [ano, mes, dia] = Isodata.substring(0, 10).split('-');
  return `${dia}/${mes}/${ano}`;
};
