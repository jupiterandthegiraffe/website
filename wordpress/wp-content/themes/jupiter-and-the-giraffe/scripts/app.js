// Global variables
let currentQuestionIndex = 0;
let currentSectionIndex = 0;
let responses = {};
let questionnaireData = null;
let scoringData = null;

// Embedded fallback data
const FALLBACK_DATA = {
  questionnaire: {
    title: "AI Readiness & In-House Tool Development Assessment",
    subtitle:
      "Discover your organization's AI maturity and identify opportunities for custom tool development",
    sections: [
      {
        section_id: 1,
        section_name: "Company Information & Context",
        description: "Understanding your organization's current state",
        questions: [
          {
            id: "Q1",
            question: "What is your company size?",
            type: "single_choice",
            options: [
              "1-10 employees",
              "11-50 employees",
              "51-200 employees",
              "201-1000 employees",
              "1000+ employees",
            ],
          },
          {
            id: "Q2",
            question: "What industry best describes your organization?",
            type: "single_choice",
            options: [
              "Technology/Software",
              "Healthcare",
              "Financial Services",
              "Manufacturing",
              "Retail/E-commerce",
              "Education",
              "Professional Services",
              "Other",
            ],
          },
          {
            id: "Q3",
            question: "What is your current annual revenue range?",
            type: "single_choice",
            options: [
              "Under £1M",
              "£1M - £10M",
              "£10M - £50M",
              "£50M - £250M",
              "£250M+",
            ],
          },
        ],
      },
      {
        section_id: 2,
        section_name: "Current AI Awareness & Usage",
        description: "Assessing your current AI knowledge and adoption",
        questions: [
          {
            id: "Q4",
            question:
              "How would you rate your organization's current AI awareness?",
            type: "likert_scale",
            scale: "1-5",
            labels: [
              "No awareness",
              "Basic awareness",
              "Moderate understanding",
              "Strong understanding",
              "Expert level",
            ],
          },
          {
            id: "Q5",
            question:
              "Which AI tools are currently being used in your organization? (Select all that apply)",
            type: "multiple_choice",
            options: [
              "ChatGPT/LLMs",
              "Microsoft Copilot",
              "Google Workspace AI",
              "Custom AI solutions",
              "AI-powered analytics tools",
              "Marketing automation with AI",
              "Customer service chatbots",
              "None currently",
              "Other",
            ],
          },
          {
            id: "Q6",
            question:
              "What percentage of your staff regularly use AI tools in their work?",
            type: "single_choice",
            options: ["0%", "1-25%", "26-50%", "51-75%", "76-100%"],
          },
        ],
      },
      {
        section_id: 3,
        section_name: "Data & Technology Infrastructure",
        description: "Evaluating your technical foundation for AI",
        questions: [
          {
            id: "Q7",
            question:
              "How would you describe your organization's data quality and accessibility?",
            type: "likert_scale",
            scale: "1-5",
            labels: [
              "Very poor/fragmented",
              "Below average",
              "Average",
              "Good quality/mostly accessible",
              "Excellent/highly organized",
            ],
          },
          {
            id: "Q8",
            question: "What is your current cloud infrastructure setup?",
            type: "single_choice",
            options: [
              "Fully on-premises",
              "Hybrid (some cloud, some on-premises)",
              "Mostly cloud-based",
              "Fully cloud-native",
              "No centralized infrastructure",
            ],
          },
          {
            id: "Q9",
            question: "Do you have dedicated IT/development resources?",
            type: "single_choice",
            options: [
              "No dedicated IT staff",
              "1-2 IT staff members",
              "3-10 IT staff members",
              "10+ IT staff members",
              "Full development team",
            ],
          },
        ],
      },
      {
        section_id: 4,
        section_name: "Process Efficiency & Productivity Challenges",
        description: "Identifying opportunities for improvement",
        questions: [
          {
            id: "Q10",
            question:
              "Which areas of your business face the most significant productivity challenges? (Select top 3)",
            type: "multiple_choice",
            max_selections: 3,
            options: [
              "Data entry and processing",
              "Report generation",
              "Customer service",
              "Project management",
              "Sales processes",
              "Marketing automation",
              "HR and recruitment",
              "Financial operations",
              "Quality control",
              "Supply chain management",
            ],
          },
          {
            id: "Q11",
            question:
              "How much time does your team spend on repetitive, manual tasks weekly?",
            type: "single_choice",
            options: [
              "Less than 5 hours",
              "5-15 hours",
              "15-30 hours",
              "30-50 hours",
              "More than 50 hours",
            ],
          },
          {
            id: "Q12",
            question:
              "What is the estimated cost of manual processes that could potentially be automated?",
            type: "single_choice",
            options: [
              "Under £10k annually",
              "£10k-£50k annually",
              "£50k-£200k annually",
              "£200k-£500k annually",
              "£500k+ annually",
            ],
          },
        ],
      },
      {
        section_id: 5,
        section_name: "Team Skills & Resources",
        description: "Understanding your human capital for AI initiatives",
        questions: [
          {
            id: "Q13",
            question:
              "Does your organization have employees with AI/ML experience?",
            type: "single_choice",
            options: [
              "No AI experience",
              "Basic familiarity",
              "Some employees with moderate experience",
              "Dedicated AI specialists",
              "Advanced AI team",
            ],
          },
          {
            id: "Q14",
            question:
              "How receptive is your team to adopting new AI technologies?",
            type: "likert_scale",
            scale: "1-5",
            labels: [
              "Very resistant",
              "Somewhat resistant",
              "Neutral",
              "Generally receptive",
              "Very enthusiastic",
            ],
          },
          {
            id: "Q15",
            question:
              "What is your budget allocation for technology improvements annually?",
            type: "single_choice",
            options: [
              "Under £25k",
              "£25k-£100k",
              "£100k-£500k",
              "£500k-£1M",
              "£1M+",
            ],
          },
        ],
      },
      {
        section_id: 6,
        section_name: "Strategic Goals & Decision Making",
        description: "Aligning AI initiatives with business objectives",
        questions: [
          {
            id: "Q16",
            question:
              "What are your primary business objectives for the next 2 years? (Select top 3)",
            type: "multiple_choice",
            max_selections: 3,
            options: [
              "Reduce operational costs",
              "Increase revenue",
              "Improve customer satisfaction",
              "Enhance productivity",
              "Scale operations",
              "Enter new markets",
              "Improve decision-making",
              "Strengthen competitive advantage",
            ],
          },
          {
            id: "Q17",
            question:
              "How important is having custom, proprietary solutions vs. off-the-shelf tools?",
            type: "likert_scale",
            scale: "1-5",
            labels: [
              "Prefer off-the-shelf only",
              "Mostly off-the-shelf",
              "Balanced approach",
              "Prefer custom solutions",
              "Custom solutions essential",
            ],
          },
          {
            id: "Q18",
            question:
              "What is your organization's risk tolerance for new technology initiatives?",
            type: "single_choice",
            options: [
              "Very risk-averse",
              "Conservative",
              "Moderate",
              "Risk-tolerant",
              "High-risk/high-reward focused",
            ],
          },
        ],
      },
      {
        section_id: 7,
        section_name: "In-House Development Readiness",
        description: "Assessing capability for custom tool development",
        questions: [
          {
            id: "Q19",
            question:
              "Does your organization have software development capabilities?",
            type: "single_choice",
            options: [
              "No development capabilities",
              "Basic/limited development",
              "Moderate development team",
              "Strong development capabilities",
              "Advanced development organization",
            ],
          },
          {
            id: "Q20",
            question:
              "How long can your organization typically wait for custom tool development?",
            type: "single_choice",
            options: [
              "Need immediate solutions",
              "1-3 months",
              "3-6 months",
              "6-12 months",
              "12+ months acceptable",
            ],
          },
          {
            id: "Q21",
            question:
              "What is your preferred approach for acquiring new business tools?",
            type: "single_choice",
            options: [
              "Always buy existing solutions",
              "Mostly buy, occasionally customize",
              "Mix of buy and build",
              "Mostly build custom solutions",
              "Always build in-house",
            ],
          },
        ],
      },
    ],
  },
};

