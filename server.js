const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
let leads = [
  { id: 1, name: 'Amit Sharma', email: 'amit@example.com', status: 'New' },
  { id: 2, name: 'Priya Das', email: 'priya@example.com', status: 'Contacted' }
];
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/health', (req,res)=>res.json({status:'UP', service:'nirab-crm', time:new Date().toISOString()}));
app.get('/api/leads', (req,res)=>res.json(leads));
app.post('/api/leads', (req,res)=>{
  const {name,email}=req.body;
  if(!name || !email) return res.status(400).json({error:'name and email are required'});
  const lead={id:Date.now(),name,email,status:'New'}; leads.push(lead); res.status(201).json(lead);
});
app.patch('/api/leads/:id', (req,res)=>{
  const lead=leads.find(x=>x.id===Number(req.params.id));
  if(!lead) return res.status(404).json({error:'Lead not found'});
  if(req.body.status) lead.status=req.body.status;
  res.json(lead);
});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT,'0.0.0.0',()=>console.log(`CRM listening on ${PORT}`));
