import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import ThemeToggle from "../utils/ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const toggleMobileDropdown = (title, e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setMobileExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
    }
  };

  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "Products",
      path: "/products",
      isDropdown: true,
      isMega: true,
      groups: [
        {
          category: "Mobility Solutions",
          links: [
            { title: "EV Lithium Batteries", path: "/products/ev-lithium" },
            {
              title: "Battery Swapping / BaaS",
              path: "/products/battery-swapping",
            },
          ],
        },
        {
          category: "Industrial Solutions",
          links: [
            { title: "E-Forklift Batteries", path: "/products/e-forklift" },
            {
              title: "E-Cleaning Machine Batteries",
              path: "/products/e-cleaning",
            },
          ],
        },
        {
          category: "Aviation Solutions",
          links: [{ title: "E-Drone Batteries", path: "/products/e-drone" }],
        },
        {
          category: "Solar & Energy Storage",
          links: [
            { title: "Solar Panels", path: "/products/solar-panels" },
            { title: "Solar Batteries", path: "/products/solar-batteries" },
            { title: "Solar Inverters", path: "/products/solar-inverters" },
          ],
        },
        {
          category: "Power Backup",
          links: [
            { title: "Home UPS", path: "/products/home-ups" },
            { title: "Hi-Capacity UPS", path: "/products/hi-capacity-ups" },
          ],
        },
      ],
    },
    { title: "Technology", path: "/technology" },
    { title: "Solutions / Industries", path: "/solutions" },
    { title: "Sustainability", path: "/sustainability" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact", path: "/contact-us" },
    {
      title: "More",
      path: "#",
      isDropdown: true,
      isMega: false,
      links: [
        { title: "Careers", path: "/careers" },
        { title: "Testimonials", path: "/testimonials" },
        { title: "Blogs", path: "/blogs" },
        { title: "News and Media", path: "/news" },
      ],
    },
  ];

  return (
    <Nav>
      <NavContainer>
        <LogoContainer to="/">
          <LogoImage src="/images/logo.jpeg" alt="B4Battery Logo" />
        </LogoContainer>

        <NavLinks $isOpen={isOpen}>
          {navItems.map((item) => {
            if (item.isDropdown) {
              const isDropdownActive =
                activeDropdown === item.title || mobileExpanded[item.title];

              return (
                <DropdownContainer
                  key={item.title}
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <DropdownTrigger
                    as={item.path === "#" ? "span" : NavLink}
                    to={item.path !== "#" ? item.path : undefined}
                    onClick={(e) => toggleMobileDropdown(item.title, e)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileExpanded[item.title]
                          ? "rotate(180deg)"
                          : "rotate(0)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </DropdownTrigger>

                  <DropdownMenu
                    $isVisible={isDropdownActive}
                    $isMega={item.isMega}
                  >
                    {item.isMega ? (
                      <MegaMenuGrid>
                        {item.groups.map((group) => (
                          <MenuGroup key={group.category}>
                            <MenuCategoryTitle>
                              {group.category}
                            </MenuCategoryTitle>
                            {group.links.map((link) => (
                              <DropdownItem
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                              >
                                {link.title}
                              </DropdownItem>
                            ))}
                          </MenuGroup>
                        ))}
                      </MegaMenuGrid>
                    ) : (
                      item.links.map((link) => (
                        <DropdownItem
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </DropdownItem>
                      ))
                    )}
                  </DropdownMenu>
                </DropdownContainer>
              );
            }

            return (
              <StyledNavLink
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </StyledNavLink>
            );
          })}
        </NavLinks>

        <ControlsContainer>
          <ThemeToggleWrapper>
            <ThemeToggle />
          </ThemeToggleWrapper>
          <MobileMenuContainer>
            <MobileMenuButton
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </MobileMenuButton>
          </MobileMenuContainer>
        </ControlsContainer>

        <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </NavContainer>
    </Nav>
  );
};

export default NavBar;

// --- Styled Components ---

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px; /* Slightly wider to accommodate new items */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  gap: 0.5rem;
  z-index: 101; /* Keep logo above mobile overlay */
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 101;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; /* Reduced slightly to fit more items */
  margin: 0 auto;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 320px;
    max-width: 85vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 6rem 2rem 2rem;
    background-color: var(--color-surface);
    box-shadow: var(--shadow-lg);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
    gap: 1.5rem;
    overflow-y: auto;
  }
`;

/* Base styles for Nav Links */
const navLinkStyles = `
  position: relative;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--color-primary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--color-primary);
    &::after { width: 100%; }
  }

  &.active {
    color: var(--color-primary);
    &::after { width: 100%; }
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    width: 100%;
    
    &::after { display: none; } /* Remove underline effect on mobile */
  }
`;

const StyledNavLink = styled(NavLink)`
  ${navLinkStyles}
`;

const DropdownTrigger = styled.div`
  ${navLinkStyles}

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: ${({ $isMega }) => ($isMega ? "100%" : "0")};
  transform: ${({ $isVisible, $isMega }) =>
    $isVisible
      ? $isMega
        ? "translate(-50%, 0)"
        : "translateY(0)"
      : $isMega
        ? "translate(-50%, -10px)"
        : "translateY(-10px)"};
  min-width: ${({ $isMega }) => ($isMega ? "750px" : "200px")};
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;
  padding: ${({ $isMega }) => ($isMega ? "2rem" : "0.5rem 0")};
  margin-top: 1rem; /* Gap between nav and dropdown */

  /* Invisible bridge to prevent mouse-leave when moving from trigger to menu */
  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 0;
    right: 0;
    height: 1rem;
  }

  @media (max-width: 1024px) {
    position: static;
    opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    height: ${({ $isVisible }) => ($isVisible ? "auto" : "0")};
    overflow: hidden;
    transform: none;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: ${({ $isVisible }) => ($isVisible ? "1rem 0 0 1rem" : "0")};
    margin-top: 0;
    min-width: 100%;
  }
`;

/* Mega Menu Grid System */
const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuCategoryTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 1024px) {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0.25rem;
  }
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 0.6rem 1rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-surface-secondary);
    color: var(--color-primary);
    transform: translateX(4px);
  }

  &.active {
    color: var(--color-primary);
    background: var(--color-surface-secondary);
  }

  @media (max-width: 1024px) {
    padding: 0.6rem 0;
    font-size: 1rem;

    &:hover {
      background: transparent;
      transform: none;
    }

    &.active {
      background: transparent;
    }
  }
`;

const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background-color: var(--color-overlay);
    backdrop-filter: blur(2px);
    z-index: 90;
  }
`;
