import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const WebProjectDetail = lazy(() => import("./WebProjectDetail"));

const PROJECT_DETAIL_COMPONENTS = {
  crickethub: WebProjectDetail,
  shopease: WebProjectDetail,
  "luxury-restaurant": WebProjectDetail,
  "nature-parallax": WebProjectDetail,
  finora: WebProjectDetail,
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug] || WebProjectDetail,
  };
}
