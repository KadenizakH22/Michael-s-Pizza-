const logoImage =
  "https://static.wixstatic.com/media/1bcf6f_d180f52039994f92a93a02cd11b1a0bc~mv2.png/v1/fill/w_86%2Ch_92%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/MichaelsPizza_logo_Aug2016.png";

const images = {
  hero: "/images/michaels-pizza-cutting.jpg",
  pizzas: "/images/michaels-pizzas-counter.jpg",
  pepperoni: "/images/michaels-pepperoni-closeup.jpg",
  wings: "/images/michaels-wings.jpg",
  cheesyBread: "/images/michaels-cheesy-bread.jpg",
  subs: "/images/michaels-sub-combo.jpg",
  custard: "/images/michaels-custard-shakes.jpg",
  storefront: "/images/michaels-storefront.jpg",
};

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

const navLinks = [
  { label: "Deals", href: "#deals" },
  { label: "Menu", href: "#menu" },
  { label: "Custard", href: "#custard" },
  { label: "Location", href: "#location" },
];

type Favorite = {
  name: string;
  text: string;
  image?: string;
  dealGraphic?: boolean;
};

const favorites: Favorite[] = [
  {
    name: "Pizza",
    image: images.pizzas,
    text: "Hand-made pizzas with select ingredients, cooked to order for dine-in, carryout, or delivery.",
  },
  {
    name: "Wings",
    image: images.wings,
    text: "Saucy, cooked-to-order wings for game day, family night, or an easy pickup dinner.",
  },
  {
    name: "Cheesy Bread",
    image: images.cheesyBread,
    text: "Warm, shareable starters with the comfort of a classic neighborhood pizza shop.",
  },
  {
    name: "Subs",
    image: images.subs,
    text: "Toasty sandwiches alongside calzones, salads, pizza, and frozen custard.",
  },
  {
    name: "Daily Deals",
    dealGraphic: true,
    text: "Fresh specials, great value, and family-friendly prices every day of the week.",
  },
];

const dailyDeals = [
  ["Sunday", "Any Large Pizza", "Any large pizza for $19."],
  ["Monday", "Pizza + Custard", "Medium 2-topping pizza with a pint of chocolate custard for $19."],
  ["Tuesday", "Pizza + 2-Liter", "Large 2-topping pizza with a 2-liter drink for $20."],
  ["Wednesday", "Specialty Deal", "Any large specialty pizza for the medium price."],
  ["Thursday", "Pepperoni + Custard", "Large pepperoni pizza with a pint of custard for $20."],
  ["Friday", "BOGO Half Off", "Buy one pizza and get the second pizza half off."],
  ["Saturday", "BOGO Half Off", "Buy one pizza and get the second pizza half off."],
];

const gallery = [
  { src: images.hero, label: "Fresh pizza" },
  { src: images.wings, label: "Saucy wings" },
  { src: images.cheesyBread, label: "Cheesy bread" },
  { src: images.subs, label: "Toasted subs" },
  { src: images.custard, label: "Frozen custard" },
  { src: images.storefront, label: "Clarksville shop" },
];

