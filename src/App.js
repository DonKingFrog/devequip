import { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.js";
import RenderHomePage from "./Pages/Home.js";
import RenderBlogPage from './Pages/Blog.js';
import RenderContactPage from './Pages/Contact.js'
import RenderNewsPost from "./Component/Newsroom.js";
import RenderProductPage from "./Component/Products.js";
import RenderMarketplacePage from './Pages/Marketplace.js';
import RenderAboutPage from './Pages/About.js';
import RenderServicesPage from "./Pages/Services.js";
import RenderFAQPage from './Pages/FAQ.js';

import Loading from "./Component/Loading.js";

function HomePage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderHomePage />
      <Footer />
    </Fragment>
  );
}

function MarketplacePage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderMarketplacePage />
      <Footer />
    </Fragment>
  );
}

function BlogPage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderBlogPage />
      <Footer />
    </Fragment>
  );
}

function ContactPage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderContactPage />
      <Footer />
    </Fragment>
  );
}

function NewsroomPage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderNewsPost />
      <Footer />
    </Fragment>
  );
}

function ProductPage() {
  return (
    <Fragment>
      <Loading />
      <Navbar />
      <RenderProductPage />
      <Footer />
    </Fragment>
  );
}

function DiscordPage() {
  return(
    <Fragment>
      <Loading />
      <meta http-equiv="refresh" content="0; URL=https://discord.gg/QBdH2p7QBr" />
    </Fragment>
  );
}

function AboutPage() {
  return(
    <Fragment>
      <Loading />
      <Navbar />
      <RenderAboutPage />
      <Footer />
    </Fragment>
  )
}

function ServicesPage() {
  return(
    <Fragment>
      <Loading />
      <Navbar />
      <RenderServicesPage />
      <Footer />
    </Fragment>
  )
}

function FAQPage() {
  return(
    <Fragment>
      <Loading />
      <Navbar />
      <RenderFAQPage />
      <Footer />
    </Fragment>
  )
}

export {
  HomePage,
  MarketplacePage,
  BlogPage,
  ContactPage,
  NewsroomPage,
  ProductPage,
  DiscordPage,
  AboutPage,
  ServicesPage,
  FAQPage,
}