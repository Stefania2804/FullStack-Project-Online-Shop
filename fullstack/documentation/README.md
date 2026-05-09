# SoftPrim Full-Stack Technical Exercise

Mini aplicatie full-stack pentru afisarea unui catalog de produse, dezvoltata folosind React, Node.js, Express si MySQL.

---

# Tehnologii folosite

## Backend
- Node.js v20
- Express.js
- MySQL
- mysql2
- dotenv
- cors

## Frontend
- React
- Vite
- CSS

## Baza de date
- MySQL 8

---

# Functionalitati implementate

## Backend API

### GET /api/categories
- returneaza toate categoriile
- sortare alfabetica
- raspuns JSON

### GET /api/products
- returneaza toate produsele
- JOIN intre products si categories
- filtrare optionala folosind query param:
  
```bash
/api/products?category_id=1
````

* validare pentru category_id
* raspuns 400 Bad Request pentru valori invalide

---

# Frontend

## Catalog produse

* afisare produse sub forma de grid
* afisare:

  * nume produs
  * categorie
  * pret
  * stoc

## Filtrare produse

* dropdown populat dinamic din API
* filtrare dupa categorie

## UI states

* loading state
* error state
* retry button
* empty state

## Produse fara stoc

Produsele cu stock = 0 sunt afisate diferit vizual si contin badge-ul:

```txt
Stoc epuizat
```

Pentru testarea acestei functionalitati, un produs a fost modificat manual in baza de date pentru a avea stock = 0.

---

# Structura proiectului

```txt
fullstack/
├── backend/
├── frontend/
├── setup.sql
|--
└── README.md
```

---

# Instalare si rulare

## 1. Clonare proiect

```bash
git clone <repo-url>
```

---

# 2. Configurare baza de date

## Instalare MySQL

Ubuntu:

```bash
sudo apt update
sudo apt install mysql-server mysql-client
```

---

## Creare baza de date

```bash
sudo mysql
```

```sql
CREATE DATABASE softprim_test
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

---

## Import setup.sql

Din directorul proiectului:

```bash
sudo mysql softprim_test < setup.sql
```

---

## Creare utilizator MySQL

```bash
sudo mysql
```

```sql
CREATE USER 'your_user'@'localhost'
IDENTIFIED BY 'your_password';

GRANT ALL PRIVILEGES
ON softprim_test.*
TO 'your_user'@'localhost';

FLUSH PRIVILEGES;
```

---

# 3. Configurare backend

Intrati in directorul backend:

```bash
cd backend
```

Instalare dependente:

```bash
npm install
```

---

## Configurare .env

Creati fisierul:

```txt
backend/.env
```

folosind:

```txt
backend/.env.example
```

Exemplu:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=softprim_test
```

Fisierul `.env` nu este inclus in repository pentru a evita expunerea credentialelor.

---

# 4. Pornire backend

```bash
npm run dev
```

Backend-ul va rula pe:

```txt
http://localhost:5000
```

---

# 5. Configurare frontend

Intrati in directorul frontend:

```bash
cd frontend
```

Instalare dependente:

```bash
npm install
```

---

# 6. Pornire frontend

```bash
npm run dev
```

Frontend-ul va rula pe:

```txt
http://localhost:5173
```

---

# Exemple apel API

## Categorii

```bash
curl http://localhost:5000/api/categories
```

---

## Produse

```bash
curl http://localhost:5000/api/products
```

---

## Produse filtrate

```bash
curl "http://localhost:5000/api/products?category_id=1"
```

---

## Test validare category_id

```bash
curl "http://localhost:5000/api/products?category_id=abc"
```

---

# Fisiere importante

## .env.example

Contine exemplul de configurare pentru conectarea la baza de date.

## .gitignore

Folosit pentru excluderea:

* node_modules
* .env

din repository.

---

# Posibile imbunatatiri

## Docker / Docker Compose

Aplicatia poate fi containerizata folosind Docker si Docker Compose pentru:

* pornirea automata a backend-ului
* pornirea automata a frontend-ului
* configurarea automata a bazei de date MySQL

Acest lucru ar elimina necesitatea instalarii manuale a MySQL pe sistemul local.

## Functionalitati suplimentare

* pagina individuala produs
* autentificare utilizatori
* sistem comenzi
* deploy productie
* teste automate

---

# Screenshots

Se pot adauga capturi de ecran cu:

* varianta desktop
* varianta responsive/mobile
