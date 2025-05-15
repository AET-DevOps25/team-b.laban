##  **Initial System Structure**

**Server (Spring Boot REST API)**  
The backend will consist of 3 microservices:

* **Order Service**: Handles orders and routing to pharmacies.  
* **Inventory Service**: Integrates with pharmacy stock levels.  
* **User Service**: Handles authentication and user profiles.

**Client (React Frontend)**

* Interfaces with all backend services.  
* Provides product search, chat with GenAI, checkout flow.

**GenAI Microservice (Python \+ LangChain)**

* Accepts symptom or product queries from the frontend.  
* Uses LangChain with OpenAI API (or local fallback) to suggest OTC medications and offer first-aid advice.

**Database (PostgreSQL)**

* Stores users, orders, pharmacy inventory, and transaction logs.  
* Each Spring Boot service connects to its own schema.

**Communication**

* RESTful APIs between client and server.  
* Internal services may communicate via REST or HTTP calls.  
* GenAI microservice is exposed via REST to server.

\# 📋 First Product Backlog – EcoPharmAI

| ID | Feature/Task                              | Priority | Status | Sprint |  
|----|--------------------------------------------|----------|--------|--------|  
| 1  | Setup Spring Boot skeleton                 | High     | TODO   | 1      |  
| 2  | Implement Order REST API                   | High     | TODO   | 2      |  
| 3  | Setup PostgreSQL & schema for inventory    | High     | TODO   | 1      |  
| 4  | Implement Inventory microservice           | High     | TODO   | 2      |  
| 5  | GenAI LangChain prototype                  | High     | TODO   | 1      |  
| 6  | GenAI REST API wrapper                     | High     | TODO   | 2      |  
| 7  | React app skeleton \+ routing               | Medium   | TODO   | 1      |  
| 8  | Search bar with medication autocomplete    | Medium   | TODO   | 2      |  
| 9  | Chat interface to talk to GenAI            | Medium   | TODO   | 3      |  
| 10 | CI/CD GitHub Actions basic setup           | High     | TODO   | 1      |  
| 11 | Dockerize all services                     | High     | TODO   | 2      |  
| 12 | Setup Prometheus \+ Grafana with dummy svc  | Medium   | TODO   | 3      |  
| 13 | Create and export first Grafana dashboard  | Medium   | TODO   | 4      |

