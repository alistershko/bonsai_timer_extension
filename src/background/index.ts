// Background Script for Bonsai Timer Extension
// This file serves as the extension's background service worker
// 
// Purpose:
// - Runs independently from the popup UI
// - Manages timer state even when popup is closed
// - Monitors browser tabs for visits to AI websites
// - Handles timer starting, stopping, and completion
// - Communicates with popup via Chrome messaging API
// - Persists timer and collection state in Chrome storage
// 
// Key functionality:
// - Tab URL monitoring to detect AI website visits
// - Timer management (start, pause, reset)
// - Tree collection management
// - Chrome alarm API usage for timer checks
// - Event listeners for extension messaging
