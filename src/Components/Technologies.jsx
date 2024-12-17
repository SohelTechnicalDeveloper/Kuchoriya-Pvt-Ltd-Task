import React from "react";
import ios from '../Image/icon ios.png'
import android from '../Image/android-icon.png'
import flutter from '../Image/flutter-icon.png'
import ionic from '../Image/ionic-icon.png'
import reactNative from '../Image/react-native.png'
import xmarin from '../Image/xamarin-icon.png'
import Titanium from '../Image/titanium-icon.png'
import swift from '../Image/swift-icon.png'
import objectiveC from '../Image/objective-icon.png'
import Kotlin from '../Image/kotlin-icon.png'




const Technologies = () => {
  const techData = [
    { name: "IOS", icon:  ios },
    { name: "Android", icon:android },
    { name: "Flutter", icon: flutter },
    { name: "Ionic", icon: ionic},
    { name: "React Native", icon: reactNative },
    { name: "Xamarin", icon: xmarin},
    { name: "Titanium", icon: Titanium },
    { name: "Swift", icon: swift },
    { name: "ObjectiveC", icon: objectiveC },
    { name: "Kotlin", icon: Kotlin },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">
        Technologies <span style={{ color: "#EF6D1C" }}>We work with</span>
      </h2>
      <p className="text-center text-muted">
        It's crucial to collaborate with specialists who are knowledgeable about
        the newest technologies in today's quickly increasing digital landscape.
      </p>
     
      <div className="tab-content mt-5" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="mobile"
          role="tabpanel"
          aria-labelledby="mobile-tab"
        >
          <div className="row">
            {techData.map((tech, index) => (
              <div
                key={index}
                className="col-6 col-md-4 card-style col-lg-3 text-center mb-4"
              >
                <div className="p-3 border rounded shadow-sm">
                    <img src={tech.icon} height={60} width={60} alt="" />
                  <p className="mt-2 mb-0">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
