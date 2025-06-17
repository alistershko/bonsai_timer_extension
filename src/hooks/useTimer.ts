// useTimer Hook
//
// Purpose:
// - Custom React hook for timer state management
// - Communicates with background script via Chrome messaging
// - Provides timer functionality to React components
//
// Exports:
// - useTimer(): Hook function returning timer state and methods
// - useTreeCollection(): Hook function for accessing completed trees
//
// Features:
// - Manages timer state (running, paused, completed)
// - Calculates time remaining and progress percentage
// - Provides methods to start and reset timer
// - Listens for messages from background script
// - Manages tree collection state
