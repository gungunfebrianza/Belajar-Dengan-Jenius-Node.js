a = () => {
  b();
}
b = () => {
  c();
}
c = () => {
  console.trace();
  notDefined();
}
a();