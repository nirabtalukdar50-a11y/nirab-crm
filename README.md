# Nirab CRM - AWS/DevOps Lab

Architecture target: Internet -> ALB -> one EC2 -> Docker Engine/Swarm -> 4 CRM replicas.

This app is intentionally simple and uses in-memory data so the focus is infrastructure, deployment, monitoring and troubleshooting.

## Local run
npm install
npm start
Open http://localhost:3000
Health: http://localhost:3000/api/health

## Docker
Build: docker build -t nirab-crm:1.0 .
Run: docker run --rm -p 3000:3000 nirab-crm:1.0

## Swarm lab
Edit docker-stack.yml and replace YOUR_DOCKERHUB_USERNAME.
Then: docker stack deploy -c docker-stack.yml crm
Check: docker stack services crm
      docker service ls
      docker service ps crm_crm
      docker service logs crm_crm
