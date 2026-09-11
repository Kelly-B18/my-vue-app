<template>
  <div class="home-container">
    <!-- Left Info Content Column -->
    <div class="info-column">
      <span class="established-text">ESTABLISHED 1905</span>
      <h1 class="main-heading">Exemplary Christian Education for Life.</h1>
      <p class="description-text">
        A leading Christian institution in the Philippines, Central Philippine University 
        nurtures intellectual growth and spiritual development through a commitment to 
        <span class="italic-gold">Scientia et Fides</span> (Science and Faith).
      </p>
      
      <div class="button-group">
        <button class="btn-primary">Explore Academics</button>
        <button class="btn-secondary">Request Information</button>
      </div>

      <!-- Quick Statistics Badges -->
      <div class="stats-grid">
        <div class="stat-item">
          <h3>118+</h3>
          <p>Years of Excellence</p>
        </div>
        <div class="stat-item">
          <h3>20+</h3>
          <p>Academic Programs</p>
        </div>
        <div class="stat-item">
          <h3>5,000+</h3>
          <p>Active Students</p>
        </div>
        <div class="stat-item">
          <h3>20+</h3>
          <p>Partner Institutions</p>
        </div>
      </div>
    </div>

    <!-- Right Brand Card Column with Gradient -->
    <div class="card-column">
      <div class="brand-card">
        <img src="@/assets/cpu-1.jpg" alt="CPU Seal" class="card-logo" />
        <h2 class="card-title">Central Philippine University</h2>
        <p class="card-motto">SCIENTIA ET FIDES</p>
        <div class="quote-box">
          <p class="quote-text">"A Heritage of Excellence, A Future of Faith"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: sans-serif;
  align-items: center;
}

.established-text {
  color: #C8A100;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 14px;
}

.main-heading {
  color: #2B1B5E;
  font-size: 48px;
  margin: 15px 0;
  line-height: 1.2;
}

.description-text {
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.italic-gold {
  color: #2B1B5E;
  font-weight: bold;
  font-style: italic;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
}

.btn-primary {
  background-color: #2B1B5E;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.btn-secondary {
  background-color: transparent;
  color: #2B1B5E;
  border: 2px solid #2B1B5E;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  border-top: 1px solid #E6E6EC;
  padding-top: 20px;
}

.stat-item h3 {
  color: #2B1B5E;
  font-size: 24px;
  margin: 0;
}

.stat-item p {
  color: #7A5A00;
  font-size: 12px;
  margin: 5px 0 0 0;
}

/* Card Styling with Required Gradient Background */
.brand-card {
  background: linear-gradient(135deg, #C8A100 0%, #FFFFFF 100%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card-logo {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.card-title {
  color: #2B1B5E;
  font-size: 28px;
  margin: 0 0 10px 0;
}

.card-motto {
  color: #7A5A00;
  letter-spacing: 3px;
  font-size: 14px;
  margin-bottom: 40px;
}

.quote-text {
  font-style: italic;
  color: #333333;
  font-size: 16px;
}
</style>
