import { useState } from "react";
import { CartList } from "./components/CartList";
import { Header } from "./components/Header";
import { Notification } from "./components/Notification";
import { ProductList } from "./components/ProductList";

export const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const handleSuccess = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
    console.log("ha");
    
  };
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="row">
          <ProductList handleSuccess={handleSuccess}></ProductList>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                  <CartList />
                </div>
              </div>
              {showNotification ? <Notification></Notification> : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
