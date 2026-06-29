[📊 قراءة باللغة العربية](README_AR.md) | [🇺🇸 English Version](README_EN.md)

---

# AhmedVall PropAI 🤖🏢

**AhmedVall PropAI** is an advanced Multi-Agent AI system designed for the Qatar real estate market. Developed as a capstone project for the *Kaggle 5-Day AI Agents Intensive Course* (by Google & Kaggle), this system automates property validation, market analysis, and investment report generation using cutting-edge LLM orchestration.

---

## 🚀 Overview

The system features three specialized AI agents that collaborate to evaluate properties in Qatar. It interfaces seamlessly with a custom data layer via the **Model Context Protocol (MCP)** to fetch hyper-local real estate metrics (such as price per square meter, rental yields, and demand status) across 18 distinct zones in Qatar, including Lusail Marina, West Bay, and The Pearl.

## 🧠 System Architecture

The project orchestrates three dedicated agents powered by **Gemini 2.0 Flash** and the **Google ADK**:

1. **Valuation Agent 💰**: Validates property details against the MCP server, computes fair market value ranges, and estimates net rental yields.
2. **Market Research Agent 📊**: Analyzes broader neighborhood trends, demand levels, and socio-economic indicators.
3. **Report Generator Agent 📝**: Consolidates findings from previous agents into a structured, professional investment report with an actionable investment verdict.

┌────────────────────────────────────────────────────────┐
│                      QatarMCPServer                    │
│   (Provides Localized Real Estate Metrics & Data)      │
└───────────────────────────┬────────────────────────────┘
│ (Model Context Protocol)
▼
┌────────────────────────────────────────────────────────┐
│                   AhmedVall PropAI                     │
│  ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐  │
│  │ Valuation Agent │ │ Market Research │ │  Report  │  │
│  └─────────────────┘ └─────────────────┘ └──────────┘  │
└────────────────────────────────────────────────────────┘


---

## 🛠️ Tech Stack & Key Concepts

- **Language:** Python 🐍
- **Core LLM:** Google Gemini 2.0 Flash
- **Framework:** Google ADK (Agent Development Kit)
- **Data Integration:** Model Context Protocol (MCP)
- **Environment:** Jupyter Notebook / Interactive Demo

---

## 🌟 Key Features

- **Automated Validation:** Cross-references user inputs with real-time zone data from the `QatarMCPServer`.
- **Multi-Agent Collaboration:** Sequential chain-of-thought execution where agents critique and enrich each other's data.
- **Investment Insights:** Generates definitive investment verdicts (e.g., *Strong Buy*, *Hold*, *Overpriced*) based on mathematical yield calculations and qualitative market trends.
- **Hyper-Local Focus:** Hardcoded and tailored metrics covering 18 key real estate development zones in Qatar.

---

## 📂 Project Structure

```text
├── AhmedVall_PropAI.ipynb   # Main Jupyter Notebook with Agent workflows
├── qatar_mcp_server.py      # Mock MCP Data Layer for 18 Qatar real estate zones
├── requirements.txt         # Project dependencies
└── README.md                # Project documentation
⚙️ Installation & Usage
1. Clone the repository
Bash
git clone [https://github.com/ahmedvall70/AhmedVall_PropAI.git](https://github.com/ahmedvall70/AhmedVall_PropAI.git)
cd AhmedVall_PropAI
2. Install dependencies
Bash
pip install -r requirements.txt
3. Set up your API Key
Ensure you have your Google Gemini API key configured in your environment:

Bash
export GEMINI_API_KEY="your_api_key_here"
4. Run the Project
Open the Jupyter notebook to see the multi-agent system in action:

Bash
jupyter notebook AhmedVall_PropAI.ipynb
📈 Sample Output & Use Cases
The current system has been successfully verified against multiple scenarios, including:

Lusail Marina Area: Evaluating a premium 120 sqm apartment to check its net yield against the zone's high-demand profile.

West Bay District: Delivering precise investment reports on commercial/residential assets based on historical pricing trends.

🎓 Acknowledgments
This project was built during the 5-Day AI Agents Intensive Course hosted by Kaggle and Google (June 2026). Special thanks to the instructors for pioneering the concepts around Agent Tools, Interoperability, and the Model Context Protocol.

Developed with 💻 and ☕ by Ahmed Vall Jemal Dine Sidina