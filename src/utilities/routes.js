const routes = {
  home: "/",
  store: "/store",
  signin: "/signin",
  signup: "/signup",
  detailproduct: (id) => (id ? `/detail/${id}` : "/detail/:id"),
  account: "/account",
  orders: "/account/orders",
  editAccount: "/account/edit",
  cart: "/cart",
  products: "/account/product",
};

export default routes;
