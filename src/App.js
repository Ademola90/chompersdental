"use client"
import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/navbar"

// Lazy load pages
const Home = lazy(() => import("./pages/home"))
// const MeetOurTeam = lazy(() => import("./pages/MeetOurTeam"))
// const TeamMemberDetail = lazy(() => import("./pages/TeamMemberDetail"))
// const Reviews = lazy(() => import("./pages/Reviews"))
// const Gallery = lazy(() => import("./pages/Gallery"))
// const Blog = lazy(() => import("./pages/Blog"))
// const ContactUs = lazy(() => import("./pages/ContactUs"))
// const Services = lazy(() => import("./pages/Services"))

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
  </div>
)

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />

        <main className=" mt-[-16px]">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/meet-our-team" element={<MeetOurTeam />} />
              <Route path="/meet-our-team/:id" element={<TeamMemberDetail />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services/*" element={<Services />} /> */}
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App