const FALLBACK_SCORING = {
  scoring: {
    categories: {
      AI_Readiness: 30,
      Technical_Capability: 25,
      Process_Opportunity: 20,
      Resource_Availability: 15,
      Strategic_Alignment: 10,
    },
    results: {
      "0-35": {
        category: "Not Ready for In-House Development",
        description: "Focus on AI education and off-the-shelf solutions",
        recommendations: [
          "Focus on AI education and awareness building",
          "Start with off-the-shelf AI tools",
          "Improve data quality and infrastructure",
          "Build basic technical capabilities",
          "Consider AI consulting services",
        ],
      },
      "36-55": {
        category: "Early Stage - Consider Pilot Projects",
        description: "Ready for AI pilot projects with external support",
        recommendations: [
          "Start with AI pilot projects",
          "Invest in team training and development",
          "Partner with AI specialists for initial projects",
          "Focus on high-impact, low-complexity automations",
          "Develop AI governance framework",
        ],
      },
      "56-75": {
        category: "Ready for Strategic AI Implementation",
        description: "Capable of systematic AI implementation",
        recommendations: [
          "Develop comprehensive AI strategy",
          "Build internal AI capabilities",
          "Consider hybrid approach (build + buy)",
          "Implement process automation systematically",
          "Establish AI center of excellence",
        ],
      },
      "76-100": {
        category: "Prime Candidate for In-House AI Development",
        description: "Ideal for custom AI solution development",
        recommendations: [
          "Build custom AI solutions in-house",
          "Develop proprietary AI capabilities",
          "Create AI-powered competitive advantages",
          "Establish AI research and development",
          "Consider AI product development for external markets",
        ],
      },
    },
  },
};

