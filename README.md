# Shopping List Firebase App

A simple real-time shopping list built with Firebase.

## Overview

This application allows you to add and remove items in real time without any page reloads. The list is stored using Firebase Realtime Database, so all changes are immediately reflected for any connected clients.

## Features

- **Live Updates:** Items are automatically synchronized via the Firebase Realtime Database once added or removed.
- **Add Items:** Use the input field and the "أضف للقائمة" button in `index.html` to add items. The item is sent to Firebase using the push method.
- **Remove Items:** Click an item in the list to remove it from Firebase using the remove method.
- **Simple UI:** The layout and input elements are defined in `index.html`, while the styling is handled in `style.css`.
- **Modular Code:** Functions like `addItem` handle DOM updates and data flow with Firebase.

## Setup & Usage

1. Open `index.html` in your browser.
2. Type an item in the text field and click the "أضف للقائمة" button.
3. Observe the newly added item in the list instantly.
4. Click an existing item to remove it from the database and the DOM.

## File References

- `index.html` – Main UI and layout.
- `style.css` – Page styling.
- `script.mjs` – Firebase setup and core list logic.
- `localDB.json` – Local test data (not used by default).