const faqs = [
  ["Do you offer daily deals?", "Yes. Michael's offers daily specials and pizza value deals throughout the week."],
  ["Can I order online?", "Yes. Use the Order Online button to order through Michael's online ordering system."],
  ["Do you offer frozen custard?", "Yes. Michael's serves fresh frozen custard with rotating flavors."],
  ["What are your hours?", "Michael's is open every day from 11 AM to 9 PM."],
  ["Where are you located?", addressDisplay],
];

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-coal text-cream">
      <Header />
      <Hero />
      <DealStrip />
      <Favorites />
      <DailyDeals />
      <Custard />
      <LocalStory />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-crust/20 bg-ember/92 shadow-card backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Michael's Pizza home">
          <span className="grid h-12 w-12 shrink-0 rotate-[-5deg] place-items-center overflow-hidden rounded-full border-2 border-gold bg-paper shadow-glow">
            <img src={logoImage} alt="" className="h-10 w-10 object-contain" decoding="async" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-2xl uppercase leading-none text-cream">
              Michael&apos;s
            </span>
            <span className="block text-xs font-black uppercase tracking-[0.28em] text-gold">
              Pizza
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-black uppercase tracking-[0.14em] text-cream/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={phoneHref}
            className="hidden rounded-full border border-crust/30 bg-coal/35 px-5 py-3 text-sm font-black uppercase tracking-wide text-cream transition hover:border-gold hover:text-gold sm:inline-flex"
          >
            Call
          </a>
          <a
            href={orderUrl}
            className="rounded-full bg-gold px-5 py-3 text-sm font-black uppercase tracking-wide text-coal shadow-glow transition hover:-translate-y-0.5 hover:bg-crust"
          >
            Order
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <img
        src={images.hero}
        alt="Fresh Michael's pizza being cut"
        className="hero-food-crop absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coal/90 via-ember/72 to-coal/95" />
      <div className="noise absolute inset-0 opacity-35" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] place-items-center py-20 text-center sm:py-24">
        <div className="max-w-4xl">
          <p className="mb-7 inline-flex rounded-full border-2 border-gold bg-paper px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-sauce shadow-card">
            Clarksville local favorite since 1985
          </p>
          <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-[6px] border-gold bg-paper p-4 shadow-glow sm:h-44 sm:w-44">
            <div className="grid h-full w-full place-items-center rounded-full border-2 border-sauce/35 bg-cream">
              <img
                src={logoImage}
                alt="Michael's Pizza logo"
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
                decoding="async"
              />
            </div>
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-black uppercase leading-[0.98] text-cream drop-shadow-2xl sm:text-6xl lg:text-7xl">
            Pizza, Custard &amp; Daily Deals in Clarksville
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-8 text-cream/86 sm:text-xl">
            Family-owned pizza, wings, frozen custard, and fresh daily deals from Michael&apos;s Pizza.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={orderUrl}
              className="rounded-full bg-sauce px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-tomato"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="rounded-full border-2 border-cream/35 bg-ember/65 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-cream transition hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              View Menu
            </a>
            <a
              href={phoneHref}
              className="rounded-full bg-gold px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-coal transition hover:-translate-y-1 hover:bg-crust"
            >
              Call Now
            </a>
          </div>

          <p className="mx-auto mt-9 max-w-2xl rounded-3xl border border-crust/25 bg-ember/70 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-cream/86 shadow-card backdrop-blur">
            {addressDisplay} &bull; Open every day 11 AM - 9 PM
          </p>
        </div>
      </div>
    </section>
  );
}

function DealStrip() {
  return (
    <section id="deals" className="paper-texture py-16 text-coal sm:py-20">
      <div className="section-shell">
        <div className="checker-edge mb-8 h-6 rounded-full shadow-card" />
        <div className="coupon-card grid overflow-hidden rounded-3xl border-4 border-dashed border-sauce bg-cream shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b-4 border-dashed border-sauce/55 p-8 sm:p-12 lg:border-b-0 lg:border-r-4 lg:p-14">
            <p className="inline-flex rounded-full bg-sauce px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cream shadow-card">
              Limited Time Offer
            </p>
            <h2 className="mt-5 max-w-xl font-black uppercase leading-none text-coal">
              <span className="block font-display text-4xl leading-[0.96] sm:text-5xl lg:text-6xl">
                Buy One Pizza, Get The Second Half Off!
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-coal/76">
              Buy any pizza at regular price and get a second pizza half off. Discount applies to the lower-priced pizza.
            </p>
            <a
              href={orderUrl}
              className="mt-8 inline-flex rounded-full bg-sauce px-8 py-4 text-sm font-black uppercase tracking-wide text-cream transition hover:-translate-y-1 hover:bg-tomato"
            >
              Order Now
            </a>
          </div>

          <div className="bg-ember p-6 text-cream sm:p-10">
            <div className="relative grid min-h-[330px] overflow-hidden rounded-2xl border-2 border-gold bg-paper p-5 text-coal shadow-card sm:p-7">
              <div className="absolute inset-x-0 top-0 h-4 checker-edge" />
              <div className="absolute inset-x-0 bottom-0 h-4 checker-edge" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-7 rounded-xl border-2 border-dashed border-sauce/65 bg-cream px-5 py-7 text-center shadow-card sm:px-8">
                <PromoPizzaBoxVisual />
                <div className="mx-auto w-full max-w-md border-y-4 border-double border-sauce/80 py-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-coal/72">
                    Buy one pizza
                  </p>
                  <p className="mt-1 font-display text-5xl uppercase leading-none text-sauce sm:text-6xl">
                    2nd Pizza
                  </p>
                  <p className="mt-2 text-3xl font-black uppercase leading-none tracking-wide text-coal sm:text-4xl">
                    Half Off
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <p className="rounded-lg border border-sauce/35 bg-paper px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-sauce">
                    Any Size
                  </p>
                  <p className="rounded-lg border border-sauce/35 bg-paper px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-sauce">
                    Any Toppings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoPizzaBoxVisual() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-sm" aria-hidden="true">
      <div className="absolute left-2 top-6 h-24 w-36 rotate-[-7deg] rounded-xl border-4 border-sauce bg-box shadow-card">
        <div className="absolute inset-3 rounded-lg border-2 border-dashed border-cream/80" />
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-gold bg-cream">
          <span className="absolute left-3 top-3 h-2 w-2 rounded-full bg-sauce" />
          <span className="absolute right-3 top-4 h-2 w-2 rounded-full bg-sauce" />
          <span className="absolute bottom-3 left-5 h-2 w-2 rounded-full bg-sauce" />
        </div>
      </div>
      <div className="absolute right-2 top-1 h-28 w-28 overflow-hidden rounded-full border-4 border-gold bg-paper shadow-card">
        <img
          src={images.pepperoni}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full border-2 border-sauce bg-gold px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-coal shadow-card">
        Hot Deal
      </div>
    </div>
  );
}