// Load questionnaire data
async function loadQuestionnaireData() {
  // Start with fallback data immediately
  questionnaireData = FALLBACK_DATA;
  scoringData = FALLBACK_SCORING;
}

// Initialize application
document.addEventListener("DOMContentLoaded", async function () {
  loadQuestionnaireData();
  showPage("welcome-page");
});

// Page management
function showPage(pageId) {
  document.querySelectorAll(".question-page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// Start assessment
function startAssessment() {
  showPage("assessment-page");
  currentQuestionIndex = 0;
  currentSectionIndex = 0;
  responses = {};
  displayQuestion();
}

// Get all questions from all sections
function getAllQuestions() {
  const allQuestions = [];
  if (
    questionnaireData &&
    questionnaireData.questionnaire &&
    questionnaireData.questionnaire.sections
  ) {
    questionnaireData.questionnaire.sections.forEach((section) => {
      section.questions.forEach((question) => {
        allQuestions.push({
          ...question,
          section_id: section.section_id,
          section_name: section.section_name,
          section_description: section.description,
        });
      });
    });
  }
  return allQuestions;
}

// Display current question
function displayQuestion() {
  const allQuestions = getAllQuestions();
  const currentQuestion = allQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    console.error("No current question found", {
      currentQuestionIndex,
      allQuestions,
    });
    return;
  }

  console.log("Displaying question:", currentQuestion);

  // Update progress
  updateProgress();

  // Update section steps
  updateSectionSteps();

  // Display section info
  const sectionTitle = document.getElementById("section-title");
  const sectionDescription = document.getElementById("section-description");

  if (sectionTitle) sectionTitle.textContent = currentQuestion.section_name;
  if (sectionDescription)
    sectionDescription.textContent = currentQuestion.section_description;

  // Display question
  const questionText = document.getElementById("question-text");
  if (questionText) questionText.textContent = currentQuestion.question;

  // Clear previous options
  const optionsContainer = document.getElementById("question-options");
  if (optionsContainer) {
    optionsContainer.innerHTML = "";

    // Create options based on question type
    if (currentQuestion.type === "single_choice") {
      createSingleChoiceOptions(currentQuestion, optionsContainer);
    } else if (currentQuestion.type === "multiple_choice") {
      createMultipleChoiceOptions(currentQuestion, optionsContainer);
    } else if (currentQuestion.type === "likert_scale") {
      createLikertScaleOptions(currentQuestion, optionsContainer);
    }
  }

  // Update navigation buttons
  updateNavigationButtons();

  // Pre-fill existing responses
  prefillResponse(currentQuestion.id);
}

// Create single choice options
function createSingleChoiceOptions(question, container) {
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option-item";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = option;
    input.id = `${question.id}_${index}`;
    input.addEventListener("change", function () {
      handleResponse(question.id, this.value);
    });

    const label = document.createElement("label");
    label.htmlFor = `${question.id}_${index}`;
    label.textContent = option;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    container.appendChild(optionDiv);
  });
}

