// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
  isSupported,
  Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAqEYAC1isVQRHf8q9LRwKxPARVsWvn9jE",
  authDomain: "tracking-event-server-adjust.firebaseapp.com",
  projectId: "tracking-event-server-adjust",
  storageBucket: "tracking-event-server-adjust.firebasestorage.app",
  messagingSenderId: "911004696184",
  appId: "1:911004696184:web:718e5eb907ea877c44f78d",
  measurementId: "G-79HK0D6V8X",
};

const app = initializeApp(firebaseConfig);

// Initialize analytics with proper error handling
let analytics: Analytics | null = null;
let analyticsInitialized = false;

const initializeAnalytics = async () => {
  try {
    // Check if analytics is supported in current environment
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      analyticsInitialized = true;
      console.log("Firebase Analytics initialized successfully");
    } else {
      console.warn("Firebase Analytics is not supported in this environment");
    }
  } catch (error) {
    console.error("Failed to initialize Firebase Analytics:", error);
  }
};

// Initialize analytics immediately
initializeAnalytics();

export const trackingIntro = async (
  actionName: string,
  actionType: string,
  extraInfo: Record<string, string> = {}
) => {
  try {
    // Wait for analytics to be initialized if it hasn't been yet
    if (!analyticsInitialized && analytics === null) {
      console.log("Waiting for Firebase Analytics to initialize...");
      await initializeAnalytics();

      // Give it a small delay to ensure it's fully ready
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (!analytics) {
      console.warn("Firebase Analytics not available, skipping tracking");
      return;
    }

    const defaultInfo = {
      action_type: actionType,
      action_name: actionName,
    };
    const params = { ...defaultInfo, ...extraInfo };

    console.log("Tracking event:", params);

    // Log the event
    await logEvent(analytics, "screen_active", params);

    console.log("Event tracked successfully");
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

// export const trackingPayment = (
//   actionName: string,
//   extraInfo: Record<string, string> = {}
// ) => {
//   const defaultInfo = {
//     action_type: "paywall",
//     action_name: actionName,
//   };
//   const params = { ...defaultInfo, ...extraInfo };
//   logEvent(analytics, "purchased_new", params);
// };
