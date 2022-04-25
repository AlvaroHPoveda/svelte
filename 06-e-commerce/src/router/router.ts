import CartScreen from "../pages/CartScreen.svelte";
import ErrorScreen from "../pages/ErrorScreen.svelte";
import HomeScreen from "../pages/HomeScreen.svelte";
import LoginScreen from "../pages/LoginScreen.svelte";
import ProductsScreen from "../pages/ProductsScreen.svelte";
import RegisterScreen from "../pages/RegisterScreen.svelte";
import PaidScreen from "../pages/PaidScreen.svelte";

export const routes = {
  "/": HomeScreen,
  "/login": LoginScreen,
  "/register": RegisterScreen,
  "/products": ProductsScreen,
  "/cart": CartScreen,
  "/paid": PaidScreen,
  "*": ErrorScreen,
};
