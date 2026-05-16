require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const EventPage = require("./components/EventPage").default;
const events = require("./data/events");
const app = express();
const PORT = 3000;
// HOME PAGE
app.get("/", (req, res) => {
  let html = `
    <h1>Event Management System</h1>
    <ul>
  `;
  events.forEach(event => {
    html += `
      <li>
        <a href="/event/${event.name}">
          ${event.title}
        </a>
      </li>
    `;
  });
  html += `</ul>`;
  res.send(html);
});
// EVENT PAGE WITH CLEAN URL
app.get("/event/:eventName", (req, res) => {
  const eventName = req.params.eventName;
  const event = events.find(
    e => e.name === eventName
  );
  if (!event) {
    return res.status(404).send("Event Not Found");
  }
  const html = ReactDOMServer.renderToString(
    React.createElement(EventPage, { event })
  );
  res.send("<!DOCTYPE html>" + html);
});

// SITEMAP.XML
app.get("/sitemap.xml", (req, res) => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  events.forEach(event => {
    sitemap += `
      <url>
        <loc>
          http://localhost:3000/event/${event.name}
        </loc>
      </url>
    `;
  });
  sitemap += `</urlset>`;
  res.header("Content-Type", "application/xml");
  res.send(sitemap);
});
// ROBOTS.TXT
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`
User-agent: *
Allow: /
Disallow: /admin
Sitemap: http://localhost:3000/sitemap.xml
  `);
});
// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});