function MiniDealGraphic() {
  return (
    <div className="relative h-56 overflow-hidden bg-paper p-4 text-coal">
      <div className="absolute inset-x-0 top-0 h-4 checker-edge" />
      <div className="absolute inset-x-0 bottom-0 h-4 checker-edge" />
      <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl border-2 border-dashed border-sauce bg-cream px-4 py-5 text-center shadow-card">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-sauce px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-cream">
            Limited
          </span>
          <span className="rounded-full bg-gold px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-coal">
            Daily Deal
          </span>
        </div>
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-gold bg-paper shadow-card">
          <div className="relative h-11 w-11 rounded-full border-2 border-crust bg-gold">
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-sauce" />
            <span className="absolute right-2 top-3 h-2 w-2 rounded-full bg-sauce" />
            <span className="absolute bottom-2 left-5 h-2 w-2 rounded-full bg-sauce" />
          </div>
        </div>
        <div>
          <p className="font-display text-4xl uppercase leading-none text-sauce">2nd Pizza</p>
          <p className="mt-1 text-2xl font-black uppercase leading-none text-coal">Half Off</p>
        </div>
      </div>
    </div>
  );
}

function Favorites() {
  return (
    <section id="menu" className="noise py-16 sm:py-20">
      <SectionHeading
        eyebrow="Menu favorites"
        title="Pizza-Shop Comfort, Made Local"
        text="Michael's serves hand-made pizzas, wings, subs, cheesy starters, salads, frozen custard, and weekly specials."
      />
      <div className="section-shell mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {favorites.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden rounded-3xl border border-crust/20 bg-ember shadow-card transition hover:-translate-y-1 hover:border-gold/60"
          >
            {item.dealGraphic ? (
              <MiniDealGraphic />
            ) : (
              <div className="image-wash relative h-56 overflow-hidden bg-coal">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="font-display text-3xl uppercase text-cream">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{item.text}</p>
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
  return (
    <section className="cardboard-texture py-16 text-coal sm:py-20">
      <SectionHeading
        eyebrow="Daily deals"
        title="Fresh Specials Every Day"
        text="Simple weekly deals for pizza nights, family dinners, and custard cravings."
        darkText
      />
      <div className="section-shell mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dailyDeals.map(([day, title, text]) => (
          <article key={day} className="coupon-card rounded-3xl border-2 border-dashed border-sauce/55 bg-paper p-6 shadow-card">
            <p className="inline-flex rounded-full bg-sauce px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cream">
              {day}
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase leading-none">{title}</h3>
            <p className="mt-4 text-sm font-bold leading-6 text-coal/72">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={orderUrl}
          className="inline-flex rounded-full bg-sauce px-8 py-4 text-sm font-black uppercase tracking-wide text-cream shadow-card transition hover:-translate-y-1 hover:bg-tomato"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}

function Custard() {
  return (
    <section id="custard" className="bg-cream py-16 text-coal sm:py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-crust shadow-card">
          <img
            src={images.custard}
            alt="Michael's frozen custard shakes"
            className="h-[440px] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/85 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-coal/82 p-6 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Frozen custard</p>
            <h3 className="mt-2 font-display text-4xl uppercase text-cream">Rotating Flavors</h3>
          </div>
        </div>
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-coal">
            Custard spotlight
          </p>
          <h2 className="mt-5 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Michael&apos;s Famous Frozen Custard
          </h2>
          <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-coal/72">
            Smooth, sweet, and made for pairing with pizza night. Flavors rotate so there is always something new to try.
          </p>
          <a
            href={orderUrl}
            className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-black uppercase tracking-wide text-coal transition hover:-translate-y-1 hover:bg-crust"
          >
            Order Custard
          </a>
        </div>
      </div>
    </section>
  );
}

function LocalStory() {
  return (
    <section className="bg-coal py-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-paper px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-sauce shadow-card">
            Clarksville local legend
          </p>
          <h2 className="mt-5 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Locally Owned. Clarksville-Loved.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/76">
            Michael&apos;s Pizza has been locally owned and operated in Clarksville since February 1, 1985, serving hometown pizza, wings, subs, salads, frozen custard, and daily deals.
          </p>
          <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-3">
            {["Since 1985", "Hometown taste", "Daily value"].map((item) => (
              <div key={item} className="min-w-0 rounded-2xl border border-white/10 bg-ember px-4 py-5 text-center">
                <p className="break-words font-display text-[1.65rem] uppercase leading-[0.95] text-gold sm:text-[1.35rem] md:text-[1.55rem] xl:text-3xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
          <img
            src={images.storefront}
            alt="Michael's Pizza storefront"
            className="h-[430px] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/75 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-16">
      <SectionHeading
        eyebrow="Food gallery"
        title="Hot, Saucy, Sweet, and Local"
        text="Real Michael's food and storefront photos keep the page focused on the shop, not generic stock imagery."
      />
      <div className="section-shell mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <figure
            key={item.label}
            className={`image-wash relative overflow-hidden rounded-3xl border border-white/10 shadow-card ${
              index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={item.src}
              alt={item.label}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute bottom-5 left-5 z-10 font-display text-2xl uppercase text-cream">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="noise py-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Before You Call or Come By"
        text="Quick answers for ordering, hours, custard, deals, and the Clarksville location."
      />
      <div className="section-shell mt-10 max-w-3xl">
        {faqs.map(([question, answer]) => (
          <details key={question} className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-ember">
            <summary className="cursor-pointer px-6 py-5 font-display text-2xl uppercase marker:text-gold">
              {question}
            </summary>
            <p className="px-6 pb-6 leading-7 text-cream/72">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-coal py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex rotate-[-2deg] rounded-full bg-paper px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-sauce shadow-card">
            Location and contact
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-none">
            Find Michael&apos;s in Clarksville
          </h2>
          <div className="mt-8 grid gap-4">
            <InfoCard label="Address" value={addressDisplay} />
            <InfoCard label="Phone" value={phoneDisplay} />
            <InfoCard label="Hours" value="Open every day 11 AM - 9 PM" />
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
  return (
    <footer className="border-t border-white/10 bg-ember py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl uppercase">Michael&apos;s Pizza</p>
          <p className="mt-3 max-w-sm text-sm font-bold leading-6 text-cream/70">
            {addressDisplay} &bull; {phoneDisplay} &bull; Open every day 11 AM - 9 PM
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.16em] text-cream/68" aria-label="Footer navigation">
          <a href={orderUrl} className="hover:text-gold">Order Online</a>
          <a href="#menu" className="hover:text-gold">Menu</a>
          <a href="#deals" className="hover:text-gold">Daily Deals</a>
          <a href="#location" className="hover:text-gold">Location</a>
        </nav>
        <div className="flex gap-3">
          <a
            href={facebookUrl}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-black uppercase text-gold transition hover:border-gold"
            aria-label="Michael's Pizza on Facebook"
          >
            f
          </a>
          <a
            href={instagramUrl}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-black uppercase text-gold transition hover:border-gold"
            aria-label="Michael's Pizza on Instagram"
          >
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
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${darkText ? "text-sauce" : "text-gold"}`}>
        {eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-none sm:text-6xl">
        {title}
      </h2>
      <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${darkText ? "font-bold text-coal/72" : "text-cream/70"}`}>
        {text}
      </p>
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
