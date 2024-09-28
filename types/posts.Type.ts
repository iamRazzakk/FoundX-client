export interface IPosts {
  _id: string; // Unique identifier for the item
  title: string; // Title of the item
  description: string; // Description of the item
  images: string[]; // Array of image URLs
  location: string; // Location where the item was found
  city: string; // City where the item was found
  dateFound: string; // Date the item was found in ISO format
  status: "AVAILABLE" | "UNAVAILABLE"; // Status of the item
  isReported: boolean; // Indicates if the item has been reported
  reportCount: number; // Number of reports for the item
  category: string | null; // Category of the item or null if not set
  user: string | null; // User who posted the item or null if not set
  questions: string[]; // Array of questions related to the item
  createdAt: string; // Creation timestamp in ISO format
  updatedAt: string; // Last updated timestamp in ISO format
  __v: number; // Version key (usually for MongoDB)
}
