"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/chomperslogo.png";
import ContactCTA from "./contact-cta";

const Navbar = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOrthodonticsOpen, setIsOrthodonticsOpen] = useState(false);
  const [isLaserOpen, setIsLaserOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix for dropdown menus - don't close when clicking inside
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  // Fix for Orthodontics dropdown
  const handleOrthodonticsClick = (e) => {
    e.stopPropagation();
    setIsOrthodonticsOpen(!isOrthodonticsOpen);
    setIsLaserOpen(false);
  };

  // Fix for Laser Dentistry dropdown
  const handleLaserClick = (e) => {
    e.stopPropagation();
    setIsLaserOpen(!isLaserOpen);
    setIsOrthodonticsOpen(false);
  };

  // Services dropdown toggle
  const handleServicesClick = (e) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto md:px-10 lg:px-10 px-5">
        {/* Main navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo || "/placeholder.svg"}
              alt="Chompers Family Dental"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Mobile menu button - moved to the right edge */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-green-600 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation and CTA */}
          <div className="hidden lg:block mt-[-10px]">
            {/* Contact CTA - only visible on large screens */}
            <div className="flex justify-end">
              <ContactCTA />
            </div>

            {/* Desktop navigation */}
            <nav className="flex items-center space-x-8">
              <NavLink
                href="/"
                label="Home"
                isActive={location.pathname === "/"}
              />
              <NavLink
                href="/meet-our-team"
                label="Meet Our Team"
                isActive={location.pathname === "/meet-our-team"}
              />

              {/* Services dropdown */}
              <div className="relative group" onClick={handleDropdownClick}>
                <button
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    location.pathname.includes("/services")
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={handleServicesClick}
                >
                  Our Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services dropdown menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-visible z-50">
                    <div className="py-1">
                      {/* Children option */}
                      <ServiceLink
                        href="/services/children"
                        label="Children"
                        isActive={location.pathname === "/services/children"}
                      />

                      {/* Orthodontics submenu trigger */}
                      <div className="relative">
                        <button
                          className={`flex items-center justify-between w-full px-4 py-2 text-left transition-colors ${
                            location.pathname.includes(
                              "/services/orthodontics"
                            ) ||
                            location.pathname.includes(
                              "/services/fixed-orthodontic-braces"
                            ) ||
                            location.pathname.includes(
                              "/services/removable-appliances"
                            ) ||
                            location.pathname.includes("/services/invisalign")
                              ? "text-green-600 bg-gray-50"
                              : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                          }`}
                          onClick={handleOrthodonticsClick}
                        >
                          Orthodontics
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              isOrthodonticsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Orthodontics submenu */}
                        {isOrthodonticsOpen && (
                          <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                            <ServiceLink
                              href="/services/fixed-orthodontic-braces"
                              label="Fixed Orthodontic Braces"
                              isActive={
                                location.pathname ===
                                "/services/fixed-orthodontic-braces"
                              }
                            />
                            <ServiceLink
                              href="/services/removable-appliances"
                              label="Removable Appliances"
                              isActive={
                                location.pathname ===
                                "/services/removable-appliances"
                              }
                            />
                            <ServiceLink
                              href="/services/invisalign"
                              label="Invisalign®"
                              isActive={
                                location.pathname === "/services/invisalign"
                              }
                            />
                          </div>
                        )}
                      </div>

                      {/* Laser Dentistry submenu trigger */}
                      <div className="relative">
                        <button
                          className={`flex items-center justify-between w-full px-4 py-2 text-left transition-colors ${
                            location.pathname.includes(
                              "/services/laser-dentistry"
                            ) ||
                            location.pathname.includes(
                              "/services/gum-reduction"
                            ) ||
                            location.pathname.includes(
                              "/services/cold-sore-ablation"
                            ) ||
                            location.pathname.includes(
                              "/services/frenectomy"
                            ) ||
                            location.pathname.includes(
                              "/services/sore-muscle-therapy"
                            ) ||
                            location.pathname.includes(
                              "/services/laser-whitening"
                            )
                              ? "text-green-600 bg-gray-50"
                              : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                          }`}
                          onClick={handleLaserClick}
                        >
                          Laser Dentistry
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              isLaserOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Laser Dentistry submenu */}
                        {isLaserOpen && (
                          <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                            <ServiceLink
                              href="/services/gum-reduction"
                              label="Gum Reduction"
                              isActive={
                                location.pathname === "/services/gum-reduction"
                              }
                            />
                            <ServiceLink
                              href="/services/cold-sore-ablation"
                              label="Cold Sore Ablation"
                              isActive={
                                location.pathname ===
                                "/services/cold-sore-ablation"
                              }
                            />
                            <ServiceLink
                              href="/services/frenectomy"
                              label="Frenectomy"
                              isActive={
                                location.pathname === "/services/frenectomy"
                              }
                            />
                            <ServiceLink
                              href="/services/sore-muscle-therapy"
                              label="Sore Muscle Therapy"
                              isActive={
                                location.pathname ===
                                "/services/sore-muscle-therapy"
                              }
                            />
                            <ServiceLink
                              href="/services/laser-whitening"
                              label="Laser Whitening"
                              isActive={
                                location.pathname ===
                                "/services/laser-whitening"
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                href="/reviews"
                label="Reviews"
                isActive={location.pathname === "/reviews"}
              />
              <NavLink
                href="/gallery"
                label="Gallery"
                isActive={location.pathname === "/gallery"}
              />
              <NavLink
                href="/blog"
                label="Blog"
                isActive={location.pathname === "/blog"}
              />
              <NavLink
                href="/contact-us"
                label="Contact Us"
                isActive={location.pathname === "/contact-us"}
              />
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-4 py-4">
            {/* Mobile Contact CTA */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <ContactCTA />
            </div>

            <nav className="flex flex-col space-y-4">
              <MobileNavLink
                href="/"
                label="Home"
                isActive={location.pathname === "/"}
              />
              <MobileNavLink
                href="/meet-our-team"
                label="Meet Our Team"
                isActive={location.pathname === "/meet-our-team"}
              />

              {/* Mobile Services accordion */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  className={`flex items-center justify-between w-full py-2 font-medium ${
                    location.pathname.includes("/services")
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <MobileServiceLink
                      href="/services/children"
                      label="Children"
                      isActive={location.pathname === "/services/children"}
                    />

                    {/* Mobile Orthodontics submenu */}
                    <div>
                      <button
                        className={`flex items-center justify-between w-full py-2 ${
                          location.pathname.includes(
                            "/services/orthodontics"
                          ) ||
                          location.pathname.includes(
                            "/services/fixed-orthodontic-braces"
                          ) ||
                          location.pathname.includes(
                            "/services/removable-appliances"
                          ) ||
                          location.pathname.includes("/services/invisalign")
                            ? "text-green-600"
                            : "text-gray-700"
                        }`}
                        onClick={() =>
                          setIsOrthodonticsOpen(!isOrthodonticsOpen)
                        }
                      >
                        Orthodontics
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isOrthodonticsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOrthodonticsOpen && (
                        <div className="pl-4 mt-1 space-y-2">
                          <MobileServiceLink
                            href="/services/fixed-orthodontic-braces"
                            label="Fixed Orthodontic Braces"
                            isActive={
                              location.pathname ===
                              "/services/fixed-orthodontic-braces"
                            }
                          />
                          <MobileServiceLink
                            href="/services/removable-appliances"
                            label="Removable Appliances"
                            isActive={
                              location.pathname ===
                              "/services/removable-appliances"
                            }
                          />
                          <MobileServiceLink
                            href="/services/invisalign"
                            label="Invisalign®"
                            isActive={
                              location.pathname === "/services/invisalign"
                            }
                          />
                        </div>
                      )}
                    </div>

                    {/* Mobile Laser Dentistry submenu */}
                    <div>
                      <button
                        className={`flex items-center justify-between w-full py-2 ${
                          location.pathname.includes(
                            "/services/laser-dentistry"
                          ) ||
                          location.pathname.includes(
                            "/services/gum-reduction"
                          ) ||
                          location.pathname.includes(
                            "/services/cold-sore-ablation"
                          ) ||
                          location.pathname.includes("/services/frenectomy") ||
                          location.pathname.includes(
                            "/services/sore-muscle-therapy"
                          ) ||
                          location.pathname.includes(
                            "/services/laser-whitening"
                          )
                            ? "text-green-600"
                            : "text-gray-700"
                        }`}
                        onClick={() => setIsLaserOpen(!isLaserOpen)}
                      >
                        Laser Dentistry
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isLaserOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isLaserOpen && (
                        <div className="pl-4 mt-1 space-y-2">
                          <MobileServiceLink
                            href="/services/gum-reduction"
                            label="Gum Reduction"
                            isActive={
                              location.pathname === "/services/gum-reduction"
                            }
                          />
                          <MobileServiceLink
                            href="/services/cold-sore-ablation"
                            label="Cold Sore Ablation"
                            isActive={
                              location.pathname ===
                              "/services/cold-sore-ablation"
                            }
                          />
                          <MobileServiceLink
                            href="/services/frenectomy"
                            label="Frenectomy"
                            isActive={
                              location.pathname === "/services/frenectomy"
                            }
                          />
                          <MobileServiceLink
                            href="/services/sore-muscle-therapy"
                            label="Sore Muscle Therapy"
                            isActive={
                              location.pathname ===
                              "/services/sore-muscle-therapy"
                            }
                          />
                          <MobileServiceLink
                            href="/services/laser-whitening"
                            label="Laser Whitening"
                            isActive={
                              location.pathname === "/services/laser-whitening"
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <MobileNavLink
                href="/reviews"
                label="Reviews"
                isActive={location.pathname === "/reviews"}
              />
              <MobileNavLink
                href="/gallery"
                label="Gallery"
                isActive={location.pathname === "/gallery"}
              />
              <MobileNavLink
                href="/blog"
                label="Blog"
                isActive={location.pathname === "/blog"}
              />
              <MobileNavLink
                href="/contact-us"
                label="Contact Us"
                isActive={location.pathname === "/contact-us"}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop navigation link component
const NavLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`font-medium transition-colors ${
      isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
    }`}
  >
    {label}
  </a>
);

// Desktop service link component
const ServiceLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`block px-4 py-2 transition-colors ${
      isActive
        ? "text-green-600 bg-gray-50"
        : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
    }`}
  >
    {label}
  </a>
);

// Mobile navigation link component
const MobileNavLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`block py-2 font-medium border-b border-gray-100 ${
      isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
    }`}
  >
    {label}
  </a>
);

// Mobile service link component
const MobileServiceLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`block py-1 ${
      isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"
    }`}
  >
    {label}
  </a>
);

export default Navbar;