// Create multiple choice options
function createMultipleChoiceOptions(question, container) {
  // Add instruction text
  const instruction = document.createElement("p");
  instruction.textContent = question.max_selections
    ? `Please select up to ${question.max_selections} options:`
    : "Select all that apply:";
  instruction.style.marginBottom = "var(--space-16)";
  instruction.style.fontWeight = "var(--font-weight-medium)";
  container.appendChild(instruction);

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = question.id;
    input.value = option;
    input.id = `${question.id}_${index}`;
    input.addEventListener("change", function () {
      handleMultipleChoiceResponse(question, this);
    });

    const label = document.createElement("label");
    label.htmlFor = `${question.id}_${index}`;
    label.textContent = option;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    container.appendChild(optionDiv);
  });

  // Add warning div for max selections
  if (question.max_selections) {
    const warningDiv = document.createElement("div");
    warningDiv.id = `warning_${question.id}`;
    warningDiv.className = "selection-warning";
    warningDiv.style.display = "none";
    warningDiv.textContent = `Please select only ${question.max_selections} options.`;
    container.appendChild(warningDiv);
  }
}

// Create Likert scale options
function createLikertScaleOptions(question, container) {
  const scaleContainer = document.createElement("div");
  scaleContainer.className = "likert-scale";

  question.labels.forEach((label, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "likert-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = index + 1;
    input.id = `${question.id}_${index}`;
    input.addEventListener("change", function () {
      handleResponse(question.id, this.value);
    });

    const labelElement = document.createElement("label");
    labelElement.htmlFor = `${question.id}_${index}`;
    labelElement.textContent = label;

    optionDiv.appendChild(input);
    optionDiv.appendChild(labelElement);
    scaleContainer.appendChild(optionDiv);
  });

  container.appendChild(scaleContainer);
}

// Handle single choice and Likert scale responses
function handleResponse(questionId, value) {
  responses[questionId] = value;
  console.log(`Response recorded for ${questionId}:`, value);
  updateNavigationButtons();
}

// Handle multiple choice responses
function handleMultipleChoiceResponse(question, inputElement) {
  if (!responses[question.id]) {
    responses[question.id] = [];
  }

  if (inputElement.checked) {
    responses[question.id].push(inputElement.value);
  } else {
    responses[question.id] = responses[question.id].filter(
      (val) => val !== inputElement.value
    );
  }

  // Check max selections
  if (question.max_selections) {
    const selected = responses[question.id].length;
    const warningDiv = document.getElementById(`warning_${question.id}`);

    if (selected > question.max_selections) {
      // Uncheck this option
      inputElement.checked = false;
      responses[question.id] = responses[question.id].filter(
        (val) => val !== inputElement.value
      );
      if (warningDiv) {
        warningDiv.style.display = "block";
        setTimeout(() => {
          warningDiv.style.display = "none";
        }, 3000);
      }
    } else if (warningDiv) {
      warningDiv.style.display = "none";
    }
  }

  console.log(
    `Multiple choice response for ${question.id}:`,
    responses[question.id]
  );
  updateNavigationButtons();
}

// Prefill existing responses
function prefillResponse(questionId) {
  if (!responses[questionId]) return;

  const allQuestions = getAllQuestions();
  const question = allQuestions.find((q) => q.id === questionId);

  if (question && question.type === "multiple_choice") {
    responses[questionId].forEach((value) => {
      const input = document.querySelector(
        `input[name="${questionId}"][value="${value}"]`
      );
      if (input) input.checked = true;
    });
  } else {
    const input = document.querySelector(
      `input[name="${questionId}"][value="${responses[questionId]}"]`
    );
    if (input) input.checked = true;
  }
}

// Update progress indicators
function updateProgress() {
  const totalQuestions = getAllQuestions().length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const currentQuestionElement = document.getElementById("current-question");
  const currentSectionElement = document.getElementById("current-section");
  const progressFill = document.getElementById("progress-fill");

  if (currentQuestionElement)
    currentQuestionElement.textContent = currentQuestionIndex + 1;
  if (currentSectionElement)
    currentSectionElement.textContent = getCurrentSectionNumber();
  if (progressFill) progressFill.style.width = `${progress}%`;
}

