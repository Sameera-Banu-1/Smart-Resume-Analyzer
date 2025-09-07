document.getElementById("resumeUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  // Hide landing page
  document.getElementById("landing-page").style.display = "none";

  // Show results sections
  document.getElementById("results-page").style.display = "flex";
  document.getElementById("keywords").style.display = "block";
  document.getElementById("cta").style.display = "block";

  // Animate score counter (dummy score for now)
  let scoreEl = document.getElementById("score");
  let count = 0;
  let target = Math.floor(Math.random() * 100); // random score (replace later with real AI)
  let interval = setInterval(() => {
    if (count >= target) clearInterval(interval);
    scoreEl.textContent = count + "%";
    count++;
  }, 30);

  // Dummy dynamic analysis (replace later with backend)
  let analysis = [
    "✅ Strong use of technical keywords",
    "⚠️ Add more measurable achievements",
    "⚠️ Missing project details",
    "✅ ATS readable format"
  ];
  let list = document.getElementById("analysis-list");
  list.innerHTML = "";
  analysis.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  // Dummy keywords
  document.getElementById("matched").innerHTML = "<strong style='color:#4caf50;'>Matched:</strong> Java, Python, HTML";
  document.getElementById("missing").innerHTML = "<strong style='color:#ff6f61;'>Missing:</strong> React, SQL";
});
