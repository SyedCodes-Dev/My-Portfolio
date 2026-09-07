import { useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetailModal from "./components/projects/ProjectDetailModal";


function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();
  const { pathname, search } = location;
  const isProjectModal =
    pathname.startsWith('/projects/') &&
    location.state?.backgroundLocation;


  useLayoutEffect(() => {
    let cancelled = false;


    if (navType === "POP") return undefined;


    const params = new URLSearchParams(search);
    const hasScrollTo = params.get('scrollTo');


    if (isProjectModal) {
      return;
    }


    if (pathname !== '/') {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (cancelled) return;


        if (document.documentElement) {
          document.documentElement.style.scrollBehavior = 'auto';
        }
        if (document.body) {
          document.body.style.scrollBehavior = 'auto';
        }


        if (window.lenisInstance) {
          try {
            window.lenisInstance.destroy();
          } catch (e) {

          }
          window.lenisInstance = null;
        }


        ScrollTrigger.getAll().forEach(st => {
          try {
            st.kill();
          } catch (e) {

          }
        });


        ScrollTrigger.scrollerProxy(document.documentElement, null);
        ScrollTrigger.defaults({ scroller: window });


        ScrollTrigger.clearScrollMemory();
        ScrollTrigger.refresh(true);


        window.scrollTo(0, 0);
      });
    } else {


      if (document.documentElement) {
        document.documentElement.style.scrollBehavior = '';
      }
      if (document.body) {
        document.body.style.scrollBehavior = '';
      }



      if (!hasScrollTo) {

        window.scrollTo(0, 0);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [pathname, search, isProjectModal, navType]);

  return null;
}

export default function App() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <>
      <ScrollToTop />
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailModal />} />
        </Routes>
      )}
    </>
  );
}
