
# 🗞️ BuzzQuest Daily News App

**BuzzQuest** is a real-time, responsive news aggregator web app built using **HTML**, **CSS**, and **JavaScript**. It allows users to fetch the latest headlines from NewsAPI, search for specific topics, and browse news by category with a modern, mobile-friendly UI.

---

## 🚀 Features

- **Real-Time News Fetching**: Automatically pulls the latest news articles from [NewsAPI](https://newsapi.org).
- **Search Functionality**: Search for any topic using the built-in search bar.
- **Category Navigation**: Quickly switch between different categories such as General, Technology, Sports, Health, and more.
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
- **Loading Indicator**: A loading spinner appears during API calls for better user experience.
- **Modern UI**: Clean, intuitive, and visually appealing interface with hover effects and transitions.

---

## 📁 File Structure

```
BuzzQuest-Daily-News-App/
├── index.html       # Main HTML structure
├── script.js        # JavaScript logic for API calls and rendering
└── style.css        # Styling and responsive design
```

---

## 🛠️ How to Run

### 1. Prerequisites
- A modern browser (Chrome, Firefox, Edge, etc.)
- Internet connection (required to fetch news from NewsAPI)
- *(Optional)* A free [NewsAPI key](https://newsapi.org/) if you want to use your own API key

### 2. Clone the Repository

```bash
git clone <your-repository-url>
cd BuzzQuest-Daily-News-App
```

### 3. Launch the App

You can open the app in any of the following ways:

✅ **A. Double-Click**: Open `index.html` directly by double-clicking in your file explorer.

✅ **B. Drag-and-Drop**: Drag the `index.html` file into any browser window.

✅ **C. Open File via Browser**: Open your browser and go to: `File > Open File → Choose index.html`

---

## 🧪 How to Use

- **Default Load**: Loads and displays latest headlines for the default category or region (e.g., “India”).
- **Category Buttons**: Click on any category to fetch relevant news (e.g., Technology, Sports).
- **Search**: Type a keyword (e.g., "SpaceX", "Elections") in the search bar and press Enter or click the search icon.
- **Article Cards**: Each article is displayed with an image, title, source, date, and short description.
- **Read Full Article**: Click any article card to open the full article in a new browser tab.
- **Loading Spinner**: A spinner appears when data is being fetched from the API.

---

## ⚙️ Customization

### 🔐 API Key

Open `script.js`

Replace the value of `const API_KEY` with your personal NewsAPI key:

```js
const API_KEY = "your_api_key_here";
```

You can get your own free key from [https://newsapi.org/](https://newsapi.org/).

### 🎨 Styling

Modify `style.css` to customize:

- Color palette
- Fonts (default: Poppins & Roboto via Google Fonts)
- Card layout
- Responsive behavior

### 🧭 Categories

To add or change categories:

- Edit the buttons in `index.html`
- Update their click handlers in `script.js`

---

## 🖼️ UI Snapshot

```
+------------------------------------------------------+
| 📰 BuzzQuest Daily News App                         |
|------------------------------------------------------|
| [Search Bar 🔍] [General] [Tech] [Sports] [Health]...|
|------------------------------------------------------|
| [🖼️] Article Image                                   |
| 🗞️ Title of the Article                              |
| 🕒 Source | Date                                     |
| 📃 Description snippet...                            |
+------------------------------------------------------+
```
![image](https://github.com/user-attachments/assets/ebd50218-42f8-456c-b8f8-147fbb3d1ae6)


---

## 📚 References

- [NewsAPI.org](https://newsapi.org) – Real-time news data provider
- [Google Fonts](https://fonts.google.com) – Poppins and Roboto fonts

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute it. See LICENSE file for details.

---

## 🤝 Contributing

Have an idea or improvement?
Feel free to fork this repo, open an issue, or submit a pull request!

**Stay informed. Stay curious. Stay Buzzing with BuzzQuest! 🐝**
