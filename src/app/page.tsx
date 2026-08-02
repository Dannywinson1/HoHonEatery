"use client";

import { useState } from "react";

const menu = [
  { name: "招牌炭燒薯仔包牛肉漢堡", en: "Charcoal Potato Bun Burger", desc: "焦糖洋蔥、秘製醬汁、香脆薯條", price: "HK$128", art: "burger", tag: "人氣之選" },
  { name: "香脆魚柳漢堡", en: "Fish Burger", desc: "炸魚柳、酸瓜、檸檬他他醬", price: "HK$118", art: "fish", tag: "" },
  { name: "蟹肉芝士長通粉", en: "Cheesy Crabmeat Rigatoni", desc: "鮮甜蟹肉、濃郁芝士醬、香草", price: "HK$148", art: "pasta", tag: "主廚推介" },
  { name: "泰式青咖喱炸生蠔", en: "Fried Oysters, Green Curry", desc: "飽滿生蠔、清新青咖喱醬", price: "HK$120", art: "oyster", tag: "" },
  { name: "香草烤椰菜花", en: "Roasted Cauliflower", desc: "時令蔬菜、紫菜油醋汁", price: "HK$88", art: "veg", tag: "" },
  { name: "青瓜洛神花梳打", en: "Cucumber Roselle Soda", desc: "自家製果露、梳打水、清爽果香", price: "HK$48", art: "drink", tag: "" },
];

function Mark() { return <span className="mark" aria-label="HoHon">HO<br />HON<small>®</small></span>; }
function Navbar() { return <header className="nav"><a href="#top" className="brand"><Mark /><span>好漢<br /><i>EATERY</i></span></a><nav><a href="#menu">餐牌</a><a href="#about">關於好漢</a><a href="#visit">到訪好漢</a></nav><a className="nav-call" href="tel:+85298521144">致電訂座 ↗</a></header>; }
function FoodArt({ type }: { type: string }) { return <div className={`food-art ${type}`}><span className="plate" /><span className="food" /></div>; }
function MenuCard({ item }: { item: (typeof menu)[number] }) { return <article className="menu-card"><FoodArt type={item.art} /><div className="menu-copy">{item.tag && <span className="tag">{item.tag}</span>}<h3>{item.name}</h3><p className="english">{item.en}</p><p>{item.desc}</p><strong>{item.price}</strong></div></article>; }
function ReviewCard({ quote, person }: { quote: string; person: string }) { return <article className="review-card"><div className="stars">★★★★★</div><blockquote>「{quote}」</blockquote><p>— {person}, Google 評論</p></article>; }
function Gallery() { const pieces = ["burger", "drink", "pasta", "oyster", "veg", "fish"]; return <div className="gallery">{pieces.map((piece, i) => <div className={`gallery-item ${i === 1 ? "tall" : ""}`} key={piece}><FoodArt type={piece} />{i === 2 && <span className="gallery-caption">GOOD FOOD.<br />GOOD PEOPLE.<br />GOOD VIBE.</span>}</div>)}</div>; }

