<?php get_header( 'page-ai-competency-test' ); ?>

        <!-- Welcome Page -->
        <div id="welcome-page" class="question-page active">
            <div class="hero-section">
                <div class="container">
                    <div class="hero-content">
                        <div class="logo-section" style="
                background-color: #cacaca;
                border-radius: 18px;
                padding: 10px;
                color: #000000;
                background-image: linear-gradient(
                  176deg,
                  rgb(255, 255, 255) 4%,
                  rgb(164, 164, 164) 100%
                );
              ">
                            <h1 class="company-name"><?php _e( 'Jupiter and the Giraffe', 'jupiter_and_the_giraffe' ); ?></h1>
                            <div class="logo-subtitle">
                                <?php _e( 'AI Strategy & Development', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                        </div>
                        <div class="hero-main" style="
                background-color: rgba(22, 22, 22, 0.81);
                backdrop-filter: blur(10px);
                padding: 20px;
                border-radius: 12px;
              ">
                            <h2 class="hero-title"> <?php _e( 'Discover Your AI Readiness & In-House Tool Development', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'Opportunities', 'jupiter_and_the_giraffe' ); ?> </h2>
                            <p class="hero-subtitle"> <?php _e( 'Take our comprehensive assessment to understand your', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'organization\'s AI maturity and identify opportunities for custom', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'tool development', 'jupiter_and_the_giraffe' ); ?> </p>
                            <div class="assessment-overview">
                                <div class="overview-stats">
                                    <div style="
                      display: flex;
                      gap: 20px;
                      background-color: #2b2b2b;
                      padding: 14px 24px;
                      border: 2px solid #909090;
                      border-radius: 26px;
                    ">
                                        <div class="stat-item"><span class="stat-number"><?php _e( '7', 'jupiter_and_the_giraffe' ); ?></span>
                                            <span class="stat-label"><?php _e( 'Sections', 'jupiter_and_the_giraffe' ); ?></span>
                                        </div>
                                        <div class="stat-item"><span class="stat-number"><?php _e( '21', 'jupiter_and_the_giraffe' ); ?></span>
                                            <span class="stat-label"><?php _e( 'Questions', 'jupiter_and_the_giraffe' ); ?></span>
                                        </div>
                                        <div class="stat-item"><span class="stat-number"><?php _e( '10-15', 'jupiter_and_the_giraffe' ); ?></span>
                                            <span class="stat-label"><?php _e( 'Minutes', 'jupiter_and_the_giraffe' ); ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn--primary btn--lg" onclick="startAssessment()">
                                <?php _e( 'Start Assessment', 'jupiter_and_the_giraffe' ); ?>
                            </button>
                            <div class="assessment-topics">
                                <h3><?php _e( 'What this assessment covers:', 'jupiter_and_the_giraffe' ); ?></h3>
                                <ul>
                                    <li>
                                        <?php _e( 'Current AI awareness and tool usage', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'Technology infrastructure readiness', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'Process automation opportunities', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'Team capabilities and resources', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'Strategic alignment for AI initiatives', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'In-house development readiness', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                    <li>
                                        <?php _e( 'Personalized recommendations', 'jupiter_and_the_giraffe' ); ?>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Assessment Page -->
        <div id="assessment-page" class="question-page">
            <div class="container">
                <div class="assessment-container">
                    <!-- Progress Header -->
                    <div class="progress-header">
                        <div class="progress-info"><span class="question-counter"><?php _e( 'Question', 'jupiter_and_the_giraffe' ); ?> <span id="current-question"><?php _e( '1', 'jupiter_and_the_giraffe' ); ?></span> <?php _e( 'of 21', 'jupiter_and_the_giraffe' ); ?></span>
                            <span class="section-info"><?php _e( 'Section', 'jupiter_and_the_giraffe' ); ?> <span id="current-section"><?php _e( '1', 'jupiter_and_the_giraffe' ); ?></span> <?php _e( 'of 7', 'jupiter_and_the_giraffe' ); ?></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-fill"></div>
                        </div>
                    </div>
                    <!-- Section Progress -->
                    <div class="section-progress">
                        <div class="section-steps">
                            <div class="step active" data-section="1">
                                <?php _e( '1', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="2">
                                <?php _e( '2', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="3">
                                <?php _e( '3', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="4">
                                <?php _e( '4', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="5">
                                <?php _e( '5', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="6">
                                <?php _e( '6', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="step" data-section="7">
                                <?php _e( '7', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                        </div>
                    </div>
                    <!-- Question Card -->
                    <div class="question-card">
                        <div class="section-header">
                            <h3 id="section-title"></h3>
                            <p id="section-description"></p>
                        </div>
                        <div class="question-content">
                            <h4 id="question-text"></h4>
                            <div id="question-options" class="question-options"></div>
                        </div>
                    </div>
                    <!-- Navigation -->
                    <div class="navigation">
                        <button class="btn btn--outline" id="prev-btn" onclick="previousQuestion()" disabled>
                            <?php _e( 'Previous', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                        <button class="btn btn--primary" id="next-btn" onclick="nextQuestion()" disabled>
                            <?php _e( 'Next', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Results Page -->
        <div id="results-page" class="question-page">
            <div class="container">
                <div class="results-container">
                    <div class="results-header">
                        <h2><?php _e( 'Your AI Readiness Assessment Results', 'jupiter_and_the_giraffe' ); ?></h2>
                        <div class="overall-score">
                            <div class="score-circle"><span id="total-score"><?php _e( '0', 'jupiter_and_the_giraffe' ); ?></span>
                                <span class="score-max"><?php _e( '/100', 'jupiter_and_the_giraffe' ); ?></span>
                            </div>
                            <div class="score-category">
                                <h3 id="score-category-title"></h3>
                                <p id="score-category-description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="results-grid">
                        <div class="results-chart">
                            <h4><?php _e( 'Detailed Breakdown', 'jupiter_and_the_giraffe' ); ?></h4>
                            <div class="chart-container" style="position: relative; height: 400px; width: 100%">
                                <canvas id="results-radar-chart"></canvas>
                            </div>
                        </div>
                        <div class="results-details">
                            <div class="category-scores" id="category-scores"></div>
                        </div>
                    </div>
                    <div class="recommendations">
                        <h3><?php _e( 'Personalized Recommendations', 'jupiter_and_the_giraffe' ); ?></h3>
                        <ul id="recommendations-list"></ul>
                    </div>
                    <div class="next-steps">
                        <h3><?php _e( 'Ready to take the next step?', 'jupiter_and_the_giraffe' ); ?></h3>
                        <p> <?php _e( 'Get a detailed analysis of your results and personalized AI', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'strategy recommendations.', 'jupiter_and_the_giraffe' ); ?> </p>
                        <button class="btn btn--primary btn--lg" onclick="showLeadCapture()">
                            <?php _e( 'Get Your Detailed Report', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Lead Capture Modal -->
        <div id="lead-capture-modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3><?php _e( 'Get Your Detailed AI Readiness Report', 'jupiter_and_the_giraffe' ); ?></h3>
                    <button class="modal-close" onclick="hideLeadCapture()">
                        &times;
</button>
                </div>
                <div class="modal-body">
                    <form id="lead-form">
                        <div class="form-group">
                            <label class="form-label" for="name">
                                <?php _e( 'Full Name *', 'jupiter_and_the_giraffe' ); ?>
                            </label>
                            <input type="text" id="name" name="name" class="form-control" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email">
                                <?php _e( 'Email Address *', 'jupiter_and_the_giraffe' ); ?>
                            </label>
                            <input type="email" id="email" name="email" class="form-control" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="company">
                                <?php _e( 'Company Name *', 'jupiter_and_the_giraffe' ); ?>
                            </label>
                            <input type="text" id="company" name="company" class="form-control" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="phone">
                                <?php _e( 'Phone Number (Optional)', 'jupiter_and_the_giraffe' ); ?>
                            </label>
                            <input type="tel" id="phone" name="phone" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="newsletter"/>
                                <?php _e( 'Subscribe to our AI insights newsletter', 'jupiter_and_the_giraffe' ); ?>
                            </label>
                        </div>
                        <p class="privacy-notice"> <?php _e( 'We respect your privacy. Your information will only be used to', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'provide your detailed report and occasional relevant insights.', 'jupiter_and_the_giraffe' ); ?> </p>
                        <button type="submit" class="btn btn--primary btn--full-width">
                            <?php _e( 'Download My Report', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <!-- Thank You Page -->
        <div id="thank-you-page" class="question-page">
            <div class="container">
                <div class="thank-you-content">
                    <div class="success-icon">✓</div>
                    <h2><?php _e( 'Thank You!', 'jupiter_and_the_giraffe' ); ?></h2>
                    <p class="thank-you-message"> <?php _e( 'Your AI readiness assessment is complete. We\'ll send your detailed', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'report to your email shortly.', 'jupiter_and_the_giraffe' ); ?> </p>
                    <div class="summary-card">
                        <h3><?php _e( 'Your Assessment Summary', 'jupiter_and_the_giraffe' ); ?></h3>
                        <div class="summary-score"><span class="summary-number" id="summary-score"><?php _e( '0', 'jupiter_and_the_giraffe' ); ?></span>
                            <?php _e( '/100', 'jupiter_and_the_giraffe' ); ?>
                        </div>
                        <p class="summary-category" id="summary-category"></p>
                    </div>
                    <div class="contact-info">
                        <h3><?php _e( 'Ready to discuss your AI strategy?', 'jupiter_and_the_giraffe' ); ?></h3>
                        <p> <?php _e( 'Our team at Jupiter and the Giraffe is here to help you transform', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'your AI potential into reality.', 'jupiter_and_the_giraffe' ); ?> </p>
                        <div class="contact-details">
                            <div class="contact-item"><strong><?php _e( 'Email:', 'jupiter_and_the_giraffe' ); ?></strong> 
                                <?php _e( 'hello@jupiterandthegiraffe.com', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="contact-item"><strong><?php _e( 'Website:', 'jupiter_and_the_giraffe' ); ?> </strong>
                                <a href="https://jupiterandthegiraffe.com" target="_blank"><?php _e( 'jupiterandthegiraffe.com', 'jupiter_and_the_giraffe' ); ?></a>
                            </div>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn--primary" onclick="printResults()">
                            <?php _e( 'Print Results', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                        <button class="btn btn--outline" onclick="restartAssessment()">
                            <?php _e( 'Take Assessment Again', 'jupiter_and_the_giraffe' ); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>        

<?php get_footer( 'page-ai-competency-test' ); ?>