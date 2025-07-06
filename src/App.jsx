import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductScreen from "./screen/ProductScreen";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <main className="py-3" style={{ minHeight: "80vh" }}>
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
    ],
  },
]);

function App() {
  return (
    // <div style={{ overflow: "hidden" }}>
    //   <Header />

    //   <Footer />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