export default function Home() {
  const [open, setOpen] = useState(false);
  const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: "HoHon Eatery", image: "https://example.com/hohon-eatery.jpg", telephone: "+85298521144", priceRange: "HK$100–150", address: { "@type": "PostalAddress", streetAddress: "Shop 3, 419M Queen's Rd West, Sai Wan", addressLocality: "Hong Kong", addressCountry: "HK" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "165" }, servesCuisine: "Comfort food" };
  return <main id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Navbar />
    <section className="hero"><div className="hero-copy"><p className="eyebrow">西營盤・小店料理・EST. 2021</p><h1>好漢<br /><em>HoHon</em><br />Eatery</h1><p className="hero-tagline">舒服地食一餐，<br />就是最好的日常。</p><p className="hero-description">一間藏在西營盤的小店，為你準備足料漢堡、手工意粉，還有每一道令人想回來的暖心滋味。</p><div className="actions"><a className="button yellow" href="#menu">看看餐牌 <b>↓</b></a><a className="button outline" href="https://maps.google.com/?q=419M+Queen%27s+Road+West+Hong+Kong" target="_blank">前往好漢 <b>↗</b></a></div></div><div className="hero-visual"><div className="sun" /><div className="hero-badge">好味道<br />好心情<br /><small>GOOD VIBE</small></div><FoodArt type="burger" /><p className="hero-note">炭燒薯仔包<br /><b>招牌牛肉漢堡</b></p></div></section>
    <section className="ticker"><span>GOOD FOOD</span><i>✦</i><span>GOOD PEOPLE</span><i>✦</i><span>GOOD VIBE</span><i>✦</i><span>好漢食堂</span></section>
    <section id="about" className="intro section"><div><p className="eyebrow">ABOUT HOHON</p><h2>認真做好每一餐<br /><em>溫暖日常，簡單快樂。</em></h2></div><div className="intro-right"><p>好漢是一間 12 個座位的鄰里小店。我們相信好食物不需要太複雜：選好的材料、花時間做好醬汁，用真誠招呼每一位來吃飯的人。</p><p>由多汁漢堡到濃郁意粉，每一道都像在朋友家中吃到的好味道。</p><a className="text-link" href="#visit">認識我們的故事 →</a></div></section>
    <section id="menu" className="menu-section section"><div className="section-head"><div><p className="eyebrow">CHEF&apos;S RECOMMENDATIONS</p><h2>今餐食乜好？</h2></div><button className="menu-toggle" onClick={() => setOpen(!open)}>{open ? "收起餐牌" : "瀏覽完整餐牌"} <span>↓</span></button></div><div className={`menu-grid ${open ? "open" : ""}`}>{menu.map((item) => <MenuCard item={item} key={item.name} />)}</div></section>
    <section className="quote-band"><p>「食得舒服，就係好食。」</p><span>— HOHON EATERY</span></section>
    <section className="reviews section"><div className="rating"><p className="eyebrow">LOVE FROM THE NEIGHBOURHOOD</p><h2>街坊的<br />真心好評</h2><div className="rating-number">4.7 <span>★★★★★</span></div><p>Google 評分・165+ 則評價</p><a className="text-link" href="https://www.google.com/search?q=HoHon+Eatery+reviews" target="_blank">Google 看更多評價 →</a></div><div className="review-grid"><ReviewCard quote="牛肉漢堡很多汁，個醬汁比想像中更有驚喜。" person="Carson" /><ReviewCard quote="感覺像在家吃的一餐，很舒服，不像一般餐廳。" person="Michelle" /><ReviewCard quote="店員親切又會介紹，意粉非常有誠意！" person="Elvis" /></div></section>
    <section className="instagram section"><div className="section-head"><div><p className="eyebrow">@HOHONEATERY</p><h2>好漢日常</h2></div><a className="text-link" href="https://www.instagram.com/hohoneatery/" target="_blank">追蹤 Instagram ↗</a></div><Gallery /></section>
    <section id="visit" className="visit"><div className="visit-info"><p className="eyebrow">COME SAY HI</p><h2>來好漢<br />吃一餐吧。</h2><address>香港西環西營盤<br />皇后大道西 419M 號<br />地下 3 號舖</address><div className="hours"><b>營業時間</b><span>星期一　休息</span><span>星期二至日　12:00pm – 10:30pm</span></div><div className="actions"><a className="button yellow" href="https://maps.google.com/?q=419M+Queen%27s+Road+West+Hong+Kong" target="_blank">地圖導航 ↗</a><a className="button light" href="tel:+85298521144">致電 9852 1144</a></div></div><div className="map"><div className="map-lines" /><div className="map-pin">好漢<br /><small>你在這裡</small></div><span>QUEEN&apos;S ROAD WEST</span><p>3 分鐘步行<br />HKU 港鐵站 B2 出口</p></div></section>
    <footer><div className="footer-brand"><Mark /><span>好漢 EATERY</span></div><p>GOOD FOOD. GOOD PEOPLE. GOOD VIBE.</p><a href="https://www.instagram.com/hohoneatery/" target="_blank">Instagram ↗</a><small>© 2026 HoHon Eatery. Sai Ying Pun, Hong Kong.</small></footer>
  </main>;
}
