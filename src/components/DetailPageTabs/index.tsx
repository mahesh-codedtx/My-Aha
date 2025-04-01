import { useState } from "react";
import "./index.css";
const DetailPageTab = () => {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");
  console.log(activeTab);
  return (
    <section>
      <div>
        <div className="tabs">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""} cursor`}
            onClick={() => {
              setActiveTab("tab1");
            }}
          >
            Cast
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""} cursor`}
            onClick={() => {
              setActiveTab("tab2");
            }}
          >
            Details
          </div>
        </div>
        <div className="tabs-container">
          {activeTab === "tab1" ? (
            <div className="cast-actor-cards-container">
              <div className="cast-actor-card">
                <img
                  src="https://image-resizer-cloud-api.akamaized.net/image/raja-goutham/0-1x1.jpg?width=280&updatedTime=2025-03-29T11:30:12Z"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="cast-actor-name">Raja Goutham</p>
              </div>
              <div className="cast-actor-card">
                <img
                  src="https://image-resizer-cloud-api.akamaized.net/image/raja-goutham/0-1x1.jpg?width=280&updatedTime=2025-03-29T11:30:12Z"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="cast-actor-name">Raja Goutham</p>
              </div>
            </div>
          ) : (
            <div className="details-tab">
              <p className="details-title">Director</p>
              <p className="details-value">Rvs Nickil</p>
              <p className="details-title">Studio</p>
              <p className="details-value">Swarnam Entertainment</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailPageTab;
