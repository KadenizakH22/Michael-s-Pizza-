"use client";

import { useState } from "react";

const logoImage =
  "https://static.wixstatic.com/media/1bcf6f_d180f52039994f92a93a02cd11b1a0bc~mv2.png/v1/fill/w_86%2Ch_92%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/MichaelsPizza_logo_Aug2016.png";
const heroPizzaImage =
  "/images/michaels-pizza-cutting.jpg";
const pizzaImage = "/images/michaels-pizza-cutting.jpg";
const pizzaCounterImage = "/images/michaels-pizzas-counter.jpg";
const pizzaCuttingImage = "/images/michaels-pizza-cutting.jpg";
const wingsImage = "/images/michaels-wings.jpg";
const cheesyBreadImage = "/images/michaels-cheesy-bread.jpg";
const subImage = "/images/michaels-sub-combo.jpg";
const restaurantImage = "/images/michaels-storefront.jpg";
const bogoDealImage =
  "https://static.wixstatic.com/media/1bcf6f_4829691076784f9d928be6db8e69a05d~mv2.png/v1/fill/w_967%2Ch_445%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Buy%20one%20pizza%2C%20get%20the%20second%20half%20off%20every%20day%20VERT%20116x9.png";
const custardTitleImage =
  "https://static.wixstatic.com/media/1bcf6f_da16e946e4a04bbd9e8050f533ac954e~mv2.png/v1/fill/w_416%2Ch_259%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Frozen%20Custard%20text%20v2.png";
const custardPhoto = "/images/michaels-custard-shakes.jpg";
const loyaltyImage =
  "https://static.wixstatic.com/media/1bcf6f_04ae3c3d32604a2186ccd5c139d68146~mv2.jpg/v1/fill/w_980%2Ch_980%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/2025%20Loyalty%20Program%201080x1080.jpg";
const textClubImage =
  "https://static.wixstatic.com/media/1bcf6f_af0d30ebffb04519b451be86b12cf3dc~mv2.jpg/v1/fill/w_640%2Ch_640%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/1bcf6f_af0d30ebffb04519b451be86b12cf3dc~mv2.jpg";
const dailyDealImages = [
  "https://static.wixstatic.com/media/1bcf6f_06b17dd6e23d42ebaad4aecec174522c~mv2.png/v1/fit/w_596%2Ch_391%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_06b17dd6e23d42ebaad4aecec174522c~mv2.png",
  "https://static.wixstatic.com/media/1bcf6f_4da93bae57dc455a8772ef502ee27b95~mv2.png/v1/fit/w_596%2Ch_389%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_4da93bae57dc455a8772ef502ee27b95~mv2.png",
  "https://static.wixstatic.com/media/1bcf6f_21ae7bcc792a4d04b4c633640e138886~mv2.png/v1/fit/w_572%2Ch_381%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_21ae7bcc792a4d04b4c633640e138886~mv2.png",
  "https://static.wixstatic.com/media/1bcf6f_b59c4daaaf7e45e9be014d9ae21b6749~mv2.png/v1/fit/w_597%2Ch_381%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_b59c4daaaf7e45e9be014d9ae21b6749~mv2.png",
  "https://static.wixstatic.com/media/1bcf6f_2ecb291db5d94aada319467d43a78a87~mv2.png/v1/fit/w_596%2Ch_381%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_2ecb291db5d94aada319467d43a78a87~mv2.png",
  "https://static.wixstatic.com/media/1bcf6f_a0c1f8e738224687a8cead5f3b27d60d~mv2.png/v1/fit/w_597%2Ch_381%2Cq_90%2Cenc_avif%2Cquality_auto/1bcf6f_a0c1f8e738224687a8cead5f3b27d60d~mv2.png",
];

const navLinks = [
  { label: "Deals", href: "#deals" },
  { label: "Menu", href: "#menu" },
  { label: "Custard", href: "#custard" },
  { label: "Text Club", href: "#text-club" },
  { label: "Location", href: "#location" },
];

