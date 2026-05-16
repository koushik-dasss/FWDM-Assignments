import React from "react";
const EventPage = ({ event }) => {
  return (
    <html>
      <head>
        {/* Dynamic Title */}
        <title>{event.title}</title>
        {/* Dynamic Meta Description */}
        <meta
          name="description"
          content={`${event.title} on ${event.date} at ${event.location}. ${event.description}`}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: event.title,
              startDate: event.date,
              location: {
                "@type": "Place",
                name: event.location
              },
              description: event.description
            })
          }}
        />
      </head>
      <body>
        <h1>{event.title}</h1>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Description:</strong> {event.description}
        </p>
      </body>
    </html>
  );
};
export default EventPage;