"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Star, QrCode, Clock, Utensils, Waves, Sparkles, Menu, X } from "lucide-react"

export default function HotelPage() {
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const facilities = [
    {
      title: "Fine Dining Restaurant",
      description: "Michelin-starred cuisine with locally sourced ingredients",
      image: "/elegant-restaurant-interior-with-fine-dining-setup.png",
      icon: <Utensils className="h-6 w-6" />,
      qrCode: "restaurant-menu",
    },
    {
      title: "Rooftop Sky Bar",
      description: "Panoramic city views with craft cocktails and sunset dining",
      image: "/luxury-rooftop-bar-with-city-skyline-view-at-sunse.png",
      icon: <Waves className="h-6 w-6" />,
      qrCode: "rooftop-menu",
    },
    {
      title: "Luxury Spa & Wellness",
      description: "Rejuvenating treatments in a tranquil oasis",
      image: "/serene-spa-treatment-room-with-massage-table-and-c.png",
      icon: <Sparkles className="h-6 w-6" />,
      qrCode: "spa-services",
    },
  ]

  const menuItems = [
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium Japanese beef with truffle reduction",
      price: "$85",
      image: "/gourmet-wagyu-beef-dish-with-elegant-plating.png",
    },
    {
      name: "Pan-Seared Lobster",
      description: "Fresh Atlantic lobster with saffron butter",
      price: "$65",
      image: "/elegant-lobster-dish-with-saffron-sauce.png",
    },
    {
      name: "Signature Tasting Menu",
      description: "7-course culinary journey by our head chef",
      price: "$120",
      image: "/elegant-tasting-menu-presentation-multiple-courses.png",
    },
  ]

  const rooftopDrinks = [
    {
      name: "Sky Martini",
      description: "Premium gin with elderflower and city lights",
      price: "$18",
      image: "/elegant-martini-glass-with-city-lights-background.png",
    },
    {
      name: "Sunset Sangria",
      description: "Spanish wine blend with seasonal fruits",
      price: "$15",
      image: "/colorful-sangria-pitcher-with-fresh-fruits.png",
    },
    {
      name: "Champagne Selection",
      description: "Curated collection of premium champagnes",
      price: "$25-85",
      image: "/champagne-flutes-with-bubbles-elegant-presentation.png",
    },
  ]

  const spaServices = [
    {
      name: "Royal Relaxation Massage",
      description: "90-minute full body therapeutic massage",
      price: "$180",
      duration: "90 min",
    },
    {
      name: "Diamond Facial Treatment",
      description: "Luxury anti-aging facial with premium products",
      price: "$220",
      duration: "75 min",
    },
    {
      name: "Couples Spa Package",
      description: "Romantic spa experience for two",
      price: "$350",
      duration: "120 min",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-playfair font-bold text-xl">DH</span>
              </div>
              <div>
                <h1
                  className={`font-playfair font-bold text-xl group-hover:text-primary transition-colors duration-300 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Dreams Hotel
                </h1>
                <p className={`text-xs -mt-1 ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>HOTEL</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#facilities"
                className={`hover:text-primary transition-all duration-300 relative group ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Facilities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#restaurant"
                className={`hover:text-primary transition-all duration-300 relative group ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Restaurant
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#rooftop"
                className={`hover:text-primary transition-all duration-300 relative group ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Sky Bar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#spa"
                className={`hover:text-primary transition-all duration-300 relative group ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Spa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#booking"
                className={`hover:text-primary transition-all duration-300 relative group ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Book Now
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className={`hover:scale-105 transition-transform duration-300 ${
                  scrolled ? "bg-transparent" : "bg-transparent border-white text-white hover:bg-white/10"
                }`}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reserve Now
              </Button>
            </div>

            <button
              className={`md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative">
                <Menu
                  className={`h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
                />
                <X
                  className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                />
              </div>
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-border/50">
              <div className="flex flex-col space-y-4">
                {["facilities", "restaurant", "rooftop", "spa", "booking"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`hover:text-primary transition-all duration-300 py-2 hover:translate-x-2 capitalize ${
                      scrolled ? "text-foreground" : "text-white"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item === "rooftop" ? "Sky Bar" : item}
                  </a>
                ))}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex-1 hover:scale-105 transition-transform duration-300 ${
                      scrolled ? "bg-transparent" : "bg-transparent border-white text-white hover:bg-white/10"
                    }`}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: "url('/luxury-hotel-exterior-with-elegant-architecture-an.png')",
            transform: `translateY(${scrolled ? "10px" : "0px"}) scale(1.1)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1
            className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-balance animate-slide-up opacity-0"
            style={{ animation: "slideUp 1s ease-out 0.5s forwards" }}
          >
            Dreams Hotel
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-balance font-light animate-slide-up opacity-0"
            style={{ animation: "slideUp 1s ease-out 0.8s forwards" }}
          >
            Where luxury meets exceptional service in the heart of the city
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25 animate-slide-up opacity-0"
            style={{ animation: "slideUp 1s ease-out 1.1s forwards" }}
          >
            Book Your Stay
          </Button>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      <section id="facilities" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our exceptional amenities designed to create unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {facility.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors duration-300">
                    {facility.title}
                  </CardTitle>
                  <CardDescription className="text-base">{facility.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent hover:scale-105 transition-transform duration-300"
                    >
                      <QrCode className="h-4 w-4" />
                      Scan Menu
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="restaurant" className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Culinary Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Savor exceptional dishes crafted by our award-winning chefs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold animate-pulse group-hover:animate-bounce">
                    {item.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Button
              variant="outline"
              size="lg"
              className="mr-4 bg-transparent hover:scale-105 transition-transform duration-300"
            >
              <QrCode className="h-4 w-4 mr-2" />
              Full Menu QR
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      <section id="rooftop" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-shift"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Sky Bar Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elevate your evening with panoramic views and handcrafted cocktails
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooftopDrinks.map((drink, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up backdrop-blur-sm bg-card/80"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={drink.image || "/placeholder.svg"}
                    alt={drink.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold group-hover:animate-pulse">
                    {drink.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair group-hover:text-primary transition-colors duration-300">
                    {drink.name}
                  </CardTitle>
                  <CardDescription>{drink.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <Button
              variant="outline"
              size="lg"
              className="mr-4 bg-transparent hover:scale-105 transition-transform duration-300"
            >
              <QrCode className="h-4 w-4 mr-2" />
              Drinks Menu QR
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      <section id="spa" className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-card-foreground mb-4">Wellness & Spa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejuvenate your body and mind in our tranquil spa sanctuary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {spaServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-playfair group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground group-hover:animate-pulse">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary animate-breathing">{service.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                      Book Treatment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-white/5 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Book Your Stay</h2>
            <p className="text-lg opacity-90">Experience luxury and comfort at Dreams Hotel</p>
          </div>

          <Card
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { id: "checkin", label: "Check-in", type: "date", value: bookingData.checkIn, key: "checkIn" },
                  { id: "checkout", label: "Check-out", type: "date", value: bookingData.checkOut, key: "checkOut" },
                  {
                    id: "guests",
                    label: "Guests",
                    type: "number",
                    value: bookingData.guests,
                    key: "guests",
                    min: "1",
                    max: "8",
                  },
                  {
                    id: "rooms",
                    label: "Rooms",
                    type: "number",
                    value: bookingData.rooms,
                    key: "rooms",
                    min: "1",
                    max: "5",
                  },
                ].map((field, index) => (
                  <div
                    key={field.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <Label htmlFor={field.id} className="text-primary-foreground">
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      min={field.min}
                      max={field.max}
                      value={field.value}
                      onChange={(e) => setBookingData({ ...bookingData, [field.key]: e.target.value })}
                      className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-white/70 focus:bg-white/30 focus:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-3 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25"
                >
                  Check Availability
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Dreams Hotel",
                content: (
                  <>
                    <p className="text-background/80 mb-4">
                      Luxury redefined in the heart of the city, where every moment becomes a cherished memory.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent animate-twinkle"
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-background/80">5-Star Luxury</span>
                    </div>
                  </>
                ),
              },
              {
                title: "Contact",
                content: (
                  <div className="space-y-2 text-background/80">
                    {[
                      { icon: MapPin, text: "15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria" },
                      { icon: Phone, text: "+234 (0) 901 234 5678" },
                      { icon: Mail, text: "reservations@dreamshotel.com" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 hover:text-background transition-colors duration-300"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "Services",
                content: (
                  <ul className="space-y-2 text-background/80">
                    {[
                      "Fine Dining Restaurant",
                      "Rooftop Sky Bar",
                      "Luxury Spa & Wellness",
                      "Concierge Services",
                      "Valet Parking",
                    ].map((service, i) => (
                      <li
                        key={i}
                        className="hover:text-background hover:translate-x-2 transition-all duration-300 cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "Quick Access",
                content: (
                  <div className="space-y-3">
                    {["Restaurant Menu", "Rooftop Menu", "Spa Services"].map((item, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start bg-transparent hover:bg-white/10 hover:scale-105 transition-all duration-300"
                      >
                        <QrCode className="h-4 w-4 mr-2" />
                        {item}
                      </Button>
                    ))}
                  </div>
                ),
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <h3
                  className={`${index === 0 ? "font-playfair text-2xl" : "text-lg"} font-${index === 0 ? "bold" : "semibold"} mb-4`}
                >
                  {section.title}
                </h3>
                {section.content}
              </div>
            ))}
          </div>

          <div
            className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            <p>&copy; 2024 Dreams Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
