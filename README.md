# Text Summarization Web App

## 📌 Project Description
This is a simple and efficient **Text Summarization Web Application** built using **Flask**, **Sumy**, **NLTK**, and **Bootstrap**. Users can enter a long piece of text, and the application will generate a concise summary using **LSA (Latent Semantic Analysis) algorithm** from the Sumy library.

The app features a **modern, clean UI**, and includes a **Clear button** to easily reset the input field for a new summarization.

## 🚀 Features
- 📜 **Text Summarization** using Sumy (LSA Algorithm)
- 🎨 **Modern UI** with Bootstrap
- 🖋 **Textarea with word limit support**
- 🗑 **Clear button** to reset input field
- 🔄 **Page maintains summary after submission**
- 📡 **Flask backend** for API request handling

---

## 🛠 Technologies Used
- **Flask** (Python Backend)
- **Sumy** (Text Summarization Library)
- **NLTK** (Natural Language Processing)
- **Bootstrap** (Frontend Framework)
- **HTML, CSS, JavaScript** (Web Technologies)

---

## 📂 Project Structure
```
TextSummarization/
│
├── app.py                  # Main Flask Application
├── summarizer.py           # Summarization Logic
├── requirements.txt        # Required dependencies
├── templates/
│   └── index.html          # Frontend HTML file
├── static/
│   ├── css/
│   │   └── style.css       # Custom Styles
│   └── js/
│       └── script.js       # Custom JavaScript
└── README.md               # Project Documentation
```

---

## ⚙️ Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/bektas-sari/text-summarization.git
cd text-summarization
```

### **2. Create a Virtual Environment**
```bash
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate    # For Windows
```

### **3. Install Dependencies**
```bash
pip install -r requirements.txt
```

### **4. Download NLTK Tokenizer**
```bash
python -c "import nltk; nltk.download('punkt')"
```

### **5. Run the Flask Application**
```bash
python app.py
```
Open the app in your browser: `http://127.0.0.1:5000/`

---

## 🎯 Usage
1. Paste or type a long text into the input box.
2. Click on the **"Summarize"** button.
3. The summarized text will appear below.
4. Click the **"Clear"** button to reset the input field and start again.

---

## 📜 Example Output
**Input:**
> "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals."

**Summarized Output:**
> "AI is intelligence shown by machines, opposite to the natural intelligence of animals and humans. AI research studies intelligent agents that perceive the environment and take actions to maximize goal achievement."

---

## 📌 Future Enhancements
- ✅ Add **BERT-based** summarization (Hugging Face Transformers)
- ✅ Implement **API version** for programmatic access
- ✅ Allow **multiple summarization algorithms** selection

---

## 🏆 Contributing
Feel free to contribute to this project by **opening issues, improving the UI, or adding new summarization methods**!

To contribute:
1. **Fork the repository**
2. **Create a new branch** (`feature-improvement`)
3. **Commit your changes**
4. **Submit a Pull Request** 🎉

---

## 📄 License
This project is licensed under the **MIT License** - you are free to use and modify it. 🚀

---

## ⭐ Contact
For any issues or suggestions, feel free to reach out:
📧 **Email:** bektas.sari@gmail.com
🌐 **GitHub:** [https://github.com/bektas-sari]

**If you liked this project, give it a ⭐ on GitHub!**

