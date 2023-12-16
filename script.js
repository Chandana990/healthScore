const { GoogleGenerativeAI } = require("@google/generative-ai");


// Access your API key as an environment variable (see "Set up your API key" above)
const apiKey=AIzaSyAGl86AmQBq_ZU_qQ6k-tkvW7o9-tXnM7k;
const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const ageInput = document.getElementById("age").value;
  const genderInput = document.getElementById("gender").value;
  const heightInput=document.getElementById("height").value;
  const weightInput=document.getElementById("weight").value;
  const fvInput=document.getElementById("fvcount").value;
  const fInput=document.getElementById("pcount").value;
  const exerciseInput=document.getElementById("exercise").value;
  const famInput=document.getElementById("fam").value;
  const otherInput=document.getElementById("other").value;
  const rumInput=document.getElementById("rum").value;
  const sleepInput=document.getElementById("sleep").value;
  const sickInput=document.getElementById("sick").value;
  const prompt = `Here's a scenario. A person of age:${ageInput} and gender:${genderInput} of height:${heightInput} and weight:${weightInput}, who takes number of servings of fruits and vegetables:${fvInput}, number of servings of processed foods:${fInput}, does exercise:${exerciseInput} times per week for atleast 30 minutes, having family history of obesity as ${famInput} and other health conditions like ${otherInput} that contribute to obesity, has habit of alcohol as ${rumInput}, sleeps for ${sleepInput} hours,has been sick since last 20 days as ${sickInput}. Generate personalized suggestions to have a control on their obesity.`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
run();