const orderUrl = "https://order.michaelspizza.pizza/#/";
const phoneHref = "tel:+19313586161";
const phoneDisplay = "(931) 358-6161";
const addressDisplay = "2690 Madison St, Suite 100, Clarksville, TN 37043";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Michael%27s+Pizza+2690+Madison+St+Suite+100+Clarksville+TN+37043";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Michael%27s%20Pizza%202690%20Madison%20St%20Suite%20100%20Clarksville%20TN%2037043&output=embed";
const facebookUrl = "https://www.facebook.com/michaelspizzaandmore";
const instagramUrl = "https://www.instagram.com/michaelspizzaandmore";

const favorites = [
  {
    name: "Pizza",
    image: pizzaImage,
    text: "Hand-made pizzas with select ingredients, cooked to order for pick-up, delivery, or eat-in.",
  },
  {
    name: "Wings",
    image: wingsImage,
    text: "Cooked-to-order wings for game day, family night, or an easy carryout dinner.",
  },
  {
    name: "Cheesy Bread",
    image: cheesyBreadImage,
    text: "Warm, cheesy starters built for sharing before the pizza hits the table.",
  },
  {
    name: "Subs",
    image: subImage,
    text: "Toasty local-shop favorites alongside calzones, salads, and Michael's full menu.",
  },
  {
    name: "Frozen Custard",
    image: custardPhoto,
    text: "Made fresh and irresistibly smooth, with rotating flavors throughout the month.",
  },
  {
    name: "Daily Deals",
    image: bogoDealImage,
    text: "Fresh specials, great value, and family-friendly prices every day of the week.",
  },
];

const dailyDeals = [
  ["Sunday", "Any Large Pizza", "Your choice of any large pizza for $19."],
  ["Monday", "Medium Pizza + Custard", "Medium 2-topping pizza with a pint of chocolate frozen custard for $19."],
  ["Tuesday", "Large Pizza + 2-Liter", "Large 2-topping pizza with a 2-liter drink for $20."],
  ["Wednesday", "Large Specialty Deal", "Any large specialty pizza for the medium price."],
  ["Thursday", "Pepperoni + Custard", "Large pepperoni pizza with a pint of frozen custard for $20."],
  ["Friday", "BOGO Half Off", "Buy one pizza and get one pizza half price."],
  ["Saturday", "BOGO Half Off", "Buy one pizza and get one pizza half price."],
];

const gallery = [
  { src: pizzaCounterImage, label: "Pizza lineup" },
  { src: wingsImage, label: "Saucy wings" },
  { src: subImage, label: "Toasted subs" },
  { src: custardPhoto, label: "Frozen custard" },
  { src: cheesyBreadImage, label: "Cheesy bread" },
  { src: restaurantImage, label: "Michael's storefront" },
];

