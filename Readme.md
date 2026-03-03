# 📚 AskMyNotes  
### Subject-Scoped Study Copilot with Voice Interaction  

> A grounded, citation-backed AI study assistant that helps students learn strictly from their own uploaded notes — with voice interaction and study mode support.

---

## 👥 Team CoCreate

- Pranav Dhekane  
- Madhav Dhobley  
- Manasi Badgujar  

---

## 🚀 Project Overview

**AskMyNotes** is an AI-powered study copilot designed to eliminate hallucinations and ensure grounded responses using a Retrieval-Augmented Generation (RAG) pipeline.

It allows students to:

- Upload notes subject-wise
- Ask questions strictly scoped to a selected subject
- Get citation-backed answers with confidence levels
- Practice using auto-generated study questions
- Interact using voice in Teacher Mode

---

## 🎯 Problem Statement

Students often receive AI-generated answers that:

- Contain hallucinated information  
- Lack citations  
- Are not limited to their study material  
- Provide no confidence or evidence  

**AskMyNotes solves this by ensuring:**

- Strict subject scoping  
- Grounded answers only from uploaded notes  
- Evidence transparency  
- "Not Found" handling when content is unavailable  

---

# 🏗 System Architecture

| Layer | Technology |
|-------|------------|
| Frontend | EJS Web Application |
| Backend | Node.js + Express.js |
| AI Layer | Gemini API |
| Voice Integration | Web Speech API |
| Document Processing | PDF/TXT Parsing & Chunking |
| RAG Pipeline | Vector Embeddings for Retrieval |

---

# ✨ Features

---

## 1️⃣ Three-Subject Setup

- Users can create exactly **3 subjects**
- Multiple file uploads per subject (PDF/TXT)
- Automatic document parsing & chunking
- Subject-wise organization
- Easy subject switching interface

---

## 2️⃣ Grounded Q&A with Citations

Each response includes:

- 📄 Citations (File name + page/section)
- 📊 Confidence Level (High / Medium / Low)
- 🔍 Top Supporting Evidence Snippets
- ❌ Strict "Not Found" response when data is unavailable

No hallucinations.  
No fabricated answers.  
Strictly scoped to selected subject.

---

## 3️⃣ Study Mode

Automatically generates from selected subject notes:

### ✅ 5 Multiple-Choice Questions (MCQs)
- Correct option clearly marked
- Brief explanation provided
- Fully cited from uploaded notes

### ✅ 3 Short-Answer Questions
- Model answers included
- Citation-backed

Designed for self-testing and revision.

---

## 4️⃣ Voice-Based Teacher Mode (Phase 2)

- 🎤 Voice-based question input
- 🔊 Text-to-Speech answer output
- 🔄 Multi-turn conversational context
- 🧠 Natural follow-up handling:
  - "Give an example"
  - "Simplify it"
  - "Compare with previous concept"

All Phase 1 constraints are strictly maintained.

---

# 🔍 How It Works (RAG Pipeline)

1. User uploads notes (PDF/TXT)
2. Documents are parsed and chunked
3. Chunks are converted into vector embeddings
4. User asks a question
5. Relevant chunks are retrieved
6. Gemini generates a grounded answer
7. Citations + evidence snippets are attached

---

# 🛡 Hallucination Prevention

AskMyNotes enforces:

- Subject-scoped retrieval  
- Strict evidence grounding  
- Mandatory citation inclusion  
- Confidence scoring  
- Explicit "Not Found" response when answer does not exist  

---

# 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/pranavdhekane/AskMyNotes-CoCreate.git

# Navigate into the project
cd AskMyNotes-CoCreate

# Install dependencies
npm install

# Start the server
npm start
```