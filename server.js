const express = require("express");
const axios = require("axios");

const port = 4000;

const app = express();

function onListen() {
  console.log(`Listening on :${port}`);
}

async function onRequestPatients(request, response) {
  const patients = await axios.get(
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
  );

  const data = patients.data;
  response.send(JSON.stringify(data));
}

async function onRequestDoctors(request, response) {
  const doctors = await axios.get(
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
  );

  const data = doctors.data;

  //is this the correct output?? it says array in the rubric

  response.send(JSON.stringify(data));
}

async function onRequestId(request, response) {
  const params = request.params.id;
  const patient = await axios.get(
    `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${params}`
  );
  const data = patient.data;

  response.send(JSON.stringify(data, null, 2));
}

app.get("/patients", onRequestPatients);
app.get("/doctors", onRequestDoctors);
app.get("/patients/:id", onRequestId);
app.listen(port, onListen);
