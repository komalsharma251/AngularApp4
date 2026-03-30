// Defines the structure of an Event object used across the application
export interface EventItem {

  id: number; // Unique identifier for the event

  title: string; // Name/title of the event

  description: string; // Detailed information about the event

  category: string; // Event category (e.g., Technology, Business)

  location: string; // Event location (city or venue)

  startDate: string; // Event start date

  endDate: string; // Event end date

  organizerEmail: string; // Email of the event organizer

  attendees: number; // Number of attendees registered for the event
}