// Get current section number
function getCurrentSectionNumber() {
  const allQuestions = getAllQuestions();
  const currentQuestion = allQuestions[currentQuestionIndex];
  return currentQuestion ? currentQuestion.section_id : 1;
}

// Update section steps
function updateSectionSteps() {
  const currentSectionNum = getCurrentSectionNumber();

  document.querySelectorAll(".step").forEach((step, index) => {
    const sectionNum = index + 1;
    step.classList.remove("active", "completed");

    if (sectionNum < currentSectionNum) {
      step.classList.add("completed");
    } else if (sectionNum === currentSectionNum) {
      step.classList.add("active");
    }
  });
}

// Update navigation buttons
function updateNavigationButtons() {
  const allQuestions = getAllQuestions();
  const currentQuestion = allQuestions[currentQuestionIndex];
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (!currentQuestion || !prevBtn || !nextBtn) return;

  // Previous button
  prevBtn.disabled = currentQuestionIndex === 0;

  // Next button - check if response exists
  const hasResponse =
    responses[currentQuestion.id] !== undefined &&
    responses[currentQuestion.id] !== null &&
    responses[currentQuestion.id] !== "" &&
    (Array.isArray(responses[currentQuestion.id])
      ? responses[currentQuestion.id].length > 0
      : true);

  nextBtn.disabled = !hasResponse;

  // Update next button text
  if (currentQuestionIndex === allQuestions.length - 1) {
    nextBtn.textContent = "View Results";
  } else {
    nextBtn.textContent = "Next";
  }

  console.log(
    `Navigation updated: hasResponse=${hasResponse}, nextBtn.disabled=${nextBtn.disabled}`
  );
}

