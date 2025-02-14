import React from "react";
import RecentProducts from "./components/RecentProducts/RecentProducts";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import StaticSlider from "./components/StaticSlider/StaticSlider";

export default function Home() {
  return (
<div className="mx-3">
<StaticSlider/>
<PopularCategories/>
<RecentProducts/>
</div>
  );
}