const faqs = [
  ["Do you offer daily deals?", "Yes. Michael's offers daily specials, including buy-one-get-the-second-pizza-half-off every day."],
  ["Can I order online?", "Yes. Use the Order Online button to order through Michael's online ordering system."],
  ["Do you offer frozen custard?", "Yes. Michael's serves fresh frozen custard with rotating flavors."],
  ["What are your hours?", "Michael's is open every day from 11 AM to 9 PM."],
  ["Where are you located?", "2690 Madison St, Suite 100, Clarksville, TN 37043."],
  ["Do you have a rewards or text club?", "Yes. Customers can join Michael's text club for exclusive offers and updates."],
];

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-coal text-cream">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <FeaturedDeal />
      <SignatureFavorites />
      <DailyDeals />
      <CustardSpotlight />
      <RewardsAndTextClub />
      <LocalStory />
      <FoodGallery />
      <CommunityTrust />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Location />
      <Footer />
    </main>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-crust/20 bg-ember/88 shadow-card backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Michael's Pizza home">
          <span className="grid h-12 w-12 rotate-[-6deg] place-items-center overflow-hidden rounded-full border-2 border-gold bg-paper shadow-glow">
            <img src={logoImage} alt="" className="h-10 w-10 object-contain" />
          </span>
          <span>
            <span className="block font-display text-2xl uppercase tracking-wide text-cream">
              Michael&apos;s
            </span>
            <span className="-mt-1 block text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Pizza
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-black uppercase tracking-[0.14em] text-cream/82 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={phoneHref} className="rounded-full border border-crust/30 bg-coal/35 px-5 py-3 text-sm font-black uppercase tracking-wide text-cream transition hover:border-gold hover:text-gold">
            Call Now
          </a>
          <a href={orderUrl} className="rounded-full bg-gold px-6 py-3 text-sm font-black uppercase tracking-wide text-coal shadow-glow transition hover:-translate-y-0.5 hover:bg-crust">
            Order Online
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-cream" />
            <span className="block h-0.5 w-5 bg-cream" />
            <span className="block h-0.5 w-5 bg-cream" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-crust/20 bg-ember px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-sm gap-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em]"
              >
                {link.label}
              </a>
            ))}
            <a href={orderUrl} onClick={() => setMenuOpen(false)} className="rounded-full bg-gold px-5 py-3 font-black uppercase text-coal">
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <img src={heroPizzaImage} alt="Fresh Michael's pizza" className="hero-food-crop absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-coal/88 via-ember/68 to-coal/94" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,183,63,0.18),transparent_40rem)]" />
      <div className="noise absolute inset-0 opacity-35" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] place-items-center py-24 text-center sm:py-28">
        <div className="max-w-4xl">
          <p className="mb-8 inline-flex rounded-full border-2 border-gold bg-paper px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-sauce shadow-card">
            Clarksville&apos;s Local Favorite Since 1985
          </p>
          <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-[6px] border-gold bg-paper p-4 shadow-glow sm:h-44 sm:w-44">
            <div className="grid h-full w-full place-items-center rounded-full border-2 border-sauce/35 bg-cream">
              <img src={logoImage} alt="Michael's Pizza logo" className="h-24 w-24 object-contain sm:h-32 sm:w-32" />
            </div>
          </div>
          <h1 className="mx-auto mt-9 max-w-4xl font-display text-5xl font-black uppercase leading-[0.98] text-cream drop-shadow-2xl sm:text-6xl lg:text-7xl">
            Pizza, Custard &amp; Daily Deals in Clarksville
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-8 text-cream/86 sm:text-xl">
            Family-owned, locally loved, and serving Clarksville since 1985 with pizza, wings, frozen custard, and fresh daily deals.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={orderUrl} className="rounded-full bg-sauce px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-tomato">
              Order Online
            </a>
            <a href="#menu" className="rounded-full border-2 border-cream/35 bg-ember/60 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-cream transition hover:-translate-y-1 hover:border-gold hover:text-gold">
              View Menu
            </a>
            <a href={phoneHref} className="rounded-full bg-gold px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-coal transition hover:-translate-y-1 hover:bg-crust">
              Call Now
            </a>
          </div>

          <div className="mx-auto mt-9 inline-flex rounded-full border border-crust/30 bg-coal/55 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-cream/86 backdrop-blur">
            Dine-In &bull; Carryout &bull; Delivery
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-crust/25 bg-ember/64 p-5 shadow-card backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">
              {addressDisplay} &bull; Open every day 11 AM - 9 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedDeal() {
  return (
    <section id="deals" className="paper-texture py-20 text-coal">
      <div className="section-shell">
        <div className="checker-edge mb-8 h-6 rounded-full shadow-card" />
        <div className="coupon-card grid overflow-hidden rounded-[2rem] border-4 border-dashed border-sauce bg-cream shadow-card lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="inline-flex rotate-[-3deg] rounded-full bg-sauce px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cream shadow-card">
              Featured Michael&apos;s Deal
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] sm:text-6xl">
              Buy One Pizza, Get the Second Half Off
            </h2>
            <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-coal/78">
              Buy any pizza at regular price and get a second pizza half off - any size, any toppings. Discount applies to the lower-priced pizza.
            </p>
            <p className="mt-4 max-w-xl text-sm font-black uppercase tracking-[0.16em] text-sauce">
              No size restrictions. No gimmicks. Just great pizza at a better price.
            </p>
            <a href={orderUrl} className="mt-8 inline-flex rounded-full bg-sauce px-8 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:-translate-y-1 hover:bg-tomato">
              Order This Deal
            </a>
          </div>
          <div className="relative grid min-h-[340px] place-items-center bg-ember p-6 sm:p-10">
            <img src={bogoDealImage} alt="Michael's Pizza BOGO half-off deal" className="max-h-[420px] w-full rounded-3xl object-contain shadow-card" />
            <div className="absolute bottom-6 left-6 rotate-[-4deg] rounded-2xl border-2 border-gold bg-ember/92 p-5 text-cream backdrop-blur">
              <p className="font-display text-4xl text-gold">2nd Pizza</p>
              <p className="font-black uppercase tracking-[0.2em]">Half Off</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureFavorites() {
  return (
    <section id="menu" className="noise py-20">
      <SectionHeading eyebrow="Signature favorites" title="All Your Michael's Favorites" text="Michael's specializes in hand-made pizzas, calzones, subs, salads, wings, frozen custard, and daily deals." />
      <div className="section-shell mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((item) => (
          <article key={item.name} className="group overflow-hidden rounded-3xl border border-crust/20 bg-ember shadow-card transition hover:-translate-y-1 hover:border-gold/60">
            <div className="image-wash relative h-60 overflow-hidden bg-coal">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="mb-3 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-sauce">
                Local favorite
              </span>
              <h3 className="font-display text-3xl uppercase text-cream">{item.name}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-cream/70">{item.text}</p>
              <a href={orderUrl} className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-gold">
                Order {item.name}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DailyDeals() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="cardboard-texture py-20 text-coal">
      <SectionHeading eyebrow="Daily deals" title="Fresh Specials Every Day" text="Fresh specials, great value, and your favorites at the best prices of the week." darkText />
      <div className="section-shell mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dailyDeals.map(([day, title, text], index) => {
          const isToday = day === today;

          return (
          <article key={day} className={`coupon-card rotate-[-1deg] rounded-3xl border-2 border-dashed p-6 shadow-card transition hover:rotate-0 ${isToday ? "border-sauce bg-gold text-coal" : "border-sauce/55 bg-paper text-coal"}`}>
            <img
              src={dailyDealImages[Math.min(index, dailyDealImages.length - 1)]}
              alt={`${day} Michael's Pizza daily deal`}
              className="mb-5 aspect-[3/2] w-full rounded-2xl border border-sauce/20 bg-cream object-contain p-2"
            />
            <p className="inline-flex rounded-full bg-sauce px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cream">{isToday ? `${day} - Today` : day}</p>
            <h3 className="mt-4 font-display text-3xl uppercase leading-none">{title}</h3>
            <p className="mt-4 text-sm font-bold leading-6 text-coal/72">{text}</p>
          </article>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <a href={orderUrl} className="inline-flex rounded-full bg-sauce px-8 py-4 text-sm font-black uppercase tracking-wide text-cream shadow-card transition hover:-translate-y-1 hover:bg-tomato">
          Order Online
        </a>
      </div>
    </section>
  );
}

function CustardSpotlight() {
  return (
    <section id="custard" className="bg-cream py-20 text-coal">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-crust shadow-card">
          <img src={custardPhoto} alt="Michael's frozen custard" className="h-[460px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/85 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-coal/82 p-6 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Frozen custard</p>
            <h3 className="mt-2 font-display text-4xl uppercase">Rotating Flavors</h3>
          </div>
        </div>
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-coal">Custard spotlight</p>
          <img src={custardTitleImage} alt="Frozen Custard" className="mt-5 max-h-28 w-auto" />
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Michael&apos;s Famous Frozen Custard
          </h2>
          <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-coal/72">
            Made fresh and irresistibly smooth, our Frozen Custard flavors change monthly to keep things deliciously exciting.
          </p>
          <p className="mt-4 max-w-xl text-base font-bold leading-7 text-coal/68">
            Fresh frozen custard, always smooth and sweet - new flavors arrive two times a week.
          </p>
          <a href={orderUrl} className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-black uppercase tracking-wide text-coal transition hover:-translate-y-1 hover:bg-crust">
            Order Custard
          </a>
        </div>
      </div>
    </section>
  );
}

function RewardsAndTextClub() {
  return (
    <section id="text-club" className="noise py-14 sm:py-16">
      <div className="section-shell grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-ember p-8 shadow-card sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Loyalty</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none">Rewards for Regulars</h2>
          <p className="mt-5 text-lg leading-8 text-cream/76">
            Michael&apos;s keeps regulars connected with loyalty updates, exclusive offers, and easy online ordering.
          </p>
          <img src={loyaltyImage} alt="Michael's Pizza loyalty program" className="mt-7 aspect-square w-full rounded-3xl border border-crust/20 object-cover" />
          <a href={orderUrl} className="mt-8 inline-flex rounded-full bg-sauce px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-tomato">
            Order Online
          </a>
        </article>

        <article className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gold p-8 text-coal shadow-glow sm:p-10">
          <div className="absolute -right-8 top-8 hidden h-72 w-72 rotate-6 overflow-hidden rounded-[2rem] border-8 border-coal bg-paper shadow-card sm:block">
            <img src={textClubImage} alt="Michael's Pizza text club promotion" className="h-full w-full object-cover" />
          </div>
          <div className="relative max-w-md">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sauce">Text club</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">Join Michael&apos;s Text Club</h2>
            <p className="mt-5 text-lg leading-8 text-coal/76">
              Sign up for the Michael&apos;s Pizza Text Club and never miss a deal!
            </p>
            <p className="mt-4 text-lg font-bold leading-8 text-coal/80">
              Text PIZZA to 931-297-1983 to get exclusive offers, discounts, and giveaway alerts sent straight to your phone.
            </p>
            <img src={textClubImage} alt="Michael's Pizza text club" className="mt-6 aspect-square w-full rounded-3xl border-4 border-coal/15 object-cover sm:hidden" />
            <a href="sms:9312971983?body=PIZZA" className="mt-8 inline-flex rounded-full bg-coal px-8 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:-translate-y-1">
              Join the Text Club
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function LocalStory() {
  return (
    <section className="bg-coal py-14 sm:py-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-paper px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-sauce shadow-card">Clarksville local legend</p>
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Locally Owned. Clarksville-Loved.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/76">
            Michael&apos;s Pizza has been locally owned and operated in Clarksville since February 1, 1985, serving hometown-taste pizza, wings, subs, calzones, salads, frozen custard, and daily deals.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Since 1985", "Hometown taste", "Daily value"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-ember p-5">
                <p className="font-display text-3xl uppercase text-gold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
          <img src={restaurantImage} alt="Cozy local restaurant dining room" className="h-[440px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/75 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FoodGallery() {
  return (
    <section className="py-14 sm:py-16">
      <SectionHeading eyebrow="Food gallery" title="Hot, Saucy, Sweet, and Local" text="Real Michael's food and storefront photos keep the page warm, familiar, and grounded in the restaurant." />
      <div className="section-shell mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <figure key={item.label} className={`image-wash relative overflow-hidden rounded-3xl border border-white/10 shadow-card ${index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
            <img src={item.src} alt={item.label} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            <figcaption className="absolute bottom-5 left-5 z-10 font-display text-2xl uppercase text-cream">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CommunityTrust() {
  return (
    <section className="paper-texture py-20 text-coal">
      <SectionHeading eyebrow="Clarksville favorite" title="A Clarksville Favorite Since 1985" text="The real basics that make Michael's a local pizza stop: hometown taste, daily value, and a full menu for the whole family." darkText />
      <div className="section-shell mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Since 1985", "Serving Clarksville with pizza, wings, subs, frozen custard, and daily specials."],
          ["Hometown Taste", "Classic pizza-shop comfort, local flavor, and family-owned charm."],
          ["Daily Value", "BOGO pizza deals, rewards, text-club offers, and rotating specials."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-3xl border-2 border-dashed border-sauce/45 bg-cream p-7 shadow-card">
            <div className="font-black uppercase tracking-[0.18em] text-sauce">{title}</div>
            <p className="mt-5 text-xl font-bold leading-8">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number;
  setOpenFaq: (index: number) => void;
}) {
  return (
    <section className="noise py-14 sm:py-16">
      <SectionHeading eyebrow="FAQ" title="Before You Call or Come By" text="Friendly answers for the basics: daily deals, online ordering, custard, hours, location, and the text club." />
      <div className="section-shell mt-10 max-w-3xl">
        {faqs.map(([question, answer], index) => {
          const isOpen = openFaq === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
          <div key={question} className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-ember">
            <button
              id={buttonId}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setOpenFaq(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-display text-2xl uppercase">{question}</span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-2xl text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-cream/72">{answer}</p>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-coal py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-paper px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-sauce shadow-card">Location and contact</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none">Find Michael&apos;s in Clarksville</h2>
          <div className="mt-8 grid gap-4">
            <InfoCard label="Address" value={addressDisplay} />
            <InfoCard label="Phone" value={phoneDisplay} />
            <InfoCard label="Hours" value="Open everyday 11 AM - 9 PM" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={directionsUrl} className="rounded-full bg-gold px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-coal">
              Get Directions
            </a>
            <a href={phoneHref} className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black uppercase tracking-wide">
              Call Now
            </a>
            <a href={orderUrl} className="rounded-full bg-sauce px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white">
              Order Online
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border-4 border-crust/35 bg-ember shadow-card">
          <iframe
            title="Map to Michael's Pizza in Clarksville"
            src={mapEmbedUrl}
            className="h-[430px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex justify-center border-t border-crust/20 bg-ember p-5 sm:justify-end">
            <a href={directionsUrl} className="rounded-full bg-gold px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-coal">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = [
    { label: "Order Online", href: orderUrl },
    { label: "Menu", href: "#menu" },
    { label: "Daily Deals", href: "#deals" },
    { label: "Text Club", href: "#text-club" },
  ];

  return (
    <footer className="border-t border-white/10 bg-ember py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl uppercase">Michael&apos;s Pizza</p>
          <p className="mt-3 max-w-sm text-sm font-bold leading-6 text-cream/70">
            {addressDisplay} &bull; {phoneDisplay} &bull; Open everyday 11 AM - 9 PM
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.16em] text-cream/68">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a href={facebookUrl} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-black uppercase text-gold transition hover:border-gold" aria-label="Michael's Pizza on Facebook">
            f
          </a>
          <a href={instagramUrl} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-black uppercase text-gold transition hover:border-gold" aria-label="Michael's Pizza on Instagram">
            ig
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  darkText = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  darkText?: boolean;
}) {
  return (
    <div className="section-shell text-center">
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${darkText ? "text-sauce" : "text-gold"}`}>{eyebrow}</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-none sm:text-6xl">
        {title}
      </h2>
      <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${darkText ? "font-bold text-coal/72" : "text-cream/70"}`}>{text}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ember p-5">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">{label}</p>
      <p className="mt-2 text-lg font-bold text-cream">{value}</p>
    </div>
  );
}