// Navigation functions
function nextQuestion() {
  const allQuestions = getAllQuestions();

  if (window.dataLayer) {
    const currentQuestion = allQuestions[currentQuestionIndex];
    window.dataLayer.push({
      event: "competency_test_next",
      question_number: currentQuestionIndex + 1,
      question_id: currentQuestion.id,
    });
  }

  if (currentQuestionIndex < allQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // Show results
    calculateAndShowResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// Calculate scores and show results
function calculateAndShowResults() {
  const scores = calculateScores();
  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0
  );
  const category = getScoreCategory(totalScore);

  showPage("results-page");
  displayResults(scores, totalScore, category);
}

// Score calculation
function calculateScores() {
  const scores = {
    AI_Readiness: 0,
    Technical_Capability: 0,
    Process_Opportunity: 0,
    Resource_Availability: 0,
    Strategic_Alignment: 0,
  };

  // AI Readiness (Q4, Q5, Q6) - 30 points max
  if (responses.Q4) {
    scores.AI_Readiness += parseInt(responses.Q4) * 3; // 15 points max
  }

  if (responses.Q5 && Array.isArray(responses.Q5)) {
    const aiToolsScore = Math.min(responses.Q5.length * 2, 10); // 10 points max
    scores.AI_Readiness += aiToolsScore;
  }

  if (responses.Q6) {
    const usageMap = {
      "0%": 0,
      "1-25%": 1,
      "26-50%": 2,
      "51-75%": 4,
      "76-100%": 5,
    };
    scores.AI_Readiness += usageMap[responses.Q6] || 0; // 5 points max
  }

  // Technical Capability (Q7, Q8, Q9, Q19) - 25 points max
  if (responses.Q7) {
    scores.Technical_Capability += parseInt(responses.Q7) * 2; // 10 points max
  }

  if (responses.Q8) {
    const infraMap = {
      "Fully on-premises": 1,
      "Hybrid (some cloud, some on-premises)": 2,
      "Mostly cloud-based": 4,
      "Fully cloud-native": 5,
      "No centralized infrastructure": 0,
    };
    scores.Technical_Capability += infraMap[responses.Q8] || 0; // 5 points max
  }

  if (responses.Q9) {
    const itMap = {
      "No dedicated IT staff": 0,
      "1-2 IT staff members": 1,
      "3-10 IT staff members": 2,
      "10+ IT staff members": 3,
      "Full development team": 5,
    };
    scores.Technical_Capability += itMap[responses.Q9] || 0; // 5 points max
  }

  if (responses.Q19) {
    const devMap = {
      "No development capabilities": 0,
      "Basic/limited development": 1,
      "Moderate development team": 2,
      "Strong development capabilities": 4,
      "Advanced development organization": 5,
    };
    scores.Technical_Capability += devMap[responses.Q19] || 0; // 5 points max
  }

  // Process Opportunity (Q10, Q11, Q12) - 20 points max
  if (responses.Q10 && Array.isArray(responses.Q10)) {
    scores.Process_Opportunity += Math.min(responses.Q10.length * 2, 6); // 6 points max
  }

  if (responses.Q11) {
    const timeMap = {
      "Less than 5 hours": 1,
      "5-15 hours": 2,
      "15-30 hours": 4,
      "30-50 hours": 6,
      "More than 50 hours": 7,
    };
    scores.Process_Opportunity += timeMap[responses.Q11] || 0; // 7 points max
  }

  if (responses.Q12) {
    const costMap = {
      "Under £10k annually": 1,
      "£10k-£50k annually": 2,
      "£50k-£200k annually": 4,
      "£200k-£500k annually": 6,
      "£500k+ annually": 7,
    };
    scores.Process_Opportunity += costMap[responses.Q12] || 0; // 7 points max
  }

  // Resource Availability (Q13, Q14, Q15) - 15 points max
  if (responses.Q13) {
    const expMap = {
      "No AI experience": 0,
      "Basic familiarity": 1,
      "Some employees with moderate experience": 2,
      "Dedicated AI specialists": 4,
      "Advanced AI team": 5,
    };
    scores.Resource_Availability += expMap[responses.Q13] || 0; // 5 points max
  }

  if (responses.Q14) {
    scores.Resource_Availability += parseInt(responses.Q14); // 5 points max
  }

  if (responses.Q15) {
    const budgetMap = {
      "Under £25k": 1,
      "£25k-£100k": 2,
      "£100k-£500k": 3,
      "£500k-£1M": 4,
      "£1M+": 5,
    };
    scores.Resource_Availability += budgetMap[responses.Q15] || 0; // 5 points max
  }

  // Strategic Alignment (Q17, Q18, Q20) - 10 points max
  if (responses.Q17) {
    scores.Strategic_Alignment += parseInt(responses.Q17); // 5 points max
  }

  if (responses.Q18) {
    const riskMap = {
      "Very risk-averse": 1,
      Conservative: 2,
      Moderate: 3,
      "Risk-tolerant": 4,
      "High-risk/high-reward focused": 5,
    };
    scores.Strategic_Alignment += Math.round(
      (riskMap[responses.Q18] || 0) * 0.6
    ); // 3 points max
  }

  if (responses.Q20) {
    const timelineMap = {
      "Need immediate solutions": 0,
      "1-3 months": 0,
      "3-6 months": 1,
      "6-12 months": 1,
      "12+ months acceptable": 2,
    };
    scores.Strategic_Alignment += timelineMap[responses.Q20] || 0; // 2 points max
  }

  return scores;
}

// Get score category
function getScoreCategory(totalScore) {
  if (totalScore <= 35) return "0-35";
  if (totalScore <= 55) return "36-55";
  if (totalScore <= 75) return "56-75";
  return "76-100";
}

// Display results
function displayResults(scores, totalScore, categoryKey) {
  console.log("display results");
  const category = scoringData.scoring.results[categoryKey];

  // Update score display
  const totalScoreElement = document.getElementById("total-score");
  const categoryTitleElement = document.getElementById("score-category-title");
  const categoryDescElement = document.getElementById(
    "score-category-description"
  );

  if (totalScoreElement) totalScoreElement.textContent = Math.round(totalScore);
  if (categoryTitleElement)
    categoryTitleElement.textContent = category.category;
  if (categoryDescElement)
    categoryDescElement.textContent = category.description;

  // Display category scores
  const categoryScoresContainer = document.getElementById("category-scores");
  if (categoryScoresContainer) {
    categoryScoresContainer.innerHTML = "";

    Object.entries(scores).forEach(([categoryName, score]) => {
      const maxScore = scoringData.scoring.categories[categoryName];
      const percentage = Math.round((score / maxScore) * 100);

      const scoreDiv = document.createElement("div");
      scoreDiv.className = "category-score";
      scoreDiv.innerHTML = `
                <span class="category-name">${categoryName.replace(
                  "_",
                  " "
                )}</span>
                <span class="category-value">${Math.round(
                  score
                )}/${maxScore} (${percentage}%)</span>
            `;
      categoryScoresContainer.appendChild(scoreDiv);
    });
  }

  // Display recommendations
  const recommendationsList = document.getElementById("recommendations-list");
  if (recommendationsList) {
    recommendationsList.innerHTML = "";

    category.recommendations.forEach((recommendation) => {
      const li = document.createElement("li");
      li.textContent = recommendation;
      recommendationsList.appendChild(li);
    });
  }

  // Create radar chart
  createRadarChart(scores);
}

// Create radar chart
function createRadarChart(scores) {
  const canvas = document.getElementById("results-radar-chart");
  if (!canvas) return;

  const existingChart = Chart.getChart("results-radar-chart");
  if (existingChart) {
    existingChart.destroy();
  }

  const ctx = canvas.getContext("2d");

  const labels = Object.keys(scores).map((key) => key.replace("_", " "));
  const data = Object.values(scores);
  const maxValues = Object.values(scoringData.scoring.categories);

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Your Score",
          data: data,
          backgroundColor: "rgba(33, 128, 141, 0.2)",
          borderColor: "rgba(33, 128, 141, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(33, 128, 141, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(33, 128, 141, 1)",
        },
        {
          label: "Maximum Score",
          data: maxValues,
          backgroundColor: "rgba(94, 82, 64, 0.1)",
          borderColor: "rgba(94, 82, 64, 0.3)",
          borderWidth: 1,
          pointBackgroundColor: "rgba(94, 82, 64, 0.3)",
          pointBorderColor: "rgba(94, 82, 64, 0.3)",
          pointRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: Math.max(...maxValues),
          ticks: {
            stepSize: 5,
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

// Lead capture functions
function showLeadCapture() {
  const modal = document.getElementById("lead-capture-modal");
  if (modal) modal.classList.add("active");
}

function hideLeadCapture() {
  const modal = document.getElementById("lead-capture-modal");
  if (modal) modal.classList.remove("active");
}

// Submit lead data to Webhook
async function submitToWebhook(leadData) {
  const webhookUrl = 'https://n8n.jupiterandthegiraffe.com/webhook-test/df19fb64-909f-46ee-9b50-ccf18feb8c2e';

  // Calculate assessment results to include in the payload
  const totalScore = Object.values(leadData.scores).reduce(
    (sum, score) => sum + score,
    0
  );
  const category = getScoreCategory(totalScore);
  const categoryData = scoringData.scoring.results[category];

  const payload = {
    ...leadData,
    totalScore: Math.round(totalScore),
    scoreCategory: categoryData.category,
    scoreDescription: categoryData.description,
    recommendations: categoryData.recommendations,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Webhook submission failed with status: ${response.status}`, await response.text());
    }
  } catch (error) {
    console.error('Error submitting to webhook:', error);
  }
}

// Handle lead form submission
document.addEventListener("DOMContentLoaded", function () {
  const leadForm = document.getElementById("lead-form");
  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const leadData = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        phone: formData.get("phone"),
        newsletter: formData.get("newsletter") === "on",
        scores: calculateScores(),
        responses: responses,
        timestamp: new Date().toISOString(),
      };

      console.log("Lead captured:", leadData);

      // Submit to Webhook (fire and forget)
      submitToWebhook(leadData);

      // Hide modal and show thank you page immediately
      hideLeadCapture();
      showThankYouPage();
    });
  }
});

// Show thank you page
function showThankYouPage() {
  const totalScore = Object.values(calculateScores()).reduce(
    (sum, score) => sum + score,
    0
  );
  const category = getScoreCategory(totalScore);
  const categoryData = scoringData.scoring.results[category];

  const summaryScore = document.getElementById("summary-score");
  const summaryCategory = document.getElementById("summary-category");

  if (summaryScore) summaryScore.textContent = Math.round(totalScore);
  if (summaryCategory) summaryCategory.textContent = categoryData.category;

  showPage("thank-you-page");
}

// Print results
function printResults() {
  window.print();
}

// Restart assessment
function restartAssessment() {
  currentQuestionIndex = 0;
  currentSectionIndex = 0;
  responses = {};
  showPage("welcome-page");
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("lead-capture-modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        hideLeadCapture();
      }
    });
  }
});
