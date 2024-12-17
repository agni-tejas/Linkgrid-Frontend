"use client";

import React, { useState } from "react";
import { features } from "./features-data";

import FeatureList from "./FeatureList";

import { BentoDemo } from "./grids/gridfeatures";

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-18 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        <FeatureList
          features={features}
          activeFeature={activeFeature}
          onFeatureSelect={setActiveFeature}
        />

        <div className="sticky top-20">
          {activeFeature === "collaborate" ? <BentoDemo /> : ""}
          {/* {activeFeature === "secure" ? <BentoDemo2 /> : ""}
          {activeFeature === "secure" ? <BentoDemo3 /> : ""}
          {activeFeature === "secure" ? <BentoDemo4 /> : ""}
          {activeFeature === "secure" ? <BentoDemo5 /> : ""}
          {activeFeature === "secure" ? <BentoDemo6 /> : ""}
          {activeFeature === "secure" ? <BentoDemo7 /> : ""} */}
        </div>
      </div>
    </div>
  );
}
